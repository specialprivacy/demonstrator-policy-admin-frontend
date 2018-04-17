import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('get-label-from-value-in-collection', 'helper:get-label-from-value-in-collection', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{get-label-from-value-in-collection inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
