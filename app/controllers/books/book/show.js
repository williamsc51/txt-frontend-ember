import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({

    session: service(),
    owner: service(),

    isOwner: computed('model.user.id', 'session.data.authenticated.id', function(){

        if(this.session.isAuthenticated){
            return this.owner.edit(this.get('session.data.authenticated.id'), this.get('model.user.id')) 
        }

    })


});
