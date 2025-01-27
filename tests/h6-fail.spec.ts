import { test, expect } from '@chromatic-com/playwright';

test('page has an H6', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const response = await page.waitForSelector('h6');

  expect(response).not.toBeNull();
});
