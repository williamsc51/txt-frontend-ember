import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async createNewBook(event) {
        event.preventDefault();
        // this.modelFor('user');
        let user = this.store.peekRecord('user', 1);
        let newBook = this.store.createRecord('book', {
          title: this.title, author: this.title, isbn: 1234, price: 10.00, user: user
        });

        this.store.findRecord('user', 1).then(function(user) {
            newBook.set('user_id', user.id);
          });

        await newBook.save();

      }
  }

});
