<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <AppHeader />
  </v-app>
</template>

<script lang="ts" setup>
  //
import AppHeader from "../components/AppHeader.vue";
</script>
