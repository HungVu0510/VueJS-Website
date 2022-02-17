<template>
  <div>
    <div v-if="searchProduct.length !== 0">
      <productSearch />
    </div>
    <div v-else>
      <ListCategory />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListCategory from "../components/ListCategory.vue";
import productSearch from "../components/productSearch.vue";
export default {
  name: "HomePage",
  components: {
    ListCategory,
    productSearch,
  },

  computed: {
    ...mapGetters(["searchProduct"]),
  },
};
</script>

<style></style>
