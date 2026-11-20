# 隔离预览环境（2026-11-20）

本分支仅用于测试，**禁止合并至 main**。正式发布代码应从 staging/auth-guestbook-20261120 分支合并，不能从本预览分支合并，以免覆盖正式数据库连接。

测试 Supabase: bjlzeqfpyynavvcwmyez (LYY12788-Test)。
正式 Supabase: mkchupvmervxkskvjyhz (LYY12788-Comments)。

目前 index.html、forum.html、member-articles.html 的 Supabase 客户端和函数端点已改为测试项目。尚未全面检查其他 HTML/JS 页面是否仍引用正式项目，因此**不得将本分支当作已安全完成隔离的公开测试站**。

测试库仅建立了 member_articles 基础表和基础 RLS；论坛、评论、账户管理、消息中心、管理员、媒体、RPC 等尚未迁移，不能做端到端验收。

正式站所有数据、存储和账号均不得复制到测试项目。使用新注册的虚拟测试账号。不得将服务端私钥写入 GitHub 仓库。

上线前检查：全仓正式 Supabase URL / Key 搜索、测试数据库 RLS、翻译五语、桌面和手机横竖屏、管理员和封禁权限、文章发布和隐私；移除废弃访客留言迁移；确认邮箱认证策略和正式数据库迁移方案；完整回归后才合并。

## 本轮进度
- 已创建测试数据库 38 张 public 表的**结构骨架**，全部启用 RLS；不包含正式会员资料或内容。
- 仅 member_articles 有最小可用 RLS；其他表尚未复制原始约束、索引、触发器、函数和业务权限，默认拒绝访问。这不等于完整数据库迁移，也不等于测试通过。
- 已替换 index.html、forum.html、member-articles.html、gospel.html 的 Supabase URL 和公开密钥；其他页面需通过全仓检查确认。
- scripts/check-preview-isolation.py 和 .github/workflows/preview-isolation.yml 用于检测预览分支是否意外引用正式 Supabase，另执行 JS 语法检查。CI 结果未确认之前，不得公开测试站。
- staging/auth-guestbook-20261120 是未来正式发布候选分支；本预览分支包含测试数据库连接，**不得合并到 main**。

## 2026-11-20 additional database work
- 测试库已复制全部 38 张表、43 个业务触发器、120 条 public RLS 策略、17 条 storage.objects RLS 策略、6 个空存储桶、全部 9 个 identity 自增列，以及相关约束、索引、默认值。
- 测试库已部署 3 个非 R2 Edge Functions：forum-link-preview、forum-publish-reviewed、forum-confirm-account-deletion。r2-audio-upload-url 依赖 Cloudflare R2 密钥，**未部署**，也没有复制生产密钥。
- 测试库 public 业务函数为 71 个；正式库为 72 个，故意没有复制 rls_auto_enable 事件触发相关函数。正式与测试函数行为还有一处差异：forum_is_active_member 在测试库移除了邮箱验证限制。
- 修复了最初未复制列级授权的问题。测试库会员文章公开字段可由 anon 查询，私有 reviewer_access 字段被拒绝。访客留言 anon INSERT 已在事务中测试成功，超长留言被 CHECK 约束拒绝；匿名用户无 SELECT 权限。
- 测试库与正式库 public RLS 策略均为 120 条；**业务实际运行、账号邮件配置、R2 密钥、全仓扫描 CI 及浏览器兼容性尚未验证**。
- 正式发布候选分支新增 staging-migrations/20261120_guestbook_submit_only.sql，仅作为候选迁移，**未应用生产**。
