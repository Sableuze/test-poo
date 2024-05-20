import type {RouteRecordRaw} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../pages/Settings.vue'),
  },
  {
    path: '/listings',
    name: 'listings',
    component: () => import('../pages/Listings.vue'),

  }
];
