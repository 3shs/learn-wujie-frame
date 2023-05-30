import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vue3',
      component: () => import('../components/vue3.vue')
    },
    {
      path: '/about',
      name: 'react',
      component: () => import('../components/react.vue')
    }
  ]
})

export default router
