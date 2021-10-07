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
