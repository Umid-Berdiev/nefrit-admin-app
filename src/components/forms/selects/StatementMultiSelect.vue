<script setup lang="ts">
import { isNull } from 'lodash';
import { computed, ref } from 'vue'
import VueSelect from "vue-select";

import 'vue-select/dist/vue-select.css';

const props = defineProps({
  selectedIds: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits<{
  (e: 'update:selected-ids'): void
}>();

const selectedItems = computed({
  get: () => props.selectedIds,
  set: (value) => {
    if (!isNull(value))
      props.selectedIds.push(value)
  }
});
</script>

<template>
  <VueSelect v-model="selectedItems" :options="options" :reduce="statement => statement.id" label="code" code="id"
    :placeholder="$t('Select_statements')" multiple :close-on-select="false" />
</template>
