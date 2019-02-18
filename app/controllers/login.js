import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  session: service(),
  email: '',
  password: '',

  actions: {
    async signIn(event){
      event.preventDefault();
      let { email, password } = this;

      await this.get('session').authenticate('authenticator:credentials', email, password);

      await this.transitionToRoute('users.profile');
    }
  }
});
