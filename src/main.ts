import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

export const vue = new Vue({
  render: h => h(App),
});

vue.$mount("#app");
