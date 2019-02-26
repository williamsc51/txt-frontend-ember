import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | users/catalog', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:users/catalog');
    assert.ok(route);
  });
});
