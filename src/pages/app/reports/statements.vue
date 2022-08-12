<script setup lang="ts">
import { computed, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { isEmpty } from 'lodash'
import moment from 'moment'

import { fetchStatementReport } from '/@src/utils/api/reports'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const { t, locale } = useI18n()

useHead({
  title: t('Statements') + ' - Nefrit',
})

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
const router = useRouter()
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
  code: {
    label: t('statement_code'),
  },
  legal_entity: {
    label: t('applied_legal_entity'),
    // grow: true,
  },
  drug: {
    label: t('drug_name'),
    // grow: true,
  },
  status: t('Status'),
  stage: {
    label: t('Stage'),
    // grow: true,
  },
  is_paid: {
    label: t('Payment_status'),
    // grow: true,
  },
  date: {
    label: t('applied_at'),
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
  const res = await fetchStatementReport(page, range)
  Object.assign(data, res)
}

function gotoView(rowId: number) {
  console.log({ rowId });
  router.push('/app/statements/' + rowId)
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
              <span>{{ value.name }}</span>
            </template>
            <template v-else-if="column.key === 'is_paid'">
              <VTag class="is-size-6" :color="value ? 'primary' : 'warning'" rounded
                :label="value ? $t('Paid') : $t('Not_Paid')" />
            </template>
            <template v-if="column.key === 'actions'">
              <VIconButton class="p-4" outlined circle color="info" icon="feather:eye"
                @click.prevent="gotoView(row.id)">
                {{ $t('View') }}
              </VIconButton>
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination class="mt-6" v-model:current-page="currentPage" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
  </div>
</template>
