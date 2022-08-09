<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchList } from '/@src/utils/api/applicant';
import { useMainStore } from '/@src/stores'
import { UserFilterForm } from '/@src/utils/interfaces'

const { t, locale } = useI18n()

useHead({
  title: t('Applicants') + ' - Nefrit',
})

const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicants_List'))

const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const filterForm = ref<UserFilterForm>({
  applicantUser: 'Abdullaev Baxrom',
})

const isFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowsId = ref<number[]>([])
const isAllSelected = computed(() => data.result.length === selectedRowsId.value.length)
const router = useRouter()
const selectedId = ref()
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  }
})

const columns = {
  orderNumber: {
    // label: '#',
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Applicant_name'),
    // media: true,
    grow: true,
    searchable: true,
  },
  boss_name: {
    label: t('Boss_name'),
    // grow: true,
    searchable: true,
  },
  phone: {
    label: t('Phone_number'),
    // grow: true,
    searchable: true,
  },
  status: {
    label: t('Status'),
    // grow: true,
    searchable: true,
  },
  country: {
    label: t('Country'),
    // grow: true,
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

function onView(rowId: string | number) {
  router.push('/app/applicants/' + rowId)
}

async function fetchData(page: number = 1) {
  const res = await fetchList(page)
  Object.assign(data, res)
}

function onEdit(rowId: number) {
  selectedId.value = rowId;
  isFormModalOpen.value = true
}

async function onBlock(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" :add-disabled="true" :remove-disabled="true"
      @filter="displayFilterForm = !displayFilterForm" />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <div class="columns is-desktop">
          <!-- <VField class="column">
            <VLabel>{{ t('Applicant_username') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantUser" type="text" placeholder="" />
            </VControl>
          </VField> -->
          <VField class="column">
            <VLabel>{{ t('Boss_name') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantBossName" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Applicant_name') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantName" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Status') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantStatus" type="text" placeholder="" />
            </VControl>
          </VField>
          <!-- <VField class="column">
            <VLabel>{{ t('Phone') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantPhone" type="text" placeholder="" />
            </VControl>
          </VField> -->
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
          <template #header-column="{ column }">
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
            <!-- <span v-if="column.key === 'name'" style="overflow-wrap: break-word;" v-text="column.label" /> -->
          </template>
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'name'">
              <p style="overflow-wrap: break-word;">{{ value }}</p>
            </template>
            <template v-if="column.key === 'status' && value">
              <StatusTag :status="value" />
            </template>
            <template v-if="column.key === 'actions'">
              <ApplicantFlexTableDropdown @view="onView(row.id)" @edit="onEdit(row.id)" @block="onBlock(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="currentPage" class="mt-6" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ApplicantFormModal v-model="isFormModalOpen" :applicant-id="selectedId" @update:list="fetchData" />
  </div>
</template>
