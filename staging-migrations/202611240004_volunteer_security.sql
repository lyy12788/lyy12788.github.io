create schema volunteer_private;
revoke all on schema volunteer_private from public, anon, authenticated;

-- Only aggregate counts are public. The private function can read ballots
-- across users, but exposes no account identifier or individual ballot.
create function volunteer_private.poll_totals()
returns table (poll_id bigint, choice integer, votes bigint)
language sql stable security definer set search_path = ''
as $$
select p.id as poll_id, i.choice, count(v.choice) as votes
from public.volunteer_polls p
cross join lateral generate_subscripts(p.options, 1) i(choice)
left join public.volunteer_votes v on v.poll_id = p.id and v.choice = i.choice
where p.published
group by p.id, i.choice;
$$;

-- Exclude private security feedback from public scores and honors.
create function volunteer_private.contribution_ranks()
returns table (rank bigint, display_name text, points bigint, honor text)
language sql stable security definer set search_path = ''
as $$
with scores as (
  select r.user_id, sum(r.points) as points, f.display_name
  from public.volunteer_rewards r
  join public.site_suggestions s on s.id = r.suggestion_id
  join public.forum_profiles f on f.user_id = r.user_id
  where s.category <> '安全漏洞' and f.deletion_finalized_at is null
    and f.deletion_requested_at is null and nullif(btrim(f.display_name), '') is not null
  group by r.user_id, f.display_name
)
select rank() over (order by points desc) as rank, display_name, points,
  case when points >= 300 then 'gold' when points >= 100 then 'silver'
       when points >= 20 then 'bronze' else null end as honor
from scores;
$$;

revoke execute on function volunteer_private.poll_totals(), volunteer_private.contribution_ranks() from public;
grant execute on function volunteer_private.poll_totals(), volunteer_private.contribution_ranks() to anon, authenticated;

create or replace view public.volunteer_poll_results
with (security_invoker = true, security_barrier = true) as
select * from volunteer_private.poll_totals();

create or replace view public.volunteer_leaderboard
with (security_invoker = true, security_barrier = true) as
select * from volunteer_private.contribution_ranks();

create or replace function volunteer_private.award_reward(
  p_id uuid, p_points integer, p_level smallint, p_reason text
) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  s public.site_suggestions%rowtype;
  prior_level smallint;
begin
  if auth.uid() is null or not public.is_site_admin() then
    raise exception 'Forbidden';
  end if;
  select * into s from public.site_suggestions where id = p_id for update;
  if not found or s.user_id is null or s.user_id = auth.uid()
     or s.status not in ('accepted','in_progress','done') then
    raise exception 'Ineligible suggestion';
  end if;
  if p_points is null or p_points not between 1 and 300
     or char_length(btrim(coalesce(p_reason, ''))) not between 4 and 300 then
    raise exception 'Invalid reward';
  end if;
  insert into public.member_progress(user_id) values (s.user_id) on conflict do nothing;
  select coalesce(level_override, case
    when points >= 5000 then 5 when points >= 1500 then 4
    when points >= 500 then 3 when points >= 100 then 2 else 1 end)
    into prior_level
    from public.member_progress where user_id = s.user_id for update;
  if p_level is not null and (p_level not between 2 and 5 or p_level <= coalesce(prior_level, 1)) then
    raise exception 'Invalid promotion';
  end if;
  insert into public.volunteer_rewards(suggestion_id,user_id,actor_id,points,level,reason)
  values (p_id,s.user_id,auth.uid(),p_points,p_level,btrim(p_reason));
  perform public.admin_update_member(s.user_id,p_level,null,p_points,'志愿者贡献：'||btrim(p_reason));
  insert into public.member_notifications(recipient_id,actor_id,category,title,body,target_url)
  values (s.user_id,auth.uid(),'application','志愿者奖励已发放',
          '请前往我的建议查看积分与等级。','/suggestions.html#mine');
end;
$$;

revoke execute on function volunteer_private.award_reward(uuid,integer,smallint,text) from public, anon;
grant execute on function volunteer_private.award_reward(uuid,integer,smallint,text) to authenticated;

-- Preserve the existing PostgREST endpoint. The stored SQL body resolves the
-- private implementation at creation without granting clients schema access.
create or replace function public.award_volunteer_reward(
  p_id uuid, p_points integer, p_level smallint, p_reason text
) returns void
language sql security invoker set search_path = ''
begin atomic
  select volunteer_private.award_reward(p_id,p_points,p_level,p_reason);
end;

create index volunteer_votes_voter_idx on public.volunteer_votes(voter_id);
create index volunteer_rewards_actor_idx on public.volunteer_rewards(actor_id);
create index volunteer_rewards_user_idx on public.volunteer_rewards(user_id);
