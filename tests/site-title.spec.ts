import { test, expect } from '@playwright/test';

test('has Site title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Playwright Test/);
});
