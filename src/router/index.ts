import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
import routes from './routes';
import { useCachedViewStoreHook } from '@/store/modules/cachedView';
import NProgress from '@/utils/progress';
import setPageTitle from '@/utils/set-page-title';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
  };
}

router.beforeEach((to: toRouteType, from, next) => {
  NProgress.start();
  console.log('🚀 ~ file: index.ts:27 ~ router.beforeEach ~ beforeEach:', to);
  // 路由缓存
  useCachedViewStoreHook().addCachedView(to);
  // 页面 title
  setPageTitle(to.meta.title);
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
