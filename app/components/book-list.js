import Component from '@ember/component';
import { inject as service} from '@ember/service';

export default Component.extend({
    cart: service(),
    actions: {
      addItem(book){
        this.cart.add(book);
      }
    }
});
