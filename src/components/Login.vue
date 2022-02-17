<template>
  <div class="h-96 w-2/5 border border-black mx-auto my-5">
    <div class="text-3xl text-center py-5">Login Page</div>

    <div class="items-center mb-5 w-3/4 mx-auto">
      <div class="mt-8 mb-2">Enter Username:</div>
      <input
        v-model="username"
        type="text"
        class="border border-blue-400 w-full"
        placeholder="Enter Your Name"
      />
    </div>

    <div class="items-center mb-8 w-3/4 mx-auto">
      <div class="mt-8 mb-2">Enter Password:</div>
      <input
        v-model="password"
        type="password"
        class="border border-blue-400 w-full"
        placeholder="Enter Your Password"
      />
    </div>

    <div class="flex w-3/4 mx-auto">
      <button
        class="border border-black rounded-md py-2 px-7 mx-auto"
        @click="login"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    ...mapGetters(["isLogin"]),
  },

  methods: {
    ...mapActions(["changeUser"]),

    async login() {
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        // username: "mor_2314",
        // password: "83r5^_"
        { username: this.username, password: this.password }
      );
      if (res.data.token) {
        let response = res.data;
        localStorage.setItem("token", response.token);
        this.$store.dispatch("changeUser", {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("isLogin", true);
        localStorage.setItem("username", this.username);
        this.$store.commit("CHECK_LOGIN");
        this.$router.push(this.$router.go(-1));
      } else {
        alert("Your Username and Password Is Incorrect");
      }
    },
  },
};
</script>

<style></style>
