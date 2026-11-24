import { locales, messages } from './volunteer-i18n.js';

const $ = id => document.getElementById(id);
const db = window.lyyAuth?.createClient(
  'https://bjlzeqfpyynavvcwmyez.supabase.co',
  'sb_publishable_lMoTaiz33wwavHGVrf375g_txd3xQVy',
);
const kinds = ['progress', 'featured', 'announcement'];
const states = ['new', 'reviewed', 'accepted', 'in_progress', 'done', 'deferred', 'rejected'];
const categories = ['功能建议', '页面布局', '手机体验', '问题反馈', '翻译纠错', '管理建议', '设备兼容', '内容建设', '安全漏洞', '其他'];
const imageTypes = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' };
const screenshots = db?.storage.from('volunteer-screenshots');
const languageKey = 'lyy-site-language';
const locale = () => locales.includes(localStorage.getItem(languageKey)) ? localStorage.getItem(languageKey) : locales[0];
const t = key => messages[key]?.[locales.indexOf(locale())] ?? key;
const date = value => new Date(value).toLocaleString(locale());
const memberLevel = points => [0, 100, 500, 1500, 5000].filter(threshold => points >= threshold).length;
const el = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text != null) node.textContent = text;
  if (className) node.className = className;
  return node;
};
const button = (key, action) => {
  const node = el('button', t(key));
  node.type = 'button';
  node.onclick = action;
  return node;
};
const values = form => Object.fromEntries(new FormData(form));
const suggestionColumns = 'id,user_id,title,category,message,contact,status,review_note,created_at,screenshot_path';
let user;
let admin = false;
let moderator = false;
let snapshot = {};
let refreshId = 0;
let attachmentUrl;
let editingPublication;
const statuses = new Map();

function status(node, key) {
  statuses.set(node, key);
  node.textContent = t(key);
}

function choices(select, keys) {
  const previous = select.value;
  select.replaceChildren(...keys.map(key => new Option(t(key), key)));
  if (keys.includes(previous)) select.value = previous;
}

function renderLanguage() {
  document.documentElement.lang = locale();
  document.title = t('title');
  $('language').value = locale();
  for (const node of document.querySelectorAll('[data-t]')) node.textContent = t(node.dataset.t);
  for (const node of document.querySelectorAll('[data-label]')) node.setAttribute('aria-label', t(node.dataset.label));
  $('attachment-image').alt = t('screenshotAlt');
  choices($('category'), categories);
  choices($('publication-kind'), kinds);
  for (const [node, key] of statuses) {
    if (node.isConnected) node.textContent = t(key);
    else statuses.delete(node);
  }
  render();
}

$('language').onchange = () => {
  localStorage.setItem(languageKey, $('language').value);
  renderLanguage();
  if (window.parent !== window) window.parent.postMessage({ type: 'lyy-language', lang: locale() }, location.origin);
};
window.addEventListener('storage', event => { if (event.key === languageKey) renderLanguage(); });
window.addEventListener('message', event => {
  if (event.origin === location.origin && event.data?.type === 'lyy-language' && locales.includes(event.data.lang)) {
    localStorage.setItem(languageKey, event.data.lang);
    renderLanguage();
  }
});

async function action(control, feedback, run, success = 'saved') {
  control.disabled = true;
  status(feedback, 'loading');
  try {
    await run();
    status(feedback, success);
  } catch {
    status(feedback, 'error');
  } finally {
    control.disabled = false;
  }
}

function checked(result) {
  if (result.error) throw result.error;
  return result.data;
}

const wire = (id, handler) => {
  $(id).onsubmit = event => {
    event.preventDefault();
    handler(event.currentTarget, event.submitter ?? event.currentTarget.querySelector('button'));
  };
};

wire('login', (form, control) => action(control, $('account-status'), async () => {
  const { email, password } = values(form);
  const result = await db.auth.signInWithPassword({ email, password });
  if (result.error) throw result.error;
  form.reset();
  await refresh();
}, '').then(() => {
  if (statuses.get($('account-status')) === 'error') status($('account-status'), 'loginError');
}));

