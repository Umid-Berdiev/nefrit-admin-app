<script setup lang="ts">
import { computed, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { isEmpty } from 'lodash'
import moment from 'moment'

import { fetchApplicantReport } from '/@src/utils/api/reports'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const { t, locale } = useI18n()
const router = useRouter()

useHead({
  title: t('Applicant_report') + ' - Nefrit',
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicant_report'))

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

const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})

const range = computed({
  get: () => ({
    start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD')
  }),
  set: async (val: any) => {
    console.log({ val });

    if (!isEmpty(val)) await fetchData(1, {
      date_start: val.start,
      date_end: val.end
    })
  }
})

const columns = {
  orderNumber: {
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Applicant_name'),
    grow: true,
  },
  boss_name: {
    label: t('Boss_name'),
  },
  phone: {
    label: t('Phone_number'),
  },
  status: {
    label: t('Status'),
  },
  country: {
    label: t('Country'),
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

onMounted(async () => {
  await fetchData(1, {
    date_start: range.value.start,
    date_end: range.value.end
  })
})

async function fetchData(page: number = 1, range: any = {
  date_start: '',
  date_end: '',
}) {
  const res = await fetchApplicantReport({ page, ...range })
  Object.assign(data, res)
}

function onView(rowId: string | number) {
  router.push('/app/applicants/' + rowId)
}
</script>

<template>
  <div class="applicant-list-wrapper">
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
            <VDatePicker :locale="locale" class="ml-auto" v-model="range" is-range color="green" trim-weeks
              :model-config="datePickerModelConfig">
              <template v-slot="{ inputValue, inputEvents }">
                <VField addons>
                  <VControl expanded icon="feather:corner-down-right">
                    <VInput :value="inputValue.start" v-on="inputEvents.start" />
                  </VControl>
                  <VControl>
                    <VButton static>
                      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                    </VButton>
                  </VControl>
                  <VControl expanded icon="feather:corner-right-up" subcontrol>
                    <VInput :value="inputValue.end" v-on="inputEvents.end" />
                  </VControl>
                </VField>
              </template>
            </VDatePicker>
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
            <template v-if="column.key === 'name'">
              <p style="overflow-wrap: break-word;">{{ value }}</p>
            </template>
            <template v-if="column.key === 'status' && value">
              <StatusTag :status="value" />
            </template>
            <template v-if="column.key === 'country' && value">
              <span>{{ value.name }}</span>
            </template>
            <template v-if="column.key === 'actions'">
              <ApplicantFlexTableDropdown @view="onView(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" class="mt-6" v-model:current-page="currentPage"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
  </div>
</template>
