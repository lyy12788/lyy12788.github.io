/* Shared appearance settings for pages, the persistent player, and embedded account views. */
(() => {
  'use strict';

  const storageKey = 'lyy-appearance-v1';
  const defaults = { palette: 'navy', mode: 'system' };
  const systemDark = matchMedia('(prefers-color-scheme: dark)');
  const palettes = {
    navy: {
      light: { page: '#edf2f8', panel: '#ffffff', raised: '#dce7f4', ink: '#142740', muted: '#425773', accent: '#62420c', edge: '#a8b9cd' },
      dark: { page: '#081321', panel: '#101f30', raised: '#263a53', ink: '#edf3f9', muted: '#b8c8db', accent: '#f4ce82', edge: '#526781' }
    },
    paper: {
      light: { page: '#f5eee5', panel: '#fffbf5', raised: '#ecded1', ink: '#30231e', muted: '#634e45', accent: '#823b27', edge: '#cdb7a8' },
      dark: { page: '#1c1613', panel: '#2b211c', raised: '#45342a', ink: '#fff2e5', muted: '#d5c1b2', accent: '#f4a889', edge: '#775c4e' }
    },
    pine: {
      light: { page: '#e8f0ed', panel: '#f8fcfa', raised: '#d7e8e0', ink: '#152d25', muted: '#3f5e54', accent: '#205e49', edge: '#a1bbaf' },
      dark: { page: '#101c19', panel: '#192923', raised: '#2b4039', ink: '#ebf8f0', muted: '#b7d1c4', accent: '#a9e2c8', edge: '#4e7265' }
    }
  };
  const labels = {
    'zh-CN': ['外观', '配色', '模式', '海军蓝金', '暖纸墨色', '松绿青灰', '白天', '夜间', '跟随系统'],
    'zh-TW': ['外觀', '配色', '模式', '海軍藍金', '暖紙墨色', '松綠青灰', '白天', '夜間', '跟隨系統'],
    en: ['Appearance', 'Palette', 'Mode', 'Navy & gold', 'Warm paper', 'Pine & slate', 'Day', 'Night', 'System'],
    ko: ['화면 테마', '색상', '모드', '네이비와 골드', '따뜻한 종이색', '소나무와 청회색', '주간', '야간', '시스템 설정'],
    ja: ['外観', '配色', 'モード', 'ネイビーと金', '温かみのある紙色', '松緑と青灰色', '昼', '夜', 'システム設定']
  };
  const root = document.documentElement;
  const colors = new Map();
  const processedRules = new WeakSet();
  const observedStyles = new WeakMap();
  const colorToken = /#[\da-f]{8}\b|#[\da-f]{6}\b|#[\da-f]{4}\b|#[\da-f]{3}\b|rgba?\([^()]*\)|\b(?:white|black)\b/gi;
  const customRoles = {
    '--bg': 'surface', '--panel': 'surface', '--panel2': 'surface',
    '--line': 'edge', '--text': 'text', '--muted': 'text', '--gold': 'accent', '--gold2': 'accent'
  };
  const colorProperty = /^(?:color|background(?:-color|-image)?|border(?:-(?:top|right|bottom|left|block|block-start|block-end|inline|inline-start|inline-end))?(?:-color)?|outline(?:-color)?|box-shadow|text-shadow|text-decoration(?:-color)?|caret-color|accent-color|fill|stroke)$/;
  const untouched = '[data-no-theme],.post-body,.comment-body,.user-content,[data-user-content],.forum-post-content,.forum-comment-text,[id^="oauth-"]';
  let settings = read();
  let menu;

  function read() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey));
      return {
        palette: Object.hasOwn(palettes, value?.palette) ? value.palette : defaults.palette,
        mode: ['light', 'dark', 'system'].includes(value?.mode) ? value.mode : defaults.mode
      };
    } catch {
      return { ...defaults };
    }
  }

  function decode(value) {
    if (value === 'white') return [255, 255, 255, 1];
    if (value === 'black') return [0, 0, 0, 1];
    if (value.startsWith('#')) {
      let hex = value.slice(1);
      if (hex.length < 5) hex = [...hex].map(character => character.repeat(2)).join('');
      return [0, 2, 4, 6].map(index => index === 6 && hex.length === 6 ? 1 : parseInt(hex.slice(index, index + 2), 16) / (index === 6 ? 255 : 1));
    }
    const channels = value.match(/[\d.]+%?/g);
    if (channels?.length !== 3 && channels?.length !== 4) return null;
    if (channels.slice(0, 3).some(channel => channel.endsWith('%'))) return null;
    const rgb = channels.slice(0, 3).map(Number);
    const alpha = channels[3] || '1';
    return [...rgb, parseFloat(alpha) / (alpha.endsWith('%') ? 100 : 1)];
  }

  function role(property, rule) {
    if (rule?.selectorText?.includes('::backdrop')) return 'overlay';
    if (property.endsWith('shadow')) return 'shadow';
    if (property.startsWith('border') || property.startsWith('outline')) return 'edge';
    if (property.startsWith('background')) return 'surface';
    if (property === 'accent-color') return 'accent';
    return 'text';
  }

  function converted(entry, palette, mode) {
    if (settings.palette === 'navy' && mode === 'dark') return entry.original;
    const { rgb, kind } = entry;
    const [r, g, b, alpha] = rgb;
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const saturation = (Math.max(r,g,b) - Math.min(r,g,b)) / 255;
    let hex;
    if (kind === 'overlay' || kind === 'shadow') {
      return 'rgba(7, 12, 16, ' + (mode === 'light' && kind === 'shadow' ? alpha * .28 : alpha) + ')';
    }
    if (kind === 'surface') {
      if (alpha === 0) return entry.original;
      hex = luminance < .08 ? palette.page : luminance < .17 ? palette.panel : palette.raised;
    } else if (kind === 'edge') {
      hex = palette.edge;
    } else if (kind === 'accent' || (r - b > 35 && g - b > 15)) {
      hex = palette.accent;
    } else if (saturation > .23 && r > g * 1.22 && r > b * 1.18) {
      hex = mode === 'light' ? '#9d2d33' : '#ffacac';
    } else if (saturation > .25 && g > 1.12 * r && g > 1.08 * b) {
      hex = mode === 'light' ? '#205f43' : '#abe1bc';
    } else {
      hex = luminance >= .78 || luminance <= .18 ? palette.ink : palette.muted;
    }
    return alpha < 1 ? 'rgba(' + decode(hex).slice(0, 3).join(', ') + ', ' + alpha + ')' : hex;
  }

  function variable(color, kind) {
    const original = color.toLowerCase();
    const key = kind + ':' + original;
    let entry = colors.get(key);
    if (!entry) {
      const rgb = decode(original);
      if (!rgb) return color;
      entry = { rgb, kind, original, name: '--lyy-theme-c' + colors.size };
      colors.set(key, entry);
      const mode = root.dataset.lyyMode;
      root.style.setProperty(entry.name, converted(entry, palettes[settings.palette][mode], mode));
    }
    return 'var(' + entry.name + ', ' + color + ')';
  }

  function adapt(style, rule) {
    for (const property of Array.from(style)) {
      if (!colorProperty.test(property) && !Object.hasOwn(customRoles, property)) continue;
      const value = style.getPropertyValue(property);
      if (!value) continue;
      const kind = customRoles[property] || role(property, rule);
      const next = value.replace(/url\([^)]*\)|var\([^)]*\)|#[\da-f]+\b|rgba?\([^()]*\)|\b(?:white|black)\b/gi, token => {
        if (kind === 'surface' && /^var\(--gold2?\)$/.test(token)) {
          return variable(token.includes('gold2') ? '#ffe18a' : '#f5c84b', kind);
        }
        colorToken.lastIndex = 0;
        const match = token.match(colorToken);
        return match?.[0] === token ? variable(token, kind) : token;
      });
      if (next !== value) style.setProperty(property, next, style.getPropertyPriority(property));
    }
  }

  function adaptSheet(sheet) {
    let rules;
    try { rules = sheet.cssRules; } catch { return; }
    for (const rule of rules || []) {
      if (rule.cssRules) adaptSheet(rule);
      if (!rule.style || processedRules.has(rule)) continue;
      processedRules.add(rule);
      if (!rule.selectorText?.includes('#lyy-theme-control')) adapt(rule.style, rule);
    }
  }

  function adaptInline(element) {
    if (!element.style || element.closest(untouched)) return;
    if (element.getAttribute('style') === observedStyles.get(element)) return;
    adapt(element.style);
    observedStyles.set(element, element.getAttribute('style'));
  }

  const contrastPreference = matchMedia('(prefers-contrast: more)');
  const transparencyPreference = matchMedia('(prefers-reduced-transparency: reduce)');
  const forcedColors = matchMedia('(forced-colors: active)');
  const adjustedText = new Map();
  let contrastFrame = 0;
  let contrastStarted = false;

  function parsePaint(value) {
    const srgb = value.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)$/i);
    if (srgb) return srgb.slice(1, 4).map(channel => Number(channel) * 255).concat(Number(srgb[4] || 1));
    return decode(value);
  }

  function over(top, bottom) {
    return bottom.slice(0, 3).map((channel, index) => top[index] * top[3] + channel * (1 - top[3])).concat(1);
  }

  function luminance(rgb) {
    const [r, g, b] = rgb.map(value => {
      const channel = Math.max(0, Math.min(1, value / 255));
      return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4;
    });
    return .2126 * r + .7152 * g + .0722 * b;
  }

  function ratio(foreground, background) {
    const front = luminance(over(foreground, background));
    const back = luminance(background);
    return (Math.max(front, back) + .05) / (Math.min(front, back) + .05);
  }

  function minimumRatio(foreground, surfaces) {
    if (surfaces.length > 1 && foreground[3] === 1) {
      const value = luminance(foreground);
      if (value > luminance(surfaces[0]) && value < luminance(surfaces[1])) return 1;
    }
    return Math.min(...surfaces.map(surface => ratio(foreground, surface)));
  }

  function bestTextColor(surfaces, colors, target) {
    let best = { color: colors[0], score: 0 };
    for (const color of colors) {
      const score = minimumRatio(parsePaint(color), surfaces);
      if (score >= target) return { color, score };
      if (score > best.score) best = { color, score };
    }
    return best;
  }

  function backdropOf(element, styleOf, cache) {
    if (!element) return [root.dataset.lyyMode === 'dark' ? [18, 18, 18, 1] : [255, 255, 255, 1]];
    if (cache.has(element)) return cache.get(element);
    const style = styleOf(element);
    const paint = parsePaint(style.backgroundColor) || [0, 0, 0, 0];
    const underneath = paint[3] === 1 ? [paint] : backdropOf(element.parentElement, styleOf, cache).map(bg => over(paint, bg));
    let surfaces = underneath;
    if (style.backgroundImage.includes('gradient(')) {
      let depth = 0, start = 0;
      const layers = [];
      for (let index = 0; index < style.backgroundImage.length; index++) {
        const token = style.backgroundImage[index];
        if (token === '(') depth++;
        else if (token === ')') depth--;
        else if (token === ',' && !depth) {
          layers.push(style.backgroundImage.slice(start, index));
          start = index + 1;
        }
      }
      layers.push(style.backgroundImage.slice(start));
      for (const layer of layers.reverse()) {
        if (!layer.includes('gradient(')) continue;
        const colors = (layer.match(/rgba?\([^()]+\)|color\(srgb[^()]+\)/gi) || []).map(parsePaint).filter(Boolean);
        if (!colors.length) continue;
        const blended = colors.flatMap(color => surfaces.map(bg => over(color, bg)));
        blended.sort((a, b) => luminance(a) - luminance(b));
        surfaces = [blended[0], blended.at(-1)];
      }
    }
    surfaces.sort((a, b) => luminance(a) - luminance(b));
    const result = surfaces.length < 2 ? surfaces : [surfaces[0], surfaces.at(-1)];
    cache.set(element, result);
    return result;
  }

  function setContrastProperty(element, property, value) {
    let originals = adjustedText.get(element);
    if (!originals) adjustedText.set(element, originals = new Map());
    const current = element.style.getPropertyValue(property);
    if (current === value && element.style.getPropertyPriority(property) === 'important') return;
    const former = originals.get(property);
    if (!former || current !== former.adjusted) {
      originals.set(property, { value: current, priority: element.style.getPropertyPriority(property), adjusted: value });
    } else {
      former.adjusted = value;
    }
    element.style.setProperty(property, value, 'important');
    observedStyles.set(element, element.getAttribute('style'));
  }

  function resetContrast() {
    for (const [element, properties] of adjustedText) {
      for (const [name, previous] of properties) {
        if (element.style.getPropertyValue(name) !== previous.adjusted ||
            element.style.getPropertyPriority(name) !== 'important') continue;
        if (previous.value) element.style.setProperty(name, previous.value, previous.priority);
        else element.style.removeProperty(name);
      }
      observedStyles.set(element, element.getAttribute('style'));
    }
    adjustedText.clear();
  }

  function checkContrast() {
    contrastFrame = 0;
    if (forcedColors.matches) { resetContrast(); return; }
    const styles = new WeakMap();
    const backgrounds = new WeakMap();
    const styleOf = element => {
      if (!styles.has(element)) styles.set(element, getComputedStyle(element));
      return styles.get(element);
    };
    for (const element of adjustedText.keys()) if (!element.isConnected) adjustedText.delete(element);
    const candidates = new Set(document.querySelectorAll('input:not([type]),input[type="search"],input[type="text"],input[type="email"],input[type="password"],input[type="number"],textarea,select'));
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let text;
    while ((text = walk.nextNode())) {
      if (text.nodeValue.trim() && text.parentElement) candidates.add(text.parentElement);
    }
    const exclude = 'script,style,noscript,svg,option,[hidden],[aria-hidden="true"],[data-no-contrast],:disabled,[aria-disabled="true"]';
    const palette = palettes[settings.palette][root.dataset.lyyMode];
    const target = contrastPreference.matches ? 7 : 4.5;
    const changes = [];
    for (const element of candidates) {
      if (!element.style || element.closest(exclude)) continue;
      const box = element.getBoundingClientRect();
      if (!box.width || !box.height || box.bottom <= 0 || box.top >= innerHeight || box.right <= 0 || box.left >= innerWidth) continue;
      const style = styleOf(element);
      if (style.visibility !== 'visible' || Number(style.opacity) < .7) continue;
      const front = parsePaint(style.color);
      if (!front || front[3] === 0 || style.backgroundClip === 'text') continue;
      const surfaces = backdropOf(element, styleOf, backgrounds);
      if (minimumRatio(front, surfaces) >= target) continue;
      const alternative = bestTextColor(surfaces, [palette.ink, '#101010', '#ffffff', '#000000'], target);
      if (alternative.score >= target || (target > 4.5 && alternative.score >= 4.5)) {
        changes.push([element, alternative.color]);
      } else {
        const panel = parsePaint(palette.panel);
        const backed = bestTextColor([panel], [palette.ink, '#101010', '#ffffff', '#000000'], target);
        changes.push([element, backed.color, palette.panel]);
      }
    }
    for (const [element, color, backing] of changes) {
      setContrastProperty(element, '--lyy-contrast-color', color);
      setContrastProperty(element, 'color', 'var(--lyy-contrast-color)');
      if (backing) {
        setContrastProperty(element, '--lyy-contrast-backing', backing);
        setContrastProperty(element, 'background-color', 'var(--lyy-contrast-backing)');
        setContrastProperty(element, 'background-image', 'none');
      }
    }
  }

  function scheduleContrast() {
    if (contrastStarted && !contrastFrame) contrastFrame = requestAnimationFrame(checkContrast);
  }

  function startContrast() {
    contrastStarted = true;
    addEventListener('resize', scheduleContrast, { passive: true });
    addEventListener('scroll', scheduleContrast, { capture: true, passive: true });
    document.addEventListener('toggle', scheduleContrast, true);
    document.addEventListener('focusin', scheduleContrast);
    document.addEventListener('pointerover', scheduleContrast);
    contrastPreference.addEventListener('change', () => { resetContrast(); scheduleContrast(); });
    forcedColors.addEventListener('change', () => { resetContrast(); scheduleContrast(); });
    transparencyPreference.addEventListener('change', () => { resetContrast(); scheduleContrast(); });
    scheduleContrast();
  }

  function apply() {
    resetContrast();
    const mode = settings.mode === 'system' ? (systemDark.matches ? 'dark' : 'light') : settings.mode;
    const palette = palettes[settings.palette][mode];
    root.dataset.lyyPalette = settings.palette;
    root.dataset.lyyMode = mode;
    root.style.setProperty('color-scheme', mode, 'important');
    for (const [name, value] of Object.entries(palette)) root.style.setProperty('--lyy-theme-' + name, value);
    for (const entry of colors.values()) root.style.setProperty(entry.name, converted(entry, palette, mode));
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = palette.page;
    updateMenu();
    scheduleContrast();
  }

  function updateMenu() {
    if (!menu) return;
    const language = labels[root.lang] || labels['zh-CN'];
    const text = [menu.caption, menu.paletteLabel, menu.modeLabel, ...menu.palette.options, ...menu.mode.options];
    text.forEach((element, index) => {
      if (element.textContent !== language[index]) element.textContent = language[index];
    });
    menu.palette.value = settings.palette;
    menu.mode.value = settings.mode;
    const icon = root.dataset.lyyMode === 'dark' ? '☾' : '☀';
    if (menu.icon.textContent !== icon) menu.icon.textContent = icon;
  }

  function createMenu() {
    const control = document.createElement('details');
    control.id = 'lyy-theme-control';
    control.setAttribute('data-no-theme', '');
    control.setAttribute('data-no-translate', '');
    control.innerHTML = '<summary><span aria-hidden="true"></span> <span></span></summary><div><label><span></span><select><option value="navy"></option><option value="paper"></option><option value="pine"></option></select></label><label><span></span><select><option value="light"></option><option value="dark"></option><option value="system"></option></select></label></div>';
    const [icon,caption,paletteLabel,modeLabel] = control.querySelectorAll('span');
    const [palette,mode] = control.querySelectorAll('select');
    menu = { icon, caption, paletteLabel, modeLabel, palette, mode };
    control.addEventListener('change', () => {
      settings = { palette: palette.value, mode: mode.value };
      try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch {}
      apply();
    });
    control.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !control.open) return;
      control.open = false;
      control.querySelector('summary').focus();
      event.stopPropagation();
    });
    document.addEventListener('click', event => {
      if (!control.contains(event.target)) control.open = false;
    });
    const toolbar = document.getElementById('lyy-language-toolbar') || document.getElementById('lyy-language-wrap');
    (toolbar || document.body).append(control);
    updateMenu();
  }

  function start() {
    for (const sheet of document.styleSheets) adaptSheet(sheet);
    document.querySelectorAll('[style]').forEach(adaptInline);
    const observer = new MutationObserver(records => {
      let checkText = false;
      for (const record of records) {
        if (record.type === 'attributes') {
          if (record.attributeName === 'style') {
            if (observedStyles.get(record.target) === record.target.getAttribute('style')) continue;
            adaptInline(record.target);
          }
          checkText = true;
          continue;
        }
        checkText = true;
        for (const node of record.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches('style') && node.sheet) adaptSheet(node.sheet);
          if (node.matches('link[rel="stylesheet"]')) node.addEventListener('load', () => adaptSheet(node.sheet), { once: true });
          if (node.hasAttribute('style')) adaptInline(node);
          node.querySelectorAll('[style]').forEach(adaptInline);
        }
      }
      if (checkText) scheduleContrast();
    });
    observer.observe(document.body, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: ['style', 'class', 'hidden', 'aria-hidden', 'aria-disabled', 'disabled']
    });
    new MutationObserver(records => {
      if (records.some(record => record.attributeName === 'lang')) updateMenu();
      scheduleContrast();
    }).observe(root, { attributes: true, attributeFilter: ['lang', 'style'] });
    if (window.parent === window) createMenu();
    startContrast();
  }

  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    settings = read();
    apply();
  });
  systemDark.addEventListener('change', () => {
    if (settings.mode === 'system') apply();
  });
  apply();
  document.addEventListener('DOMContentLoaded', start, { once: true });
})();