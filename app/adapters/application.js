import DS from 'ember-data';
import ENV from 'txt-frontend-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.host,
    namespace: 'api/v1',
});
