import { test, expect } from '@chromatic-com/playwright';

// Test the Homepage Link is present
test.describe('Homepage from Feature', () => {
  test('Access Feature Page', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/feature`);
  });

  test('Access Feature Button using keyboard tab', async ({ page, baseURL }) => {
    // go to the page
    await page.goto(`${baseURL}/feature`);

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the Homepage Link
    const homePageLink = await page.waitForSelector('[data-testid="homepage-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await homePageLink.press('Enter');

    // this will lead us to the Homepage Page!
    expect(page.url()).toBe('/');
  });
});

// Test the Feature Link is present
test.describe('Homepage from Contact', () => {
  test('Access Contact Page', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/contact`);
  });

  test('Access Homepage Button using keyboard tab', async ({ page, baseURL }) => {
    // go to the page
    await page.goto(`${baseURL}/contact`);

    // Hit Tab Key
    await page.keyboard.press('Tab');

    // Hopefully we are hitting tab until we get to the Homepage Link
    const homePageLink = await page.waitForSelector('[data-testid="homepage-link"]', {
      state: 'visible',
    });

    // Once it's visible we can press enter
    await homePageLink.press('Enter');

    // this will lead us to the Feature Page!
    expect(page.url()).toBe('/');
  });
});
