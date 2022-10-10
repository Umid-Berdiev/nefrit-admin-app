<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { cancelStatementById } from '/@src/utils/api/statement';

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null
  },
  statementId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const router = useRouter()
const { t } = useI18n()
let title = ref(t('Statement_cancel_action'))
const isLoading = ref(false)
const description = ref('')
const uploadedFile = ref<File>();
const errors = reactive({
  description: [],
  file: []
})

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    const values = new FormData(event.target)

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
    file: []
  })
  description.value = ''
  uploadedFile.value = undefined
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}

function onFileUpload(event: Event) {
  errors.file = []
  const target = event.target as HTMLInputElement
  uploadedFile.value = target.files ? target.files[0] : undefined;
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="conclusion-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Description')" required>
              <VControl>
                <VTextarea name="description" :placeholder="$t('Add_description')" v-model="description"
                  @input="clearErrors" :rows="3" />
                <p class="help has-text-danger">{{ errors.description[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
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
                    <span v-if="uploadedFile" class="file-name light-text">{{ uploadedFile?.name }}</span>
                  </label>
                </div>
                <p class="help has-text-danger">{{ errors.file[0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="submit" form="conclusion-form" :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
