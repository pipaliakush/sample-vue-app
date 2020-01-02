<template>
  <div>
    <b-form @submit.prevent="addEmployee">
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
          Add Employee&nbsp;
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
        name: '',
        salary: null,
        age: null
      },
      isShow: false
    };
  },
  methods: {
    addEmployee() {
      this.isShow = true;
      this.$store
        .dispatch('addEmployee', this.employeeForm)
        .then(() => {
          this.$store
            .dispatch('getEmployee')
            .then(() => {
              this.$toasted.success('Employee Added Succesfully', {
                duration: 4000
              });

              this.isShow = false;
              // close modal after employee add successfully
              this.$root.$emit('bv::hide::modal', 'Add');
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
