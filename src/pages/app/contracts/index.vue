<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { useHead } from '@vueuse/head'
import { fetchStatementContracts, removeContractById } from '/@src/utils/api/statement';
import { useNotyf } from '/@src/composable/useNotyf'

const router = useRouter()
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
const isFormModalOpen = ref(false)
const selectedId = ref<number>()
const searchInput = computed({
  get(): string {
    return ''
  },
  async set(v: string) {
    // await onSearch(v)
  }
})
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
  verified_at: {
    label: t('Payment_status'),
    grow: true,
  },
  created_at: {
    label: t('Date'),
  },

  actions: {
    label: t('Actions'),
    align: 'center',
  },
}))
const viewWrapper = useViewWrapper()

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
  const res = await fetchStatementContracts(page)
  Object.assign(data, res)
}

function onModalClose() {
  selectedId.value = undefined
}

function notify() {
  notif.success(t('Updated_successfully'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" @add="onAdd" :filter-disabled="true" :print-disabled="true"
      :remove-disabled="true" />

    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <!-- We can place any content inside the default slot-->
        <VFlexTableToolbar>
          <template #left>
            <!-- We can bind wrapperState.searchInput to any input -->
            <VField>
              <VControl icon="feather:search">
                <VInput v-model="searchInput" class="is-rounded" :placeholder="t('Search') + '...'" />
              </VControl>
            </VField>
          </template>
        </VFlexTableToolbar>

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
            <template v-if="column.key === 'verified_at'">
              <VTag class="is-size-6" :color="value ? 'primary' : 'warning'" rounded
                :label="value ? $t('Paid') : $t('Not_Paid')" />
            </template>
            <template v-if="column.key === 'created_at'">
              <span>{{ $h.formatDate(value, 'DD.MM.YYYY') }}</span>
            </template>
            <template v-if="column.key === 'actions'">
              <ContractFlexTableDropdown @view="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="data.pagination.current_page" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ContractFormModal v-model="isFormModalOpen" :item-id="selectedId"
      @update:list="() => { fetchData(); notify(); onModalClose() }" @close="onModalClose" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
