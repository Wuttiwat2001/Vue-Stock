import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register'
import Report from '@/views/Report'
import Stock from '@/views/Stock'
import StockCreate from '@/views/StockCreate'
import StockEdit from '@/views/StockEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/report',
    name: 'report',
    component: Report
  },
  {
    path: '/stock',
    meta: { isSecured: true},
    name: 'stock',
    component: Stock
  },
  {
    path: '/stock-create',
    meta: { isSecured: true},
    name: 'stock-create',
    component: StockCreate
  },
  {
    path: '/stock-edit/:id',
    meta: { isSecured: true},
    name: 'stock-edit',
    component: StockEdit
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login' // page not found
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
