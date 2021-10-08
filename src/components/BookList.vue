<script>
import shop from "../api/shop";
export default {
  name: "BookList",
  computed: {
    book() {
      return this.$store.state.books;
    },
  },
  created() {},
};
</script>
<style></style>
