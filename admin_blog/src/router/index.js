import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Login'),
  },
  {
    path: '/',
    name: 'Mian',
    component: () => import('views/Mian'),
    //由于点击下面两个路由只在mian右侧容器之中跳转所以设置子路由
    children: [
      {
        path: '',
        redirect: '/work'
      },
      {
        path: '/category/create',
        name: 'Create',
        component: () => import('components/category/Create')
      },
      {
        path: '/category/categoryEdit/:id',
        name: 'Edit',
        component: () => import('components/category/Create'),
        props: true
      },
      {
        path: '/category/list',
        name: 'List',
        component: () => import('components/category/List')
      },
      {
        path: '/work',
        name: 'Work',
        component: () => import('components/work/Work')
      },
      {
        path: '/articleList',
        name: 'list',
        component: () => import('components/article/ArticleList')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
