<template>
  <v-app-bar height="80" app>
    <v-app-bar-title>Деньги</v-app-bar-title>
    <router-link to="/listings">
      <v-btn icon>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/settings">
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
