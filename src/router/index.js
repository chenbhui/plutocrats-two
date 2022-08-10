import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { show: true },
    component: () => import('../views/Home')
  },
  {
    path: '*',
    redirect: '/home',
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
