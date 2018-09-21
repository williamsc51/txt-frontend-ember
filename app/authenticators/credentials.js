import Base from 'ember-simple-auth/authenticators/base';
import { inject as service} from '@ember/service';

export default Base.extend({

  ajax: service(),

  restore() {
  },

  async authenticate(username, password) {
     let response = await this.ajax.post('/token', {headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      data: JSON.stringify({
        username,
        password
      })
    })
    let { email: userEmail, authentication_token } = response;
    return { userEmail, authentication_token };
  }
});
