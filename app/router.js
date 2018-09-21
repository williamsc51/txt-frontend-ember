import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', function() {
    this.route('new');
  });
  this.route('users', function() {
    this.route('profile');
  });

  this.route('index', { path: '/'} );
  this.route('sign-up');
  this.route('login');
});

export default Router;
