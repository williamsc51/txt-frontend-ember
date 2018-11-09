import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {

    session: service(),

    model(){
      let currentUser = this.session.data.authenticated.id;
      return this.store.findRecord('user', currentUser);
    }
});
