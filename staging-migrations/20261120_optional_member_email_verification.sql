create schema if not exists private;
create table if not exists private.member_email_verifications (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  verified_at timestamptz not null default now()
);
alter table private.member_email_verifications enable row level security;
revoke all on private.member_email_verifications from public, anon, authenticated;
create or replace function public.member_email_is_verified()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from private.member_email_verifications v
    join auth.users u on u.id = v.user_id
    where v.user_id = auth.uid() and v.email = u.email
  );
$$;
revoke execute on function public.member_email_is_verified() from public, anon;
grant execute on function public.member_email_is_verified() to authenticated;
create or replace function public.record_member_email_verification(p_user_id uuid, p_email text)
returns boolean language sql security definer set search_path = ''
as $$
  with saved as (
    insert into private.member_email_verifications(user_id, email)
    select id, email from auth.users where id = p_user_id and email = p_email
    on conflict (user_id) do update set email = excluded.email, verified_at = now()
    returning user_id
  )
  select exists(select 1 from saved);
$$;
revoke execute on function public.record_member_email_verification(uuid,text) from public, anon, authenticated;
grant execute on function public.record_member_email_verification(uuid,text) to service_role;