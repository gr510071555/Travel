import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import City from 'components/city/city'
import Detail from 'components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
