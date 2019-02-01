import Controller from '@ember/controller';

export default Controller.extend({
  showSearchBar: true,

  actions: {
    /**
     * Load search bar
     *
     * @method loadSearchBar
     */
    loadSearchBar() {
      this.toggleProperty('showSearchBar');
    }
  }
});
