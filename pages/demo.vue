<template>
  <Employee />
</template>

<script>
import Employee from '@/components/Employee/index.vue';

export default {
  components: {
    Employee
  },
  async asyncData({ store }) {
    await store
      .dispatch('getEmployee')
      .then(() => {})
      .catch(() => {});
  }
};
</script>