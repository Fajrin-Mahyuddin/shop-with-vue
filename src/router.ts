import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Products from "@/pages/Product.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
