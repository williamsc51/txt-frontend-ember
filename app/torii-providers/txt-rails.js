/* globals URI */
import { computed, get } from '@ember/object';
import Oauth2Bearer from 'torii/providers/oauth2-bearer';
import config from 'txt-frontend-ember/config/environment';

export default Oauth2Bearer.extend({
  name:       'txt-rails',
  baseUrl:    '/oauth/authorize',

  // optionalUrlParams: computed({
  //   get() {
  //     return ['scf_login'];
  //   }
  // }),

  // responseParams: computed({
  //   get() {
  //     return ['token'];
  //   }
  // }),

  redirectUri: computed({
    get() {
      let toriiRedirectPath = get(config, 'APP.toriiRedirectPath');
      if (toriiRedirectPath) {
        return URI().resource(toriiRedirectPath);
      } else {
        return this._super();
      }
    }
  })
});

