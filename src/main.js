// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import drag from './directive/drag'
Vue.config.productionTip = false
Vue.use(drag)

// document.body.addEventListener('dragstart', () => {return false})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
