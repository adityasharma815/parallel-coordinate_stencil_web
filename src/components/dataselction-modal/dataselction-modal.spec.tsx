import { newSpecPage } from '@stencil/core/testing';
import { DataselctionModal } from './dataselction-modal';

describe('dataselction-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DataselctionModal],
      html: `<dataselction-modal></dataselction-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <dataselction-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dataselction-modal>
    `);
  });
});
