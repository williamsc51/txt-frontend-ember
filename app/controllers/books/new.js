import Controller from '@ember/controller';
import { inject as service} from '@ember/service';
import { get, set} from '@ember/object';
import { task } from 'ember-concurrency';


export default Controller.extend({

  session: service(),
  ajax: service(),
  selectedCondition: null,
  selectedCategory: null,

  uploadPhoto: task(function * (file) {
    let photo = this.store.createRecord('cover', {
      cover: get(file, 'name')
    });

    try {
      file.readAsDataURL().then(function (url) {
        if (get(photo, 'url') == null) {
          set(photo, 'url', url);
        }
      });

      let response = yield file.upload('/covers');
      set(photo, 'url', response.headers.Location);
      yield photo.save();
    } catch (e) {
      photo.rollback();
    }
  }).maxConcurrency(3).enqueue(),

  actions: {

    uploadImage(file) {
      get(this, 'uploadPhoto').perform(file);
    },

    setCondition(selected) {
       this.set('selectedCondition', selected);
    },

    setCategory(selected){
      this.set('selectedCategory', selected);
    },

    async createNewBook(event) {
        event.preventDefault();
        let currentUser = this.session.data.authenticated.id;
        let user = this.store.peekRecord('user', currentUser);

        let newBook = this.store.createRecord('book', {
          title: this.title,
          author: this.author,
          isbn: this.isbn,
          price: this.price,
          description: this.description,
          condition: this.selectedCondition,
          //cover: imageEncoding,
          category: this.selectedCategory,
          user: user
        });

         await newBook.save();
        // this.transitionToRoute('books.book.show', newBook);
      },
  }

});
