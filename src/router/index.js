import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/remjs/index'
const rens = r => require.ensure([], () => r(require('@/components/remjs/index')), 'rens');
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'rens',
    component: rens
  }]
})
