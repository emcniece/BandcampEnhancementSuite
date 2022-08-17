const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');

const snapOptions = {
  widths: [480]
};

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-extensions-except=./',
      '--load-extension=./',
    ],
    defaultViewport: {
      width: 640,
      height: 640
    }
  });
  const page = await browser.newPage();
  await page.goto('https://halfpastvibe.bandcamp.com/album/vielen-dank', { waitUntil: 'networkidle2' });
  await page.waitForSelector('#trackInfoInner .volume.thumb')
  await page.waitForTimeout(2000)
  const output = await percySnapshot(page, 'Example Site', snapOptions);

  console.log(output)
  // Comment browser.close() to keep the testing window open when running with `node snapshots.js`
  await browser.close();
})();
