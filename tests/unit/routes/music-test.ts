import { module, test } from 'qunit';
import { setupTest } from 'snapp-web/tests/helpers';

module('Unit | Route | music', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:music');
    assert.ok(route);
  });
});
