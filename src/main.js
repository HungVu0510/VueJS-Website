import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
}).$mount("#app");
