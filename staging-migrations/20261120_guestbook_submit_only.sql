-- Release candidate: allow anonymous and member submission only.
-- Existing RLS restricts SELECT to site admins; no public SELECT grant.
-- Verify guestbook message length CHECK and anti-spam before production deployment.
GRANT INSERT ON public.site_guestbook_messages TO anon,authenticated;
REVOKE SELECT,UPDATE,DELETE,TRUNCATE ON public.site_guestbook_messages FROM anon;
REVOKE UPDATE,DELETE,TRUNCATE ON public.site_guestbook_messages FROM authenticated;
-- Authenticated SELECT is permitted only under the admin-only RLS policy.
