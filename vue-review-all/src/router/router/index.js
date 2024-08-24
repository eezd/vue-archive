import { createRouter, createWebHistory } from 'vue-router'
import left from '../views/name/left'
import main from '../views/name/main'
import right from '../views/name/right'

const routes = [
  { path: '', component: () => import('../views/Home') },
  { path: '/about', component: () => import('../views/About') },
  { path: '/api', component: () => import('../views/api') },
  { path: '/api/:abc', component: () => import('../views/api') },
  { path: '/:pathMatch(.*)', component: () => import('../views/api') },
  { path: '/user-:afterUser(.*)*', component: () => import('../views/api') },
  {
    path: '/nameLeft',
    components: {
      default: left,
      main,
      change: right,
    },
  },
  {
    path: '/nameRight',
    components: {
      default: right,
      main,
      change: left,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
