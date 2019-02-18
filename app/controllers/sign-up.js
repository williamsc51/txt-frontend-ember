import Controller from '@ember/controller';

export default Controller.extend({

  fname:'',
  lname:'',
  email:'',
  password:'',

  actions: {
    async createNewUser(event){
      event.preventDefault();
      let newUser = this.store.createRecord('user', { fname: this.fname, lname: this.lname, email: this.email, password: this.password});

      await newUser.save();
      this.transitionToRoute('index');
    }
  }
});
