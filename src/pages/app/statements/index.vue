<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import moment from 'moment'

import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { exportStatementToExcel, fetchList, filterStatementList, fetchStatuses } from '/@src/utils/api/statement'
import { StatusData } from '/@src/utils/interfaces'

const { t, locale } = useI18n()

useHead({
  title: t('Statements') + ' - Nefrit',
})

const notif = useNotyf()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statements'))

const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const filterForm = reactive({
  code: '',
  applicant: '',
  status_id: '',
  stage_id: '',
  country_id: '',
  drug_name: '',
  date_start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
  date_end: moment().format('YYYY-MM-DD')
})

const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})
const dateMasks = {
  input: 'DD.MM.YYYY',
}
const router = useRouter()
const isLoading = ref(false)
const isFormModalOpen = ref(false)
const isConclusionFormModalOpen = ref(false)
const isNoticeFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowId = ref<number>()
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  }
})
const statusList = ref<StatusData[]>([])
const columns = {
  code: {
    label: t('statement_code'),
  },
  legal_entity: {
    label: t('applied_legal_entity'),
  },
  drug: {
    label: t('drug_name'),
  },
  status: {
    label: t('Status'),
    grow: true,
  },
  stage: {
    label: t('Stage'),
    grow: true,
  },
  is_paid: {
    label: t('Payment_status'),
    // grow: true,
  },
  date: {
    label: t('applied_at'),
    // grow: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

await fetchData()

onMounted(async () => {
  const res = await fetchStatuses()
  statusList.value = res
})

function onActionTriggered(rowId: number) {
  router.push('/app/statements/' + rowId)
}

function gotoConclusionList(statementId: number) {
  router.push(`/app/statements/${statementId}#conclusions`)
}

function gotoNoticeList(statementId: number) {
  router.push(`/app/statements/${statementId}#notices`)
}

async function fetchData(page: number = 1) {
  const res = await fetchList({ page, ...filterForm })
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}

async function submitFilterForm() {
  try {
    isLoading.value = true
    const res = await fetchList({ page: 1, ...filterForm })
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
    code: '',
    applicant: '',
    status_id: '',
    stage_id: '',
    country_id: '',
    drug_name: '',
    date_start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    date_end: moment().format('YYYY-MM-DD')
  })
  await fetchData()
  isLoading.value = false
}

async function exportToExcel() {
  try {
    isLoading.value = true
    const res = await exportStatementToExcel(filterForm)

    const url = URL.createObjectURL(new Blob([res], {
      type: 'application/vnd.ms-excel'
    }))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `Worksheet_${Date.now()}.xlsx`)
    document.body.appendChild(link)
    link.click()
  } catch (error) {
    console.log({ error });
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" @filter="displayFilterForm = !displayFilterForm" remove-disabled add-disabled
      @export="exportToExcel" />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <form @submit.prevent="submitFilterForm">
          <div class="columns is-desktop">
            <div class="column">
              <VField :label="$t('statement_code')">
                <VControl>
                  <VInput v-model="filterForm.code" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <VField :label="$t('applied_legal_entity')">
                <VControl>
                  <VInput v-model="filterForm.applicant" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <StatusSelect v-model="filterForm.status_id" :list="statusList" />
            </div>
            <div class="column">
              <StageSelect v-model="filterForm.stage_id" />
            </div>
            <div class="column">
              <CountrySelect v-model="filterForm.country_id" />
            </div>
            <div class="column">
              <VDatePicker :locale="locale" v-model="filterForm.date_start" color="green" trim-weeks :masks="dateMasks"
                :model-config="datePickerModelConfig">
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
              <VDatePicker :locale="locale" v-model="filterForm.date_end" color="green" trim-weeks :masks="dateMasks"
                :model-config="datePickerModelConfig">
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
        <!-- We can place any content inside the default slot-->
        <!-- <VFlexTableToolbar>
          <template #left>
            <VField>
              <VControl icon="feather:search">
                <VInput v-model="wrapperState.searchInput" class="is-rounded" :placeholder="t('Search') + '...'" />
              </VControl>
            </VField>
          </template>
        </VFlexTableToolbar> -->

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
            <template v-else-if="column.key === 'date' && value">
              <span>{{ $h.formatDate(value, 'HH:mm DD.MM.YYYY') }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
              <StatusTag :status="value" />
            </template>
            <template v-else-if="column.key === 'stage'">
              <VTag class="is-size-6 px-5" color="info" rounded :label="value.name"
                style="white-space: break-spaces; height: fit-content;" />
            </template>
            <template v-else-if="column.key === 'is_paid'">
              <VTag class="is-size-6" :color="value ? 'primary' : 'warning'" rounded
                :label="value ? $t('Paid') : $t('Not_Paid')" />
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
    <ConclusionFormModal v-model="isConclusionFormModalOpen" :item-id="undefined" :parent-id="Number(selectedRowId)"
      @update:list="() => { fetchData(); successNotify(); }" @close="selectedRowId = undefined" />
    <NoticeFormModal v-model="isNoticeFormModalOpen" :item-id="undefined" :parent-id="Number(selectedRowId)"
      @update:list="() => { fetchData(); successNotify(); }" @close="selectedRowId = undefined" />
  </div>
</template>
