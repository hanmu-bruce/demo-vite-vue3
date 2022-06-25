import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/dtable",
    component: () => import("src/components/DynamicTable/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
