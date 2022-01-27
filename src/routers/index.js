import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    meta: {
      layout: 'Main'
    },
    component: Home,
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      layout: 'Login'
    },
    component: Login,
  },
  {
    name: 'Profile',
    path: '/profile',
    meta: {
      layout: 'Profile'
    },
    component: Profile,
  }
]

const history = createWebHistory()
const router = createRouter({ history, routes })
export default router