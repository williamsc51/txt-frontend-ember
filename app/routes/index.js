import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service} from '@ember/service';

export default Route.extend({

  splashscreenService: service('ember-cordova/splash'),

  model(){
    return RSVP.hash({
      novels: this.store.query('book', {filter: {category: 'novel'}}),
      college: this.store.query('book', {filter: {category: 'college'}})
    })
   
  },

  afterModel(){
    this.splashscreenService.hide();
  }


})
