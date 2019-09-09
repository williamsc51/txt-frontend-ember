import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo(),
    books: DS.hasMany('book', {async: true}),

    // user_id: DS.attr('number')
});
