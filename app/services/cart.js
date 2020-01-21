import Service from '@ember/service';
import { computed } from '@ember/object';
import { inject as service} from '@ember/service';

export default Service.extend({

    store: service(),
    session: service(),
    user: service(),
    cartID: null,

    createCart(){
      return this.store.createRecord('cart', {user_id: this.user.currentUser})
    },

    getCart(){
      return this.store.queryRecord('cart', {user_id: this.user.currentUser})
    },

    setCartID(cid){
      this.set('cartID', cid)
    },

    emptyCart: computed('total', function(){
      if(this.total === 0){
        return true
      }
      else{
        return false
      }
    }),

    async add(bookId){
        let addBook = this.store.createRecord('books_cart', {book_id: bookId, cart_id: this.cartID})
        await addBook.save()
        this.getCart()
    },

    remove(bookId){
      this.store.query('books_cart', {filter: {book_id: bookId, cart_id: this.cartID}}, {backgroundReload: false}).then((book)=>{
        book.forEach(async (b)=>{
          await b.destroyRecord();
          this.getCart()
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
