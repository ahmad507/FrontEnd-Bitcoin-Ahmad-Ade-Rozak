require("./bootstrap");

window.Vue = require("vue").default;
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
import store from "./store";

Vue.component("app", require("./components/app/index.vue").default);
Vue.use(VueRouter);

const app = new Vue({
    router: new VueRouter(routes),
    store,
    el: "#app"
});
