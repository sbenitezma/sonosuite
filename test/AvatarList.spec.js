import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import AvatarList from '@/components/AvatarList.vue'

describe('AvatarList', function () {
  let wrp;

  const routes = [
    { path: '/', name: 'index' }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(AvatarList, {
      localVue: localVue,
      router,
    });
  });
  test('is a Vue instance', () => {
    const wrapper = mount(AvatarList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // `it' and `expect's ready to go now.
});
