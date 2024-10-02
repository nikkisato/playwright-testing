import { test, expect } from '@chromatic-com/playwright';
import AxeBuilder from '@axe-core/playwright';

test.describe('Axecon Contact', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page,
    baseURL,
  }) => {
    await page.goto(`${baseURL}/contact`);
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
