<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useMainStore } from '/@src/stores';
import { fetchApplicantStatements } from '/@src/utils/api/applicant';

const route = useRoute()
const router = useRouter()
const mainStore = useMainStore()
const { t, locale } = useI18n()
const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      pagination: {},
      result: []
    })
  }
})
const emits = defineEmits<{
  (e: 'update:data', page: number): void
}>()
const data = reactive(props.data)
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    // emits('update:data', page)
    await fetchStatementsData(page)
  }
})

const columns = {
  code: {
    label: t('statement_code'),
    // cellClass: 'is-flex-grow-0',
  },
  legal_entity: {
    label: t('applied_legal_entity'),
    // grow: true,
  },
  drug: {
    label: t('drug_name'),
  },
  date: {
    label: t('applied_at'),
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
const currentId = (route.params?.id as string) ?? null

await fetchStatementsData()

async function fetchStatementsData(page: number = 1) {
  const res = await fetchApplicantStatements(currentId, page)
  Object.assign(data, res)
}

function onView(statementId: number) {
  router.push(`/app/statements/${statementId}`)
}
</script>

<template>
  <div>
    <!-- <h1 class="is-size-3 mb-3">{{ $t('Statements') }}</h1> -->
    <VFlexTable class="pt-5" rounded :data="data.result" :columns="columns">
      <template #body>
        <!-- This is the empty state -->
        <div v-if="data.result.length === 0" class="flex-list-inner">
          <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
            class="my-6" />
        </div>
      </template>

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
          <StatusTag :status="value" />
        </template>
        <template v-else-if="column.key === 'stage'">
          <VTag class="is-size-6" rounded color="info">
            {{ value.name }}
          </VTag>
        </template>
        <template v-else-if="column.key === 'actions'">
          <!-- <ActionButtons @edit="isFormModalOpen = true" /> -->
          <!-- <StatementsFlexTableDropdown @view="onActionTriggered(row.id)" @conclusion="gotoConclusionList(row.id)"
            @remove="confirmAction" @feedback="isFeedbackModalOpen = true" /> -->
          <a href="javascript:;" @click="onView(row.id)">
            <VueIconify icon="feather:eye" class="has-text-primary" height="1.5rem" />
          </a>
        </template>
      </template>
    </VFlexTable>

    <!-- Table Pagination with wrapperState.page binded-->
    <VFlexPagination v-if="data.result?.length" class="mt-6" v-model:current-page="currentPage"
      :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
  </div>
</template>
