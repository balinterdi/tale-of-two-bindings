import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['rating-panel'],

  rating:     0,
  maxRating:  5,
  item:       null,
  "on-click": null,

  stars: Ember.computed('rating', 'maxRating', function() {
    var rating = Math.round(this.get('rating'));
    var fullStars = this.starRange(1, rating, 'full');
    var emptyStars = this.starRange(rating + 1, this.get('maxRating'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  starRange: function(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  },

  actions: {
    set: function(newRating) {
      this.attrs['on-click']({
        item: this.get('item'),
        rating: newRating
      });
    }
  }
});
