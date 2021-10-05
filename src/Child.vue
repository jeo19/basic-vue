<template>
  <div>
    <hr />
    Child counter:{{ getCounter }}
    <button>+</button>
    <button>-</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    getCounter: "getCounter",
  }),
};
</script>
