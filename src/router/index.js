import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue' 
import RegisterPage from '../views/RegisterPage.vue'
import Home from '../views/HomePage.vue'
import CustomerPage from '../views/CustomerPage.vue'
import ActivityPage from '../views/ActivityPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/main',
    name: 'Main',
    component: Home,
    children: [
      {
        path: '/customers',
        name: 'Customers',
        component: CustomerPage
      },
      {
        path: '/activity',
        name:'Activity',
        component: ActivityPage
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
