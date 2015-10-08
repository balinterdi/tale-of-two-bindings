import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRating(params) {
      const { item: band, rating } = params;
      band.set('rating', rating);
    },

    saveBand() {
      const band = this.get('model');
      return band.save().then(() => {
        console.log("Band is saved");
      });
    }
  }
});
