-- Require an identifiable account for private feedback and its replies.
create policy "volunteer security report ownership" on public.site_suggestions
as restrictive for insert to anon, authenticated with check (
  category <> '安全漏洞' or (
    (select auth.uid()) is not null and user_id = (select auth.uid())
  )
);

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
