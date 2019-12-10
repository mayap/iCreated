import Component from '@ember/component';

export default Component.extend({
  actions: {
    showCategoryItems() {
      debugger;
      const currentCategory = this.category;

      this.showCategoryItems(currentCategory);
    }
  }
});
