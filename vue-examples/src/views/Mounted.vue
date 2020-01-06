<template>
  <div>
    <h1>Mounted lifecycle hook</h1>
    <div v-if="loading">
      Fetching data. This will disappear after 1sec
    </div>
    <div v-else>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      // note that this HAS to be an arrow function!!!
      this.message = "Data was loaded from somewhere";
      this.loading = false;
    }, 1000);
  }
};
</script>
