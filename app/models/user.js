import DS from 'ember-data';

export default DS.Model.extend({
  books: DS.hasMany('book'),
  cart: DS.belongsTo('cart'),


  fname: DS.attr('string'),
  lname: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});
