import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({

    session: service(),
    cart: service(),
    

    model(){
        return this.modelFor('application');
    }

});
