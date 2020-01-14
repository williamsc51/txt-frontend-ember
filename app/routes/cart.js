import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({

    session: service(),
    user: service(),
    
    model(){
        if(this.session.isAuthenticated){
            // return this.store.queryRecord('cart', {user_id: this.user.currentUser, include: 'books'})
            return this.store.query('books_cart', {filter: {cart_id: 3}, include: 'book'})
        }
    }


});
