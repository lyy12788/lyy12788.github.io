-- Deploy to the production Supabase project only after review and tests.
-- Author notifications are generated server-side, never trusted to browser input.
create or replace function public.notify_member_article_curation()
returns trigger
language plpgsql
security definer
set search_path = ''
as $function$
declare
  author_uuid uuid;
  article_title text;
  actor_uuid uuid;
begin
  if new.source <> 'member' then return new; end if;
  if tg_op = 'UPDATE'
     and old.is_pinned is not distinct from new.is_pinned
     and old.is_featured is not distinct from new.is_featured then
    return new;
  end if;
  select author_id, title into author_uuid, article_title
    from public.member_articles where id::text = new.content_id;
  if author_uuid is null then return new; end if;
  actor_uuid := new.updated_by;
  if tg_op = 'INSERT' then
    if new.is_pinned then
      insert into public.member_notifications(recipient_id,actor_id,category,title,body,target_url)
      values(author_uuid,actor_uuid,'moderation','文章已置顶','你的文章《'||left(article_title,80)||'》已被置顶。','/member-articles.html#article='||new.content_id);
    end if;
    if new.is_featured then
      insert into public.member_notifications(recipient_id,actor_id,category,title,body,target_url)
      values(author_uuid,actor_uuid,'moderation','文章已设为精选','你的文章《'||left(article_title,80)||'》已被设为精选。','/member-articles.html#article='||new.content_id);
    end if;
  else
    if old.is_pinned is distinct from new.is_pinned then
      insert into public.member_notifications(recipient_id,actor_id,category,title,body,target_url)
      values(author_uuid,actor_uuid,'moderation',case when new.is_pinned then '文章已置顶' else '文章已取消置顶' end,
      '你的文章《'||left(article_title,80)||'》'||case when new.is_pinned then '已被置顶。' else '已取消置顶。' end,
      '/member-articles.html#article='||new.content_id);
    end if;
    if old.is_featured is distinct from new.is_featured then
      insert into public.member_notifications(recipient_id,actor_id,category,title,body,target_url)
      values(author_uuid,actor_uuid,'moderation',case when new.is_featured then '文章已设为精选' else '文章已取消精选' end,
      '你的文章《'||left(article_title,80)||'》'||case when new.is_featured then '已被设为精选。' else '已取消精选。' end,
      '/member-articles.html#article='||new.content_id);
    end if;
  end if;
  return new;
end;
$function$;
drop trigger if exists member_article_curation_notify_trigger on public.content_curation;
create trigger member_article_curation_notify_trigger
after insert or update of is_pinned,is_featured on public.content_curation
for each row execute function public.notify_member_article_curation();
revoke all on function public.notify_member_article_curation() from public, anon, authenticated;