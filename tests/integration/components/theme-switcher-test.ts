import { module, test } from 'qunit';
import { setupRenderingTest } from 'snapp-web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | theme-switcher', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ThemeSwitcher />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ThemeSwitcher>
        template block text
      </ThemeSwitcher>
    `);

    assert.dom().hasText('template block text');
  });
});
