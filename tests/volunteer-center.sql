-- Run against the independent test database as a database administrator.
begin;
create function pg_temp.assert_true(ok boolean, label text) returns text language plpgsql as $$
begin
  if ok is distinct from true then raise exception 'FAIL: %', label; end if;
  return label;
end;
$$;
create function pg_temp.expect_denied(statement text, label text) returns text language plpgsql as $$
begin
  execute statement;
  raise exception 'Unexpectedly allowed: %', label using errcode = 'XX000';
exception
  when insufficient_privilege or unique_violation or check_violation or raise_exception then return label;
end;
$$;

select set_config('qa.admin', (select user_id::text from public.site_admins limit 1), true);
with members as (
  select array_agg(id order by id) ids from (
    select id from auth.users where id <> current_setting('qa.admin')::uuid order by id limit 3
  ) u
)
select set_config('qa.member',ids[1]::text,true),
       set_config('qa.other',ids[2]::text,true),
       set_config('qa.moderator',ids[3]::text,true) from members;
insert into public.member_progress(user_id,points,role)
values (current_setting('qa.member')::uuid, 0, 'member'),
       (current_setting('qa.moderator')::uuid, 0, 'moderator')
on conflict(user_id) do update set points=excluded.points, role=excluded.role, level_override=null;
update public.forum_profiles set suspended=false, suspended_until=null, deletion_requested_at=null
where user_id=current_setting('qa.moderator')::uuid;
insert into public.forum_profiles(user_id,display_name)
values (current_setting('qa.member')::uuid,'Volunteer QA contributor')
on conflict(user_id) do update set display_name=excluded.display_name,
  deletion_requested_at=null, deletion_finalized_at=null;

select set_config('qa.ordinary',gen_random_uuid()::text,true);
select set_config('qa.security',gen_random_uuid()::text,true);
select set_config('qa.image',current_setting('qa.member') || '/' || current_setting('qa.security') || '.png',true);

set local role anon;
select pg_temp.expect_denied(
  $$insert into public.site_suggestions(title,category,message) values ('QA','安全漏洞','Volunteer QA harmless sample')$$,
  'anonymous private feedback denied'
);
insert into public.site_suggestions(title,category,message) values ('QA','其他','Volunteer QA harmless sample');
select pg_temp.assert_true(not exists(select from public.volunteer_publications where not published), 'anonymous cannot see drafts');
reset role;

set local role authenticated;
select set_config('request.jwt.claim.sub',current_setting('qa.member'),true);
insert into storage.objects(bucket_id,name,owner_id)
values ('volunteer-screenshots',current_setting('qa.image'),auth.uid()::text);
insert into public.site_suggestions(id,title,category,message,screenshot_path)
values (current_setting('qa.security')::uuid,'QA private','安全漏洞','Volunteer QA harmless sample',current_setting('qa.image'));
insert into public.site_suggestions(id,title,category,message)
values (current_setting('qa.ordinary')::uuid,'QA ordinary','功能建议','Volunteer QA harmless sample');
select pg_temp.assert_true((select count(*) from public.site_suggestions
  where id in (current_setting('qa.security')::uuid,current_setting('qa.ordinary')::uuid))=2,'member reads both own submissions');
select pg_temp.assert_true(exists(select from storage.objects where name=current_setting('qa.image')),'member reads own screenshot');
select pg_temp.expect_denied(
  $$insert into storage.objects(bucket_id,name) values ('volunteer-screenshots',current_setting('qa.other') || '/' || current_setting('qa.security') || '.png')$$,
  'cross-account screenshot upload denied'
);
select pg_temp.expect_denied(
  $$insert into public.volunteer_publications(kind,title,body) values ('announcement','QA','QA')$$,
  'member publishing denied'
);
select pg_temp.expect_denied(
  $$select public.award_volunteer_reward(current_setting('qa.ordinary')::uuid,10,null,'QA reason')$$,
  'member reward denied'
);

select set_config('request.jwt.claim.sub',current_setting('qa.other'),true);
select pg_temp.assert_true(not exists(select from public.site_suggestions where id=current_setting('qa.security')::uuid),'other member cannot read security report');
select pg_temp.assert_true(not exists(select from storage.objects where name=current_setting('qa.image')),'other member cannot read private screenshot');

