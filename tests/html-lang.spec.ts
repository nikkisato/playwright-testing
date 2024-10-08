import { test, expect } from '@chromatic-com/playwright';

test('html has a lang attribute', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  // Wait for the HTML element to appear on the page
  const htmlElement = await page.waitForSelector('html');

  // Get the value of the lang attribute
  const langAttribute = await htmlElement.evaluate((html) => html.getAttribute('lang'));

  // Check if the lang attribute exists and is not null or empty
  expect(langAttribute).toBeTruthy();
});
