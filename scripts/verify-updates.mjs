import { chromium } from 'playwright';

const BASE = process.argv[2] || 'https://law-oh.vercel.app';
const results = [];
const add = (name, ok, detail = '') =>
  results.push({ name, ok: ok ? '✅' : '❌', detail });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

async function checkPage(path) {
  const page = await ctx.newPage();
  const bads = [];
  page.on('response', r => { if (r.status() === 404) bads.push(`404 ${r.url()}`); });
  page.on('pageerror', e => bads.push(`err: ${e.message}`));
  const resp = await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
  return { page, status: resp.status(), bads };
}

// 1. Home
{
  const { page, status, bads } = await checkPage('/');
  add(`HOME status 200`, status === 200, String(status));
  add(`HOME no 404`, bads.length === 0, bads.join(' | '));

  const body = await page.locator('body').innerText();
  // Attorney section removed: should not have the "중국에서 자라온" headline
  add(
    `HOME attorney section REMOVED`,
    !body.includes('중국에서 자라온'),
    body.includes('중국에서 자라온') ? 'still present' : 'gone',
  );
  // Consult intake section still present
  add(
    `HOME #consult section exists`,
    (await page.locator('#consult').count()) > 0,
  );
  // Online-consult floating button → goes to #consult
  const onlineBtn = page.locator('a:has-text("온라인상담")').first();
  const href = await onlineBtn.getAttribute('href').catch(() => null);
  add(
    `HOME floating 온라인상담 → #consult`,
    href === '#consult',
    `href=${href}`,
  );
  await page.close();
}

// 2. Services
{
  const { page, status, bads } = await checkPage('/services');
  add(`SERVICES status 200`, status === 200, String(status));
  add(`SERVICES no 404`, bads.length === 0, bads.join(' | '));
  const onlineLink = page.locator('a:has-text("온라인 상담 접수")').first();
  const cnt = await page.locator('a:has-text("온라인 상담 접수")').count();
  add(`SERVICES 온라인 상담 접수 button exists`, cnt > 0, `count=${cnt}`);
  if (cnt > 0) {
    const h = await onlineLink.getAttribute('href');
    add(`SERVICES online-consult → /#consult`, h === '/#consult', `href=${h}`);
  }
  await page.close();
}

// 3. Cases
{
  const { page, status, bads } = await checkPage('/cases');
  add(`CASES status 200`, status === 200, String(status));
  add(`CASES no 404`, bads.length === 0, bads.join(' | '));
  const cnt = await page.locator('a:has-text("온라인 상담 접수")').count();
  add(`CASES 온라인 상담 접수 button exists`, cnt > 0, `count=${cnt}`);
  if (cnt > 0) {
    const h = await page.locator('a:has-text("온라인 상담 접수")').first().getAttribute('href');
    add(`CASES online-consult → /#consult`, h === '/#consult', `href=${h}`);
  }
  await page.close();
}

// 4. Hash-scroll: navigate from /services to /#consult and check scroll
try {
  const page = await ctx.newPage();
  await page.goto(BASE + '/services', { waitUntil: 'networkidle' });
  const btn = page.locator('a:has-text("온라인 상담 접수")').first();
  const found = (await page.locator('a:has-text("온라인 상담 접수")').count()) > 0;
  if (!found) {
    add(`NAV services→consult`, false, 'button not deployed yet');
  } else {
    await btn.click({ timeout: 5000 });
    await page.waitForTimeout(1200);
    const url = page.url();
    add(`NAV services→consult URL has #consult`, url.includes('#consult'), url);
    const inView = await page.locator('#consult').evaluate(el => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    }).catch(() => false);
    add(`NAV #consult scrolled into view`, inView);
  }
  await page.close();
} catch (e) {
  add(`NAV services→consult`, false, e.message.split('\n')[0]);
}

// 5. Top-bar phone/WeChat clickable
{
  const { page } = await checkPage('/');
  const phoneHref = await page.locator('a[href^="tel:"]').first().getAttribute('href').catch(() => null);
  add(`TOPBAR phone tel: link present`, phoneHref?.startsWith('tel:'), `href=${phoneHref}`);
  await page.close();
}

console.log('\n=== VERIFICATION ===');
for (const r of results) console.log(`${r.ok} ${r.name}${r.detail ? `  (${r.detail})` : ''}`);
const failed = results.filter(r => r.ok === '❌').length;
console.log(`\n${results.length - failed}/${results.length} passed\n`);
await browser.close();
process.exit(failed === 0 ? 0 : 1);
