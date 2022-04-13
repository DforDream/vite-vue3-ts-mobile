import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/mine',
    component: () => import('@/pages/Mine.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫 设置title
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Vite App';
  next()
})

export default router