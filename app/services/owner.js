import Service from '@ember/service';
//import { computed } from '@ember/object';

export default Service.extend({


    edit(currentUser, userID){
        if(currentUser == userID){
            return true;
        }
        else{
            return false;
        }
    }
   
});
