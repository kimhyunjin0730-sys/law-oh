import { chromium } from 'playwright';

const URL = process.argv[2] || 'https://kimhyunjin0730-sys.github.io/law-oh/';
const EXPECTED_H1 = '형사·민사·출입국에서 명확한 해법을 제시합니다';
const TARGET_LEN = 4851;

const browser = await chromium.launch();
const page = await browser.newPage();

const failures = [];
const resources404 = [];
page.on('response', r => {
  if (r.status() === 404) resources404.push(`${r.status()} ${r.url()}`);
});
page.on('pageerror', e => failures.push(`pageerror: ${e.message}`));
page.on('requestfailed', r => failures.push(`requestfailed: ${r.url()} — ${r.failure()?.errorText}`));

const resp = await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
const pageStatus = resp?.status();

// h1
let h1Text = '';
try {
  h1Text = (await page.locator('h1').first().innerText({ timeout: 5000 })).trim();
} catch (e) {
  failures.push(`h1 not found: ${e.message}`);
}
const h1Ok = h1Text === EXPECTED_H1;

// body text metrics
const bodyText = await page.locator('body').innerText();
const raw = bodyText.length;
const noSpace = bodyText.replace(/\s+/g, '').length;
const grapheme = [...new Intl.Segmenter('ko', { granularity: 'grapheme' }).segment(bodyText)].length;

console.log(JSON.stringify({
  url: URL,
  pageStatus,
  h1: h1Text,
  h1Expected: EXPECTED_H1,
  h1Ok,
  bodyLen: { raw, noSpace, grapheme, target: TARGET_LEN },
  delta: { raw: raw - TARGET_LEN, noSpace: noSpace - TARGET_LEN, grapheme: grapheme - TARGET_LEN },
  resources404Count: resources404.length,
  resources404,
  otherFailures: failures,
}, null, 2));

await browser.close();
