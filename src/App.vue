<template>
  <v-app>
    <Header />
    <Menu />
    <Content />
  </v-app>
</template>

<script>
import Header from "@/components/core/Header.vue";
import Content from "@/components/core/Content.vue";
import Menu from "@/components/core/Menu.vue";
export default {
  name: "App",
  components: {
    Header,
    Content,
    Menu,
  },
  data: () => ({
    //
  }),
};
</script>
