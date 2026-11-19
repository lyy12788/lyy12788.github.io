/* Static UI translations. User content and media titles are deliberately excluded. */
(()=>{'use strict';const langs=['zh-CN','zh-TW','en','ko','ja'];const data={"上传成功，图片已添加到文章。":["上傳成功，圖片已加入文章。","Uploaded. Image added to article.","업로드 완료. 이미지가 글에 추가되었습니다.","アップロード完了。画像を記事に追加しました。"],"上传失败：":["上傳失敗：","Upload failed: ","업로드 실패: ","アップロード失敗："],"正在上传……":["正在上傳……","Uploading…","업로드 중…","アップロード中…"],"个人资料已保存。":["個人資料已儲存。","Profile saved.","프로필이 저장되었습니다.","プロフィールを保存しました。"],"请先登录并打开文章。":["請先登入並開啟文章。","Sign in and open an article first.","로그인한 후 글을 여세요.","ログインして記事を開いてください。"],"评论已公开发表。":["評論已公開發表。","Comment published.","댓글이 게시되었습니다.","コメントを公開しました。"],"请先验证邮箱后再发表评论。":["請先驗證電子郵件後再發表評論。","Verify your email before commenting.","댓글을 작성하기 전에 이메일을 인증하세요.","コメントする前にメール認証を完了してください。"],"正在处理……":["正在處理……","Processing…","처리 중…","処理中…"],"设置新密码":["設定新密碼","Set a new password","새 비밀번호 설정","新しいパスワードを設定"],"密码已更新。":["密碼已更新。","Password updated.","비밀번호가 변경되었습니다.","パスワードを更新しました。"],"密码已更新，请妥善保管。":["密碼已更新，請妥善保管。","Password updated. Keep it secure.","비밀번호가 변경되었습니다. 안전하게 보관하세요.","パスワードを更新しました。安全に管理してください。"],"正在发送重置邮件……":["正在傳送重設郵件……","Sending password reset email…","비밀번호 재설정 이메일을 보내는 중…","パスワード再設定メールを送信中…"],"请先填写邮箱地址。":["請先填寫電子郵件地址。","Enter your email address first.","먼저 이메일 주소를 입력하세요.","先にメールアドレスを入力してください。"],"登录成功。":["登入成功。","Signed in successfully.","로그인했습니다.","ログインしました。"],"请填写邮箱和密码。":["請填寫電子郵件和密碼。","Enter your email and password.","이메일과 비밀번호를 입력하세요.","メールアドレスとパスワードを入力してください。"],"登录服务暂时无法连接。":["登入服務暫時無法連線。","Sign-in service is temporarily unavailable.","로그인 서비스에 일시적으로 연결할 수 없습니다.","ログインサービスに一時的に接続できません。"],"密码至少10位，必须同时包含大写字母、小写字母和数字。":["密碼至少10位，必須同時包含大寫字母、小寫字母和數字。","Password must be at least 10 characters and include uppercase and lowercase letters and a number.","비밀번호는 10자 이상이며 대문자, 소문자, 숫자를 모두 포함해야 합니다.","パスワードは10文字以上で、大文字・小文字・数字をすべて含めてください。"],"修改密码（至少10位，包含大写字母、小写字母和数字）":["修改密碼（至少10位，包含大寫字母、小寫字母和數字）","Change password (10+ characters, uppercase, lowercase and number)","비밀번호 변경 (10자 이상, 대문자·소문자·숫자 포함)","パスワード変更（10文字以上、大文字・小文字・数字を含む）"],"新密码（至少10位，包含大写字母、小写字母和数字）":["新密碼（至少10位，包含大寫字母、小寫字母和數字）","New password (10+ characters, uppercase, lowercase and number)","새 비밀번호 (10자 이상, 대문자·소문자·숫자 포함)","新しいパスワード（10文字以上、大文字・小文字・数字を含む）"],"图片已安全保存到私人审核区；审核通过后才会公开。请勿上传身份证件、住址等敏感信息。":["圖片已安全儲存至私人審核區；審核通過後才會公開。請勿上傳證件、住址等敏感資訊。","Image stored privately for review. It becomes public only after approval. Do not upload IDs, addresses or sensitive information.","이미지는 비공개 심사 공간에 저장되며 승인 후에만 공개됩니다. 신분증, 주소 등 민감한 정보를 올리지 마세요.","画像は非公開の審査領域に保存され、承認後にのみ公開されます。身分証や住所などの機密情報をアップロードしないでください。"],"预览待审核私有图片":["預覽待審核私人圖片","Preview private pending image","심사 대기 중인 비공개 이미지 미리보기","審査待ちの非公開画像をプレビュー"],"图片读取失败":["圖片讀取失敗","Image could not be loaded","이미지 불러오기 실패","画像の読み込みに失敗しました"],"图片已上传。注意：当前图片链接可被直接访问，即使帖子尚未审核；请勿上传身份证件、住址或其他隐私信息。":["圖片已上傳。注意：即使貼文尚未審核，圖片連結仍可直接存取；請勿上傳證件、住址或其他私隱資料。","Image uploaded. Its link is publicly accessible even before post approval. Do not upload IDs, addresses, or other private information.","이미지가 업로드되었습니다. 게시글 승인 전에도 이미지 링크로 직접 접근할 수 있습니다. 신분증, 주소 등 개인정보를 업로드하지 마세요.","画像をアップロードしました。投稿の審査前でも画像URLから閲覧できます。身分証明書、住所などの個人情報をアップロードしないでください。"],"待审核文章修改":["待審核文章修改","Pending article revisions","기사 수정 심사 대기","記事修正の審査待ち"],"修改申请加载失败":["修改申請載入失敗","Failed to load revision requests","수정 신청 불러오기 실패","修正申請の読み込みに失敗"],"暂无待审核修改":["暫無待審核修改","No pending revisions","심사 대기 중인 수정 없음","審査待ちの修正はありません"],"修改审核意见":["修改審核意見","Revision review notes","수정 심사 의견","修正審査コメント"],"批准修改":["批准修改","Approve revision","수정 승인","修正を承認"],"拒绝修改":["拒絕修改","Reject revision","수정 거절","修正を却下"],"修改审核失败：":["修改審核失敗：","Revision review failed: ","수정 심사 실패: ","修正審査失敗："],"已发表文章的修改必须申请审核，不能直接保存覆盖原文。":["已發表文章的修改必須申請審核，不能直接儲存覆蓋原文。","Published articles require revision review; the original cannot be overwritten directly.","공개된 글은 수정 심사를 거쳐야 하며 원문을 직접 덮어쓸 수 없습니다.","公開済みの記事は修正審査が必要で、原文を直接上書きできません。"],"修改申请失败：":["修改申請失敗：","Revision request failed: ","수정 신청 실패: ","修正申請失敗："],"修改申请已提交。审核期间继续显示原文。":["修改申請已提交。審核期間繼續顯示原文。","Revision submitted. The original remains public during review.","수정 신청이 접수되었습니다. 심사 중에는 원문이 계속 표시됩니다.","修正申請を送信しました。審査中も原文を公開します。"],"请修改后点击申请审核发表；审核期间仍显示原文。":["請修改後點擊申請審核發表；審核期間仍顯示原文。","Edit and request review; the original remains visible until approval.","수정 후 심사를 신청하세요. 승인 전에는 원문이 표시됩니다.","修正後に審査を申請してください。承認までは原文が表示されます。"],"删除文章":["刪除文章","Delete article","글 삭제","記事を削除"],"申请删除文章":["申請刪除文章","Request article deletion","글 삭제 요청","記事の削除を申請"],"文章删除申请":["文章刪除申請","Article deletion requests","글 삭제 요청 목록","記事削除申請"],"管理员删除":["管理員刪除","Admin remove","관리자 삭제","管理者による削除"],"删除申请读取失败":["刪除申請讀取失敗","Failed to load deletion requests","삭제 요청 불러오기 실패","削除申請の読み込みに失敗"],"暂无待处理删除申请":["暫無待處理刪除申請","No pending deletion requests","대기 중인 삭제 요청 없음","保留中の削除申請はありません"],"同意删除":["同意刪除","Approve deletion","삭제 승인","削除を承認"],"不同意删除":["不同意刪除","Reject deletion","삭제 거절","削除を却下"],"确定永久删除这篇文章？此操作不可撤销。":["確定永久刪除這篇文章？此操作不可撤銷。","Permanently delete this article? This cannot be undone.","이 글을 영구 삭제하시겠습니까? 되돌릴 수 없습니다.","この記事を完全に削除しますか？元に戻せません。"],"请填写删除原因（5—1000字）：":["請填寫刪除原因（5—1000字）：","Enter deletion reason (5–1,000 characters):","삭제 사유를 입력하세요 (5~1,000자):","削除理由を入力してください（5～1,000文字）："],"删除原因须为5—1000字。":["刪除原因須為5—1000字。","Deletion reason must be 5–1,000 characters.","삭제 사유는 5~1,000자여야 합니다.","削除理由は5～1,000文字で入力してください。"],"删除申请已提交，等待管理员审核。":["刪除申請已提交，等待管理員審核。","Deletion request submitted for admin review.","삭제 요청이 접수되어 관리자 심사를 기다립니다.","削除申請を送信しました。管理者の審査をお待ちください。"],"确认删除此文章？":["確認刪除此文章？","Confirm deletion of this article?","이 글을 삭제하시겠습니까?","この記事を削除しますか？"],"确认拒绝删除申请？":["確認拒絕刪除申請？","Reject this deletion request?","삭제 요청을 거절하시겠습니까?","この削除申請を却下しますか？"],"确认删除此公开文章？":["確認刪除此公開文章？","Delete this published article?","공개된 글을 삭제하시겠습니까?","この公開記事を削除しますか？"],"请输入管理员删除原因：":["請輸入管理員刪除原因：","Enter administrator deletion reason:","관리자 삭제 사유를 입력하세요:","管理者による削除理由を入力してください："],"删除原因：":["刪除原因：","Deletion reason: ","삭제 사유: ","削除理由："],"删除失败：":["刪除失敗：","Deletion failed: ","삭제 실패: ","削除失敗："],"申请失败：":["申請失敗：","Request failed: ","신청 실패: ","申請失敗："],"允许站长和管理员审核当前文章（仅此篇，审核完成后自动撤销）":["允許站長和管理員審核目前文章（僅此篇，審核完成後自動撤銷）","Allow the site owner and admins to review this article only (revoked after review)","사이트 운영자와 관리자에게 이 글만 심사 권한 부여 (심사 후 자동 철회)","運営者と管理者にこの記事のみ審査を許可（審査後自動解除）"],"请先勾选授权站长和管理员审核此文章。":["請先勾選授權站長和管理員審核此文章。","Grant review access to the site owner and admins first.","운영자와 관리자에게 심사 권한을 먼저 부여하세요.","運営者と管理者への審査許可を先に選択してください。"],"撤回申请":["撤回申請","Withdraw request","신청 철회","申請を取り下げる"],"草稿已保存，仅您本人可见；可单独授权此篇文章供审核。":["草稿已儲存，僅您本人可見；可單獨授權此篇文章供審核。","Draft saved and visible only to you; you may grant review access for this article.","초안이 저장되어 본인만 볼 수 있습니다. 이 글에 한해 심사 권한을 부여할 수 있습니다.","下書きを保存しました。閲覧できるのは本人のみです。この記事だけ審査を許可できます。"],"消息中心":["訊息中心","Message center","알림 센터","通知センター"],"🔔 消息中心":["🔔 訊息中心","🔔 Message center","🔔 알림 센터","🔔 通知センター"],"🔔 消息":["🔔 訊息","🔔 Messages","🔔 알림","🔔 通知"],"首页":["首頁","Home","홈","ホーム"],"公共论坛":["公共論壇","Forum","공개 포럼","公開フォーラム"],"福音园地":["福音園地","Gospel","복음 마당","福音広場"],"网站首页":["網站首頁","Website home","사이트 홈","サイトホーム"],"真实之声首页":["真實之聲首頁","Voice of Truth home","진실의 목소리 홈","真実の声 ホーム"],"论坛首页":["論壇首頁","Forum home","포럼 홈","フォーラムトップ"],"我的文章":["我的文章","My posts","내 글","自分の投稿"],"我的账户":["我的帳戶","My account","내 계정","マイアカウント"],"审核管理":["審核管理","Moderation","검토 관리","審査管理"],"举报与禁言":["檢舉與禁言","Reports & restrictions","신고 및 제한","通報と制限"],"账号申诉":["帳戶申訴","Account appeal","계정 이의신청","アカウント異議申立て"],"注册 / 登录":["註冊 / 登入","Sign up / Log in","가입 / 로그인","登録 / ログイン"],"公共论坛 · 自由交流":["公共論壇 · 自由交流","Public forum · Open discussion","공개 포럼 · 자유로운 토론","公開フォーラム · 自由な交流"],"福音讲道 · 51讲在线收听":["福音講道 · 51講線上收聽","Gospel sermons · 51 recordings","복음 설교 · 51편 듣기","福音説教 · 全51回"],"公益援助":["公益援助","Community aid","공익 지원","公益支援"],"公益援助中心":["公益援助中心","Community aid center","공익 지원 센터","公益支援センター"],"网站建议":["網站建議","Website feedback","사이트 제안","サイトへのご意見"],"最新讨论":["最新討論","Latest discussions","최신 토론","最新の議論"],"站长专栏":["站長專欄","Editor's column","운영자 칼럼","運営者コラム"],"资料库":["資料庫","Resources","자료실","資料室"],"我的社交媒体":["我的社群媒體","My social media","내 소셜 미디어","私のSNS"],"返回首页":["返回首頁","Back to home","홈으로 돌아가기","ホームに戻る"],"阅读站长文章":["閱讀站長文章","Read articles","운영자 글 읽기","記事を読む"],"进入公共论坛 →":["進入公共論壇 →","Enter forum →","포럼으로 이동 →","フォーラムへ →"],"福音园地 · 免费听讲道":["福音園地 · 免費聽講道","Gospel · Free sermons","복음 · 무료 설교","福音 · 無料説教"],"会员发表观点，公开交流讨论。新会员前三篇文章审核通过后，后续文章自动公开。":["會員發表觀點，公開交流討論。新會員前三篇文章審核通過後，後續文章自動公開。","Members can share views and discuss openly. The first three posts require approval.","회원은 자유롭게 의견을 나눌 수 있습니다. 신규 회원의 첫 게시물 3개는 검토 후 공개됩니다.","会員は自由に意見を交換できます。新規会員の最初の3件は審査後に公開されます。"],"福音信息、圣经分享与讲道录音。所有访客无需注册即可免费收听；注册并登录会员后可使用下载按钮。":["福音資訊、聖經分享與講道錄音。訪客無需註冊即可免費收聽；會員登入後可下載。","Gospel messages, Bible reflections and sermons. Listen free without signing up; members can download.","복음 메시지와 성경 나눔, 설교 녹음입니다. 가입 없이 무료로 듣고, 회원은 다운로드할 수 있습니다.","福音メッセージ、聖書の分かち合い、説教音声。登録不要で無料視聴、会員はダウンロードできます。"],"点击录音标题或播放按钮即可收听。已迁移录音使用本站播放器，部分尚未迁移的录音暂用 Google Drive 播放。":["點擊錄音標題或播放按鈕即可收聽。已遷移錄音使用本站播放器，部分錄音暫用 Google Drive 播放。","Select a recording to listen. Most use the site player; a few still use Google Drive.","녹음 제목이나 재생 버튼을 누르세요. 대부분 사이트 플레이어로, 일부는 Google Drive로 재생됩니다.","タイトルまたは再生ボタンを押してください。大部分はサイト内、一部はGoogle Driveで再生します。"],"关闭播放器":["關閉播放器","Close player","플레이어 닫기","プレーヤーを閉じる"],"播放或暂停":["播放或暫停","Play or pause","재생 또는 일시정지","再生・一時停止"],"播放进度":["播放進度","Playback position","재생 위치","再生位置"],"音量":["音量","Volume","음량","音量"],"关闭":["關閉","Close","닫기","閉じる"],"下载":["下載","Download","다운로드","ダウンロード"],"点赞":["按讚","Like","좋아요","いいね"],"评论":["評論","Comment","댓글","コメント"],"播放":["播放","Play","재생","再生"],"网站建议：提出网站改进意见":["網站建議：提出網站改進意見","Suggest website improvements","사이트 개선 의견","サイト改善の提案"],"说出真实经历，":["說出真實經歷，","Share real experiences,","진실한 경험을 나누고,","実際の経験を語り、"],"表达独立观点。":["表達獨立觀點。","Express independent views.","독립적인 의견을 표현하세요.","独立した意見を表現する。"],"真实之声 · 中文表达空间":["真實之聲 · 中文表達空間","Voice of Truth · Independent voices","진실의 목소리 · 자유로운 표현","真実の声 · 自由な発信"]};
Object.assign(data, {
  "公共交流 · 福音与公益": [
    "公共交流 · 福音與公益",
    "Community · Faith & Aid",
    "공공 소통 · 복음과 나눔",
    "交流 · 福音と支援"
  ],
  "公共讨论 · 福音分享 · 公益援助": [
    "公共討論 · 福音分享 · 公益援助",
    "Public discussion · Gospel · Community aid",
    "공공 토론 · 복음 나눔 · 공익 지원",
    "公開討論 · 福音 · 公益支援"
  ],
  "分享真实，": [
    "分享真實，",
    "Share real stories,",
    "진솔한 이야기를 나누고,",
    "ありのままを語り、"
  ],
  "让关怀落到实处。": [
    "讓關懷落到實處。",
    "turn care into action.",
    "배려를 실천으로 옮깁니다.",
    "思いやりを行動に。"
  ],
  "在这里，你可以分享经历、发表文章、讨论公共议题，也可以免费收听讲道，或通过公益援助中心寻求帮助。我们尊重事实，也欢迎不同观点。": [
    "在這裡，你可以分享經歷、發表文章、討論公共議題，也可以免費收聽講道，或透過公益援助中心尋求幫助。我們尊重事實，也歡迎不同觀點。",
    "Share experiences, publish articles and discuss public issues. Listen to free sermons or seek help through our aid center. We value facts and welcome different perspectives.",
    "이곳에서 경험을 나누고 글을 올리며 공공 문제를 토론할 수 있습니다. 설교를 무료로 듣거나 공익 지원 센터에 도움을 요청할 수도 있습니다. 사실을 존중하며 다양한 의견을 환영합니다.",
    "ここでは、経験を共有し、記事を投稿し、社会の課題について議論できます。説教を無料で聴いたり、公益支援センターに相談したりすることもできます。事実を尊重し、さまざまな意見を歓迎します。"
  ]
});
Object.assign(data,{"文章创作与投稿":["文章創作與投稿","Write and submit articles","기사 작성 및 투고","記事の作成と投稿"],"所有已验证邮箱的会员均可写作、保存私人草稿并申请发表；审核通过后才会公开。":["所有已驗證電郵的會員均可寫作、儲存私人草稿並申請發表；審核通過後才會公開。","All email-verified members may write, save private drafts, and request publication. Articles appear publicly only after approval.","이메일 인증 회원은 글을 작성하고 비공개 초안을 저장하며 게시 승인을 신청할 수 있습니다. 승인 후 공개됩니다.","メール認証済みの会員は執筆、非公開下書き保存、公開申請ができます。承認後に公開されます。"],"保存私人草稿":["儲存私人草稿","Save private draft","비공개 초안 저장","非公開下書きを保存"],"申请审核发表":["申請審核發表","Request publication review","게시 심사 신청","公開審査を申請"],"新建文章":["新增文章","New article","새 글","新しい記事"],"我的文章与草稿":["我的文章與草稿","My articles and drafts","내 글과 초안","自分の記事と下書き"],"私人草稿":["私人草稿","Private draft","비공개 초안","非公開下書き"],"等待审核":["等待審核","Awaiting review","심사 대기","審査待ち"],"已公开发表":["已公開發表","Published","공개됨","公開済み"],"审核未通过":["審核未通過","Not approved","승인되지 않음","承認されませんでした"],"继续编辑":["繼續編輯","Continue editing","계속 편집","編集を続ける"],"修改并重新申请审核":["修改並重新申請審核","Edit and request review again","수정 후 재심사 신청","編集して再審査を申請"],"审核意见：":["審核意見：","Review notes: ","심사 의견: ","審査コメント："],"审核意见（拒绝时建议填写原因）":["審核意見（拒絕時建議填寫原因）","Review notes (explain rejection)","심사 의견 (거절 사유 작성)","審査コメント（却下理由を記入）"],"拒绝投稿时请填写原因。":["拒絕投稿時請填寫原因。","Please explain why the submission was rejected.","거절 사유를 입력하세요.","却下理由を入力してください。"],"申请发表需要标题5—30字、正文100—50000字。":["申請發表須標題5—30字、正文100—50000字。","Publication requires a 5–30 character title and 100–50,000 character body.","게시 신청에는 제목 5~30자, 본문 100~50,000자가 필요합니다.","公開申請にはタイトル5～30文字、本文100～50,000文字が必要です。"],"标题最多30字，正文最多50000字。":["標題最多30字，正文最多50000字。","Maximum 30 characters for title and 50,000 for body.","제목은 최대 30자, 본문은 최대 50,000자입니다.","タイトルは最大30文字、本文は最大50,000文字です。"],"已提交发表申请，请等待站长或管理员审核。":["已提交發表申請，請等待站長或管理員審核。","Publication requested. Await editor or administrator review.","게시 신청이 접수되었습니다. 운영자 또는 관리자의 심사를 기다리세요.","公開申請を受け付けました。運営者または管理者の審査をお待ちください。"],"草稿已保存，仅您本人可见。":["草稿已儲存，僅您本人可見。","Draft saved. Visible only to you.","초안이 저장되었습니다. 본인만 볼 수 있습니다.","下書きを保存しました。本人のみ閲覧できます。"],"请先登录并完成邮箱验证，才能写作或保存私人草稿。":["請先登入並完成郵箱驗證，才能寫作或儲存私人草稿。","Sign in and verify your email to write or save private drafts.","글 작성과 초안 저장을 위해 로그인 및 이메일 인증이 필요합니다.","執筆や下書き保存にはログインとメール認証が必要です。"],"您可以保存私人草稿，也可以申请由站长或管理员审核后公开发表。":["您可以儲存私人草稿，也可以申請由站長或管理員審核後公開發表。","You may save a private draft or request publication review by the editor or an administrator.","비공개 초안을 저장하거나 운영자·관리자에게 게시 심사를 신청할 수 있습니다.","非公開下書きを保存するか、運営者・管理者に公開審査を申請できます。"],"还没有草稿或文章。":["還沒有草稿或文章。","No drafts or articles yet.","초안이나 글이 없습니다.","下書きや記事はまだありません。"],"我的文章加载失败":["我的文章載入失敗","Could not load your articles","내 글을 불러오지 못했습니다","自分の記事を読み込めません"],"未命名草稿":["未命名草稿","Untitled draft","제목 없는 초안","無題の下書き"],"已新建空白文章。":["已新增空白文章。","New blank article created.","새 빈 글을 만들었습니다.","新しい空の記事を作成しました。"],"正在编辑文章。":["正在編輯文章。","Editing article.","글 편집 중입니다.","記事を編集中です。"],"修改已公开文章后将重新进入审核，修改前请确认。":["修改已公開文章後將重新進入審核，修改前請確認。","Editing a published article will send it back for review.","공개된 글을 수정하면 재심사 대상이 됩니다.","公開済み記事を編集すると再審査になります。"],"保存或申请失败：":["儲存或申請失敗：","Save or request failed: ","저장 또는 신청 실패: ","保存または申請失敗："],"文章审核通过":["文章審核通過","Article approved","기사 승인","記事が承認されました"],"文章审核未通过":["文章審核未通過","Article not approved","기사 승인 거절","記事が承認されませんでした"]});
Object.assign(data,{"正在加载文章……":["正在載入文章……","Loading articles…","글을 불러오는 중…","記事を読み込み中…"],"服务暂不可用":["服務暫時無法使用","Service temporarily unavailable","서비스를 일시적으로 사용할 수 없습니다","サービスを一時的に利用できません"],"提交失败：":["提交失敗：","Submission failed: ","제출 실패: ","送信失敗："],"操作失败：":["操作失敗：","Action failed: ","작업 실패: ","操作失敗："],"全部":["全部","All","전체","すべて"],"其他":["其他","Other","기타","その他"],"无标题":["無標題","Untitled","제목 없음","無題"],"阅读全文 →":["閱讀全文 →","Read full article →","전체 글 읽기 →","記事全文を読む →"],"没有找到匹配的文章。":["沒有找到符合的文章。","No matching articles found.","일치하는 글이 없습니다.","一致する記事がありません。"],"01 · Community writers":["01 · 網友文章","01 · Member articles","01 · 회원 글","01 · 会員の記事"],"02 · Editor's column":["02 · 站長專欄","02 · Editor's column","02 · 운영자 칼럼","02 · 運営者コラム"],"02 · Articles":["02 · 文章專區","02 · Articles","02 · 글 모음","02 · 記事エリア"],"共":["共","Total: ","총 ","計"],"篇":["篇"," articles","편","件"],"参与论坛交流":["參與論壇交流","Join forum discussions","포럼 참여","フォーラムで交流"],"前往投稿":["前往投稿","Submit article","기사 투고","記事を投稿"],"正在检查登录状态…":["正在檢查登入狀態…","Checking sign-in…","로그인 상태 확인 중…","ログイン状態を確認中…"]});
Object.assign(data,{"专栏文章":["專欄文章","Column articles","칼럼 글","コラム記事"],"搜索专栏文章…":["搜尋專欄文章…","Search column articles…","칼럼 글 검색…","コラム記事を検索…"],"本专栏仅代表站长个人观点，不代表其他会员或整个平台的立场。":["本專欄僅代表站長個人觀點，不代表其他會員或整個平台的立場。","This column reflects the editor's personal views, not those of other members or the platform.","이 칼럼은 운영자 개인의 의견이며 다른 회원이나 플랫폼 전체의 입장을 대변하지 않습니다.","このコラムは運営者個人の見解であり、他の会員やサイト全体の立場を代表しません。"],"杨利伟，来自中国河南，现居韩国济州岛。关注公共事务、个人自由与社会议题，在这里保存个人经历、时事评论、公开声明与资料记录。":["楊利偉，來自中國河南，現居韓國濟州島。關注公共事務、個人自由與社會議題，在這裡保存個人經歷、時事評論、公開聲明與資料記錄。","Yang Liwei is from Henan, China, and now lives on Jeju Island, South Korea. He documents personal experiences, current affairs, public statements and materials on freedom and society.","양리웨이는 중국 허난성 출신으로 현재 한국 제주도에 거주합니다. 공공 문제와 개인의 자유, 사회 문제에 관한 경험과 시사 논평, 공개 성명과 자료를 기록합니다.","楊利偉は中国河南省出身で、現在は韓国の済州島に在住。公共問題や個人の自由、社会問題について体験、時事評論、声明、資料を記録しています。"],"文章暂时无法加载，请稍后再试。":["文章暫時無法載入，請稍後再試。","Articles could not be loaded. Please try again later.","글을 불러올 수 없습니다. 잠시 후 다시 시도하세요.","記事を読み込めません。後ほどお試しください。"]});
Object.assign(data,{"栏目切换":["欄目切換","Switch sections","섹션 전환","セクション切替"],"主菜单":["主選單","Main menu","주 메뉴","メインメニュー"],"文章专区 · 子菜单":["文章專區 · 子選單","Articles · Submenu","글 모음 · 하위 메뉴","記事エリア · サブメニュー"],"网站首页":["網站首頁","Homepage","홈페이지","ホームページ"]});
Object.assign(data,{"待审核文章":["待審核文章","Pending articles","심사 대기 기사","審査待ちの記事"],"审核列表读取失败":["審核列表讀取失敗","Failed to load review queue","심사 목록 불러오기 실패","審査一覧を読み込めません"],"暂无待审核文章":["暫無待審核文章","No articles awaiting review","심사 대기 기사가 없습니다","審査待ちの記事はありません"],"通过审核":["通過審核","Approve","승인","承認"],"拒绝投稿":["拒絕投稿","Reject","거절","却下"],"标题需要5—30个字符，正文需要100—50000个字符。":["標題需5—30個字元，正文需100—50000個字元。","Title must be 5–30 characters and body 100–50,000 characters.","제목은 5~30자, 본문은 100~50,000자여야 합니다.","タイトルは5～30文字、本文は100～50,000文字です。"],"5—30个字符":["5—30個字元","5–30 characters","5~30자","5～30文字"],"100—50000个字符":["100—50000個字元","100–50,000 characters","100~50,000자","100～50,000文字"]});
Object.assign(data,{"发表帖子":["發表帖子","Create forum post","포럼 글 작성","フォーラムに投稿"],"论坛面向已验证邮箱的注册会员开放；文章专区投稿另有独立的等级要求。":["論壇向已驗證郵箱的註冊會員開放；文章專區投稿另有獨立的等級要求。","Verified members may post in the forum. Article submissions have separate level requirements.","이메일 인증 회원은 포럼에 글을 쓸 수 있습니다. 기사 투고는 별도 등급 조건이 적용됩니다.","メール認証済みの会員はフォーラムに投稿できます。記事の投稿には別のランク条件があります。"],"这里展示经过审核的会员文章；正式投稿需要高级会员（LV4）或以上等级，与公共论坛发帖互不影响。":["這裡展示經審核的會員文章；正式投稿需高級會員（LV4）或以上，與論壇發帖互不影響。","Approved member articles appear here. Submissions require LV4+, independently of forum posting.","심사를 통과한 회원 글이 표시됩니다. 투고는 LV4 이상이며 포럼 글쓰기와 별개입니다.","審査済みの会員記事を掲載します。投稿はLV4以上で、フォーラムへの投稿とは別です。"],"网友文章采用独立投稿与审核流程；公共论坛发帖不受文章专区等级限制。":["網友文章採獨立投稿及審核流程；論壇發帖不受文章專區等級限制。","Member articles use separate submission and review. Forum posts have no article-level restriction.","회원 기사는 별도 투고·심사 절차를 따릅니다. 포럼 글에는 기사 등급 제한이 적용되지 않습니다.","会員記事は独立した投稿・審査手続きを使用します。フォーラム投稿に記事のランク制限はありません。"],"← 返回文章专区":["← 返回文章專區","← Back to articles","← 글 모음으로 돌아가기","← 記事エリアに戻る"],"这里展示会员正式投稿的文章，与公共论坛帖子分开管理。高级会员（LV4）及以上可投稿；所有新稿件须经审核后公开。":["這裡展示會員正式投稿的文章，與論壇帖子分開管理。高級會員（LV4）及以上可投稿；新稿件均須審核。","Formal member articles are managed separately from forum posts. LV4+ members may submit; all submissions require review.","회원 기사는 포럼 게시글과 별도로 관리됩니다. LV4 이상 회원이 투고할 수 있으며 모든 글은 심사 후 공개됩니다.","会員記事はフォーラムの投稿とは別に管理されます。LV4以上が投稿でき、すべて審査後に公開されます。"],"文章投稿":["文章投稿","Submit an article","기사 투고","記事を投稿"],"正在检查会员权限……":["正在檢查會員權限……","Checking membership permissions…","회원 권한 확인 중…","会員権限を確認中…"],"文章标题":["文章標題","Article title","기사 제목","記事タイトル"],"文章正文":["文章正文","Article body","기사 본문","記事本文"],"提交文章审核":["提交文章審核","Submit for review","심사 요청","審査に提出"],"前往公共论坛发帖 →":["前往公共論壇發帖 →","Post in the public forum →","공개 포럼에 글쓰기 →","公開フォーラムに投稿 →"],"已发表的网友文章":["已發表的網友文章","Published member articles","게시된 회원 기사","公開済みの会員記事"],"请先注册或登录。注册后仍需提升等级，才能向文章专区投稿。":["請先註冊或登入。註冊後仍須提升等級才能投稿。","Please register or sign in. Registration alone does not grant article submission rights.","가입 또는 로그인하세요. 가입만으로 기사 투고 권한이 생기지 않습니다.","登録またはログインしてください。登録だけでは記事投稿権限は得られません。"],"请先完成邮箱验证。":["請先完成郵箱驗證。","Please verify your email first.","먼저 이메일 인증을 완료하세요.","まずメール認証を完了してください。"],"无法验证会员等级，请稍后再试。":["無法驗證會員等級，請稍後再試。","Unable to verify membership level. Try again later.","회원 등급을 확인할 수 없습니다. 나중에 다시 시도하세요.","会員ランクを確認できません。後ほどお試しください。"],"您已具备文章投稿资格，提交后等待审核。":["您已具備文章投稿資格，提交後等待審核。","You can submit an article. It will await review.","투고할 수 있습니다. 제출 후 심사를 기다리세요.","投稿できます。提出後は審査をお待ちください。"],"文章投稿要求高级会员（LV4）及以上。请先在公共论坛交流、评论，积累积分提升等级。":["文章投稿要求高級會員（LV4）及以上。請先在論壇交流、評論，累積積分提升等級。","Article submissions require LV4+. Join forum discussions and earn points to level up.","기사 투고는 LV4 이상이 필요합니다. 포럼 활동으로 포인트를 모아 등급을 높이세요.","記事投稿にはLV4以上が必要です。フォーラムで交流し、ポイントを貯めてください。"],"投稿已提交，等待审核后公开。":["投稿已提交，等待審核後公開。","Article submitted for review.","투고가 접수되어 심사를 기다립니다.","投稿を受け付けました。審査待ちです。"],"暂无已发表的网友文章。":["暫無已發表的網友文章。","No published member articles yet.","아직 공개된 회원 기사가 없습니다.","公開済みの会員記事はまだありません。"],"文章读取失败，请稍后再试。":["文章讀取失敗，請稍後再試。","Could not load articles. Try again later.","기사를 불러오지 못했습니다. 다시 시도하세요.","記事を読み込めません。後ほどお試しください。"]});
Object.assign(data,{"发布文章":["發布文章","Publish article","글 게시","記事を投稿"],"文章投稿权限":["文章投稿權限","Article submission access","글 투고 권한","記事投稿の権限"],"投稿权限：高级会员（LV4）及以上。新注册会员可先参与论坛交流、评论与互动，积累积分提升等级。":["投稿權限：高級會員（LV4）及以上。新註冊會員可先參與論壇交流、評論與互動，累積積分提升等級。","Article submissions require Advanced membership (LV4+). New members can join discussions, comment and earn points to level up.","글 투고는 고급 회원(LV4) 이상부터 가능합니다. 신규 회원은 토론과 댓글로 포인트를 쌓아 등급을 높일 수 있습니다.","記事投稿には上級会員（LV4以上）が必要です。新規会員は議論やコメントでポイントを貯めてランクを上げられます。"],"暂时无法验证投稿权限，请稍后再试。":["暫時無法驗證投稿權限，請稍後再試。","Unable to verify submission access. Please try again later.","투고 권한을 확인할 수 없습니다. 잠시 후 다시 시도하세요.","投稿権限を確認できません。しばらくしてからお試しください。"],"文章投稿需要高级会员（LV4）或以上等级。请先参与论坛交流、评论和互动，积累积分提升等级。":["文章投稿需要高級會員（LV4）或以上等級。請先參與論壇交流、評論和互動，累積積分提升等級。","Article submission requires Advanced membership (LV4+). Join forum discussions, comment and earn points to level up.","글 투고는 고급 회원(LV4) 이상만 가능합니다. 포럼에서 토론과 댓글에 참여해 포인트를 쌓으세요.","記事投稿には上級会員（LV4以上）が必要です。フォーラムで交流し、コメントや活動でポイントを貯めてください。"]});
Object.assign(data,{"文章专区":["文章專區","Articles","글 모음","記事エリア"],"网友文章":["網友文章","Member articles","회원 글","会員の記事"],"阅读文章":["閱讀文章","Read articles","글 읽기","記事を読む"],"进入文章专区 →":["進入文章專區 →","Explore articles →","글 모음 보기 →","記事エリアへ →"],"浏览网友文章 →":["瀏覽網友文章 →","Browse member articles →","회원 글 보기 →","会員の記事を見る →"],"阅读站长专栏 →":["閱讀站長專欄 →","Read editor's column →","운영자 칼럼 읽기 →","運営者コラムを読む →"],"← 返回网站首页":["← 返回網站首頁","← Back to homepage","← 홈페이지로 돌아가기","← ホームに戻る"],"这里汇集来自不同作者的文章。你可以阅读网友的观点和经历，也可以浏览站长的个人记录与评论。不同观点可以并存，文章内容由各自作者负责。":["這裡匯集不同作者的文章。你可以閱讀網友的觀點和經歷，也可以瀏覽站長的個人記錄與評論。不同觀點可以並存，文章內容由各自作者負責。","Articles from different writers in one place. Read members' experiences and opinions alongside the editor's personal essays. Each author is responsible for their own content.","다양한 필자의 글을 모았습니다. 회원들의 경험과 의견, 운영자의 기록과 논평을 읽을 수 있습니다. 각 글의 책임은 해당 작성자에게 있습니다.","さまざまな執筆者の記事を集めました。会員の体験や意見と、運営者の記録や論評を読めます。内容の責任は各執筆者にあります。"],"面向注册会员开放的文章交流空间。分享生活经历、社会观察、时事评论与独立思考；可阅读、评论、点赞，也可按论坛规则投稿。":["面向註冊會員開放的文章交流空間。分享生活經歷、社會觀察、時事評論與獨立思考；可閱讀、評論、按讚，也可依論壇規則投稿。","A writing space for registered members to share experiences, social observations and independent perspectives. Read, comment, like or submit articles under forum rules.","가입 회원이 경험, 사회 관찰, 시사 논평과 독립적인 생각을 나누는 공간입니다. 읽기, 댓글, 좋아요 및 포럼 규정에 따른 투고가 가능합니다.","登録会員が体験、社会観察、時事評論、独自の考えを共有する場です。閲覧、コメント、いいね、規約に沿った投稿ができます。"],"杨利伟，来自中国河南，现居韩国济州岛。长期关注公共事务、个人自由与社会议题，在这里记录个人经历、观点、公开声明和资料。":["楊利偉，來自中國河南，現居韓國濟州島。長期關注公共事務、個人自由與社會議題，在這裡記錄個人經歷、觀點、公開聲明和資料。","Yang Liwei, originally from Henan, China, now lives on Jeju Island, South Korea. He writes about public affairs, individual freedom, social issues, personal experiences and public statements.","양리웨이는 중국 허난성 출신으로 현재 한국 제주도에 거주합니다. 공공 문제, 개인의 자유와 사회 현상에 관심을 두고 경험과 의견, 공개 성명 및 자료를 기록합니다.","楊利偉は中国河南省出身で、現在は韓国の済州島に在住。公共問題、個人の自由、社会問題に関心を持ち、体験や意見、声明、資料を記録しています。"],"专栏仅代表站长本人，不代表其他会员或整个平台的立场。":["專欄僅代表站長本人，不代表其他會員或整個平台的立場。","The column reflects only the editor's views, not those of other members or the platform as a whole.","이 칼럼은 운영자 개인의 의견이며 다른 회원이나 플랫폼 전체의 입장을 대변하지 않습니다.","このコラムは運営者個人の見解であり、他の会員やサイト全体の立場を代表するものではありません。"],"网友文章与站长专栏分别展示，保留各自原有的发布、评论及管理方式。":["網友文章與站長專欄分別展示，保留各自原有的發布、評論及管理方式。","Member articles and the editor's column remain separate, with their existing publishing, commenting and moderation workflows.","회원 글과 운영자 칼럼은 별도로 표시되며 기존 게시·댓글·관리 방식이 유지됩니다.","会員の記事と運営者コラムは別々に表示され、従来の投稿・コメント・管理方法を維持します。"],"汇集网友投稿与站长文章，分享真实经历、独立观点、时事评论和生活观察。每位作者为自己的内容负责。":["匯集網友投稿與站長文章，分享真實經歷、獨立觀點、時事評論和生活觀察。每位作者為自己的內容負責。","Member contributions and editor essays share real experiences, independent views, current affairs and everyday observations. Each writer is responsible for their work.","회원 기고와 운영자 글을 통해 실제 경험, 독립적인 의견, 시사 논평과 일상 관찰을 나눕니다. 각 작성자는 자신의 글에 책임을 집니다.","会員の寄稿と運営者の記事で、実体験、独自の視点、時事評論、日常の観察を共有します。各執筆者が自身の記事に責任を持ちます。"],"真实之声":["真實之聲","Voice of Truth","진실의 목소리","真実の声"],"一个人的发起 · 众人的表达":["一個人的發起 · 眾人的表達","Founded by one · Open to all","한 사람의 시작 · 모두의 목소리","一人が始め、みんなが語る"],"关于平台":["關於平台","About","플랫폼 소개","サイトについて"],"评论管理":["評論管理","Manage comments","댓글 관리","コメント管理"],"帮我们把网站做得更好 →":["幫我們把網站做得更好 →","Help improve this website →","사이트 개선에 참여 →","サイト改善にご協力を →"],"这里既有站长的个人记录，也欢迎每一位读者分享经历、讨论公共事件、表达不同意见。尊重事实，允许分歧。":["這裡既有站長的個人記錄，也歡迎讀者分享經歷、討論公共事件、表達不同意見。尊重事實，允許分歧。","Personal records and a space to share experiences, discuss public affairs and express different views. Respect facts and differences.","개인 기록과 함께 경험을 나누고 공공 문제를 토론하며 다양한 의견을 표현하는 공간입니다.","個人の記録とともに、経験の共有や社会問題の議論、異なる意見を歓迎します。"],"一个人的发起 · 众人的表达 · 发言者自行决定公开内容":["一個人的發起 · 眾人的表達 · 發言者自行決定公開內容","Founded by one · Open to all · You choose what to publish","한 사람의 시작 · 모두의 목소리 · 공개 내용은 작성자가 결정","一人が始め、みんなが語る · 公開内容は投稿者が決定"],"这里是读者的声音。分享真实经历，讨论时事政治、国际局势、社会观察与生活议题；会员可以发表文章、评论、点赞。":["這裡是讀者的聲音。分享真實經歷，討論時事政治、國際局勢、社會觀察與生活議題；會員可發文、評論、按讚。","Share real experiences and discuss current affairs, international issues and daily life. Members can post, comment and like.","실제 경험과 시사·국제 문제·생활 이야기를 나눕니다. 회원은 글과 댓글을 작성할 수 있습니다.","体験を共有し、時事・国際情勢・生活について議論できます。会員は投稿・コメントできます。"],"进入论坛 · 参与讨论 →":["進入論壇 · 參與討論 →","Join the forum →","포럼에서 토론하기 →","フォーラムで議論する →"],"这里是我的声音。保存个人经历、独立观点、时事评论、公开声明与资料记录。站长观点不代表所有会员。":["這裡是我的聲音。記錄個人經歷、獨立觀點、時事評論、公開聲明與資料。站長觀點不代表所有會員。","Personal experiences, independent views, commentary and public statements. The editor does not speak for all members.","개인 경험, 독립적 의견, 시사 논평과 공개 성명을 기록합니다. 운영자의 견해가 모든 회원을 대변하지는 않습니다.","個人の経験、独自の見解、時事評論、公開声明を記録します。運営者の意見は全会員を代表しません。"],"阅读我的文章 →":["閱讀我的文章 →","Read my articles →","내 글 읽기 →","記事を読む →"],"最新会员讨论":["最新會員討論","Latest member discussions","최신 회원 토론","会員の最新議論"],"查看全部 →":["查看全部 →","View all →","모두 보기 →","すべて見る →"],"正在加载公开讨论……":["正在載入公開討論……","Loading discussions…","토론 불러오는 중…","議論を読み込み中…"],"社区交流请基于事实，尊重不同意见；不发布人身威胁、骚扰或未经同意的私人信息。观点由发表者负责，不代表平台立场。":["社區交流請基於事實，尊重不同意見；不得威脅、騷擾或公開他人隱私。觀點由發表者負責。","Discuss facts respectfully. No threats, harassment or disclosure of private information. Authors are responsible for their views.","사실에 근거해 존중하며 토론하세요. 위협·괴롭힘·개인정보 공개는 금지됩니다.","事実に基づき敬意を持って議論してください。脅迫・嫌がらせ・個人情報の公開は禁止です。"],"站长专栏 · 我的文章":["站長專欄 · 我的文章","Editor's column · Articles","운영자 칼럼 · 글","運営者コラム · 記事"],"观点 · 记录 · 声明":["觀點 · 記錄 · 聲明","Views · Records · Statements","의견 · 기록 · 성명","意見 · 記録 · 声明"],"正在加载文章……":["正在載入文章……","Loading articles…","글 불러오는 중…","記事を読み込み中…"],"加载更多文章":["載入更多文章","Load more articles","글 더 보기","記事をもっと見る"],"资料库与公共服务":["資料庫與公共服務","Resources & public services","자료실 및 공공 서비스","資料室と公共サービス"],"文章与公开资料":["文章與公開資料","Articles & public records","글 및 공개 자료","記事と公開資料"],"查阅站长已公开的记录与文档":["查閱站長已公開的記錄與文件","Browse published records and documents","공개 기록과 문서 보기","公開記録と文書を見る"],"无需注册，提出功能和布局改进":["無需註冊，提出功能和版面改進","Suggest improvements without registering","가입 없이 개선 의견 제출","登録不要で改善提案"],"访客留言":["訪客留言","Guest messages","방문자 메시지","訪問者メッセージ"],"查看公开留言并参与交流":["查看公開留言並參與交流","Read and post public messages","공개 메시지 읽고 참여하기","公開メッセージを読む・投稿する"],"关于平台与发起人":["關於平台與發起人","About the platform & founder","사이트 및 설립자 소개","サイトと発起人について"],"观点文章分类":["觀點文章分類","Article categories","글 분류","記事カテゴリー"],"政治观点":["政治觀點","Political views","정치적 견해","政治的見解"],"个人经历":["個人經歷","Personal experiences","개인 경험","個人の経験"],"国际局势":["國際局勢","International affairs","국제 정세","国際情勢"],"社会评论":["社會評論","Social commentary","사회 논평","社会評論"],"公开声明":["公開聲明","Public statements","공개 성명","公開声明"],"其他":["其他","Other","기타","その他"],"资料与资源":["資料與資源","Documents & resources","자료 및 리소스","資料とリソース"],"公开声明、证据资料、人权资料与个人记录将逐步整理发布。":["公開聲明、證據、人權資料與個人記錄將陸續整理發布。","Statements, evidence, human-rights materials and personal records will be published progressively.","성명서·증거·인권 자료·개인 기록을 순차적으로 공개합니다.","声明・証拠・人権資料・個人記録を順次公開します。"],"查看公开声明":["查看公開聲明","View statements","공개 성명 보기","公開声明を見る"],"媒体与联系":["媒體與聯絡","Media & contact","미디어 및 연락처","メディアと連絡先"],"发起人的社交媒体":["發起人的社群媒體","Founder's social media","설립자 SNS","発起人のSNS"],"进入栏目 →":["進入欄目 →","Open section →","섹션으로 이동 →","セクションへ →"],"访客留言板":["訪客留言板","Guest message board","방문자 게시판","訪問者掲示板"],"查看与发表公开留言":["查看與發表公開留言","Read and post messages","공개 메시지 읽기·작성","メッセージの閲覧・投稿"],"平台联系":["平台聯絡","Contact","문의","お問い合わせ"],"媒体联系、采访及资料沟通":["媒體聯絡、採訪及資料溝通","Press, interviews and information requests","언론·인터뷰·자료 문의","取材・インタビュー・資料の連絡"],"社区规则":["社區規則","Community rules","커뮤니티 규칙","コミュニティ規則"],"隐私说明":["隱私說明","Privacy policy","개인정보 안내","プライバシー"],"浏览所有文章":["瀏覽所有文章","Browse all articles","모든 글 보기","すべての記事"],"分享文章":["分享文章","Share article","글 공유","記事を共有"],"复制链接":["複製連結","Copy link","링크 복사","リンクをコピー"],"读者评论":["讀者評論","Reader comments","독자 댓글","読者コメント"],"发表评论":["發表評論","Post comment","댓글 작성","コメントを投稿"]});
Object.assign(data,{"← 上一篇":["← 上一篇","← Previous","← 이전 글","← 前の記事"],"下一篇 →":["下一篇 →","Next →","다음 글 →","次の記事 →"]});
Object.assign(data,{"全部分类":["全部分類","All categories","전체 분류","すべてのカテゴリー"],"时事政治":["時事政治","Politics & current affairs","시사·정치","時事・政治"],"社会观察":["社會觀察","Society","사회 관찰","社会観察"],"宗教信仰":["宗教信仰","Faith & religion","종교·신앙","宗教・信仰"],"自由讨论":["自由討論","Open discussion","자유 토론","自由討論"],"发表文章":["發表文章","Create post","글 작성","記事を投稿"],"侵权投诉与内容处理":["侵權投訴與內容處理","Content complaints","콘텐츠 신고 및 처리","権利侵害の申立て"],"会员登录 / 注册":["會員登入 / 註冊","Member sign in / sign up","회원 로그인 / 가입","会員ログイン・登録"],"使用 Google 账户继续":["使用 Google 帳戶繼續","Continue with Google","Google로 계속","Googleで続行"],"使用 Facebook 账户继续（测试中）":["使用 Facebook 帳戶繼續（測試中）","Continue with Facebook (testing)","Facebook로 계속 (테스트 중)","Facebookで続行（試験中）"],"Apple 登录（暂未开放）":["Apple 登入（尚未開放）","Apple sign-in (not available)","Apple 로그인 (미지원)","Appleログイン（未対応）"],"登录":["登入","Log in","로그인","ログイン"],"注册并发送验证邮件":["註冊並寄送驗證郵件","Sign up & send verification","가입 및 인증 메일 발송","登録して確認メールを送信"],"退出登录":["登出","Log out","로그아웃","ログアウト"],"× 关闭":["× 關閉","× Close","× 닫기","× 閉じる"],"账户资料":["帳戶資料","Account details","계정 정보","アカウント情報"],"登录邮箱：":["登入電子郵件：","Login email:","로그인 이메일:","ログインメール："],"内部账户编号：":["內部帳戶編號：","Internal account ID:","내부 계정 ID:","内部アカウントID："],"会员ID：":["會員ID：","Member ID:","회원 ID:","会員ID："],"公开昵称":["公開暱稱","Public nickname","공개 닉네임","公開ニックネーム"],"私人联系资料（不对外展示）":["私人聯絡資料（不公開）","Private contact details (not public)","비공개 연락처","非公開の連絡先"],"个人网站":["個人網站","Personal website","개인 웹사이트","個人サイト"],"社交账号或联系平台":["社群帳號或聯絡平台","Social account or contact platform","소셜 계정 또는 연락 플랫폼","SNSアカウント・連絡先"],"联系电话（选填）":["聯絡電話（選填）","Phone (optional)","전화번호 (선택)","電話番号（任意）"],"其他联系或身份备注":["其他聯絡或身分備註","Other contact notes","기타 연락처 메모","その他の連絡先メモ"],"头像":["頭像","Profile photo","프로필 사진","プロフィール画像"],"选择或更换头像":["選擇或更換頭像","Choose or change photo","프로필 사진 변경","画像を選択・変更"],"删除头像":["刪除頭像","Remove photo","사진 삭제","画像を削除"],"保存个人资料（含头像）":["儲存個人資料（含頭像）","Save profile (including photo)","프로필 저장 (사진 포함)","プロフィールを保存"],"修改密码":["修改密碼","Change password","비밀번호 변경","パスワード変更"],"修改登录密码":["修改登入密碼","Change login password","로그인 비밀번호 변경","ログインパスワード変更"],"当前密码":["目前密碼","Current password","현재 비밀번호","現在のパスワード"],"新密码（至少8位，含大小写字母和数字）":["新密碼（至少8位，含大小寫字母與數字）","New password (8+ chars, upper/lowercase & numbers)","새 비밀번호 (8자 이상, 영문 대소문자·숫자)","新パスワード（8文字以上、英大小文字と数字）"],"再次输入新密码":["再次輸入新密碼","Confirm new password","새 비밀번호 확인","新パスワードを再入力"],"确认修改":["確認修改","Confirm changes","변경 확인","変更を確定"],"取消":["取消","Cancel","취소","キャンセル"],"注销账号":["註銷帳戶","Close account","계정 해지","アカウントを閉鎖"],"申请注销账号":["申請註銷帳戶","Request account closure","계정 해지 신청","アカウント閉鎖申請"],"发送邮箱验证码":["寄送電子郵件驗證碼","Send email code","이메일 인증 코드 전송","メール認証コードを送信"],"邮箱验证码":["電子郵件驗證碼","Email verification code","이메일 인증 코드","メール認証コード"],"分类":["分類","Category","분류","カテゴリー"],"标题":["標題","Title","제목","タイトル"],"正文（支持链接与图片）":["內文（支援連結與圖片）","Body (links & images supported)","본문 (링크·이미지 지원)","本文（リンク・画像対応）"],"插入链接":["插入連結","Insert link","링크 삽입","リンクを挿入"],"添加图片":["新增圖片","Add image","이미지 추가","画像を追加"],"站长上传讲道录音":["站長上傳講道錄音","Upload sermon recordings","설교 녹음 업로드","説教音声をアップロード"],"讲道录音":["講道錄音","Sermon recording","설교 녹음","説教音声"],"福音入门":["福音入門","Gospel basics","복음 입문","福音入門"],"圣经讲解":["聖經講解","Bible study","성경 해설","聖書解説"],"信仰见证":["信仰見證","Testimony","신앙 간증","信仰の証し"],"简介":["簡介","Description","설명","説明"],"选择音频":["選擇音訊","Choose audio","오디오 선택","音声を選択"],"上传并发布":["上傳並發布","Upload & publish","업로드 및 게시","アップロードして公開"],"正在加载录音……":["正在載入錄音……","Loading recordings…","녹음 불러오는 중…","音声を読み込み中…"],"申请援助":["申請援助","Request aid","지원 신청","支援を申請"],"加入志愿者":["加入志工","Volunteer","자원봉사 참여","ボランティアに参加"],"公益公示":["公益公告","Public aid reports","공익 활동 공개","公益活動報告"],"支持我们":["支持我們","Support us","후원하기","支援する"],"审核与隐私原则":["審核與隱私原則","Review & privacy principles","심사 및 개인정보 원칙","審査とプライバシー"],"返回首页":["返回首頁","Back home","홈으로","ホームへ戻る"],"网站建议与改进":["網站建議與改進","Website feedback & improvements","사이트 제안 및 개선","サイトへのご意見・改善提案"],"建议类别":["建議類別","Feedback category","제안 유형","提案カテゴリー"],"功能建议":["功能建議","Feature request","기능 제안","機能の提案"],"页面布局":["頁面版面","Page layout","페이지 레이아웃","ページレイアウト"],"手机体验":["手機體驗","Mobile experience","모바일 사용성","モバイルの使いやすさ"],"问题反馈":["問題回報","Report a problem","문제 신고","問題の報告"],"建议内容":["建議內容","Your suggestion","제안 내용","提案内容"],"联系方式（选填）":["聯絡方式（選填）","Contact (optional)","연락처 (선택)","連絡先（任意）"],"网址":["網址","Website URL","웹사이트 주소","URL"],"提交建议":["提交建議","Submit feedback","제안 제출","提案を送信"],"管理员 · 收到的建议":["管理員 · 收到的建議","Admin · Received feedback","관리자 · 접수된 제안","管理者・受信した提案"],"刷新建议":["重新整理建議","Refresh feedback","제안 새로고침","提案を更新"],"允许的表达":["允許的表達","Permitted expression","허용되는 표현","許可される表現"],"禁止的行为":["禁止的行為","Prohibited conduct","금지 행위","禁止行為"],"发表限制与审核":["發表限制與審核","Posting limits & moderation","게시 제한 및 검토","投稿制限と審査"],"举报与处罚":["檢舉與處罰","Reports & penalties","신고 및 제재","通報と処分"],"申诉和更正":["申訴和更正","Appeals & corrections","이의신청 및 정정","異議申立てと訂正"],"注册与公开信息":["註冊與公開資訊","Registration & public information","가입 및 공개 정보","登録と公開情報"],"网站存储和服务商":["網站儲存與服務商","Hosting & service providers","호스팅 및 서비스 제공업체","ホスティングと事業者"],"管理员可见的信息":["管理員可見的資訊","Information visible to admins","관리자가 볼 수 있는 정보","管理者が閲覧できる情報"],"第三方媒体":["第三方媒體","Third-party media","제3자 미디어","外部メディア"],"账号与内容管理":["帳戶與內容管理","Account & content management","계정 및 콘텐츠 관리","アカウントとコンテンツ管理"],"安全提示":["安全提示","Security tips","보안 안내","安全上の注意"],"如何举报":["如何檢舉","How to report","신고 방법","通報方法"],"处理原则":["處理原則","Handling principles","처리 원칙","対応方針"],"账号申诉与数据请求":["帳戶申訴與資料請求","Appeals & data requests","이의신청 및 정보 요청","異議申立てとデータ請求"],"版权投诉":["版權投訴","Copyright complaints","저작권 신고","著作権の申立て"],"手机音频上传管理":["手機音訊上傳管理","Mobile audio upload","모바일 오디오 업로드","モバイル音声アップロード"],"管理员登录":["管理員登入","Admin login","관리자 로그인","管理者ログイン"],"邮箱":["電子郵件","Email","이메일","メール"],"密码":["密碼","Password","비밀번호","パスワード"],"音频标题":["音訊標題","Audio title","오디오 제목","音声タイトル"],"上传至 R2 并发布":["上傳至 R2 並發布","Upload to R2 & publish","R2에 업로드 및 게시","R2へアップロードして公開"],"返回福音园地":["返回福音園地","Back to Gospel","복음 페이지로 돌아가기","福音広場へ戻る"],"返回论坛":["返回論壇","Back to forum","포럼으로 돌아가기","フォーラムに戻る"],"真实之声 · 社区规则":["真實之聲 · 社區規則","Voice of Truth · Community rules","진실의 목소리 · 커뮤니티 규칙","真実の声・コミュニティ規則"],"真实之声 · 隐私说明":["真實之聲 · 隱私說明","Voice of Truth · Privacy","진실의 목소리 · 개인정보 안내","真実の声・プライバシー"],"侵权投诉与内容处理说明":["侵權投訴與內容處理說明","Content complaints & handling","콘텐츠 신고 및 처리 안내","権利侵害申立てと対応"],"登录邮箱":["登入電子郵件","Login email","로그인 이메일","ログインメール"],"退出所有设备的登录":["登出所有裝置","Log out of all devices","모든 기기에서 로그아웃","すべての端末からログアウト"],"保存头像":["儲存頭像","Save photo","사진 저장","画像を保存"],"移除头像":["移除頭像","Remove photo","사진 제거","画像を削除"],"个人资料":["個人資料","Profile","프로필","プロフィール"],"账户安全":["帳戶安全","Account security","계정 보안","アカウントの安全"],"忘记密码":["忘記密碼","Forgot password","비밀번호 찾기","パスワードを忘れた場合"],"确认":["確認","Confirm","확인","確認"],"提交":["提交","Submit","제출","送信"],"搜索":["搜尋","Search","검색","検索"],"刷新":["重新整理","Refresh","새로고침","更新"],"加载更多":["載入更多","Load more","더 보기","もっと見る"]});
Object.assign(data,{"欢迎提出网站功能、页面布局、手机体验或其他改进意见。建议不会公开展示，由网站管理员查看。":["歡迎提出網站功能、頁面版面、手機體驗等改進意見。建議不會公開展示，僅管理員可查看。","Suggest features, layout changes or mobile improvements. Feedback is private and visible only to administrators.","사이트 기능, 레이아웃, 모바일 사용성 등에 관한 의견을 남겨 주세요. 제안은 공개되지 않으며 관리자만 볼 수 있습니다.","機能やレイアウト、モバイルでの使いやすさについてご提案ください。内容は非公開で管理者のみ閲覧できます。"],"请勿提交密码、身份证号等敏感资料。为了减少垃圾信息，建议不要重复提交。":["請勿提交密碼、證件號碼等敏感資料，也請避免重複提交。","Do not submit passwords, identity numbers or other sensitive information. Avoid duplicate submissions.","비밀번호, 신분증 번호 등 민감한 정보를 제출하지 마세요. 중복 제출도 삼가 주세요.","パスワードや身分証番号などの機密情報を送信しないでください。重複投稿もお控えください。"],"筹备阶段 · 暂未开放提交申请或收款":["籌備階段 · 尚未開放申請或收款","In preparation · Applications and payments unavailable","준비 중 · 신청 및 결제 미지원","準備中・申請と支払いは未対応"],"面向中国大陆有实际困难的个人、家庭与群体，计划提供求助信息核实、社会发声及条件允许时的实际援助。申请资格不以付费或宗教信仰为条件。":["計畫為中國大陸面臨實際困難的個人、家庭及群體提供資訊核實、公共發聲及條件允許時的援助。申請資格不取決於付費或宗教信仰。","Planned support for individuals, families and groups in mainland China facing hardship, including verifying requests and raising awareness. Eligibility does not depend on payment or religion.","중국 본토에서 어려움을 겪는 개인과 가족을 위해 요청 확인, 공론화 및 가능한 경우 실질적 지원을 계획하고 있습니다. 유료 결제나 종교는 자격 조건이 아닙니다.","中国本土で困難に直面する個人や家族に対し、情報確認、周知、可能な範囲での支援を計画しています。支払いや宗教は条件ではありません。"],"目前没有通过本中心开展的线上募捐项目。":["目前沒有透過本中心進行的線上募款專案。","There are currently no online fundraising campaigns through this center.","현재 이 센터를 통한 온라인 모금은 진행하지 않습니다.","現在、このセンターによるオンライン募金は行っていません。"],"本页为筹备说明，不构成公开募捐或援助承诺。":["本頁為籌備說明，不構成公開募款或援助承諾。","This page describes plans; it is not a fundraising solicitation or promise of aid.","이 페이지는 준비 사항 안내이며 모금이나 지원 약속이 아닙니다.","このページは準備状況の案内であり、募金の募集や支援の約束ではありません。"],"仅网站管理员可上传；单个文件不超过100MB。支持 MP3、M4A、AAC、WAV、OGG。请只上传有权公开传播的音频。":["僅網站管理員可上傳；單檔不超過100MB。支援 MP3、M4A、AAC、WAV、OGG。請僅上傳有權公開的音訊。","Admins only. Maximum 100 MB per file. Supports MP3, M4A, AAC, WAV and OGG. Upload only audio you have permission to publish.","관리자만 업로드할 수 있습니다. 파일당 최대 100MB, MP3·M4A·AAC·WAV·OGG 지원. 공개 권한이 있는 파일만 업로드하세요.","管理者のみアップロードできます。1ファイル100MBまで。MP3・M4A・AAC・WAV・OGG対応。公開権限のある音声のみアップロードしてください。"],"仅站长使用。支持 iPhone「文件」中的 MP3、M4A、AAC、WAV、OGG，单个文件最多100MB。上传至 Cloudflare R2。":["僅站長使用。支援 iPhone「檔案」中的 MP3、M4A、AAC、WAV、OGG，單檔最多100MB，上傳至 Cloudflare R2。","Owner only. Upload MP3, M4A, AAC, WAV or OGG from iPhone Files, up to 100 MB per file, to Cloudflare R2.","운영자 전용. iPhone 파일 앱에서 MP3·M4A·AAC·WAV·OGG 파일을 최대 100MB까지 Cloudflare R2에 업로드합니다.","管理者専用。iPhoneの「ファイル」からMP3・M4A・AAC・WAV・OGGを100MBまでCloudflare R2にアップロードできます。"],"不会修改既有51条讲道的 Google Drive ID、评论、点赞或播放统计。上传前请确认有权公开传播。":["不會修改既有51條講道的 Google Drive ID、評論、按讚或播放統計。上傳前請確認有公開權限。","Existing Google Drive IDs, comments, likes and play counts for the 51 sermons will remain unchanged. Confirm publication rights before uploading.","기존 51개 설교의 Google Drive ID, 댓글, 좋아요 및 재생 통계는 변경되지 않습니다. 업로드 권한을 확인하세요.","既存の51件の説教のGoogle Drive ID、コメント、いいね、再生回数は変更されません。公開権限をご確認ください。"],"本说明介绍网站目前的主要数据处理方式，不承诺完全匿名或无法追踪。":["本說明介紹網站目前主要的資料處理方式，不承諾完全匿名或無法追蹤。","This notice explains current data practices. Complete anonymity or untraceability is not guaranteed.","이 안내는 현재 사이트의 데이터 처리 방식을 설명합니다. 완전한 익명성은 보장하지 않습니다.","この案内は現在のデータ取扱いを説明します。完全な匿名性は保証されません。"],"真实之声支持公共讨论，也重视隐私、著作权、人身安全与申诉权利。正常的不同意见不构成删除理由。":["真實之聲支持公共討論，也重視隱私、著作權、人身安全及申訴權。正常的不同意見不構成刪除理由。","Voice of Truth supports public debate while respecting privacy, copyright, safety and appeals. Differences of opinion alone are not grounds for removal.","진실의 목소리는 공개 토론과 함께 개인정보, 저작권, 안전 및 이의신청 권리를 존중합니다. 의견 차이만으로 삭제하지 않습니다.","真実の声は公開討論とともにプライバシー、著作権、安全、異議申立ての権利を尊重します。意見の違いだけでは削除しません。"]});
Object.assign(data,{"关于":["關於","About","소개","概要"],"联系":["聯絡","Contact","연락처","連絡先"],"文章":["文章","Articles","글","記事"],"个人网站 · 博客 · 资料库":["個人網站 · 部落格 · 資料庫","Personal site · Blog · Resources","개인 사이트 · 블로그 · 자료실","個人サイト・ブログ・資料室"],"← 返回首页":["← 返回首頁","← Back home","← 홈으로","← ホームへ"],"← 返回文章列表":["← 返回文章列表","← Back to articles","← 글 목록으로","← 記事一覧へ"],"联系作者":["聯絡作者","Contact author","작성자에게 연락","著者に連絡"],"上传图片":["上傳圖片","Upload image","이미지 업로드","画像をアップロード"],"查看更多评论":["查看更多評論","View more comments","댓글 더 보기","コメントをもっと見る"],"正在读取评论……":["正在讀取評論……","Loading comments…","댓글 불러오는 중…","コメントを読み込み中…"],"发表公开评论":["發表公開評論","Post public comment","공개 댓글 게시","公開コメントを投稿"],"账户登录":["帳戶登入","Account login","계정 로그인","アカウントログイン"],"没有账户？立即注册":["沒有帳戶？立即註冊","No account? Sign up","계정이 없나요? 가입하기","アカウントがない場合は登録"],"会员管理":["會員管理","Member management","회원 관리","会員管理"],"注册日期":["註冊日期","Registration date","가입일","登録日"],"返回列表":["返回列表","Back to list","목록으로","一覧に戻る"],"会员等级与积分":["會員等級與積分","Member level & points","회원 등급 및 포인트","会員ランクとポイント"],"注册会员管理":["註冊會員管理","Manage registered members","가입 회원 관리","登録会員の管理"],"保存个人资料":["儲存個人資料","Save profile","프로필 저장","プロフィールを保存"],"个人简介（最多300字）":["個人簡介（最多300字）","Bio (max 300 characters)","자기소개 (최대 300자)","自己紹介（300文字以内）"],"个人网站链接（可选）":["個人網站連結（選填）","Website link (optional)","웹사이트 링크 (선택)","サイトURL（任意）"],"社交媒体主页链接（可选）":["社群媒體首頁連結（選填）","Social profile link (optional)","SNS 프로필 링크 (선택)","SNSプロフィールURL（任意）"],"网站会员":["網站會員","Website member","사이트 회원","サイト会員"],"独立观点与个人记录":["獨立觀點與個人記錄","Independent views & personal records","독립적 견해와 개인 기록","独自の見解と個人の記録"],"线上福音聚会宣传海报":["線上福音聚會宣傳海報","Online Gospel meeting poster","온라인 복음 모임 포스터","オンライン福音集会のポスター"],"公开昵称（2～30字）":["公開暱稱（2～30字）","Public nickname (2–30 characters)","공개 닉네임 (2~30자)","公開ニックネーム（2～30文字）"]});
Object.assign(data,{"查看和管理全部注册会员":["查看和管理全部註冊會員","View and manage all members","전체 가입 회원 보기 및 관리","全登録会員を表示・管理"],"搜索会员，点击昵称可调整等级、内容管理身份和积分；所有操作留有记录。":["搜尋會員，點擊暱稱可調整等級、管理權限和積分；所有操作均有記錄。","Search members and select a nickname to adjust level, moderation role and points. All actions are logged.","회원을 검색하고 닉네임을 선택해 등급·관리 권한·포인트를 변경할 수 있습니다. 모든 작업은 기록됩니다.","会員を検索し、名前を選択してランク・管理権限・ポイントを変更できます。操作は記録されます。"],"搜索昵称或邮箱":["搜尋暱稱或電子郵件","Search nickname or email","닉네임 또는 이메일 검색","名前またはメールで検索"],"关闭":["關閉","Close","닫기","閉じる"],"指定会员等级":["指定會員等級","Set member level","회원 등급 지정","会員ランクを指定"],"不调整等级":["不調整等級","Keep current level","등급 유지","ランクを変更しない"],"LV1 普通会员":["LV1 普通會員","LV1 Regular member","LV1 일반 회원","LV1 一般会員"],"LV2 活跃会员":["LV2 活躍會員","LV2 Active member","LV2 활동 회원","LV2 アクティブ会員"],"LV3 资深会员":["LV3 資深會員","LV3 Senior member","LV3 우수 회원","LV3 ベテラン会員"],"LV4 高级会员":["LV4 高級會員","LV4 Advanced member","LV4 고급 회원","LV4 上級会員"],"LV5 荣誉会员":["LV5 榮譽會員","LV5 Honorary member","LV5 명예 회원","LV5 名誉会員"],"内容管理权限":["內容管理權限","Content moderation role","콘텐츠 관리 권한","コンテンツ管理権限"],"不调整权限":["不調整權限","Keep current permissions","권한 유지","権限を変更しない"],"普通会员权限":["普通會員權限","Regular member permissions","일반 회원 권한","一般会員の権限"],"内容管理员身份":["內容管理員身分","Content moderator role","콘텐츠 관리자 권한","コンテンツ管理者権限"],"增减积分（-1000至1000）":["增減積分（-1000至1000）","Adjust points (-1000 to 1000)","포인트 조정 (-1000~1000)","ポイントを調整（-1000～1000）"],"操作原因（必填）":["操作原因（必填）","Reason (required)","변경 사유 (필수)","変更理由（必須）"],"确认修改":["確認修改","Save changes","변경 저장","変更を保存"],"LV1 · 普通会员":["LV1 · 普通會員","LV1 · Regular member","LV1 · 일반 회원","LV1・一般会員"],"0 积分":["0 積分","0 points","0 포인트","0ポイント"],"正在加载等级信息……":["正在載入等級資訊……","Loading membership level…","회원 등급 불러오는 중…","会員ランクを読み込み中…"],"最近积分记录":["最近積分記錄","Recent points history","최근 포인트 내역","最近のポイント履歴"],"正在加载……":["正在載入……","Loading…","불러오는 중…","読み込み中…"],"当前头像":["目前頭像","Current avatar","현재 프로필 사진","現在のプロフィール画像"],"上传新头像（JPG、PNG、WebP，自动压缩）":["上傳新頭像（JPG、PNG、WebP，自動壓縮）","Upload avatar (JPG, PNG, WebP; auto-compressed)","프로필 사진 업로드 (JPG, PNG, WebP; 자동 압축)","画像をアップロード（JPG・PNG・WebP、自動圧縮）"],"拖动图片调整位置，滑动缩放；方框内即为最终头像。":["拖曳圖片調整位置，滑動縮放；方框內即為最終頭像。","Drag to position, use the slider to zoom. The square shows the final avatar.","사진을 드래그해 위치를 조정하고 슬라이더로 확대하세요. 사각형이 최종 이미지입니다.","ドラッグして位置を調整し、スライダーで拡大縮小します。枠内が最終画像です。"],"缩放图片":["縮放圖片","Zoom image","이미지 확대/축소","画像を拡大・縮小"],"重置裁切":["重設裁切","Reset crop","자르기 초기화","切り抜きをリセット"],"最终头像预览":["最終頭像預覽","Final avatar preview","최종 프로필 미리보기","最終画像のプレビュー"],"公开昵称（2～30个字符，不要填写邮箱或真实姓名）":["公開暱稱（2～30字元，不要填寫電子郵件或真實姓名）","Public nickname (2–30 characters; do not use email or real name)","공개 닉네임 (2~30자, 이메일·실명 사용 금지)","公開ニックネーム（2～30文字、メール・本名は不可）"],"修改登录邮箱":["修改登入電子郵件","Change login email","로그인 이메일 변경","ログインメールを変更"],"发送邮箱修改验证邮件":["寄送電子郵件修改驗證信","Send email change confirmation","이메일 변경 인증 메일 발송","メール変更の確認を送信"],"修改密码（至少6位）":["修改密碼（至少6位）","Change password (6+ characters)","비밀번호 변경 (6자 이상)","パスワード変更（6文字以上）"],"更新密码":["更新密碼","Update password","비밀번호 업데이트","パスワードを更新"],"通过邮箱重设密码":["透過電子郵件重設密碼","Reset password by email","이메일로 비밀번호 재설정","メールでパスワードを再設定"],"退出所有设备的登录":["登出所有裝置","Sign out on all devices","모든 기기에서 로그아웃","すべての端末からログアウト"],"请输入新密码，完成密码重置。":["請輸入新密碼以完成重設。","Enter a new password to complete the reset.","새 비밀번호를 입력해 재설정을 완료하세요.","新しいパスワードを入力して再設定を完了してください。"],"新密码（至少6位）":["新密碼（至少6位）","New password (6+ characters)","새 비밀번호 (6자 이상)","新パスワード（6文字以上）"],"保存新密码":["儲存新密碼","Save new password","새 비밀번호 저장","新パスワードを保存"],"仅管理员可查看举报记录并删除违规评论。删除不可恢复。":["僅管理員可查看檢舉記錄並刪除違規評論，刪除後無法恢復。","Only administrators can review reports and delete violating comments. Deletion cannot be undone.","관리자만 신고 내역을 확인하고 위반 댓글을 삭제할 수 있습니다. 삭제는 취소할 수 없습니다.","管理者のみ通報履歴を確認し違反コメントを削除できます。削除は取り消せません。"],"刷新举报列表":["重新整理檢舉列表","Refresh reports","신고 목록 새로고침","通報一覧を更新"],"邮箱注册后请完成验证，再登录发表评论。":["電子郵件註冊後請完成驗證，再登入發表評論。","Verify your email after signing up, then log in to comment.","이메일 가입 후 인증을 완료하고 로그인하여 댓글을 작성하세요.","メール登録後に認証を完了し、ログインしてコメントしてください。"],"密码（至少6位）":["密碼（至少6位）","Password (6+ characters)","비밀번호 (6자 이상)","パスワード（6文字以上）"]});
Object.assign(data,{"当前账户：":["目前帳戶：","Current account:","현재 계정:","現在のアカウント："],"邮箱验证":["電子郵件驗證","Email verification","이메일 인증","メール認証"],"已验证":["已驗證","Verified","인증됨","認証済み"],"尚未验证":["尚未驗證","Not verified","미인증","未認証"],"积分记录":["積分記錄","Points history","포인트 내역","ポイント履歴"],"请稍后重试。":["請稍後重試。","Please try again later.","잠시 후 다시 시도하세요.","しばらくしてから再試行してください。"],"收藏本站":["收藏本站","Bookmark site","사이트 즐겨찾기","サイトをブックマーク"],"收藏最新讨论":["收藏最新討論","Bookmark discussions","토론 즐겨찾기","議論をブックマーク"],"收藏站长专栏":["收藏站長專欄","Bookmark editor's column","운영자 칼럼 즐겨찾기","コラムをブックマーク"],"收藏关于平台":["收藏關於平台","Bookmark about page","소개 페이지 즐겨찾기","概要ページをブックマーク"],"收藏资料库":["收藏資料庫","Bookmark resources","자료실 즐겨찾기","資料室をブックマーク"],"复制链接":["複製連結","Copy link","링크 복사","リンクをコピー"],"阅读文章 →":["閱讀文章 →","Read article →","글 읽기 →","記事を読む →"],"搜索文章标题、分类或内容...":["搜尋文章標題、分類或內容...","Search article titles, categories or content…","글 제목·분류·내용 검색…","記事タイトル・分類・本文を検索…"],"自由讨论":["自由討論","Open discussion","자유 토론","自由討論"],"宗教信仰":["宗教信仰","Religion & faith","종교·신앙","宗教・信仰"],"播放":["播放","plays","재생","再生"],"点赞":["按讚","likes","좋아요","いいね"],"评论":["評論","comments","댓글","コメント"],"最新发布 · 公开声明":["最新發布 · 公開聲明","Latest · Public statements","최신 게시물 · 공개 성명","最新・公開声明"],"一个人的发起 · 众人的表达 · 发言者自行决定公开内容":["一個人的發起 · 眾人的表達 · 發言者自行決定公開內容","Founded by one · Open to all · Authors choose what to publish","한 사람의 시작 · 모두의 목소리 · 공개 내용은 작성자가 결정","一人が始め、みんなが語る・公開内容は投稿者が決定"],"规则支持访客和会员免费申请，提交后获得安全查询凭证。涉及个人信息的在线申请通道须在权限和隐私测试通过后开放。":["規則支援訪客和會員免費申請，提交後取得安全查詢憑證。涉及個人資料的申請通道將在安全測試通過後開放。","Guests and members will be able to apply free of charge and receive a secure reference code. Applications involving personal data will open after security and privacy checks.","방문자와 회원은 무료로 신청하고 안전한 조회 코드를 받을 수 있습니다. 개인정보 신청은 보안·개인정보 테스트 후 개방됩니다.","訪問者と会員は無料で申請でき、安全な照会番号を受け取れます。個人情報を扱う申請は安全性確認後に開始します。"],"当前不接收身份证件、住址、病历或银行资料，请勿在公开论坛留言提交。":["目前不接收身分證件、地址、病歷或銀行資料，請勿在公開論壇提交。","Do not submit identity documents, addresses, medical records or bank details in public forum messages.","현재 신분증·주소·의료기록·은행정보를 받지 않습니다. 공개 게시판에 올리지 마세요.","現在、身分証・住所・診療記録・銀行情報は受け付けていません。公開掲示板に投稿しないでください。"],"规划支持现有会员申请及站长邀请。审核志愿者仅能查看被分配的申请，所有援助决定由站长最终批准。":["規劃支援會員申請及站長邀請。審核志工僅能查看分配的申請，援助決定由站長最終批准。","Members may apply or be invited to volunteer. Reviewers can access only assigned applications; the site owner makes final aid decisions.","회원 신청 및 운영자 초대를 계획 중입니다. 심사 봉사자는 배정된 신청만 볼 수 있고 지원 결정은 운영자가 최종 승인합니다.","会員の応募または運営者の招待を予定しています。審査担当者は割り当てられた申請のみ閲覧でき、支援は運営者が最終決定します。"],"志愿者报名入口尚未启用。":["志工報名入口尚未啟用。","Volunteer registration is not yet available.","자원봉사 신청은 아직 열리지 않았습니다.","ボランティア登録はまだ開始していません。"],"未来将公开项目进展、援助人数与资金收支汇总，同时保护申请人和受助人的身份信息。":["未來將公開專案進度、援助人數及資金收支彙總，並保護申請人與受助人身分。","Future reports will summarize progress, beneficiaries and finances while protecting applicants' identities.","향후 사업 진행 상황, 지원 인원 및 재정 내역을 공개하되 신청자의 신원을 보호합니다.","今後、活動状況・支援人数・収支を公開し、申請者の個人情報を保護します。"],"计划设立自愿会员支持、爱心捐助与信仰奉献。网站基本内容继续免费开放。":["計畫設立自願會員支持、愛心捐助與信仰奉獻。網站基本內容持續免費開放。","Voluntary membership support, donations and faith-based giving are planned. Core website content remains free.","자발적 회원 후원, 기부 및 신앙 헌금을 계획 중입니다. 기본 콘텐츠는 계속 무료입니다.","任意の会員支援、寄付、信仰に基づく献金を計画しています。基本コンテンツは引き続き無料です。"],"收款功能需完成法律、居留资格及支付渠道核实后启用。":["收款功能須完成法律、居留資格及支付管道核實後啟用。","Payments will only open after legal, residency and payment-provider checks.","결제 기능은 법률·체류자격·결제수단 확인 후 개방됩니다.","決済機能は法令・在留資格・決済手段の確認後に開始します。"],"求助资料默认不公开；审核志愿者仅按需授权；公开求助必须经当事人明确同意；不保证所有申请都能获得经济援助。":["求助資料預設不公開；審核志工僅按需授權；公開求助須取得當事人明確同意；不保證所有申請均獲經濟援助。","Aid requests are private by default. Reviewers receive limited access; publication requires explicit consent. Financial aid is not guaranteed.","지원 신청은 기본 비공개이며 심사자는 필요한 정보만 볼 수 있습니다. 공개에는 당사자 동의가 필요하며 재정 지원은 보장되지 않습니다.","支援申請は原則非公開で、審査担当者の閲覧権限を制限します。公開には本人の同意が必要で、経済的支援は保証されません。"],"我们正在建设安全的申请、审核与进度查询系统。请勿通过公开评论提交敏感个人资料。":["我們正在建置安全的申請、審核與進度查詢系統。請勿在公開評論提交敏感個人資料。","A secure application and review system is under development. Do not post sensitive personal information in public comments.","안전한 신청·심사·진행 조회 시스템을 개발 중입니다. 공개 댓글에 민감한 개인정보를 올리지 마세요.","安全な申請・審査・進捗確認システムを開発中です。公開コメントに機密の個人情報を投稿しないでください。"]});
Object.assign(data,{"这个网站由杨利伟个人发起与维护，既用于记录我的经历和观点，也为公众提供交流空间。论坛会员的观点由各自发表者负责，不代表站长立场。平台鼓励理性讨论与不同意见，反对威胁、骚扰和泄露他人隐私。":["這個網站由楊利偉個人發起與維護，用於記錄經歷和觀點，亦為公眾提供交流空間。論壇觀點由發表者負責，不代表站長立場。平台鼓勵理性討論，反對威脅、騷擾和洩露隱私。","This website is independently created and maintained by Yang Liwei to document personal experiences and views and provide a space for public discussion. Forum opinions belong to their authors and do not represent the site owner's position. Respectful disagreement is welcome; threats, harassment and disclosure of others' private information are not.","이 사이트는 양리웨이가 개인 경험과 견해를 기록하고 공개 토론의 장을 제공하기 위해 운영합니다. 게시글의 의견은 작성자 개인의 것이며 운영자의 입장을 대변하지 않습니다. 협박, 괴롭힘 및 개인정보 공개를 금지합니다.","このサイトは楊利偉が個人の経験や意見を記録し、公開討論の場を提供するために運営しています。投稿者の意見は運営者の立場を代表しません。脅迫、嫌がらせ、個人情報の暴露を禁止します。"],"隐私提示：请使用昵称，不要在公开文章中透露本人或他人的敏感身份信息。本站并不承诺完全匿名。":["隱私提醒：請使用暱稱，不要在公開文章透露敏感身分資訊。本站不保證完全匿名。","Privacy: Use a nickname and avoid disclosing sensitive personal information about yourself or others in public posts. Complete anonymity is not guaranteed.","개인정보 안내: 닉네임을 사용하고 공개 게시물에 민감한 신원 정보를 공개하지 마세요. 완전한 익명성은 보장되지 않습니다.","プライバシー：ニックネームを使用し、公開記事で自他の機密情報を明かさないでください。完全な匿名性は保証されません。"],"积分记录":["積分記錄","Points history","포인트 내역","ポイント履歴"],"暂无积分记录":["暫無積分記錄","No points history yet","포인트 내역이 없습니다","ポイント履歴はまだありません"],"请稍后重试。":["請稍後重試。","Please try again later.","잠시 후 다시 시도하세요.","しばらくしてから再試行してください。"]});
Object.assign(data,{"全部":["全部","All","전체","すべて"],"全部分类":["全部分類","All categories","전체 분류","すべてのカテゴリ"],"时事政治":["時事政治","Current affairs","시사 정치","時事・政治"],"国际局势":["國際局勢","International affairs","국제 정세","国際情勢"],"社会观察":["社會觀察","Social observations","사회 관찰","社会観察"],"宗教信仰":["宗教信仰","Religion & faith","종교·신앙","宗教・信仰"],"自由讨论":["自由討論","Open discussion","자유 토론","自由討論"],"共":["共","Total","총","合計"],"篇":["篇","articles","편","件"],"搜索文章标题、分类或内容…":["搜尋文章標題、分類或內容…","Search article titles, categories or content…","글 제목·분류·내용 검색…","記事タイトル・カテゴリ・内容を検索…"],"← 真实之声首页":["← 真實之聲首頁","← Voice of Truth home","← 진실의 목소리 홈","← 真実の声 ホーム"],"← 网站首页":["← 網站首頁","← Website home","← 사이트 홈","← サイトホーム"],"收藏":["收藏","Bookmark","즐겨찾기","ブックマーク"],"资料库":["資料庫","Resources","자료실","資料室"],"公共论坛":["公共論壇","Public forum","공개 포럼","公開フォーラム"],"福音园地":["福音園地","Gospel","복음","福音"],"关于平台":["關於平台","About","소개","サイトについて"],"浏览":["瀏覽","Views","조회","閲覧"],"点赞":["按讚","Likes","좋아요","いいね"],"评论":["評論","Comments","댓글","コメント"],"支持 Google 登录；Facebook 登录目前仅供已授权的测试账号使用。首次授权即完成注册，以后直接登录。":["支援 Google 登入；Facebook 登入目前僅供已授權測試帳戶使用。首次授權即完成註冊，之後可直接登入。","Google sign-in is supported. Facebook sign-in is currently limited to approved test accounts. First-time authorization creates an account; subsequent visits simply sign in.","Google 로그인을 지원합니다. Facebook 로그인은 승인된 테스트 계정만 이용할 수 있습니다. 최초 인증 시 가입이 완료됩니다.","Googleログインに対応しています。Facebookログインは承認済みテストアカウントのみ利用可能です。初回認証で登録が完了します。"],"当前没有有效登录会话。请先选择 Google、Facebook 或邮箱登录；登录成功后再点击「发表文章」。":["目前沒有有效登入工作階段。請先使用 Google、Facebook 或電子郵件登入，再點選「發表文章」。","You are not signed in. Sign in with Google, Facebook or email before selecting Create post.","로그인 상태가 아닙니다. Google, Facebook 또는 이메일로 로그인한 뒤 글쓰기를 선택하세요.","ログインしていません。Google、Facebook、メールのいずれかでログインしてから投稿してください。"],"也可以使用邮箱和密码注册或登录：":["也可以使用電子郵件及密碼註冊或登入：","You can also sign up or log in with email and password:","이메일과 비밀번호로 가입하거나 로그인할 수도 있습니다:","メールとパスワードでも登録・ログインできます："],"密码（至少8位，含大小写字母和数字）":["密碼（至少8位，包含大小寫字母與數字）","Password (8+ characters, upper/lowercase letters and numbers)","비밀번호 (8자 이상, 대소문자 및 숫자 포함)","パスワード（8文字以上、大小英字と数字）"],"注册后请在邮箱中完成验证，再发表文章。你的邮箱不会显示在论坛。":["註冊後請先完成電子郵件驗證再發文。電子郵件不會顯示在論壇。","Verify your email before posting. Your email address will not appear on the forum.","글을 작성하기 전에 이메일 인증을 완료하세요. 이메일 주소는 게시판에 표시되지 않습니다.","投稿前にメール認証を完了してください。メールアドレスは掲示板に表示されません。"],"规划支持访客和会员免费申请，提交后获得安全查询凭证。涉及个人信息的在线申请通道须在权限和隐私测试通过后开放。":["規劃支援訪客及會員免費申請，提交後取得安全查詢憑證。涉及個人資料的線上申請將在權限及隱私測試通過後開放。","Free applications for guests and members are planned, with a secure tracking reference. Online submissions involving personal information will open only after access-control and privacy testing.","방문자와 회원의 무료 신청 및 안전한 조회번호 제공을 계획 중입니다. 개인정보가 포함된 온라인 신청은 권한 및 개인정보 보호 검증 후 개방됩니다.","訪問者と会員の無料申請を予定しており、安全な照会番号を発行します。個人情報を扱うオンライン申請は権限・プライバシー検証後に開放します。"]});
Object.assign(data,{"← 返回论坛":["← 返回論壇","← Back to forum","← 포럼으로 돌아가기","← フォーラムに戻る"],"按类别查看私信与账户动态。关闭提醒只会隐藏未读提醒标记，不会删除消息记录。":["按類別查看私訊與帳戶動態。關閉提醒只會隱藏未讀提醒標記，不會刪除訊息記錄。","Browse private messages and account updates by category. Disabling alerts hides unread badges but keeps your message history.","개인 메시지와 계정 소식을 유형별로 확인하세요. 알림을 끄면 읽지 않음 표시만 숨겨지고 메시지 기록은 유지됩니다.","プライベートメッセージとアカウントの更新を分類して表示します。通知をオフにしても履歴は削除されません。"],"正在检查登录状态…":["正在檢查登入狀態…","Checking sign-in status…","로그인 상태 확인 중…","ログイン状態を確認中…"],"全部标为已读":["全部標示為已讀","Mark all as read","모두 읽음으로 표시","すべて既読にする"],"提醒设置":["提醒設定","Notification settings","알림 설정","通知設定"],"取消勾选后，该类消息不再计入未读提醒；历史消息仍可查看。":["取消勾選後，該類訊息不再計入未讀提醒；歷史訊息仍可查看。","Uncheck a category to exclude it from unread alerts. You can still view past messages.","체크를 해제하면 해당 유형은 읽지 않은 알림 수에 포함되지 않습니다. 이전 메시지는 계속 볼 수 있습니다.","チェックを外した種類は未読通知数に含まれません。過去のメッセージは引き続き閲覧できます。"],"全部":["全部","All","전체","すべて"],"私信":["私訊","Private messages","쪽지","ダイレクトメッセージ"],"关注":["關注","Follows","팔로우","フォロー"],"等级与权限":["等級與權限","Level & permissions","등급 및 권한","ランクと権限"],"积分":["積分","Points","포인트","ポイント"],"处罚":["處罰","Penalties","제재","処分"],"通知":["通知","Notification","알림","通知"],"暂无此类消息":["暫無此類訊息","No messages in this category","이 유형의 메시지가 없습니다","この種類のメッセージはありません"],"查看相关页面":["查看相關頁面","View related page","관련 페이지 보기","関連ページを表示"],"标为已读":["標示為已讀","Mark as read","읽음으로 표시","既読にする"],"提醒":["提醒"," alerts"," 알림","の通知"],"消息已更新":["訊息已更新","Messages updated","메시지가 업데이트되었습니다","メッセージを更新しました"],"提醒偏好已保存":["提醒偏好已儲存","Notification preferences saved","알림 설정이 저장되었습니다","通知設定を保存しました"],"请先在论坛登录，然后返回消息中心。":["請先在論壇登入，再返回訊息中心。","Please sign in on the forum, then return to the message center.","포럼에서 로그인한 뒤 알림 센터로 돌아오세요.","フォーラムでログインしてから通知センターに戻ってください。"],"前往论坛登录":["前往論壇登入","Sign in on forum","포럼 로그인","フォーラムでログイン"],"消息服务暂不可用":["訊息服務暫時無法使用","Messaging service unavailable","메시지 서비스를 사용할 수 없습니다","メッセージサービスを利用できません"],"收到一条新私信":["收到一則新私訊","New private message","새 쪽지가 도착했습니다","新しいダイレクトメッセージ"],"有人关注了你":["有人關注了你","Someone followed you","누군가 회원님을 팔로우했습니다","フォローされました"],"有人赞了你的个人主页":["有人讚了你的個人首頁","Someone liked your profile","누군가 프로필에 좋아요를 눌렀습니다","プロフィールにいいねが付きました"],"你的文章收到点赞":["你的文章收到按讚","Your post received a like","게시글에 좋아요가 달렸습니다","投稿にいいねが付きました"],"你的文章收到评论":["你的文章收到評論","New comment on your post","게시글에 새 댓글이 달렸습니다","投稿に新しいコメント"],"积分发生变化":["積分發生變化","Points updated","포인트가 변경되었습니다","ポイントが更新されました"],"账户处罚或管理通知":["帳戶處罰或管理通知","Account moderation notice","계정 제재 또는 관리 알림","アカウントの管理・処分通知"],"会员等级或权限已变更":["會員等級或權限已變更","Membership level or permissions changed","회원 등급 또는 권한이 변경되었습니다","会員ランクまたは権限が変更されました"],"会员等级或权限已更新":["會員等級或權限已更新","Membership level or permissions updated","회원 등급 또는 권한이 업데이트되었습니다","会員ランクまたは権限が更新されました"],"请在我的账户中查看最新等级与权限":["請在我的帳戶中查看最新等級與權限","Check your account for your current level and permissions","내 계정에서 최신 등급과 권한을 확인하세요","マイアカウントで最新のランクと権限をご確認ください"],"打开会员主页查看":["開啟會員首頁查看","View member profile","회원 프로필 보기","会員プロフィールを表示"]});
Object.assign(data,{"上传音频":["上傳音訊","Upload audio","오디오 업로드","音声をアップロード"],"管理音频":["管理音訊","Manage audio","오디오 관리","音声を管理"],"站长管理":["站長管理","Site administration","사이트 관리자","サイト管理"],"授权管理":["授權管理","Authorized management","권한 관리","権限管理"],"返回收听":["返回收聽","Back to listening","듣기로 돌아가기","視聴に戻る"],"返回网站主页":["返回網站首頁","Back to website home","사이트 홈으로 돌아가기","サイトのホームに戻る"],"上传":["上傳","Upload","업로드","アップロード"],"音频文件":["音訊檔案","Audio file","오디오 파일","音声ファイル"],"会员权限授权":["會員權限授權","Member permissions","회원 권한 부여","会員権限の付与"],"会员注册邮箱":["會員註冊電子郵件","Member email address","회원 가입 이메일","会員登録メールアドレス"],"查询会员权限":["查詢會員權限","Find member permissions","회원 권한 조회","会員権限を確認"],"保存授权":["儲存授權","Save permissions","권한 저장","権限を保存"],"上传录音":["上傳錄音","Upload recording","녹음 업로드","録音をアップロード"],"编辑录音资料":["編輯錄音資料","Edit recording details","녹음 정보 수정","録音情報を編集"],"调整录音排序":["調整錄音排序","Reorder recordings","녹음 순서 변경","録音の並び替え"],"隐藏与重新发布":["隱藏與重新發佈","Hide or republish","숨기기 및 다시 게시","非表示・再公開"],"删除录音记录":["刪除錄音記錄","Delete recording entry","녹음 항목 삭제","録音記録を削除"],"修改标题":["修改標題","Edit title","제목 수정","タイトルを編集"],"保存排序":["儲存排序","Save order","순서 저장","並び順を保存"],"排序数字":["排序數字","Order number","정렬 번호","並び順の番号"],"隐藏":["隱藏","Hide","숨기기","非表示"],"恢复显示":["恢復顯示","Show again","다시 표시","再表示"],"从公开列表移除":["從公開列表移除","Remove from public list","공개 목록에서 제외","公開一覧から除外"],"原有51讲录音":["原有51講錄音","Original 51 recordings","기존 녹음 51개","既存の録音51件"],"新上传录音":["新上傳錄音","New uploads","새로 업로드한 녹음","新規アップロード"],"录音标题":["錄音標題","Recording title","녹음 제목","録音タイトル"],"准备上传…":["準備上傳…","Preparing upload…","업로드 준비 중…","アップロードを準備中…"],"上传未完成":["上傳未完成","Upload incomplete","업로드 미완료","アップロード未完了"],"上传完成，正在发布…":["上傳完成，正在發佈…","Upload complete. Publishing…","업로드 완료. 게시 중…","アップロード完了。公開中…"],"上传并发布成功":["上傳並發佈成功","Uploaded and published","업로드 및 게시 완료","アップロードして公開しました"],"正在获取安全上传授权…":["正在取得安全上傳授權…","Requesting secure upload authorization…","안전한 업로드 권한 요청 중…","安全なアップロード許可を取得中…"],"正在上传至 R2，请保持页面打开…":["正在上傳至 R2，請保持頁面開啟…","Uploading to R2. Keep this page open…","R2에 업로드 중입니다. 페이지를 닫지 마세요…","R2にアップロード中です。ページを開いたままにしてください…"],"文件类型不支持或超过100MB":["檔案類型不支援或超過100MB","Unsupported file type or over 100 MB","지원하지 않는 파일 형식이거나 100MB를 초과했습니다","未対応のファイル形式、または100MBを超えています"],"登录已过期，请重新登录":["登入已過期，請重新登入","Session expired. Sign in again","로그인 세션이 만료되었습니다. 다시 로그인하세요","ログインの有効期限が切れました。再度ログインしてください"],"当前账户没有上传权限。":["目前帳戶沒有上傳權限。","This account cannot upload.","현재 계정에는 업로드 권한이 없습니다.","このアカウントにはアップロード権限がありません。"],"未找到该注册邮箱":["找不到該註冊電子郵件","No member found with this email","해당 이메일로 가입한 회원이 없습니다","このメールアドレスの会員が見つかりません"],"已读取会员权限":["已讀取會員權限","Member permissions loaded","회원 권한을 불러왔습니다","会員権限を読み込みました"],"授权已保存。会员刷新页面后生效。":["授權已儲存。會員重新整理頁面後生效。","Permissions saved. Member must refresh the page.","권한이 저장되었습니다. 회원이 페이지를 새로고침하면 적용됩니다.","権限を保存しました。会員がページを更新すると反映されます。"],"返回主页":["返回首頁","Back to home","홈으로 돌아가기","ホームに戻る"]});
Object.assign(data,{"保存中…":["儲存中…","Saving…","저장 중…","保存中…"],"正在保存个人资料…":["正在儲存個人資料…","Saving your profile…","프로필을 저장하는 중…","プロフィールを保存しています…"],"保存失败：":["儲存失敗：","Save failed: ","저장 실패: ","保存に失敗しました："],"请稍后重试":["請稍後再試","Please try again later","잠시 후 다시 시도하세요","しばらくしてから再試行してください"],"昵称应为2～30个字符，不能包含邮箱符号、尖括号或换行。":["暱稱須為2～30個字元，不能包含電子郵件符號、尖括號或換行。","Nickname must be 2–30 characters, without @, angle brackets or line breaks.","닉네임은 2~30자이며 @, 꺾쇠괄호, 줄바꿈을 포함할 수 없습니다.","ニックネームは2～30文字で、@、山括弧、改行は使用できません。"],"个人简介不能超过300字。":["個人簡介不能超過300字。","Bio cannot exceed 300 characters.","자기소개는 300자를 초과할 수 없습니다.","自己紹介は300文字以内にしてください。"],"个人网站链接必须是完整的 http/https 链接。":["個人網站連結必須是完整的 http/https 網址。","Website URL must be a complete http/https link.","웹사이트 주소는 완전한 http/https 링크여야 합니다.","ウェブサイトURLは完全なhttp/httpsリンクにしてください。"],"社交媒体链接必须是完整的 http/https 链接。":["社交媒體連結必須是完整的 http/https 網址。","Social URL must be a complete http/https link.","소셜 미디어 주소는 완전한 http/https 링크여야 합니다.","SNSのURLは完全なhttp/httpsリンクにしてください。"],"服务器未确认保存结果，请重新检查。":["伺服器未確認儲存結果，請重新檢查。","Server did not confirm the save. Please check again.","서버가 저장을 확인하지 못했습니다. 다시 확인하세요.","サーバーが保存を確認できませんでした。再確認してください。"],"首次设置昵称不计次数；之后可修改3次，第3次修改后需等待7天。":["首次設定暱稱不計次數；之後可修改3次，第3次修改後須等待7天。","Initial nickname setup is free. You may then change it 3 times, followed by a 7-day wait.","최초 닉네임 설정은 횟수에 포함되지 않습니다. 이후 3회 변경할 수 있으며, 세 번째 변경 후 7일간 기다려야 합니다.","初回のニックネーム設定は回数に含みません。その後3回変更でき、3回目の変更後は7日間待つ必要があります。"],"昵称修改已锁定，解锁时间：":["暱稱修改已鎖定，解鎖時間：","Nickname changes locked until: ","닉네임 변경 잠금 해제 시각: ","ニックネーム変更の解除日時："],"本轮还可修改 ":["本輪還可修改 ","Changes remaining: ","이번 주기 남은 변경 횟수: ","今回の残り変更回数："]," 次":[" 次"," times","회","回"]});
Object.assign(data,{"管理员处理入口":["管理員處理入口","Administrator actions","관리자 처리 메뉴","管理者の対応メニュー"],"举报处理":["檢舉處理","Handle reports","신고 처리","通報対応"],"发表与修改申请":["發表與修改申請","Publication and revision requests","게시 및 수정 신청","公開・修正申請"],"图片审核":["圖片審核","Image review","이미지 심사","画像審査"],"申诉处理":["申訴處理","Handle appeals","이의신청 처리","異議申立て対応"],"网站评论举报":["網站評論檢舉","Website comment reports","사이트 댓글 신고","サイトのコメント通報"],"举报":["檢舉","Reports","신고","通報"],"申请":["申請","Requests","신청","申請"],"申诉":["申訴","Appeals","이의신청","異議申立て"],"收到新的论坛举报":["收到新的論壇檢舉","New forum report","새 포럼 신고 접수","新しいフォーラム通報"],"收到新的评论举报":["收到新的評論檢舉","New comment report","새 댓글 신고 접수","新しいコメント通報"],"收到新的账号申诉":["收到新的帳號申訴","New account appeal","새 계정 이의신청","新しいアカウント異議申立て"],"收到新的文章发表申请":["收到新的文章發表申請","New publication request","새 글 게시 신청","新しい記事公開申請"],"收到文章修改审核申请":["收到文章修改審核申請","Article revision review requested","글 수정 심사 신청","記事修正の審査申請"],"收到文章删除申请":["收到文章刪除申請","Article deletion requested","글 삭제 신청","記事削除申請"],"收到图片审核申请":["收到圖片審核申請","Image review requested","이미지 심사 신청","画像審査申請"],"你的申请或申诉状态已更新":["你的申請或申訴狀態已更新","Your request or appeal status changed","신청 또는 이의신청 상태가 변경되었습니다","申請・異議申立ての状態が更新されました"],"论坛举报待处理":["論壇檢舉待處理","Forum report awaiting review","포럼 신고 처리 대기","フォーラム通報の対応待ち"],"文章评论举报待处理":["文章評論檢舉待處理","Comment report awaiting review","댓글 신고 처리 대기","コメント通報の対応待ち"],"会员账号申诉待处理":["會員帳號申訴待處理","Account appeal awaiting review","계정 이의신청 처리 대기","アカウント異議申立ての審査待ち"],"文章删除申请待处理":["文章刪除申請待處理","Article deletion awaiting review","글 삭제 신청 처리 대기","記事削除申請の審査待ち"],"图片待审核":["圖片待審核","Image awaiting review","이미지 심사 대기","画像審査待ち"],"当前状态：":["目前狀態：","Current status: ","현재 상태: ","現在の状態："]});
Object.assign(data,{"互动动态":["互動動態","Activity","활동 알림","アクティビティ"],"论坛出现新评论":["論壇出現新評論","New forum comment","새 포럼 댓글","新しいフォーラムコメント"],"网站文章出现新评论":["網站文章出現新評論","New website article comment","사이트 글에 새 댓글","サイト記事に新しいコメント"],"福音音频收到评论":["福音音訊收到評論","Gospel audio received a comment","복음 오디오에 새 댓글","福音音声に新しいコメント"],"讲道录音收到评论":["講道錄音收到評論","Sermon received a comment","설교 녹음에 새 댓글","説教録音に新しいコメント"],"论坛出现新文章":["論壇出現新文章","New forum post","새 포럼 게시글","新しいフォーラム投稿"],"论坛文章新增评论":["論壇文章新增評論","New comment on forum post","포럼 글에 새 댓글","フォーラム投稿に新しいコメント"],"站长文章新增评论":["站長文章新增評論","New comment on site article","사이트 글에 새 댓글","サイト記事に新しいコメント"],"福音音频新增评论":["福音音訊新增評論","New gospel audio comment","복음 오디오 새 댓글","福音音声に新しいコメント"],"讲道录音新增评论":["講道錄音新增評論","New sermon comment","설교 녹음 새 댓글","説教録音に新しいコメント"]});
Object.assign(data,{"消息中心 · 真实之声":["訊息中心 · 真實之聲","Message center · Voice of Truth","메시지 센터 · 진실의 목소리","メッセージセンター · 真実の声"],"⌂ 返回网站主页":["⌂ 返回網站首頁","⌂ Back to home","⌂ 사이트 홈으로","⌂ サイトのホームへ"],"真实之声｜公共论坛与文章专区":["真實之聲｜公共論壇與文章專區","Voice of Truth | Forum and Articles","진실의 목소리 | 포럼과 기사","真実の声｜フォーラムと記事"],"会员论坛 · 独立观点":["會員論壇 · 獨立觀點","Member forum · Independent views","회원 포럼 · 독립적인 의견","会員フォーラム · 独立した意見"],"文章专区 · 真实之声":["文章專區 · 真實之聲","Articles · Voice of Truth","기사 · 진실의 목소리","記事 · 真実の声"],"网友文章 · 真实之声":["網友文章 · 真實之聲","Community articles · Voice of Truth","회원 기사 · 진실의 목소리","会員記事 · 真実の声"],"站长专栏 · 真实之声":["站長專欄 · 真實之聲","Editor's column · Voice of Truth","운영자 칼럼 · 진실의 목소리","管理人コラム · 真実の声"],"福音园地 · 真实之声":["福音園地 · 真實之聲","Gospel · Voice of Truth","복음 마당 · 진실의 목소리","福音広場 · 真実の声"],"公益援助中心 · 真实之声":["公益援助中心 · 真實之聲","Community aid · Voice of Truth","공익 지원 센터 · 진실의 목소리","公益支援センター · 真実の声"],"社区规则｜真实之声":["社區規則｜真實之聲","Community rules | Voice of Truth","커뮤니티 규칙 | 진실의 목소리","コミュニティ規則｜真実の声"],"隐私说明｜真实之声":["隱私說明｜真實之聲","Privacy notice | Voice of Truth","개인정보 안내 | 진실의 목소리","プライバシー通知｜真実の声"],"真实之声 · 全站播放器":["真實之聲 · 全站播放器","Voice of Truth · Site-wide player","진실의 목소리 · 통합 플레이어","真実の声 · サイト共通プレーヤー"],"音频上传管理 · 真实之声":["音訊上傳管理 · 真實之聲","Audio upload management · Voice of Truth","오디오 업로드 관리 · 진실의 목소리","音声アップロード管理 · 真実の声"],"邮箱、内部账户编号和下方联系方式仅本人及网站管理员可见；公开页面只展示头像、昵称，以及你选择公开的会员ID。":["電子郵件、內部帳號編號及下方聯絡方式僅本人與網站管理員可見；公開頁面只顯示頭像、暱稱及你選擇公開的會員ID。","Your email, internal account ID and contact details below are visible only to you and site administrators. Public pages show your avatar, nickname and optional public member ID.","이메일, 내부 계정 ID 및 아래 연락처는 본인과 관리자만 볼 수 있습니다. 공개 페이지에는 프로필 사진, 닉네임 및 공개를 선택한 회원 ID만 표시됩니다.","メールアドレス、内部アカウントID、以下の連絡先は本人と管理者のみ閲覧できます。公開ページにはアイコン、ニックネーム、公開を選択した会員IDのみ表示されます。"],"允许其他用户查看我的会员ID（默认不公开）":["允許其他使用者查看我的會員ID（預設不公開）","Allow others to see my member ID (private by default)","다른 사용자가 회원 ID를 볼 수 있도록 허용 (기본 비공개)","他のユーザーに会員IDを公開する（初期設定は非公開）"],"头像选择后点击下方「保存个人资料」才会生效。":["選擇頭像後須點擊下方「儲存個人資料」才會生效。","After choosing an avatar, click Save profile to apply it.","프로필 사진 선택 후 아래의 프로필 저장을 눌러야 적용됩니다.","アイコンを選択した後、「プロフィールを保存」を押すと反映されます。"],"评论公开显示。请尊重他人，不要发布个人隐私信息。":["評論會公開顯示。請尊重他人，不要發布個人隱私資訊。","Comments are public. Respect others and do not share private information.","댓글은 공개됩니다. 타인을 존중하고 개인정보를 게시하지 마세요.","コメントは公開されます。他者を尊重し、個人情報を投稿しないでください。"],"注册并验证邮箱后，即可参与评论。":["註冊並驗證電子郵件後，即可參與評論。","Register and verify your email to comment.","가입 후 이메일 인증을 완료하면 댓글을 작성할 수 있습니다.","登録してメール認証を完了するとコメントできます。"],"文章评论仅属于当前文章，不会与其他文章混合。":["文章評論僅屬於目前文章，不會與其他文章混合。","Comments belong to this article only.","댓글은 해당 글에만 표시되며 다른 글과 섞이지 않습니다.","コメントはこの記事にのみ表示され、他の記事と混ざりません。"],"正在验证上传权限…":["正在驗證上傳權限…","Checking upload permissions…","업로드 권한 확인 중…","アップロード権限を確認しています…"],"Google Drive 备用录音":["Google Drive 備用錄音","Google Drive backup recording","Google Drive 백업 녹음","Google Drive 予備録音"],"← 返回福音园地":["← 返回福音園地","← Back to Gospel","← 복음 마당으로","← 福音広場に戻る"],"使用网站现有的 Supabase 管理员账户。":["使用網站現有的 Supabase 管理員帳號。","Use your existing Supabase site administrator account.","기존 Supabase 사이트 관리자 계정을 사용하세요.","既存のSupabaseサイト管理者アカウントを使用してください。"],"此图片含血腥、暴力或成人敏感内容（默认遮挡）":["此圖片含血腥、暴力或成人敏感內容（預設遮擋）","This image contains graphic, violent or adult content (hidden by default)","이 이미지에는 유혈·폭력·성인 콘텐츠가 포함되어 있습니다 (기본 가림)","この画像には流血・暴力・成人向けの内容が含まれます（初期状態では非表示）"],"我了解以上后果并申请注销":["我了解上述後果並申請註銷","I understand the consequences and request account deactivation","위 결과를 이해했으며 계정 해지를 신청합니다","上記の結果を理解し、アカウント停止を申請します"],"验证邮箱并确认注销":["驗證電子郵件並確認註銷","Verify email and confirm deactivation","이메일 인증 후 계정 해지 확인","メール認証して停止を確定"],"确认申请注销？":["確認申請註銷？","Confirm account deactivation request?","계정 해지를 신청하시겠습니까?","アカウント停止を申請しますか？"]});
Object.assign(data,{"密码（至少10位，含大小写字母和数字）":["密碼（至少10位，含大小寫字母和數字）","Password (10+ characters, uppercase, lowercase and number)","비밀번호 (10자 이상, 대문자·소문자·숫자 포함)","パスワード（10文字以上、英大文字・小文字・数字）"],"新密码（至少10位，含大小写字母和数字）":["新密碼（至少10位，含大小寫字母和數字）","New password (10+ characters, uppercase, lowercase and number)","새 비밀번호 (10자 이상, 대문자·소문자·숫자 포함)","新しいパスワード（10文字以上、英大文字・小文字・数字）"],"注册密码至少10位，必须同时包含大写英文字母、小写英文字母和数字":["註冊密碼至少10位，須同時包含英文大寫字母、小寫字母及數字","Registration password must be at least 10 characters with uppercase, lowercase and numbers.","가입 비밀번호는 10자 이상이며 대문자, 소문자, 숫자를 모두 포함해야 합니다.","登録パスワードは10文字以上で、英大文字・小文字・数字を含めてください。"],"新密码至少10位，必须包含大写字母、小写字母和数字":["新密碼至少10位，須包含大寫字母、小寫字母和數字","New password must be at least 10 characters with uppercase, lowercase and numbers.","새 비밀번호는 10자 이상이며 대문자, 소문자, 숫자를 포함해야 합니다.","新しいパスワードは10文字以上で、英大文字・小文字・数字を含めてください。"]});
Object.assign(data,{"请先完成人机验证，再登录或注册。":["請先完成人機驗證，再登入或註冊。","Complete the CAPTCHA before signing in or registering.","로그인 또는 회원가입 전에 CAPTCHA 인증을 완료하세요.","ログイン・登録する前にCAPTCHA認証を完了してください。"]});
Object.assign(data,{"密码（至少8位，含大小写字母和数字）":["密碼（至少10位，含大小寫字母和數字）","Password (10+ characters, uppercase, lowercase and number)","비밀번호 (10자 이상, 대문자·소문자·숫자 포함)","パスワード（10文字以上、英大文字・小文字・数字）"],"新密码（至少8位，含大小写字母和数字）":["新密碼（至少10位，含大小寫字母和數字）","New password (10+ characters, uppercase, lowercase and number)","새 비밀번호 (10자 이상, 대문자·소문자·숫자 포함)","新しいパスワード（10文字以上、英大文字・小文字・数字）"]});
Object.assign(data,{"请先完成人机验证，再申请重设密码。":["請先完成人機驗證，再申請重設密碼。","Complete the CAPTCHA before requesting a password reset.","비밀번호 재설정을 요청하기 전에 CAPTCHA 인증을 완료하세요.","パスワード再設定を申請する前にCAPTCHA認証を完了してください。"]});
const labels={'zh-CN':'简体中文','zh-TW':'繁體中文',en:'English',ko:'한국어',ja:'日本語'};
const storage='lyy-site-language';const current=()=>{try{const v=localStorage.getItem(storage);return langs.includes(v)?v:'zh-CN'}catch{return 'zh-CN'}};
const original=new WeakMap();const rendered=new WeakMap();const attrOriginal=new WeakMap();
const excluded=e=>!!e?.closest('script,style,noscript,textarea,pre,code,[contenteditable],[data-user-content],[data-no-translate],.post-body,.comment-body,.user-content,.sermon-row,.sermon-metrics,#drive-list,#drive-player,#post-list,.forum-comment-text,.forum-comment-wrap .forum-comment-text,.forum-post-content,[id*="nickname"],[id*="display-name"],[id*="author-name"],[id*="user-name"],[class*="nickname"],[class*="author-name"],[class*="user-name"],[data-nickname],[data-username]');
const normalize=t=>String(t||'').replace(/\s+/g,' ').trim();
Object.assign(data,{"请输入旧密码。":["請輸入舊密碼。","Enter your current password.","현재 비밀번호를 입력하세요.","現在のパスワードを入力してください。"],"当前密码不正确。":["目前密碼不正確。","Current password is incorrect.","현재 비밀번호가 올바르지 않습니다.","現在のパスワードが正しくありません。"],"两次输入的新密码不一致。":["兩次輸入的新密碼不一致。","New passwords do not match.","새 비밀번호가 일치하지 않습니다.","新しいパスワードが一致しません。"],"新密码不能与旧密码相同。":["新密碼不能與舊密碼相同。","New password must differ from the old password.","새 비밀번호는 이전 비밀번호와 달라야 합니다.","新しいパスワードは以前のものと異なる必要があります。"],"正在验证旧密码……":["正在驗證舊密碼……","Verifying current password…","현재 비밀번호 확인 중…","現在のパスワードを確認中…"],"旧密码验证成功，正在更新密码……":["舊密碼驗證成功，正在更新密碼……","Password verified. Updating…","비밀번호 확인 완료. 변경 중…","パスワード確認完了。更新中…"],"密码修改成功。下次登录请使用新密码。":["密碼修改成功。下次登入請使用新密碼。","Password changed. Use the new password next time you sign in.","비밀번호가 변경되었습니다. 다음 로그인부터 새 비밀번호를 사용하세요.","パスワードを変更しました。次回から新しいパスワードでログインしてください。"],"必须先验证当前密码。":["必須先驗證目前密碼。","Verify your current password first.","먼저 현재 비밀번호를 확인하세요.","先に現在のパスワードを確認してください。"],"新密码不符合安全要求。":["新密碼不符合安全要求。","New password does not meet security requirements.","새 비밀번호가 보안 요구사항을 충족하지 않습니다.","新しいパスワードがセキュリティ要件を満たしていません。"],"操作过于频繁，请稍后重试。":["操作過於頻繁，請稍後重試。","Too many attempts. Try again later.","요청이 너무 많습니다. 잠시 후 다시 시도하세요.","操作が多すぎます。しばらくしてから再試行してください。"],"网络连接失败，请检查网络后重试。":["網路連線失敗，請檢查網路後重試。","Network error. Check your connection and retry.","네트워크 오류입니다. 연결을 확인하고 다시 시도하세요.","ネットワークエラーです。接続を確認して再試行してください。"],"登录已过期，请重新登录。":["登入已過期，請重新登入。","Session expired. Sign in again.","로그인 세션이 만료되었습니다. 다시 로그인하세요.","セッションが期限切れです。再度ログインしてください。"],"操作失败，请稍后重试。":["操作失敗，請稍後重試。","Operation failed. Try again later.","작업에 실패했습니다. 잠시 후 다시 시도하세요.","操作に失敗しました。後でもう一度お試しください。"],"再次输入新密码":["再次輸入新密碼","Confirm new password","새 비밀번호 다시 입력","新しいパスワードを再入力"],"请输入旧密码":["請輸入舊密碼","Enter current password","현재 비밀번호 입력","現在のパスワードを入力"]});
Object.assign(data,{"举报文章":["舉報文章","Report article","게시글 신고","記事を通報"],"删除评论":["刪除評論","Delete comment","댓글 삭제","コメントを削除"],"举报":["舉報","Report","신고","通報"],"标记已处理":["標記已處理","Mark resolved","처리 완료 표시","対応済みにする"],"请输入举报文章的原因（5～300字）：":["請輸入舉報文章的原因（5～300字）：","Enter a reason for reporting this article (5–300 characters):","게시글 신고 사유를 입력하세요(5~300자):","記事の通報理由を入力してください（5～300文字）："],"举报原因需为5～300字。":["舉報原因須為5～300字。","Report reason must be 5–300 characters.","신고 사유는 5~300자여야 합니다.","通報理由は5～300文字で入力してください。"],"文章举报已提交，等待管理员处理。":["文章舉報已提交，等待管理員處理。","Article report submitted for review.","게시글 신고가 접수되었습니다. 관리자 검토를 기다려 주세요.","記事の通報を受け付けました。管理者が確認します。"],"请先完成邮箱验证。":["請先完成電子郵件驗證。","Verify your email first.","먼저 이메일 인증을 완료하세요.","先にメール認証を完了してください。"],"文章举报读取失败：":["文章舉報讀取失敗：","Failed to load article reports: ","게시글 신고 내역을 불러오지 못했습니다: ","記事の通報を読み込めませんでした："],"文章举报":["文章舉報","Article report","게시글 신고","記事の通報"],"举报失败：":["舉報失敗：","Report failed: ","신고 실패: ","通報失敗："],"请先在“我的账户”中设置公开昵称，再发表评论。":["請先在「我的帳戶」設定公開暱稱，再發表評論。","Set your public nickname in My Account before commenting.","댓글 작성 전 내 계정에서 공개 닉네임을 설정하세요.","コメント前にマイアカウントで公開ニックネームを設定してください。"],"正在提交文章，请稍候。":["正在提交文章，請稍候。","Submitting article…","게시글 제출 중…","記事を送信中…"]});
Object.assign(data,{"点赞":["點讚","Like","좋아요","いいね"],"已点赞":["已點讚","Liked","좋아요 완료","いいね済み"],"点赞操作失败：":["點讚操作失敗：","Like action failed: ","좋아요 처리 실패: ","いいね操作に失敗："]});
Object.assign(data,{"阅读":["閱讀","Views","조회","閲覧"],"评论":["評論","Comments","댓글","コメント"],"点赞":["點讚","Likes","좋아요","いいね"]});
Object.assign(data,{"网站导航":["網站導覽","Site navigation","사이트 탐색","サイトナビゲーション"],"展开菜单":["展開選單","Open menu","메뉴 열기","メニューを開く"],"搜索文章":["搜尋文章","Search articles","글 검색","記事を検索"],"文章分类筛选":["文章分類篩選","Filter article categories","글 분류 필터","記事カテゴリを絞り込む"],"文章翻页":["文章翻頁","Article pagination","글 페이지 이동","記事のページ切替"],"分享你的观点（最多2000字）":["分享你的觀點（最多2000字）","Share your thoughts (up to 2,000 characters)","의견을 나눠주세요(최대 2,000자)","ご意見を共有（最大2000文字）"],"机器人验证":["機器人驗證","Bot verification","봇 인증","ボット認証"],"留空表示不调整":["留空表示不調整","Leave blank to keep unchanged","변경하지 않으려면 비워 두세요","変更しない場合は空欄"],"文章分类":["文章分類","Article category","글 분류","記事カテゴリ"],"Apple 登录暂未开放":["Apple 登入暫未開放","Apple sign-in is not yet available","Apple 로그인은 아직 지원되지 않습니다","Appleでのログインはまだ利用できません"],"关闭个人账户弹窗":["關閉個人帳戶視窗","Close account dialog","계정 창 닫기","アカウント画面を閉じる"],"例如 Telegram 用户名、微信号":["例如 Telegram 使用者名稱、微信帳號","For example, Telegram username or WeChat ID","예: 텔레그램 사용자 이름, 위챗 ID","例：Telegramユーザー名、WeChat ID"],"仅自己和管理员可见":["僅自己和管理員可見","Visible only to you and administrators","본인과 관리자만 볼 수 있습니다","本人と管理者のみ閲覧可能"],"请输入邮件中的验证码":["請輸入郵件中的驗證碼","Enter the verification code from your email","이메일 인증 코드를 입력하세요","メールの認証コードを入力"],"录音播放器":["錄音播放器","Audio player","오디오 플레이어","音声プレーヤー"],"Google Drive 音频播放器":["Google Drive 音訊播放器","Google Drive audio player","Google Drive 오디오 플레이어","Google Drive音声プレーヤー"],"下载本站录音":["下載本站錄音","Download recording","녹음 다운로드","録音をダウンロード"],"点击播放录音":["點擊播放錄音","Tap to play recording","눌러서 녹음 재생","タップして録音を再生"],"正在连接 Google Drive，请稍候…":["正在連接 Google Drive，請稍候…","Connecting to Google Drive…","Google Drive 연결 중…","Google Driveに接続中…"],"正在播放录音…":["正在播放錄音…","Playing recording…","녹음 재생 중…","録音を再生中…"],"点击点赞或取消点赞":["點擊按讚或取消按讚","Tap to like or unlike","좋아요 또는 취소","いいね・取り消し"],"打开评论并发表评论":["開啟評論並發表評論","Open comments and post","댓글 열기 및 작성","コメントを開いて投稿"],"站长录音管理":["站長錄音管理","Owner audio management","관리자 오디오 관리","管理者の音声管理"],"站长音频上传":["站長音訊上傳","Owner audio upload","관리자 오디오 업로드","管理者の音声アップロード"],"查询中…":["查詢中…","Loading…","조회 중…","読み込み中…"],"请具体说明希望改进的地方（至少10字）":["請具體說明希望改進的地方（至少10字）","Describe the improvement you suggest (at least 10 characters)","개선할 내용을 구체적으로 입력하세요(10자 이상)","改善案を具体的に入力してください（10文字以上）"],"邮箱或其他联系方式；不填写也可提交":["電子郵件或其他聯絡方式；可留空","Email or other contact (optional)","이메일 또는 기타 연락처(선택)","メールなどの連絡先（任意）"],"建议内容需要10～3000字":["建議內容需10～3000字","Suggestion must be 10–3,000 characters","제안은 10~3,000자여야 합니다","提案は10～3000文字で入力してください"],"服务暂时不可用，请稍后再试":["服務暫時無法使用，請稍後再試","Service temporarily unavailable. Try again later.","서비스를 일시적으로 이용할 수 없습니다. 잠시 후 다시 시도하세요","サービスを一時的に利用できません。後でお試しください"],"建议已收到，感谢反馈。":["已收到建議，感謝回饋。","Suggestion received. Thank you.","제안이 접수되었습니다. 감사합니다.","ご提案を受け付けました。ありがとうございます。"],"暂无建议":["暫無建議","No suggestions yet","아직 제안이 없습니다","まだ提案はありません"],"切换网站语言":["切換網站語言","Change site language","사이트 언어 변경","サイトの言語を変更"],"选择网站语言":["選擇網站語言","Select site language","사이트 언어 선택","サイトの言語を選択"],"全站音频播放器":["全站音訊播放器","Site-wide audio player","사이트 전체 오디오 플레이어","サイト共通音声プレーヤー"],"静音":["靜音","Mute","음소거","ミュート"],"解除静音":["解除靜音","Unmute","음소거 해제","ミュート解除"],"点击 ▶ 开始播放":["點擊 ▶ 開始播放","Tap ▶ to play","▶를 눌러 재생","▶をタップして再生"],"Google Drive 备用播放":["Google Drive 備用播放","Google Drive fallback playback","Google Drive 대체 재생","Google Drive代替再生"],"播放失败":["播放失敗","Playback failed","재생 실패","再生に失敗"],"音频加载失败":["音訊載入失敗","Failed to load audio","오디오 로딩 실패","音声の読み込みに失敗"],"页面导航":["頁面導覽","Page navigation","페이지 탐색","ページナビゲーション"],"搜索专栏文章":["搜尋專欄文章","Search column articles","칼럼 글 검색","コラム記事を検索"]});
Object.assign(data,{"会员ID：":["會員ID：","Member ID:","회원 ID:","会員ID："],"修改会员ID":["修改會員ID","Change member ID","회원 ID 변경","会員IDを変更"],"暂不可修改会员ID":["暫不可修改會員ID","Member ID cannot be changed yet","회원 ID는 아직 변경할 수 없습니다","会員IDはまだ変更できません"],"会员ID现在可以修改。":["會員ID現在可以修改。","You can change your member ID now.","지금 회원 ID를 변경할 수 있습니다.","会員IDを変更できます。"],"新会员首次修改免费，不计入六个月等待期。":["新會員首次修改免費，不計入六個月等待期。","New members get one initial ID change without the six-month wait.","신규 회원의 첫 ID 변경은 6개월 대기 제한에서 제외됩니다.","新規会員の初回ID変更には6か月の待機期間が適用されません。"],"下次可修改日期：":["下次可修改日期：","Next change available: ","다음 변경 가능일: ","次回変更可能日："],"会员ID状态读取失败：":["會員ID狀態讀取失敗：","Failed to load member ID status: ","회원 ID 상태 조회 실패: ","会員IDの状態取得に失敗："],"会员ID必须为4～20位字母、数字或下划线。":["會員ID必須為4～20位字母、數字或底線。","Member ID must be 4–20 letters, numbers or underscores.","회원 ID는 영문자·숫자·밑줄 4~20자여야 합니다.","会員IDは英数字・アンダースコア4～20文字で入力してください。"],"4～20位大写字母、数字或下划线":["4～20位大寫字母、數字或底線","4–20 uppercase letters, digits or underscores","대문자·숫자·밑줄 4~20자","大文字・数字・アンダースコア4～20文字"],"正在保存会员ID……":["正在儲存會員ID……","Saving member ID…","회원 ID 저장 중…","会員IDを保存中…"],"会员ID修改成功。":["會員ID修改成功。","Member ID changed successfully.","회원 ID가 변경되었습니다.","会員IDを変更しました。"],"会员ID修改失败：":["會員ID修改失敗：","Failed to change member ID: ","회원 ID 변경 실패: ","会員IDの変更に失敗："],"公开会员ID：":["公開會員ID：","Public member ID: ","공개 회원 ID: ","公開会員ID："],"允许其他用户查看我的会员ID（默认不公开）":["允許其他使用者查看我的會員ID（預設不公開）","Allow others to see my member ID (private by default)","다른 회원에게 내 ID 공개(기본 비공개)","他の会員にIDを公開する（初期設定は非公開）"],"会员ID":["會員ID","Member ID","회원 ID","会員ID"],"保存":["儲存","Save","저장","保存"],"修改":["修改","Edit","수정","変更"],"取消":["取消","Cancel","취소","キャンセル"]});
Object.assign(data,{"公开设置已保存。":["公開設定已儲存。","Visibility preference saved.","공개 설정이 저장되었습니다.","公開設定を保存しました。"],"请先在论坛建立会员资料。":["請先在論壇建立會員資料。","Create your member profile in the forum first.","먼저 포럼에서 회원 프로필을 만드세요.","先にフォーラムで会員プロフィールを作成してください。"]});
Object.assign(data,{"提交发布":["提交發佈","Submit for publication","게시 제출","投稿する"],"文章提交成功，已进入审核队列。审核通过前仅您和审核人员可见；审核通过后自动公开，并向您发送通知。":["文章提交成功，已進入審核佇列。審核通過前僅您和審核人員可見；通過後自動公開並通知您。","Article submitted for review. Only you and reviewers can see it until approved. Once approved, it will be published and you will be notified.","게시글이 심사 대기열에 제출되었습니다. 승인 전에는 작성자와 심사자만 볼 수 있으며, 승인되면 공개되고 알림을 받습니다.","記事を審査待ちとして提出しました。承認前は投稿者と審査担当者のみ閲覧でき、承認後に公開され通知されます。"],"提交发布即授权站长和管理员审核此篇文章，审核通过前不对外展示。":["提交發佈即授權站長和管理員審核此篇文章，通過前不公開。","Submitting authorizes the owner and moderators to review this article. It remains private until approval.","제출하면 사이트 운영자와 관리자의 심사에 동의한 것으로 간주되며 승인 전에는 공개되지 않습니다.","投稿するとサイト運営者と管理者による審査に同意したものとみなされ、承認前は非公開です。"],"所有已验证邮箱的会员均可提交文章。提交后立即进入待审核状态，仅作者与审核人员可见；审核通过后自动公开，并通知作者。":["所有已驗證電郵的會員均可提交文章。提交後進入待審核狀態，僅作者及審核人員可見；通過後自動公開並通知作者。","All email-verified members can submit articles. Submissions remain visible only to the author and reviewers until approved, then are published automatically with a notification.","이메일 인증을 완료한 회원은 글을 제출할 수 있습니다. 승인 전에는 작성자와 심사자만 볼 수 있으며 승인 후 자동 공개되고 작성자에게 알림이 전송됩니다.","メール認証済みの会員は記事を投稿できます。承認までは投稿者と審査担当者のみ閲覧でき、承認後に自動公開され通知されます。"],"您可以保存私人草稿，或直接提交文章进入审核队列。审核通过前文章不会对外展示。":["您可儲存私人草稿，或直接提交文章進入審核佇列。通過前不會公開。","Save a private draft or submit directly for review. The article stays private until approved.","비공개 초안을 저장하거나 심사 대기열에 바로 제출할 수 있습니다. 승인 전에는 공개되지 않습니다.","非公開の下書きを保存するか、審査に直接提出できます。承認前は公開されません。"],"保存或发布失败：":["儲存或發佈失敗：","Save or submission failed: ","저장 또는 제출 실패: ","保存または投稿に失敗："],"草稿已保存，仅您本人可见。":["草稿已儲存，僅您本人可見。","Draft saved. Only you can see it.","초안이 저장되었습니다. 본인만 볼 수 있습니다.","下書きを保存しました。本人のみ閲覧できます。"],"收到新的文章审核任务":["收到新的文章審核任務","New article awaiting review","새 게시글 심사 요청","新しい記事の審査依頼"],"收到新的文章发表申请":["收到新的文章發表申請","New article submission to review","새 게시글 제출 알림","新しい記事の投稿申請"],"文章审核通过":["文章審核通過","Article approved","게시글 승인됨","記事が承認されました"],"文章审核未通过":["文章審核未通過","Article not approved","게시글 심사 미승인","記事は承認されませんでした"],"待审核文章":["待審核文章","Articles awaiting review","심사 대기 글","審査待ちの記事"],"通过审核":["通過審核","Approve","승인","承認"],"拒绝投稿":["拒絕投稿","Reject submission","게시 거절","投稿を却下"],"等待审核":["等待審核","Awaiting review","심사 대기","審査待ち"],"已公开发表":["已公開發表","Published publicly","공개 게시됨","公開済み"],"审核未通过":["審核未通過","Review not approved","심사 미승인","審査不承認"]});
Object.assign(data,{"文章发布成功，审核通过之后就对外展示":["文章發佈成功，審核通過後就會對外展示","Article submitted successfully. It will be publicly displayed after approval.","게시글이 제출되었습니다. 심사 승인 후 공개됩니다.","記事の投稿が完了しました。審査承認後に公開されます。"]});
Object.assign(data,{"个人网站链接":["個人網站連結","Personal website URL","개인 웹사이트 링크","個人サイトのURL"],"社交媒体主页链接":["社群媒體首頁連結","Social media profile URL","소셜 미디어 프로필 링크","SNSプロフィールURL"],"个人简介":["個人簡介","About me","자기소개","自己紹介"],"介绍一下自己":["介紹一下自己","Tell others about yourself","자신을 소개해 주세요","自己紹介を入力してください"],"输入新邮箱":["輸入新電郵","Enter new email address","새 이메일 주소 입력","新しいメールアドレスを入力"],"帖子获赞奖励":["貼文獲讚獎勵","Post like reward","게시글 좋아요 보상","投稿へのいいね報酬"],"最新发布 · 政治观点":["最新發布 · 政治觀點","Latest · Political views","최신 게시물 · 정치적 견해","最新・政治的見解"],"密码修改成功。下次登录请使用新密码。":["密碼修改成功。下次登入請使用新密碼。","Password changed successfully. Use your new password next time you sign in.","비밀번호가 변경되었습니다. 다음 로그인부터 새 비밀번호를 사용하세요.","パスワードを変更しました。次回から新しいパスワードでログインしてください。"],"请先完成修改密码安全验证。":["請先完成修改密碼安全驗證。","Complete the security check before changing your password.","비밀번호 변경 전 보안 인증을 완료하세요.","パスワード変更前にセキュリティ認証を完了してください。"],"安全验证未通过，请重新验证。":["安全驗證未通過，請重新驗證。","Security verification failed. Try again.","보안 인증에 실패했습니다. 다시 시도하세요.","セキュリティ認証に失敗しました。再試行してください。"],"修改密码安全验证":["修改密碼安全驗證","Password change security verification","비밀번호 변경 보안 인증","パスワード変更のセキュリティ認証"]});
Object.assign(data,{"这里展示会员正式投稿的文章，与公共论坛帖子分开管理。所有已验证邮箱的会员均可提交文章。提交后立即进入待审核状态，仅作者与审核人员可见；审核通过后自动公开，并通知作者。":["這裡展示會員正式投稿的文章，與公共論壇貼文分開管理。所有已驗證電子郵件的會員均可投稿。提交後進入待審核狀態，僅作者及審核人員可見；通過審核後自動公開並通知作者。","This section displays member-submitted articles separately from forum posts. Any member with a verified email may submit an article. Submissions remain visible only to the author and reviewers until approved, then become public and the author is notified.","이곳에는 회원이 정식 투고한 글을 공개 포럼 게시물과 별도로 표시합니다. 이메일 인증을 완료한 회원은 누구나 투고할 수 있습니다. 심사 승인 전에는 작성자와 심사자만 볼 수 있으며, 승인되면 공개되고 작성자에게 알림이 전송됩니다.","ここでは会員の投稿記事をフォーラムの投稿とは別に管理します。メール認証済みの会員は誰でも投稿でき、承認までは著者と審査担当者のみ閲覧できます。承認後に公開され、著者へ通知されます。"],"共":["共","Total","총","計"],"篇":["篇","articles","편","件"]});
Object.assign(data,{"文章发布成功，已对外公开。":["文章發佈成功，已公開。","Article published and now public.","글이 게시되어 공개되었습니다.","記事を公開しました。"],"文章与评论提交后立即公开；违规内容可举报处理。":["文章與留言提交後立即公開；違規內容可檢舉處理。","Posts and comments appear immediately. Report violations for review.","게시글과 댓글은 즉시 공개됩니다. 위반 콘텐츠는 신고할 수 있습니다.","投稿とコメントはすぐに公開されます。違反内容は通報できます。"],"帖子发布后立即公开，修改无需再次审核。":["貼文發佈後立即公開，修改無須再次審核。","Posts go public immediately; edits need no prior approval.","게시글은 즉시 공개되며 수정 시 재승인이 필요하지 않습니다.","投稿は即時公開され、編集時の再承認は不要です。"],"已验证邮箱的会员可以直接发帖，帖子发布后立即公开。":["已驗證電郵的會員可直接發帖，發佈後立即公開。","Members with verified email can post directly; posts appear immediately.","이메일 인증 회원은 바로 게시할 수 있으며 즉시 공개됩니다.","メール認証済みの会員は投稿でき、すぐに公開されます。"],"文章创作与发布":["文章創作與發佈","Write and publish","글 작성 및 게시","記事の作成と公開"],"发布文章":["發佈文章","Publish article","글 게시","記事を公開"],"文章发布后立即公开；请遵守社区规则。":["文章發佈後立即公開；請遵守社群規則。","Articles go public immediately. Follow community rules.","글은 즉시 공개됩니다. 커뮤니티 규칙을 준수하세요.","記事は即時公開されます。コミュニティルールを守ってください。"],"您可以保存私人草稿，或直接发布公开文章。":["您可儲存私人草稿，或直接發佈公開文章。","Save a private draft or publish an article immediately.","비공개 초안을 저장하거나 글을 바로 게시할 수 있습니다.","非公開の下書きを保存するか、記事をすぐに公開できます。"],"发布后立即公开；涉嫌违规内容可举报并依法处理。":["發佈後立即公開；涉嫌違規內容可檢舉並依法處理。","Published immediately. Report suspected violations for lawful review.","게시 후 즉시 공개됩니다. 위반 의심 콘텐츠는 신고할 수 있습니다.","公開後すぐに表示されます。違反が疑われる内容は通報できます。"],"修改文章":["修改文章","Edit article","글 수정","記事を編集"],"图片已保存到私人区域，当前不会随帖子公开。请勿上传身份证件、住址等敏感信息。":["圖片已存入私人區域，目前不會隨貼文公開。請勿上傳身分證件、住址等敏感資料。","Image stored privately and not shown with the post. Do not upload identity documents or addresses.","이미지는 비공개로 저장되어 게시글에 표시되지 않습니다. 신분증이나 주소를 올리지 마세요.","画像は非公開で保存され、投稿には表示されません。身分証や住所をアップロードしないでください。"]});
Object.assign(data,{"已点赞 · 点击取消":["已按讚 · 點擊取消","Liked · click to unlike","좋아요 누름 · 취소하려면 클릭","いいね済み · クリックして解除"],"人点赞":["人按讚","likes","명이 좋아요","人がいいね"],"举报评论":["舉報評論","Report comment","댓글 신고","コメントを通報"],"全部显示":["全部顯示","Show all","전체 보기","すべて表示"],"会员等级：":["會員等級：","Member level: ","회원 등급: ","会員ランク："]});
Object.assign(data,{"← 网站首页":["← 網站首頁","← Website home","← 웹사이트 홈","← サイトホーム"],"论坛首页":["論壇首頁","Forum home","포럼 홈","フォーラムホーム"],"我的文章":["我的文章","My posts","내 게시글","自分の投稿"],"我的账户":["我的帳戶","My account","내 계정","マイアカウント"],"举报与禁言":["檢舉與禁言","Reports & restrictions","신고 및 제한","通報と制限"],"账号申诉":["帳號申訴","Account appeal","계정 이의신청","アカウント異議申立て"],"公共论坛 · 自由交流":["公共論壇 · 自由交流","Public forum · Open discussion","공개 포럼 · 자유 토론","公開フォーラム · 自由な交流"],"会员发表观点，公开交流讨论。文章与评论提交后立即公开；违规内容可举报处理。":["會員發表觀點，公開交流討論。文章與評論提交後立即公開；違規內容可檢舉處理。","Members share opinions and discuss openly. Posts and comments appear immediately; violations can be reported.","회원은 의견을 나누고 자유롭게 토론할 수 있습니다. 게시글과 댓글은 즉시 공개되며 위반 사항은 신고할 수 있습니다.","会員は意見を投稿し、自由に交流できます。投稿とコメントは即時公開され、違反は通報できます。"],"社区规则":["社群規則","Community rules","커뮤니티 규칙","コミュニティルール"],"侵权投诉与内容处理":["侵權投訴與內容處理","Content complaints","권리 침해 신고 및 콘텐츠 처리","権利侵害の申立てとコンテンツ対応"],"隐私说明":["隱私說明","Privacy policy","개인정보 처리방침","プライバシーポリシー"],"网站建议":["網站建議","Website feedback","사이트 의견","サイトへのご意見"],"账户资料":["帳戶資料","Account details","계정 정보","アカウント情報"],"邮箱、内部账户编号和下方联系方式仅本人及网站管理员可见；公开页面只展示头像、昵称，以及你选择公开的会员ID。":["電子郵件、內部帳戶編號及下方聯絡資料僅本人與管理員可見；公開頁面只顯示頭像、暱稱及你選擇公開的會員ID。","Your email, internal account ID and contact details are visible only to you and site administrators. Public pages show your avatar, nickname and any member ID you choose to share.","이메일, 내부 계정 ID 및 연락처는 본인과 관리자만 볼 수 있습니다. 공개 페이지에는 프로필 사진, 닉네임 및 공개를 선택한 회원 ID만 표시됩니다.","メール、内部アカウントID、連絡先は本人と管理者のみ閲覧できます。公開ページにはアイコン、ニックネーム、公開設定した会員IDのみ表示されます。"],"登录邮箱：":["登入電子郵件：","Login email: ","로그인 이메일: ","ログインメール："],"内部账户编号：":["內部帳戶編號：","Internal account ID: ","내부 계정 ID: ","内部アカウントID："],"会员ID：":["會員ID：","Member ID: ","회원 ID: ","会員ID："],"公开昵称":["公開暱稱","Public nickname","공개 닉네임","公開ニックネーム"],"允许其他用户查看我的会员ID（默认不公开）":["允許其他用戶查看我的會員ID（預設不公開）","Allow others to see my member ID (private by default)","다른 사용자에게 회원 ID 공개 허용(기본 비공개)","他のユーザーに会員IDを公開（初期設定は非公開）"],"私人联系资料（不对外展示）":["私人聯絡資料（不公開）","Private contact details (not public)","비공개 연락처 정보","非公開の連絡先情報"],"个人网站":["個人網站","Personal website","개인 웹사이트","個人サイト"],"社交账号或联系平台":["社群帳號或聯絡平台","Social account or contact platform","소셜 계정 또는 연락 플랫폼","SNSアカウント・連絡先"],"联系电话（选填）":["聯絡電話（選填）","Phone (optional)","전화번호(선택)","電話番号（任意）"],"其他联系或身份备注":["其他聯絡或身分備註","Other contact or identification notes","기타 연락처 또는 식별 메모","その他の連絡先・本人確認メモ"],"仅自己和管理员可见":["僅本人與管理員可見","Visible only to you and admins","본인과 관리자만 볼 수 있음","本人と管理者のみ閲覧可能"],"可填写其他联系渠道或识别方式；不建议填写证件号码":["可填寫其他聯絡管道或識別方式；不建議填寫證件號碼","Add other contact methods; avoid entering ID document numbers","다른 연락 방법을 입력할 수 있지만 신분증 번호는 입력하지 마세요","その他の連絡手段を入力できます。身分証番号は入力しないでください"],"选择或更换头像":["選擇或更換頭像","Choose or change avatar","프로필 사진 선택 또는 변경","アイコンを選択・変更"],"删除头像":["刪除頭像","Remove avatar","프로필 사진 삭제","アイコンを削除"],"头像选择后点击下方「保存个人资料」才会生效。":["選擇頭像後點擊下方「儲存個人資料」才會生效。","After selecting an avatar, click Save profile below to apply it.","프로필 사진을 선택한 후 아래의 프로필 저장을 누르세요.","アイコンを選択したら、下の「プロフィールを保存」を押してください。"],"自动居中裁切为256×256像素，自动适配手机支持的图片格式（WebP/PNG）；不上传原图。":["自動置中裁切為256×256像素，適配手機支援的圖片格式（WebP/PNG）；不會上傳原圖。","Automatically center-cropped to 256×256 pixels and converted to a supported format (WebP/PNG); the original is not uploaded.","256×256픽셀로 자동 중앙 자르기 및 형식 변환(WebP/PNG); 원본은 업로드되지 않습니다.","256×256ピクセルに中央トリミングし、対応形式（WebP/PNG）に変換します。元画像はアップロードされません。"],"保存个人资料（含头像）":["儲存個人資料（含頭像）","Save profile (including avatar)","프로필 저장(사진 포함)","プロフィールを保存（アイコン含む）"],"取消修改":["取消修改","Discard changes","변경 취소","変更を破棄"],"修改密码":["修改密碼","Change password","비밀번호 변경","パスワードを変更"],"仅适用于使用邮箱和密码登录的账户。Google、Facebook 登录密码请在对应平台修改。":["僅適用於以電子郵件與密碼登入的帳戶。Google、Facebook 密碼請至相應平台修改。","Only for email/password accounts. Change Google or Facebook passwords with those providers.","이메일/비밀번호 계정에만 적용됩니다. Google/Facebook 비밀번호는 해당 서비스에서 변경하세요.","メールとパスワードでログインするアカウントのみ対象です。Google/Facebookのパスワードは各サービスで変更してください。"],"注销账号":["註銷帳號","Close account","계정 폐쇄","アカウントを閉鎖"],"申请注销账号":["申請註銷帳號","Request account closure","계정 폐쇄 신청","アカウント閉鎖を申請"],"申请注销需要邮箱验证码。确认后立即停用论坛操作权限；文章和评论保留。7天内可撤销，逾期将最终停用并清除个人联系资料。底层登录身份不会在此流程中自动删除。":["申請註銷須使用電子郵件驗證碼。確認後立即停用論壇操作權限；文章及評論保留。7天內可撤銷，逾期將停用並清除個人聯絡資料。登入身分不會自動刪除。","Account closure requires an email code. Forum actions are disabled immediately after confirmation; posts and comments remain. You may cancel within 7 days. Afterward, contact details are removed. The underlying login identity is not automatically deleted.","계정 폐쇄에는 이메일 인증 코드가 필요합니다. 확인 즉시 포럼 이용 권한이 중지되지만 게시글과 댓글은 유지됩니다. 7일 이내 취소할 수 있으며 이후 연락처가 삭제됩니다. 로그인 계정 자체는 자동 삭제되지 않습니다.","閉鎖申請にはメール認証コードが必要です。確認後すぐにフォーラム操作が停止しますが、投稿とコメントは残ります。7日以内は撤回可能で、期限後は連絡先が削除されます。ログイン情報自体は自動削除されません。"],"当前账户正常使用。":["目前帳戶正常使用。","Account is active.","계정이 정상적으로 활성화되어 있습니다.","アカウントは有効です。"],"新会员首次修改ID不受六个月等待限制。":["新會員首次修改ID不受六個月等待限制。","New members get one initial ID change without the six-month wait.","신규 회원은 최초 1회 회원 ID를 6개월 대기 없이 변경할 수 있습니다.","新規会員は初回のID変更に6か月の待機期間がありません。"],"新会员首次修改免费，不计入六个月等待期。":["新會員首次修改免費，不計入六個月等待期。","Your first ID change is free and does not count toward the six-month waiting period.","첫 회원 ID 변경은 무료이며 6개월 대기 기간에 포함되지 않습니다.","初回のID変更は無料で、6か月の待機期間に含まれません。"],"取消":["取消","Cancel","취소","キャンセル"],"修改":["修改","Edit","수정","変更"]});
Object.assign(data,{"管理员：上传或替换这篇文章的宣传图片":["管理員：上傳或替換這篇文章的宣傳圖片","Admin: upload or replace this article's cover image","관리자: 이 글의 표지 이미지 업로드 또는 교체","管理者：この記事のカバー画像をアップロード・変更"],"注册 / 登录后评论":["註冊／登入後評論","Sign up or sign in to comment","가입 또는 로그인 후 댓글 작성","登録・ログインしてコメント"],"上传新头像（JPG、PNG、WebP、HEIC、HEIF，自动压缩）":["上傳新頭像（JPG、PNG、WebP、HEIC、HEIF，自動壓縮）","Upload avatar (JPG, PNG, WebP, HEIC, HEIF; auto-compressed)","프로필 사진 업로드(JPG, PNG, WebP, HEIC, HEIF; 자동 압축)","アイコンをアップロード（JPG、PNG、WebP、HEIC、HEIF、自動圧縮）"],"当前密码验证":["目前密碼驗證","Verify current password","현재 비밀번호 확인","現在のパスワードを確認"],"为保护账户安全，修改邮箱前必须验证当前密码。提交后请按邮件提示确认新邮箱；原邮箱验证方式正在完善。":["為保護帳戶安全，變更電子郵件前須驗證目前密碼。提交後請依郵件指示確認新信箱；原信箱驗證方式仍在完善中。","For security, verify your current password before changing email. Follow the confirmation email. Verification through your old email is still being developed.","보안을 위해 이메일 변경 전에 현재 비밀번호를 확인하세요. 확인 이메일의 안내를 따르세요. 기존 이메일 인증 방식은 개발 중입니다.","安全のため、メール変更前に現在のパスワードを確認してください。確認メールの案内に従ってください。旧メールによる認証は開発中です。"],"修改成功后将退出登录，之后请使用新密码登录。":["修改成功後將登出，之後請使用新密碼登入。","You will be signed out after changing your password. Sign in with your new password.","비밀번호 변경 후 로그아웃됩니다. 새 비밀번호로 로그인하세요.","変更後はログアウトします。新しいパスワードでログインしてください。"],"确认后立即无法发帖、评论、编辑或删除自己的历史内容。历史文章和评论保留。7天内可登录并撤销，过期不能自行恢复。":["確認後將立即無法發文、評論、編輯或刪除舊內容。歷史文章與評論保留。7天內可登入撤銷，逾期無法自行恢復。","Once confirmed, posting, commenting, editing and deleting are disabled immediately. Existing posts and comments remain. You can reverse this within 7 days; afterward you cannot restore access yourself.","확인 즉시 게시·댓글·수정·삭제가 중단됩니다. 기존 글과 댓글은 유지됩니다. 7일 이내 취소할 수 있으며 이후에는 직접 복구할 수 없습니다.","確定後は投稿・コメント・編集・削除がすぐにできなくなります。過去の投稿とコメントは残ります。7日以内は撤回できますが、以降は自分で復旧できません。"],"请先确认，再向注册邮箱发送验证码。":["請先確認，再向註冊信箱發送驗證碼。","Confirm first, then send a verification code to your registered email.","먼저 확인한 후 등록된 이메일로 인증 코드를 보내세요.","まず確認し、登録メールに認証コードを送信してください。"],"插入站外视频":["插入站外影片","Insert external video","외부 동영상 삽입","外部動画を挿入"],"图片最大5MB；视频仅支持站外链接，不上传视频文件":["圖片最大5MB；影片僅支援外部連結，不上傳影片檔案","Images up to 5 MB; videos must use external links (no video file uploads)","이미지 최대 5MB; 동영상은 외부 링크만 지원합니다","画像は最大5MB。動画は外部リンクのみ対応（動画ファイルのアップロード不可）"],"提交文章":["提交文章","Submit article","글 제출","記事を送信"],"♡ 点赞":["♡ 按讚","♡ Like","♡ 좋아요","♡ いいね"],"0 人点赞":["0 人按讚","0 likes","0명이 좋아요","0人がいいね"],"返回":["返回","Back","뒤로","戻る"],"发送私信":["發送私訊","Send private message","쪽지 보내기","ダイレクトメッセージを送信"],"与该会员的私信记录":["與該會員的私訊記錄","Private messages with this member","이 회원과 주고받은 쪽지","この会員とのメッセージ履歴"],"该会员公开发表的帖子":["該會員公開發表的貼文","This member's public posts","이 회원의 공개 게시글","この会員の公開投稿"],"⚙ 站长管理":["⚙ 站長管理","⚙ Site administration","⚙ 사이트 관리","⚙ サイト管理"],"会员文章审核":["會員文章審核","Member article review","회원 글 검토","会員記事の審査"],"论坛文章审核":["論壇文章審核","Forum post review","포럼 게시글 검토","フォーラム投稿の審査"],"这里展示会员公开发表的文章。会员提交后直接公开，违规内容依照社区规则处理。":["這裡展示會員公開發表的文章。會員提交後立即公開，違規內容依社群規則處理。","Public articles written by members appear here. Submissions are published immediately; violations are handled under community rules.","회원이 공개한 글을 표시합니다. 제출 즉시 공개되며 위반 콘텐츠는 커뮤니티 규칙에 따라 처리합니다.","会員が公開した記事を表示します。投稿は即時公開され、違反はコミュニティルールに従って対応します。"],"文章与论坛帖子均实行发布即公开；发现违规内容可举报，由管理员依法处理。":["文章與論壇貼文均為發布即公開；發現違規內容可檢舉，由管理員依法處理。","Articles and forum posts are published immediately. Report violations for administrator review.","기사와 포럼 게시글은 즉시 공개됩니다. 위반 사항은 관리자에게 신고할 수 있습니다.","記事とフォーラム投稿は即時公開されます。違反は管理者に通報できます。"],"这里展示会员正式投稿的文章，与公共论坛帖子分开管理。所有已验证邮箱的会员均可提交文章。发布后立即公开；涉嫌违规内容可举报并依法处理。":["此處展示會員正式投稿的文章，與公共論壇貼文分開管理。已驗證電子郵件的會員皆可投稿。發布後立即公開；違規內容可檢舉處理。","Formal member articles appear here, separate from forum posts. Members with verified email addresses can submit articles, which appear immediately. Suspected violations may be reported.","회원 정식 기사는 포럼 게시글과 별도로 표시됩니다. 이메일 인증 회원은 기사를 제출할 수 있으며 즉시 공개됩니다. 위반 사항은 신고할 수 있습니다.","会員の正式な記事をフォーラム投稿とは別に掲載します。メール認証済み会員は投稿でき、記事は即時公開されます。違反は通報できます。"]});
Object.assign(data,{"登录成功！欢迎回来，您现在可以查看和修改个人资料。":["登入成功！歡迎回來，您現在可以查看及修改個人資料。","Signed in successfully! Welcome back. You can now view and edit your profile.","로그인에 성공했습니다! 다시 오신 것을 환영합니다. 이제 프로필을 확인하고 수정할 수 있습니다.","ログインに成功しました！おかえりなさい。プロフィールの確認と編集ができます。"]});
Object.assign(data,{"暂无评论":["暫無評論","No comments yet","아직 댓글이 없습니다","まだコメントはありません"],"发表评论（最多1500字；不足30字不计积分）":["發表評論（最多1500字；不足30字不計積分）","Write a comment (max 1,500 characters; under 30 characters earns no points)","댓글 작성 (최대 1,500자, 30자 미만은 포인트 미지급)","コメントを入力（最大1,500文字、30文字未満はポイント対象外）"]});
Object.assign(data,{
  "重试人机验证": [
    "重試人機驗證",
    "Retry verification",
    "인증 다시 시도",
    "認証を再試行"
  ],
  "验证已重置，请重新完成人机验证。": [
    "驗證已重設，請重新完成人機驗證。",
    "Verification was reset. Please complete it again.",
    "인증이 초기화되었습니다. 다시 인증해 주세요.",
    "認証をリセットしました。もう一度認証してください。"
  ],
  "登录服务尚未加载，请刷新页面后重试。": [
    "登入服務尚未載入，請重新整理頁面後再試。",
    "Sign-in is unavailable. Refresh the page and try again.",
    "로그인 서비스를 불러오지 못했습니다. 페이지를 새로고침하고 다시 시도해 주세요.",
    "ログインサービスを読み込めませんでした。ページを再読み込みしてお試しください。"
  ],
  "请输入有效的邮箱地址和密码。": [
    "請輸入有效的電子郵件地址及密碼。",
    "Enter a valid email address and password.",
    "유효한 이메일 주소와 비밀번호를 입력해 주세요.",
    "有効なメールアドレスとパスワードを入力してください。"
  ],
  "注册密码至少10位，必须同时包含大写英文字母、小写英文字母和数字。": [
    "註冊密碼至少 10 個字元，須包含英文大寫字母、小寫字母及數字。",
    "Use at least 10 characters, including uppercase and lowercase letters and a number.",
    "대문자, 소문자, 숫자를 포함해 10자 이상 입력해 주세요.",
    "英大文字、英小文字、数字を含む10文字以上のパスワードを入力してください。"
  ],
  "人机验证尚未加载。若验证框一直未出现，请点击下方按钮重新加载页面。": [
    "人機驗證尚未載入。若驗證框一直未出現，請按下方按鈕重新載入頁面。",
    "Verification has not loaded. If the box does not appear, use the button below to reload the page.",
    "인증 도구를 아직 불러오지 못했습니다. 인증 상자가 나타나지 않으면 아래 버튼으로 페이지를 새로고침하세요.",
    "認証が読み込まれていません。認証欄が表示されない場合は、下のボタンでページを再読み込みしてください。"
  ],
  "正在注册……": [
    "正在註冊……",
    "Creating your account…",
    "가입 처리 중…",
    "アカウントを作成しています…"
  ],
  "正在登录……": [
    "正在登入……",
    "Signing in…",
    "로그인 중…",
    "ログインしています…"
  ],
  "请查收邮箱中的验证邮件。": [
    "請查收電子郵件中的驗證信。",
    "Check your inbox for the verification email.",
    "받은편지함에서 인증 이메일을 확인해 주세요.",
    "受信トレイで認証メールを確認してください。"
  ],
  "登录成功。": [
    "登入成功。",
    "Signed in successfully.",
    "로그인했습니다.",
    "ログインしました。"
  ],
  "邮箱或密码不正确，请检查后重试。": [
    "電子郵件地址或密碼不正確，請確認後再試。",
    "Incorrect email or password. Check your details and try again.",
    "이메일 또는 비밀번호가 올바르지 않습니다. 확인 후 다시 시도해 주세요.",
    "メールアドレスまたはパスワードが正しくありません。確認して再度お試しください。"
  ],
  "登录失败": [
    "登入失敗",
    "Sign-in failed",
    "로그인 실패",
    "ログインに失敗しました"
  ],
  "注册失败": [
    "註冊失敗",
    "Registration failed",
    "가입 실패",
    "登録に失敗しました"
  ],
  "登录失败，请稍后重试。": [
    "登入失敗，請稍後再試。",
    "Sign-in failed. Try again later.",
    "로그인에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    "ログインに失敗しました。しばらくしてからお試しください。"
  ],
  "注册失败，请稍后重试。": [
    "註冊失敗，請稍後再試。",
    "Registration failed. Try again later.",
    "가입에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    "登録に失敗しました。しばらくしてからお試しください。"
  ],
  "登录失败：": [
    "登入失敗：",
    "Sign-in failed: ",
    "로그인 실패: ",
    "ログインに失敗しました："
  ],
  "注册失败：": [
    "註冊失敗：",
    "Registration failed: ",
    "가입 실패: ",
    "登録に失敗しました："
  ],
  "选择网站语言": [
    "選擇網站語言",
    "Choose site language",
    "사이트 언어 선택",
    "サイトの言語を選択"
  ],
  "机器人验证": [
    "機器人驗證",
    "Human verification",
    "자동 입력 방지 인증",
    "本人確認"
  ],
  "网站内容": [
    "網站內容",
    "Site content",
    "사이트 콘텐츠",
    "サイトのコンテンツ"
  ],
  "讲道录音播放器": [
    "講道錄音播放器",
    "Sermon audio player",
    "설교 녹음 플레이어",
    "説教音声プレーヤー"
  ],
  "请输入邮箱": [
    "請輸入電子郵件地址",
    "Enter your email address",
    "이메일 주소를 입력하세요",
    "メールアドレスを入力"
  ],
  "请输入密码": [
    "請輸入密碼",
    "Enter your password",
    "비밀번호를 입력하세요",
    "パスワードを入力"
  ],
  "请输入当前密码以验证身份": [
    "請輸入目前密碼以驗證身分",
    "Enter your current password to verify your identity",
    "본인 확인을 위해 현재 비밀번호를 입력하세요",
    "本人確認のため現在のパスワードを入力"
  ],
  "修改邮箱安全验证": [
    "變更電子郵件安全驗證",
    "Security verification for changing email",
    "이메일 변경 보안 인증",
    "メールアドレス変更のセキュリティ確認"
  ],
  "输入新密码": [
    "輸入新密碼",
    "Enter a new password",
    "새 비밀번호 입력",
    "新しいパスワードを入力"
  ],
  "头像裁切预览": [
    "頭像裁切預覽",
    "Profile photo crop preview",
    "프로필 사진 자르기 미리보기",
    "プロフィール画像の切り抜きプレビュー"
  ],
  "设置公开昵称": [
    "設定公開暱稱",
    "Set a public display name",
    "공개 닉네임 설정",
    "公開表示名を設定"
  ],
  "说明调整原因": [
    "說明調整原因",
    "Explain the reason for the change",
    "변경 사유를 입력하세요",
    "変更理由を入力"
  ],
  "网站建议：提出网站功能和使用体验改进意见": [
    "網站建議：提出網站功能及使用體驗改進意見",
    "Site feedback: suggest features and usability improvements",
    "사이트 제안: 기능 및 사용성 개선 의견 보내기",
    "サイトへの提案：機能や使いやすさの改善案を送る"
  ],
  "双核心栏目": [
    "兩大主要欄目",
    "Main sections",
    "주요 섹션",
    "主なセクション"
  ],
  "提交申诉": [
    "提交申訴",
    "Submit appeal",
    "이의 신청 제출",
    "異議申し立てを送信"
  ],
  "申诉理由": [
    "申訴理由",
    "Reason for appeal",
    "이의 신청 사유",
    "異議申し立ての理由"
  ],
  "我的申诉记录": [
    "我的申訴紀錄",
    "My appeal history",
    "내 이의 신청 기록",
    "自分の異議申し立て履歴"
  ],
  "如果账号被误禁言或限制，可以说明情况。申诉仅管理员可查看，审核通常需要人工处理。": [
    "若帳號遭誤禁言或限制，可在此說明。申訴僅管理員可見，通常需人工審核。",
    "If your account was muted or restricted by mistake, explain what happened. Only administrators can view appeals, which are usually reviewed manually.",
    "계정이 잘못 제한되었거나 발언이 금지되었다면 상황을 설명해 주세요. 이의 신청은 관리자만 볼 수 있으며 일반적으로 수동 검토합니다.",
    "誤って発言禁止や利用制限を受けた場合は、経緯を説明してください。申し立ては管理者のみ閲覧でき、通常は手動で審査されます。"
  ],
  "请说明账号受到的限制、相关事实和申诉理由（10—2000字）": [
    "請說明帳號所受限制、相關事實及申訴理由（10–2,000 字）",
    "Describe the account restriction, relevant facts, and grounds for appeal (10–2,000 characters)",
    "계정 제한, 관련 사실, 이의 신청 사유를 설명해 주세요(10~2,000자)",
    "アカウントの制限、関連する事実、異議申し立ての理由を記入（10～2,000文字）"
  ],
  "举报与账号管理": [
    "檢舉與帳號管理",
    "Reports and account management",
    "신고 및 계정 관리",
    "通報とアカウント管理"
  ],
  "仅管理员可见。依据公开规则处理刷屏、骚扰、威胁及隐私侵害；不因正常不同意见处罚。": [
    "僅管理員可見。依公開規則處理洗版、騷擾、威脅及侵犯隱私，不會因正常的意見分歧而處罰。",
    "Administrators only. Apply the published rules to spam, harassment, threats, and privacy violations. Ordinary disagreement is allowed.",
    "관리자만 볼 수 있습니다. 공개 규칙에 따라 도배, 괴롭힘, 위협, 개인정보 침해를 처리합니다. 일반적인 의견 차이는 제재하지 않습니다.",
    "管理者のみ閲覧できます。公開ルールに従い、連投、嫌がらせ、脅迫、プライバシー侵害に対応します。通常の意見の相違は処分の対象外です。"
  ],
  "数据备份": [
    "資料備份",
    "Data backup",
    "데이터 백업",
    "データのバックアップ"
  ],
  "导出论坛数据": [
    "匯出論壇資料",
    "Export forum data",
    "포럼 데이터 내보내기",
    "フォーラムデータをエクスポート"
  ],
  "待处理图片审核": [
    "待處理圖片審核",
    "Images awaiting review",
    "검토 대기 이미지",
    "審査待ちの画像"
  ],
  "刷新图片审核": [
    "重新整理圖片審核",
    "Refresh image review queue",
    "이미지 검토 목록 새로고침",
    "画像審査一覧を更新"
  ],
  "待处理举报": [
    "待處理檢舉",
    "Pending reports",
    "처리 대기 신고",
    "対応待ちの通報"
  ],
  "待处理申诉": [
    "待處理申訴",
    "Pending appeals",
    "처리 대기 이의 신청",
    "対応待ちの異議申し立て"
  ],
  "2—30字": [
    "2–30 字",
    "2–30 characters",
    "2~30자",
    "2～30文字"
  ],
  "5—30字": [
    "5–30 字",
    "5–30 characters",
    "5~30자",
    "5～30文字"
  ],
  "20—20000字；请勿公开他人隐私": [
    "20–20,000 字；請勿公開他人隱私",
    "20–20,000 characters. Do not share others’ private information.",
    "20~20,000자. 타인의 개인정보를 공개하지 마세요.",
    "20～20,000文字。他人の個人情報を公開しないでください。"
  ],
  "选择表情": [
    "選擇表情符號",
    "Choose an emoji",
    "이모지 선택",
    "絵文字を選択"
  ],
  "输入私信，最多1500字": [
    "輸入私訊，最多 1,500 字",
    "Enter a private message (up to 1,500 characters)",
    "쪽지 입력(최대 1,500자)",
    "メッセージを入力（最大1,500文字）"
  ],
  "暂无举报": [
    "暫無檢舉",
    "No reports",
    "신고가 없습니다",
    "通報はありません"
  ],
  "暂无申诉": [
    "暫無申訴",
    "No appeals",
    "이의 신청이 없습니다",
    "異議申し立てはありません"
  ],
  "暂无待审核图片": [
    "暫無待審核圖片",
    "No images awaiting review",
    "검토 대기 이미지가 없습니다",
    "審査待ちの画像はありません"
  ],
  "请登录后提交账号申诉": [
    "請登入後提交帳號申訴",
    "Sign in to submit an account appeal.",
    "로그인 후 이의 신청을 제출해 주세요.",
    "アカウントの異議申し立てを送信するにはログインしてください。"
  ],
  "请输入10—2000字": [
    "請輸入 10–2,000 字",
    "Enter 10–2,000 characters.",
    "10~2,000자를 입력해 주세요.",
    "10～2,000文字で入力してください。"
  ],
  "暂无公开文章": [
    "暫無公開文章",
    "No public posts yet",
    "아직 공개 글이 없습니다",
    "公開記事はまだありません"
  ],
  "文章不存在、未公开或无法访问": [
    "文章不存在、未公開或無法存取",
    "This post is missing, private, or inaccessible.",
    "글이 없거나 비공개이거나 접근할 수 없습니다.",
    "記事が存在しないか、非公開、またはアクセスできません。"
  ],
  "尚未投稿": [
    "尚未投稿",
    "No submissions yet",
    "아직 제출한 글이 없습니다",
    "投稿はまだありません"
  ],
  "请先登录并验证邮箱": [
    "請先登入並驗證電子郵件",
    "Sign in and verify your email first.",
    "먼저 로그인하고 이메일을 인증해 주세요.",
    "先にログインし、メールアドレスを認証してください。"
  ],
  "点赞暂不可用": [
    "按讚功能暫時無法使用",
    "Likes are temporarily unavailable.",
    "좋아요 기능을 일시적으로 사용할 수 없습니다.",
    "いいね機能は一時的に利用できません。"
  ],
  "加载中……": [
    "載入中……",
    "Loading…",
    "불러오는 중…",
    "読み込み中…"
  ],
  "正在提交……": [
    "正在提交……",
    "Submitting…",
    "제출 중…",
    "送信中…"
  ],
  "评论加载失败": [
    "留言載入失敗",
    "Could not load comments.",
    "댓글을 불러오지 못했습니다.",
    "コメントを読み込めませんでした。"
  ],
  "听众评论": [
    "聽眾留言",
    "Listener comments",
    "청취자 댓글",
    "リスナーのコメント"
  ],
  "正在连接本站音频服务器…": [
    "正在連線至本站音訊伺服器…",
    "Connecting to the audio server…",
    "오디오 서버에 연결하는 중…",
    "音声サーバーに接続しています…"
  ],
  "正在加载录音…": [
    "正在載入錄音…",
    "Loading recording…",
    "녹음을 불러오는 중…",
    "録音を読み込んでいます…"
  ],
  "录音暂不可播放，请联系站长检查媒体文件。": [
    "錄音暫時無法播放，請聯絡站長檢查媒體檔案。",
    "This recording is unavailable. Ask the site administrator to check the media file.",
    "녹음을 재생할 수 없습니다. 사이트 관리자에게 미디어 파일 확인을 요청해 주세요.",
    "この録音は再生できません。サイト管理者にメディアファイルの確認を依頼してください。"
  ],
  "▶ 点击播放音频": [
    "▶ 點擊播放音訊",
    "▶ Play audio",
    "▶ 오디오 재생",
    "▶ 音声を再生"
  ],
  "⏸ 暂停播放": [
    "⏸ 暫停播放",
    "⏸ Pause",
    "⏸ 일시정지",
    "⏸ 一時停止"
  ],
  "▶ 继续播放": [
    "▶ 繼續播放",
    "▶ Resume playback",
    "▶ 재생 계속",
    "▶ 再生を続ける"
  ],
  "打开原音频链接": [
    "開啟原音訊連結",
    "Open original audio link",
    "원본 오디오 링크 열기",
    "元の音声リンクを開く"
  ],
  "播放失败，请检查媒体链接": [
    "播放失敗，請檢查媒體連結",
    "Playback failed. Check the media link.",
    "재생에 실패했습니다. 미디어 링크를 확인해 주세요.",
    "再生に失敗しました。メディアリンクを確認してください。"
  ],
  "✓ 已复制": [
    "✓ 已複製",
    "✓ Copied",
    "✓ 복사됨",
    "✓ コピーしました"
  ],
  "请复制链接：": [
    "請複製連結：",
    "Copy this link: ",
    "링크를 복사해 주세요: ",
    "リンクをコピーしてください："
  ],
  "文章链接已复制": [
    "文章連結已複製",
    "Article link copied.",
    "글 링크를 복사했습니다.",
    "記事のリンクをコピーしました。"
  ],
  "点赞失败：": [
    "按讚失敗：",
    "Could not like: ",
    "좋아요 실패: ",
    "いいねに失敗しました："
  ],
  "评论加载失败：": [
    "留言載入失敗：",
    "Could not load comments: ",
    "댓글을 불러오지 못했습니다: ",
    "コメントを読み込めませんでした："
  ],
  "读取失败：": [
    "讀取失敗：",
    "Could not load: ",
    "불러오지 못했습니다: ",
    "読み込めませんでした："
  ],
  "发表失败：": [
    "發表失敗：",
    "Could not publish: ",
    "게시 실패: ",
    "投稿に失敗しました："
  ],
  "导出失败：": [
    "匯出失敗：",
    "Export failed: ",
    "내보내기 실패: ",
    "エクスポートに失敗しました："
  ],
  "图片上传失败：": [
    "圖片上傳失敗：",
    "Image upload failed: ",
    "이미지 업로드 실패: ",
    "画像のアップロードに失敗しました："
  ],
  "修改失败：": [
    "修改失敗：",
    "Update failed: ",
    "변경 실패: ",
    "変更に失敗しました："
  ],
  "审核失败：": [
    "審核失敗：",
    "Review failed: ",
    "검토 처리 실패: ",
    "審査の処理に失敗しました："
  ]
});
Object.assign(data,{
  "适用于论坛帖子、评论、昵称和图片。我们鼓励有根据的讨论、新闻分享、个人经历及不同政治、社会、宗教观点。": [
    "適用於論壇貼文、留言、暱稱及圖片。我們鼓勵有根據的討論、新聞分享、個人經歷及不同的政治、社會與宗教觀點。",
    "These rules apply to forum posts, comments, nicknames, and images. We welcome evidence-based discussion, news sharing, personal experiences, and diverse political, social, and religious views.",
    "포럼 글, 댓글, 닉네임, 이미지에 적용됩니다. 근거 있는 토론, 뉴스 공유, 개인 경험, 다양한 정치·사회·종교적 견해를 환영합니다.",
    "フォーラムの投稿、コメント、ニックネーム、画像に適用されます。根拠のある議論、ニュースの共有、個人の経験、多様な政治的・社会的・宗教的意見を歓迎します。"
  ],
  "允许批评政府、公共机构及公众人物，允许和平的政治观点、宗教表达、反驳和争论。观点不同本身不构成处罚理由。对于未经证实的信息，请标明来源及不确定性。": [
    "允許批評政府、公共機構及公眾人物，以及和平表達政治或宗教觀點、反駁和辯論。意見分歧本身不構成處罰理由。未經證實的資訊請註明來源及不確定之處。",
    "Criticism of governments, public institutions, and public figures is allowed, as are peaceful political and religious expression, rebuttal, and debate. Disagreement alone is not grounds for sanctions. Identify the sources and uncertainty of unverified information.",
    "정부, 공공기관, 공인을 비판하거나 정치·종교적 견해를 평화적으로 표현하고 반론과 토론을 하는 것은 허용됩니다. 의견 차이만으로 제재하지 않습니다. 확인되지 않은 정보는 출처와 불확실한 부분을 밝혀 주세요.",
    "政府、公共機関、公人への批判、平和的な政治的・宗教的表現、反論、議論は認められます。意見の相違だけでは処分の理由になりません。未確認情報には出典と不確かな点を明記してください。"
  ],
  "人身威胁、鼓励针对具体个人实施暴力、持续定向骚扰": [
    "人身威脅、鼓吹對特定個人施暴、持續針對性騷擾",
    "Threats, encouragement of violence against a specific person, and persistent targeted harassment",
    "신체적 위협, 특정 개인에 대한 폭력 조장, 지속적인 표적 괴롭힘",
    "身体への脅迫、特定個人への暴力の助長、継続的な嫌がらせ"
  ],
  "公开他人的住址、电话、私人邮箱、身份证件或其他未经许可的敏感信息": [
    "未經許可公開他人的住址、電話、私人電子郵件地址、身分證件或其他敏感資訊",
    "Sharing another person’s address, phone number, private email, identity documents, or other sensitive information without permission",
    "타인의 주소, 전화번호, 개인 이메일, 신분증 또는 기타 민감한 정보를 허락 없이 공개하는 행위",
    "他人の住所、電話番号、私用メールアドレス、身分証明書、その他の機微情報を無断で公開する行為"
  ],
  "诈骗、恶意软件、钓鱼链接、垃圾广告、机器刷屏、重复发帖和操纵互动": [
    "詐騙、惡意軟體、網路釣魚連結、垃圾廣告、自動洗版、重複發文及操弄互動",
    "Scams, malware, phishing links, spam ads, automated flooding, duplicate posts, and engagement manipulation",
    "사기, 악성 소프트웨어, 피싱 링크, 스팸 광고, 자동 도배, 중복 게시, 반응 조작",
    "詐欺、マルウェア、フィッシングリンク、スパム広告、自動連投、重複投稿、反応の操作"
  ],
  "非法性剥削内容、严重侵权转载及其他违反托管平台政策的内容": [
    "非法性剝削內容、嚴重侵權轉載及其他違反託管平台政策的內容",
    "Illegal sexual exploitation material, serious copyright infringement, and other content that violates the hosting platform’s policies",
    "불법 성착취물, 중대한 저작권 침해, 그 밖에 호스팅 플랫폼 정책을 위반하는 콘텐츠",
    "違法な性的搾取コンテンツ、重大な著作権侵害、その他のホスティングプラットフォームのポリシーに違反するコンテンツ"
  ],
  "冒充他人或故意捏造证据以伤害他人": [
    "冒充他人或蓄意偽造證據以傷害他人",
    "Impersonating someone or deliberately fabricating evidence to harm them",
    "타인을 사칭하거나 타인에게 피해를 주려고 고의로 증거를 조작하는 행위",
    "他人になりすましたり、他人に害を与える目的で証拠を捏造したりする行為"
  ],
  "需使用已验证邮箱注册。新会员前3篇文章需要人工审核。普通账号每小时最多发2篇、24小时最多5篇；新会员每小时最多5条论坛评论，符合条件的老会员最多20条；两条评论间隔至少30秒。相同内容重复发布会被拦截。": [
    "註冊須使用已驗證的電子郵件地址。新會員的前 3 篇文章須人工審核。一般帳號每小時最多發表 2 篇、每 24 小時最多 5 篇；新會員每小時最多發表 5 則論壇留言，符合條件的資深會員最多 20 則。每則留言至少間隔 30 秒。系統會攔截重複內容。",
    "Registration requires a verified email address. A new member’s first three articles are reviewed manually. Regular accounts may publish up to two articles per hour and five per 24 hours. New members may post up to five forum comments per hour, and eligible established members up to 20. Comments must be at least 30 seconds apart. Duplicate content is blocked.",
    "가입하려면 인증된 이메일 주소가 필요합니다. 신규 회원의 첫 세 글은 수동 검토를 거칩니다. 일반 계정은 시간당 2개, 24시간당 5개까지 글을 올릴 수 있습니다. 포럼 댓글은 신규 회원은 시간당 최대 5개, 자격을 갖춘 기존 회원은 최대 20개까지 작성할 수 있습니다. 댓글 간격은 최소 30초이며, 동일한 내용의 중복 게시를 차단합니다.",
    "登録には認証済みのメールアドレスが必要です。新規会員の最初の3件の記事は手動審査の対象です。一般アカウントは1時間に2件、24時間に5件まで投稿できます。フォーラムのコメントは、新規会員は1時間に5件、条件を満たす既存会員は20件までです。コメントには30秒以上の間隔が必要で、同じ内容の再投稿はブロックされます。"
  ],
  "登录会员可以举报文章或评论。管理员根据内容和行为采取删除违规内容、提醒、禁言24小时、7天、30天或暂停账号等措施。严重威胁和诈骗可直接处理。举报不代表内容自动违法，管理员需核实。": [
    "已登入會員可以檢舉文章或留言。管理員可依內容及行為移除違規內容、發出提醒、禁言 24 小時、7 天或 30 天，或暫停帳號。嚴重威脅及詐騙可立即處理。檢舉不代表內容自動違法，仍須由管理員查證。",
    "Signed-in members can report articles and comments. Depending on the content and conduct, administrators may remove violating content, issue a reminder, mute an account for 24 hours, 7 days, or 30 days, or suspend an account. Serious threats and scams may be addressed immediately. A report is not a finding of illegality and must be verified.",
    "로그인한 회원은 글과 댓글을 신고할 수 있습니다. 관리자는 내용과 행위에 따라 위반 콘텐츠 삭제, 주의, 24시간·7일·30일 발언 제한 또는 계정 정지를 적용할 수 있습니다. 심각한 위협이나 사기는 즉시 처리할 수 있습니다. 신고만으로 불법으로 판단하지 않으며 관리자가 사실을 확인합니다.",
    "ログインした会員は記事やコメントを通報できます。管理者は内容や行為に応じて、違反コンテンツの削除、注意、24時間・7日間・30日間の発言制限、アカウントの停止を行うことがあります。重大な脅迫や詐欺には直ちに対応でき、通報だけで違法と確定することはなく、管理者が確認します。"
  ],
  "会员可在": [
    "會員可透過",
    "Members may use",
    "회원이 이용할 수 있는 곳:",
    "会員向け窓口："
  ],
  "提交说明，管理员审核并可撤销限制。发现错误或需要更正文章，可通过": [
    "提交說明，管理員審核後可撤銷限制。發現錯誤或需要更正文章時，可透過",
    "to explain what happened. Administrators may lift restrictions after review. If you spot an error or need an article corrected, use",
    "사유를 제출하면 관리자가 검토한 뒤 제한을 해제할 수 있습니다. 오류 신고 또는 기사 수정 요청:",
    "事情を説明すると、管理者が審査し制限を解除する場合があります。誤りや記事の訂正に関する連絡先："
  ],
  "反馈。请勿在反馈中公开不必要的私人资料。": [
    "提供意見。請勿在回饋中公開不必要的私人資料。",
    "to send feedback. Do not include unnecessary personal information.",
    "의견을 보낼 때 불필요한 개인정보를 공개하지 마세요.",
    "意見を送る際は、不要な個人情報を公開しないでください。"
  ],
  "规则会随网站运营调整，重大变更应在网站公布。最后更新：2026年11月17日。": [
    "規則會隨網站營運調整，重大變更應於網站公布。最後更新：2026 年 11 月 17 日。",
    "These rules may change as the site evolves. Significant changes should be announced on the site. Last updated November 17, 2026.",
    "사이트 운영에 따라 규칙이 변경될 수 있습니다. 주요 변경 사항은 사이트에 공지합니다. 최종 업데이트: 2026년 11월 17일.",
    "サイトの運営に応じてルールが変更される場合があります。重要な変更はサイトで告知します。最終更新：2026年11月17日。"
  ],
  "注册登录使用 Supabase Auth。注册时提交的邮箱用于登录、验证和账号管理，不在论坛页面公开显示。你选择的公开昵称、发表的文章、评论和主动上传的图片可能对所有访客可见。": [
    "註冊及登入使用 Supabase Auth。註冊時提交的電子郵件地址用於登入、驗證及帳號管理，不會在論壇公開顯示。你選擇的公開暱稱、發表的文章與留言，以及主動上傳的圖片，可能對所有訪客可見。",
    "Registration and sign-in use Supabase Auth. The email address submitted at registration is used for sign-in, verification, and account management and is not shown publicly in the forum. Your public nickname, published articles and comments, and images you choose to upload may be visible to all visitors.",
    "가입 및 로그인에는 Supabase Auth를 사용합니다. 가입 이메일은 로그인, 인증, 계정 관리에 쓰이며 포럼에 공개되지 않습니다. 공개 닉네임, 게시한 글과 댓글, 직접 업로드한 이미지는 모든 방문자에게 표시될 수 있습니다.",
    "登録とログインには Supabase Auth を使用します。登録したメールアドレスはログイン、認証、アカウント管理に使われ、フォーラムに公開されません。公開ニックネーム、投稿やコメント、アップロードした画像はすべての訪問者に表示される場合があります。"
  ],
  "网页由 GitHub Pages 提供，域名及网络服务可能经过 Cloudflare，账号、文章、评论、举报、申诉和图片等数据由 Supabase 处理。服务商可能依据其政策处理连接日志、IP地址及其他必要的技术数据。本站无法保证服务商完全不记录访问信息。": [
    "網頁由 GitHub Pages 提供，網域及網路服務可能經過 Cloudflare。帳號、文章、留言、檢舉、申訴及圖片等資料由 Supabase 處理。服務商可能依其政策處理連線紀錄、IP 位址及其他必要的技術資料。本網站無法保證服務商完全不記錄存取資訊。",
    "GitHub Pages hosts the site, and domain or network services may use Cloudflare. Supabase processes accounts, articles, comments, reports, appeals, and images. Providers may handle connection logs, IP addresses, and other necessary technical data under their policies. We cannot guarantee providers never log visits.",
    "사이트는 GitHub Pages에서 호스팅되며 도메인 및 네트워크 서비스에 Cloudflare가 사용될 수 있습니다. Supabase는 계정, 글, 댓글, 신고, 이의 신청 및 이미지 데이터를 처리합니다. 서비스 제공업체는 자사 정책에 따라 연결 로그, IP 주소 및 기타 필요한 기술 데이터를 처리할 수 있습니다. 제공업체가 접속 정보를 전혀 기록하지 않는다고 보장할 수 없습니다.",
    "サイトは GitHub Pages で提供され、ドメインやネットワークサービスに Cloudflare を利用する場合があります。アカウント、記事、コメント、通報、異議申し立て、画像等のデータは Supabase が処理します。各サービスは自社の方針に従い、接続ログ、IPアドレス、その他必要な技術データを処理する場合があります。アクセス情報が一切記録されないことは保証できません。"
  ],
  "管理员可以查看会员举报理由、账号禁言状态及申诉内容。举报人身份不会在普通公开论坛展示。请不要在公开文章或评论中提交真实地址、私人联系方式、证件号码或敏感材料。": [
    "管理員可查看會員檢舉理由、帳號禁言狀態及申訴內容。檢舉人身分不會在公開論壇顯示。請勿在公開文章或留言中提供真實地址、私人聯絡方式、證件號碼或敏感資料。",
    "Administrators can see reasons for member reports, account mute status, and appeal details. Reporter identities are not displayed in the public forum. Do not include real addresses, private contact details, ID numbers, or sensitive materials in public articles or comments.",
    "관리자는 회원의 신고 사유, 발언 제한 상태, 이의 신청 내용을 볼 수 있습니다. 신고자의 신원은 공개 포럼에 표시되지 않습니다. 공개 글이나 댓글에 실제 주소, 개인 연락처, 신분증 번호 또는 민감한 자료를 올리지 마세요.",
    "管理者は会員の通報理由、発言制限の状態、異議申し立ての内容を確認できます。通報者の身元は公開フォーラムには表示されません。公開記事やコメントに実際の住所、私的な連絡先、身分証明書番号、機微な資料を掲載しないでください。"
  ],
  "打开 YouTube、X、TikTok 等外部视频或链接时，相关第三方可能收到浏览器网络信息。网站也可能使用外部图片、脚本及其他资源。": [
    "開啟 YouTube、X、TikTok 等外部影片或連結時，相關第三方可能收到瀏覽器網路資訊。網站也可能使用外部圖片、指令碼及其他資源。",
    "When you open external videos or links from services such as YouTube, X, or TikTok, those third parties may receive browser network information. The site may also load external images, scripts, and other resources.",
    "YouTube, X, TikTok 등 외부 동영상이나 링크를 열면 해당 제3자가 브라우저 네트워크 정보를 수신할 수 있습니다. 사이트에서 외부 이미지, 스크립트 및 기타 리소스를 사용할 수도 있습니다.",
    "YouTube、X、TikTok などの外部動画やリンクを開くと、第三者がブラウザーのネットワーク情報を受け取る場合があります。外部の画像やスクリプトなどのリソースを利用する場合もあります。"
  ],
  "用户可在论坛管理自己的文章；管理员可依社区规则移除违规内容。关于数据访问、更正、删除或安全问题，可通过": [
    "使用者可在論壇管理自己的文章，管理員可依社群規則移除違規內容。有關資料存取、更正、刪除或安全問題，可透過",
    "Members can manage their own forum articles. Administrators may remove content that violates community rules. For data access, correction, deletion, or security requests, use",
    "회원은 포럼에서 자신의 글을 관리할 수 있으며, 관리자는 커뮤니티 규칙 위반 콘텐츠를 삭제할 수 있습니다. 데이터 열람, 수정, 삭제 또는 보안 관련 문의 창구:",
    "利用者はフォーラムで自身の記事を管理できます。管理者はコミュニティルールに違反する内容を削除できます。データの閲覧、訂正、削除、セキュリティに関する窓口："
  ],
  "联系站方，但不应在公开留言中发送密码或证件。": [
    "聯絡站方，但請勿在公開留言中傳送密碼或證件。",
    "to contact the site. Do not send passwords or identity documents in public comments.",
    "공개 댓글에 비밀번호나 신분증을 보내지 마세요.",
    "公開コメントにパスワードや身分証明書を送信しないでください。"
  ],
  "不要重复使用其他平台密码；建议使用强密码及可靠邮箱。使用昵称不等于匿名；如果你的身份暴露可能造成严重后果，请谨慎考虑是否发布可识别个人的信息。": [
    "請勿重複使用其他平台的密碼，建議使用強密碼及可靠的電子郵件地址。使用暱稱不代表匿名。如果身分曝光可能造成嚴重後果，請謹慎考慮是否發表可識別個人的資訊。",
    "Avoid reusing passwords from other platforms. Use a strong password and a reliable email address. A nickname does not make you anonymous. If being identified could have serious consequences, consider carefully before sharing identifying information.",
    "다른 플랫폼의 비밀번호를 재사용하지 마세요. 강력한 비밀번호와 신뢰할 수 있는 이메일을 사용하세요. 닉네임을 쓴다고 익명이 보장되지는 않습니다. 신원 노출에 따른 결과가 심각할 수 있다면 개인을 식별할 수 있는 정보를 공개하기 전에 신중히 판단하세요.",
    "他のサービスのパスワードを使い回さず、強力なパスワードと信頼できるメールアドレスを使用してください。ニックネームは匿名性を保証しません。身元が明らかになることで重大な影響が生じる場合は、個人を特定できる情報の公開を慎重に検討してください。"
  ],
  "最后更新：2026年11月17日。": [
    "最後更新：2026 年 11 月 17 日。",
    "Last updated November 17, 2026.",
    "최종 업데이트: 2026년 11월 17일.",
    "最終更新：2026年11月17日。"
  ],
  "侵权投诉与内容处理 · 真实之声": [
    "侵權申訴與內容處理 · 真實之聲",
    "Rights complaints and content moderation · Voice of Truth",
    "권리 침해 신고 및 콘텐츠 처리 · 진실의 목소리",
    "権利侵害の申し立てとコンテンツ対応 · 真実の声"
  ],
  "注册并验证邮箱的会员可以在相关论坛文章或评论中点击「举报」，提供具体原因。请尽量注明文章标题、网址、相关内容、发生时间及可核实的证据。涉及版权、隐私、名誉、威胁、诈骗等问题，请明确指出具体内容和所主张的权利。": [
    "已註冊並驗證電子郵件的會員，可在相關論壇文章或留言點選「檢舉」並提供具體理由。請盡量附上文章標題、網址、相關內容、發生時間及可查證的證據。涉及著作權、隱私、名譽、威脅或詐騙時，請指明具體內容及主張的權利。",
    "Members with a verified email address can select Report on the relevant forum article or comment and explain why. Include the title, URL, relevant content, timing, and verifiable evidence where possible. For copyright, privacy, reputation, threats, or fraud, identify the specific content and any rights you are asserting.",
    "이메일 인증을 마친 회원은 해당 포럼 글이나 댓글에서 신고를 선택해 사유를 제출할 수 있습니다. 가능한 경우 제목, URL, 관련 내용, 발생 시간 및 확인 가능한 증거를 포함하세요. 저작권, 개인정보, 명예, 위협 또는 사기와 관련된 경우 구체적인 내용과 주장하는 권리를 명시하세요.",
    "メール認証済みの会員は、該当する記事やコメントの「通報」から具体的な理由を送信できます。可能な限り、タイトル、URL、該当箇所、発生日時、確認可能な証拠を添えてください。著作権、プライバシー、名誉、脅迫、詐欺に関する場合は、対象の内容と主張する権利を明記してください。"
  ],
  "如涉及即时人身危险，请优先联系所在地紧急服务机构；本站举报不能代替报警。": [
    "如有立即的人身危險，請優先聯絡所在地的緊急服務機構。本網站的檢舉不能取代報警。",
    "If anyone is in immediate physical danger, contact local emergency services first. Reporting here is not a substitute for contacting authorities.",
    "신체에 즉각적인 위험이 있는 경우 먼저 현지 긴급 서비스에 연락하세요. 사이트 신고는 경찰 신고를 대신할 수 없습니다.",
    "身の危険が差し迫っている場合は、まず現地の緊急機関に連絡してください。当サイトへの通報は警察への連絡に代わるものではありません。"
  ],
  "管理员会根据事实和风险采取保留、标注、更正、限制展示、删除或限制账号等措施。争议性观点原则上不因立场不同而删除；涉及儿童性虐待材料、可信的人身威胁、非自愿私密影像等严重违规内容不得仅靠敏感提示放行。": [
    "管理員會依事實及風險採取保留、標示、更正、限制顯示、移除或限制帳號等措施。爭議性觀點原則上不會僅因立場不同而被移除。兒童性虐待資料、可信的人身威脅及未經同意的私密影像等嚴重違規內容，不能只加警示便予以放行。",
    "Administrators may retain, label, correct, limit, or remove content, or restrict an account, based on the facts and risks. Controversial views are generally not removed solely because of disagreement. A warning alone is insufficient for serious violations such as child sexual abuse material, credible threats, or non-consensual intimate imagery.",
    "관리자는 사실과 위험에 따라 콘텐츠 유지, 표시, 정정, 노출 제한, 삭제 또는 계정 제한을 적용할 수 있습니다. 의견 차이만을 이유로 논쟁적인 견해를 삭제하지 않는 것이 원칙입니다. 아동 성착취물, 신빙성 있는 신체 위협, 동의 없이 공유된 사적 이미지 등 심각한 위반은 경고만 붙여 허용할 수 없습니다.",
    "管理者は事実とリスクに応じて、掲載の継続、注記、訂正、表示制限、削除、アカウント制限などを行います。見解が異なるという理由だけで、論争のある意見を削除することは原則ありません。児童の性的虐待資料、信憑性のある身体への脅迫、同意のない私的画像などの重大な違反は、警告表示だけで公開を続けることはできません。"
  ],
  "举报提交不代表一定删除。审核时会考虑证据、语境及适用法律，并尽量避免不必要地传播被投诉的个人信息。": [
    "提交檢舉不代表一定會移除內容。審核會考慮證據、語境及適用法律，並盡量避免不必要地傳播遭申訴涉及的個人資訊。",
    "A report does not guarantee removal. Review takes account of the evidence, context, and applicable law, and seeks to avoid unnecessary disclosure of personal information at issue.",
    "신고했다고 해서 반드시 삭제되는 것은 아닙니다. 검토 시 증거, 맥락 및 적용 법률을 고려하며, 문제 된 개인정보가 불필요하게 퍼지지 않도록 합니다.",
    "通報しても削除が保証されるわけではありません。審査では証拠、文脈、適用される法律を考慮し、問題となった個人情報が不必要に拡散されないようにします。"
  ],
  "会员如对禁言处理有异议，可使用论坛「账号申诉」入口。涉及本人个人资料的访问、更正或删除请求，建议先通过网站的「网站建议」入口联系管理员并说明请求类型；请勿在公开帖子中上传身份证件或其他敏感证件。具体处理仍须遵守适用的保存义务。": [
    "會員若對禁言處理有異議，可使用論壇的「帳號申訴」。如要存取、更正或刪除本人的個人資料，建議先透過「網站建議」聯絡管理員並說明請求類型。請勿在公開貼文上傳身分證件或其他敏感證件。實際處理仍須遵守適用的保存義務。",
    "Members may use Account appeal to challenge a mute. For access to, correction of, or deletion of your own personal data, contact an administrator through Site feedback and specify the type of request. Do not upload identity documents or other sensitive documents in public posts. Applicable retention obligations still apply.",
    "회원은 발언 제한에 대해 포럼의 계정 이의 신청을 이용할 수 있습니다. 본인의 개인정보 열람, 수정 또는 삭제를 요청하려면 사이트 제안 메뉴를 통해 관리자에게 요청 유형을 알려 주세요. 공개 게시물에 신분증이나 민감한 문서를 올리지 마세요. 해당되는 보존 의무는 계속 적용됩니다.",
    "発言制限に異議がある会員は、フォーラムの「アカウントの異議申し立て」を利用できます。ご自身の個人データの閲覧、訂正、削除を求める場合は、「サイトへの提案」から管理者に連絡し、請求の種類を明記してください。公開投稿に身分証明書やその他の機微な文書をアップロードしないでください。適用される保存義務には引き続き従います。"
  ],
  "请提供涉嫌侵权内容的具体网址、原创作品或权利证明、你的联系方式，以及希望采取的措施。本站不会因为未经核实的投诉自动认定侵权。": [
    "請提供涉嫌侵權內容的具體網址、原創作品或權利證明、聯絡方式，以及希望採取的措施。本網站不會因未經查證的申訴自動認定侵權。",
    "Provide the specific URL of the alleged infringement, the original work or evidence of rights, your contact details, and the action you are requesting. An unverified complaint does not automatically establish infringement.",
    "침해 의심 콘텐츠의 정확한 URL, 원본 작품 또는 권리 증빙, 연락처, 원하는 조치를 제출하세요. 확인되지 않은 신고만으로 침해를 인정하지 않습니다.",
    "権利侵害が疑われるコンテンツのURL、原作品または権利の証明、連絡先、希望する措置を提示してください。未確認の申し立てだけで権利侵害と認定することはありません。"
  ],
  "本页为网站处理流程说明，不替代法律咨询；自动图片识别与私有图片审核流程尚未全面启用。": [
    "本頁說明網站處理流程，不能取代法律諮詢。自動圖片辨識與非公開圖片審核流程尚未全面啟用。",
    "This page describes the site’s process and is not legal advice. Automated image recognition and private image review are not yet fully enabled.",
    "이 페이지는 사이트 처리 절차를 안내하며 법률 상담을 대신하지 않습니다. 자동 이미지 인식과 비공개 이미지 검토 절차는 아직 전면 운영되지 않습니다.",
    "このページはサイトの対応手順を説明するもので、法律相談に代わるものではありません。自動画像認識と非公開画像の審査手順はまだ全面的には有効になっていません。"
  ],
  "Google Drive 音频": [
    "Google Drive 音訊",
    "Google Drive audio",
    "Google Drive 오디오",
    "Google Drive の音声"
  ],
  "管理员手动导出公开讨论及管理数据为 JSON 文件。下载后请保存在加密的私人存储中，不要上传到公开 GitHub 仓库。此备份不包含账号密码、Supabase Auth 用户、图片文件或完整数据库结构。": [
    "管理員可手動將公開討論及管理資料匯出為 JSON 檔案。下載後請儲存在加密的私人空間，請勿上傳至公開的 GitHub 儲存庫。備份不含帳號密碼、Supabase Auth 使用者、圖片檔案或完整的資料庫結構。",
    "Administrators can manually export public discussions and moderation data as JSON. Store downloads in encrypted private storage and do not upload them to a public GitHub repository. This backup excludes passwords, Supabase Auth users, image files, and the full database schema.",
    "관리자는 공개 토론과 관리 데이터를 JSON 파일로 직접 내보낼 수 있습니다. 다운로드한 파일은 암호화된 비공개 저장소에 보관하고 공개 GitHub 저장소에 올리지 마세요. 이 백업에는 비밀번호, Supabase Auth 사용자, 이미지 파일 또는 전체 데이터베이스 구조가 포함되지 않습니다.",
    "管理者は公開の議論と管理データを JSON ファイルとして手動でエクスポートできます。ダウンロード後は暗号化された非公開の保管場所に保存し、公開 GitHub リポジトリにアップロードしないでください。バックアップにパスワード、Supabase Auth のユーザー、画像ファイル、完全なデータベース構造は含まれません。"
  ],
  "仅管理员可查看私有审核图片；图片不会自动公开。审核通过仅更新审核状态，发布仍需独立安全流程。": [
    "僅管理員可查看非公開的審核圖片，圖片不會自動公開。核准只會更新審核狀態，發佈仍須經過獨立的安全程序。",
    "Only administrators can view private review images. Images are not published automatically. Approval only updates the review status. Publication still requires a separate safety process.",
    "관리자만 비공개 검토 이미지를 볼 수 있으며, 이미지는 자동으로 공개되지 않습니다. 승인은 검토 상태만 갱신하며 게시하려면 별도의 안전 절차를 거쳐야 합니다.",
    "非公開の審査画像を閲覧できるのは管理者のみで、画像は自動公開されません。承認では審査状態のみが更新され、公開には別の安全確認手順が必要です。"
  ]
});
Object.assign(data,{
  "开放阅读与发布": [
    "開放閱讀與發佈",
    "Public access and publishing",
    "공개 열람 및 게시",
    "公開閲覧と投稿"
  ],
  "公开文章、论坛帖子、公开评论和音频可免登录浏览或收听。访客也可以提交非公开的网站建议。": [
    "公開文章、論壇貼文、公開留言及音訊可免登入瀏覽或收聽。訪客也可以提交非公開的網站建議。",
    "Anyone can read public articles, forum posts and comments, or listen to public audio without signing in. Visitors can also submit private site feedback.",
    "공개 글, 포럼 게시물 및 댓글을 읽거나 공개 오디오를 들을 때 로그인할 필요가 없습니다. 방문자는 비공개로 사이트에 의견을 보낼 수 있습니다.",
    "公開記事、フォーラム投稿、公開コメント、公開音声はログインせずに閲覧・再生できます。訪問者はサイトへの意見を非公開で送信できます。"
  ],
  "邮箱已验证且账号状态正常的会员可发表论坛帖子、评论和网友文章。帖子、评论和主动发布的网友文章提交后公开，无需事前人工审核。未发布的网友文章草稿仅作者可见。": [
    "電子郵件已驗證且帳號狀態正常的會員可發表論壇貼文、留言與網友文章。貼文、留言和主動發佈的網友文章在提交後公開，無須事前人工審核。未發佈的網友文章草稿僅作者可見。",
    "Members with a verified email and an account in good standing can post, comment, and publish member articles. These submissions go public without prior manual review. Unpublished drafts are visible only to their author.",
    "이메일 인증을 마치고 계정 상태가 정상인 회원은 포럼 글과 댓글을 작성하고 회원 글을 게시할 수 있습니다. 게시물과 댓글은 사전 수동 검토 없이 공개되며, 미게시 초안은 작성자만 볼 수 있습니다.",
    "メール認証済みでアカウントが正常な会員は、フォーラムに投稿・コメントし、会員記事を公開できます。投稿やコメントは事前の手動審査なしで公開され、未公開の下書きは著者だけが閲覧できます。"
  ],
  "发帖与评论频率": [
    "發文與留言頻率",
    "Posting and commenting limits",
    "게시물 및 댓글 빈도 제한",
    "投稿とコメントの頻度制限"
  ],
  "论坛帖子每小时最多 2 篇、24 小时最多 5 篇。论坛评论通常每小时最多 5 条；LV3 及以上会员，或已有至少 3 篇带审核记录的公开论坛帖的会员，每小时最多 20 条。两次论坛评论至少间隔 30 秒，重复内容会被拦截。": [
    "論壇貼文每小時最多 2 篇、24 小時最多 5 篇。論壇留言通常每小時最多 5 則；LV3 以上（含 LV3）會員，或已有至少 3 篇附審核紀錄的公開論壇貼文的會員，每小時最多 20 則。兩次論壇留言至少相隔 30 秒，系統會攔截重複內容。",
    "Forum posts are limited to 2 per hour and 5 per 24 hours. Forum comments are normally limited to 5 per hour. Members at LV3 or higher, or with at least 3 public forum posts with prior review records, may post up to 20 comments per hour. Leave at least 30 seconds between comments. Duplicate submissions are blocked.",
    "포럼 게시물은 시간당 2개, 24시간당 5개까지 작성할 수 있습니다. 포럼 댓글은 일반적으로 시간당 최대 5개입니다. LV3 이상이거나 심사 기록이 있는 공개 포럼 글이 3개 이상인 회원은 시간당 최대 20개까지 작성할 수 있습니다. 댓글 간격은 최소 30초이며 중복 내용은 차단됩니다.",
    "フォーラム投稿は1時間に2件、24時間に5件までです。コメントは通常1時間に5件までです。LV3以上の会員、または審査記録のある公開フォーラム投稿が3件以上ある会員は1時間に20件までコメントできます。コメントには30秒以上の間隔が必要で、重複投稿はブロックされます。"
  ],
  "网友文章的删除": [
    "網友文章的刪除",
    "Deleting member articles",
    "회원 글 삭제",
    "会員記事の削除"
  ],
  "网友文章公开后，作者可在发布未满 3 天时自行删除。满 3 天后须通过「我的文章与草稿」提交删除申请，由站点管理员处理。": [
    "網友文章公開後，作者可在發佈未滿 3 天時自行刪除。滿 3 天後須透過「我的文章與草稿」提交刪除申請，由站點管理員處理。",
    "Authors can delete a published member article within 3 days of publication. After 3 days, use My articles and drafts to submit a removal request for a site administrator to review.",
    "회원 글은 공개 후 3일이 지나기 전까지 작성자가 직접 삭제할 수 있습니다. 3일이 지나면 내 글과 초안에서 삭제를 신청하면 사이트 관리자가 처리합니다.",
    "会員記事は公開から3日未満であれば著者が削除できます。3日経過後は「自分の記事と下書き」で削除申請を送り、サイト管理者の対応をお待ちください。"
  ],
  "管理权限与分工": [
    "管理權限與分工",
    "Administrative roles and permissions",
    "관리 역할 및 권한",
    "管理の役割と権限"
  ],
  "会员等级用于站内成长及部分互动额度。内容管理员仅有获授权的审核权限。音频上传、编辑、排序、上下架和删除分别授权。举报、禁言、申诉和站内授权由站点管理员处理。": [
    "會員等級用於站內成長及部分互動額度。內容管理員僅有獲授權的審核權限。音訊上傳、編輯、排序、上架與下架、刪除分別授權。檢舉、禁言、申訴及站內授權由站點管理員處理。",
    "Membership levels track progress and affect some interaction limits. Content moderators only have their assigned review permissions. Audio upload, editing, sorting, visibility, and deletion are granted separately. Site administrators handle reports, mutes, appeals, and permission assignments.",
    "회원 등급은 활동 수준과 일부 이용 한도에 적용됩니다. 콘텐츠 관리자는 부여받은 검토 권한만 가집니다. 오디오 업로드, 편집, 정렬, 공개 설정, 삭제는 각각 별도 권한입니다. 사이트 관리자가 신고, 발언 제한, 이의 신청, 사이트 권한 부여를 담당합니다.",
    "会員レベルは活動状況と一部の利用上限に関係します。コンテンツモデレーターには付与された審査権限のみがあります。音声のアップロード、編集、並び替え、公開設定、削除は個別に付与されます。通報、発言制限、異議申し立て、権限付与はサイト管理者が担当します。"
  ],
  "规则会随网站运营调整，重大变更应在网站公布。最后更新：2026年11月19日。": [
    "規則會隨網站營運調整，重大變更應於網站公布。最後更新：2026 年 11 月 19 日。",
    "These rules may change as the site evolves. Significant changes will be announced on the site. Last updated November 19, 2026.",
    "사이트 운영에 따라 규칙이 변경될 수 있습니다. 주요 변경 사항은 사이트에 공지합니다. 최종 업데이트: 2026년 11월 19일.",
    "サイト運営に応じてルールが変更される場合があります。重要な変更はサイトで告知します。最終更新：2026年11月19日。"
  ],
  "旧待审核文章可继续编辑或联系站点管理员处理。": [
    "舊待審核文章可繼續編輯或聯絡站點管理員處理。",
    "You can continue editing a legacy pending article or contact a site administrator.",
    "이전 심사 대기 글은 계속 편집하거나 사이트 관리자에게 문의할 수 있습니다.",
    "旧審査待ちの記事は編集を続けるか、サイト管理者にお問い合わせください。"
  ],
  "举报和申诉不会公开。站点管理员可处理举报及申诉，申诉人可以查看自己的申诉记录。": [
    "檢舉與申訴不會公開。站點管理員可處理檢舉及申訴，申訴人可查看自己的申訴紀錄。",
    "Reports and appeals are private. Site administrators can handle reports and appeals. Members can view their own appeal history.",
    "신고와 이의 신청은 공개되지 않습니다. 사이트 관리자가 처리하며, 신청자는 자신의 이의 신청 기록을 볼 수 있습니다.",
    "通報や異議申し立ては非公開です。サイト管理者が対応し、申し立てを行った本人は自分の履歴を確認できます。"
  ],
  "皮肤选择保存在当前浏览器，只影响本人在该浏览器中看到的界面。": [
    "佈景選擇儲存在目前的瀏覽器，只影響本人在該瀏覽器中看到的介面。",
    "Appearance preferences are saved in the current browser and affect only what you see in that browser.",
    "화면 테마 설정은 현재 브라우저에 저장되며, 해당 브라우저에서 본인에게 표시되는 화면에만 적용됩니다.",
    "外観の設定は現在のブラウザーに保存され、そのブラウザーで自分に表示される画面にのみ反映されます。"
  ],
  "邮箱已验证且账号状态正常的会员可以举报文章或评论。": [
    "電子郵件已驗證且帳號狀態正常的會員可以檢舉文章或留言。",
    "Members with a verified email and an account in good standing can report posts or comments.",
    "이메일 인증을 마치고 계정 상태가 정상인 회원은 게시물이나 댓글을 신고할 수 있습니다.",
    "メール認証済みでアカウントが正常な会員は、投稿やコメントを通報できます。"
  ],
  "管理员根据内容和行为采取删除违规内容、提醒、禁言24小时、7天、30天或暂停账号等措施。严重威胁和诈骗可直接处理。举报不代表内容自动违法，管理员需核实。": [
    "管理員可依內容及行為移除違規內容、發出提醒、禁言 24 小時、7 天或 30 天，或暫停帳號。嚴重威脅及詐騙可立即處理。檢舉不代表內容違法，仍須查證。",
    "Depending on the content and conduct, administrators may remove content, issue a reminder, mute for 24 hours, 7 days, or 30 days, or suspend the account. Serious threats and scams may be handled immediately. Administrators verify reports before concluding content is unlawful.",
    "관리자는 내용과 행위에 따라 콘텐츠를 삭제하거나 주의, 24시간·7일·30일 발언 제한 또는 계정 정지를 적용할 수 있습니다. 심각한 위협이나 사기는 즉시 처리할 수 있으며, 신고 내용은 확인을 거칩니다.",
    "管理者は内容や行為に応じて、コンテンツの削除、注意、24時間・7日間・30日間の発言制限、アカウント停止を行えます。重大な脅迫や詐欺には直ちに対応でき、違法性は通報だけで判断せず、管理者が確認します。"
  ],
  "举报与申诉": [
    "檢舉與申訴",
    "Reports and appeals",
    "신고 및 이의 신청",
    "通報と異議申し立て"
  ],
  "外观": [
    "外觀",
    "Appearance",
    "화면 테마",
    "外観"
  ]
});
Object.assign(data,{
  "发布文章需要标题5—30字、正文100—50000字。": [
    "發佈文章需要 5–30 字的標題及 100–50,000 字的正文。",
    "To publish, use a title of 5–30 characters and a body of 100–50,000 characters.",
    "게시하려면 제목은 5~30자, 본문은 100~50,000자로 작성하세요.",
    "公開するには、タイトルを5～30文字、本文を100～50,000文字で入力してください。"
  ],
  "旧待审核文章": [
    "舊待審核文章",
    "Legacy article awaiting review",
    "이전 심사 대기 글",
    "旧審査待ちの記事"
  ],
  "旧未通过文章": [
    "舊未通過文章",
    "Legacy rejected article",
    "이전 심사에서 반려된 글",
    "旧審査で非承認の記事"
  ],
  "根据作者删除申请": [
    "依作者的刪除申請",
    "At the author's request",
    "작성자의 삭제 요청에 따라",
    "著者の削除申請に基づく"
  ],
  "评论频率超过每小时限制": [
    "留言次數超過每小時上限",
    "You have reached your hourly forum comment limit.",
    "시간당 포럼 댓글 한도에 도달했습니다.",
    "フォーラムの1時間あたりのコメント上限に達しました。"
  ],
  "两次评论至少间隔30秒": [
    "兩次留言至少相隔 30 秒",
    "Wait at least 30 seconds between comments.",
    "댓글을 작성한 뒤 최소 30초 후에 다시 작성하세요.",
    "コメントの間隔を30秒以上空けてください。"
  ],
  "每小时最多发表2篇文章": [
    "每小時最多發表 2 篇論壇貼文",
    "You can publish up to 2 forum posts per hour.",
    "포럼 글은 시간당 최대 2개까지 게시할 수 있습니다.",
    "フォーラムへの投稿は1時間に2件までです。"
  ],
  "24小时最多发表5篇文章": [
    "每 24 小時最多發表 5 篇論壇貼文",
    "You can publish up to 5 forum posts in 24 hours.",
    "포럼 글은 24시간에 최대 5개까지 게시할 수 있습니다.",
    "フォーラムへの投稿は24時間に5件までです。"
  ],
  "请勿重复发表相同内容": [
    "請勿重複發表相同內容",
    "Please do not post the same content again.",
    "같은 내용을 반복해서 게시하지 마세요.",
    "同じ内容を繰り返し投稿しないでください。"
  ],
  "评论发布失败：": [
    "留言發佈失敗：",
    "Could not post comment: ",
    "댓글 게시 실패: ",
    "コメントを投稿できませんでした："
  ],
  "网络异常": [
    "網路發生異常",
    "Network error",
    "네트워크 오류",
    "ネットワークエラー"
  ],
  "请先验证邮箱，并确认账号状态正常。": [
    "請先驗證電子郵件地址，並確認帳號狀態正常。",
    "Verify your email and make sure your account is in good standing.",
    "이메일을 인증하고 계정 상태가 정상인지 확인해 주세요.",
    "メールアドレスを認証し、アカウントが正常な状態であることを確認してください。"
  ],
  "文章不可删除。公开满 3 天的文章请提交删除申请。": [
    "無法直接刪除文章。公開滿 3 天的文章請提交刪除申請。",
    "This article cannot be deleted directly. For an article published 3 days ago or earlier, submit a deletion request.",
    "이 글은 직접 삭제할 수 없습니다. 공개된 지 3일이 지난 글은 삭제를 신청해 주세요.",
    "この記事は直接削除できません。公開から3日以上経過した記事には削除申請を送ってください。"
  ],
  "当前文章状态不支持此操作。": [
    "目前的文章狀態不支援此操作。",
    "This action is unavailable for the article's current status.",
    "현재 글 상태에서는 이 작업을 할 수 없습니다.",
    "現在の記事の状態ではこの操作を利用できません。"
  ],
  "已公开的网友文章无法改为草稿。": [
    "已公開的網友文章無法改為草稿。",
    "A published member article cannot be changed back to a draft.",
    "공개된 회원 글은 초안으로 되돌릴 수 없습니다.",
    "公開済みの会員記事を下書きに戻すことはできません。"
  ],
  "文章太短。发布需要至少 5 字的标题和 100 字的正文。": [
    "文章太短。發佈需要至少 5 字的標題及 100 字的正文。",
    "The article is too short. Publication requires a title of at least 5 characters and a body of at least 100 characters.",
    "글이 너무 짧습니다. 제목은 5자 이상, 본문은 100자 이상이어야 게시할 수 있습니다.",
    "記事が短すぎます。公開にはタイトル5文字以上、本文100文字以上が必要です。"
  ],
  "未知错误": [
    "未知錯誤",
    "Unknown error",
    "알 수 없는 오류",
    "不明なエラー"
  ],
  "文章标题需要5—30个字符。": [
    "文章標題須為 5–30 個字元。",
    "Use a title of 5–30 characters.",
    "제목을 5~30자로 작성하세요.",
    "タイトルは5～30文字で入力してください。"
  ],
  "文章正文需要20—20000个字符。": [
    "文章正文須為 20–20,000 個字元。",
    "Use a body of 20–20,000 characters.",
    "본문을 20~20,000자로 작성하세요.",
    "本文は20～20,000文字で入力してください。"
  ],
  "评论发布成功！": [
    "留言已發佈！",
    "Comment posted.",
    "댓글을 게시했습니다.",
    "コメントを投稿しました。"
  ],
  "评论最多1500字，请删减后再提交": [
    "留言最多 1,500 字，請縮短後再提交。",
    "Comments can contain up to 1,500 characters. Shorten yours and try again.",
    "댓글은 최대 1,500자입니다. 줄인 후 다시 제출해 주세요.",
    "コメントは最大1,500文字です。短くして再送信してください。"
  ],
  "文章已被管理员删除": [
    "文章已由管理員刪除",
    "Article removed by an administrator",
    "관리자가 글을 삭제했습니다",
    "管理者が記事を削除しました"
  ],
  "站点管理员": [
    "站點管理員",
    "Site administrator",
    "사이트 관리자",
    "サイト管理者"
  ],
  "内容管理员": [
    "內容管理員",
    "Content moderator",
    "콘텐츠 관리자",
    "コンテンツモデレーター"
  ]
});
Object.assign(data,{
  "站长负责全站设置，可任免管理员，限制或恢复管理员及会员账号，并处理所有举报和申诉。管理员可处理普通会员作品的举报及移除违规作品。站长的账号和作品由站长管理。": [
    "站長負責全站設定，可任免管理員、限制或恢復管理員及會員帳號，並處理所有檢舉和申訴。管理員可處理一般會員作品的檢舉及移除違規作品。站長的帳號及作品由站長管理。",
    "The site owner manages site settings, appoints and removes administrators, restricts or restores administrator and member accounts, and handles all reports and appeals. Administrators can review reports about ordinary members’ content and remove violating content. The site owner manages the owner’s account and content.",
    "사이트 운영자는 사이트 설정, 관리자 임명과 해제, 관리자 및 회원 계정 제한과 해제, 모든 신고와 이의 신청 처리를 담당합니다. 관리자는 일반 회원 콘텐츠에 대한 신고를 검토하고 위반 콘텐츠를 삭제할 수 있습니다. 운영자 계정과 콘텐츠는 운영자가 관리합니다.",
    "サイト所有者はサイト設定、管理者の任免、管理者と会員のアカウント制限・解除、すべての通報と異議申し立てを担当します。管理者は一般会員のコンテンツに関する通報を確認し、違反コンテンツを削除できます。所有者のアカウントとコンテンツは所有者が管理します。"
  ],
  "举报和申诉不公开。管理员可查看普通会员作品的相关举报，站长可处理全部举报和申诉。申诉人可查看自己的申诉记录。": [
    "檢舉和申訴不公開。管理員可查看一般會員作品的相關檢舉，站長可處理全部檢舉和申訴。申訴人可查看自己的申訴紀錄。",
    "Reports and appeals are private. Administrators may view reports about ordinary members’ content. The site owner may handle all reports and appeals. Members can view their own appeal history.",
    "신고와 이의 신청은 비공개입니다. 관리자는 일반 회원의 콘텐츠에 관한 신고를 볼 수 있습니다. 사이트 운영자는 모든 신고와 이의 신청을 처리할 수 있습니다. 신청자는 자신의 이의 신청 기록을 볼 수 있습니다.",
    "通報と異議申し立ては非公開です。管理者は一般会員のコンテンツに関する通報を確認できます。サイト所有者はすべての通報と異議申し立てに対応できます。申し立てた本人は自分の履歴を確認できます。"
  ],
  "站长": [
    "站長",
    "Site owner",
    "사이트 운영자",
    "サイト所有者"
  ],
  "管理员权限": [
    "管理員權限",
    "Administrator permissions",
    "관리자 권한",
    "管理者の権限"
  ],
  "内容管理": [
    "內容管理",
    "Content moderation",
    "콘텐츠 관리",
    "コンテンツ管理"
  ],
  "账号限制": [
    "帳號限制",
    "Account restrictions",
    "계정 제한",
    "アカウント制限"
  ],
  "搜索昵称或邮箱": [
    "搜尋暱稱或電子郵件地址",
    "Search by nickname or email",
    "닉네임 또는 이메일 검색",
    "ニックネームまたはメールアドレスで検索"
  ],
  "此举报已处理或超出你的权限。": [
    "此檢舉已處理或超出你的權限。",
    "This report has already been handled or is outside your permissions.",
    "이미 처리되었거나 권한 범위를 벗어난 신고입니다.",
    "この通報は処理済みか、権限の範囲外です。"
  ],
  "仅站长可管理账号": [
    "僅站長可管理帳號",
    "Only the site owner can manage accounts.",
    "사이트 운영자만 계정을 관리할 수 있습니다.",
    "サイト所有者のみがアカウントを管理できます。"
  ],
  "无法管理此账号": [
    "無法管理此帳號",
    "This account cannot be managed here.",
    "이 계정은 여기서 관리할 수 없습니다.",
    "このアカウントはここでは管理できません。"
  ],
  "站长（此处不可更改站长权限）": [
    "站長（無法在此變更站長權限）",
    "Site owner (owner permissions cannot be changed here)",
    "사이트 운영자(여기서는 운영자 권한을 변경할 수 없음)",
    "サイト所有者（ここでは所有者の権限を変更できません）"
  ]
});
const issueAliases=new Map(Object.entries({
 'Active verified membership required':'请先验证邮箱，并确认账号状态正常。',
 'Verified active membership required':'请先验证邮箱，并确认账号状态正常。',
 'Article is too short':'文章太短。发布需要至少 5 字的标题和 100 字的正文。',
 'Article deletion not permitted':'文章不可删除。公开满 3 天的文章请提交删除申请。',
 'Invalid publication state':'当前文章状态不支持此操作。',
 'Invalid article state':'当前文章状态不支持此操作。',
 'Published article cannot be made draft':'已公开的网友文章无法改为草稿。'
}));
const messagePrefixes=['下次可修改日期：','提交失败：','操作失败：','保存失败：','昵称修改已锁定，解锁时间：','本轮还可修改 ','举报失败：','点赞操作失败：','文章举报读取失败：','上传失败：','登录失败：','注册失败：','点赞失败：','评论加载失败：','读取失败：','发表失败：','导出失败：','图片上传失败：','修改失败：','审核失败：','请复制链接：','评论发布失败：','保存或发布失败：','删除失败：','申请失败：'];
const translations=new Map(Object.entries(data).map(([k,v])=>[normalize(k),v]));
function translateIssue(value,index){
 const key=normalize(value);
 for(const prefix of messagePrefixes){
  if(!key.startsWith(prefix)||key===prefix)continue;
  const label=translations.get(normalize(prefix));
  if(!label)continue;
  const detail=key.slice(prefix.length);
  const detailKey=issueAliases.get(normalize(detail))||normalize(detail);
  const detailTranslation=translations.get(detailKey);
  const localizedDetail=index<0?(issueAliases.get(normalize(detail))||detail):(detailTranslation?.[index]||detail);
  return (index<0?prefix:label[index])+localizedDetail;
 }
 return undefined;
}
function apply(lang){
if(!document.body||!langs.includes(lang))return;
document.documentElement.lang=lang;const titleSource=document.documentElement.dataset.lyyTitleSource||(document.documentElement.dataset.lyyTitleSource=document.title);const titleTranslation=data[titleSource];if(titleTranslation)document.title=lang==='zh-CN'?titleSource:titleTranslation[langs.indexOf(lang)-1];
const idx=langs.indexOf(lang)-1;
const fragments={
'收藏':['收藏','Bookmark','즐겨찾기','ブックマーク'],
'资料库':['資料庫','Resources','자료실','資料室'],
'福音园地':['福音園地','Gospel','복음 마당','福音広場'],
'公共论坛':['公共論壇','Public forum','공개 포럼','公開フォーラム'],
'关于平台':['關於平台','About','소개','サイトについて'],
'网站首页':['網站首頁','Website home','사이트 홈','サイトホーム'],
'真实之声首页':['真實之聲首頁','Voice of Truth home','진실의 목소리 홈','真実の声 ホーム'],
'浏览':['瀏覽','views','조회','閲覧'],
'阅读':['閱讀','views','조회','閲覧'],
'点赞':['按讚','likes','좋아요','いいね'],
'评论':['評論','comments','댓글','コメント'],
'播放':['播放','plays','재생','再生'],
'当前账户：':['目前帳戶：','Current account:','현재 계정:','現在のアカウント：']
};
const fragmentKeys=Object.keys(fragments).sort((a,b)=>b.length-a.length);
function translateSource(source,partial){
const key=normalize(source);
if(/^\d+\s*人点赞$/.test(key)){
 const n=key.match(/^\d+/)[0];
 return idx<0?n+' 人点赞':idx===0?n+' 人按讚':idx===1?n+' likes':idx===2?n+'명이 좋아요':n+'人がいいね';
}
if(/^[♥♡]\s*(已点赞\s*·\s*点击取消|点赞)$/.test(key)){
 const active=key.includes('已点赞'),mark=active?'♥':'♡';
 const v=active?['已点赞 · 点击取消','已按讚 · 點擊取消','Liked · click to unlike','좋아요 누름 · 취소하려면 클릭','いいね済み · クリックして解除']:['点赞','按讚','Like','좋아요','いいね'];
 return mark+' '+v[idx+1];
}
const values=translations.get(key);
if(values){const match=source.match(/^(\s*)([\s\S]*?)(\s*)$/);return match?match[1]+(idx<0?key:values[idx])+match[3]:(idx<0?key:values[idx]);}
if(idx>=0){
const count=key.match(/^共\s*(\d+)\s*篇$/);if(count)return ['共 '+count[1]+' 篇','共 '+count[1]+' 篇',count[1]+' articles','총 '+count[1]+'편','計'+count[1]+'件'][idx+1];
}
const localizedIssue=translateIssue(key,idx);if(localizedIssue!==undefined)return localizedIssue;
if(!partial||idx<0)return source;
let output=source;
for(const key of fragmentKeys)output=output.split(key).join(fragments[key][idx]);
return output;
}
function uiFragment(el){
return !!el.closest('button,a,nav,[class*="bookmark"],[id*="bookmark"],[class*="metric"],[class*="stat"],[class*="count"],[id*="account"],[id*="member"],[id*="article-count"]');
}
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
let n;
while((n=walker.nextNode())){
const el=n.parentElement;if(!el||el.closest('option')||excluded(el))continue;
const visible=n.nodeValue;
let src=original.get(n);
if(src===undefined){src=visible;original.set(n,src)}
else {
const prev=translateSource(src,uiFragment(el));
if(visible!==src&&visible!==prev&&visible!==rendered.get(n)){
const known=translations.get(normalize(src));
const matchesKnown=known&&known.some(v=>normalize(v)===normalize(visible));
if(!matchesKnown){src=visible;original.set(n,src)}
}
}
const translated=translateSource(src,uiFragment(el));
if(visible!==translated)n.nodeValue=translated;rendered.set(n,translated);
}
document.querySelectorAll('[aria-label],[title],[placeholder],input[type="button"],input[type="submit"],input[type="reset"]').forEach(el=>{
if(excluded(el.parentElement))return;
let state=attrOriginal.get(el);if(!state){state={};attrOriginal.set(el,state)}
for(const name of ['aria-label','title','placeholder','value']){
if(!el.hasAttribute(name))continue;
if(name==='value'&&!['button','submit','reset'].includes(el.type))continue;
const current=el.getAttribute(name);
if(!(name in state))state[name]=current;
const expected=translateSource(state[name],false);
if(current!==state[name]&&current!==expected&&!(translations.get(normalize(state[name]))||[]).includes(current))state[name]=current;
const next=translateSource(state[name],false);
if(current!==next)el.setAttribute(name,next);
}
});
document.querySelectorAll('select:not(#lyy-language) option').forEach(el=>{
if(excluded(el))return;
const visible=el.textContent;
let src=original.get(el);
if(src===undefined||(visible!==src&&visible!==rendered.get(el))){
 src=visible;
 original.set(el,src);
}
const target=translateSource(src,false);
if(visible!==target){
 if(!el.hasAttribute('value'))el.value=el.value;
 el.textContent=target;
}
rendered.set(el,target);
});
document.querySelectorAll('#post-list').forEach(root=>{
const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
while((node=walk.nextNode())){
const el=node.parentElement;
if(!el||el.closest('h1,h2,h3,a,[class*="title"],[class*="nickname"],[class*="author"],[data-user-content]'))continue;
const raw=node.nodeValue;
let src=original.get(node);
if(src===undefined){src=raw;original.set(node,src)}
if(el.classList.contains('forum-list-date')){const m=src.match(/^(\s*)(自由讨论|宗教信仰|时事政治|国际局势|社会观察)(\s*[·•]\s*.*)?$/);if(m){const translated=idx>=0?(translations.get(m[2])?.[idx]||m[2]):m[2];const next=m[1]+translated+(m[3]||'');if(node.nodeValue!==next)node.nodeValue=next;continue;}}
if(!/^(\s*[◉◌●○♥❤]?\s*(浏览|评论|点赞)\s*\d+\s*|\s*(自由讨论|宗教信仰)(\s*[·•]?\s*(\d{4}\/\d{1,2}\/\d{1,2})?)?\s*)$/.test(src))continue;
let next=src;
if(idx>=0){for(const key of ['浏览','评论','点赞','自由讨论','宗教信仰']){const vals=translations.get(key);if(vals)next=next.split(key).join(vals[idx])}}
if(node.nodeValue!==next)node.nodeValue=next;
}
});
const sel=document.getElementById('lyy-language');if(sel&&sel.value!==lang)sel.value=lang;
}
function set(lang){if(!langs.includes(lang))return;try{localStorage.setItem(storage,lang)}catch{}apply(lang);if(window.parent!==window)window.parent.postMessage({type:'lyy-language',lang},location.origin);else{const f=document.getElementById('page');try{f?.contentWindow?.postMessage({type:'lyy-language',lang},location.origin)}catch{}}}
function init(){if(!document.body)return;const shell=location.pathname==='/player.html';if(!document.getElementById('lyy-language')&&window.parent===window){const wrap=document.createElement('div');wrap.id='lyy-language-wrap';wrap.setAttribute('data-no-translate','');wrap.innerHTML='<label for="lyy-language" style="font-size:12px">🌐</label><select id="lyy-language" aria-label="选择网站语言"></select>';Object.assign(wrap.style,{position:shell?'fixed':'relative',top:shell?'7px':'auto',right:shell?'8px':'auto',zIndex:'99999',display:'flex',alignItems:'center',gap:'4px',background:'#101f30',color:'#fff',border:'1px solid #786535',borderRadius:'8px',padding:'3px 5px',width:'max-content',margin:shell?'0':'8px'});const sel=wrap.querySelector('select');Object.assign(sel.style,{background:'#101f30',color:'#fff',border:'0',fontSize:'12px',maxWidth:'110px',padding:'3px',margin:'0',width:'auto'});for(const l of langs){const o=document.createElement('option');o.value=l;o.textContent=labels[l];sel.appendChild(o)}sel.addEventListener('change',()=>set(sel.value));if(shell)document.body.appendChild(wrap);else{const h=document.querySelector('header');if(h)h.appendChild(wrap);else document.body.prepend(wrap)}}
const existing=document.getElementById('lyy-language');
if(existing&&!existing.dataset.lyyBound){existing.dataset.lyyBound='1';existing.addEventListener('change',()=>set(existing.value));}
apply(current());
}
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.data?.type==='lyy-language'&&langs.includes(e.data.lang)){try{localStorage.setItem(storage,e.data.lang)}catch{}apply(e.data.lang)}});
window.addEventListener('storage',e=>{if(e.key===storage)apply(current())});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
let pending=false;const observer=new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply(current())})});const startObserver=()=>{if(document.body)observer.observe(document.body,{childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','title','aria-label'],subtree:true})};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startObserver);else startObserver();
function translateMessage(value){
 if(typeof value!=='string')return value;
 const index=langs.indexOf(current())-1;
 const key=normalize(value);
 return (index>=0?translations.get(key)?.[index]:undefined)??translateIssue(value,index)??value;
}
window.lyyLanguage={set,apply,current,translate:translateMessage};
for(const method of ['alert','confirm','prompt']){const native=window[method];if(typeof native!=='function')continue;window[method]=function(message,...rest){return native.call(window,translateMessage(message),...rest)};}
})();