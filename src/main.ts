import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Select} form 'element-ui';
import service from "./utils/https";
import urls from "./utils/urls";

Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
Vue.prototype.$urls = urls; // 其他页面在使用 urls 的时候直接  this.$urls 就可以了

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
