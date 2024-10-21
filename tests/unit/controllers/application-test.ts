import { module, test } from 'qunit';
import { setupTest } from 'snapp-web/tests/helpers';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });
});
