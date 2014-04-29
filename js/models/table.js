RestOrder.Table = DS.Model.extend({
  foods: DS.hasMany('food'),
  number: DS.attr(),
  bill: DS.attr(),
  server: DS.attr(),
  selected: DS.attr()
});

RestOrder.Table.FIXTURES = [
  {
    id: 1,
    number: 1,
    bill: function(){
      var total = 0

      foods.forEach(function(f) {
        console.log(f.get('name'))
        total += f.price
      });
      console.log(total)

      return total;
    }.property('foods'),
    server: 'Alice',
    selected: false
  },
  {
    id: 2,
    number: 2,
    bill: 22,
    server: 'Bob',
    selected: false
  },
  {
    id: 3,
    number: 3,
    bill: 0,
    server: null,
    selected: false
  }
];


