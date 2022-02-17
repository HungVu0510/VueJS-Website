<template>
  <div>
    <div v-for="product in searchProduct" :key="product"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "productSearch",

  computed: {
    ...mapGetters(["searchProduct"]),
  },
};
</script>

<style></style>
