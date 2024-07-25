import { test, expect } from '@playwright/test';

// Test the Contact Link is present
test.describe('Contact Link from Homepage', () => {
  test('Access Homepage', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Access Contact Button using keyboard tab', async ({ page }) => {
    // go to the page
    await page.goto('http://localhost:3000/');

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the Contact Link
    const contactLink = await page.waitForSelector('[data-testid="contact-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await contactLink.press('Enter');

    // this will lead us to the Contact Page!
    expect(page.url()).toBe('http://localhost:3000/contact');
  });
});

// Test the Feature Link is present
test.describe('Contact Link from Feature', () => {
  test('Access Feature Page', async ({ page }) => {
    await page.goto('http://localhost:3000/feature');
  });

  test('Access Contact Button using keyboard tab', async ({ page }) => {
    // go to the page
    await page.goto('http://localhost:3000/feature');

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the Contact Link
    const contactLink = await page.waitForSelector('[data-testid="contact-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await contactLink.press('Enter');

    // this will lead us to the Contact Page!
    expect(page.url()).toBe('http://localhost:3000/contact');
  });
});
