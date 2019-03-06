import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import OrderedList from '@/components/OrderedList.vue'

describe('OrderedList', function () {
  let wrp;

  const routes = [
    { path: '/', name: 'index' }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(OrderedList, {
      localVue: localVue,
      router,
    });
  });
  test('is a Vue instance', () => {
    const wrapper = mount(OrderedList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // `it' and `expect's ready to go now.
});
