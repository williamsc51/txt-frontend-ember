import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  book: DS.belongsTo(),
  cart: DS.belongsTo(),

  book_id: DS.attr('number'),
  cart_id: DS.attr('number')
});
