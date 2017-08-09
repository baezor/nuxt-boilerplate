import Vue from 'vue';
import Logo from '~/components/Logo';

describe('Logo.vue', () => {

  const Constructor = Vue.extend(Logo);
  const vm = new Constructor().$mount();

  it('should have class .logo', () => {
    expect(vm.$el.className.trim()).to.equal('logo');
  });
});
