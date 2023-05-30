import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vue3',
      component: () => import('../views/vuePage/index.vue')
    },
    {
      path: '/about',
      name: 'react',
      component: () => import('../views/reactPage/index.vue')
    }
  ]
})

export default router
