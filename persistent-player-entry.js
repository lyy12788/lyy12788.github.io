/* Persistent audio mode entry: safe on standalone pages and within player shell. */
(()=>{'use strict';if(window.__lyyPlayerEntry)return;window.__lyyPlayerEntry=true;
const allowed=/^\/(?:|index\.html|forum\.html|gospel\.html|aid\.html|suggestions\.html|rules\.html|privacy\.html|content-complaints\.html)$/;
const inside=window.parent!==window;
function report(){if(inside){try{window.parent.postMessage({type:'lyy-page-url',url:location.href},location.origin)}catch{}}}
window.addEventListener('hashchange',report);window.addEventListener('popstate',report);report();
if(inside)return;
function mount(){if(document.getElementById('lyy-player-entry'))return;
const link=document.createElement('a');link.id='lyy-player-entry';link.textContent='♫ 持续播放模式';link.setAttribute('aria-label','打开全站持续播放模式');
link.href='/player.html?page='+encodeURIComponent(location.pathname+location.search+location.hash);
link.style.cssText='position:fixed;bottom:16px;right:16px;z-index:9999;background:#142538;color:#f2d17d;border:1px solid #8c763b;border-radius:999px;padding:9px 14px;font:600 13px system-ui,sans-serif;box-shadow:0 3px 14px #0008;text-decoration:none';
document.body.append(link);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();