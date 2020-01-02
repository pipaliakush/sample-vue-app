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
  methods: {
    deleteEmployee() {
      this.isShow = true;
      this.$store
        .dispatch('deleteEmployee', this.employeeId)
        .then(() => {
          this.$store
            .dispatch('getEmployee')
            .then(() => {
              this.$toasted.success('Employee Deleted Succesfully', {
                duration: 4000
              });

              this.isShow = false;
              // close modal after employee add successfully
              this.$root.$emit('bv::hide::modal', 'Delete');
            })
            .catch(() => {});
        })
        .catch(() => {
          this.isShow = false;
        });
    }
  }
};
</script>
