<template>
  <div class="yellow lighten-3 pa-3">
    <h3>You can change the user info</h3>
    <p>Change item</p>
    <v-text-field label="Name" v-model="user.name"></v-text-field>
    <v-text-field label="Address" v-model="user.address"></v-text-field>
    <v-text-field label="Phone" v-model="user.phone"></v-text-field>
    <v-radio-group v-model="user.hasDog">
      <v-radio label="Has a dog" :value="true"></v-radio>
      <v-radio label="Has not a dog" :value="false"></v-radio>
    </v-radio-group>
    <v-btn color="success" @click="changeUser">Edit</v-btn>
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
  methods: {
    changeUser() {
      this.$emit("child", this.user);
    },
  },
};
</script>
