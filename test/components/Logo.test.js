import Vuex from 'Vuex';
import BootstrapVue from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// component
import Logo from '@/components/Logo.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

const wrapper = shallowMount(Logo, {
  localVue
});

describe('Logo.vue', () => {
  it('render html', () => {
    expect(wrapper.find('[data-test="path1"]').html()).toBe(`<path d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z" fill="#00C58E" data-test="path1"></path>`);

    expect(wrapper.find('[data-test="path2"]').html()).toBe(`<path d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z" fill="#108775" data-test="path2"></path>`);

    expect(wrapper.find('[data-test="path3"]').html()).toBe(`<path d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z" fill="#2F495E" fill-rule="nonzero" data-test="path3"></path>`);
  });
});