-- Expose only the columns available through the existing row policies.
grant insert (id, title, category, message, contact, screenshot_path)
on public.site_suggestions to anon, authenticated;
grant select on public.site_suggestions to authenticated;
grant update (is_read) on public.member_notifications to authenticated;
