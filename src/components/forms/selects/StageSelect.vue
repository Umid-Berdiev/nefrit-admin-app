<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { fetchStages } from '/@src/utils/api/department';
import { StageData } from '/@src/utils/interfaces';

export interface StageSelectProps {
  modelValue: number | string,
  isRequired?: boolean,
}

const props = withDefaults(defineProps<StageSelectProps>(), {
  isRequired: false,
  modelValue: ''
})
const emit = defineEmits(['update:modelValue']);
const { t } = useI18n()

const list = ref<StageData[]>([])
const selectedStage = computed({
  get: () => {
    return props.modelValue;
  },
  set: async (val) => {
    emit('update:modelValue', val);
  }
});

onMounted(async () => {
  const res = await fetchStages()
  list.value = res
})
</script>

<template>
  <VField>
    <VLabel>{{ t('Stage') }} <span v-if="isRequired" class="has-text-danger">*</span></VLabel>
    <VControl>
      <VSelect v-model="selectedStage">
        <VOption disabled hidden value="">{{ t('Select') }} ...</VOption>
        <VOption v-for="stage in list" :key="stage.id" :value="stage.id" v-text="stage.name" />
      </VSelect>
    </VControl>
  </VField>
</template>
