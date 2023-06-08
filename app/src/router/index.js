import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Dish',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/:id',
        name: 'DishView',
        component: () => import('@/views/Dish/DishView.vue'),
      },
      {
        path: '/create',
        name: 'DishCreate',
        component: () => import('@/views/Dish/DishCreate.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
