<template>
  <v-navigation-drawer app permanent absolute>
    <router-link to="/" exact>
      <div class="bg-div">
        <v-img src="@/assets/vue_bg.jpg" width="100%" />
      </div>
    </router-link>

    <v-divider></v-divider>

    <v-list shaped>
      <v-subheader>MENUS</v-subheader>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          v-for="([icon, text, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import router from "@/router";
export default {
  name: "Menu",
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-file-document-check-outline", "About", "/about"],
      ],
    };
  },
  methods: {
    onClickMenu(link) {
      router.push(link).catch((err) => {
        alert(err);
      });
    },
  },
  watch: {
    $route(to) {
      this.selectedMenu = this.menus.findIndex((menu) => menu[2] === to.path);
    },
  },
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      (menu) => menu[2] === this.$route.path
    );
  },
};
</script>
<style scoped>
.bg-div {
  background-color: #4caf50;
}
</style>
