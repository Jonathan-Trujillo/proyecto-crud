import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: () => import('../views/AdminView.vue')
  },

  
  {
    path: '/crear',
    name: 'crear',
    component: () => import('../components/CrearView')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import('../components/EditarView')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
