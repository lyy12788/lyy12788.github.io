-- 论坛部署第一阶段：只读兼容性检查
-- 在 Supabase Dashboard > SQL Editor 执行。不会创建、修改或删除任何数据。
select 'tables' as section, table_schema, table_name, table_type
from information_schema.tables
where table_schema='public' and table_name in
('comments','comment_reports','site_admins','forum_profiles','forum_posts','forum_comments','forum_reports')
order by table_name;

select 'columns' as section, table_name, column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema='public' and table_name in
('comments','comment_reports','site_admins','forum_profiles','forum_posts','forum_comments','forum_reports')
order by table_name, ordinal_position;

select 'rls' as section, n.nspname as schemaname, c.relname as tablename, c.relrowsecurity as rowsecurity, c.relforcerowsecurity as forcerowsecurity
from pg_class c join pg_namespace n on n.oid=c.relnamespace
where n.nspname='public' and c.relname in
('comments','comment_reports','site_admins','forum_profiles','forum_posts','forum_comments','forum_reports');

select 'policies' as section, schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies
where schemaname='public' and tablename in
('comments','comment_reports','site_admins','forum_profiles','forum_posts','forum_comments','forum_reports')
order by tablename, policyname;

select 'functions' as section, n.nspname as schema_name, p.proname as function_name,
pg_get_function_identity_arguments(p.oid) as arguments,
p.prosecdef as security_definer
from pg_proc p join pg_namespace n on n.oid=p.pronamespace
where n.nspname='public' and p.proname in ('is_site_admin','is_email_verified')
order by p.proname;
