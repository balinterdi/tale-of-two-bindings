import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  "on-star-click": null,

  actions: {
    saveBand() {
      this.attrs['on-save']();
    }
  }
});
