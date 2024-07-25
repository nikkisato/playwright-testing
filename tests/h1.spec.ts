import { test, expect } from '@playwright/test';

test('page has an H1', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const response = await page.waitForSelector('h1');

  expect(response).not.toBeNull();
});
