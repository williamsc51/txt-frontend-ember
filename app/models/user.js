import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.hasMany('book'),

  fname: DS.attr('string'),
  lname: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});
