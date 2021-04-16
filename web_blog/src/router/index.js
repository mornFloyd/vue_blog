import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/Home'
import List from 'views/List'
import Detail from 'views/Detail'
import Life from 'views/Life'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/life',
    name: 'Life',
    component: Life
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
