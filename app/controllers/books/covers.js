/* eslint-disable no-console */
import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sendCover(){
            // event.preventDefault();
            const cover = document.getElementById('file-field').files[0];
            let newCover = this.store.createRecord('cover', {
                cover: cover
            });

            newCover.save();
           
        },

        cov(){
            let coverImage = this.store.findAll('cover');
            console.log(coverImage);
          }
    }
});
