import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service} from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

    user: service(),

    model(){
        if(this.session.isAuthenticated){
            return this.store.queryRecord('cart', {user_id: this.user.currentUser}).catch(() => {
                let newCart = this.store.createRecord('cart', {
                    user_id: this.user.currentUser
                });
                newCart.save();
            })        
        }
    },
});
