<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';

export interface StatusData {
  color: string
  description: string
  id: number
  name: string
  type: string
}

export interface StatusSelectProps {
  modelValue: number | string,
  isRequired?: boolean,
  list: StatusData[],
}

const props = withDefaults(defineProps<StatusSelectProps>(), {
  isRequired: false,
  modelValue: ''
})
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
</script>

<template>
  <VField>
    <VLabel>{{ t('Status') }} <span v-if="isRequired" class="has-text-danger">*</span></VLabel>
    <VControl>
      <VSelect v-model="selectedStatus">
        <VOption disabled hidden value="">{{ t('Select') }} ...</VOption>
        <VOption v-for="status in list" :key="status.id" :value="status.id" v-text="status.name" />
      </VSelect>
    </VControl>
  </VField>
</template>

