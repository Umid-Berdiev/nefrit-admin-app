<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { cancelStatementById } from '/@src/utils/api/statement'
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { editorConfig } from '/@src/data/ck-editor/editor-data'

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null,
  },
  statementId: {
    type: Number,
    default: null,
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const CKEditor = CKE.component
const router = useRouter()
const { t } = useI18n()
let title = ref(t('Statement_cancel_action'))
const isLoading = ref(false)
const number = ref('')
const description = ref('')
const errors = reactive({
  description: [],
  number: [],
})

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    const values = {
      number: number.value,
      description: description.value,
    }

    await cancelStatementById(props.statementId, values)
    clearFields()
    router.push('/app/statements')
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  emits('update:modelValue', false)
  clearFields()
}

function clearFields() {
  Object.assign(errors, {
    description: [],
    number: [],
  })
  description.value = ''
  number.value = ''
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="conclusion-form" class="modal-form" @submit.prevent="onSubmit">
        <VField :label="$t('Letter_number')" required>
          <VControl>
            <VInput
              v-model="number"
              :placeholder="$t('Add_letter_number')"
              @input="clearErrors"
            />
            <p class="help has-text-danger">{{ errors.number[0] }}</p>
          </VControl>
        </VField>
        <!-- <VField :label="$t('Description')" required>
          <VControl>
            <VTextarea
              v-model="description"
              name="description"
              :placeholder="$t('Add_description')"
              :rows="3"
              @input="clearErrors"
            />
            <p class="help has-text-danger">{{ errors.description[0] }}</p>
          </VControl>
        </VField> -->
        <VField :label="$t('Description')" required>
          <CKEditor
            v-model="description"
            :editor="ClassicEditor"
            :config="editorConfig"
          />
          <p class="help has-text-danger">{{ errors.description[0] }}</p>
        </VField>
      </form>
    </template>
    <template #action="{ close }">
      <VButton
        :loading="isLoading"
        color="primary"
        outlined
        type="submit"
        form="conclusion-form"
        :disabled="isLoading"
      >
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
