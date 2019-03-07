import Controller from '@ember/controller';
import { inject as service} from '@ember/service';

export default Controller.extend({
    cart: service(),
    actions: {
      addItem(book){
        this.cart.add(book);
      }
    }
});