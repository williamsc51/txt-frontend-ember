import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'txt-frontend-ember/config/environment';

export default Controller.extend({
    cart: service(),
    session: service(),
    ajax: service(),


  actions: {

    payment(){
        let total = this.cart.roundedTotal
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total
            }
          }]
        });
    },

    removeItem(bookId){
      this.cart.remove(bookId);
    },

    clear(){
      this.cart.clear();
    },

    processStripeToken({card, email, id}){
      return this.ajax.request(`${ENV.host}/api/v1/purchase`,{
        method: 'POST',
        data: { 
          card, 
          email, 
          id, 
          amount: this.cart.total, 
          user_id: this.session.data.authenticated.id
        }
      })
    }

  },

});
