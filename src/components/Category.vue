<template>
  <div class="container mx-auto px-5">
    <div class="flex w-full mx-px">
      <div
        v-for="category in listCategory"
        :key="category"
        class="
          flex
          w-1/2
          h-20
          justify-center
          items-center
          flex-wrap
          border-2
          hover:bg-gray-400
          rounded-lg
          uppercase
          mx-2
          my-8
        "
      >
        <router-link
          :to="{
            name: 'listproduct',
            params: { category },
          }"
        >
          <div class="mx-auto text-center text-xl">
            {{ category }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Category",

  created() {
    this.getCategory();
  },

  computed: {
    ...mapGetters(["listCategory"]),
  },

  methods: {
    ...mapActions(["getCategory"]),
  },
};
</script>

<style></style>
