-- Forum migration v1. Run in Supabase SQL Editor as project owner.
-- Additive only: existing comments, articles and policies remain unchanged.
begin;
create table if not exists public.forum_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null default '会员',
 suspended boolean not null default false,
 created_at timestamptz not null default now(),
 constraint forum_name_length check (char_length(display_name) between 2 and 30)
);
create table if not exists public.forum_posts (
 id uuid primary key default gen_random_uuid(),
 author_id uuid not null references auth.users(id) on delete cascade,
 category text not null default '自由讨论',
 title text not null,
 body text not null,
 status text not null default 'pending',
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 reviewed_at timestamptz,
 reviewed_by uuid references auth.users(id),
 constraint forum_post_title check (char_length(title) between 5 and 120),
 constraint forum_post_body check (char_length(body) between 20 and 20000),
 constraint forum_post_status check (status in ('pending','published','rejected','hidden')),
 constraint forum_post_category check (category in ('时事政治','国际局势','社会观察','宗教信仰','自由讨论'))
);
create table if not exists public.forum_comments (
 id uuid primary key default gen_random_uuid(),
 post_id uuid not null references public.forum_posts(id) on delete cascade,
 author_id uuid not null references auth.users(id) on delete cascade,
 body text not null,
 created_at timestamptz not null default now(),
 constraint forum_comment_length check (char_length(body) between 1 and 2000)
);
create table if not exists public.forum_reports (
 id uuid primary key default gen_random_uuid(),
 post_id uuid references public.forum_posts(id) on delete cascade,
 comment_id uuid references public.forum_comments(id) on delete cascade,
 reporter_id uuid not null references auth.users(id) on delete cascade,
 reason text not null,
 created_at timestamptz not null default now(),
 constraint forum_report_target check ((post_id is not null) <> (comment_id is not null)),
 constraint forum_report_reason check (char_length(reason) between 5 and 300)
);
create index if not exists forum_posts_status_date on public.forum_posts(status,created_at desc);
create index if not exists forum_posts_author on public.forum_posts(author_id,created_at desc);
create index if not exists forum_comments_post on public.forum_comments(post_id,created_at);
create index if not exists forum_reports_date on public.forum_reports(created_at desc);
alter table public.forum_profiles enable row level security;
alter table public.forum_posts enable row level security;
alter table public.forum_comments enable row level security;
alter table public.forum_reports enable row level security;
-- Reuse existing trusted admin and verified-email functions.
create or replace function public.forum_is_active_member(p_uid uuid)
returns boolean language sql stable security definer set search_path='' as $$
 select p_uid=auth.uid()
 and exists(select 1 from auth.users u where u.id=p_uid and u.email_confirmed_at is not null)
 and not exists(select 1 from public.forum_profiles p where p.user_id=p_uid and p.suspended)
$$;
revoke all on function public.forum_is_active_member(uuid) from public;
grant execute on function public.forum_is_active_member(uuid) to authenticated;
create or replace function public.forum_post_before_write()
returns trigger language plpgsql security definer set search_path='' as $$
declare approved_count bigint; blocked boolean;
begin
 if tg_op='INSERT' then
   if new.author_id is distinct from auth.uid() or not public.forum_is_active_member(auth.uid()) then
     raise exception 'Verified active membership required';
   end if;
   -- Serialize first-three approvals check per author to prevent concurrent bypass.
   perform pg_advisory_xact_lock(hashtextextended(new.author_id::text, 93421));
   select count(*) into approved_count from public.forum_posts
   where author_id=new.author_id and status='published' and reviewed_at is not null;
   new.status:=case when approved_count>=3 then 'published' else 'pending' end;
   new.reviewed_by:=null; new.reviewed_at:=null;
   new.created_at:=now(); new.updated_at:=now();
 elsif tg_op='UPDATE' then
   if not public.is_site_admin() then
     if new.author_id is distinct from old.author_id or new.status is distinct from old.status
       or new.reviewed_at is distinct from old.reviewed_at or new.reviewed_by is distinct from old.reviewed_by
       or new.created_at is distinct from old.created_at then
       raise exception 'Protected fields cannot be changed';
     end if;
     -- Edits to published posts return to moderation.
     if old.status='published' and (new.title is distinct from old.title or new.body is distinct from old.body) then
       new.status:='pending';
     end if;
   end if;
   new.updated_at:=now();
 end if;
 return new;
end $$;
drop trigger if exists forum_posts_guard on public.forum_posts;
create trigger forum_posts_guard before insert or update on public.forum_posts
for each row execute function public.forum_post_before_write();
create policy "forum profiles public" on public.forum_profiles for select to anon,authenticated using (true);
create policy "forum profiles self create" on public.forum_profiles for insert to authenticated with check (user_id=auth.uid() and public.forum_is_active_member(auth.uid()) and suspended=false);
create policy "forum profiles self edit" on public.forum_profiles for update to authenticated using ((user_id=auth.uid() and public.forum_is_active_member(auth.uid())) or public.is_site_admin()) with check ((user_id=auth.uid()) or public.is_site_admin());
-- Guard suspension against self-update, including crafted API requests.
create or replace function public.forum_profile_guard()
returns trigger language plpgsql security definer set search_path='' as $$
begin
 if tg_op='UPDATE' and not public.is_site_admin() then
   if new.suspended is distinct from old.suspended or new.user_id is distinct from old.user_id then
     raise exception 'Cannot change membership privileges';
   end if;
 end if;
 return new;
end $$;
create trigger forum_profile_guard before update on public.forum_profiles
for each row execute function public.forum_profile_guard();
create policy "forum posts readable" on public.forum_posts for select to anon,authenticated
using (status='published' or (auth.uid()=author_id) or public.is_site_admin());
create policy "forum posts insert" on public.forum_posts for insert to authenticated
with check (author_id=auth.uid() and public.forum_is_active_member(auth.uid()));
create policy "forum posts author edit" on public.forum_posts for update to authenticated
using ((author_id=auth.uid() and public.forum_is_active_member(auth.uid())) or public.is_site_admin())
with check ((author_id=auth.uid() and public.forum_is_active_member(auth.uid())) or public.is_site_admin());
create policy "forum posts author delete" on public.forum_posts for delete to authenticated
using (author_id=auth.uid() or public.is_site_admin());
create policy "forum comments read" on public.forum_comments for select to anon,authenticated
using (exists(select 1 from public.forum_posts p where p.id=post_id and p.status='published') or author_id=auth.uid() or public.is_site_admin());
create policy "forum comments add" on public.forum_comments for insert to authenticated
with check (author_id=auth.uid() and public.forum_is_active_member(auth.uid()) and exists(select 1 from public.forum_posts p where p.id=post_id and p.status='published'));
create policy "forum comments delete" on public.forum_comments for delete to authenticated
using (author_id=auth.uid() or public.is_site_admin());
create policy "forum reports create" on public.forum_reports for insert to authenticated
with check (reporter_id=auth.uid() and public.forum_is_active_member(auth.uid()));
create policy "forum reports admin read" on public.forum_reports for select to authenticated using (public.is_site_admin());
create policy "forum reports admin delete" on public.forum_reports for delete to authenticated using (public.is_site_admin());
grant select on public.forum_profiles,public.forum_posts,public.forum_comments to anon;
grant select,insert,update on public.forum_profiles,public.forum_posts to authenticated;
grant delete on public.forum_posts to authenticated;
grant select,insert,delete on public.forum_comments,public.forum_reports to authenticated;
grant insert on public.forum_reports to authenticated;
commit;
