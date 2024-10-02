import { test, expect } from '@chromatic-com/playwright';

test('has Site title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright Test/);
});
