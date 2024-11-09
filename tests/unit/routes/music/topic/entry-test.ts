import { module, test } from 'qunit';
import { setupTest } from 'snapp-web/tests/helpers';

module('Unit | Route | music/topic/entry', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:music/topic/entry');
    assert.ok(route);
  });
});
