import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  year:     DS.attr('number'),
  rating:       DS.attr('number'),
  description:  DS.attr('string'),
});

