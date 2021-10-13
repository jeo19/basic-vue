<template>
  <v-app>
    <v-main>
      <div class="indigo lighten-3 pa-3">
        <h1>User component</h1>
        <p>name:{{ name }}</p>
        <v-btn color="green" @click="changeName">Change name</v-btn>
        <hr />
        <v-layout row wrap>
          <v-flex xs12 sm6
            ><UserDetail :nameOfChild="name"></UserDetail
          ></v-flex>
          <v-flex xs12 sm6><UserEdit></UserEdit></v-flex>
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
    };
  },
  methods: {
    changeName() {
      this.name = "evan yu";
    },
  },
};
</script>
