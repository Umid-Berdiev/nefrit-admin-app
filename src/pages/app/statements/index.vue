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
const isFeedbackModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowsId = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowsId.value.length)
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
    // cellClass: 'is-flex-grow-0',
  },
  legal_entity: {
    label: t('applied_legal_entity'),
    searchable: true,
    sortable: true,
    filter: userFilter,
    // grow: true,
  },
  drug: {
    label: t('drug_name'),
    searchable: true,
    // sortable: true,
    // filter: userFilter,
  },
  date: {
    label: t('applied_at'),
    sortable: true,
    searchable: true,
    sort: locationSorter,
  },
  status: t('Status'),
  stage: {
    label: t('Stage'),
    grow: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

onMounted(async () => {
  await fetchData()
})

// the select all checkbox click handler
function toggleSelection() {
  // console.log('data:', data)

  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = data.map((row: any) => row.id)
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
  router.push('/app/statement/' + rowId)
}

function gotoConclusionList(statementId: number) {
  router.push(`/app/statement/${statementId}#conclusions`)
}

function confirmAction() {
  mainStore.$patch({ confirmModalState: true })
}

function formatDate(date: string) {
  moment(date).format('YYYY-MM-DD')
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

        <div class="table-container">
          <VFlexTable rounded>
            <!-- Custom "name" cell content -->
            <template #body-cell="{ row, column, value, index }">
              <!-- <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
        @change="clickOnRow" /> -->

              <template v-if="column.key === 'legal_entity'">
                <span>{{ value.name }}</span>
              </template>
              <template v-else-if="column.key === 'drug'">
                <span>{{ value.name }}</span>
              </template>
              <template v-else-if="column.key === 'date'">
                <span>{{ value }}</span>
              </template>
              <template v-else-if="column.key === 'status'">
                <StatementStatusTag :status="value" />
              </template>
              <template v-else-if="column.key === 'stage'">
                <VTag class="is-size-6" rounded color="info">
                  {{ value.name }}
                </VTag>
              </template>
              <template v-else-if="column.key === 'actions'">
                <!-- <ActionButtons @edit="isFormModalOpen = true" /> -->
                <StatementsFlexTableDropdown @view="onActionTriggered(row.id)" @conclusion="gotoConclusionList(row.id)"
                  @remove="confirmAction" @feedback="isFeedbackModalOpen = true" />
              </template>
            </template>
          </VFlexTable>

        </div>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination class="mt-6" v-model:current-page="currentPage" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <FeedbackModal v-model="isFeedbackModalOpen" />
  </div>
</template>
