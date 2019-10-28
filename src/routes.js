import VueRouter from 'vue-router'
import AppHome from './components/AppHome'
import Login from './components/Login'
import Signup from './components/Signup'

const routes = [
  {
    component: AppHome,
    name: 'home',
    path: ''
  },
  {
    component: Login,
    name: 'login',
    path: '/login'
  },
  {
    component: Signup,
    name: 'signup',
    path: '/signup'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
});