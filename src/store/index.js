import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: false,
    user: {
      username: "",
      password: "",
    },
    listProducts: [],
    product: {},
    listCategory: [],
    cart: [],
    productSearch: [],
  },

  getters: {
    isUser: (state) => state.user,
    isLogin: (state) => state.isLogin,
    listProducts: (state) => state.listProducts,
    product: (state) => state.product,
    listCategory: (state) => state.listCategory,
    listCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,
    cartTotalPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total += item.price * item.quantity;
      });

      return total;
    },

    searchProduct: (state) => state.productSearch,
  },

  mutations: {
    SET_DATA(state, listProducts) {
      state.listProducts = listProducts;
    },

    GET_DATA(state, Product) {
      state.product = Product;
    },

    GET_CATEGORY(state, listCategory) {
      state.listCategory = listCategory;
    },

    ADD_TO_CART(state, product) {
      let productInCart = state.cart.find((item) => {
        return item.id === product.id;
      });

      if (productInCart) {
        productInCart.quantity += product.quantity;
        return;
      } else {
        state.cart.push({
          ...product,
          quantity: product.quantity,
        });
      }

      alert("A Product Added To Cart");
    },

    DELETE_PRODUCT(state, productId) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    },

    CLEAR_CART(state) {
      state.cart = [];
    },

    LOGIN(state, userInfo) {
      state.user = userInfo;
    },

    CHECK_LOGIN(state) {
      state.isLogin = window.localStorage.getItem("isLogin");
    },

    USER_LOGOUT(state) {
      localStorage.removeItem("isLogin"),
        localStorage.removeItem("username"),
        localStorage.removeItem("token"),
        (state.isLogin = !state.isLogin);
      router.push("/");
    },

    SEARCH_PRODUCT(state, response, productTitle) {
      console.log("searchMutations");
      console.log(state.listProducts);
      state.productSearch = response.filter((product) =>
        product.title.includes(productTitle)
      );
    },

    // SET_CART(state, cartItem) {
    //   state.cart = cartItem;
    // },
  },

  actions: {
    async logout({ commit }) {
      commit("USER_LOGOUT");
    },

    changeLogin({ commit }) {
      commit("CHECK_LOGIN");
    },

    changeUser({ commit }, payload) {
      commit("LOGIN", payload);
    },

    async getProducts({ commit }) {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        commit("SET_DATA", response.data);
      } catch (error) {
        console.log("Error");
      }
    },

    async getProduct({ commit }, productId) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        commit("GET_DATA", response.data);
      } catch (error) {
        console.log("Error");
      }
    },

    async getCategory({ commit }) {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        commit("GET_CATEGORY", response.data);
      } catch (error) {
        console.log("Error");
      }
    },

    async getProductHomePage(context, categoryName) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        return response;
      } catch (error) {
        console.log("Error");
      }
    },

    async addProductToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },

    async deleteProduct({ commit }, productId) {
      commit("DELETE_PRODUCT", productId);
    },

    async clearCart({ commit }) {
      commit("CLEAR_CART");
    },

    async searchProduct({ commit }, productTitle) {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(
          response.data.filter((product) =>
            product.title.includes(productTitle)
          )
        );
        commit("SEARCH_PRODUCT", response.data, productTitle);
      } catch (error) {
        console.log("Error");
      }
    },
  },
});

export default store;