$('logout').onclick = () => action($('logout'), $('account-status'), async () => {
  checked(await db.auth.signOut({ scope: 'local' }));
  user = undefined;
  admin = moderator = false;
  snapshot = {};
  resetPublication();
  $('poll-form').reset();
  $('attachment').close();
  render();
  await refresh();
});

function syncCategory() {
  $('security-note').hidden = $('category').value !== '安全漏洞';
}
$('category').onchange = syncCategory;

wire('suggestion', (form, control) => {
  const { title, category, message, contact, website, screenshot } = values(form);
  if (website) return;
  const feedback = $('submit-status');
  const length = [...message.trim()].length;
  if (category === '安全漏洞' && !user) return status(feedback, 'loginRequired');
  if (!title.trim() || length < 10 || length > 3000) return status(feedback, 'invalid');
  if (screenshot?.size && (!imageTypes[screenshot.type] || screenshot.size > 5 * 1024 * 1024)) {
    return status(feedback, 'screenshotBad');
  }
  action(control, feedback, async () => {
    const id = crypto.randomUUID();
    const path = user && screenshot?.size ? [user.id, id + '.' + imageTypes[screenshot.type]].join('/') : null;
    if (path) checked(await screenshots.upload(path, screenshot, { upsert: false }));
    const result = await db.from('site_suggestions').insert({
      id, title: title.trim(), category, message: message.trim(), contact: contact.trim() || null, screenshot_path: path,
    });
    if (result.error) {
      if (path) await screenshots.remove([path]);
      throw result.error;
    }
    form.reset();
    syncCategory();
    await refresh();
  }, 'submitted');
});

async function refresh() {
  const sequence = ++refreshId;
  if (!db) {
    snapshot = { failed: true };
    render();
    return;
  }
  const identity = await db.auth.getUser();
  const currentUser = identity.data?.user;
  const roles = currentUser ? await Promise.all([db.rpc('is_site_admin'), db.rpc('is_content_moderator')]) : [];
  const isAdmin = roles[0]?.data === true;
  const isModerator = roles[1]?.data === true;
  const requests = {
    publications: db.from('volunteer_publications').select('*').order('id', { ascending: false }).limit(100),
    polls: db.from('volunteer_polls').select('*').order('id', { ascending: false }).limit(100),
    leaderboard: db.from('volunteer_leaderboard').select('*').order('rank').order('display_name').limit(50),
  };
  if (currentUser) Object.assign(requests, {
    mine: db.from('site_suggestions').select(suggestionColumns).eq('user_id', currentUser.id).order('created_at', { ascending: false }).limit(100),
    rewards: db.from('volunteer_rewards').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }),
    member: db.from('member_progress').select('points,level_override').eq('user_id', currentUser.id).maybeSingle(),
    votes: db.from('volunteer_votes').select('poll_id,choice').eq('voter_id', currentUser.id),
    notifications: db.from('member_notifications').select('id,title,body,is_read,created_at').eq('recipient_id', currentUser.id)
      .eq('target_url', '/suggestions.html#mine').order('created_at', { ascending: false }).limit(100),
  });
  if (isAdmin || isModerator) {
    requests.entries = db.from('site_suggestions').select(suggestionColumns).order('created_at', { ascending: false }).limit(100);
  }
  const records = await Promise.all(Object.entries(requests).map(async ([key, query]) => [key, await query]));
  const pollIds = records.find(([key]) => key === 'polls')?.[1].data?.filter(row => row.published).map(row => row.id) ?? [];
  const suggestionIds = records.find(([key]) => key === 'entries')?.[1].data?.map(row => row.id) ?? [];
  const related = [];
  if (pollIds.length) {
    related.push(db.from('volunteer_poll_results').select('*').in('poll_id', pollIds).then(result => ['results', result]));
  }
  if (isAdmin && suggestionIds.length) {
    related.push(db.from('volunteer_rewards').select('suggestion_id,points,level').in('suggestion_id', suggestionIds).then(result => ['paid', result]));
  }
  records.push(...await Promise.all(related));
  if (sequence !== refreshId) return;
  user = currentUser;
  admin = isAdmin;
  moderator = isModerator;
  snapshot = Object.fromEntries(records);
  render();
}

