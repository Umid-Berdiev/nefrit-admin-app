<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchRoles } from '/@src/utils/api/role';
import { RoleData } from '/@src/utils/interfaces';

export interface DepartmentSelectProps {
  modelValue: number | null,
  isRequired: boolean
}

const props = withDefaults(defineProps<DepartmentSelectProps>(), {
  modelValue: null,
  isRequired: false
})
const emit = defineEmits(['update:modelValue']);
const list = ref<RoleData[]>([])
const selectedRole = computed({
  get: () => {
    return props.modelValue;
  },
  set: async (val) => {
    emit('update:modelValue', val);
  }
});

onMounted(async () => {
  const res = await fetchRoles()
  list.value = res
})
</script>

<template>
  <VField>
    <VLabel>{{ $t('Roles') }} <span v-if="isRequired" class="has-text-danger">*</span></VLabel>
    <VControl>
      <VSelect v-model="selectedRole">
        <VOption disabled hidden value="">{{ $t('Select') }}...</VOption>
        <VOption v-for="role in list" :key="role.id" :value="role.id" v-text="role.name" />
      </VSelect>
    </VControl>
  </VField>
</template>
