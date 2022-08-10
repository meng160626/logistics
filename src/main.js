import Vue from "vue";
import App from "./App";
import uView from "uni_modules/uview-ui";
import common from "@/static/js/common.js";
Vue.use(uView);

Vue.config.productionTip = false;

Vue.mixin({
  data: () => {
    return {
      opacity: 0
    };
  },
  methods: {
    ...common
  },
  onPageScroll: function (e) {
    if (e.scrollTop < 100) {
      this.opacity = Math.floor(e.scrollTop / 2) / 100;
    } else {
      this.opacity = 1;
    }
  },
});

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
