<template>
  <v-container>
    <v-row class="justify-center">
      <v-card max-width="400">
        <v-img
          class="white--text align-end"
          src="@/assets/vue_bg.jpg"
          height="200"
        >
          <v-card-title primary-title> REGISTER </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="onSubmit">
            <!-- Username -->
            <v-text-field
              color="success"
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
            />
            <!-- Password -->
            <v-text-field
              color="success"
              name="password"
              label="Password"
              id="password"
              v-model="account.password"
              :type="isShowPassword ? 'text' : 'password'"
              :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="isShowPassword = !isShowPassword"
              counter
            />
            <v-row class="justify-space-between px-3 py-5">
              <v-btn text @click.prevent="$router.back()">Cancel</v-btn>
              <v-btn type="submit" color="success">Confirm</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
    onSubmit(){
      alert(this.account.name + this.account.password)
    }
  }
};
</script>
<style></style>
