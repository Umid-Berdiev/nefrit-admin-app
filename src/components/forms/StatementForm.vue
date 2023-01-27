<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CompanyInfoModal from '../base/modal/CompanyInfoModal.vue'
import DrugInfoModal from '../base/modal/DrugInfoModal.vue'
import {
  fetchById,
  fetchChronologies,
  canChangeStage,
  checkPermissionForCertificate,
  createStatementCertificate,
} from '/@src/utils/api/statement'
import { useRoute } from 'vue-router'
import { StatementChronologyData, StatementData } from '/@src/utils/interfaces'
import { useNotyf } from '/@src/composable/useNotyf'
import StatementCancelFormModal from '../base/modal/StatementCancelFormModal.vue'
import { isNull } from 'lodash'
import { useMainStore } from '/@src/stores'
import { useUserSession } from '/@src/stores/userSession'

const route = useRoute()
const { t, locale } = useI18n()
const notif = useNotyf()
const columns = {
  uuid: {
    label: t('statement_code'),
  },
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
    label: t('Stage'),
  },
  date: {
    label: t('applied_at'),
  },
  paymentStatus: {
    label: t('Payment_status'),
  },
  contract: {
    label: t('Contract'),
  },
  certificate: {
    label: t('Certificate'),
  },
  cancel: {
    label: t('Cancel_letter'),
  },
} as const
const selectedCompanyId = ref()
const isCompanyInfoModalOpen = ref(false)
const isDrugInfoModalOpen = ref(false)
const isCertificateFormModalOpen = ref(false)
const isStatementStageFormModalOpen = ref(false)
const isStatementCancelModalOpen = ref(false)
const currentId = (route.params?.id as string) ?? null
const currentStatementData = ref<StatementData>()
const currentStage = computed(() => currentStatementData.value?.stage.id as number)
const chronologyData = ref<StatementChronologyData[]>()
const canChange = ref(false)
const canCertify = ref(false)
const isConfirmActionModalOpen = ref(false)
const mainStore = useMainStore()
const { userRoleID } = useUserSession()

onMounted(async () => {
  await fetchData()
  await checkUserForStageChange()
  await checkStatementPermissionForCertificate()
})

function openCompanyInfoModal(id: number) {
  selectedCompanyId.value = id
  isCompanyInfoModalOpen.value = true
}

