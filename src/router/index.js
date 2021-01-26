import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard"
import Support from '../views/Support'
import Videos from '../views/Videos'
import Leads from '../views/Leads'
import ModalTest from '../views/ModalTest'

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
  },
  
  {
    path: "/leads/",
    name: "Leads",
    component: Leads
  },
  
  {
    path: "/videos/",
    name: "Videos",
    component: Videos
  },
  // test of modal
  {
    path: "/modaltest/",
    name: "ModalTest",
    component: ModalTest
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
