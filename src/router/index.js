import { createWebHistory, createRouter } from 'vue-router';
import Login from "../Layout/AuthLayout/Login.vue";
import Signup from "../Layout/AuthLayout/Signup.vue";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;