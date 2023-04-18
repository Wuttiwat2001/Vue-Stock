<template>
  <div>
    <v-app-bar app color="#1c2835" dark>
      <v-toolbar-title>Stock {{ version }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <span>{{ getUsername | capitalize }}</span>

      <v-btn icon @click="onClickLogout">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    onClickLogout() {
      this.$store.dispatch("auth/doLogout");
    },
  },
  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
    getUsername() {
      return this.$store.getters["auth/username"];
    },
  },
};
</script>
<style></style>
