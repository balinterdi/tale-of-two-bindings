import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  band: null,
  errors: null,
  "on-update": null,

  actions: {
    saveBand() {
      this.attrs['on-save']();
    },

    nameDidChange(value) {
      this.attrs['on-update']('name', value);
    },
    titleDidChange(value) {
      this.attrs['on-update']('title', value);
    },
    ratingDidChange(params) {
      const { rating } = params;
      this.attrs['on-update']('rating', rating);
    },
  }
});
