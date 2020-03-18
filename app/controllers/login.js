import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { inject } from '@ember/controller';

export default Controller.extend({

  session: service(),
  appCont: inject('application'),
  email: '',
  password: '',

  actions: {
    async signIn(event){
      event.preventDefault();
      // let { email, password } = this;

      await this.get('session').authenticate('authenticator:txt-rails');

      this.appCont.refresher()
      
      this.transitionToRoute(this.session.authenticate.attemptedTransition);
    }
  }
});
