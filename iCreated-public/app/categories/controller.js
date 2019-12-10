import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showCategoryItems(currentCategory) {
      debugger;
      const currentCategoryId = currentCategory.id;
      // const categoryModel = this.modelFor('category');
      // this.store.findHasMany('category', currentCategoryId);
      this.store.findHasMany(this.get('model.categories'), 'hasMany', 'item', { currentCategoryId });
      const items = currentCategory.get('items');
      debugger;
    }
  }
});
