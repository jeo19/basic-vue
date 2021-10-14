<template>
  <v-app>
    <v-main>
      <div class="indigo lighten-3 pa-3">
        <h1>User component</h1>
        <p>name:{{ name }}</p>
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
    };
  },
  methods: {
    changeName() {
      this.name = "evan yu";
    },
  },
};
</script>
