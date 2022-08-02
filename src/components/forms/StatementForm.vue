<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CompanyInfoModal from '../base/modal/CompanyInfoModal.vue';
import DrugInfoModal from '../base/modal/DrugInfoModal.vue';
import { fetchById } from '/@src/utils/api/statement'
import { useRoute } from 'vue-router';
import { StatementData } from '/@src/utils/interfaces';
import moment from 'moment';
import VButton from '../base/button/VButton.vue';
import { useHead } from '@vueuse/head';
import { useViewWrapper } from '/@src/stores/viewWrapper';

const { t, locale } = useI18n()
const columns = {
  company: {
    label: t('Applied_legal_entity'),
  },
  drug: {
    label: t('Drug_name'),
  },
  statementCreator: {
    label: t('Statement_creator'),
  },
  stage: {
    label: t('Stage')
  },
  date: {
    label: t('applied_at'),
  },
  paymentStatus: {
    label: t('Payment_status')
  },
  contract: {
    label: t('Contract')
  },
  certificate: {
    label: t('Certificate')
  },
} as const
const isStatementEditModalOpen = ref(false)
const selectedCompanyId = ref()
const selectedDrugId = ref()
const isCompanyInfoModalOpen = ref(false)
const isDrugInfoModalOpen = ref(false)
const isCertificateFormModalOpen = ref(false)
const route = useRoute()
const currentId = (route.params?.id as string) ?? null
const currentStatementData = ref<StatementData>()

onMounted(async () => {
  await fetchData()
})

function openCompanyInfoModal(id: number) {
  selectedCompanyId.value = id
  isCompanyInfoModalOpen.value = true
}

function openDrugInfoModal(id: number) {
  selectedDrugId.value = id
  isDrugInfoModalOpen.value = true
}

function formatDate(date: string) {
  return date ? moment(date).format('HH:mm DD.MM.YYYY') : ''
}

async function fetchData() {
  const res = await fetchById(Number(currentId), locale.value)
  currentStatementData.value = res
}
</script>

<template>
  <ListWidgetSingle :title="$t('Statement_details')" straight class="list-widget-v3">
    <!-- <template #actions>
      <VIconButton class="px-4" color="success" icon="feather:edit" circle outlined
        @click="isStatementEditModalOpen = true" />
    </template> -->
    <table class="table is-hoverable is-bordered is-fullwidth">
      <tbody>
        <tr>
          <td class="has-text-weight-bold">{{ columns.company.label }}</td>
          <td>
            <a href="javascript:;" class="has-text-primary" @click="openCompanyInfoModal(1)">
              {{ currentStatementData?.legal_entity?.name }}
              <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.drug.label }}</td>
          <td>
            <a href="javascript:;" class="has-text-primary" @click="openDrugInfoModal(1)">
              {{ currentStatementData?.drug?.name }}
              <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.statementCreator.label }}</td>
          <td>{{ currentStatementData?.applicant }}</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.stage.label }}</td>
          <td>{{ currentStatementData?.stage?.name }}</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.date.label }}</td>
          <td>{{ formatDate(currentStatementData?.date) }}</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.paymentStatus.label }}</td>
          <td>
            <VTag v-if="currentStatementData?.is_payed" color="primary" :label="$t('Paid')" outlined rounded />
            <VTag v-else color="danger" :label="$t('Not_Paid')" outlined rounded />
          </td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.contract.label }}</td>
          <td>
            <a v-if="currentStatementData?.contract_id" :href="'/app/contract/' + currentStatementData?.contract_id"
              class="has-text-primary">
              {{ $t('Link_for_contract') }}
              <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
            </a>
            <span v-else class="has-text-danger">
              {{ $t('No_contract') }}
            </span>
          </td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.certificate.label }}</td>
          <td class="is-flex is-align-items-center">
            <a v-if="currentStatementData?.certificate" :href="currentStatementData?.certificate?.file"
              class="has-text-primary" download>
              {{ currentStatementData?.certificate?.number }}
              <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
            </a>
            <span v-else class="has-text-danger">
              {{ $t('No_certificate') }}
            </span>
            <VButton class="ml-auto" color="primary" rounded icon="fas fa-plus"
              @click="isCertificateFormModalOpen = true"> {{
                  $t('Upload')
              }} </VButton>
          </td>
        </tr>
      </tbody>
    </table>
  </ListWidgetSingle>
  <CompanyInfoModal v-model="isCompanyInfoModalOpen" :company-data="currentStatementData?.legal_entity" />
  <DrugInfoModal v-model="isDrugInfoModalOpen" :drug-data="currentStatementData?.drug" />
  <CertificateFormModal v-model="isCertificateFormModalOpen" :statement-id="currentId" @close="fetchData" />
</template>

<style scoped lang="scss">
// .content {
//   background: var(--dark-sidebar-light-6);
//   border-radius: var(--radius-large);
//   padding: 20px;
// }

.is-dark .content {
  background: var(--dark-sidebar-light-6);
  border-radius: var(--radius-large);
  padding: 20px;
}
</style>
