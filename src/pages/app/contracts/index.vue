<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { useHead } from '@vueuse/head'
import { fetchStatementContracts, removeContractById } from '/@src/utils/api/statement';
import { useNotyf } from '/@src/composable/useNotyf'
import { useUserSession } from '/@src/stores/userSession'
import moment from 'moment'
import VCheckbox from '/@src/components/base/form/VCheckbox.vue'
import VOption from '/@src/components/base/form/VOption.vue'

const router = useRouter()
const { userRoleID } = useUserSession()
const { t, locale } = useI18n()
const mainStore = useMainStore()
const notif = useNotyf()
const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  }
})
const isLoading = ref(false)
const isFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedId = ref<number>()
const columns = computed(() => ({
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Name'),
    searchable: true,
    grow: true,
    // sortable: true,
  },
  legal_entity: {
    label: t('Applicant'),
    grow: true,
  },
  applications: {
    label: t('Statements'),
    // sortable: true,
  },
  payment_amount: {
    label: t('Contract_amount'),
  },
  is_paid: {
    label: t('Payment_status'),
    grow: true,
  },
  contract_date: {
    label: t('Contract_date'),
    grow: true,
  },
  verified_at: {
    label: t('verified_at'),
    grow: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
}))
const viewWrapper = useViewWrapper()
const filterForm = reactive({
  name: '',
  legal_entity_name: '',
  application_code: '',
  is_paid: '',
  start_contract_date: moment().subtract(1, 'month').format('YYYY-MM-DD'),
  end_contract_date: moment().format('YYYY-MM-DD')
})
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})
const dateMasks = {
  input: 'DD.MM.YYYY',
}

viewWrapper.setPageTitle(t('Contracts_List'))

useHead({
  title: t('Contracts') + ' - Nefrit',
})

await fetchData()

function onAdd() {
  isFormModalOpen.value = true
}

function onEdit(rowId: number) {
  // isFormModalOpen.value = true
  selectedId.value = rowId
  router.push(`/app/contracts/${rowId}`)
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  try {
    await removeContractById(Number(selectedId.value))
    fetchData()
    notif.success(t('Removed_successfully'))
  } catch (error: any) {
    notif.error(t(error.response?.data.error.message))
  }
}

async function fetchData(page = 1) {
  const res = await fetchStatementContracts({ page, ...filterForm })
  Object.assign(data, res)
}

function onModalClose() {
  selectedId.value = undefined
}

function notify() {
  notif.success(t('Updated_successfully'))
}

async function submitFilterForm() {
  try {
    isLoading.value = true
    const res = await fetchStatementContracts({ page: 1, ...filterForm })
    Object.assign(data, res)
  } catch (error: any) {
    notif.error('Error while fetching filtered data: ', error.message)
  } finally {
    isLoading.value = false
  }
}

async function clearFilterForm() {
  isLoading.value = true
  Object.assign(filterForm, {
    name: '',
    legal_entity_name: '',
    application_code: '',
    is_paid: '',
    start_contract_date: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    end_contract_date: moment().format('YYYY-MM-DD')
  })
  await fetchData()
  isLoading.value = false
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex justify-content="end" class="mb-4" column-gap="1rem">
      <VButton v-if="[1, 2, 7].includes(userRoleID)" outlined rounded color="info" icon="feather:plus"
        @click.prevent="onAdd">
        {{ $t('Add') }}
      </VButton>
      <VButton outlined rounded color="warning" icon="feather:filter"
        @click.prevent="displayFilterForm = !displayFilterForm">
        {{ $t('Filter') }}
      </VButton>
    </VFlex>
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <form @submit.prevent="submitFilterForm">
          <div class="columns is-desktop">
            <div class="column">
              <VField :label="$t('Name')">
                <VControl>
                  <VInput v-model="filterForm.name" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <VField :label="$t('Applicant_name')">
                <VControl>
                  <VInput v-model="filterForm.legal_entity_name" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <VField :label="$t('statement_code')">
                <VControl>
                  <VInput v-model="filterForm.application_code" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <VField :label="$t('Payment_status')">
                <VControl>
                  <VSelect v-model="filterForm.is_paid">
                    <VOption value="" v-text="$t('All')" />
                    <VOption :value="0" v-text="$t('Not_Paid')" />
                    <VOption :value="1" v-text="$t('Paid')" />
                  </VSelect>
                </VControl>
              </VField>
            </div>
            <!-- <div class="column">
              <StatusSelect v-model="filterForm.status_id" :list="statusList" />
            </div>
            <div class="column">
              <CountrySelect v-model="filterForm.country_id" />
            </div> -->
            <div class="column">
              <VDatePicker :locale="locale" v-model="filterForm.start_contract_date" color="green" trim-weeks
                :masks="dateMasks" :model-config="datePickerModelConfig">
                <template #default="{ inputValue, inputEvents }">
                  <VField :label="$t('From')">
                    <VControl icon="feather:calendar">
                      <VInput :value="inputValue" v-on="inputEvents" />
                    </VControl>
                  </VField>
                </template>
              </VDatePicker>
            </div>
            <div class="column">
              <VDatePicker :locale="locale" v-model="filterForm.end_contract_date" color="green" trim-weeks
                :masks="dateMasks" :model-config="datePickerModelConfig">
                <template #default="{ inputValue, inputEvents }">
                  <VField :label="$t('To')">
                    <VControl icon="feather:calendar">
                      <VInput :value="inputValue" v-on="inputEvents" />
                    </VControl>
                  </VField>
                </template>
              </VDatePicker>
            </div>
          </div>
          <VFlex justify-content="end" column-gap="1rem">
            <VFlexItem>
              <VButton type="button" :disabled="isLoading" outlined color="warning" icon="feather:x"
                @click="clearFilterForm">{{ t('Clear')
                }}
              </VButton>
            </VFlexItem>
            <VFlexItem>
              <VButton type="submit" :disabled="isLoading" outlined color="success" icon="feather:filter">{{ t('Filter')
              }}
              </VButton>
            </VFlexItem>
          </VFlex>
        </form>
      </VCard>
    </div>

    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <VFlexTable rounded>
          <template #header-column="{ column }">
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'legal_entity'">
              <span>{{ value.name }}</span>
            </template>
            <template v-if="column.key === 'applications'">
              <ul>
                <li v-for="item in value">{{ item.code }}</li>
              </ul>
            </template>
            <template v-if="column.key === 'payment_amount'">
              <span>{{ Number(value).toLocaleString() }}</span>
            </template>
            <template v-if="column.key === 'is_paid'">
              <VTag class="is-size-6" :color="value ? 'primary' : 'warning'" rounded
                :label="value ? $t('Paid') : $t('Not_Paid')" />
            </template>
            <template v-if="column.key === 'contract_date' && value">
              <span>{{ $h.formatDate(value, 'DD.MM.YYYY') }}</span>
            </template>
            <template v-if="column.key === 'verified_at' && value">
              <span>{{ $h.formatDate(value, 'DD.MM.YYYY') }}</span>
            </template>
            <template v-if="column.key === 'actions'">
              <ContractFlexTableDropdown @view="onEdit(row.id)" @remove="onRemove(row.id)"
                :remove-btn="[1, 2, 7].includes(userRoleID)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="currentPage" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ContractFormModal v-model="isFormModalOpen" :item-id="selectedId"
      @update:list="() => { fetchData(); notify(); onModalClose() }" @close="onModalClose" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
