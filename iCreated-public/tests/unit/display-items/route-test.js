import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | display-items', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:display-items');
    assert.ok(route);
  });
});
