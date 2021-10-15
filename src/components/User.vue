<template>
  <v-app>
    <v-main>
      <div class="indigo lighten-3 pa-3">
        <h1>User component</h1>
        <p>name:VueJS</p>
        <p>CreatedAt:{{ createdAt }}</p>
        <hr />
        <v-layout row wrap>
          <v-flex xs12 sm6
            ><UserDetail
              :name="name"
              :address="address"
              :phone="phone"
              :hasDog="hasDog"
            ></UserDetail
          ></v-flex>
          <v-flex xs12 sm6
            ><UserEdit
              :name="name"
              :address="address"
              :phone="phone"
              :hasDog="hasDog"
              v-on:child="parents"
            ></UserEdit
          ></v-flex>
        </v-layout>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "Kalacy",
      address: "Unite state Alabama,Birmingham",
      phone: "231-4321",
      hasDog: true,
      createdAt: null,
    };
  },
  created() {
    this.createdAt = this.getDateAndTime(new Date());
  },
  methods: {
    parents(user) {
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
    },
    getDateAndTime(date) {
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let fullDate = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
      return `${fullDate} ${hour}:${minutes}`;
    },
  },
};
</script>
