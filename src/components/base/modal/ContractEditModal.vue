<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

export interface RoleInterface {
  name: string,
  description: string,
}

const props = defineProps({
  modelValue: Boolean,
  item: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const { t } = useI18n()
const uploadedFileName = ref(null);
const ContractAmount = ref(0);
const isLoading = ref(false)

function onSubmit(event: Event) {
  isLoading.value = true
  const values = Object.fromEntries(new FormData(event.target))
  alert(JSON.stringify(values, null, 2));
  isLoading.value = false
}

function onFileUpload(event: Event) {
  uploadedFileName.value = event.target.files[0].name
}
</script>

<template>
  <VModal :title="$t('Upload')" :open="modelValue" actions="right" @close="emits('update:modelValue', false)">
    <template #content>
      <form id="contract-edit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField grouped class="mt-3 mr-5">
              <VControl>
                <div class="file is-info">
                  <label class="file-label">
                    <input class="file-input" type="file" name="contract_file" @change="onFileUpload">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                      </span>
                      <span class="file-label">
                        {{ $t('Upload_contract') }}
                      </span>
                    </span>
                  </label>
                </div>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Name')" required>
              <VControl>
                <VInput name="role_name" :placeholder="t('Type_contract_name')" v-model="uploadedFileName" required />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Contract_amount')" required>
              <VControl>
                <VInput name="role_name" type="number" :min="0" :placeholder="t('Type_contract_amount')"
                  v-model="ContractAmount" required />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" color="primary" outlined form="contract-edit-form" :disabled="isLoading"
        :loading="isLoading">{{ $t('Save_changes') }}</VButton>
    </template>
  </VModal>
</template>
