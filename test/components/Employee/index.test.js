import Vuex from 'Vuex';
import BootstrapVue from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// component
import Index from '@/components/Employee/index.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

const wrapper = shallowMount(Index, {
  localVue
});

describe('Index.vue', () => {
  it('render html', async () => {
    expect(wrapper.find('[data-test="table"]').html()).toBe('<table-stub data-test="table"></table-stub>');
    expect(wrapper.find('[data-test="modal"]').exists()).toBe(false);

    wrapper.vm.$emit('modalData', {}, 'Add', 'Add Employee', 'md', false);
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('modalData')).toBeTruthy();
    expect(wrapper.find('[data-test="modal"]').exists()).toBe(false);

  });
});

