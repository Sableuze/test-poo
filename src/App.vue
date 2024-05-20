<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useListingsStore } from '@/stores/listings';
useListingsStore().connect();
</script>
