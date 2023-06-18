import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterVue from "@/views/Register.vue";
import LoginVue from "@/views/Login.vue";
import DashBoardVue from "@/views/DashBoard.vue";
import OrdersVue from "@/views/OrdersView.vue";
import CompanyInfoVue from "@/views/CompanyInfo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginVue,
  },
  {
    path: "/home",
    name: "dashboard",
    component: DashBoardVue,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersVue,
  },
  {
    path: "/companyinfo",
    name: "companyinfo",
    component: CompanyInfoVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
