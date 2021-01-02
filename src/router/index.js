import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard";
import Support from '../views/Support'

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/support/",
    name: "Support",
    component: Support
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
