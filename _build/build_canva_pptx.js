// ADIG Canva import kit as PPTX (Canva keeps PPTX text live with real Unicode and font names).
// Mirrors build_canva.py: one file per format × theme, 5 slides (Announcement, Offer, Property, Seasonal, Checklist).
// Units: Canva's PPTX import maps 1 in = 96 px, so px/96 = inches and font px × 0.75 = pt.
const pptxgen = require('pptxgenjs');
const fs = require('fs'), path = require('path');
const ROOT = '/home/claude/adig', PACK = `${ROOT}/pkg/Canva_Upload_Pack`, OUT = `${ROOT}/pkg/Canva_Import_PPTX`, ASSET = `${ROOT}/pkg/Canva_Import/_assets`;
const LOGO = { stacked_neg: `${ROOT}/pkg/Logo/1x/AlDeafah-International-Group-NEG-CMYK.png`, left_neg: `${ROOT}/pkg/Logo/1x/AlDeafah-International-Group-Left_NEG_CMYK.png` };
const AR_ = { stacked_neg: 4040 / 3284, left_neg: 6065 / 1720 };
const STEP = 29.84 / 28.77;
const P = { black: '101820', grey: 'B6ADA5', yellow: 'D29F13', dblue: '0E4174', blue: '008BC4', dgreen: '13322B', green: '8DAE81', dred: 'C10016', beige: 'E1B87F', white: 'FFFFFF', muted: '5C5853' };
const THEMES = {
  Default_Light: { dark: false, bg: P.white, panel: P.black, accent: P.yellow, text: P.black },
  Default_Dark: { dark: true, bg: P.black, panel: '1C242E', accent: P.yellow, text: P.white },
  Green_Light: { dark: false, bg: P.white, panel: P.dgreen, accent: P.green, text: P.black },
  Green_Dark: { dark: true, bg: P.dgreen, panel: '1C4238', accent: P.green, text: P.white },
  Red_Light: { dark: false, bg: P.white, panel: P.dred, accent: P.beige, text: P.black },
  Red_Dark: { dark: true, bg: P.dred, panel: 'A3000F', accent: P.beige, text: P.white },
  Blue_Light: { dark: false, bg: P.white, panel: P.dblue, accent: P.blue, text: P.black },
  Blue_Dark: { dark: true, bg: P.dblue, panel: '0B3560', accent: P.blue, text: P.white },
};
const FORMATS = { Portrait: [1080, 1350], Square: [1080, 1080], Story: [1080, 1920], Landscape: [1200, 628] };
const COPY = {
  Announcement: { eyebrow: 'إعلان  ·  ANNOUNCEMENT', h1: 'انطلاق موسم العمرة', h2: 'لعام ١٤٤٨ هـ', en: 'Umrah season 1448 — bookings now open' },
  Offer: { eyebrow: 'عرض خاص  ·  SPECIAL OFFER', big: '٢٠٪', h1: 'خصم على باقات الإقامة', en: '20% off accommodation packages', cond: 'العرض ساري حتى ٣٠ شعبان  ·  تطبّق الشروط والأحكام' },
  Property: { eyebrow: 'عقاراتنا  ·  OUR PROPERTIES', h1: 'إطلالة على الحرم', h2: 'أجنحة في قلب مكة المكرمة', en: 'Suites in the heart of Makkah' },
  Seasonal: { h1: 'رمضان مبارك', en: 'Ramadan Mubarak', sub: 'تتمنّى لكم مجموعة الضيافة العالمية شهراً مباركاً' },
};
const CHIPS = ['عمرة', 'نقل', 'فنادق', 'إعاشة'];
const TAG_EN = 'Al Deafah International Group  ·  Umrah  ·  Transportation  ·  Hotels  ·  Catering';
const CTA = 'www.deafah.com';
const CHECK = ['الشعار من Brand Kit أو المجلد 01 فقط؛ بلا تمدد أو تدوير أو ظل أو تغيير لون.', 'مسافة آمنة حول الشعار ≥ 0.42 × ارتفاع الرمز، وبعيد عن الحواف بالقدر نفسه.', 'الحد الأدنى: الرأسي 120 بكسل عرضاً، الأفقي 200، الرمز وحده 40.', 'النقشة: بلوكات كاملة فقط (لا قصّ)، أقلها 2×2، لا تلامس الحافة.', 'الخط العربي Almarai فقط؛ اللاتيني كما في القالب. لا خط ثالث.', 'الألوان من Brand Kit فقط؛ لا أصفر/رمادي/أخضر/بيج كنص على أبيض.', 'لا آيات، لا أسماء الله، لا صور للكعبة أو الحرم كزخرفة.', 'النص العربي RTL، الأرقام والهواتف LTR داخل السطر.', 'أي نص فوق صورة يحتاج تدرجاً أسود تحته (موجود في صفحة العقار).', 'احذف هذه الصفحة قبل التصدير. التصدير: PNG للسوشيال.'];
const DPI = Number(process.env.ADIG_DPI || 96); const I = v => v / DPI, PT = v => v * 0.75;
function fit(avail, B) { const step = B * STEP, n = Math.floor((avail - B) / step) + 1; return [n, (n - 1) * step + B]; }
function pat(name, cols, rows, B) { const step = B * STEP; return { path: `${ASSET}/${name}.png`, w: (cols - 1) * step + B, h: (rows - 1) * step + B }; }

