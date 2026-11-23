/**
 * Public per-item social share HTML for Cloudflare Workers.
 * Bind SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY as environment variables.
 * Set PUBLIC_SITE_ORIGIN and SHARE_ORIGIN to the approved deployment origins.
 * No service_role key. Do not route this worker over existing website paths.
 */
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const excerpt = value => String(value ?? '').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,110);
const origin = value => { const url = new URL(value); if(url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw Error('Invalid origin'); return url.origin; };
const errorResponse = status => new Response(status===404?'Not found':'Service unavailable',{status,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store','X-Robots-Tag':'noindex'}});
export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
    let url;
    try { url = new URL(request.url); } catch { return errorResponse(404); }
    const parts = url.pathname.match(/^\/share\/(article|forum)\/([^/]+)\/?$/);
    if (!parts || !UUID.test(parts[2])) return errorResponse(404);
    const [,type,id] = parts;
    let site, share, api;
    try {
      site = origin(env.PUBLIC_SITE_ORIGIN);
      share = origin(env.SHARE_ORIGIN);
      api = origin(env.SUPABASE_URL);
      if (!env.SUPABASE_PUBLISHABLE_KEY) throw Error('Missing publishable key');
      if (url.origin !== share) return errorResponse(404);
    } catch { return errorResponse(503); }
    const table = type === 'article' ? 'member_articles' : 'forum_posts';
    const fields = type === 'article' ? 'id,title,body,status' : 'id,title,body,status';
    const query = new URL(api + '/rest/v1/' + table);
    query.searchParams.set('select',fields);
    query.searchParams.set('id','eq.'+id);
    query.searchParams.set('status','eq.published');
    query.searchParams.set('limit','1');
    let rows;
    try {
      const response = await fetch(query,{headers:{apikey:env.SUPABASE_PUBLISHABLE_KEY,Accept:'application/json'},redirect:'manual',signal:AbortSignal.timeout(6000)});
      if (!response.ok) return errorResponse(503);
      rows = await response.json();
    } catch { return errorResponse(503); }
    if (!Array.isArray(rows) || rows.length!==1 || rows[0].status!=='published') return errorResponse(404);
    const item=rows[0], title=String(item.title||'').slice(0,180), description=excerpt(item.body);
    const readUrl=site+(type==='article'?'/member-articles.html#article=':'/forum.html#post=')+encodeURIComponent(id);
    const shareUrl=share+'/share/'+type+'/'+id;
    const imageUrl=site+'/images/'+(type==='article'?'share-article.jpg':'share-forum.jpg');
    // The canonical points to the original reader URL. Do not expose unpublished content.
    const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><link rel="canonical" href="${escapeHtml(readUrl)}"><meta property="og:type" content="article"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${escapeHtml(shareUrl)}"><meta property="og:image" content="${escapeHtml(imageUrl)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}"><meta name="twitter:image" content="${escapeHtml(imageUrl)}"></head><body><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><a href="${escapeHtml(readUrl)}">阅读原文</a></main><script>location.replace(${JSON.stringify(readUrl).replace(/</g,'\\u003c')})</script></body></html>`;
    return new Response(request.method==='HEAD'?null:html,{status:200,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'}});
  }
};
