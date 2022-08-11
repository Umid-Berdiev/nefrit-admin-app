<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchList, fetchById, create, updatePassword, removeById } from '/@src/utils/api/employee';
import { useMainStore } from '/@src/stores'

const { t, locale } = useI18n()

useHead({
  title: t('Employees') + ' - Nefrit',
})

const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Employees_List'))

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
const isPasswordModalOpen = ref(false)
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
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Employee_name'),
    searchable: true,
  },
  department: {
    label: t('Department'),
    grow: true,
    searchable: true,
  },
  role: {
    label: t('Role'),
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
function clickOnRowCheckbox(row: any) {
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

function onEdit(rowId: number | null) {
  selectedId.value = rowId;
  isFormModalOpen.value = true
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  await removeById(selectedId.value)
  fetchData()
}

async function onChangePassword(id: number) {
  console.log({ id });

  selectedId.value = id
  isPasswordModalOpen.value = true
  // await updatePassword(selectedId.value, values)
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" :remove-disabled="true" @add="onEdit(null)"
      @filter="displayFilterForm = !displayFilterForm" />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <div class="columns is-desktop">
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
            <template v-if="column.key === 'status' && value">
              <StatusTag :status="value" />
            </template>
            <template v-if="column.key === 'name'">
              <span class="is-capitalized" v-if="row.firstname">{{ row.firstname }}&nbsp;</span>
              <span class="is-capitalized" v-if="row.lastname">{{ row.lastname }}</span>
            </template>
            <template v-if="column.key === 'role' && value">
              <span>{{ value.name }}</span>
            </template>
            <template v-if="column.key === 'actions'">
              <EmployeeFlexTableDropdown @edit="onEdit(row.id)" @update:password="onChangePassword(row.id)"
                @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="currentPage" class="mt-6" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <EmployeeFormModal v-model="isFormModalOpen" :employee-id="Number(selectedId)"
      @update:list="() => { fetchData(); selectedId = null; }" @close="selectedId = null" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
    <EmployeePasswordFormModal v-model="isPasswordModalOpen" :employee-id="Number(selectedId)" />
  </div>
</template>
