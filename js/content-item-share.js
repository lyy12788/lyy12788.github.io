/* Share reader URLs by default. A separately approved HTTPS share Worker may be enabled per deployment. */
(()=>{
'use strict';
const articlePage=/^\/member-articles(?:\.html)?\/?$/.test(location.pathname);
const forumPage=/^\/forum(?:\.html)?\/?$/.test(location.pathname);
if(!articlePage&&!forumPage)return;
if(window.LYY_SHARE_FLAGS?.[articlePage?'article':'forum']!==true)return;
const dictionary={'zh-tw':['分享','連結已複製','無法複製連結'],zh:['分享','链接已复制','无法复制链接'],en:['Share','Link copied','Copy failed'],ko:['공유','링크 복사됨','복사 실패'],ja:['共有','リンクをコピーしました','コピーできません']};
const strings=()=>dictionary[document.documentElement.lang.toLowerCase()]||dictionary[document.documentElement.lang.toLowerCase().split('-')[0]]||dictionary.zh;
const shareOrigin=(()=>{
 try{
  const configured=window.LYY_SHARE_WORKER_ORIGIN;
  if(typeof configured!=='string'||!configured)return null;
  const value=new URL(configured);
  if(value.protocol!=='https:'||value.username||value.password||value.pathname!=='/'||value.search||value.hash)return null;
  return value.origin;
 }catch{return null}
})();
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const share=async(btn,title,url)=>{
 try{if(navigator.share){await navigator.share({title,url});return}
 await navigator.clipboard.writeText(url);btn.textContent=strings()[1];
 }catch(e){if(e?.name!=='AbortError')btn.textContent=strings()[2]}
};
function add(target,id,type,title){
 if(!target||!uuid.test(id))return;
 const old=target.querySelector('.lyy-item-share');if(old){if(old.dataset.itemId===id)return;old.remove()}
 const btn=document.createElement('button');btn.type='button';btn.className='lyy-item-share';
 btn.style.cssText='margin:6px 8px 6px 0;padding:6px 10px;font:inherit;font-size:13px;background:transparent;color:inherit;border:1px solid currentColor;border-radius:7px;cursor:pointer';
 btn.dataset.itemId=id;btn.dataset.shareLabel='true';btn.textContent='↗ '+strings()[0];
 const url=new URL(type==='article'?'/member-articles.html':'/forum.html',location.origin);
 url.hash=(type==='article'?'article=':'post=')+encodeURIComponent(id);
 const finalUrl=shareOrigin?shareOrigin+'/share/'+type+'/'+encodeURIComponent(id):url.href;
 btn.addEventListener('click',()=>share(btn,title,finalUrl));
 target.append(btn);
}
function render(){
 if(articlePage){
  document.querySelectorAll('#list details[id^="article-"]').forEach(details=>{
   const id=details.id.slice(8);
   const title=details.querySelector('summary')?.textContent?.trim()||document.title;
   add(details,id,'article',title);
  });
 }
 if(forumPage){
  const match=location.hash.match(/^#post=([^&]+)/);
  if(!match)return;
  let id;try{id=decodeURIComponent(match[1])}catch{return}
  const detail=document.getElementById('detail');
  if(!detail||detail.classList.contains('hide')||detail.hidden)return;
  add(document.getElementById('post-actions'),id,'forum',document.getElementById('detail-title')?.textContent?.trim()||document.title);
 }
}
let queued=false;
const schedule=()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;render()})};
new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden']});
window.addEventListener('hashchange',schedule);
new MutationObserver(()=>{document.querySelectorAll('.lyy-item-share[data-share-label]').forEach(btn=>btn.textContent='↗ '+strings()[0])}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
render();
})();
