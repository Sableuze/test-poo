<template>
  <v-select
    :model-value="listingsStore.getPair"
    @update:model-value="onModel"
    label="Select"
    :items="PAIRS"></v-select>
  <ChangeHistory :changes="listingsStore.getChanges"></ChangeHistory>
</template>
<script setup lang="ts">
import { useListingsStore } from '@/stores/listings';
import { Pair, PAIRS } from '@/types';
import ChangeHistory from '@/components/ChangeHistory.vue';

const listingsStore = useListingsStore();

const onModel = (val: Pair) => {
  listingsStore.setPair(val);
};
</script>

<style scoped lang="scss"></style>
