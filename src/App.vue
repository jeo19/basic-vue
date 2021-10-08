<template>
  <div id="app">
    Parent counter:{{ getCounter }}
    <button @click="addCounter({ add: 10, sub: 15 })">+</button>
    <button @click="subCounter">-</button>
    <child></child>
  </div>
</template>
<script>
import Child from "./Child.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  components: {
    child: Child,
  },

  computed: mapGetters({
    getCounter: "getCounter",
  }),

  methods: {
    addCounter() {
      this.$store.dispatch("addCounter");
    },
    ...mapMutations(["subCounter"]),
  },
};
</script>
