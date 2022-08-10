<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { addContractFile } from '/@src/utils/api/statement';

const props = withDefaults(defineProps<{
  modelValue: boolean,
  contractId: number | string,
  filePropName: string
}>(), {
  modelValue: false,
  contractId: ''
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:data'): void
}>()

const { t, locale } = useI18n()
const files = ref<File[]>([]);
const errorMessage = ref<string>('')
const isLoading = ref(false)

let title = ref(t('Add_file'))

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    if (files.value.length) {
      const formData = new FormData()
      formData.append(props.filePropName, files.value[0] ?? '')

      await addContractFile(Number(props.contractId), formData)
      emits('update:data')
      onClose()
    } else errorMessage.value = t('File_upload_field_required');
  } catch (error: any) {
    throw error
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  files.value = []
  errorMessage.value = ''
  emits('update:modelValue', false)
}

function onFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  files.value = target.files?.length && [target.files[0]];
  errorMessage.value = ''
}

function onFileRemove() {
  files.value = []
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="file-upload-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VFileInput :files="files" @file-upload="onFileUpload" @file-remove="onFileRemove"
              :error-message="errorMessage" :remote-files="[]" />
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <!-- <VButton color="primary" outlined type="submit" form="file-upload-form">{{ $t('Save') }}</VButton> -->
      <VButton color="primary" outlined type="submit" form="file-upload-form" :loading="isLoading"
        :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
