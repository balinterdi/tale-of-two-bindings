import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bands', { path: '/' }, function() {
    this.route('band', { path: 'bands/:id'});
  });
});

export default Router;
