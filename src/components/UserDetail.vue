<template>
  <div class="red lighten-3 pa-3">
    <h3>Confirm the detail user infomation</h3>
    <p>{{ name }}</p>
    <v-list dense>
      <v-list-item>
        <v-list-item-content> Name:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ name }}
        </v-list-item-content></v-list-item
      >
      <v-list-item
        ><v-list-item-content> Address:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ address }}
        </v-list-item-content></v-list-item
      >
      <v-list-item>
        <v-list-item-content> Phone:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ phone }}
        </v-list-item-content></v-list-item
      >
      <v-list-item
        ><v-list-item-content> hasDog:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ ishasDog }}
        </v-list-item-content></v-list-item
      >
    </v-list>
  </div>
</template>
<script>
export default {
  props: ["name", "address", "phone", "hasDog"],
  computed: {
    ishasDog() {
      return this.hasDog === true ? "Yes" : "No";
    },
  },
};
</script>
