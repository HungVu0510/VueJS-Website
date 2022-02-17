<template>
  <div>
    <section class="pt-10 mt-5">
      <!--Container-->
      <div class="container mx-auto px-4">
        <hr class="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-3/5" />

        <!--Title-->
        <h2 class="text-center text-4xl font-semibold py-10 uppercase">
          List Product Of {{ name }}
        </h2>

        <div class="flex w-full flex-wrap mx-px justify-around">
          <div
            v-for="product in Products"
            :key="product.id"
            class="flex flex-col w-1/5 mr-3 text-center"
          >
            <router-link
              :to="{
                name: 'productdetail',
                params: { id: product.id },
              }"
            >
              <div
                class="
                  w-full
                  mx-auto
                  rounded-md
                  bg-no-repeat bg-contain bg-center
                  pb-48
                  mb-5
                "
                v-bind:style="{
                  'background-image': 'url(' + product.image + ')',
                }"
              ></div>

              <div class="w-full mx-auto whitespace-pre-wrap">
                {{ product.title }}
              </div>

              <div class="w-full mx-auto text-blue-700">
                {{ product.price }} USD
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ListProduct",

  data() {
    return {
      Products: [],
      name: this.categoryName,
    };
  },

  props: {
    categoryName: {
      type: String,
      default: "",
    },
  },

  created() {
    // this.getProducts();
    if (this.$route.params.category) {
      this.name = this.$route.params.category;
    }
    this.getProductHomePage(this.name).then((res) => {
      this.Products = res.data;
    });
  },

  methods: {
    ...mapActions(["getProductHomePage"]),
  },
};
</script>

<style></style>
