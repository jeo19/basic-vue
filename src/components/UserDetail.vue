<template>
  <div class="red lighten-3 pa-3">
    <h3>Confirm the detail user infomation</h3>
    <p>Detail information</p>
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
      <v-list-item
        ><v-list-item-content> Edit Date:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ getDateAndTime(editedDate) }}
        </v-list-item-content></v-list-item
      >
    </v-list>
  </div>
</template>
<script>
import { eventBus } from "../main";
import { dateFormat } from "../mixins/dateFormat";
export default {
  data() {
    return { editedDate: null };
  },
  props: ["name", "address", "phone", "hasDog"],
  computed: {
    ishasDog() {
      return this.hasDog === true ? "Yes" : "No";
    },
  },
  created() {
    eventBus.$on("userWasEdited", (date) => {
      this.editedDate = date;
    });
  },
  methods: {},
  mixins: [dateFormat],
};
</script>
