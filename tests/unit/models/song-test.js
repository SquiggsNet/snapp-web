import { setupTest } from 'snapp-web/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | song', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('song', {});
    assert.ok(model, 'model exists');
  });
});
