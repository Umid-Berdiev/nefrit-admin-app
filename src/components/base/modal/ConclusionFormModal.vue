<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  createStatementConclusion,
  updateStatementConclusionById,
  fetchStatementConclusionById,
  fetchStatementConclusionStatuses,
} from '/@src/utils/api/statement';
import { ConclusionData } from '/@src/utils/interfaces'

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null
  },
  parentId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
let title = ref(t('Add'))
const text = ref('')
const statusId = ref()
const files = ref<File[]>([]);
const remoteFiles = ref([]);
const removedFileIds = ref<number[]>([]);
const conclusionStatuses = await fetchStatementConclusionStatuses()
const errors = reactive({
  text: '',
  status_id: ''
})

watch(
  () => props.itemId,
  async (newVal) => {
    if (!newVal) {
      title.value = t('Add')
      text.value = ''
      statusId.value = ''
      remoteFiles.value = []
    } else {
      title.value = t('Edit')
      const res = await fetchStatementConclusionById(Number(props.itemId))
      text.value = res.text
      statusId.value = res.status?.id
      remoteFiles.value = res.files
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    const conclusionData: ConclusionData = {
      text: text.value,
      application_id: props.parentId,
      status_id: statusId.value,
      files: files.value,
      removed_files: removedFileIds.value,
    }

    const formData = new FormData()
    formData.append('text', conclusionData.text)
    formData.append('application_id', conclusionData.application_id)
    formData.append('status_id', conclusionData.status_id)
    files.value.forEach(file => {
      formData.append('files[]', file)
    })
    remoteFiles.value.forEach(file => {
      formData.append('removes[]', file)
    })

    props.itemId ?
      await updateStatementConclusionById(props.itemId, formData) :
      await createStatementConclusion(formData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  }
}

function onClose() {
  text.value = ''
  statusId.value = ''
  files.value = []
  remoteFiles.value = []
  removedFileIds.value = []

  Object.assign(errors, {
    text: '',
    status_id: ''
  })
  emits('update:modelValue', false)
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}

function onFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  console.log('files: ', target.files);
  target.files && files.value?.push(target.files[0]);
}

function onFileRemove(id: number) {
  files.value = files.value?.filter(file => file.lastModified !== id)
}

function onRemoteFileRemove(id: number) {
  removedFileIds.value.push(id)
  remoteFiles.value = remoteFiles.value?.filter(file => file.id !== id)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="submit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('conclusion_in_details')" required>
              <VControl :has-error="errors.text[0]">
                <VTextarea name="text" :placeholder="$t('Add_text')" v-model="text" @input="clearErrors" />
                <p class="help has-text-danger">{{ errors.text[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <StatusSelect name="status_id" v-model="statusId" :list="conclusionStatuses" :is-required="true"
              @change="clearErrors" />
            <p class="help has-text-danger">{{ errors.status_id[0] }}</p>
          </div>
          <div class="column is-12">
            <VFileInput :files="files" :remote-files="remoteFiles" @file-upload="onFileUpload"
              @file-remove="onFileRemove" @remote-file-remove="onRemoteFileRemove" error-message="" />
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined type="submit" form="submit-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
