<template>
  <div>
    <div id="event"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Event",
  components: {},

  computed: {
    ...mapGetters(["searchProduct"]),
  },
};
</script>

<style></style>