function list(id, result, make, filter = () => true, fallback = 'empty') {
  const root = $(id);
  const rows = (result?.data ?? []).filter(filter);
  root.replaceChildren(...(rows.length ? rows.map(make) : [
    el('p', t(result?.error || snapshot.failed ? 'error' : fallback), 'muted'),
  ]));
}

function entry(title, body, meta) {
  const article = el('article', null, 'entry');
  article.append(el('h3', title));
  if (meta) article.append(el('p', meta, 'muted'));
  if (body) article.append(el('p', body));
  return article;
}

function feedback(parent) {
  const note = el('p');
  note.setAttribute('role', 'status');
  parent.append(note);
  return note;
}

function field(key, control) {
  const label = el('label', t(key));
  label.append(control);
  return label;
}

function renderSuggestion(item, staff = false) {
  const box = entry(item.title || t(item.category), item.message, [t(item.category), t(item.status), date(item.created_at)].join(' · '));
  const note = feedback(box);
  if (item.screenshot_path) box.append(button('attachment', event => action(event.currentTarget, note, async () => {
    const blob = checked(await screenshots.download(item.screenshot_path));
    if (!imageTypes[blob.type]) throw new Error('Unexpected attachment type');
    if (attachmentUrl) URL.revokeObjectURL(attachmentUrl);
    attachmentUrl = URL.createObjectURL(blob);
    $('attachment-image').src = attachmentUrl;
    $('attachment').showModal();
  }, '')));
  if (!staff) {
    if (item.review_note) box.append(el('p', t('review') + ' · ' + item.review_note));
    return box;
  }
  if (item.contact) box.append(el('p', t('contact') + ' · ' + item.contact));
  const form = el('form');
  const state = el('select');
  choices(state, states);
  state.value = item.status;
  const reply = el('textarea');
  reply.maxLength = 2000;
  reply.value = item.review_note ?? '';
  const save = el('button', t('save'));
  form.append(field('state', state), field('review', reply), save);
  form.onsubmit = event => {
    event.preventDefault();
    action(save, note, async () => {
      checked(await db.from('site_suggestions').update({
        status: state.value, review_note: reply.value.trim() || null, reviewed_at: new Date().toISOString(),
      }).eq('id', item.id).select('id').single());
      await refresh();
    });
  };
  box.append(form);
  const paid = snapshot.paid?.data?.find(row => row.suggestion_id === item.id);
  if (paid) box.append(el('p', '+' + paid.points + ' ' + t('points')));
  if (!paid && snapshot.paid && !snapshot.paid.error && admin && item.user_id && item.user_id !== user.id && ['accepted', 'in_progress', 'done'].includes(item.status)) {
    box.append(rewardForm(item));
  }
  return box;
}

function rewardForm(item) {
  const form = el('form');
  const points = el('input');
  Object.assign(points, { type: 'number', min: 1, max: 300, required: true });
  const level = el('select');
  level.append(new Option('—', ''), ...[2, 3, 4, 5].map(value => new Option(value, value)));
  const reason = el('input');
  Object.assign(reason, { minLength: 4, maxLength: 300, required: true });
  const save = el('button', t('reward'));
  form.append(field('points', points), field('promotion', level), field('reason', reason), save);
  const note = feedback(form);
  form.onsubmit = event => {
    event.preventDefault();
    action(save, note, async () => {
      checked(await db.rpc('award_volunteer_reward', {
        p_id: item.id, p_points: Number(points.value), p_level: level.value ? Number(level.value) : null, p_reason: reason.value.trim(),
      }));
      await refresh();
    });
  };
  return form;
}

