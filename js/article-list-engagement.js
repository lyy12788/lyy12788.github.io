/* Shared article list engagement and share controls; no database writes. */
(()=>{'use strict';
const page=document.documentElement.dataset.lyyPage;
const home=page==='index',directory=page==='articles',members=page==='member-articles';
if(!home&&!directory&&!members)return;
const root=()=>document.querySelector(home?'#article-list':directory?'#article-directory-list':'#list');
const lang=()=>document.documentElement.lang.toLowerCase();
const words=()=>{const l=lang();return l.startsWith('ko')?['조회','댓글','좋아요','공유','링크 복사됨','링크 복사','로그인 후 이용할 수 있습니다','좋아요 실패']:l.startsWith('ja')?['閲覧','コメント','いいね','共有','リンクをコピーしました','リンクをコピー','ログインしてください','いいねに失敗しました']:l.startsWith('en')?['Views','Comments','Likes','Share','Link copied','Copy link','Please sign in first','Like failed']:l==='zh-tw'?['閱讀','評論','讚','分享','連結已複製','複製連結','請先登入','按讚失敗']:['阅读','评论','点赞','分享','链接已复制','复制链接','请先登录','点赞失败']};
const stats=new Map();
let ready=false;let client=null;
const url='https://mkchupvmervxkskvjyhz.supabase.co';
const key='sb_publishable_V3Gvd8EAOox1Se5XJBrmKQ_iRDLJm4Z';
function details(node){
 if(home){const a=node.matches?.('a.article-card')?node:null;if(!a)return null;const link=a.getAttribute('href')||'';const match=link.match(/(?:#post=|#article=)([^&]+)/);if(!match)return null;return {id:decodeURIComponent(match[1]),url:new URL(link,location.origin).href,title:a.querySelector('h3')?.textContent||document.title};}
 if(directory){if(!node.matches?.('li'))return null;const a=node.querySelector('a[href*="#post="],a[href*="#article="]');if(!a)return null;const match=a.getAttribute('href').match(/#(?:post|article)=([^&]+)/);return match?{id:decodeURIComponent(match[1]),url:a.href,title:a.textContent}:null;}
 if(members){const d=node.querySelector?.('details[id^="article-"]');if(!d)return null;const id=d.id.slice(8);return {id,url:new URL('/member-articles.html#article='+encodeURIComponent(id),location.origin).href,title:d.querySelector('summary')?.textContent||document.title};}
 return null;
}
function controls(node,d){
 let host=node;if(home){if(!node.parentElement?.classList.contains('lyy-engagement-card')){const wrapper=document.createElement('div');wrapper.className='lyy-engagement-card';node.parentNode.insertBefore(wrapper,node);wrapper.append(node)}host=node.parentElement;}let bar=host.querySelector(':scope > .lyy-article-engagement');if(!bar){bar=document.createElement('div');bar.className='lyy-article-engagement';bar.style.cssText='display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:12px;color:#c9d2dd;margin:5px 0 8px;position:relative;z-index:1';
 const metrics=document.createElement('span');metrics.className='lyy-engagement-values';bar.append(metrics);
 const comment=document.createElement('button');comment.type='button';comment.className='lyy-engagement-comment';comment.style.cssText='border:0;background:transparent;color:inherit;font:inherit;padding:3px;cursor:pointer';comment.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const target=bar.dataset.shareUrl;if(!target)return;if(target.includes('#post=')){sessionStorage.setItem('lyy-comment-focus-site',bar.dataset.articleId);location.href=target}else{sessionStorage.setItem('lyy-comment-focus',bar.dataset.articleId);location.href=target}});bar.append(comment);
 const like=document.createElement('button');like.type='button';like.className='lyy-engagement-like';like.style.cssText='border:0;background:transparent;color:inherit;font:inherit;padding:3px;cursor:pointer';like.addEventListener('click',async e=>{e.preventDefault();e.stopPropagation();if(!client)return;const {data:{user}}=await client.auth.getUser();if(!user){alert(words()[6]);return}const id=bar.dataset.articleId;like.disabled=true;try{const {data:existing,error:checkError}=await client.from('article_likes').select('article_id').eq('article_id',id).eq('user_id',user.id).maybeSingle();if(checkError)throw checkError;const q=existing?client.from('article_likes').delete().eq('article_id',id).eq('user_id',user.id):client.from('article_likes').insert({article_id:id,user_id:user.id});const {error}=await q;if(error)throw error;await load()}catch(err){alert(words()[7]+': '+err.message)}finally{like.disabled=false}});bar.append(like);
 const btn=document.createElement('button');btn.type='button';btn.className='lyy-engagement-share';btn.style.cssText='border:0;border-radius:0;background:transparent;color:inherit;font:inherit;padding:3px;cursor:pointer';
 btn.addEventListener('click',async e=>{e.preventDefault();e.stopPropagation();const u=bar.dataset.shareUrl,t=bar.dataset.shareTitle;try{if(navigator.share){await navigator.share({title:t,url:u});return;}await navigator.clipboard.writeText(u);btn.textContent=words()[4];}catch(err){if(err?.name!=='AbortError')prompt(words()[5],u)}});
 bar.append(btn);host.append(bar);}
 bar.dataset.shareUrl=d.url;bar.dataset.shareTitle=d.title;bar.dataset.articleId=d.id;
 const w=words();bar.querySelector('.lyy-engagement-share').textContent=w[3];
 const x=stats.get(d.id),v=bar.querySelector('.lyy-engagement-values');
 v.textContent=`${w[0]} ${x?x.views:ready?0:'—'}`;bar.querySelector('.lyy-engagement-comment').textContent=`${w[1]} ${x?x.comments:ready?0:'—'}`;bar.querySelector('.lyy-engagement-like').textContent=`${w[2]} ${x?x.likes:ready?0:'—'}`;
 // Replace the homepage legacy placeholder with this single reliable display.
 if(home){const old=node.querySelector('.article-stats');if(old)old.hidden=true;}
}
function render(){const r=root();if(!r)return;const nodes=home?r.querySelectorAll('a.article-card'):directory?r.querySelectorAll('li'):r.querySelectorAll(':scope > article, :scope > div, :scope > li');nodes.forEach(n=>{const d=details(n);if(d)controls(n,d)});}
let scheduled=false;function schedule(){if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;render()})}
const r=root();if(r)new MutationObserver(m=>{if(m.some(x=>x.addedNodes.length||x.removedNodes.length))schedule()}).observe(r,{childList:true});
new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
async function load(){try{client=window.lyyAuth?.createClient?.(url,key);if(!client)return;const {data,error}=await client.rpc('article_public_stats');if(error)throw error;stats.clear();for(const x of data||[])stats.set(String(x.article_id),{views:Number(x.views)||0,comments:Number(x.comments)||0,likes:Number(x.likes)||0});ready=true;render();}catch(e){console.warn('Article engagement unavailable',e)}}
render();load();window.addEventListener('pageshow',()=>{render();load()});
})();