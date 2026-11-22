(() => {
  'use strict';
  const home = document.getElementById('home-view');
  if (!home?.classList.contains('edition')) return;
  const mobile = matchMedia('(max-width:760px), (orientation:landscape) and (max-height:500px) and (max-width:1000px)');
  const paths = {
    menu:'M3 5h18M3 12h18M3 19h18', search:'M16 16l5 5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
    globe:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 12h20M12 2a18 18 0 0 1 0 20M12 2a18 18 0 0 0 0 20',
    user:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM3 21v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2Z',
    users:'M15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 21v-3a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v3M17 3a3 3 0 0 1 1 6M20 13a5 5 0 0 1 3 5v2M7 3a3 3 0 0 0-1 6M4 13a5 5 0 0 0-3 5v2',
    home:'M2 11 12 2l10 9M5 10v11h5v-7h4v7h5V10', article:'M5 2h9l5 5v15H5ZM14 2v6h5M8 11h8m-8 4h8m-8 4h5',
    layers:'m12 2 10 5-10 5L2 7Zm-10 9 10 5 10-5M2 15l10 5 10-5',
    chat:'M22 11a9 9 0 0 1-9 9H7l-5 2 2-5a9 9 0 1 1 18-6ZM7 11h.01M12 11h.01M17 11h.01',
    headphones:'M3 14v-3a9 9 0 0 1 18 0v3M3 13h4v8H5a2 2 0 0 1-2-2Zm18 0h-4v8h2a2 2 0 0 0 2-2Z',
    bell:'M5 9a7 7 0 0 1 14 0v5l2 4H3l2-4Zm4 12a3 3 0 0 0 6 0',
    info:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM12 11v6m0-10h.01',
    pen:'m3 17-1 5 5-1L21 7l-4-4Zm11-11 4 4',
    book:'M12 6v15m0-15C9 3 5 3 2 4v15c4-1 8-1 10 2 2-3 6-3 10-2V4c-3-1-7-1-10 2Z',
    star:'m12 2 3 7 7 .7-5 5 1.5 7.3-6.5-3.5L5.5 22 7 14.7l-5-5L9 9Z',
    dove:'M22 4c-2 0-3 1-4 3-2 1-3 2-5 2C7 8 5 5 4 1 2 6 4 11 8 14l-5 1 2 3-3 1 5 3 2-3c7-1 9-4 10-8l3-4 2-2Z'
  };
  function icon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    const path = document.createElementNS(svg.namespaceURI,'path');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill',name==='dove'?'currentColor':'none');
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('stroke-width',name==='dove'?'0':'1.8');
    svg.setAttribute('stroke-linejoin','round');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('aria-hidden','true');
    path.setAttribute('d',paths[name]);
    svg.append(path);
    return svg;
  }
  home.querySelectorAll('[data-edition-icon]').forEach(e=>e.append(icon(e.dataset.editionIcon)));
  const byId = id => document.getElementById(id);
  const word = key => window.lyyLanguage?.translate(key) ?? key;
  const fmt = date => {
    const value = new Date(date);
    return Number.isNaN(value.getTime()) ? '—' : new Intl.DateTimeFormat(document.documentElement.lang,{month:'2-digit',day:'2-digit'}).format(value);
  };
  const node = (tag,value,className) => {
    const e = document.createElement(tag);
    if(value)e.textContent=value;
    if(className)e.className=className;
    return e;
  };
  const articleLink = entry => entry.kind==='member'
    ? '/member-articles.html#article='+encodeURIComponent(entry.item.id)
    : '/index.html?articles=all#post='+encodeURIComponent(entry.item.slug);
  const topicLink = id => '/forum.html#post='+encodeURIComponent(id);
  const textBody = body => String(body||'').replace(/!\[[^\]]*\]\([^)]*\)/g,' ').replace(/<[^>]*>/g,' ').replace(/[>#*_\x60]/g,' ').replace(/\s+/g,' ').trim();
  const entries = () => [
    ...articles.map(item=>({kind:'site',item,date:item.date})),
    ...publicMemberArticles.map(item=>({kind:'member',item,date:item.published_at||item.created_at}))
  ].sort((a,b)=>new Date(b.date||0)-new Date(a.date||0));

  let articleMode='latest';
  window.editionOrderArticles=(items,stats)=>{
    const count=e=>stats.get(e.item.id||e.item.slug);
    if(articleMode==='popular')return [...items].sort((a,b)=>(count(b)?.views??-1)-(count(a)?.views??-1)||(count(b)?.likes??-1)-(count(a)?.likes??-1));
    if(articleMode==='recommended')return [...items].sort((a,b)=>Number(Boolean(b.item.featured||b.item.recommended))-Number(Boolean(a.item.featured||a.item.recommended))||(count(b)?.likes??-1)-(count(a)?.likes??-1));
    return items;
  };
  home.querySelectorAll('[data-article-mode]').forEach(b=>b.onclick=()=>{
    articleMode=b.dataset.articleMode;
    home.querySelectorAll('[data-article-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    renderArticles();
  });

  let slideIndex=0;
  let slideSignature=null;
  function showSlide(index) {
    const slides=Array.from(home.querySelectorAll('.edition-slide')).filter(e=>mobile.matches||!e.hasAttribute('data-edition-phone-slide'));
    if(!slides.length)slides.push(home.querySelector('[data-edition-phone-slide]'));
    slideIndex=(index+slides.length)%slides.length;
    home.querySelectorAll('.edition-slide').forEach(s=>s.hidden=s!==slides[slideIndex]);
    byId('edition-dots').replaceChildren(...(slides.length>1?slides.map((_,i)=>{
      const dot=node('button','');
      dot.type='button';
      dot.setAttribute('aria-label',word('焦点内容')+' '+(i+1));
      dot.setAttribute('aria-pressed',String(i===slideIndex));
      dot.onclick=()=>showSlide(i);
      return dot;
    }):[]));
    home.querySelectorAll('[data-edition-step]').forEach(b=>b.hidden=slides.length<2);
  }
  function renderSlides() {
    const active=entries().slice(0,4);
    const signature=active.map(x=>articleLink(x)).join('|');
    if(signature===slideSignature)return;
    slideSignature=signature;
    byId('edition-slides').replaceChildren(...active.map((entry,i)=>{
      const slide=node('div','','edition-slide '+['edition-lighthouse','edition-mountain','edition-community','edition-book'][i]);
      const title=node('h2',entry.item.title);
      const description=node('p',textBody(entry.item.body).slice(0,70));
      title.setAttribute('data-user-content','');
      description.setAttribute('data-user-content','');
      const link=node('a','阅读全文 →');link.href=articleLink(entry);
      slide.append(node('span','本周推荐','edition-kicker'),title,description,link);
      return slide;
    }));
    showSlide(0);
  }
  home.querySelectorAll('[data-edition-step]').forEach(b=>b.onclick=()=>showSlide(slideIndex+Number(b.dataset.editionStep)));
  new MutationObserver(renderSlides).observe(byId('article-list'),{childList:true});
  window.editionStatsLoaded=()=>{if(articleMode!=='latest')renderArticles();};

  let discussionMode='latest';
  const comments = item => item.forum_comments?.[0]?.count ?? null;
  const sortedDiscussions = () => [...(window.editionDiscussionData||[])].sort((a,b)=>(comments(b)??-1)-(comments(a)??-1));
  window.editionRenderDiscussions=()=>{
    const items=window.editionDiscussionData||[];
    const root=byId('community-feed-list');
    const top=byId('edition-hot-topics');
    if(!items.length){
      root.textContent=top.textContent='目前还没有公开的会员讨论。';
      return;
    }
    const rows=(mobile.matches||discussionMode==='popular'?sortedDiscussions():items).slice(0,mobile.matches?3:5);
    root.replaceChildren(...rows.map(item=>{
      const link=node('a','');
      link.href=topicLink(item.id);
      const title=node('strong',item.title);title.setAttribute('data-user-content','');
      const topicGraphic=icon('chat');topicGraphic.setAttribute('width','19');topicGraphic.setAttribute('height','19');
      const count=node('span','♧ '+(comments(item)??'—'),'edition-discussion-count');
      count.setAttribute('aria-label',word('评论')+' '+(comments(item)??'—'));
      link.append(topicGraphic,title,count,node('small',item.category+' · '+fmt(item.created_at)));
      return link;
    }));
    top.replaceChildren(...sortedDiscussions().slice(0,5).map(item=>{
      const row=node('li',''), link=node('a',''), title=node('span',item.title);
      link.href=topicLink(item.id);
      title.setAttribute('data-user-content','');
      link.append(title,node('span',String(comments(item)??'—')));
      row.append(link);
      return row;
    }));
  };
  home.querySelectorAll('[data-discussion-mode]').forEach(b=>b.onclick=()=>{
    discussionMode=b.dataset.discussionMode;
    home.querySelectorAll('[data-discussion-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    window.editionRenderDiscussions();
  });

  const menu=byId('edition-menu'),menuToggle=byId('edition-menu-toggle');
  function showMenu(visible) {
    menu.hidden=!visible;
    menuToggle.setAttribute('aria-expanded',String(visible));
  }
  menuToggle.onclick=()=>showMenu(menu.hidden);
  menu.addEventListener('click',event=>{if(event.target.closest('a'))showMenu(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')showMenu(false);});

  const search=byId('edition-search'),searchToggle=byId('edition-search-toggle'),input=byId('edition-query');
  const searchResults=node('div','','edition-search-results');
  searchResults.hidden=true;search.append(searchResults);
  searchToggle.onclick=()=>{
    search.hidden=!search.hidden;
    searchToggle.setAttribute('aria-expanded',String(!search.hidden));
    if(!search.hidden)input.focus();
  };
  search.onsubmit=event=>{
    event.preventDefault();
    const query=input.value.trim().toLocaleLowerCase();
    if(!query){searchResults.hidden=true;return;}
    const results=[
      ...entries().map(x=>[x.item.title,articleLink(x)]),
      ...(window.editionDiscussionData||[]).map(x=>[x.title,topicLink(x.id)]),
      ...Array.from(home.querySelectorAll('.edition-resource-grid a')).map(a=>[a.textContent.trim(),a.href])
    ].filter(([title])=>title?.toLocaleLowerCase().includes(query)).slice(0,8);
    searchResults.replaceChildren(...results.map(([title,url])=>{const a=node('a',title);a.href=url;a.setAttribute('data-user-content','');return a;}));
    if(!results.length)searchResults.textContent='没有找到匹配的内容。';
    searchResults.hidden=false;
  };
  document.addEventListener('click',event=>{if(!event.target.closest('.edition-search,.edition-search-button'))searchResults.hidden=true;});

  const locale=byId('edition-language');
  locale.onchange=()=>window.lyyLanguage?.set(locale.value);
  function updateLanguage() {
    locale.value=document.documentElement.lang;
    showSlide(slideIndex);
  }
  let lastLanguage='';
  new MutationObserver(()=>{
    if(lastLanguage===document.documentElement.lang)return;
    lastLanguage=document.documentElement.lang;updateLanguage();
  }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  function account() { (user ? byId('nav-user') : byId('nav-login')).click(); }
  home.addEventListener('click',event=>{
    const action=event.target.closest('[data-edition-action]')?.dataset.editionAction;
    if(!action)return;
    if(action==='account'){account();return;}
    if(action==='publish'){byId('article-publish-entry').click();return;}
    if(action==='admin'){byId('nav-admin').click();return;}
    if(action==='appearance'){
      if(window.parent!==window)window.parent.postMessage({type:'lyy-edition-theme'},location.origin);
      else document.querySelector('#lyy-theme-control summary')?.click();
      return;
    }
    if(action==='bookmark'||action==='copy'||action==='save'){
      if(action==='save'&&!user){account();return;}
      byId('article-publish-entry').nextElementSibling?.querySelectorAll('button')[action==='copy'?1:0]?.click();
      return;
    }
    if(!user){account();return;}
    if(action==='notifications')location.href='/notifications.html';
    if(action==='comment')location.href=(window.editionDiscussionData||[])[0]?topicLink(window.editionDiscussionData[0].id):'/forum.html';
  });
  function updateAccount() {
    const label=byId('edition-account-label');
    const text=user?'我的账户':'登录 / 注册';
    if(label.textContent!==text)label.textContent=text;
    home.querySelector('[data-edition-action="admin"]').hidden=byId('nav-admin').hidden;
  }
  for(const id of ['nav-login','nav-user','nav-admin'])new MutationObserver(updateAccount).observe(byId(id),{attributes:true,attributeFilter:['hidden']});
  try {
    const source=window.parent.document.getElementById('lyy-notification-count');
    const badge=home.querySelector('.edition-unread');
    if(source){
      const mirror=()=>{badge.textContent=source.textContent;badge.hidden=source.style.display==='none'||!source.textContent;};
      new MutationObserver(mirror).observe(source,{attributes:true,childList:true,characterData:true,subtree:true});mirror();
    }
  }catch(e){/* On a standalone page the shared notification script owns the badge. */}
  function resize() {
    search.hidden=mobile.matches;
    showSlide(0);
    if(window.editionDiscussionData)window.editionRenderDiscussions();
  }
  mobile.addEventListener('change',resize);
  updateAccount();updateLanguage();renderSlides();resize();
  if(window.editionDiscussionData)window.editionRenderDiscussions();
})();
