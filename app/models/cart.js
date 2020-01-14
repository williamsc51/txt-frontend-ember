import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo(),
    books: DS.hasMany(),

    user_id: DS.attr('number'),
    books_count: DS.attr('number')

});
