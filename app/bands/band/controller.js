import Ember from 'ember';

export default Ember.Controller.extend({
  hasValidName: Ember.computed.notEmpty('model.name'),
  hasErrors: Ember.computed.not('hasValidName'),

  setupErrors: Ember.on('init', function() {
    this.set('errors', Ember.Object.create());
  }),

  validate() {
    this.set('errors.name', this.get('hasValidName') ? null : "Name is required.");
  },

  actions: {
    updateRating(params) {
      const { item: band, rating } = params;
      band.set('rating', rating);
    },

    saveBand() {
      this.validate();
      if (this.get('hasErrors')) {
        return;
      }

      const band = this.get('model');
      return band.save().then(() => {
        console.log("Band is saved");
      });
    }
  }
});
