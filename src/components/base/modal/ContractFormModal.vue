<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  createStatementContract,
  updateContractById,
  fetchStatementContractById,
} from '/@src/utils/api/statement'
import { fetchApplicants, fetchApplicantStatementsList } from '/@src/utils/api/applicant'
import {
  StatementContractData,
  ApplicantData,
  StatementData,
} from '/@src/utils/interfaces'

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null,
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
let title = ref(t('Add'))
const files = ref<File[]>([])
const applicantsList = ref<ApplicantData[]>()
const statementsList = ref<StatementData[]>()
const contractObj = ref<StatementContractData>({
  legal_entity_id: null,
  name: '',
  payment_amount: 0,
  template_file: '',
  applications: [],
})
const contractObjStatementIds = ref<number[]>([])
const errors = reactive({
  name: [],
  payment_amount: [],
  template_file: [],
  legal_entity_id: [],
  applications: [],
})
const isLoading = ref(false)

onMounted(async () => {
  const res = await fetchApplicants(locale.value)
  applicantsList.value = res
})

watch(
  () => props.itemId,
  async (newVal, oldVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchStatementContractById(Number(props.itemId))
      contractObj.value = res
      contractObjStatementIds.value = res.applications.map(
        (item: StatementData) => item.id
      )
    }
  },
  { deep: true, immediate: true }
)

watch(
  () => contractObj.value.legal_entity_id,
  async (newVal, oldVal) => {
    contractObj.value.applications = []
    if (newVal) {
      const res = await fetchApplicantStatementsList(Number(newVal))
      statementsList.value = res
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    const formData = new FormData()
    formData.append('name', contractObj.value.name)
    formData.append('payment_amount', contractObj.value.payment_amount)
    formData.append('template_file', files.value.length ? files.value[0] : '')
    formData.append('legal_entity_id', contractObj.value.legal_entity_id)

    contractObjStatementIds.value.forEach((item) => {
      formData.append('applications[]', item)
    })

    props.itemId
      ? await updateContractById(props.itemId, formData)
      : await createStatementContract(formData)
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
  if (!props.itemId) {
    title.value = t('Add')
    files.value = []
    contractObj.value = {
      legal_entity_id: null,
      name: '',
      payment_amount: 0,
      template_file: '',
      applications: [],
    }

    clearErrors()
  }
  emits('update:modelValue', false)
}

function clearErrors() {
  Object.keys(errors).forEach((prop) => {
    errors[prop] = []
  })
}

function onFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  files.value = target.files && [target.files[0]]
}

function onFileRemove(id: number) {
  files.value = []
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="contract-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Contract_name')" required>
              <VInput v-model="contractObj.name" />
              <p class="help has-text-danger">{{ errors.name[0] }}</p>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Contract_amount')" required>
              <VInput v-model="contractObj.payment_amount" type="number" />
              <p class="help has-text-danger">{{ errors.payment_amount[0] }}</p>
            </VField>
          </div>
          <div class="column is-12">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="contractObj.legal_entity_id"
                  :attrs="{ id }"
                  :searchable="true"
                  :options="applicantsList"
                  :placeholder="$t('Select_applicant')"
                  value-prop="id"
                  label="name"
                  :disabled="Boolean(itemId)"
                />
              </VControl>
            </VField>
            <p class="help has-text-danger">{{ errors.legal_entity_id[0] }}</p>
          </div>
          <div class="column is-12">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="contractObjStatementIds"
                  :attrs="{ id }"
                  :searchable="false"
                  :options="statementsList"
                  :placeholder="$t('Select_statements')"
                  value-prop="id"
                  label="uuid"
                  mode="tags"
                  :close-on-select="false"
                  :disabled="!contractObj.legal_entity_id"
                >
                  <template #nooptions>
                    <span class="p-3">{{ $t('The_list_is_empty') }}</span>
                  </template>
                </Multiselect>
              </VControl>
            </VField>
            <p class="help has-text-danger">{{ errors.applications[0] }}</p>
          </div>
          <div class="column is-12">
            <VFileInput
              :error-message="errors.template_file[0]"
              :files="files"
              :remote-files="[]"
              @file-upload="onFileUpload"
              @file-remove="onFileRemove"
            />
          </div>
        </div>
      </form>
    </template>
    <template #action>
      <VButton
        :loading="isLoading"
        color="primary"
        outlined
        type="submit"
        form="contract-form"
        :disabled="isLoading"
      >
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
