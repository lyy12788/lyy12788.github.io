/* Translate dynamic curation badges and owner media footer without changing article titles. */
(()=>{'use strict';const words={
'zh-CN':['置顶','精选','站长媒体圈','进入栏目 →'],
'zh-TW':['置頂','精選','站長媒體圈','進入欄目 →'],
'en':['Pinned','Featured','Site owner’s social media','Open section →'],
'ko':['상단 고정','추천','사이트 운영자 소셜 미디어','바로가기 →'],
'ja':['固定表示','おすすめ','サイト運営者のSNS','セクションへ →']};
let busy=false;function update(){if(busy)return;busy=true;try{const l=(document.documentElement.lang||'zh-CN').toLowerCase();const w=words[l.startsWith('zh-tw')||l.startsWith('zh-hant')?'zh-TW':l.startsWith('ko')?'ko':l.startsWith('ja')?'ja':l.startsWith('en')?'en':'zh-CN'];document.querySelectorAll('[data-lyy-curation-badge]').forEach(el=>{const labels=el.dataset.lyyCurationBadge.split(',').map(v=>v==='pinned'?w[0]:v==='featured'?w[1]:'').filter(Boolean).join(' · ');if(el.textContent!==labels)el.textContent=labels});const media=document.querySelector('#social-entry .social-entrance strong');if(media&&media.textContent!==w[2])media.textContent=w[2];const enter=document.querySelector('#social-entry .social-entrance [aria-hidden="true"]');if(enter&&enter.textContent!==w[3])enter.textContent=w[3]}finally{busy=false}}
new MutationObserver(update).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['lang','data-lyy-curation-badge']});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update);else update();
})();
