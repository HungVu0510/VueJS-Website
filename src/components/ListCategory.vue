<template>
  <div class="container mx-auto px-5">
    <div
      class="text-center mx-px p-5"
      v-for="category in listCategory"
      :key="category"
    >
      <div>
        <ListProduct :categoryName="category" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListProduct from "../frames/ListProduct.vue";
export default {
  name: "ListCategory",

  components: {
    ListProduct,
  },

  data() {
    return {};
  },

  created() {
    this.getCategory();
  },

  computed: {
    ...mapGetters(["listCategory"]),
  },

  methods: {
    ...mapActions(["getCategory", "getProductHomePage"]),
  },
};
</script>

<style></style>
