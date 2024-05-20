<template>
  <v-data-table
    :headers="visibleCols"
    :items="data"
    :fixed-header="fixedHeader"
    :items-per-page="itemsPerPage"
    :items-per-page-options="paginationOptions"
    class="bids-table"
    height="500">
    <template #item="{ item }">
      <tr>
        <td v-for="col in visibleCols">{{ getCellValue(item, col.key) }}</td>
      </tr>
    </template>
  </v-data-table>
</template>
<script setup generic="T extends Record<string, any>" lang="ts">
type HeaderItem = {
  title: string;
  align: 'center' | 'end' | 'left' | 'right' | 'start';
  key: string;
  hidden?: boolean;
};
type Props = {
  headers: HeaderItem[];
  data: T[];
  itemsPerPage: number;
  paginationOptions: number[];
  fixedHeader?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  data: () => [],
});

const visibleCols = computed(() => props.headers.filter((col) => !col.hidden));

const getCellValue = (item: T, key: string) => {
  if (key in item) {
    return item[key];
  } else {
    console.warn(`No key ${key} in data`);
    return '';
  }
};
</script>

<style scoped lang="scss"></style>
