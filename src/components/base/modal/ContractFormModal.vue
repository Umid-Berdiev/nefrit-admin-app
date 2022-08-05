<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import VueSelect from "vue-select";
import {
  createStatementContract,
  updateContractById,
  fetchStatementContractById,
} from '/@src/utils/api/statement';
import {
  fetchApplicants,
  fetchApplicantStatementsList
} from '/@src/utils/api/applicant';
import { StatementContractData, ApplicantData, StatementData } from '/@src/utils/interfaces'
import VInput from '../form/VInput.vue';

import 'vue-select/dist/vue-select.css';

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
let title = ref(t('Add'))
const files = ref<File[]>([]);
const applicantsList = ref<ApplicantData[]>()
const statementsList = ref<StatementData[]>()
const contractObj: StatementContractData = reactive({
  legal_entity_id: null,
  name: '',
  payment_amount: 0,
  template_file: '',
  applications: []
})
const contractObjStatementIds = ref<number[]>([])
const errors = reactive({
  name: '',
  payment_amount: '',
  template_file: '',
  legal_entity_id: '',
  applications: '',
})

onMounted(async () => {
  const res = await fetchApplicants(locale.value)
  applicantsList.value = res
})

watch(
  () => props.itemId,
  async (newVal, oldVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchStatementContractById(Number(props.itemId), locale.value)
      Object.assign(contractObj, res)
      contractObjStatementIds.value = res.applications.map((item: StatementData) => item.id)
    }
  },
  { deep: true, immediate: true }
)

watch(
  () => contractObj.legal_entity_id,
  async (newVal, oldVal) => {
    contractObj.applications = []
    if (newVal) {
      const res = await fetchApplicantStatementsList(Number(newVal), locale.value)
      statementsList.value = res
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    const formData = new FormData()
    formData.append('name', contractObj.name)
    formData.append('payment_amount', contractObj.payment_amount)
    formData.append('template_file', files.value[0])
    formData.append('legal_entity_id', contractObj.legal_entity_id)

    contractObjStatementIds.value.forEach(item => {
      formData.append('applications[]', item)
    })

    props.itemId ?
      await updateContractById(props.itemId, formData) :
      await createStatementContract(formData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  }
}

function onClose() {
  title.value = t('Add')
  files.value = []
  Object(contractObj, {} as StatementContractData)

  Object.assign(errors, {
    name: '',
    payment_amount: '',
    template_file: '',
    applications: '',
    legal_entity_id: '',
  })
  emits('update:modelValue', false)
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}

function onFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  console.log('files: ', target.files);
  files.value = target.files && [target.files[0]];
}

function onFileRemove(id: number) {
  files.value = []
}

</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="submit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Contract_name')" required>
              <VInput v-model="contractObj.name" />
              <p class="help has-text-danger">{{ errors.name[0] }}</p>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Contract_amount')" required>
              <VInput type="number" v-model="contractObj.payment_amount" />
              <p class="help has-text-danger">{{ errors.payment_amount[0] }}</p>
            </VField>
          </div>
          <div class="column is-12">
            <VFileInput @file-upload="onFileUpload" @file-remove="onFileRemove" :error-message="errors.template_file[0]"
              :files="files" :remote-files="[]" />
          </div>
          <div class="column is-12">
            <VueSelect :disabled="itemId" v-model="contractObj.legal_entity_id" :options="applicantsList" label="name"
              code="id" :reduce="applicant => applicant.id" :placeholder="$t('Select_applicant')" />
            <p class="help has-text-danger">{{ errors.legal_entity_id[0] }}</p>
            <!-- <VField>
              <VControl>
                <VSelect v-model="contractObj.legal_entity_id">
                  <VOption disabled hidden value="">{{ $t('Select_applicant') }}</VOption>
                  <VOption v-for="applicant in applicantsList" :value="applicant.id">
                    {{ applicant.name }}
                  </VOption>
                </VSelect>
              </VControl>
            </VField> -->
          </div>
          <div class="column is-12">
            <VueSelect :disabled="!contractObj.legal_entity_id" v-model="contractObjStatementIds"
              :options="statementsList" :reduce="statement => statement.id" label="code" code="id"
              :placeholder="$t('Select_statements')" multiple :close-on-select="false" />
            <p class="help has-text-danger">{{ errors.applications[0] }}</p>
            <!-- <VField>
              <VControl>
                <StatementMultiSelect :disabled="!contractObj.legal_entity_id" :selected-ids="contractObj.applications"
                  :options="statementsList" />
              </VControl>
            </VField> -->
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined type="submit" form="submit-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
