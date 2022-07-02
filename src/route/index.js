import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/dtable",
    component: () => import("src/components/DynamicTable/index.vue"),
  },
  {
    path: "/watch",
    component: () => import("src/views/basic/watch-watchEffect.vue"),
  },
  {
    path: "/vite",
    component: () => import("src/views/vite-demo/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
