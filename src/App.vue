<template>
  <div id="app">
    Parent counter:{{ parentCounter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <child></child>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    child: Child,
  },
  computed: {
    parentCounter() {
      return this.$store.state.counter;
    },
  },

  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    },
  },
};
</script>
