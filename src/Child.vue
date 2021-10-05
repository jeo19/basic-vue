<template>
  <div>
    <hr />
    Child counter:{{ num }}
    <button>+</button>
    <button>-</button>
  </div>
</template>
<script>
export default {
  props: ["num"],
};
</script>
