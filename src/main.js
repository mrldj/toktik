// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'jquery'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
