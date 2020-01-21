import Controller from '@ember/controller';

export default Controller.extend({

  refresher(){
    this.send('refreshModel')
  }
    
});
