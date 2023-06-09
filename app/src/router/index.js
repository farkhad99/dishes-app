import { createRouter, createWebHistory } from 'vue-router'
import DishList from '@/views/Dish/DishList.vue'

const routes = [
  {
    path: '/',
    name: 'Dish',
    children: [
      {
        path: '/',
        name: 'DishList',
        component: DishList,
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
