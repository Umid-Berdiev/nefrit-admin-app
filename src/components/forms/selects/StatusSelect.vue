<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);
const { t } = useI18n()

const selectedStatus = computed({
  get: () => {
    return props.modelValue;
  },
  set: async (val) => {
    emit('update:modelValue', val);
  }
});
const statuses = ref([])
</script>

<template>
  <VField>
    <VLabel>{{ t('Status') }}</VLabel>
    <VControl>
      <VSelect v-model="selectedStatus">
        <VOption value="">{{ t('Select') }} ...</VOption>
        <VOption v-for="status in statuses" :key="status.id" :value="status.id" v-text="status.name" />
      </VSelect>
    </VControl>
  </VField>
</template>

