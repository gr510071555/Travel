import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import City from 'components/city/city'

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
    }
  ]
})
