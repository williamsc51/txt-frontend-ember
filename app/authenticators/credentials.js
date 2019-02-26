import Base from 'ember-simple-auth/authenticators/base';
import { inject as service} from '@ember/service';

export default Base.extend({

  ajax: service(),

  async restore(data) {
    return data;
  },

  async authenticate(username, password) {
     let response = await this.ajax.post('/api/v1/token', {headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      data: JSON.stringify({
        username,
        password
      })
    })
    let { id, email, authentication_token } = response;
    return { id, email, authentication_token };
  }
});
