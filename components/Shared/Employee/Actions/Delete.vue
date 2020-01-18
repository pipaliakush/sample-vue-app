<template>
  <div>
    <b-form @submit.prevent="deleteEmployee">
      <p class="text-center">Are you sure you want to delete this Employee data?</p>
      <div class="text-center mt-4 mb-1">
        <b-button type="submit" variant="primary">
          Delete Employee&nbsp;
          <b-spinner v-if="isShow" small></b-spinner>
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { removeEmployee } from '@/mixins/deleteEmp.js';

export default {
  props: {
    employeeId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  mixins: [removeEmployee],
  methods: {
    deleteEmployee() {
      this.removeEmployee();
    }
  }
};
</script>
