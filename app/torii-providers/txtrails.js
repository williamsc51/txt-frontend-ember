import Oauth2Bearer from 'torii/providers/oauth2-bearer';
import { computed } from '@ember/object';

export default Oauth2Bearer.extend({
  name: 'txtrails',
  baseUrl: '/oauth/authorize',

  responseParams: computed({
    get() {
      return ['token'];
    }
  }),
  
});

