import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    cart: service(),
  actions: {

    removeItem(bookId){
      this.cart.remove(bookId);
    },

    clear(){
      this.cart.clear();
    },

    processStripeToken(){

    }
  }
});