select set_config('request.jwt.claim.sub',current_setting('qa.moderator'),true);
select pg_temp.assert_true(public.is_content_moderator(),'reviewer fixture has moderator role');
select pg_temp.assert_true(not exists(select from public.site_suggestions where id=current_setting('qa.security')::uuid),'moderator cannot read security report');
select pg_temp.assert_true(not exists(select from storage.objects where name=current_setting('qa.image')),'moderator cannot read private screenshot');
with reviewed as (
  update public.site_suggestions set status='accepted',review_note='QA review'
  where id=current_setting('qa.ordinary')::uuid returning id
)
select pg_temp.assert_true((select count(*) from reviewed)=1,'moderator reviews ordinary suggestion');

select set_config('request.jwt.claim.sub',current_setting('qa.admin'),true);
select pg_temp.assert_true(exists(select from public.site_suggestions where id=current_setting('qa.security')::uuid),'admin can read private feedback');
select pg_temp.assert_true(exists(select from storage.objects where name=current_setting('qa.image')),'admin can read private screenshot');
select public.award_volunteer_reward(current_setting('qa.ordinary')::uuid,100,3::smallint,'QA award');
select pg_temp.expect_denied(
  $$select public.award_volunteer_reward(current_setting('qa.ordinary')::uuid,10,null,'QA duplicate')$$,
  'duplicate reward denied'
);
select pg_temp.assert_true(exists(select from public.volunteer_leaderboard
  where display_name='Volunteer QA contributor' and points=100 and honor='silver'),'public point ranking and silver honor');
insert into public.volunteer_publications(kind,title,body,published)
values ('announcement','QA public','QA',true),('progress','QA draft','QA',false),('featured','QA featured','QA',true);
with poll as (
  insert into public.volunteer_polls(title,options,closes_at,published)
  values ('QA poll',array['A','B'],now()+interval '1 hour',true) returning id
)
select set_config('qa.poll',(select id::text from poll),true);

select set_config('request.jwt.claim.sub',current_setting('qa.member'),true);
select pg_temp.assert_true(exists(select from public.member_progress where user_id=auth.uid()
  and points=100 and level_override=3),'member points and promotion applied');
select pg_temp.assert_true((select count(*) from public.member_notifications where recipient_id=auth.uid()
  and target_url='/suggestions.html#mine' and created_at>=transaction_timestamp())=2,'review and reward notifications received');
with seen as (
  update public.member_notifications set is_read=true where recipient_id=auth.uid()
    and target_url='/suggestions.html#mine' and created_at>=transaction_timestamp() returning id
)
select pg_temp.assert_true((select count(*) from seen)=2,'notifications can be marked read');
select pg_temp.expect_denied(
  $$insert into public.volunteer_votes(poll_id,choice) values (current_setting('qa.poll')::bigint,3)$$,
  'out-of-range poll choice denied'
);
insert into public.volunteer_votes(poll_id,choice) values (current_setting('qa.poll')::bigint,1);
select pg_temp.expect_denied(
  $$insert into public.volunteer_votes(poll_id,choice) values (current_setting('qa.poll')::bigint,2)$$,
  'duplicate vote denied'
);

select set_config('request.jwt.claim.sub',current_setting('qa.other'),true);
select pg_temp.assert_true(not exists(select from public.volunteer_votes
  where poll_id=current_setting('qa.poll')::bigint),'other members cannot see individual ballots');
select pg_temp.assert_true(exists(select from public.volunteer_poll_results
  where poll_id=current_setting('qa.poll')::bigint and choice=1 and votes=1),'aggregate vote totals available');

select set_config('request.jwt.claim.sub',current_setting('qa.admin'),true);
update public.volunteer_polls set closes_at=now() where id=current_setting('qa.poll')::bigint;
select set_config('request.jwt.claim.sub',current_setting('qa.other'),true);
select pg_temp.expect_denied(
  $$insert into public.volunteer_votes(poll_id,choice) values (current_setting('qa.poll')::bigint,1)$$,
  'closed poll rejects votes'
);
reset role;
set local role anon;
select pg_temp.assert_true((select count(*) from public.volunteer_publications where title in
  ('QA public','QA draft','QA featured'))=2,'only published content is visible to visitors');
select 'All volunteer database assertions passed' as result;
rollback;
