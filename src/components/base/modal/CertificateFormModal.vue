<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  createStatementCertificate,
  fetchStatementCertificateStatuses,
} from '/@src/utils/api/statement';
import { StatementCertificateData } from '/@src/utils/interfaces'
import VFlex from '../flex/VFlex.vue';
import moment from 'moment';

const props = withDefaults(defineProps<{
  modelValue: boolean,
  statementId: number | string
}>(), {
  modelValue: false,
  statementId: ''
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
const files = ref<File[]>([]);
const certificateNumber = ref('')
const startDate = ref('')
const endDate = ref('')
const statusId = ref('')
const certificateStatuses = await fetchStatementCertificateStatuses()
const masks = ref({
  input: 'DD.MM.YYYY',
})
const isLoading = ref(false)
const errors = reactive({
  status_id: '',
  file: '',
  number: '',
  drug_name: '',
  start_date: '',
  end_date: '',
  manufacturer_name: ''
})
let title = ref(t('Add_certificate'))

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    const certificateData: StatementCertificateData = {
      application_id: props.statementId,
      file: typeof (files.value[0]) === 'object' ? files.value[0] : '',
      number: certificateNumber.value,
      start_date: startDate.value,
      end_date: endDate.value,
      status_id: statusId.value,
    }
    const formData = new FormData()
    formData.append('application_id', certificateData.application_id)
    formData.append('file', certificateData.file)
    formData.append('number', certificateData.number)
    formData.append('start_date', moment(certificateData.start_date).format('YYYY-MM-DD'))
    formData.append('end_date', moment(certificateData.end_date).format('YYYY-MM-DD'))
    formData.append('status_id', certificateData.status_id)

    await createStatementCertificate(formData)
    // emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  statusId.value = ''
  files.value = []
  certificateNumber.value = ''
  startDate.value = ''
  endDate.value = ''

  Object.assign(errors, {
    status_id: '',
    file: '',
    number: '',
    start_date: '',
    end_date: '',
  })
  emits('update:modelValue', false)
}

function clearErrors(event: Event) {
  const target = event.target as HTMLInputElement
  errors[target.name] = ''
}

function onFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  files.value = target.files && [target.files[0]];
  errors.file = ''
}

function onFileRemove() {
  files.value = []
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="certificate-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Certificate_number')" required>
              <VControl :has-error="errors.number[0]">
                <VInput type="number" :min="0" :max="100000000" name="number"
                  :placeholder="$t('Add_certificate_number')" v-model="certificateNumber" @input="clearErrors" />
                <p class="help has-text-danger">{{ errors.number[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VFlex column-gap="1rem">
              <VDatePicker :locale="locale" :masks="masks" v-model="startDate" color="green" trim-weeks>
                <template #default="{ inputValue, inputEvents }">
                  <VField :label="$t('Start_date')" required>
                    <VControl icon="feather:calendar">
                      <VInput :value="inputValue" v-on="inputEvents" />
                      <p class="help has-text-danger">{{ errors.start_date[0] }}</p>
                    </VControl>
                  </VField>
                </template>
              </VDatePicker>
              <VDatePicker :locale="locale" :masks="masks" v-model="endDate" color="green" trim-weeks>
                <template #default="{ inputValue, inputEvents }">
                  <VField :label="$t('End_date')" required>
                    <VControl icon="feather:calendar">
                      <VInput :value="inputValue" v-on="inputEvents" />
                      <p class="help has-text-danger">{{ errors.end_date[0] }}</p>
                    </VControl>
                  </VField>
                </template>
              </VDatePicker>
            </VFlex>
          </div>
          <div class="column is-12">
            <StatusSelect name="status_id" v-model="statusId" :list="certificateStatuses" :is-required="true"
              @change="clearErrors" />
            <p class="help has-text-danger">{{ errors.status_id[0] }}</p>
          </div>
          <div class="column is-12">
            <VFileInput :files="files" @file-upload="onFileUpload" @file-remove="onFileRemove"
              :error-message="errors.file[0]" :remote-files="[]" />
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="submit" form="certificate-form"
        :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
