import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import loadable from '../utils/loadable'
import hooks from './hook.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lesson',
    name: 'Lesson',
    component: loadable(() => import('@/views/lesson/index.vue'))
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadable(() => import('@/views/profile/index.vue'))
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook => {
  router.beforeEach(hook);
})

export default router
