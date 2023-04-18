<template>
  <div>
    <v-app-bar
      app
      color="#1c2835"
      dark
    >
      <v-toolbar-title>Stock {{ version }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <span>Username</span>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  computed:{
    version(){
      return process.env.VUE_APP_VERSION
    }
  }
}
</script>
<style>
  
</style>