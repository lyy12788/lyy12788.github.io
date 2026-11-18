/* Cloudflare Turnstile public site key; CAPTCHA enforcement remains disabled until tested. */
(function(){'use strict';
const sitekey='0x4AAAAAAGGnVWmQ5iuhoCUb';let loading=false,loaded=false;
const api={widgetId:undefined,token(){try{return window.turnstile?.getResponse(api.widgetId)||''}catch(_){return ''}},reset(){try{if(api.widgetId!==undefined)window.turnstile?.reset(api.widgetId)}catch(_){}}};window.lyyTurnstile=api;
function visible(el){return !!(el&&el.getClientRects().length&&getComputedStyle(el).visibility!=='hidden')}
function mount(){if(!window.turnstile)return;document.querySelectorAll('[data-lyy-turnstile]').forEach(el=>{if(!visible(el)||el.dataset.mounted)return;try{api.widgetId=window.turnstile.render(el,{sitekey,theme:'auto',appearance:'always'});el.dataset.mounted='1'}catch(e){console.warn('Turnstile render failed',e)}})}
function init(){if(loaded||loading)return;loading=true;const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;script.onload=()=>{loaded=true;loading=false;mount()};script.onerror=()=>{loading=false;console.warn('Turnstile script could not load')};document.head.append(script)}
function setup(){init();mount();const modal=document.getElementById('auth-modal');if(modal){new MutationObserver(mount).observe(modal,{attributes:true,attributeFilter:['hidden','class','style']});document.addEventListener('click',()=>setTimeout(mount,0),true)}else{new MutationObserver(mount).observe(document.body,{attributes:true,childList:true,subtree:true,attributeFilter:['hidden','class','style']})}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
