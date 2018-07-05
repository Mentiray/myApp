import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import cashier from '@/components/cashier/cashier'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
    	path: '/cashier',
    	name: 'cashier',
    	component: cashier
    }
  ]
})
