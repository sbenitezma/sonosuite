import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import DetailList from '@/components/DetailList.vue'

describe('DetailList', function () {
  let wrp;

  const routes = [
    { path: '/', name: 'index' }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(DetailList, {
      localVue: localVue,
      router,
    });
  });
  test('is a Vue instance', () => {
    const wrapper = mount(DetailList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // `it' and `expect's ready to go now.
});
