import { test, expect } from '@chromatic-com/playwright';

test('page has an H1', async ({ page }) => {
  await page.goto('/');

  const response = await page.waitForSelector('h1');

  expect(response).not.toBeNull();
});
