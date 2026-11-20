-- STAGING DESIGN ONLY: do not apply before security review and isolated tests.
-- New messages only: legacy rows retain NULL owner fields and existing admin-only visibility.
ALTER TABLE public.site_guestbook_messages
 ADD COLUMN IF NOT EXISTS owner_user_id uuid,
 ADD COLUMN IF NOT EXISTS owner_token_hash text;
CREATE INDEX IF NOT EXISTS site_guestbook_owner_user_idx
 ON public.site_guestbook_messages(owner_user_id,created_at DESC)
 WHERE owner_user_id IS NOT NULL;
-- No anonymous SELECT policy: ownership via bearer token must be checked by a
-- SECURITY DEFINER RPC with explicit grants, rate limits and a fixed search_path.
-- Never expose owner_token_hash in public SELECT, and never accept a client-chosen
-- owner_user_id as proof of identity. Store only a digest of a random 256-bit token.
-- Avoid granting ordinary UPDATE access to the guestbook table.
-- Required negative tests: guessed token; other user's token; empty token;
-- legacy message; shared browser cleared; anon direct SELECT; admin access.
