import Component from '@ember/component';

export default Component.extend({
  // classNameBindings: ['classNames'],

  actions: {
    onClick() {
      this.onClickHandler();
    }
  }
});
