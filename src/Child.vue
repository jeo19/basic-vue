<template>
  <div>
    <hr />
    Child counter:{{ childCounter }}
    <button>+</button>
    <button>-</button>
  </div>
</template>
<script>
export default {
  computed: {
    childCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>
