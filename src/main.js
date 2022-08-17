import Vue from "vue";
import App from "./App";
import uView from "uni_modules/uview-ui";
import common from "@/static/js/common.js";
import request from "@/static/js/request.js";
Vue.use(uView);

Vue.config.productionTip = false;

Vue.mixin({
  data: () => {
    return {
      opac: 0
    };
  },
  methods: {
    ...common,
    ...request
  },
  onPageScroll: function (e) {
    if (e.scrollTop < 100) {
      this.opac = Math.floor(e.scrollTop / 2) / 100;
    } else {
      this.opac = 1;
    }
  },
});

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
