import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    changeSearchTerm(event) {
      const newValue = event.target.value;

      this.triggerSearch(newValue);
    }
  }
});
