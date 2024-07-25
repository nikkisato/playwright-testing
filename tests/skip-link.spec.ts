import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

// Test the Main Tag is present
test.describe('Skip Link', () => {
  test('get Main Link', async ({ page }) => {
    await page.goto('localhost:3000/');
    await page.getByTestId('main');
  });

  test('Access skip link using keyboard tab', async ({ page }) => {
    // go to the page
    await page.goto('localhost:3000/');

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the skip Link
    const skipLink = await page.waitForSelector('[data-testid="skip-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await skipLink.press('Enter');

    // this will lead us to the main Content!
    expect(page.url()).toBe('localhost:3000/#main');
  });
});
