<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { fetchById, updateById } from '/@src/utils/api/employee';
import { EmployeeData } from '/@src/utils/interfaces';

const props = defineProps({
  modelValue: Boolean,
  employeeId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
const title = ref(t('Edit'))
const employeeData: EmployeeData = reactive({
  department_id: null,
  email: '',
  name: '',
  password: '',
  role_id: null,
  username: '',
})

onMounted(async () => {
  //
})

watch(
  () => props.employeeId,
  async (newVal) => {
    if (!newVal) {
      Object.assign(employeeData, {})
    } else {
      const res = await fetchById(Number(props.employeeId))
      Object.assign(employeeData, res)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    props.employeeId && await updateById(props.employeeId, employeeData)
    emits('update:list')
    onClose()
  } catch (error) {
    throw error
  }
}

function onClose() {
  emits('update:modelValue', false)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="employee-submit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Applicant_name')" required>
              <VControl>
                <VInput type="text" v-model="employeeData.name" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Boss_name')" required>
              <VControl>
                <VInput type="text" v-model="employeeData.boss_name" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Phone_number')">
              <VControl>
                <VInput type="text" v-model="employeeData.phone" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Fax')">
              <VControl>
                <VInput type="text" v-model="employeeData.fax" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('stir')">
              <VControl>
                <VInput type="text" v-model="employeeData.inn" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <CountrySelect v-model="employeeData.country" />
          </div>
          <div class="column is-6 is-align-self-flex-end">
            <input id="checkbox1" type="checkbox" :checked="employeeData.is_national" />
            <label for="checkbox1" class="checkbox">
              {{ $t('isNational') }}
            </label>
          </div>
          <div class="column is-12">
            <VField :label="$t('Address')">
              <VControl>
                <VTextarea rows="2" v-model="employeeData.address" />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" color="primary" outlined form="employee-submit-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
