# 隔离预览环境（2026-11-20）

本分支仅用于测试，**禁止合并至 main**。正式发布代码应从 staging/auth-guestbook-20261120 分支合并，不能从本预览分支合并，以免覆盖正式数据库连接。

测试 Supabase: bjlzeqfpyynavvcwmyez (LYY12788-Test)。
正式 Supabase: mkchupvmervxkskvjyhz (LYY12788-Comments)。

目前 index.html、forum.html、member-articles.html 的 Supabase 客户端和函数端点已改为测试项目。尚未全面检查其他 HTML/JS 页面是否仍引用正式项目，因此**不得将本分支当作已安全完成隔离的公开测试站**。

测试库仅建立了 member_articles 基础表和基础 RLS；论坛、评论、账户管理、消息中心、管理员、媒体、RPC 等尚未迁移，不能做端到端验收。

正式站所有数据、存储和账号均不得复制到测试项目。使用新注册的虚拟测试账号。不得将服务端私钥写入 GitHub 仓库。

上线前检查：全仓正式 Supabase URL / Key 搜索、测试数据库 RLS、翻译五语、桌面和手机横竖屏、管理员和封禁权限、文章发布和隐私；移除废弃访客留言迁移；确认邮箱认证策略和正式数据库迁移方案；完整回归后才合并。