$('close-attachment').onclick = () => $('attachment').close();
$('attachment').onclose = () => {
  if (attachmentUrl) URL.revokeObjectURL(attachmentUrl);
  attachmentUrl = undefined;
  $('attachment-image').removeAttribute('src');
};

function renderPublication(item, staff = false) {
  const box = entry(item.title, item.body, staff ? t(item.kind) + ' · ' + t(item.published ? 'published' : 'draft') : date(item.created_at));
  if (staff) {
    const actions = manageButtons('volunteer_publications', item);
    actions.append(button('edit', () => editPublication(item)));
    box.append(actions);
  }
  return box;
}

function manageButtons(table, item) {
  const group = el('div', null, 'actions');
  const note = feedback(group);
  const update = (key, changes) => group.append(button(key, event => action(event.currentTarget, note, async () => {
    checked(await db.from(table).update(changes()).eq('id', item.id).select('id').single());
    await refresh();
  })));
  update(item.published ? 'unpublish' : 'publish', () => ({ published: !item.published }));
  if (table === 'volunteer_polls' && Date.parse(item.closes_at) > Date.now()) {
    update('endPoll', () => ({ closes_at: new Date().toISOString() }));
  }
  return group;
}

function setPublicationMode(id) {
  editingPublication = id;
  $('publication-save').dataset.t = id ? 'save' : 'saveDraft';
  $('publication-save').textContent = t($('publication-save').dataset.t);
  $('publication-cancel').hidden = !id;
}

function resetPublication() {
  $('publication').reset();
  setPublicationMode(undefined);
  status($('publication-status'), '');
}

function editPublication(item) {
  const fields = $('publication').elements;
  fields.kind.value = item.kind;
  fields.title.value = item.title;
  fields.body.value = item.body;
  status($('publication-status'), '');
  setPublicationMode(item.id);
  fields.title.focus();
}

$('publication-cancel').onclick = resetPublication;

wire('publication', (form, control) => {
  const { kind, title, body } = values(form);
  if (!title.trim() || !body.trim()) return status($('publication-status'), 'invalid');
  action(control, $('publication-status'), async () => {
    const posts = db.from('volunteer_publications');
    const post = { kind, title: title.trim(), body: body.trim() };
    const saved = editingPublication
      ? await posts.update(post).eq('id', editingPublication).select('id').single()
      : await posts.insert(post);
    checked(saved);
    resetPublication();
    await refresh();
  });
});

wire('poll-form', (form, control) => {
  const { title, options, closes } = values(form);
  const items = options.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const deadline = Date.parse(closes);
  if (!title.trim() || items.length < 2 || items.length > 5 || new Set(items).size !== items.length ||
      items.some(item => [...item].length > 80) || !Number.isFinite(deadline) || deadline <= Date.now()) {
    return status($('poll-status'), 'invalid');
  }
  action(control, $('poll-status'), async () => {
    checked(await db.from('volunteer_polls').insert({ title: title.trim(), options: items, closes_at: new Date(deadline).toISOString() }));
    form.reset();
    await refresh();
  });
});

