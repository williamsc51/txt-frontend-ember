import Service from '@ember/service';
import { computed } from '@ember/object';
import { inject as service} from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Service.extend({

    store: service(),
    session: service(),


    bookIds: storageFor('cart'),
    
    bookCount: computed('bookIds', 'count', function(){
      if(this.session.isAuthenticated){
        let bk = this.store.peekAll('book')
         return bk.length
      } else { return this.bookIds.length}
    }),

    books: computed('bookIds.[]', function(){

      if(this.get('bookIds.length') == 0){
          return []
      } else{
            return this.store.query('book', { filter: {id: this.get('bookIds.content')}} );
          } 
        
      }),

      emptyCart: computed('total', function(){

        if(this.total === 0){
          return true
        }
        else{
          return false
        }
      }),

       add(bookId){
        if(this.session.isAuthenticated){
          let current_user = this.session.data.authenticated.id
          return this.store.createRecord('cart', {user_id: current_user, include: 'books'}).catch(() => {
              let newCart = this.store.createRecord('cart', {
                  user_id: current_user
              });
              newCart.save();
          })
        }else{
            this.bookIds.addObject(bookId);
          }
      },

      remove(bookId){
         this.bookIds.removeObject(bookId); 
      },

      clear(){
        this.get('bookIds').clear()
      },

      bookPrices: computed.mapBy('books', 'price'),

      total: computed.sum('bookPrices'),

      roundedTotal: computed('total', function(){
        return this.get('total').toFixed(2)
      }),

      
      centsTotal: computed('total', function(){
        return this.get('total') * 100;
      })
});
