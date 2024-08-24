// router/root.ts
import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Home',
    // 别名
    alias: '/home',
    component: () => import('src/views/Home/index.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('src/views/Demo/index.vue'),
  },
] as RouteRecordRaw[]
