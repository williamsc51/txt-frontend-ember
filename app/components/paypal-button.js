import Component from '@ember/component';

const { paypal } = window;

export default Component.extend({

    didRender(){
        this._super(...arguments);
        paypal.Buttons({
          createOrder: this.createPayment,
          onApprove: this.approvePayment
        }).render('#ppb');
    },
});
