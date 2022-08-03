<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '/@src/stores'
import type {
  VFlexTableWrapperSortFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { fetchStatementNotices, removeStatementNoticeById } from "/@src/utils/api/statement";
import { useNotyf } from '/@src/composable/useNotyf'

const route = useRoute()
const mainStore = useMainStore()
const { t, locale } = useI18n()
const currentStatementId = (route.params?.id as string) ?? null
const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const isNoticeFormModalOpen = ref(false)
const selectedId = ref()
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
const columns = {
  // select: {
  //   label: '',
  //   cellClass: 'is-flex-grow-0',
  // },
  orderNumber: {
    // label: '',
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  message: { // created_by column
    label: t('Notice_message'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    // filter: userFilter,
  },
  text: { // description column
    label: t('Notice_details'),
    // inverted: true,
    // grow: true,
  },
  status: {
    label: t('Status')
  }, // created_at column
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const
const notif = useNotyf()

await fetchData()

async function fetchData(page: number = 1) {
  const res = await fetchStatementNotices(Number(currentStatementId), page)
  Object.assign(data, res)
}

async function onEdit(id: number) {
  selectedId.value = id
  isNoticeFormModalOpen.value = true
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  await removeStatementNoticeById(selectedId.value)
  fetchData()
}

function notify() {
  notif.success(t('Updated_successfully'))
}

function onModalClose() {
  selectedId.value = undefined
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex class="mb-4" flex-wrap="wrap">
      <VFlexItem>
        <h1 class="is-size-3 mb-3">{{ $t('Statement_notices') }}</h1>
      </VFlexItem>
      <VFlexItem class="ml-auto">
        <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="isNoticeFormModalOpen = true">
          {{ $t('Add') }}
        </VButton>
      </VFlexItem>
    </VFlex>
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
      <template #default="wrapperState">
        <VFlexTable rounded>
          <!-- header-column slot -->
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
          <template #body-cell="{ row, column, value }">
            <template v-if="column.key === 'text'">
              <div style="white-space: break-spaces;">
                {{ row.text }}
              </div>
            </template>
            <template v-else-if="column.key === 'status' && value">
              <StatusTag :status="value" />
            </template>
            <template v-else-if="column.key === 'actions'">
              <NoticeFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="currentPage" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <NoticeFormModal v-model="isNoticeFormModalOpen" :item-id="selectedId" :parent-id="Number(currentStatementId)"
      @update:list="() => { fetchData(); notify(); onModalClose() }" @close="onModalClose" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
