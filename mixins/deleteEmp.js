export const removeEmployee = {
  methods: {
    removeEmployee() {
      this.isShow = true;
      this.$store
        .dispatch('deleteEmployee', this.employeeId)
        .then(() => {
          this.$store
            .dispatch('getEmployee')
            .then(() => {
              this.$toasted.success(`Employee Id ${this.employeeId} Deleted Succesfully`, {
                duration: 4000
              });

              this.isShow = false;
              // close modal after employee add successfully
              this.$root.$emit('bv::hide::modal', 'Delete');
            })
            .catch(() => { });
        })
        .catch(() => {
          this.isShow = false;
        });
    }
  }
}