<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { fetchStatementContractById } from '/@src/utils/api/statement'
import { useRoute, useRouter } from 'vue-router';
import { StatementContractData, StatementData } from '/@src/utils/interfaces';
import VButton from '../base/button/VButton.vue';
import { Icon } from "@iconify/vue";
import { useNotyf } from '/@src/composable/useNotyf';

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
  template_file: {
    label: t('Template_file'),
  },
  legal_file: {
    label: t('Legal_entity_file'),
  },
  file: {
    label: t('File'),
  },
  verified_at: {
    label: t('Payment_status'),
  },
  created_at: {
    label: t('Date'),
  }
}))
const isFileUploadModalOpen = ref(false)
const route = useRoute()
const currentId = (route.params?.id as string) ?? null
const contractData = ref<StatementContractData>()
const contractStatements = ref<StatementData[]>()
const filePropName = ref<string>('')
const isFormModalOpen = ref<boolean>(false)
const notif = useNotyf()

await fetchData()

async function fetchData() {
  const res = await fetchStatementContractById(Number(currentId), locale.value)
  contractData.value = await res
  contractStatements.value = contractData.value?.applications
}

function onUploadAction(propName: string) {
  filePropName.value = propName
  isFileUploadModalOpen.value = true
}

function onEdit() {
  isFormModalOpen.value = true
}

function notify() {
  notif.success(t('Updated_successfully'))
}
</script>

<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-6">
        <ListWidgetSingle :title="$t('Contract_details')" straight class="list-widget-v3">
          <template #actions>
            <a href="javascript:;" @click="onEdit">
              <Icon icon="feather:edit-2" />
            </a>
          </template>
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
        </ListWidgetSingle>
        <ListWidgetSingle :title="$t('Contract_files_list')" straight class="list-widget-v3">
          <table class="table is-hoverable is-bordered is-fullwidth">
            <tbody>
              <tr>
                <td class="has-text-weight-bold">{{ columns.template_file.label }}</td>
                <td class="is-flex is-align-items-center">
                  <a v-if="contractData?.template_file" :href="contractData?.template_file" class="has-text-primary"
                    download>
                    {{ contractData?.template_file }}
                    <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                  </a>
                  <span v-else class="has-text-danger">
                    {{ $t('No_template_file') }}
                  </span>
                  <VButton class="ml-auto" color="primary" rounded icon="fas fa-plus"
                    @click="onUploadAction('template_file')">
                    {{ $t('Upload') }}
                  </VButton>
                </td>
              </tr>
              <tr>
                <td class="has-text-weight-bold">{{ columns.legal_file.label }}</td>
                <td class="is-flex is-align-items-center">
                  <a v-if="contractData?.legal_file" :href="contractData?.legal_file" class="has-text-primary" download>
                    {{ contractData?.legal_file }}
                    <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                  </a>
                  <span v-else class="has-text-danger">
                    {{ $t('No_legal_file') }}
                  </span>
                </td>
              </tr>
              <tr>
                <td class="has-text-weight-bold">{{ columns.file.label }}</td>
                <td class="is-flex is-align-items-center">
                  <a v-if="contractData?.file" :href="contractData?.file" class="has-text-primary" download>
                    {{ contractData?.file }}
                    <i class="iconify" data-icon="feather:link" aria-hidden="true"></i>
                  </a>
                  <span v-else class="has-text-danger">
                    {{ $t('No_completed_file') }}
                  </span>
                  <VButton class="ml-auto" color="primary" rounded icon="fas fa-plus" @click="onUploadAction('file')">
                    {{ $t('Upload') }}
                  </VButton>
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
              <tr v-for="item in contractStatements">
                <td>
                  <RouterLink class="has-text-primary" :to="`/app/statements/${item.id}`">{{ item.code }}</RouterLink>
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
    <ContractFormModal v-model="isFormModalOpen" :item-id="currentId"
      @update:list="() => { fetchData(); notify(); currentId = ''; }" />
    <FileUploadModal v-model="isFileUploadModalOpen" :contract-id="currentId" @close="fetchData"
      :file-prop-name="filePropName" @update:data="fetchData" />
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
