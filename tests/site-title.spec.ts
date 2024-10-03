import { test, expect } from '@chromatic-com/playwright';

test('has Site title', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await expect(page).toHaveTitle(/Playwright Test/);
});
