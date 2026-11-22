/* Shared touch navigation: swipe right to close an open dialog, otherwise return to parent. */
(()=>{'use strict';if(window.__lyySwipeNavigation)return;window.__lyySwipeNavigation=true;
let start=null;
const visible=e=>!!e&&e.getClientRects().length>0&&getComputedStyle(e).visibility!=='hidden'&&!e.hidden;
function overlay(){const all=[...document.querySelectorAll('dialog[open], [role="dialog"], .modal-backdrop, [aria-modal="true"], .modal[open]')];return all.reverse().find(e=>visible(e)&&!e.closest('[hidden]')&&getComputedStyle(e).display!=='none')||null;}
function closeOverlay(e){const d=e.closest('dialog');if(d&&d.open){d.close();return true;}const layer=e.closest('.modal-backdrop')||e;const btn=layer.querySelector('[data-dismiss],[data-close],.close-btn,.modal-close,[aria-label="关闭"],[aria-label="Close"],[id$="-close"]');if(btn&&visible(btn)){btn.click();return true;}if(layer.id==='auth-modal'&&typeof window.closeAuth==='function'){window.closeAuth();return true;}return false;}
function parentPage(){const p=location.pathname.toLowerCase();if(p==='/'||p.endsWith('/index.html')){if(location.hash&&location.hash!=='#home'){location.hash='home';return;}return;}const parent={'/notifications.html':'/#account','/player.html':'/gospel.html','/audio-upload.html':'/gospel.html','/editor-column.html':'/articles.html','/article-publish-entry.js':'/articles.html','/content-complaints.html':'/forum.html','/admin/index.html':'/'};location.assign(parent[p]||'/');}
document.addEventListener('touchstart',e=>{if(e.touches.length!==1){start=null;return;}const t=e.touches[0];start={x:t.clientX,y:t.clientY,time:Date.now(),target:e.target,dialog:overlay()};},{passive:true});
document.addEventListener('touchcancel',()=>{start=null;},{passive:true});
document.addEventListener('touchend',e=>{if(!start||e.changedTouches.length!==1)return;const s=start;start=null;const t=e.changedTouches[0],dx=t.clientX-s.x,dy=t.clientY-s.y;if(dx<85||Math.abs(dy)>Math.abs(dx)*0.65||Date.now()-s.time>1100)return;
if(s.target.closest('input,textarea,select,[contenteditable="true"],[role="slider"],.carousel,.swiper,.horizontal-scroll,[data-no-swipe]'))return;
if(s.dialog){if(visible(s.dialog))closeOverlay(s.dialog);return;}
if(overlay())return;
const h=location.hash;if((location.pathname==='/'||location.pathname.endsWith('/index.html'))&&h&&h!=='#home'){location.hash='home';return;}
if(/^\/member-articles(?:\.html)?$/.test(location.pathname)&&h.startsWith('#article=')){location.assign('/#home');return;}
if(history.length>1&&document.referrer&&new URL(document.referrer).origin===location.origin){history.back();return;}parentPage();
},{passive:true});
})();