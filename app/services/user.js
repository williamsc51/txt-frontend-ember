import Service from '@ember/service';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Service.extend({

  session: service(),

  currentUser: computed(function(){
    return this.session.data.authenticated.id
  })
});
