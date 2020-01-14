import Service from '@ember/service';
import { computed } from '@ember/object';
import { inject as service} from '@ember/service';

export default Service.extend({

    store: service(),
    session: service(),
    cartId: null,

    emptyCart: computed('total', function(){
      if(this.total === 0){
        return true
      }
      else{
        return false
      }
    }),

    async add(bookId){
        let addBook = this.store.createRecord('books_cart', {book_id: bookId, cart_id: this.cartId})
        await addBook.save()
        this.getCart()
    },

    getCart(){
      let current_user = this.session.data.authenticated.id
      return this.store.queryRecord('cart', {user_id: current_user})
    },

    remove(bookId){
      this.store.query('books_cart', {filter: {book_id: bookId, cart_id: this.cartId}}, {backgroundReload: false}).then(function(book){
        book.forEach(function(b){
          b.destroyRecord();
        })
      })
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
