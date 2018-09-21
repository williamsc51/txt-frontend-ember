import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),

  title: DS.attr('string'),
  author: DS.attr('string'),
  isbn: DS.attr('number'),
  price: DS.attr('number')
});
