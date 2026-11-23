/* Isolated gospel audio item share enhancement. No direct media URLs are shared. */
(()=>{
  'use strict';
  const list=document.getElementById('drive-list');
  if(!list||window.LYY_SHARE_FLAGS?.audio!==true)return;
  const params=new URLSearchParams(location.hash.replace(/^#/,''));
  const target=params.get('audio');
  const labels={zh:{share:'分享',copied:'链接已复制',failed:'无法复制链接'},en:{share:'Share',copied:'Link copied',failed:'Could not copy link'},ko:{share:'공유',copied:'링크 복사됨',failed:'링크 복사 실패'},ja:{share:'共有',copied:'リンクをコピーしました',failed:'リンクをコピーできません'}};
  const lang=()=>{const v=document.documentElement.lang.toLowerCase().split('-')[0];return labels[v]||labels.zh};
  const getUrl=id=>{const url=new URL('/gospel.html',location.origin);url.hash=new URLSearchParams({audio:id}).toString();return url.href};
  let focused=false;
  const decorate=()=>{
    for(const row of list.querySelectorAll('.sermon-row[data-sermon-id]')){
      const id=row.dataset.sermonId;
      if(!id)continue;
      if(!row.querySelector('.lyy-audio-share')){
        const btn=document.createElement('button');
        btn.type='button';btn.className='lyy-audio-share';btn.dataset.lyyMediaUi='';
        btn.style.cssText='font:inherit;font-size:12px;padding:5px 8px;border:1px solid currentColor;border-radius:6px;background:transparent;color:inherit;cursor:pointer';
        btn.dataset.shareLabel='true';btn.textContent='↗ '+lang().share;
        btn.addEventListener('click',async()=>{
          const title=row.querySelector('.sermon-play-label strong')?.textContent?.trim()||document.title;
          const url=getUrl(id);
          try{
            if(navigator.share){await navigator.share({title,url});return;}
            await navigator.clipboard.writeText(url);btn.textContent=lang().copied;
          }catch(error){if(error?.name!=='AbortError')btn.textContent=lang().failed;}
        });
        row.append(btn);
      }
      if(target===id&&!focused){
        focused=true;
        row.setAttribute('tabindex','-1');
        row.style.scrollMarginTop='90px';
        row.style.outline='2px solid #e7b72e';
        requestAnimationFrame(()=>row.scrollIntoView({block:'center'}));
      }
    }
  };
  let scheduled=false;
  const schedule=()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;decorate()})};
  new MutationObserver(schedule).observe(list,{childList:true});
  decorate();
  new MutationObserver(()=>{list.querySelectorAll('.lyy-audio-share[data-share-label]').forEach(btn=>btn.textContent='↗ '+lang().share)}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
