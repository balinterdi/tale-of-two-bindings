import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['rating:desc'],
  sortedBands: Ember.computed.sort('model', 'sortProperties')
});
