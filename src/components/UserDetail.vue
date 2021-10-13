<template>
  <div class="red lighten-3 pa-3">
    <h3>Confirm the detail user infomation</h3>
    <p>{{ nameOfChild }}</p>
  </div>
</template>
<script>
export default {
  props: {
    nameOfChild: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },
};
</script>