function rect(s, x, y, w, h, fill, opts = {}) {
  const o = { x: I(x), y: I(y), w: I(w), h: I(h), line: { color: opts.line || fill, width: opts.lineW || 0 } };
  if (fill === 'none') o.fill = { type: 'none' }; else o.fill = { color: fill, transparency: opts.tr || 0 };
  if (opts.lineW) o.line = { color: opts.line, width: opts.lineW };
  s.addShape(s._pres.ShapeType.rect, o);
}
function img(s, p, x, y, w, h, tr) { s.addImage({ path: p, x: I(x), y: I(y), w: I(w), h: I(h), transparency: tr || 0, altText: path.basename(p).replace(/\.png$/, '') }); }
function T(s, x, y, w, txt, size, color, o = {}) {
  const ar = o.ar !== false; const lh = o.lh || 1.2;
  s.addText(txt, { x: I(x), y: I(y), w: I(w), h: I(size * lh * 1.25), fontFace: ar ? 'Almarai' : 'Avenir Next', fontSize: PT(size), bold: !!o.bold, color, align: o.align || (ar ? 'right' : 'left'), valign: 'top', rtlMode: ar, lang: ar ? 'ar-SA' : 'en-US', margin: 0, isTextBox: true, transparency: o.tr || 0, charSpacing: o.cs || 0, lineSpacingMultiple: lh, fit: 'none', wrap: true });
}
function geometry(fmt) {
  const [W, H] = FORMATS[fmt];
  if (fmt === 'Landscape') return { W, H, m: 48, top: 0, bot: 0, land: true };
  return { W, H, m: 72, land: false, top: fmt === 'Story' ? 250 : 0, bot: fmt === 'Story' ? 250 : 0, panelH: { Portrait: 800, Square: 640, Story: 1150 }[fmt], logoH: { Portrait: 180, Square: 160, Story: 200 }[fmt] };
}
function bottomBlock(s, g, th, y0) {
  const { W, H, m, bot } = g; const B = 69.4; const [n, pw] = fit(W - 48, B); const sx = (W - pw) / 2, sy = H - bot - 24 - B;
  const p = pat(`strip${n}`, n, 1, B); img(s, p.path, sx, sy, p.w, p.h, th.dark ? 0 : 0);
  rect(s, W - m - 300, y0, 300, 64, th.accent); T(s, W - m - 300, y0 + 18, 300, CTA, 22, P.black, { ar: false, align: 'center', bold: true });
  rect(s, m, y0 + 100, W - 2 * m, 1, th.dark ? '3A4350' : 'B6ADA5');
  const gap = 16, cw = (W - 2 * m - 3 * gap) / 4;
  CHIPS.forEach((c, i) => { const x = W - m - cw - i * (cw + gap); rect(s, x, y0 + 132, cw, 64, 'none', { line: th.accent, lineW: 1.5 }); T(s, x, y0 + 132 + 16, cw, c, 24, th.text, { align: 'center', bold: true }); });
  T(s, m, sy - 50, W - 2 * m, TAG_EN, 15, th.text, { ar: false, tr: 40 });
  return sy;
}
function panelCommon(s, g, th) {
  const { W, H, m, top, panelH, logoH } = g;
  rect(s, 0, 0, W, H, th.bg); rect(s, 0, 0, W, panelH, th.panel);
  const lw = logoH * AR_.stacked_neg; img(s, LOGO.stacked_neg, W - m - lw, top + m, lw, logoH);
  const B = 69.4; const [rows] = fit(panelH - top - 48, B); const p = pat(`col${rows}`, 2, rows, B); img(s, p.path, 24, top + 24, p.w, p.h);
  return top + m + logoH;
}
function slideAnnouncement(s, g, th) { const { W, m } = g, c = COPY.Announcement; const lb = panelCommon(s, g, th); const x = 248, w = W - m - x; let y = lb + 48;
  T(s, x, y, w, c.eyebrow, 24, th.accent, { bold: true, cs: 1 }); y += 52;
  T(s, x, y, w, c.h1, 76, P.white, { bold: true, lh: 1.15 }); y += 76 * 1.15 + 14;
  T(s, x, y, w, c.h2, 60, P.white, { lh: 1.15 }); y += 60 * 1.15 + 28;
  rect(s, W - m - 120, y, 120, 4, th.accent);
  const y0 = g.panelH + 56; T(s, m, y0 + 14, W - 2 * m - 324, c.en, 28, th.text, { ar: false, tr: 25 }); bottomBlock(s, g, th, y0); }
