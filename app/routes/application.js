import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {

    model(){
        if(this.session.isAuthenticated){
            let current_user = this.session.data.authenticated.id
            return this.store.queryRecord('cart', {user_id: current_user, include: 'books'}).catch(() => {
                let newCart = this.store.createRecord('cart', {
                    user_id: current_user
                });
                newCart.save();
            })

        }
    }

});
