alter table public.site_suggestions add column screenshot_path text;
alter table public.site_suggestions add constraint volunteer_screenshot_path_check check (
  screenshot_path is null or (
    user_id is not null and screenshot_path ~
    ('^' || user_id::text || '/' || id::text || '\.(png|jpg|webp)$')
  )
);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('volunteer-screenshots', 'volunteer-screenshots', false, 5242880,
        array['image/png','image/jpeg','image/webp']);

create policy "volunteer screenshot upload" on storage.objects
for insert to authenticated with check (
  bucket_id = 'volunteer-screenshots' and
  name ~ ('^' || (select auth.uid())::text || '/[a-f0-9-]{36}\.(png|jpg|webp)$')
);

create policy "volunteer screenshot read" on storage.objects
for select to authenticated using (
  bucket_id = 'volunteer-screenshots' and (
    (storage.foldername(name))[1] = (select auth.uid())::text or
    exists (select 1 from public.site_suggestions s where s.screenshot_path = name)
  )
);

create policy "volunteer unused screenshot cleanup" on storage.objects
for delete to authenticated using (
  bucket_id = 'volunteer-screenshots' and
  (storage.foldername(name))[1] = (select auth.uid())::text and
  not exists (select 1 from public.site_suggestions s where s.screenshot_path = name)
);

create unique index volunteer_screenshot_idx on public.site_suggestions(screenshot_path)
where screenshot_path is not null;

-- The original review UI only needs to change these three fields.
revoke update on public.site_suggestions from anon, authenticated;
grant update (status, review_note, reviewed_at) on public.site_suggestions to authenticated;

create table public.volunteer_publications (
  id bigint generated always as identity primary key,
  kind text not null check (kind in ('progress','featured','announcement')),
  title text not null check (char_length(btrim(title)) between 1 and 120),
  body text not null check (char_length(btrim(body)) between 1 and 3000),
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.volunteer_polls (
  id bigint generated always as identity primary key,
  title text not null check (char_length(btrim(title)) between 1 and 120),
  options text[] not null check (
    array_ndims(options) = 1 and array_lower(options, 1) = 1 and
    cardinality(options) between 2 and 5 and array_position(options, null) is null
  ),
  closes_at timestamptz not null,
  published boolean not null default false
);

create table public.volunteer_votes (
  poll_id bigint not null references public.volunteer_polls on delete cascade,
  voter_id uuid not null default auth.uid() references auth.users on delete cascade,
  choice smallint not null check (choice between 1 and 5),
  primary key (poll_id, voter_id)
);

alter table public.volunteer_publications enable row level security;
alter table public.volunteer_polls enable row level security;
alter table public.volunteer_votes enable row level security;

revoke all on public.volunteer_publications, public.volunteer_polls, public.volunteer_votes
from anon, authenticated;
grant select on public.volunteer_publications, public.volunteer_polls to anon, authenticated;
grant insert, update, delete on public.volunteer_publications to authenticated;
grant insert on public.volunteer_polls to authenticated;
grant update (published, closes_at) on public.volunteer_polls to authenticated;
grant select, insert on public.volunteer_votes to authenticated;

create policy "volunteer published posts" on public.volunteer_publications
for select to anon, authenticated using (published);
create policy "volunteer manage posts" on public.volunteer_publications
for all to authenticated using ((select public.is_site_admin()))
with check ((select public.is_site_admin()));

create policy "volunteer published polls" on public.volunteer_polls
for select to anon, authenticated using (published);
create policy "volunteer manage polls" on public.volunteer_polls
for all to authenticated using ((select public.is_site_admin()))
with check ((select public.is_site_admin()));

create policy "volunteer own votes" on public.volunteer_votes
for select to authenticated using (voter_id = (select auth.uid()));
create policy "volunteer cast vote" on public.volunteer_votes
for insert to authenticated with check (
  voter_id = (select auth.uid()) and exists (
    select 1 from public.volunteer_polls p where p.id = poll_id and
    p.published and statement_timestamp() < p.closes_at and choice <= cardinality(p.options)
  )
);

-- Public aggregate intentionally uses owner privileges. Individual ballots stay private.
create view public.volunteer_poll_results with (security_barrier = true) as
select p.id as poll_id, i.choice, count(v.choice) as votes
from public.volunteer_polls p
cross join lateral generate_subscripts(p.options, 1) i(choice)
left join public.volunteer_votes v on v.poll_id = p.id and v.choice = i.choice
where p.published
group by p.id, i.choice;

-- Rank by contribution points. Only show members who have a public display name.
create view public.volunteer_leaderboard with (security_barrier = true) as
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

revoke all on public.volunteer_poll_results, public.volunteer_leaderboard from anon, authenticated;
grant select on public.volunteer_poll_results, public.volunteer_leaderboard to anon, authenticated;

-- Serialize rewards for the same member, including promotions from different suggestions.
create or replace function public.award_volunteer_reward(
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
  select level_override into prior_level
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

revoke execute on function public.award_volunteer_reward(uuid,integer,smallint,text) from public, anon;
grant execute on function public.award_volunteer_reward(uuid,integer,smallint,text) to authenticated;
