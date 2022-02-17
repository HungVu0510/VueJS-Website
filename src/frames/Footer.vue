<template>
  <div>
    <!--Dowload-->
    <section>
      <!--Background-->
      <div
        class="relative w-full h-96 bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: backgroundImage2 }"
      >
        <div
          class="
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
            text-center text-white
            z-10
          "
        >
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
            Dowload The App Now
          </h1>

          <!--desc-->
          <p class="text-xl mb-5 font-light">
            Available on your favorite store. Start your premium experience now
          </p>

          <div class="flex justify-center">
            <button
              class="
                mx-4
                border border-transparent
                bg-red-500
                px-10
                py-3
                rounded-full
                hover:bg-red-600 hover:border-white
                transition-all
              "
            >
              PlayStore
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
              AppStore
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- === Footer === -->
    <!-- Thẻ footer chỗ này sẽ hợp lý hơn -->
    <footer>
      <!-- container -->
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col justify-between items-center py-5 md:flex-row"
        >
          <!-- logo -->
          <div class="w-32 md:w-full">
            <img src="../assets/images/logo.png" alt="website logo" />
          </div>
          <!-- contact -->
          <div
            class="
              flex
              items-center
              mt-5
              text-gray-500
              w-full
              justify-center
              md:justify-end
            "
          >
            <!-- phone -->
            <a href="tel:901234567" class="flex mx-4">
              <!-- icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <!-- number -->
              <p>90-123-4567</p>
            </a>
            <!-- email -->
            <a href="mailto:info@me.com" class="flex mx-4">
              <!-- icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <!-- address -->
              <p>info@me.com</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",

  computed: {
    backgroundImage2() {
      return "url(" + require("../assets/images/download.png") + ")";
    },
  },
};
</script>

<style></style>
