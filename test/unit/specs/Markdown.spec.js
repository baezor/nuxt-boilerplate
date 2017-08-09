import Vue from 'vue';
import Markdown from '~/components/markdown';

describe('Markdown.vue', () => {

  const Constructor = Vue.extend(Markdown);
  const vm = new Constructor().$mount();

  it('should show markdown__wrapper', () => {
    expect(vm.$el.className.trim()).to.equal('markdown__wrapper');
  });
});
