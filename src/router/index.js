import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/info/:menuId',
    name: 'InfoDetail',
    component: () => import('../views/MenuDetail.vue')
  },
  {
    path: '/menu/:menuId',
    name: 'MenuDetail',
    component: () => import('../views/MenuDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory('#'),
  routes
})
router.beforeEach((to) => {
  if(process.env.VUE_APP_COMPANY === 'MaxxBelekSports' && to.path !== '/info/sports') return '/info/sports';
  return true;
});

export default router
