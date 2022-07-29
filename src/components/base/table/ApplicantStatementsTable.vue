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
const isFeedbackModalOpen = ref(false)
const currentId = (route.params?.id as string) ?? null

await fetchStatementsData()

function confirmAction() {
  mainStore.$patch({ confirmModalState: true })
}

function onActionTriggered(rowId: string | number) {
  router.push('/app/applicants/' + rowId)
}

function gotoConclusionList(statementId: number) {
  router.push(`/app/statements/${statementId}#conclusions`)
}

async function fetchStatementsData(page: number = 1) {
  const res = await fetchApplicantStatements(currentId, page)
  Object.assign(data, res)
}
</script>

<template>
  <div>
    <VFlexTable rounded :data="data.result" :columns="columns">
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
          <StatementsFlexTableDropdown @view="onActionTriggered(row.id)" @conclusion="gotoConclusionList(row.id)"
            @remove="confirmAction" @feedback="isFeedbackModalOpen = true" />
        </template>
      </template>
    </VFlexTable>

    <!-- Table Pagination with wrapperState.page binded-->
    <VFlexPagination class="mt-6" v-model:current-page="currentPage" :item-per-page="data.pagination.per_page"
      :total-items="data.pagination.total" />
  </div>
</template>