function slideOffer(s, g, th) { const { W, m } = g, c = COPY.Offer; const lb = panelCommon(s, g, th); const x = 248, w = W - m - x; let y = lb + 36;
  T(s, x, y, w, c.eyebrow, 24, th.accent, { bold: true, cs: 1 }); y += 48;
  const big = g.panelH < 700 ? 150 : 190; T(s, x, y, w, c.big, big, th.accent, { bold: true, lh: 1.0 }); y += big + 8;
  T(s, x, y, w, c.h1, 56, P.white, { bold: true, lh: 1.15 }); y += 56 * 1.15 + 16;
  T(s, x, y, w, c.cond, 22, P.white, { tr: 25 });
  const y0 = g.panelH + 56; T(s, m, y0 + 14, W - 2 * m - 324, c.en, 28, th.text, { ar: false, tr: 25 }); bottomBlock(s, g, th, y0); }
function slideProperty(s, g, th) { const { W, H, m, top, panelH, logoH } = g, c = COPY.Property;
  rect(s, 0, 0, W, H, th.bg); const ov = 0.04; img(s, `${ASSET}/photo_${W}x${panelH}.png`, -W * ov, -panelH * ov, W * (1 + 2 * ov), panelH * (1 + 2 * ov)); const gh = Math.round(panelH * 0.65); img(s, `${ASSET}/gradv_${W}x${gh}.png`, -W * ov, panelH - gh, W * (1 + 2 * ov), gh);
  const lw = logoH * AR_.stacked_neg; img(s, LOGO.stacked_neg, W - m - lw, top + m, lw, logoH);
  const x = m, w = W - 2 * m; let y = panelH - 72 - 24 - 60 * 1.15 - 16 - 76 * 1.15 - 44;
  T(s, x, y, w, c.eyebrow, 24, th.accent, { bold: true, cs: 1 }); y += 44;
  T(s, x, y, w, c.h1, 76, P.white, { bold: true, lh: 1.15 }); y += 76 * 1.15 + 16;
  T(s, x, y, w, c.h2, 60, P.white, { lh: 1.15 });
  const y0 = panelH + 56; T(s, m, y0 + 14, W - 2 * m - 324, c.en, 28, th.text, { ar: false, tr: 25 }); bottomBlock(s, g, th, y0); }
function slideSeasonal(s, g, th) { const { W, H, m, top, bot } = g, c = COPY.Seasonal; rect(s, 0, 0, W, H, th.panel);
  const logoH = g.logoH + 20, lw = logoH * AR_.stacked_neg; let y = top + m; img(s, LOGO.stacked_neg, (W - lw) / 2, y, lw, logoH); y += logoH + 48;
  const B = 69.4; const p = pat('field5x2', 5, 2, B); img(s, p.path, (W - p.w) / 2, y, p.w, p.h); y += p.h + 56;
  T(s, m, y, W - 2 * m, c.h1, 96, th.accent, { bold: true, align: 'center', lh: 1.15 }); y += 96 * 1.15 + 20;
  T(s, m, y, W - 2 * m, c.en, 30, P.white, { ar: false, align: 'center', cs: 3 }); y += 30 * 1.25 + 28;
  T(s, m, y, W - 2 * m, c.sub, 26, P.white, { align: 'center', tr: 20 });
  const [n, sw] = fit(W - 48, B); const sp = pat(`strip${n}`, n, 1, B); img(s, sp.path, (W - sw) / 2, H - bot - 24 - B, sp.w, sp.h); }
function slideChecklist(s, g) { const { W, H, m, top } = g; rect(s, 0, 0, W, H, 'F5F2EE'); let y = top + m;
  T(s, m, y, W - 2 * m, 'قائمة ما قبل النشر — احذف هذه الصفحة قبل التصدير', 34, P.black, { bold: true }); y += 70; rect(s, W - m - 120, y, 120, 4, '8E732A'); y += 36;
  const size = H > 700 ? 22 : 16; CHECK.forEach(l => { T(s, m, y, W - 2 * m, '☐  ' + l, size, P.black, { lh: 1.4 }); y += size * 1.9; }); }
