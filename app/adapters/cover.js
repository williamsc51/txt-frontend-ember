import DS from 'ember-data';
import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';

export default DS.JSONAPIAdapter.extend(FormDataAdapterMixin, {
});
