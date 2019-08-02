import Route from '@ember/routing/route';

export default Route.extend({
   queryParams: {
    searchTerm: true
  },

  model(params) {
    return this.store.query('item', { searchTerm: params.searchTerm });
  }
});
