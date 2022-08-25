import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProdutoView from "../views/ProdutoView.vue";
import LoginView from "../views/LoginView.vue";

import UsuarioView from "../views/usuario/UsuarioView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "ProdutoView",
    component: ProdutoView,
    props: true,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    props: true,
  },
  {
    path: "/usuario",
    name: "UsuarioView",
    component: UsuarioView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
