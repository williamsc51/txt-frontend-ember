import { inject as service } from '@ember/service';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

export default ToriiAuthenticator.extend({
  torii: service(),

  authenticate(options) {
    return this._super('txt-rails', options);
  }
});
