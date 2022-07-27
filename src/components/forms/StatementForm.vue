<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import VAction from '../base/button/VAction.vue';
import VButton from '../base/button/VButton.vue';
import VModal from '../base/modal/VModal.vue';
import CompanyInfoModal from '../base/modal/CompanyInfoModal.vue';
import VIcon from '../base/icon/VIcon.vue';
import DrugInfoModal from '../base/modal/DrugInfoModal.vue';

const { t } = useI18n()
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
    label: t('Applied_at'),
  },
  paymentStatus: {
    label: t('Payment_status')
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

function openCompanyInfoModal(id: number) {
  selectedCompanyId.value = id
  isCompanyInfoModalOpen.value = true
}

function openDrugInfoModal(id: number) {
  selectedDrugId.value = id
  isDrugInfoModalOpen.value = true
}
</script>

<template>
  <ListWidgetSingle :title="$t('Statement_details')" straight class="list-widget-v3">
    <template #actions>
      <VIconButton class="px-4" color="success" icon="feather:edit" circle outlined
        @click="isStatementEditModalOpen = true" />
    </template>
    <table class="table is-hoverable is-bordered is-fullwidth">
      <tbody>
        <tr>
          <td class="has-text-weight-bold">{{ columns.company.label }}</td>
          <td>
            <a href="javascript:;" class="has-text-primary" @click="openCompanyInfoModal(1)">
              Company name
              <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.drug.label }}</td>
          <td>
            <a href="javascript:;" class="has-text-primary" @click="openDrugInfoModal(1)">
              Wistmus
              <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.statementCreator.label }}</td>
          <td>Watson</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.stage.label }}</td>
          <td>Joestar</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.date.label }}</td>
          <td>Jensen</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.paymentStatus.label }}</td>
          <td>Jensen</td>
        </tr>
        <tr>
          <td class="has-text-weight-bold">{{ columns.certificate.label }}</td>
          <td>
            <a href="javascript:;" class="has-text-primary">Link for certificate</a>
          </td>
        </tr>
      </tbody>
    </table>
  </ListWidgetSingle>
  <CompanyInfoModal v-model="isCompanyInfoModalOpen" />
  <DrugInfoModal v-model="isDrugInfoModalOpen" />
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
