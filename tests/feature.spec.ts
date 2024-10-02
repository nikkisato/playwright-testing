import { test, expect } from '@chromatic-com/playwright';

// Test the Feature Link is present
test.describe('Feature Link from Homepage', () => {
  test('Access Homepage', async ({ page }) => {
    await page.goto('/');
  });

  test('Access Feature Button using keyboard tab', async ({ page }) => {
    // go to the page
    await page.goto('/');

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the Feature Link
    const featureLink = await page.waitForSelector('[data-testid="feature-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await featureLink.press('Enter');

    // this will lead us to the Feature Page!
    expect(page.url()).toBe('/feature');
  });
});

// Test the Feature Link is present
test.describe('Feature Link from Contact', () => {
  test('Access Contact Page', async ({ page }) => {
    await page.goto('/contact');
  });

  test('Access Contact Button using keyboard tab', async ({ page }) => {
    // go to the page
    await page.goto('/contact');

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the Feature Link
    const contactLink = await page.waitForSelector('[data-testid="contact-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await contactLink.press('Enter');

    // this will lead us to the Feature Page!
    expect(page.url()).toBe('/contact');
  });
});
