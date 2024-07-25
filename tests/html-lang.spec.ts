import { test, expect } from '@playwright/test';

test('html has a lang attribute', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Wait for the HTML element to appear on the page
  const htmlElement = await page.waitForSelector('html');

  // Get the value of the lang attribute
  const langAttribute = await htmlElement.evaluate((html) => html.getAttribute('lang'));

  // Check if the lang attribute exists and is not null or empty
  expect(langAttribute).toBeTruthy();
});
