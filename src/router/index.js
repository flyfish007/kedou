import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import('@/components/' + file + '.vue')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:_import('home')
    }
  ]
})
