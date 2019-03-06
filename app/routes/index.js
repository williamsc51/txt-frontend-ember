import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model(){
    return RSVP.hash({
      novels: this.store.query('book', {filter: {category: 'novel'}}),
      college: this.store.query('book', {filter: {category: 'college'}})
    })
   
  },


})
