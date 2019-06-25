import Component from '@ember/component';

const { paypal } = window;

export default Component.extend({
    didRender(){
        this._super(...arguments);
        paypal.Buttons(this.payment).render('#ppb')
    },
});
