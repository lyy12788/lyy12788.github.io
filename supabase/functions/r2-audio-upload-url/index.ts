// Supabase Edge Function: r2-audio-upload-url
// Configure secrets R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY.
// Deploy with JWT verification enabled. Never expose these secrets in GitHub or browser.
import { createClient } from "npm:@supabase/supabase-js@2.49.10";
const origin = "https://lyy12788.com";
const headers = { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Headers": "authorization, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS", "Vary": "Origin" };
const enc = new TextEncoder();
const hex = (b: ArrayBuffer | Uint8Array) => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2,"0")).join("");
async function hmac(key: CryptoKey | ArrayBuffer | Uint8Array, data: string) {
 const k = key instanceof CryptoKey ? key : await crypto.subtle.importKey("raw", key, {name:"HMAC",hash:"SHA-256"},false,["sign"]);
 return new Uint8Array(await crypto.subtle.sign("HMAC",k,enc.encode(data)));
}
async function sha(s: string) { return hex(await crypto.subtle.digest("SHA-256",enc.encode(s))); }
const response = (body: unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{...headers,"Content-Type":"application/json","Cache-Control":"no-store"}});
Deno.serve(async req => {
 if(req.method==="OPTIONS") return new Response(null,{headers});
 if(req.method!=="POST") return response({error:"Method not allowed"},405);
 if(req.headers.get("origin")!==origin) return response({error:"Origin denied"},403);
 try {
  const bearer=req.headers.get("authorization")||"";
  if(!/^Bearer\s+\S+$/.test(bearer)) return response({error:"请先登录管理员账号"},401);
  const base=Deno.env.get("SUPABASE_URL")!;
  const service=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const sb=createClient(base,service,{auth:{persistSession:false}});
  const {data:{user},error:authError}=await sb.auth.getUser(bearer.replace(/^Bearer\s+/,""));
  if(authError||!user) return response({error:"登录已过期"},401);
  const {data:admin,error:adminError}=await sb.from("site_admins").select("user_id").eq("user_id",user.id).maybeSingle();
  if(adminError||!admin) return response({error:"仅站长可上传"},403);
  const data=await req.json();
  const title=String(data.title||"").trim();
  const size=Number(data.size);
  const type=String(data.type||"").toLowerCase();
  const mime:Record<string,string>={"audio/mpeg":"mp3","audio/mp4":"m4a","audio/x-m4a":"m4a","audio/aac":"aac","audio/wav":"wav","audio/x-wav":"wav","audio/ogg":"ogg"};
  if(title.length<2||title.length>150||!mime[type]||!Number.isSafeInteger(size)||size<1||size>100*1024*1024) return response({error:"标题、格式或文件大小不符合要求（最大100MB）"},400);
  const account=Deno.env.get("R2_ACCOUNT_ID"),access=Deno.env.get("R2_ACCESS_KEY_ID"),secret=Deno.env.get("R2_SECRET_ACCESS_KEY");
  if(!account||!access||!secret||!/^[a-f0-9]{32}$/i.test(account)) return response({error:"R2 后端密钥尚未配置"},503);
  const key="audio/uploads/"+crypto.randomUUID()+"."+mime[type];
  const host=account+".r2.cloudflarestorage.com";
  const bucket="lyy12788media";
  const url=new URL("https://"+host+"/"+bucket+"/"+key);
  const now=new Date(),date=now.toISOString().replace(/[:-]|\.\d{3}/g,""),day=date.slice(0,8);
  const scope=day+"/auto/s3/aws4_request";
  const signedHeaders="host";
  const params=new URLSearchParams({"X-Amz-Algorithm":"AWS4-HMAC-SHA256","X-Amz-Credential":access+"/"+scope,"X-Amz-Date":date,"X-Amz-Expires":"300","X-Amz-SignedHeaders":signedHeaders});
  const query=[...params].sort(([a,av],[b,bv])=>a.localeCompare(b)||av.localeCompare(bv)).map(([k,v])=>encodeURIComponent(k)+"="+encodeURIComponent(v)).join("&");
  const canonicalPath="/"+bucket+"/"+key;
  const canonical=["PUT",canonicalPath,query,"host:"+host+"\n",signedHeaders,"UNSIGNED-PAYLOAD"].join("\n");
  const stringToSign=["AWS4-HMAC-SHA256",date,scope,await sha(canonical)].join("\n");
  const kDate=await hmac(enc.encode("AWS4"+secret),day);
  const kRegion=await hmac(kDate,"auto");
  const kService=await hmac(kRegion,"s3");
  const kSigning=await hmac(kService,"aws4_request");
  const sig=hex(await hmac(kSigning,stringToSign));
  return response({url:url.origin+canonicalPath+"?"+query+"&X-Amz-Signature="+sig,key,expires_in:300});
 } catch(e) { console.error("r2 upload signing failed",e);return response({error:"上传授权生成失败"},500); }
});
