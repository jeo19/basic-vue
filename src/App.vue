<template>
  <div id="app">
    Parent counter:{{ getCounter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <child></child>
  </div>
</template>
<script>
import Child from "./Child.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    child: Child,
  },

  computed: mapGetters({
    getCounter: "getCounter",
  }),

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