function slideLand(fam, s, g, th) { const { W, H, m } = g, c = COPY[fam]; const PW = 700, px = W - PW;
  if (fam === 'Seasonal') { rect(s, 0, 0, W, H, th.panel); const lw = 300, lh = lw / AR_.left_neg; img(s, LOGO.left_neg, (W - lw) / 2, 48, lw, lh); let y = 48 + lh + 24;
    const p = pat('field7x1', 7, 1, 46); img(s, p.path, (W - p.w) / 2, y, p.w, p.h); y += p.h + 28;
    T(s, m, y, W - 2 * m, c.h1, 72, th.accent, { bold: true, align: 'center', lh: 1.1 }); y += 72 * 1.1 + 12;
    T(s, m, y, W - 2 * m, c.en, 24, P.white, { ar: false, align: 'center', cs: 3 }); y += 24 * 1.25 + 14;
    T(s, m, y, W - 2 * m, c.sub, 20, P.white, { align: 'center', tr: 20 }); return; }
  rect(s, 0, 0, W, H, th.bg);
  if (fam === 'Property') { img(s, `${ASSET}/photo_700x628.png`, px - 14, -14, PW + 28, H + 28); img(s, `${ASSET}/gradh_700x628.png`, px - 14, -14, PW + 28, H + 28); }
  else { rect(s, px, 0, PW, H, th.panel); const [rows] = fit(H - 48, 46); const p = pat(`colL${rows}`, 2, rows, 46); img(s, p.path, px + 24, 24, p.w, p.h); }
  const lw = 300, lh = lw / AR_.left_neg; img(s, LOGO.left_neg, W - m - lw, 40, lw, lh);
  const x = px + 150, w = W - m - x; let y = 40 + lh + 28;
  if (fam === 'Offer') { T(s, x, y, w, c.eyebrow, 18, th.accent, { bold: true, cs: 1 }); y += 36; T(s, x, y, w, c.big, 120, th.accent, { bold: true, lh: 1.0 }); y += 126; T(s, x, y, w, c.h1, 40, P.white, { bold: true, lh: 1.15 }); y += 40 * 1.15 + 10; T(s, x, y, w, c.cond, 16, P.white, { tr: 25 }); }
  else { T(s, x, y, w, c.eyebrow, 18, th.accent, { bold: true, cs: 1 }); y += 40; T(s, x, y, w, c.h1, 54, P.white, { bold: true, lh: 1.15 }); y += 54 * 1.15 + 10; T(s, x, y, w, c.h2, 40, P.white, { lh: 1.15 }); y += 40 * 1.15 + 20; rect(s, W - m - 100, y, 100, 4, th.accent); }
  const lx = m, lw_ = px - 2 * m, oy = 78;   // left block centred vertically above the strip
  T(s, lx, 56 + oy, lw_, c.en, 18, th.text, { ar: false, tr: 25 });
  rect(s, lx, 104 + oy, 240, 54, th.accent); T(s, lx, 118 + oy, 240, CTA, 19, P.black, { ar: false, align: 'center', bold: true });
  const gap = 12, cw = (lw_ - gap) / 2;
  CHIPS.forEach((ch, i) => { const cx = lx + (cw + gap) * (1 - i % 2), cy = 194 + oy + Math.floor(i / 2) * (54 + gap); rect(s, cx, cy, cw, 54, 'none', { line: th.accent, lineW: 1.5 }); T(s, cx, cy + 13, cw, ch, 20, th.text, { align: 'center', bold: true }); });
  T(s, lx, 352 + oy, lw_, TAG_EN.replace(/  ·  /g, ' · '), 12, th.text, { ar: false, tr: 40 });
  const [n] = fit(lw_, 46); const sp = pat(`stripL${n}`, n, 1, 46); img(s, sp.path, lx, H - 24 - 46, sp.w, sp.h); }

async function build(fmt, theme) {
  const g = geometry(fmt), th = THEMES[theme]; const pres = new pptxgen();
  pres.defineLayout({ name: 'ADIG', width: I(g.W), height: I(g.H) }); pres.layout = 'ADIG'; pres.title = `ADIG_Social_${fmt}_${theme}`;
  const mk = () => { const s = pres.addSlide(); s._pres = pres; return s; };
  if (g.land) { for (const fam of ['Announcement', 'Offer', 'Property', 'Seasonal']) slideLand(fam, mk(), g, th); }
  else { slideAnnouncement(mk(), g, th); slideOffer(mk(), g, th); slideProperty(mk(), g, th); slideSeasonal(mk(), g, th); }
  slideChecklist(mk(), g);
  const d = `${OUT}/${fmt}`; fs.mkdirSync(d, { recursive: true });
  await pres.writeFile({ fileName: `${d}/ADIG_Social_${fmt}_${theme}.pptx` });
}
(async () => {
  const only = process.argv.includes('--test');
  for (const fmt of Object.keys(FORMATS)) for (const theme of Object.keys(THEMES)) { if (only && !(fmt === 'Portrait' && theme === 'Default_Light')) continue; await build(fmt, theme); }
  console.log('done');
})();
