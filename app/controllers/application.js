import Controller from '@ember/controller';
import { inject as service} from '@ember/service';
import { observer } from '@ember/object';

export default Controller.extend({
  
  cart: service(),
  // eslint-disable-next-line ember/no-observers
  currentCart: observer('model.id', function(){
    this.set('cart.cartId', this.model.id)
  }),
    
});
