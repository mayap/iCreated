import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    /**
     * willTransition route hook
     * Changes the value of showSearchBar controller property to false
     *
     * @method willTransition
     */
    willTransition() {
      this.controller.set('showSearchBar', false);
    },
  }
});
