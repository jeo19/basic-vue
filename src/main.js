import Vue from "vue";
//import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//import StatusComponent from "./Status";
import User from "@/components/User";

Vue.config.productionTip = false;
// Vue.component("AppStatus", StatusComponent);
// Vue.component("User", User);
export const eventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(User),
}).$mount("#app");
