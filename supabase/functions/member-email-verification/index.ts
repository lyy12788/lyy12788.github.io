import { createClient } from "npm:@supabase/supabase-js@2.49.10";

const origin = "https://lyy12788-isolated-preview.pages.dev";
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
    const { action, code } = await request.json();
    if (action === "send") {
      const { error } = await auth.auth.signInWithOtp({
        email: user.email, options: { shouldCreateUser: false },
      });
      return error ? reply(error.status === 429 ? 429 : 400, { error: "验证邮件暂时无法发送，请稍后重试" }) : reply(200, { sent: true });
    }
    if (action !== "verify" || typeof code !== "string" || !/^\d{6}$/.test(code)) {
      return reply(400, { error: "请输入邮件中的六位验证码" });
    }

    const checked = await auth.auth.verifyOtp({ email: user.email, token: code, type: "email" });
    if (checked.error || checked.data.user?.id !== user.id || checked.data.user?.email !== user.email) {
      return reply(400, { error: "验证码无效或已过期" });
    }
    const service = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, options);
    const { data, error } = await service.rpc("record_member_email_verification", {
      p_user_id: user.id, p_email: user.email,
    });
    return error || data !== true ? reply(409, { error: "邮箱状态已变化，请重新验证" }) : reply(200, { verified: true });
  } catch {
    return reply(400, { error: "无法处理验证请求" });
  }
});
