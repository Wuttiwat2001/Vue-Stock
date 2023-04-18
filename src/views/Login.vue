<template>
  <v-container>
    <v-row class="justify-center">
      <v-card max-width="400">
        <v-img src="@/assets/vue_bg.jpg" height="200" />
        <v-card-text>
          <v-form>
            <!-- Username -->
            <v-text-field name="username" label="Username" id="username" />
            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :type="isShowPassword ? 'text' : 'password'"
              :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="isShowPassword = !isShowPassword"
              counter
            />
            <v-row class="justify-space-between py-3">
              <v-btn text>Register</v-btn>
              <v-btn color="success">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isShowPassword: false,
    };
  },
};
</script>
<style></style>
