<template>
  <div>
    <Table @modalData="modalData" />
    <Modals
      v-if="modalShow"
      :component="modalId"
      :modal-id="modalId"
      :modalShow="modalShow"
      :employeeDetails="details"
      :modal-title="modalTitle"
      :modal-size="modalSize"
      :modal-close-on-backdrop="modalCloseOnBackdrop"
    />
  </div>
</template>

<script>
import Table from '@/components/Employee/Layouts/Table.vue';
import Modals from '@/components/Shared/Employee/Modal.vue';

export default {
  components: {
    Table,
    Modals
  },
  data() {
    return {
      details: {},
      modalShow: false,
      modalId: '',
      modalTitle: '',
      modalSize: 'md',
      modalCloseOnBackdrop: true
    };
  },
  mounted() {
    // close modal when user click outside the modal
    this.$root.$on('bv::modal::hide', () => {
      this.modalShow = false;
    });
  },
  methods: {
    modalData(data, modalId, modalTitle, modalSize, modalCloseOnBackdrop) {
      this.modalShow = true;
      this.details = data;
      this.modalId = modalId;
      this.modalTitle = modalTitle;
      this.modalSize = modalSize;
      this.modalCloseOnBackdrop = modalCloseOnBackdrop;
    }
  }
};
</script>