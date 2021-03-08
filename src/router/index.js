import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard"
import Support from '../views/Support'
import Videos from '../views/Videos'
import Leads from '../views/Leads'
import Login from '../views/LoginForm.vue'
import Temp from '../views/Temp.vue'

import store from '../store/index'

const routes = [
  {
    path: "/login/",
    name: "Login",
    component: Login
  },
  
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
    path: "/temp/",
    name: "Temp",
    component: Temp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach( (to, _, next) => {
  if (to.name !== 'Login' && !store.state.currentUser) {
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router;
