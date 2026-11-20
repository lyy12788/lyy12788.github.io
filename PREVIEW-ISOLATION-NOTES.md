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
