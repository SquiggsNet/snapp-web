import { module, test } from 'qunit';
import { setupRenderingTest } from 'snapp-web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | album-display', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AlbumDisplay />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AlbumDisplay>
        template block text
      </AlbumDisplay>
    `);

    assert.dom().hasText('template block text');
  });
});
