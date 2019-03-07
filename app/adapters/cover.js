import DS from 'ember-data';
import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';
import ENV from 'txt-frontend-ember/config/environment';

export default DS.JSONAPIAdapter.extend(FormDataAdapterMixin, {
    host: ENV.host,
    namespace: 'api/v1'
});
