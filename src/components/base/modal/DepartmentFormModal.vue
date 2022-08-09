<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onMounted, reactive, ref, watch } from 'vue';
import { create, updateById, fetchById, fetchStages } from '/@src/utils/api/department';
import { DepartmentData, StageData } from '/@src/utils/interfaces.js';
import VField from '../form/VField.vue';

const props = defineProps({
  modelValue: Boolean,
  departmentId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
const title = ref(t('Add'))
const isLoading = ref(false)
const stagesList = ref<StageData[]>([])
const errors = reactive({
  "name.uz": [],
  "name.en": [],
  "name.ru": [],
  stages: []
})
const departmentData: DepartmentData = reactive({
  name: {
    uz: '',
    ru: '',
    en: ''
  },
  stages: []
})

watch(
  () => props.departmentId,
  async (newVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchById(Number(props.departmentId))
      Object.assign(departmentData, res)
      Object.assign(departmentData.stages, res.stages.map(({ id }) => id))
    }
  },
  { deep: true, immediate: true }
)

onMounted(async () => {
  const res = await fetchStages()
  stagesList.value = res
})

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    props.departmentId ? await updateById(props.departmentId, departmentData) : await create(departmentData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  title.value = t('Add')
  clearFields()
  clearErrors()
  emits('update:modelValue', false)
}

function clearFields() {
  Object.assign(departmentData, {
    name: {
      uz: '',
      ru: '',
      en: ''
    },
    stages: []
  })
}

function clearErrors() {
  Object.assign(errors, {
    "name.uz": [],
    "name.en": [],
    "name.ru": [],
    stages: []
  })
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose()">
    <template #content>
      <form id="department-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Name_uz')" required>
              <VControl>
                <VInput name="name_uz" :placeholder="$t('Type_name_uz')" v-model="departmentData.name.uz" />
                <p class="help has-text-danger">{{ errors["name.uz"][0] }}</p>
              </VControl>
            </VField>
            <VField :label="$t('Name_ru')">
              <VControl>
                <VInput name="name_ru" :placeholder="$t('Type_name_ru')" v-model="departmentData.name.ru" />
              </VControl>
            </VField>
            <VField :label="$t('Name_en')">
              <VControl>
                <VInput name="name_en" :placeholder="$t('Type_name_en')" v-model="departmentData.name.en" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Stages')" required>
              <VControl>
                <Multiselect v-model="departmentData.stages" :searchable="false" :options="stagesList"
                  :placeholder="$t('Select_stages')" valueProp="id" label="name" mode="tags" :close-on-select="false" />
                <p class="help has-text-danger">{{ errors["stages"][0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="submit" form="department-form" :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
