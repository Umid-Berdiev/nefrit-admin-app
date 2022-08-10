<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { editorData, editorConfig } from '/@src/data/ck-editor/editor-data'
import { ContractTemplateData } from "/@src/utils/interfaces";
import { create, fetchById, updateById } from "/@src/utils/api/contract-templates";
import VField from "../form/VField.vue";
import VControl from "../form/VControl.vue";

const props = defineProps({
  modelValue: Boolean,
  templateId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
const CKEditor = CKE.component
const title = ref(t('Add'))
const isLoading = ref(false)
const errors = reactive({
  name: [],
  body: [],
  payment_amount: []
})
const templateData: ContractTemplateData = reactive({
  name: '',
  body: '',
  payment_amount: 0
})

watch(
  () => props.templateId,
  async (newVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchById(Number(props.templateId))
      Object.assign(templateData, res)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    props.templateId ? await updateById(props.templateId, templateData) : await create(templateData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
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
  Object.assign(templateData, {
    name: '',
    body: '',
    payment_amount: 0
  })
}

function clearErrors() {
  Object.assign(errors, {
    name: [],
    body: [],
    payment_amount: []
  })
}
</script>

<template>
  <VModal :open="modelValue" size="big" actions="right" :title="$t('Add_contract_template')" @close="onClose">
    <template #content>
      <div class="columns is-multiline">
        <div class="column is-12">
          <VField :label="$t('Template_title')" required>
            <VControl>
              <VInput type="text" :placeholder="$t('Template_title')" v-model="templateData.name" />
              <p class="help has-text-danger">{{ errors.name[0] }}</p>
            </VControl>
          </VField>
          <!-- <VField :label="$t('Payment_amount')">
            <VControl>
              <VInput type="text" :placeholder="$t('Payment_amount')" v-model="templateData.payment_amount" />
              <p class="help has-text-danger">{{ errors.payment_amount[0] }}</p>
            </VControl>
          </VField> -->
          <VField :label="$t('Body')" required>
            <CKEditor v-model="templateData.body" :editor="ClassicEditor" :config="editorConfig">
            </CKEditor>
            <p class="help has-text-danger">{{ errors.body[0] }}</p>
          </VField>
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="button" :disabled="isLoading" @click="onSubmit">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>

<style lang="scss">
.ck-editor__editable[role="textbox"] {
  /* editing area */
  min-height: 25vh !important;
}
</style>
