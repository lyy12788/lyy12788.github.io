# 单篇文章及论坛分享预览：隔离开发方案

本分支从 PR #25 当前版本分出，**不合并、不部署正式网站**。

## 已实现（代码）
- `cloudflare/item-share-worker.mjs`：单一只读 Cloudflare Worker，支持 `/share/article/<uuid>` 和 `/share/forum/<uuid>`。
- 从 Supabase REST API 以 **publishable/anon key** 查询 `status=published` 的文章/帖子，未公开或不存在返回 404，数据库故障返回 503。
- HTML 服务端输出真实标题、正文约 110 字摘要、OG/Twitter 元数据、现有栏目默认封面和原阅读地址。正文/标题 HTML 转义。
- 浏览器支持 JavaScript 时跳转原阅读页；禁用 JavaScript 时显示“阅读原文”链接。
- `tests/item-share-worker.test.mjs`：无数据库写入的模拟单元测试。

## 上线前必须完成
1. 独立 Worker 预览环境设置 `SUPABASE_URL`、`SUPABASE_PUBLISHABLE_KEY`、`PUBLIC_SITE_ORIGIN`、`SHARE_ORIGIN`。测试优先使用独立 Supabase 测试项目，且 `SHARE_ORIGIN` 必须与请求域名一致。**不能**配置 service_role/secret key。
2. 在独立测试库验证公开读权限、草稿/待审核/删除内容不可见，检查 URL/图片访问和跨账号数据隔离。
3. 实测 Facebook、X、微信等抓取器是否能访问分享 URL。分享封面目前为默认栏目图，未启用文章配图，因为文章图片保存在私有存储中。
4. **尚未修改**站内分享按钮或复制链接行为。先决定分享域名和 Worker 路由，确保不会覆盖现有页面；然后将“分享”链接指向新的 `/share/<type>/<id>` URL，文章阅读链接仍保持原样。
5. 站长和会员操作测试在隔离测试库进行。PR #25 原有登录/权限测试仍未完成，不能因本分支单元测试通过而宣称网站全面验收通过。

## 技术约束
- GitHub Pages 不支持每条文章动态 OG；必须由 Worker 以服务端 HTML 输出。
- `#article=`、`#post=` 仍是原有阅读 URL；爬虫必须抓取无 hash 的分享 URL。
- Worker 不设置公开缓存，避免删除/撤销公开后继续泄露正文；第三方平台可能自行缓存，需要另行刷新抓取缓存。
- 目前仅开发分支代码，没有 Worker 部署，也没有修改主站、生产数据库或 GitHub main。
