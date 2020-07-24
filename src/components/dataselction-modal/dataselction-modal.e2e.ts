import { newE2EPage } from '@stencil/core/testing';

describe('dataselction-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dataselction-modal></dataselction-modal>');

    const element = await page.find('dataselction-modal');
    expect(element).toHaveClass('hydrated');
  });
});
