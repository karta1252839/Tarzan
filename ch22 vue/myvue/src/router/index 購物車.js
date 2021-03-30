// import { createRouter, createWebHashHistory } from 'vue-router'

import Vue from 'vue'
import VueRouter from 'vue-vueRouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於'
    }
  },
  {
    path: '/A購物車',
    name: 'A購物車',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '商品'
    }
  },
  {
    path: '/B購物車 cart',
    name: 'B購物車 cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '購物車'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
