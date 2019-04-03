import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/components/' + file + '.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import('home')
    }
  ]
})
