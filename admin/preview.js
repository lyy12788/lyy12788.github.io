(function () {
  'use strict';
  if (!window.CMS || !window.React) return;
  const h = window.React.createElement;
  const read = (entry, key, fallback = '') => {
    const value = entry && entry.getIn(['data', key]);
    return value === undefined || value === null ? fallback : value;
  };
  const color = (entry, key, fallback) => {
    const value = read(entry, key, fallback);
    return /^#[0-9a-fA-F]{6}$/.test(String(value)) ? String(value) : fallback;
  };
  const imageUrl = (entry, key, getAsset) => {
    const raw = read(entry, key, '');
    if (!raw) return '';
    try {
      const asset = getAsset && getAsset(raw);
      return asset && typeof asset.toString === 'function' ? asset.toString() : String(raw);
    } catch (_) { return String(raw); }
  };
  const el = (tag, props, ...children) => h(tag, props, ...children);
  function SitePreview(props) {
    const e = props.entry;
    const bg = color(e, 'background', '#081321');
    const panel = color(e, 'panel', '#101f30');
    const text = color(e, 'text', '#edf3f9');
    const muted = color(e, 'muted', '#a6b6c8');
    const accent = color(e, 'accent', '#f5c84b');
    const border = color(e, 'border', '#2a3b4e');
    const hero = imageUrl(e, 'hero_image', props.getAsset);
    const style = { fontFamily: 'system-ui,-apple-system,sans-serif', color: text, background: bg, minHeight: '100vh', padding: 22, boxSizing: 'border-box' };
    const card = { background: panel, border: '1px solid ' + border, borderRadius: 12, padding: 20, marginTop: 18 };
    const button = { display: 'inline-block', background: accent, color: bg, padding: '12px 18px', borderRadius: 8, fontWeight: 700, marginRight: 12 };
    const section = (title, body) => el('section', { style: card }, el('h2', { style: { marginTop: 0 } }, title), el('p', { style: { color: muted, lineHeight: 1.7 } }, body));
    return el('div', { style },
      el('header', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 18, borderBottom: '1px solid ' + border, gap: 16 } },
        el('div', null, el('strong', { style: { color: accent, fontSize: 24 } }, read(e, 'site_name', '网站名称')), el('div', { style: { fontSize: 12, letterSpacing: 1.5, color: muted } }, read(e, 'brand_subtitle', ''))),
        el('span', { style: { color: muted, fontSize: 13 } }, '首页　文章　分类　关于我　联系')
      ),
      el('main', null,
        el('section', { style: { marginTop: 20, padding: '65px 25px', borderRadius: 14, backgroundImage: hero ? 'linear-gradient(90deg, rgba(0,0,0,.8), rgba(0,0,0,.3)), url("' + String(hero).replace(/"/g, '%22') + '")' : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: panel } },
          el('div', { style: { color: accent, fontSize: 13, letterSpacing: 2, fontWeight: 700 } }, read(e, 'hero_eyebrow', '')),
          el('h1', { style: { fontSize: 40, lineHeight: 1.2, margin: '18px 0' } }, read(e, 'hero_title', ''), el('span', { style: { color: accent } }, read(e, 'hero_highlight', ''))),
          el('p', { style: { maxWidth: 600, lineHeight: 1.8, color: '#e6edf5' } }, read(e, 'hero_description', '')),
          el('div', { style: { marginTop: 25 } }, el('span', { style: button }, read(e, 'primary_cta', '阅读文章')), el('span', { style: { ...button, background: 'transparent', color: accent, border: '1px solid ' + accent } }, read(e, 'secondary_cta', '了解更多'))),
          el('p', { style: { fontSize: 12, marginTop: 24, color: '#e6edf5' } }, read(e, 'hero_caption', ''))
        ),
        read(e, 'show_latest', true) ? section(read(e, 'latest_heading', '最新文章'), '这里将展示文章列表（示意预览）') : null,
        read(e, 'show_about', true) ? section(read(e, 'about_heading', '关于我'), read(e, 'about_description', '')) : null,
        read(e, 'show_contact', true) ? section(read(e, 'contact_heading', '联系我'), read(e, 'contact_description', '') + ' · ' + read(e, 'contact_email', '')) : null
      ),
      el('footer', { style: { color: muted, fontSize: 12, marginTop: 30, borderTop: '1px solid ' + border, paddingTop: 15 } }, read(e, 'footer_tagline', '')),
      el('p', { style: { color: muted, fontSize: 11 } }, '外观示意预览；实际首页排版请在发布后查看网站。')
    );
  }
  window.CMS.registerPreviewTemplate('appearance', SitePreview);
})();
