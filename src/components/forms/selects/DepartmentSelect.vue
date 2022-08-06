<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchDepartments } from '/@src/utils/api/department';
import { DepartmentData } from '/@src/utils/interfaces';

export interface DepartmentSelectProps {
  modelValue: number | null,
  isRequired: boolean,
}

const props = withDefaults(defineProps<DepartmentSelectProps>(), {
  isRequired: false,
  modelValue: null
})
const emit = defineEmits(['update:modelValue']);
const list = ref<DepartmentData[]>([])
const selectedDepartment = computed({
  get: () => {
    return props.modelValue;
  },
  set: async (val) => {
    emit('update:modelValue', val);
  }
});

onMounted(async () => {
  const res = await fetchDepartments()
  list.value = res
})
</script>

<template>
  <VField>
    <VLabel>{{ $t('Department') }} <span v-if="isRequired" class="has-text-danger">*</span></VLabel>
    <VControl>
      <VSelect v-model="selectedDepartment">
        <VOption disabled hidden value="">{{ $t('Select') }}...</VOption>
        <VOption v-for="dept in list" :key="dept.id" :value="dept.id" v-text="dept.name" />
      </VSelect>
    </VControl>
  </VField>
</template>
