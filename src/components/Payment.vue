<template>
  <div>
    <div class="w-2/4 my-5 mx-auto border-blue-500 border">
      <div class="w-full py-4 px-5">
        <div class="w-full text-left">Product Type: Electronic</div>
        <div class="w-full text-left">Product Name: Television</div>
        <div class="w-full text-left">
          Product Title: It will help you have a great time with your family
        </div>
        <div class="w-full text-left">Total Price: {{ total }} USD</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      total: window.localStorage.getItem("total"),
    };
  },
  computed: {},
};
</script>

<style></style>
