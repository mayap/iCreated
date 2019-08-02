import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  /**
   * Name of item
   *
   * @property name
   * @type {String}
   */
  name: attr('string'),

  /**
   * Description of item
   *
   * @property description
   * @type {String}
   */
  description: attr('string'),

  /**
   * Owner of item
   *
   * @property owner
   * @type {String}
   */
  owner: attr('string'),

  /**
   * description of item
   *
   * @property description
   * @type {String}
   */
  // colors: attr('string')
});
