/* eslint-disable no-console */
import Controller from '@ember/controller';
import { inject as service} from '@ember/service';
//import { computed } from '@ember/object';

export default Controller.extend({

  session: service(),
  ajax: service(),
  selectedCondition: null,
  selectedCategory: null,

  actions: {

  sendCover(){
      // event.preventDefault();
      let url;
      const cover = document.getElementById('file-field').files[0];
      let newCover = this.store.createRecord('cover', {
          cover: cover
      });
      newCover.save().then((data) => (url = data.cover.url));
      return url; 
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
          thumbnail: this.cover_url,
          category: this.selectedCategory,
          user: user
        });

         await newBook.save();
         this.transitionToRoute('books.book.show', newBook);
      },
  }

});
