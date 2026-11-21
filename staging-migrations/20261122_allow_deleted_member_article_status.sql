-- LYY12788-Test: applied and verified 2026-11-22.
-- Align member_articles.status CHECK with existing member_article_admin_remove RPC.
-- Does not delete rows or change article contents.
BEGIN;
SET LOCAL lock_timeout = '3s';
ALTER TABLE public.member_articles DROP CONSTRAINT member_articles_status_check;
ALTER TABLE public.member_articles ADD CONSTRAINT member_articles_status_check
CHECK (status = ANY (ARRAY['draft'::text,'pending'::text,'published'::text,'rejected'::text,'deleted'::text]));
COMMIT;
