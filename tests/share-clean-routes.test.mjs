import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../js/content-item-share.js', import.meta.url),'utf8');
const paths=[
  ['/member-articles',true], ['/member-articles/',true], ['/member-articles.html',true],
  ['/forum',true], ['/forum/',true], ['/forum.html',true],
  ['/gospel',false], ['/forum-extra',false], ['/member-articles-old',false]
];
for(const [pathname,shouldActivate] of paths){
  const context={
    location:{pathname},
    window:{LYY_SHARE_FLAGS:{article:true,forum:true}},
    document:{documentElement:{lang:'zh-CN'},body:{}},
    MutationObserver:class {observe(){}},
    queueMicrotask(){},
  };
  let triggered=false;
  const fakeBody={};
  context.document.body=fakeBody;
  // A recognized page with flags enabled reaches DOM render, which queries selectors.
  context.document.querySelectorAll=()=>{triggered=true;return []};
  context.document.getElementById=()=>{triggered=true;return null};
  context.window.addEventListener=()=>{};
  context.location.hash='';
  vm.runInNewContext(source,context,{filename:'content-item-share.js'});
  assert.equal(triggered,shouldActivate,pathname);
}
for(const pathname of ['/member-articles','/forum']){
  let triggered=false;
  const context={location:{pathname,hash:''},window:{LYY_SHARE_FLAGS:{article:false,forum:false}},document:{},MutationObserver:class{observe(){triggered=true}}};
  vm.runInNewContext(source,context);
  assert.equal(triggered,false,`Flag-off ${pathname}`);
}
console.log('Clean-route and .html share-path coverage, plus default-off behavior: passed');
