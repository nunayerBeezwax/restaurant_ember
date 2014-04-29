RestOrder.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      var number = this.get('newTable');
      if(!number.trim()) { return; }

      var table = this.store.createRecord('table', {
        number: number,
        bill: 0,
        server: null
      });

      this.set('newTable', '');
      table.save();
    },
    tableSelect: function(table) {
      tables = this.store.find('table');

      tables.forEach(function(t) {
        t.set('selected', false);
      });

      var val = !table.get('selected')
      table.set('selected', val);
    },
    addFood: function(food) {
      tables.content.content.forEach(function(t){
        if (t.get('selected') === true) {
          t.get('foods').pushObject(food);
          t.save();
          console.log(t.get('foods'));
        };
      });
    }
  }
});
