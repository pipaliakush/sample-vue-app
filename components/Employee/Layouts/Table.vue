<template>
  <div>
    <b-button
      class="m-2 float-right"
      variant="primary"
      size="sm"
      @click="$emit('modalData', {}, 'Add', 'Add Employee', 'md', false)"
    >
      Add Employee&nbsp;
      <i class="fa fa-plus" aria-hidden="true"></i>
    </b-button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col" class="w-name">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Salary</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees.data" :key="employee.id">
          <th>{{employee.id}}</th>
          <td class="w-name">{{ employee.employee_name }}</td>
          <td>{{ employee.employee_age }}</td>
          <td>{{ employee.employee_salary }}</td>
          <td>
            <b-dropdown size="sm" variant="dark" toggle-class="text-decoration-none" no-caret>
              <template slot="button-content">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </template>
              <b-dropdown-item-button
                @click="$emit('modalData', employee, 'Update', 'Edit Employee Details', 'md', false)"
              >
                Update
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="$emit('modalData', employee, 'Delete', 'Delete Employee', 'md', false)"
              >
                Delete
                <i class="fa fa-trash" aria-hidden="true"></i>
              </b-dropdown-item-button>
            </b-dropdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    employees() {
      return this.$store.state.employee;
    }
  }
};
</script>

<style lang="scss">
.table tr {
  height: 80px;
}
.table th,
.table td {
  vertical-align: middle !important;
}
.w-name {
  width: 700px;
}
</style>