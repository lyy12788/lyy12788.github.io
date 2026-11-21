-- Apply and verify in LYY12788-Test before considering a production migration.
begin;

create or replace function public.member_article_guard()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  actor uuid := auth.uid();
  reviewing boolean;
begin
  if tg_op = 'INSERT' then
    if new.author_id is distinct from actor or not public.forum_is_active_member(actor) then
      raise exception 'Active membership required';
    end if;
    if new.status not in ('draft','pending') then raise exception 'Submit for review'; end if;
    new.reviewer_access := new.status = 'pending';
    new.reviewed_at := null;
    new.reviewed_by := null;
    new.review_note := null;
    new.created_at := now();
    new.published_at := null;
  else
    if new.author_id is distinct from old.author_id or new.created_at is distinct from old.created_at then
      raise exception 'Protected article fields';
    end if;
    reviewing := actor is distinct from old.author_id and public.can_moderate_member_content(old.author_id);
    if reviewing and old.status = 'pending' and new.status in ('published','rejected')
       and new.title is not distinct from old.title and new.body is not distinct from old.body then
      new.reviewer_access := false;
      new.reviewed_by := actor;
      new.reviewed_at := now();
      new.published_at := case when new.status = 'published' then now() end;
    elsif reviewing and old.status = 'published' and new.status = 'published'
       and (to_jsonb(new) - array['title','body','updated_at']) = (to_jsonb(old) - array['title','body','updated_at'])
       and exists (select 1 from public.member_article_revisions r where r.article_id = old.id
         and r.status = 'approved' and r.reviewed_by = actor and r.reviewed_at = now()
         and r.title = new.title and r.body = new.body) then
      null;
    elsif (public.is_site_admin() or reviewing) and old.status = 'published' and new.status = 'deleted'
       and (to_jsonb(new) - array['status','reviewer_access','review_note','updated_at'])
           = (to_jsonb(old) - array['status','reviewer_access','review_note','updated_at'])
       and new.reviewer_access = false then
      null;
    elsif actor = old.author_id and public.forum_is_active_member(actor)
       and old.status in ('draft','rejected') and new.status in ('draft','pending') then
      new.reviewer_access := new.status = 'pending';
      new.reviewed_at := null;
      new.reviewed_by := null;
      new.review_note := null;
      new.published_at := null;
    else
      raise exception 'Submit for review';
    end if;
  end if;
  if new.status in ('pending','published') and
     (char_length(btrim(new.title)) not between 5 and 30 or char_length(btrim(new.body)) not between 100 and 50000) then
    raise exception 'Invalid title or body length';
  end if;
  new.updated_at := now();
  return new;
end $$;

create or replace function public.member_article_review_submission(p_article_id uuid, p_approve boolean, p_note text default '')
returns boolean language plpgsql security definer set search_path = '' as $$
declare a public.member_articles%rowtype;
begin
  select * into a from public.member_articles where id = p_article_id for update;
  if not found or a.status <> 'pending' or not a.reviewer_access or auth.uid() is null or auth.uid() = a.author_id
     or not public.can_moderate_member_content(a.author_id) then
    raise exception 'Review unavailable';
  end if;
  update public.member_articles set status = case when p_approve then 'published' else 'rejected' end,
    review_note = left(coalesce(p_note,''),1000) where id = a.id;
  return true;
end $$;

create or replace function public.member_article_review_revision(p_revision_id uuid, p_approve boolean, p_note text default '')
returns boolean language plpgsql security definer set search_path = '' as $$
declare
  r public.member_article_revisions%rowtype;
  a public.member_articles%rowtype;
begin
  select * into r from public.member_article_revisions where id = p_revision_id;
  if not found or auth.uid() is null or auth.uid() = r.author_id or not public.can_moderate_member_content(r.author_id) then
    raise exception 'Review unavailable';
  end if;
  select * into a from public.member_articles where id = r.article_id for update;
  if not found or a.status <> 'published' then raise exception 'Review unavailable'; end if;
  select * into r from public.member_article_revisions where id = p_revision_id for update;
  if not found or r.status <> 'pending' then raise exception 'Review unavailable'; end if;
  update public.member_article_revisions
    set status = case when p_approve then 'approved' else 'rejected' end,
        review_note = left(coalesce(p_note,''),1000), reviewed_by = auth.uid(), reviewed_at = now()
    where id = r.id;
  if p_approve then
    update public.member_articles set title = r.title, body = r.body where id = a.id;
  end if;
  return true;
end $$;

revoke execute on function public.member_article_review_submission(uuid,boolean,text) from public, anon;
grant execute on function public.member_article_review_submission(uuid,boolean,text) to authenticated;
revoke execute on function public.member_article_review_revision(uuid,boolean,text) from public, anon;
grant execute on function public.member_article_review_revision(uuid,boolean,text) to authenticated;

drop policy if exists revisions_author_read on public.member_article_revisions;
create policy revisions_author_read on public.member_article_revisions for select to authenticated
using (author_id = (select auth.uid()) or (status = 'pending' and public.can_moderate_member_content(author_id)));

-- Preserve the existing private-draft rule and limit the review queue by role.
drop policy if exists member_articles_authenticated_read on public.member_articles;
create policy member_articles_authenticated_read on public.member_articles for select to authenticated
using (author_id = (select auth.uid()) or (status = 'pending' and reviewer_access and public.can_moderate_member_content(author_id)));

commit;
