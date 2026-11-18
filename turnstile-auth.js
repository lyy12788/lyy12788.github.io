/* Cloudflare Turnstile public site key only. Do not enable Supabase CAPTCHA until all flows are tested. */
(function(){
'use strict';
const sitekey='0x4AAAAAAGGnVWmQ5iuhoCUb';
let ready=false,loading=false;
window.lyyTurnstile={
 token(){try{return window.turnstile?.getResponse(window.lyyTurnstile.widgetId)||''}catch(_){return ''}},
 reset(){try{if(window.lyyTurnstile.widgetId!==undefined)window.turnstile?.reset(window.lyyTurnstile.widgetId)}catch(_){}},
 mount(id){const target=document.getElementById(id);if(!target)return;
 const render=()=>{if(!window.turnstile||target.dataset.mounted)return;try{window.lyyTurnstile.widgetId=window.turnstile.render(target,{sitekey,theme:'auto',appearance:'always'});target.dataset.mounted='1';ready=true}catch(e){console.warn('Turnstile unavailable',e)}};
 if(window.turnstile){render();return}if(!loading){loading=true;const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;script.defer=true;script.onload=()=>{loading=false;document.querySelectorAll('[data-lyy-turnstile]').forEach(el=>window.lyyTurnstile.mount(el.id))};script.onerror=()=>{loading=false;console.warn('Turnstile script unavailable')};document.head.append(script)}
 }
};
document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('[data-lyy-turnstile]').forEach(el=>window.lyyTurnstile.mount(el.id)));
})();
