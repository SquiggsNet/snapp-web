import { module, test } from 'qunit';
import { setupTest } from 'snapp-web/tests/helpers';

module('Unit | Route | admin', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:admin');
    assert.ok(route);
  });
});
