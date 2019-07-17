import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'txt-frontend-ember/config/environment';

export default Controller.extend({
    cart: service(),
    session: service(),
    ajax: service(),

  actions: {

    async createPayPalOrder() {
      const res = await fetch(`${ENV.host}/api/v1/purchase/create_order`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = await res.json();
      return data.id;
    },

    async approvePayPalOrder(ordID) {
      const res = await fetch(`${ENV.host}/api/v1/purchase/capture_order`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          oID: ordID
        })
      });
      const details = await res.json();
      alert('Transaction funds captured from ' + details.payer.name.given_name);
    },

    removeItem(bookId){
      this.cart.remove(bookId);
    },

    clear(){
      this.cart.clear();
    },

    // processStripeToken({card, email, id}){
    //   return this.ajax.request(`${ENV.host}/api/v1/purchase`,{
    //     method: 'POST',
    //     data: { 
    //       card, 
    //       email, 
    //       id, 
    //       amount: this.cart.total, 
    //       user_id: this.session.data.authenticated.id
    //     }
    //   })
    // }

  },

});
