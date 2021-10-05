<template>
  <div id="app">
    Parent counter:{{ counter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <child v-bind:num="counter"></child>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    child: Child,
  },
  data() {
    return { counter: 0 };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    subCounter() {
      this.counter--;
    },
  },
};
</script>
