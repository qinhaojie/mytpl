import Vue from 'vue'
import Router from 'vue-router'
import workspace from '@/components/workspace'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'workspace',
      component: workspace
    }
  ]
})
