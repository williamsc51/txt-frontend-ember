import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    
    session: service(),
   

    model(){
        return this.store.findRecord('cart', 15)
    }

});
