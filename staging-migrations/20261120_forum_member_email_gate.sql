-- STAGING ONLY. Review and test before applying to production.
-- The current forum_is_active_member function checks auth.users.email_confirmed_at.
-- This replacement removes only that requirement, retaining authentication and suspension/deletion checks.
CREATE OR REPLACE FUNCTION public.forum_is_active_member(p_uid uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO ''
AS $function$
 SELECT p_uid=auth.uid()
   AND auth.uid() IS NOT NULL
   AND EXISTS (SELECT 1 FROM auth.users u WHERE u.id=p_uid)
   AND NOT EXISTS (
     SELECT 1 FROM public.forum_profiles p
     WHERE p.user_id=p_uid
       AND (coalesce(p.suspended,false)
            OR p.suspended_until>now()
            OR p.deletion_requested_at IS NOT NULL)
   );
$function$;
-- Test cases required: unconfirmed signed-in user; suspended user; deletion requested;
-- anonymous user; unrelated user ID; existing confirmed member.
