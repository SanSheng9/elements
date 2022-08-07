import { createRouter, createWebHistory } from "vue-router";

import ElementsDescription from "@/views/ElementsDescriptionPage.vue";
import ElementsPage from "@/views/ElementsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ElementsPage,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/elements",
    name: "elements",
    component: ElementsDescription,
    meta: {
      layout: "default",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
