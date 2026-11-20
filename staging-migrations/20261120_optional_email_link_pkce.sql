create table if not exists private.member_email_verification_attempts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  verifier text not null,
  expires_at timestamptz not null default (now()+ interval '1 hour')
);
alter table private.member_email_verification_attempts enable row level security;
revoke all on private.member_email_verification_attempts from public, anon, authenticated;
create or replace function public.save_member_email_attempt(p_user_id uuid,p_email text,p_verifier text)
returns boolean language sql security definer set search_path = ''
as $$
  with saved as (
    insert into private.member_email_verification_attempts(user_id,email,verifier)
    select id,email,p_verifier from auth.users where id=p_user_id and email=p_email
    on conflict (user_id) do update set email=excluded.email,verifier=excluded.verifier,expires_at=excluded.expires_at
    returning 1
  )
  select exists(select 1 from saved);
$$;
create or replace function public.get_member_email_attempt(p_user_id uuid,p_email text)
returns text language sql stable security definer set search_path = ''
as $$
  select verifier from private.member_email_verification_attempts
  where user_id=p_user_id and email=p_email and expires_at>now();
$$;
revoke all on function public.save_member_email_attempt(uuid,text,text), public.get_member_email_attempt(uuid,text) from public,anon,authenticated;
grant execute on function public.save_member_email_attempt(uuid,text,text), public.get_member_email_attempt(uuid,text) to service_role;