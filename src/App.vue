<template>
  <v-app>
    <Header v-if="isLogin" />
    <Menu v-if="isLogin" />
    <Content />
  </v-app>
</template>

<script>
import Header from '@/components/core/Header.vue';
import Content from '@/components/core/Content.vue';
import Menu from '@/components/core/Menu.vue';
export default {
  name: "App",
  components: {
    Header,
    Content,
    Menu,
  },
  computed:{
    isLogin() {
      return this.$store.getters["auth/isLogin"];
    },
  },
  mounted(){
    this.isLogin()
    this.$store.dispatch("auth/restoreLogin");
  }
};
</script>
