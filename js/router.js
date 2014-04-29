RestOrder.Router.map(function() {
  this.resource('tables', { path: '/' }), function() {
    this.route('food');
    this.route('bill');
  }
});

RestOrder.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('food').set('model', this.store.find('food'));
  }
});
