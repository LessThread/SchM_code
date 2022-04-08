import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import month from '@/views/month.vue'
import range from '@/views/range.vue'
import chose_page from '@/views/chose_page'
import fin from '@/views/fin'
import welcome from '@/views/welcome'
import result from "@/views/result";
import chose_month from "@/views/chose_month";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome,
    meta: {index: 0},
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {index:1},
  },
  {
    path: '/month',
    name: 'month',
    meta:{index:2},
    component: month
  },
  {
    path: '/range',
    name: 'range',
    meta:{index:3},
    component: range
  },
  {
    path: '/chose',
    name: 'chose',
    meta:{index:4},
    component: chose_page
  },
  {
    path: '/fin',
    name: 'fin',
    meta:{index:5},
    component: fin
  },
  {
    path: '/result',
    name: 'result',
    meta:{index:6},
    component: result,
  },
  {
    path: '/month_chose',
    name: 'month_chose',
    component: chose_month,
    meta: {index: 7},
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
