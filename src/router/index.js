/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Component_1 from '../views/Component_1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Component_1',
    component: Component_1
  },
  {
    path: '/Component_2',
    name: 'Component_2',
    component: () => import('../views/Component_2.vue'),
    beforeEnter(to, from, next) {
      window.location.href = 'https://google.com'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
