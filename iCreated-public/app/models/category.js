import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  /**
   * Name of category
   *
   * @property name
   * @type {String}
   */
  name: attr('string'),

  /**
   * Number of items in each category
   *
   * @property itemCount
   * @type {Number}
   */
  itemCount: attr('number'),

  /**
   * Relationship of one category with many items
   *
   * @property items
   * @type DS.PromiseManyArray
   */
  items: hasMany('items')
});
