import { createRouter, createWebHistory } from 'vue-router'


async function loadViews() {
  const views = import.meta.glob('../views/**/index.vue')
  console.log('views', views)
}
loadViews()
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
