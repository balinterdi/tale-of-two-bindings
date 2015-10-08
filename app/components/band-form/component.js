import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  band: null,
  errors: null,
  "on-star-click": null,

  actions: {
    saveBand() {
      this.attrs['on-save']();
    }
  }
});
