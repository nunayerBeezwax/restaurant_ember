RestOrder.BillController = Ember.ArrayController.extend({
  actions: {
    computeBill: function(table) {
      var total = 0;
      table.get('foods').forEach(function(){
        total += food.price
      });

      return total;
    }
  }
});
