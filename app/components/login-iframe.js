import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import { bind } from '@ember/runloop';

export default Component.extend({

  session: service(),

  message: null,

  get iframeDocument() {
    return this.iframe.contentDocument;
  },

  updateIframeHeight() {
    if (this.iframeDocument && this.iframeDocument.readyState === 'complete') {
      this.iframe.style.height = `${this.iframeDocument.body.scrollHeight}px`;
    }
  },

  authenticate: task(function * () {
    try {
      yield this.session.authenticate('authenticator:txtrails');
      this.set('message', null);
    } catch (errorObject) {
      return errorObject;
    }
  }).drop().on('didInsertElement'),

  didInsertElement() {
    this._super(...arguments);

    this.set('iframe', document.getElementById('torii-iframe'));

    if (this.iframe) {
      this.set('boundUpdateIframeHeight', bind(this, this.updateIframeHeight));

      this.iframe.addEventListener('load', this.boundUpdateIframeHeight);
    }
  }
});
