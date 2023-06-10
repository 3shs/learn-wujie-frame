import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/about1',
    name: 'vue3',
    component: () => import('../views/vuePage/index.vue')
  },
  {
    path: '/about2',
    name: 'react',
    component: () => import('../views/reactPage/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
