import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  band: null,
  "on-save": null,

  name:    null,
  year:    null,
  rating:  null,
  errors:  null,

  hasValidName: Ember.computed.notEmpty('name'),
  hasErrors: Ember.computed.not('hasValidName'),

  setupErrors: Ember.on('init', function() {
    this.set('errors', Ember.Object.create());
  }),

  validate() {
    this.set('errors.name', this.get('hasValidName') ? null : "Name is required.");
  },

  resetOnInit: Ember.on('init', function() {
    this.resetFromBand();
  }),

  resetFromBand() {
    ['name', 'year', 'rating'].forEach((field) => {
      const valueInBand = this.get('band').get(field);
      this.set(field, valueInBand);
    });
  },

  updateField(field, value) {
    this.set(field, value);
  },

  actions: {
    saveBand() {
      this.validate();
      if (this.get('hasErrors')) {
        return;
      }

      return this.attrs['on-save'](this.getProperties(['name', 'year', 'rating']));
    },

    nameDidChange(value) {
      this.updateField('name', value);
    },
    yearDidChange(value) {
      this.updateField('year', value);
    },
    ratingDidChange(params) {
      const { rating } = params;
      this.updateField('rating', rating);
    },
    reset() {
      this.resetFromBand();
    }
  }
});
