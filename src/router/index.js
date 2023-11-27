// Composables
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Productos from '../views/Productos.vue'
import Clientes from '../views/Clientes.vue'
import Proveedores from '../views/Proveedores.vue'
import Empleados from '../views/Empleados.vue'
import SaleAnalytic from '../views/analytics-sales-report.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'about',component: About, },
    ]
  },
  {
    path: '/productos',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'productos',component: Productos, },
    ]
  },
  {
    path: '/clientes',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'clientes',component: Clientes, },
    ]
  },
  {
    path: '/proveedores',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'proveedores',component: Proveedores, },
    ]
  },
  {
    path: '/empleados',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'empleados',component: Empleados, },
    ]
  },
  {
    path: '/sale_analytic',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'sale_analytic',component: SaleAnalytic, },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
