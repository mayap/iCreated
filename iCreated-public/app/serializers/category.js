import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) {
    if (key === 'item-count') {
      return 'itemCount';
    }
    return key;
  }
});
