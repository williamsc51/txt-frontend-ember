import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service} from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

    cart: service(),

    async model(){
        if(this.session.isAuthenticated){
            let cart = await this.cart.getCart()
            this.cart.setCartID(cart.id);
            return cart
        }
    },

    actions: {
        refreshModel(){
            this.refresh()
        }
    }

});
