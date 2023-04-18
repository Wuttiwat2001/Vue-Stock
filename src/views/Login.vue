<template>
  <v-container>
    <v-row class="justify-center">
      <v-card max-width="400">
        <v-img
          class="white--text align-end"
          src="@/assets/vue_bg_2.jpg"
          height="200"
        >
          <v-card-title primary-title> LOGIN </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="onSubmit">
            <!-- Username -->
            <v-text-field
              color="success"
              name="username"
              label="Username"
              id="username"
              required
              v-model.trim="account.username"
              :rules="usernameRules"
            />
            <!-- Password -->
            <v-text-field
              color="success"
              name="password"
              label="Password"
              id="password"
              required
              v-model.trim="account.password"
              :type="isShowPassword ? 'text' : 'password'"
              :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="isShowPassword = !isShowPassword"
              counter
              :rules="passwordRules"
            />
            <v-row class="justify-space-between px-3 py-5">
              <v-btn text @click.prevent="onClickRegister">Register</v-btn>
              <v-btn type="submit" color="success">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import router from "@/router";
export default {
  name: "Login",
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: "",
      },
      usernameRules: [(value) => !!value || "Username is required."],
      passwordRules: [
        (value) => !!value || "Password is required.",]
    };
  },
  methods: {
    onClickRegister() {
      router.push("/register");
    },
    onSubmit() {
      this.$store.dispatch("auth/doLogin", this.account);
      router.push("/stock")
    },
  },
};
</script>
<style></style>
