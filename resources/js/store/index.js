import Vue from "vue";
import Vuex from "vuex";

import btc from "./modules/btc";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        btc
    }
});
