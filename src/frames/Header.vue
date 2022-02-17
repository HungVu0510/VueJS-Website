<template>
  <div>
    <!--Header -->
    <header>
      <!--Container-->
      <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center py-5">
          <!--Logo-->
          <router-link to="/" class="w-32 md:w-full z-20">
            <img src="../assets/images/logo.png" alt="Website-Logo" />
          </router-link>

          <!--Search Bar-->

          <input
            v-model="productTitle"
            type="text"
            placeholder="Tìm kiếm"
            class="w-full border pl-2 bg-white border-blue-400 mr-10"
          />
          <!--<button @click="searchProduct()">Search</button> -->

          <!--Links-->
          <ul id="menu" class="c-menu">
            <router-link to="/category" class="m-12 md:m-0 c-link">
              Category
            </router-link>

            <router-link to="/event" class="m-12 md:m-0 c-link">
              Event
            </router-link>

            <router-link to="/cart" class="m-12 md:m-0 c-link">
              <span class="px-1 py-1 border-blue-400 border">{{
                cartItemCount
              }}</span>
              Cart
            </router-link>

            <div v-if="isLogin" class="flex flex-col">
              <router-link to="/cart" class="">{{
                isUser.username
              }}</router-link>
              <button @click="logout()">Logout</button>
            </div>
            <router-link v-if="!isLogin" to="/login" class="m-12 md:m-0 c-link">
              Login
            </router-link>
          </ul>

          <!--Menu Button-->
          <div id="menu-button" class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>

    <!--Banner-->
    <section>
      <div
        class="w-full h-custom bg-cover bg-no-repeat bg-center relative"
        :style="{ backgroundImage: backgroundImage }"
      >
        <div
          class="
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
            text-white text-center
          "
        >
          <!--Tag-->
          <p class="text-4xl mb-5">Shopping</p>

          <!--Title-->
          <h1
            class="
              text-4xl
              mb-5
              font-bold
              max-w-2xl
              md:leading-relaxed md:text-5xl
            "
          >
            Why Need To Think While You Can Buy AnyThing Form Our Store
          </h1>

          <!--Desciption-->
          <p class="text-xl mb-5 font-light">Download The App Now</p>

          <!--Buttons-->
          <div class="flex justify-center">
            <button
              class="
                mx-4
                border border-transparent
                bg-red-500
                px-10
                py-3
                rounded-full
                hover:bg-transparent hover:border-white
                transition-all
              "
            >
              Playstore
            </button>
            <button
              class="
                mx-4
                border border-white
                bg-transparent
                px-10
                py-3
                rounded-full
                hover:bg-red-500 hover:border-transparent
                transition-all
              "
            >
              Appstore
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header1",

  data() {
    return {
      productTitle: "",
    };
  },

  computed: {
    backgroundImage() {
      return "url(" + require("../assets/images/banner.png") + ")";
    },

    ...mapGetters(["cartItemCount", "isLogin", "isUser"]),
  },

  methods: {
    ...mapActions(["logout"]),

    searchProduct() {
      this.$store.dispatch("searchProduct", this.productTitle);
      console.log("123454");
    },
  },
};
</script>

<style>
.c-link {
  @apply text-white
md:text-black
hover:text-red-500
  transition
  duration-300
  ease-in;
}

.c-menu {
  @apply fixed
    z-20
    top-0
    left-0
    w-full
    h-screen
    flex flex-col
    justify-center
    items-center
  bg-gray-900 bg-opacity-90
    md:bg-transparent
    md:h-auto    
    md:flex-row
    md:justify-between
    md:static;
}
</style>
