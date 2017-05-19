// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import ElementUI from 'element-ui'
import Workspace from './components/workspace.vue'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('Workspace',Workspace)
// document.body.addEventListener('dragstart', () => {return false})
window.Vue = Vue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Workspace/>',
})
