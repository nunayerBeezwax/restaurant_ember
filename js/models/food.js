RestOrder.Food = DS.Model.extend({
  table: DS.hasMany('table'),
  name: DS.attr(),
  pic: DS.attr(),
  price: DS.attr()
});

RestOrder.Food.FIXTURES = [
  {
    id: 1,
    name: "pizza",
    pic: "img/pizza.bmp",
    price: 4
  },

  {
    id: 2,
    name: "caviar",
    pic: "img/caviar.jpg",
    price: 1000
  }
];
