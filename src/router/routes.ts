import Layout from '@/layout/index.vue';
import type { RouteRecordRaw } from 'vue-router';
import Index from '@/views/index/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: { name: 'Index' },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index,
        meta: {
          title: '主页'
        }
      },
      {
        path: 'temple',
        name: 'Temple',
        component: () => import('@/views/temple/index.vue'),
        meta: {
          title: 'temple'
        }
      },
      {
        path: 'demo',
        name: 'Demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: 'demo'
        }
      },
      {
        path: 'tools',
        name: 'Tools',
        component: () => import('@/views/tools/index.vue'),
        meta: {
          title: '工具'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '关于',
          noCache: true
        }
      }
    ]
  }
];

export default routes;
