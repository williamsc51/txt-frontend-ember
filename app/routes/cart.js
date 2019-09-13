import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({

    session: service(),
    cart: service(),
    

    model(){
        if(this.session.isAuthenticated){
            let current_user = this.session.data.authenticated.id
            return this.store.queryRecord('cart', {user_id: current_user, include: 'books'})
        }
        else{
            return this.cart.books
        }
       
    }

});
