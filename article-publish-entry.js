(() => {
  'use strict';
  const button = document.getElementById('article-publish-entry');
  if (!button) return;

  const messages = {
    guest: '发布文章前，请先登录并验证邮箱。邮箱已验证且账号正常的会员可保存私人草稿或直接发布。',
    allowed: '您可以保存私人草稿，或直接发布公开文章。',
    restricted: '您的账号目前无法发布文章。如对限制有异议，可以提交账号申诉。',
    unavailable: '暂时无法确认发布权限，请稍后再试。'
  };

  function showMessage(state) {
    if (document.getElementById('article-publishing-access')) return;
    const overlay = document.createElement('div');
    overlay.id = 'article-publishing-access';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:999999;background:#000b;display:flex;align-items:center;justify-content:center;padding:18px';
    const box = document.createElement('section');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-labelledby', 'article-publishing-title');
    box.style.cssText = 'width:min(460px,100%);background:#102235;color:#eaf0f7;border:1px solid #caa643;border-radius:16px;padding:25px;box-shadow:0 18px 55px #0009';
    const heading = document.createElement('h2');
    heading.id = 'article-publishing-title';
    heading.textContent = '文章投稿权限';
    heading.style.margin = '0 0 12px';
    const message = document.createElement('p');
    message.textContent = messages[state];
    message.style.lineHeight = '1.8';
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;flex-wrap:wrap;gap:9px;margin-top:20px';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = '关闭';
    const dismiss = () => { overlay.remove(); button.focus(); };
    close.onclick = dismiss;
    actions.append(close);
    if (state === 'guest') {
      const login = document.createElement('button');
      login.type = 'button';
      login.textContent = '注册 / 登录';
      login.onclick = () => { overlay.remove(); document.getElementById('nav-login')?.click(); };
      actions.append(login);
    } else if (state === 'allowed' || state === 'restricted') {
      const link = document.createElement('a');
      link.textContent = state === 'allowed' ? '前往发布' : '账号申诉';
      link.href = state === 'allowed' ? '/member-articles.html#submit' : '/forum.html#appeal';
      link.style.cssText = 'display:inline-block;background:#e5b832;color:#101b2a;border-radius:8px;padding:10px 14px;font-weight:bold';
      actions.append(link);
    }
    box.append(heading, message, actions);
    overlay.append(box);
    overlay.addEventListener('click', event => { if (event.target === overlay) dismiss(); });
    overlay.addEventListener('keydown', event => { if (event.key === 'Escape') dismiss(); });
    document.body.append(overlay);
    const language = window.lyyLanguage;
    if (language) language.apply(language.current());
    close.focus();
  }

  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      const client = typeof db !== 'undefined' ? db : null;
      if (!client) { showMessage('unavailable'); return; }
      const { data, error } = await client.auth.getUser();
      if (error && error.name !== 'AuthSessionMissingError') { showMessage('unavailable'); return; }
      const user = data?.user;
      if (!user?.email_confirmed_at) { showMessage('guest'); return; }
      const eligibility = await client.rpc('forum_is_active_member', { p_uid: user.id });
      showMessage(eligibility.error ? 'unavailable' : eligibility.data === true ? 'allowed' : 'restricted');
    } catch {
      showMessage('unavailable');
    } finally {
      button.disabled = false;
    }
  });
})();