<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import {
  fetchLatestStatementsStatistics
} from '/@src/utils/api/statement'

const router = useRouter()
const { t } = useI18n()

const columns = {
  code: {
    label: t('statement_code'),
    // cellClass: 'is-flex-grow-0',
  },
  applicant: {
    label: t('applied_legal_entity'),
  },
  drug: {
    label: t('drug_name'),
  },
  date: {
    label: t('applied_at'),
  },
  actions: {
    label: t('Actions'),
    align: 'end',
  },
} as const

const statementData = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const currentPage = computed({
  get: () => {
    return statementData.pagination.current_page
  },
  set: async (page) => {
    await fetchLatestStatements(page)
  }
})

onMounted(async () => {
  await fetchLatestStatements()
})

function gotoView(rowId: number) {
  console.log({ rowId });
  router.push('/app/statements/' + rowId)
}

async function fetchLatestStatements(page: number = 1) {
  const res = await fetchLatestStatementsStatistics(page)
  Object.assign(statementData, res)
}
</script>

<template>
  <div class="dashboard-card is-base-chart">
    <div class="content-box is-flex">
      <h1 class="is-size-4">{{ $t('Statement_latest') }}</h1>
    </div>
    <div class="p-5">
      <VFlexTableWrapper :columns="columns" :data="statementData.result">
        <template #default="wrapperState">
          <VFlexTable rounded>
            <!-- Custom "name" cell content -->
            <template #body-cell="{ row, column, value, index }">
              <template v-if="column.key === 'date' && value">
                <span>{{ $h.formatDate(value, 'HH:mm DD.MM.YYYY') }}</span>
              </template>
              <template v-if="column.key === 'actions'">
                <VIconButton class="ml-auto p-4" outlined circle color="info" icon="feather:eye"
                  @click.prevent="gotoView(row.id)">
                  {{ $t('View') }}
                </VIconButton>
              </template>
            </template>
          </VFlexTable>

          <VFlexPagination v-if="statementData.result.length" v-model:current-page="currentPage" class="mt-6"
            :item-per-page="statementData.pagination.per_page" :total-items="statementData.pagination.total" />
        </template>
      </VFlexTableWrapper>
    </div>
  </div>
</template>
