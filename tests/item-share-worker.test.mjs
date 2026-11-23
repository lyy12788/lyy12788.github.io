import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../cloudflare/item-share-worker.mjs';
const id='123e4567-e89b-42d3-a456-426614174000';
const env={PUBLIC_SITE_ORIGIN:'https://lyy12788.com',SHARE_ORIGIN:'https://share-preview.example.com',SUPABASE_URL:'https://example.supabase.co',SUPABASE_PUBLISHABLE_KEY:'test-public-key'};
const url='https://share-preview.example.com/share/article/'+id;
async function call({path=url,row={id,title:'公开标题 <测试>',body:'摘要内容 & 详情',status:'published'},method='GET'}={}) {
  const original=globalThis.fetch;let requested;
  globalThis.fetch=async (request,options)=>{requested={request:String(request),options};return new Response(JSON.stringify(row?[row]:[]),{headers:{'content-type':'application/json'}})};
  try{return {response:await worker.fetch(new Request(path,{method}),env),requested}} finally {globalThis.fetch=original}
}
test('published article has escaped title, excerpt and canonical reader link',async()=>{
 const {response,requested}=await call();const html=await response.text();
 assert.equal(response.status,200);assert.match(html,/og:title" content="公开标题 &lt;测试&gt;"/);
 assert.match(html,/og:description" content="摘要内容 &amp; 详情"/);
 assert.match(html,/member-articles.html#article=/);
 assert.match(html,/share-article.jpg/);
 assert.match(requested.request,/status=eq.published/);
 assert.equal(requested.options.headers.apikey,env.SUPABASE_PUBLISHABLE_KEY);
});
test('unpublished or missing rows are never previewed',async()=>{
 for(const row of [null,{id,title:'private',body:'secret',status:'draft'}]){
  const {response}=await call({row});assert.equal(response.status,row?404:404);assert.doesNotMatch(await response.text(),/secret/);
 }
});
test('forum uses published forum posts and forum reader route',async()=>{
 const {response,requested}=await call({path:url.replace('/article/','/forum/'),row:{id,title:'Forum',body:'Forum body',status:'published'}});
 assert.match(requested.request,/forum_posts/);const html=await response.text();assert.match(html,/forum.html#post=/);assert.match(html,/share-forum.jpg);
});
test('invalid ids, origins, and methods do not query database',async()=>{
 for(const path of ['https://share-preview.example.com/share/article/bad','https://evil.example/share/article/'+id]){
  const {response,requested}=await call({path});assert.equal(response.status,404);assert.equal(requested,undefined);
 }
 const {response}=await call({method:'POST'});assert.equal(response.status,405);
});
test('HEAD has headers but no body',async()=>{const {response}=await call({method:'HEAD'});assert.equal(response.status,200);assert.equal(await response.text(),'')});
