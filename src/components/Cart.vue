<template>
  <div class="container mx-auto px-5">
    <div class="text-center mx-px p-5" v-for="item in listCart" :key="item.id">
      <div class="cart">
        <div class="w-4/5 mx-auto flex justify-between items-center py-10">
          <div
            class="flex flex-1 pb-96 bg-center bg-contain bg-no-repeat ml-5"
            v-bind:style="{
              'background-image': 'url(' + item.image + ')',
            }"
          ></div>

          <div class="flex flex-col text-left flex-1">
            <div class="text-sm text-red-500 uppercase">
              {{ item.category }}
            </div>
            <div class="text-lg mb-3">{{ item.title }}</div>
            <div class="text-sm mb-6 text-justify">{{ item.description }}</div>
            <div class="text-xm mb-3">Quantity: {{ item.quantity }}</div>
            <div class="text-2xl mb-3">{{ item.price }} USD</div>
            <div class="flex mt-3">
              <button
                class="border-black border rounded p-2 w-32 hover:bg-gray-400"
                @click="deleteProduct(item.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-3/5 my-5" />

    <div class="flex justify-between w-3/5 mx-auto my-5">
      <div class="text-2xl text-center self-center">
        Total Price : {{ cartTotalPrice }} USD
      </div>
      <button
        class="
          text-2xl text-red-500
          border
          rounded-md
          bg-gray-300
          text-center
          py-2
          px-5
          border-black
        "
        @click="payment()"
      >
        Payment
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",

  computed: {
    ...mapGetters(["listCart", "isLogin"]),

    cartTotalPrice() {
      window.localStorage.setItem("total", this.$store.getters.cartTotalPrice);

      return this.$store.getters.cartTotalPrice;
    },
  },

  methods: {
    ...mapActions(["getCartItem", "deleteProduct"]),

    payment() {
      if (window.localStorage.getItem("isLogin") == "true") {
        this.$router.push({ path: "/payment" });
        this.$store.dispatch("clearCart");
      } else {
        this.$router.push({ path: "/payment" });
        alert("You Have To Login To Go To Payment Page");
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style></style>
