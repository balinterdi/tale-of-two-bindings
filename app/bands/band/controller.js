import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveBand(properties) {
      const band = this.get('model');
      band.setProperties(properties);

      return band.save().then(() => {
        console.log("Band is saved");
      });
    }
  }
});
