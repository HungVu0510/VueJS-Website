import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import Event from "../components/Event.vue";
import Category from "../components/Category.vue";
import Cart from "../components/Cart.vue";
import Login from "../components/Login.vue";
import ProductDetail from "../components/ProductDetail";
import ListProduct from "../frames/ListProduct.vue";
import Payment from "../components/Payment.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },

    {
      path: "/event",
      name: "event",
      component: Event,
    },

    {
      path: "/category",
      name: "category",
      component: Category,
    },

    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/productdetail/:id",
      name: "productdetail",
      component: ProductDetail,
    },

    {
      path: "/listproduct/:category",
      name: "listproduct",
      component: ListProduct,
    },

    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
  ],
});

export default router;
