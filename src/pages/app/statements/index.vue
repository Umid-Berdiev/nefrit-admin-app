<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import moment from 'moment'

import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from "/@src/stores";
import { fetchList } from '/@src/utils/api/statement'

const { t, locale } = useI18n()

useHead({
  title: t('Statements') + ' - Nefrit',
})

const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statements'))

const data = reactive({
  pagination: {
    current_page: null,
    per_page: null,
    total: null,
  },
  result: []
})
const filterForm = ref({})

const isFormModalOpen = ref(false)
const isConclusionFormModalOpen = ref(false)
const isNoticeFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowId = ref<number>()
const selectedRowsId = ref<number[]>([])
const isAllSelected = computed(() => data.result.length === selectedRowsId.value.length)
const router = useRouter()
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  }
})

// this is a sample for custom sort function
const locationSorter: VFlexTableWrapperSortFunction<User> = ({ order, a, b }) => {
  if (order === 'asc') {
    return a.location.localeCompare(b.location)
  } else if (order === 'desc') {
    return b.location.localeCompare(a.location)
  }

  return 0
}

// this is a sample for custom filter function
const userFilter: VFlexTableWrapperFilterFunction<User> = ({ searchTerm, row }) => {
  if (!searchTerm) {
    return true
  }

  // search either in the name or the bio
  return (
    row.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    row.bio.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
}

const columns = {
  code: {
    label: t('statement_code'),
  },
  legal_entity: {
    label: t('applied_legal_entity'),
    searchable: true,
    grow: true,
  },
  drug: {
    label: t('drug_name'),
    searchable: true,
  },
  status: t('Status'),
  stage: {
    label: t('Stage'),
    grow: true,
  },
  date: {
    label: t('applied_at'),
    searchable: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

await fetchData()

// the select all checkbox click handler
function toggleSelection() {
  // console.log('data:', data)

  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = data.result.map((row: any) => row.id)
  }
}

// this it the row click handler (enabled with clickable props)
function clickOnRow(row: any) {
  if (selectedRowsId.value.includes(row.id)) {
    selectedRowsId.value = selectedRowsId.value.filter((i) => i !== row.id)
  } else {
    selectedRowsId.value = [...selectedRowsId.value, row.id]
  }
}

function onActionTriggered(rowId: number) {
  router.push('/app/statements/' + rowId)
}

function gotoConclusionList(statementId: number) {
  router.push(`/app/statements/${statementId}#conclusions`)
}

function gotoNoticeList(statementId: number) {
  router.push(`/app/statements/${statementId}#notices`)
}

function confirmAction() {
  mainStore.$patch({ confirmModalState: true })
}

async function fetchData(page: number = 1) {
  const res = await fetchList(page, locale.value)
  Object.assign(data, res)
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" @add="isFormModalOpen = true" @filter="displayFilterForm = !displayFilterForm"
      :remove-disabled="true" :add-disabled="true" />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <div class="columns is-desktop">
          <VField class="column">
            <VLabel>{{ t('applied_legal_entity') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantUser" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Status') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantStatus" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('applied_at') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantBossName" type="text" placeholder="" />
            </VControl>
          </VField>
          <!-- </div>
              <div class="columns is-desktop"> -->
          <VField class="column">
            <VLabel>{{ t('stage') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantName" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Phone') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantPhone" type="text" placeholder="" />
            </VControl>
          </VField>
          <CountrySelect v-model="filterForm.applicantsCountry" class="column" />
        </div>
        <VFlex>
          <VFlexItem class="ml-auto">
            <VButton outlined color="warning" icon="feather:filter">{{ t('Filter') }}</VButton>
          </VFlexItem>
        </VFlex>
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
        <!-- We can place any content inside the default slot-->
        <VFlexTableToolbar>
          <template #left>
            <!-- We can bind wrapperState.searchInput to any input -->
            <VField>
              <VControl icon="feather:search">
                <VInput v-model="wrapperState.searchInput" class="is-rounded" :placeholder="t('Search') + '...'" />
              </VControl>
            </VField>
          </template>
        </VFlexTableToolbar>

        <VFlexTable rounded>
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'legal_entity'">
              <span>{{ value?.name }}</span>
            </template>
            <template v-else-if="column.key === 'drug'">
              <span>{{ value?.name }}</span>
            </template>
            <template v-else-if="column.key === 'date'">
              <span>{{ $h.formatDate(value, 'HH:mm DD.MM.YYYY') }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
              <StatusTag :status="value" />
            </template>
            <template v-else-if="column.key === 'stage'">
              <button class="button is-size-6 has-background-info is-rounded has-text-white p-5" rounded
                style="white-space: break-spaces;">
                {{ value.name }}
              </button>
            </template>
            <template v-else-if="column.key === 'actions'">
              <!-- <ActionButtons @edit="isFormModalOpen = true" /> -->
              <StatementsFlexTableDropdown @view="onActionTriggered(row.id)"
                @conclusion:add="isConclusionFormModalOpen = true; selectedRowId = row.id"
                @notice:add="isNoticeFormModalOpen = true; selectedRowId = row.id"
                @conclusion:list="gotoConclusionList(row.id)" @notice:list="gotoNoticeList(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination class="mt-6" v-model:current-page="currentPage" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ConclusionFormModal v-model="isConclusionFormModalOpen" :parent-id="Number(selectedRowId)" @update:list="fetchData"
      @close="selectedRowId = undefined" />
    <NoticeFormModal v-model="isNoticeFormModalOpen" :parent-id="Number(selectedRowId)" @update:list="fetchData"
      @close="selectedRowId = null" />
  </div>
</template>
