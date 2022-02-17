<template>
  <div id="productdetail">
    <div class="w-4/5 mx-auto flex justify-between items-center py-10">
      <div
        class="flex flex-1 pb-96 bg-center bg-contain bg-no-repeat ml-5"
        v-bind:style="{
          'background-image': 'url(' + product.image + ')',
        }"
      ></div>

      <div class="flex flex-col text-left flex-1">
        <div class="text-sm text-red-500 uppercase">{{ product.category }}</div>
        <div class="text-lg mb-3">{{ product.title }}</div>
        <div class="text-sm mb-6 text-justify">{{ product.description }}</div>
        <div class="text-2xl mb-3">{{ product.price }} USD</div>
        <div class="flex mt-3">
          <button class="border rounded border-black p-2 w-32">Buy</button>
          <button
            class="mx-5 border-black border rounded p-2 w-32"
            @click="addToCart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  name: "ProductDetail",
  created() {
    this.getProduct(this.id);
  },
  components: {},

  computed: {
    ...mapGetters(["product"]),
  },

  methods: {
    ...mapActions(["getProduct"]),

    addToCart() {
      this.$store.dispatch("addProductToCart", {
        ...this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style></style>
