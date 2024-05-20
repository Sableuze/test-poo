<template>
  <v-list>
    <v-list-item v-for="change in changes" :key="change.id">
      <v-list-item-title>{{ date.format(change.at, 'fullDateTime') }}</v-list-item-title>
      <v-list-item-subtitle>
        <span>Old Value: {{ change.previous }}</span>
        <span class="ml-4">New Value: {{ change.value }}</span>
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
import { ChangeItem } from '@/types/settings';
import { useDate } from 'vuetify';

type Props = {
  changes: ChangeItem[];
};
const props = withDefaults(defineProps<Props>(), {
  changes: () => [],
});
const date = useDate();
</script>
<style scoped lang="scss"></style>
