import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['class'],

  actions: {
    onClick() {
      this.onClickHandler();
    }
  }
});
