/* Production-safe default: do not route sharing through an unverified Worker.
 * Set to an approved HTTPS Worker origin (ending with /) only after isolated
 * Worker deployment, public-content/RLS checks and real crawler validation.
 * Never store secrets or a Supabase service-role key in this browser file.
 */
window.LYY_SHARE_WORKER_ORIGIN='';
