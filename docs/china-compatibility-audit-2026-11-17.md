# 中国大陆兼容性测试分支：外部资源审计（2026-11-17）

本分支仅供测试，不影响正式网站。未修改域名、DNS、Cloudflare、VPN、Supabase 或正式页面。

## 当前页面依赖（来自仓库实际 HTML）
- index.html: marked@15.0.12, DOMPurify@3.2.6, @supabase/supabase-js@2（jsDelivr）；Unsplash 图片；Supabase API 与图片。
- forum.html: 同三项 jsDelivr 脚本；Supabase API；YouTube、Vimeo、Bilibili、TikTok、Facebook、X 等可选嵌入。
- gospel.html: @supabase/supabase-js@2（jsDelivr）；Supabase API。

## 下一步本地化的安全顺序
1. 下载并校验原版本第三方 JS 文件；保持原许可证与版权声明。
2. 将校验后的文件放在 vendor/ 目录，并先在本测试分支修改脚本 URL。
3. 检查首页渲染、论坛登录/发帖、福音园地播放/评论；对比浏览器控制台和网络请求。
4. 只有经过测试和用户明确同意，才将变更合并到正式分支。

## 尚未执行的部分
本次环境无法从 jsDelivr 下载依赖的原始文件，因此尚未添加 vendor 文件，也没有修改任何 HTML 脚本引用。不能将此分支视为已完成本地化或中国大陆可访问性测试。

## 风险边界
本地化仅减少第三方 CDN 依赖；无法解除域名/IP 层封锁，无法保证 Supabase API 在中国大陆可访问。
