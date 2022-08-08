<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CompanyInfoModal from '../base/modal/CompanyInfoModal.vue';
import DrugInfoModal from '../base/modal/DrugInfoModal.vue';
import { fetchById, fetchChronologies, canChangeStage } from '/@src/utils/api/statement'
import { useRoute } from 'vue-router';
import { StatementChronologyData, StatementData } from '/@src/utils/interfaces';
import VButton from '../base/button/VButton.vue';
import { useNotyf } from '/@src/composable/useNotyf';

const route = useRoute()
const { t, locale } = useI18n()
const notif = useNotyf()
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
const isStatementStageFormModalOpen = ref(false)
const currentId = (route.params?.id as string) ?? null
const currentStatementData = ref<StatementData>()
const currentState = computed(() => currentStatementData.value?.stage.id as number)
const chronologyData = ref<StatementChronologyData[]>()
const canChange = ref(false)

onMounted(async () => {
  await fetchData()
  await checkUserForStageChange()
})

function openCompanyInfoModal(id: number) {
  selectedCompanyId.value = id
  isCompanyInfoModalOpen.value = true
}

function openDrugInfoModal(id: number) {
  selectedDrugId.value = id
  isDrugInfoModalOpen.value = true
}

async function fetchData() {
  const res = await fetchById(Number(currentId))
  currentStatementData.value = res
  const res2 = await fetchChronologies(Number(currentId))
  chronologyData.value = res2
}

async function checkUserForStageChange() {
  const res = await canChangeStage(Number(currentId))
  canChange.value = res.result
}
function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="columns mt-5">
    <div class="column is-6">
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
              <td class="is-flex is-align-items-center">
                <span class="mr-3">{{ currentStatementData?.stage?.name }}</span>
                <VButton v-if="canChange" class="ml-auto" color="primary" rounded icon="feather:edit-2"
                  @click="isStatementStageFormModalOpen = true">
                  {{ $t('Change_stage') }}
                </VButton>
              </td>
            </tr>
            <tr>
              <td class="has-text-weight-bold">{{ columns.date.label }}</td>
              <td>{{ currentStatementData?.date && $h.formatDate(currentStatementData?.date, 'HH:mm DD.MM.YYYY') }}</td>
            </tr>
            <tr>
              <td class="has-text-weight-bold">{{ columns.paymentStatus.label }}</td>
              <td>
                <VTag v-if="currentStatementData?.is_paid" color="primary" :label="$t('Paid')" outlined rounded />
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
                  @click="isCertificateFormModalOpen = true">
                  {{ $t('Upload') }}
                </VButton>
              </td>
            </tr>
          </tbody>
        </table>
      </ListWidgetSingle>
    </div>
    <div class="column is-6">
      <ListWidgetSingle :title="$t('Chronology')" straight class="list-widget-v3">
        <ListWidgetIconTimeline :items="chronologyData" />
      </ListWidgetSingle>
    </div>
    <CompanyInfoModal v-model="isCompanyInfoModalOpen" :company-data="currentStatementData?.legal_entity" />
    <DrugInfoModal v-model="isDrugInfoModalOpen" :drug-data="currentStatementData?.drug" />
    <CertificateFormModal v-model="isCertificateFormModalOpen" :statement-id="currentId" @close="fetchData" />
    <StatementStageFormModal v-model="isStatementStageFormModalOpen" :statement-id="Number(currentId)"
      :statement-stage="currentState" @update:data="() => { fetchData(); successNotify(); }" />
  </div>
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
