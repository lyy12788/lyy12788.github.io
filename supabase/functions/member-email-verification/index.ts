import { createClient } from "npm:@supabase/supabase-js@2.49.10";

const origin = "https://lyy12788.com";
const cors = {
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
};
const reply = (status: number, data: object) => Response.json(data, {
  status, headers: { ...cors, "Cache-Control": "no-store" },
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  if (request.method !== "POST") return reply(405, { error: "方法不受支持" });
  if (request.headers.get("Origin") !== origin) return reply(403, { error: "来源不受支持" });
  const token = request.headers.get("Authorization")?.match(/^Bearer (\S+)$/i)?.[1];
  if (!token) return reply(401, { error: "请先登录" });

  try {
    const url = Deno.env.get("SUPABASE_URL")!;
    const options = { auth: { persistSession: false, autoRefreshToken: false } };
    const auth = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, options);
    const { data: { user } } = await auth.auth.getUser(token);
    if (!user?.email) return reply(401, { error: "请重新登录" });
    const { action, code, captchaToken } = await request.json();
    const service = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, options);
    const storageKey = "email-proof-pkce";
    const storage = new Map<string, string>();
    const pkce = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, {
      auth: { flowType: "pkce", autoRefreshToken: false, storageKey,
        storage: {
          getItem: (key) => storage.get(key) ?? null,
          setItem: (key, value) => { storage.set(key, value); },
          removeItem: (key) => { storage.delete(key); },
        },
      },
    });
    const verifierKey = storageKey + "-code-verifier";
    if (action === "send") {
      const { error } = await pkce.auth.signInWithOtp({
        email: user.email, options: { shouldCreateUser: false, emailRedirectTo: origin + "/", captchaToken },
      });
      if (error) return reply(error.status === 429 ? 429 : 400, { error: "验证邮件暂时无法发送，请稍后重试" });
      const verifier = storage.get(verifierKey);
      if (!verifier) return reply(503, { error: "验证请求无法保存，请稍后重试" });
      const saved = await service.rpc("save_member_email_attempt", {
        p_user_id: user.id, p_email: user.email, p_verifier: verifier,
      });
      return saved.data === true ? reply(200, { sent: true }) : reply(503, { error: "验证请求无法保存" });
    }
    if (action !== "verify" || typeof code !== "string" || !/^[a-z0-9-]{20,128}$/i.test(code)) {
      return reply(400, { error: "验证链接不完整" });
    }
    const attempt = await service.rpc("get_member_email_attempt", { p_user_id: user.id, p_email: user.email });
    if (!attempt.data) return reply(400, { error: "验证链接已过期，请重新发送" });
    storage.set(verifierKey, attempt.data);
    const checked = await pkce.auth.exchangeCodeForSession(code);
    if (checked.error || checked.data.user?.id !== user.id || checked.data.user?.email !== user.email) {
      return reply(400, { error: "验证链接无效或已过期" });
    }
    const { data, error } = await service.rpc("record_member_email_verification", {
      p_user_id: user.id, p_email: user.email,
    });
    return error || data !== true ? reply(409, { error: "邮箱状态已变化，请重新验证" }) : reply(200, { verified: true });
  } catch {
    return reply(400, { error: "无法处理验证请求" });
  }
});
