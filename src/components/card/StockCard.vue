<template>
  <v-card id="stock_card">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{title}}</v-list-item-title>
        <v-list-item-subtitle class="title">{{subtitle}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar size="80" tile :color="avatar_bg">
        <v-icon color="white">{{avatar_icon}}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  name: "StockCard",
  props: ["title","subtitle","avatar_bg","avatar_icon"]
};
</script>
<style></style>
