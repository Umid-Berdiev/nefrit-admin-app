<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CompanyInfoModal from '../base/modal/CompanyInfoModal.vue';
import DrugInfoModal from '../base/modal/DrugInfoModal.vue';
import { fetchById, fetchStatementContractById } from '/@src/utils/api/statement'
import { useRoute } from 'vue-router';
import { StatementContractData } from '/@src/utils/interfaces';
import moment from 'moment';
import VButton from '../base/button/VButton.vue';
import { useHead } from '@vueuse/head';
import { useViewWrapper } from '/@src/stores/viewWrapper';

const { t, locale } = useI18n()
const columns = computed(() => ({
  name: {
    label: t('Name'),
    searchable: true,
    // sortable: true,
  },
  legal_entity: {
    label: t('Applicant'),
    // sortable: true,
  },
  payment_amount: {
    label: t('Contract_amount'),
  },
  verified_at: {
    label: t('Payment_status'),
  },
  created_at: {
    label: t('Date'),
  }
}))
const selectedCompanyId = ref()
const selectedDrugId = ref()
const isCompanyInfoModalOpen = ref(false)
const isDrugInfoModalOpen = ref(false)
const isCertificateFormModalOpen = ref(false)
const route = useRoute()
const currentId = (route.params?.id as string) ?? null
const contractData = ref<StatementContractData>()

await fetchData()
// onMounted(async () => {
// })

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
  const res = await fetchStatementContractById(Number(currentId), locale.value)
  contractData.value = res
}
</script>

<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-6">
        <ListWidgetSingle :title="$t('Contract_details')" straight class="list-widget-v3">
          <table class="table is-hoverable is-bordered is-fullwidth mb-5">
            <tbody>
              <tr>
                <td class="has-text-weight-bold">{{ columns.name.label }}</td>
                <td>
                  {{ contractData?.name }}
                  <!-- <a href="javascript:;" class="has-text-primary" @click="openCompanyInfoModal(1)">
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a> -->
                </td>
              </tr>
              <tr>
                <td class="has-text-weight-bold">{{ columns.payment_amount.label }}</td>
                <td>
                  {{ contractData?.payment_amount }}
                  <!-- <a href="javascript:;" class="has-text-primary" @click="openDrugInfoModal(1)">
                  <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                </a> -->
                </td>
              </tr>
              <tr>
                <td class="has-text-weight-bold">{{ columns.legal_entity.label }}</td>
                <td>{{ contractData?.legal_entity?.name }}</td>
              </tr>
              <tr>
                <td class="has-text-weight-bold">{{ columns.created_at.label }}</td>
                <td>{{ $h.formatDate(contractData?.created_at, 'DD.MM.YYYY') }}</td>
              </tr>
              <tr>
                <td class="has-text-weight-bold">{{ columns.verified_at.label }}</td>
                <td>
                  <VTag class="is-size-6" :color="contractData.verified_at ? 'primary' : 'warning'" rounded
                    :label="contractData.verified_at ? $t('Paid') : $t('Not_Paid')" />
                </td>
              </tr>

            </tbody>
          </table>
          <table class="table is-hoverable is-bordered is-fullwidth">
            <tbody>
              <tr>
                <td class="has-text-weight-bold">{{ columns.template_file.label }}</td>
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
      </div>
      <div class="column is-6">
        <ListWidgetSingle :title="$t('Statements_List')" straight class="list-widget-v3">
          <table class="table is-hoverable is-bordered is-fullwidth">
            <thead>
              <tr>
                <th>{{ $t('Statement_code') }}</th>
                <th>{{ $t('Drug_name') }}</th>
                <th>{{ $t('Status') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in contractData?.applications">
                <td>
                  {{ item.code }}
                </td>
                <td>
                  {{ item.drug }}
                </td>
                <td>
                  <VTag class="is-size-6" :color="item.is_paid ? 'primary' : 'warning'" rounded
                    :label="item.is_paid ? $t('Paid') : $t('Not_Paid')" />
                </td>
              </tr>
            </tbody>
          </table>
        </ListWidgetSingle>
      </div>
    </div>

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
