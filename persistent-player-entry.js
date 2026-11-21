/* Keep the site inside one persistent audio shell, without a mode button. */
(()=>{'use strict';
const allowed=/^\/(?:(?:index|forum|gospel|aid|suggestions|rules|privacy|content-complaints|post1|audio-upload|articles|member-articles|editor-column|resources|member-blog-preview)(?:\.html)?)?$/;
const route=location.pathname+location.search+location.hash;
if(!allowed.test(location.pathname)||location.pathname==='/player.html')return;
if(window.parent===window){location.replace('/player.html?page='+encodeURIComponent(route));return;}
const send=(url,push=true)=>window.parent.postMessage({type:'lyy-site-navigate',url,push},location.origin);
document.addEventListener('click',e=>{const a=e.target.closest?.('a[href]');if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;let u;try{u=new URL(a.href,location.href)}catch{return}if(u.origin!==location.origin||!allowed.test(u.pathname))return;if(u.pathname===location.pathname&&u.search===location.search)return;e.preventDefault();e.stopImmediatePropagation();send(u.pathname+u.search+u.hash)},true);
})();
