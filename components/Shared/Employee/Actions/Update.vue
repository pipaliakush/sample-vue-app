<template>
  <div>
    <b-form @submit.prevent="updateEmployee">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="employeeForm.name"></b-form-input>
      </b-form-group>
      <!-- -->
      <b-form-group id="input-group-2" label="Salary:" label-for="input-2">
        <b-form-input id="input-2" v-model="employeeForm.salary"></b-form-input>
      </b-form-group>
      <!-- -->
      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input id="input-2" v-model="employeeForm.age"></b-form-input>
      </b-form-group>
      <!-- -->
      <div class="text-center mt-4 mb-1">
        <b-button type="submit" variant="primary">
          Update Details
          <b-spinner v-if="isShow" small></b-spinner>
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    employeeDetails: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      employeeForm: {
        name: this.employeeDetails.employee_name,
        salary: this.employeeDetails.employee_salary,
        age: this.employeeDetails.employee_age
      },
      isShow: false
    };
  },
  watch: {
    employeeDetails() {
      this.employeeForm.name = this.employeeDetails.employee_name;
      this.employeeForm.salary = this.employeeDetails.employee_salary;
      this.employeeForm.age = this.employeeDetails.employee_age;
    }
  },
  methods: {
    updateEmployee() {
      const data = {
        id: this.employeeDetails.id,
        employeeForm: this.employeeForm
      };
      this.isShow = true;
      this.$store
        .dispatch('updateEmployee', data)
        .then(() => {
          this.$store
            .dispatch('getEmployee')
            .then(() => {
              this.$toasted.success('Employee Updated Succesfully', {
                duration: 4000
              });

              this.isShow = false;
              // close modal after employee update successfully
              this.$root.$emit('bv::hide::modal', 'Update');
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
