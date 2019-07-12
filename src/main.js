// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// main.js
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader


Vue.use(Vuetify, {
 iconfont: 'fa'
})