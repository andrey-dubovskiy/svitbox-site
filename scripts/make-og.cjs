// Social share cards (1200x630) for each page, in the site's poster style.
// Needs Playwright and the brand fonts as local files:
//   FONTS_DIR=/path/to/node_modules/@fontsource node scripts/make-og.cjs
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..'), pub = path.join(root, 'public');
const F = process.env.FONTS_DIR;
const font = (fam, file) => `url('file://${F}/${fam}/files/${file}')`;
const cards = {
  home: ['Бокс у Броварах', 'Боксерський клуб з 2012 року', 'img/club/profi-07-oholoshennia-peremohy.jpg', '50% 30%'],
  programy: ['Програми', 'Діти · дівчата · чоловіки · індивідуально', 'img/club/komanda-03-dity-z-poiasom-wbc.jpg', '50% 40%'],
  dity: ['Бокс для дітей і юніорів', 'Школа боксу з 5 років', 'img/club/fotosesiia-04-khlopchyk-chervona-rukavychka.jpg', '50% 40%'],
  divchata: ['Бокс для дівчат', 'Форма, впевненість, характер', 'img/club/trenuvannia-02-bokserka-lapy-trener.jpg', '40% 40%'],
  choloviky: ['Бокс для чоловіків', 'Сила, витривалість, ринг', 'img/club/fotosesiia-10-udar-po-hrushi.jpg', '45% 45%'],
  indyvidualno: ['Індивідуальні тренування', 'Один на один з тренером', 'img/club/trenuvannia-01-divchyna-lapy-trener.jpg', '45% 40%'],
  funktsionalni: ['Функціональні тренування', 'Сила й витривалість без спарингів', 'img/fit.jpg', '50% 50%'],
  rozklad: ['Розклад тренувань', 'Пн–Пт · групи за віком', 'img/club/turnir-05-yunory-z-medaliamy.jpg', '50% 40%'],
  tsiny: ['Ціни', 'Абонементи від 1800 грн', 'img/club/fotosesiia-07-bokser-kapiushon.jpg', '50% 35%'],
  kontakty: ['Контакти', 'СК «Манеж» · вул. Героїв України, 30', 'img/club/komanda-01-komanda-v-zali.jpg', '50% 45%'],
  treneri: ['Тренери і зал', 'Майстри спорту з боксу', 'img/coach.jpg', '58% 30%'],
  chempiony: ['Чемпіони', 'Пояси, титули й медалі', 'img/club/profi-01-chempion-try-poiasy-trener.jpg', '50% 25%'],
  vidhuky: ['Відгуки', '4,8 у Google · 46 відгуків', 'img/club/komanda-01-komanda-v-zali.jpg', '50% 45%'],
  events: ['Події клубу', 'Турніри, профі-бої, походи', 'img/club/profi-07-oholoshennia-peremohy.jpg', '50% 30%'],
  galereya: ['Галерея', 'Фото і відео клубу', 'img/club/komanda-08-dity-z-medaliamy-v-zali.jpg', '50% 45%'],
  'polityka-cookies': ['Політика cookie', 'Що зберігаємо в браузері', 'img/hero.jpg', '50% 40%'],
  polityka: ['Політика конфіденційності', 'Як ми бережемо ваші дані', 'img/hero.jpg', '50% 40%'],
};
const html = ([title, sub, img, pos]) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: D; font-style: italic; font-weight: 900; src: ${font('fira-sans-extra-condensed', 'fira-sans-extra-condensed-cyrillic-900-italic.woff2')}; unicode-range: U+0400-04FF; }
@font-face { font-family: D; font-style: italic; font-weight: 900; src: ${font('fira-sans-extra-condensed', 'fira-sans-extra-condensed-latin-900-italic.woff2')}; }
@font-face { font-family: M; font-weight: 500; src: ${font('ibm-plex-mono', 'ibm-plex-mono-cyrillic-500-normal.woff2')}; unicode-range: U+0400-04FF; }
@font-face { font-family: M; font-weight: 500; src: ${font('ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff2')}; }
* { box-sizing: border-box; margin: 0; }
body { width: 1200px; height: 630px; background: #050505; color: #f4f4f2; position: relative; overflow: hidden; font-family: M; }
.ph { position: absolute; right: 0; top: 0; width: 520px; height: 630px; background: #0a0a0a; }
.ph img { width: 100%; height: 100%; object-fit: cover; object-position: ${pos}; filter: grayscale(1) contrast(1.18) brightness(.92); }
.ph::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #050505 0%, rgba(5,5,5,0) 38%); }
.t { position: absolute; left: 64px; top: 56px; width: 700px; height: 470px; display: flex; flex-direction: column; justify-content: space-between; z-index: 2; }
.brand { font-size: 22px; letter-spacing: .02em; display: flex; align-items: center; gap: 14px; }
.brand i { width: 16px; height: 16px; background: #ff2936; display: inline-block; } .brand b { color: #ff2936; font-weight: 500; }
h1 { font-family: D; font-style: italic; font-weight: 900; text-transform: uppercase; line-height: .86; font-size: ${title.length > 16 ? 108 : 132}px; letter-spacing: -.005em; text-wrap: balance; }
.sub { font-size: 24px; text-transform: uppercase; letter-spacing: .03em; color: #a3a39e; }
.sub b { color: #f4f4f2; font-weight: 500; }
.ropes { position: absolute; left: 0; right: 0; bottom: 34px; display: flex; flex-direction: column; gap: 12px; z-index: 3; }
.ropes i { display: block; height: 7px; background: #e8e8e4; box-shadow: 0 6px 0 rgba(0,0,0,.55); } .ropes i:first-child { background: #ff2936; }
.grain { position: absolute; inset: 0; z-index: 4; opacity: .07; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E"); }
</style></head><body>
<div class="ph"><img src="file://${path.join(pub, img)}"></div>
<div class="t"><div class="brand"><i></i>СВІТ БОКСУ <b>©</b>2012</div><h1>${title}</h1><div class="sub"><b>Бровари</b> · ${sub}</div></div>
<div class="ropes"><i></i><i></i><i></i></div><div class="grain"></div>
</body></html>`;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  fs.mkdirSync(path.join(pub, 'og'), { recursive: true });
  for (const [key, card] of Object.entries(cards)) {
    const tmp = path.join(root, '.og-tmp.html'); fs.writeFileSync(tmp, html(card));
    await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150);
    await p.screenshot({ path: path.join(pub, 'og', key + '.jpg'), type: 'jpeg', quality: 86 });
    fs.unlinkSync(tmp); console.log('og/' + key + '.jpg');
  }
  await b.close();
})();
