<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { create, updateById, fetchById } from '/@src/utils/api/regulation';
import { RegulationData } from '/@src/utils/interfaces';
import VTextarea from '../form/VTextarea.vue';

const props = defineProps({
  modelValue: Boolean,
  regulationId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
const modalTitle = ref(t('Add'))
const isLoading = ref(false)
const uploadedFile = ref<File>();
const fileUrl = ref('')
const regulationData: RegulationData = reactive({
  title: {
    uz: '',
    ru: '',
    en: ''
  },
  date: new Date(),
  file: ''
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})
const errors = reactive({
  "title.uz": [],
  "title.en": [],
  "title.ru": [],
  "date": [],
  "file": [],
})

watch(
  () => props.regulationId,
  async (newVal) => {
    if (newVal) {
      modalTitle.value = t('Edit')
      const res = await fetchById(Number(props.regulationId))
      Object.assign(regulationData, res)
      fileUrl.value = res.file
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    const formData = new FormData()
    formData.append("date", regulationData.date)
    formData.append("file", uploadedFile.value ?? '')
    formData.append("title[uz]", regulationData.title.uz)
    formData.append("title[ru]", regulationData.title.ru)
    formData.append("title[en]", regulationData.title.en)

    props.regulationId ? await updateById(props.regulationId, formData) : await create(formData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  modalTitle.value = t('Add')
  clearFields()
  clearErrors()
  emits('update:modelValue', false)
}

function clearFields() {
  Object.assign(regulationData, {
    title: {
      uz: '',
      ru: '',
      en: ''
    },
    date: new Date(),
    file: ''
  })
  fileUrl.value = ''
  uploadedFile.value = undefined
}

function clearErrors() {
  Object.assign(errors, {
    "title.uz": [],
    "title.en": [],
    "title.ru": [],
    "date": [],
    "file": [],
  })
}

function onFileUpload(event: Event) {
  errors.file = []
  const target = event.target as HTMLInputElement
  uploadedFile.value = target.files ? target.files[0] : undefined;
}

</script>

<template>
  <VModal :open="modelValue" size="large" :title="modalTitle" actions="right" @close="onClose">
    <template #content>
      <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
        <VTabs type="boxed" selected="uz" :tabs="[
          { label: $t('Uzbek'), value: 'uz' },
          { label: $t('Russian'), value: 'ru' },
          { label: $t('English'), value: 'en' },
        ]">
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'uz'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Title_uz')" required>
                  <VControl>
                    <VTextarea :placeholder="t('Type_title_uz')" v-model="regulationData.title.uz" :rows="3"
                      @input="errors['title.uz'] = []" />
                    <p class="help has-text-danger">{{ errors["title.uz"][0] }}</p>
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'ru'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Title_ru')">
                  <VControl>
                    <VTextarea :placeholder="t('Type_title_ru')" v-model="regulationData.title.ru" :rows="3" />
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'en'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Title_en')">
                  <VControl>
                    <VTextarea :placeholder="t('Type_title_en')" v-model="regulationData.title.en" :rows="3" />
                  </VControl>
                </VField>
              </div>
            </div>
          </template>
        </VTabs>
        <div class="is-divider"></div>
        <VField grouped>
          <VControl>
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="file" @change="onFileUpload" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-cloud-upload-alt"></i>
                  </span>
                  <span class="file-label">{{ $t('Choose_a_file') }}</span>
                </span>
                <span v-if="uploadedFile || fileUrl" class="file-name light-text">
                  {{ uploadedFile?.name ?? fileUrl }}
                </span>
              </label>
            </div>
            <p class="help has-text-danger">{{ errors.file[0] }}</p>
          </VControl>
        </VField>
        <div class="is-divider"></div>
        <VField grouped>
          <VDatePicker v-model="regulationData.date" mode="date" :model-config="datePickerModelConfig"
            :masks='{ input: ["DD.MM.YYYY"] }'>
            <template #default="{ inputValue, inputEvents }">
              <VField :label="$t('Date')">
                <VControl icon="feather:calendar">
                  <VInput :value="inputValue" v-on="inputEvents" />
                  <p class="help has-text-danger">{{ errors.date[0] }}</p>
                </VControl>
              </VField>
            </template>
          </VDatePicker>
        </VField>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="submit" form="role-form" :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.file-name {
  max-width: none;
}
</style>
