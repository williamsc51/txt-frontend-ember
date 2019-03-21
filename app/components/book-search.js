import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({

    globalSearch: service(),

    search: null,

    actions: {
        bookLookUp(event){
            event.preventDefault();
            this.globalSearch.find(this.search); 
        }
    }
});
