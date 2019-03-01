/* eslint-disable no-console */
import Controller from '@ember/controller';
import { inject as service} from '@ember/service';

export default Controller.extend({

  session: service(),

  selectedCondition: null,
  selectedCategory: null,

  actions: {

  sendCover(){  
      const cover = document.getElementById('file-field').files[0];
      let newCover = this.store.createRecord('cover', {
          cover: cover
      });
      newCover.save().then((data) => (this.set('url', data.cover.url)));
    },
    
    setCondition(selected) {
       this.set('selectedCondition', selected);
    },

    setCategory(selected){
      this.set('selectedCategory', selected);
    },

    async updateBook(event) {
        event.preventDefault();
        let book = this.model;
        if(this.url != null){
          book.set('thumbnail', this.url);
        }
        book.set('condition', this.selectedCondition);
        book.set('category', this.selectedCategory);

         await book.save();
         this.transitionToRoute('books.book.show', book);
      },
  }

});