function renderPoll(item, staff = false) {
  const open = Date.parse(item.closes_at) > Date.now();
  const ownVote = snapshot.votes?.data?.find(row => row.poll_id === item.id);
  const counts = snapshot.results?.data?.filter(row => row.poll_id === item.id) ?? [];
  const meta = [staff ? t(item.published ? 'published' : 'draft') : '', t(open ? 'open' : 'closed'), date(item.closes_at), ownVote && t('voted')].filter(Boolean).join(' · ');
  const box = entry(item.title, null, meta);
  const form = el('form');
  const labels = el('ol', null, 'list');
  item.options.forEach((option, index) => {
    const line = el('li');
    const count = counts.find(row => row.choice === index + 1);
    const label = option + (count ? ' · ' + count.votes : '');
    if (open && user && !ownVote && !staff) {
      const radio = el('input');
      Object.assign(radio, { type: 'radio', name: 'choice', value: index + 1, required: true });
      const wrapper = el('label');
      wrapper.append(radio, document.createTextNode(label));
      line.append(wrapper);
    } else {
      line.textContent = label + (ownVote?.choice === index + 1 ? ' ✓' : '');
    }
    labels.append(line);
  });
  form.append(labels);
  if (open && user && !ownVote && !staff) {
    const send = el('button', t('vote'));
    form.append(send);
    const note = feedback(form);
    form.onsubmit = event => {
      event.preventDefault();
      action(send, note, async () => {
        checked(await db.from('volunteer_votes').insert({ poll_id: item.id, choice: Number(values(form).choice) }));
        await refresh();
      }, 'voted');
    };
  } else if (open && !user && !staff) form.append(el('p', t('loginRequired'), 'muted'));
  box.append(form);
  if (staff) box.append(manageButtons('volunteer_polls', item));
  return box;
}

function renderNotification(item) {
  const notice = item.title === messages.rewardNotice[0];
  const box = entry(t(notice ? 'rewardNotice' : 'updateNotice'), t(notice ? 'rewardBody' : 'updateBody'), date(item.created_at));
  const link = el('a', t('mine'));
  link.href = '#mine';
  box.append(link);
  if (!item.is_read) {
    const note = feedback(box);
    const actions = el('div', null, 'actions');
    actions.append(button('markRead', event => action(event.currentTarget, note, async () => {
      checked(await db.from('member_notifications').update({ is_read: true }).eq('id', item.id).select('id').single());
      await refresh();
    })));
    box.append(actions);
  }
  return box;
}

function render() {
  $('login').hidden = Boolean(user);
  $('signed-in').hidden = !user;
  $('screenshot-field').hidden = !user;
  $('admin').hidden = !admin && !moderator;
  $('admin-link').hidden = $('admin').hidden;
  $('publish-admin').hidden = !admin;
  $('notifications').hidden = !user;
  $('inbox-link').hidden = !user;
  const unread = snapshot.notifications?.data?.filter(row => !row.is_read).length;
  $('inbox-link').textContent = t('inbox') + (unread ? ' (' + unread + ')' : '');
  syncCategory();
  list('my-entries', snapshot.mine, row => renderSuggestion(row), undefined, user ? 'empty' : 'loginRequired');
  const summary = snapshot.member?.data;
  const rewards = $('my-rewards');
  rewards.replaceChildren();
  if (summary) rewards.append(el('p', t('points') + ' ' + summary.points + ' · ' + t('level') + ' ' + (summary.level_override ?? memberLevel(summary.points))));
  for (const row of snapshot.rewards?.data ?? []) {
    rewards.append(el('p', '+' + row.points + ' ' + t('points') + (row.level ? ' · ' + t('level') + ' ' + row.level : '') + ' · ' + row.reason));
  }
  for (const kind of kinds) {
    list(kind + '-list', snapshot.publications, row => renderPublication(row), row => row.published && row.kind === kind);
  }
  list('leaderboard', snapshot.leaderboard, row => entry(
    t('rank') + ' ' + row.rank + ' · ' + row.display_name,
    row.honor ? t(row.honor) : '',
    row.points + ' ' + t('points'),
  ));
  list('poll-list', snapshot.polls, row => renderPoll(row), row => row.published);
  list('notification-list', snapshot.notifications, renderNotification);
  list('entries', snapshot.entries, row => renderSuggestion(row, true));
  list('publication-admin-list', snapshot.publications, row => renderPublication(row, true));
  list('poll-admin-list', snapshot.polls, row => renderPoll(row, true));
}

$('reload').onclick = refresh;
renderLanguage();
refresh();
db?.auth.onAuthStateChange((event, session) => {
  if ((event === 'SIGNED_IN' || event === 'SIGNED_OUT') && session?.user?.id !== user?.id) {
    window.setTimeout(refresh, 0);
  }
});
