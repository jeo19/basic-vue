<template>
  <div class="yellow lighten-3 pa-3">
    <h3>You can change the user info</h3>
    <p>Change item</p>
    <v-text-field label="Regular" v-model="user.name"></v-text-field>
  </div>
</template>
<script>
export default {
  props: ["name", "address", "phone", "hasDog"],
  data() {
    return { user: {} };
  },
  created() {
    this.user.name = this.name;
    this.user.address = this.address;
    this.user.phone = this.phone;
    this.user.hasDog = this.hasDog;
  },
};
</script>
