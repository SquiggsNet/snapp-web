import EmberRouter from '@ember/routing/router';
import config from 'snapp-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('music', function () {
    this.route('topic', { path: '/:topic_id' }, function () {
      this.route('entry', { path: '/:entry_id' });
    });
  });
  this.route('admin');
  this.route('profile');
  this.route('settings');
  this.route('sign-out');
});
