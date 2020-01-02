<template>
  <div>
    {{ component }}
    <b-modal
      v-if="modalShow"
      :id="modalId"
      v-model="isModalOpen"
      centered
      :title="modalTitle"
      hide-footer
      no-fade
      :size="modalSize"
      :no-close-on-backdrop="modalCloseOnBackdrop"
    >
      <component
        :is="component"
        :employee-id="employeeDetails.id"
        :modal-show="modalShow"
        :employeeDetails="employeeDetails"
      />
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {
    Update: () => import('@/components/Shared/Employee/Actions/Update.vue'),
    Add: () => import('@/components/Shared/Employee/Actions/Add.vue'),
    Delete: () => import('@/components/Shared/Employee/Actions/Delete.vue')
  },
  props: {
    component: {
      type: String,
      default: ''
    },
    modalId: {
      type: String,
      default: ''
    },
    employeeDetails: {
      type: Object,
      required: true
    },
    modalShow: {
      type: Boolean,
      default: false
    },
    modalTitle: {
      type: String,
      default: ''
    },
    modalSize: {
      type: String,
      default: 'md'
    },
    modalCloseOnBackdrop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isModalOpen: this.modalShow
    };
  },
  watch: {
    modalShow() {
      this.isModalOpen = this.modalShow;
    }
  }
};
</script>
