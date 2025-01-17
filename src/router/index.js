import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "weather",
    component: () => import("@/pages/Weather.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
