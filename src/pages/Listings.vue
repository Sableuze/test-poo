<template>
  <div class="container">
    <div class="mobile" v-if="appStore.isMobile">
      <v-col cols="12">
        <v-row>
          <Table
            :headers="headers"
            :data="asksData"
            :fixedHeader="true"
            :items-per-page="itemsPerPage"
            :pagination-options="paginationOptions"></Table>
        </v-row>
        <v-row>
          <Table
            :headers="headers"
            :data="bidsData"
            :fixedHeader="true"
            :items-per-page="itemsPerPage"
            :pagination-options="paginationOptions"></Table>
        </v-row>
      </v-col>
    </div>
    <div class="desktop" v-else>
      <v-row>
        <v-col cols="6">
          <Table
            :headers="headers"
            :data="asksData"
            :fixedHeader="true"
            :items-per-page="itemsPerPage"
            :pagination-options="paginationOptions"></Table>
        </v-col>
        <v-col cols="6">
          <Table
            :headers="headers"
            :data="bidsData"
            :fixedHeader="true"
            :items-per-page="itemsPerPage"
            :pagination-options="paginationOptions"></Table>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useListingsStore } from '@/stores/listings';
import Table from '@/components/Table.vue';
import { useAppStore } from '@/stores/app';

const listingsStore = useListingsStore();
const appStore = useAppStore();
const headers = [
  { title: 'Цена', align: 'left' as const, key: 'price' },
  { title: 'Кол-во', align: 'left' as const, key: 'count' },
  { title: 'Итого', align: 'right' as const, key: 'total', hidden: appStore.isMobile },
];

const itemsPerPage = 100;
const paginationOptions = [100, 500, 1000];
const asksData = computed(() => listingsStore.state.asks);
const bidsData = computed(() => listingsStore.state.bids);
</script>

<style scoped lang="scss"></style>
