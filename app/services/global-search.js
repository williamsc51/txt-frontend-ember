import Service from '@ember/service';
import { inject as service} from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({

    store: service(),
    router: service(),
    search: null,
    
    find(sr){
        this.set('search', sr);
        this.router.transitionTo('search_result');  
    },

    books: computed('search', function(){
            return this.store.query('book', {filter: { title: this.search }})
    })
        
});