function openDrugInfoModal() {
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

async function checkStatementPermissionForCertificate() {
  const res = await checkPermissionForCertificate(currentId)
  canCertify.value = res
}

function openConfirmActionModal() {
  mainStore.confirmModalState = true
  mainStore.confirmModalOkButtonColor = 'primary'
}

async function generateCertificate() {
  try {
    await createStatementCertificate({ application_id: currentId })
    await fetchData()
    notif.success()
  } catch (error: any) {
    notif.error(error.message)
  }
}
</script>

<template>
  <div class="columns mt-5">
    <div class="column is-6">
      <ListWidgetSingle :title="$t('Statement_details')" straight class="list-widget-v3">
        <template #actions>
          <VButton
            v-if="
              !currentStatementData?.is_canceled &&
              isNull(currentStatementData?.certificate) &&
              userRoleID !== 7
            "
            class="px-4"
            color="danger"
            circle
            outlined
            @click="isStatementCancelModalOpen = true"
          >
            {{ $t('Cancel_statement') }}
          </VButton>
        </template>
        <table class="table is-hoverable is-bordered is-fullwidth">
          <tbody>
            <tr>
              <td class="has-text-weight-bold">{{ columns.uuid.label }}</td>
              <td>
                {{ currentStatementData?.uuid }}
                <!-- <a
                  href="javascript:;"
                  class="has-text-primary"
                  @click="openCompanyInfoModal(1)"
                >
                  {{ currentStatementData?.uuid }}
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a> -->
              </td>
            </tr>
            <tr>
              <td class="has-text-weight-bold">{{ columns.drug.label }}</td>
              <td>
                <a
                  href="javascript:;"
                  class="has-text-primary"
                  @click="openDrugInfoModal"
                >
                  {{ currentStatementData?.drug?.name }}
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
            <!-- <tr>
              <td class="has-text-weight-bold">{{ columns.statementCreator.label }}</td>
              <td>{{ currentStatementData?.applicant }}</td>
            </tr> -->
            <tr>
              <td class="has-text-weight-bold">{{ columns.stage.label }}</td>
              <td class="is-flex is-align-items-center">
                <span class="mr-3">{{ currentStatementData?.stage?.name }}</span>
                <VButton
                  v-if="canChange"
                  class="ml-auto"
                  color="primary"
                  rounded
                  icon="feather:edit-2"
                  @click="isStatementStageFormModalOpen = true"
                >
                  {{ $t('Change_stage') }}
                </VButton>
              </td>
            </tr>
            <tr>
              <td class="has-text-weight-bold">{{ columns.date.label }}</td>
              <td>
                {{
                  currentStatementData?.date &&
                  $h.formatDate(currentStatementData?.date, 'HH:mm DD.MM.YYYY')
                }}
              </td>
            </tr>
            <tr>
              <td class="has-text-weight-bold">{{ columns.paymentStatus.label }}</td>
              <td>
                <VTag
                  v-if="currentStatementData?.is_paid"
                  color="primary"
                  :label="$t('Paid')"
                  outlined
                  rounded
                />
                <VTag v-else color="danger" :label="$t('Not_Paid')" outlined rounded />
              </td>
            </tr>
            <tr>
              <td class="has-text-weight-bold">{{ columns.contract.label }}</td>
              <td>
                <a
                  v-if="currentStatementData?.contract_id"
                  :href="'/app/contracts/' + currentStatementData?.contract_id"
                  class="has-text-primary"
                >
                  {{ $t('Link_for_contract') }}
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a>
                <span v-else class="has-text-danger">
                  {{ $t('No_contract') }}
                </span>
              </td>
            </tr>
            <tr v-if="!currentStatementData?.is_canceled">
              <td class="has-text-weight-bold">{{ columns.certificate.label }}</td>
              <td class="is-flex is-align-items-center">
                <a
                  v-if="currentStatementData?.certificate"
                  :href="currentStatementData?.certificate?.file"
                  target="_blank"
                  class="has-text-primary"
                  download
                >
                  {{ currentStatementData?.certificate?.number }}
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a>
                <span v-else class="has-text-danger">
                  {{ $t('No_certificate') }}
                </span>
                <VButton
                  v-if="
                    canCertify &&
                    !currentStatementData?.certificate &&
                    currentStatementData?.voice_status
                  "
                  class="ml-auto"
                  color="primary"
                  rounded
                  :icon="'fas fa-plus'"
                  @click="openConfirmActionModal"
                >
                  {{ $t('Generate') }}
                </VButton>
              </td>
            </tr>
            <tr v-if="currentStatementData?.is_canceled">
              <td class="has-text-weight-bold">{{ columns.cancel.label }}</td>
              <td>
                <a
                  :href="currentStatementData?.cancel?.file"
                  class="has-text-warning"
                  download
                >
                  {{ currentStatementData?.cancel?.number }}
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a>
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
    <CompanyInfoModal
      v-model="isCompanyInfoModalOpen"
      :company-data="currentStatementData?.legal_entity"
    />
    <DrugInfoModal
      v-model="isDrugInfoModalOpen"
      :drug-data="currentStatementData?.drug"
    />
    <!-- <CertificateFormModal
      v-model="isCertificateFormModalOpen"
      :statement-id="currentId"
      @close="fetchData"
    /> -->
    <StatementStageFormModal
      v-model="isStatementStageFormModalOpen"
      :statement-id="Number(currentId)"
      :statement-stage="Number(currentStage)"
      @update:data="
        () => {
          fetchData()
          successNotify()
        }
      "
    />
    <StatementCancelFormModal
      v-model="isStatementCancelModalOpen"
      :statement-id="Number(currentId)"
    />
    <ConfirmGeneratingCertificateModal
      :drug-data="currentStatementData?.drug"
      @confirm-action="generateCertificate"
    />
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
