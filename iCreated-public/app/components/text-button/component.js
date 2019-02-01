import Component from '@ember/component';

export default Component.extend({
  actions: {
    /**
     * On click handler for the button
     *
     * @method onClick
     */
    onClick() {
      if (typeof this.onClickHandler === 'function') {
        this.onClickHandler();
      }
    }
  }
});
