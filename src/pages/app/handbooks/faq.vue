<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { fetchList, removeById } from '/@src/utils/api/faq';
import { useNotyf } from '/@src/composable/useNotyf'
import FaqFormModal from '/@src/components/base/modal/FaqFormModal.vue'
import FaqFlexTableDropdown from '/@src/components/partials/dropdowns/FaqFlexTableDropdown.vue'

const { t, locale } = useI18n()

useHead({
  title: t('Faq') + ' - Nefrit',
})

const notif = useNotyf()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Faq_List'))

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
const isFormModalOpen = ref(false)
const selectedId = ref<number>()
const columns = {
  orderNumber: {
    format: (value: string, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  question: {
    label: t('Question')
  },
  answer: {
    label: t('Answer')
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const
const openedRowId = ref<number>()

await fetchData()

function onRowClick(row: any) {
  if (openedRowId.value === row.id) {
    openedRowId.value = undefined
  } else {
    openedRowId.value = row.id
  }
}

function onEdit(rowId = undefined) {
  isFormModalOpen.value = true
  selectedId.value = rowId
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  await removeById(selectedId.value)
  await fetchData()
  successNotify()
}

async function fetchData(page: number = 1) {
  const res = await fetchList(page)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="faq-list-wrapper">
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onEdit()">
        {{ $t('Add') }}
      </VButton>
    </VFlex>
    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
      <template #default="wrapperState">
        <VFlexTable rounded clickable @row-click="onRowClick">
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

          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'question' || column.key === 'answer'">
              <span :class="{ 'truncated': openedRowId !== row.id }">{{ value }}</span>
            </template>
            <template v-if="column.key === 'actions'">
              <FaqFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>

          <!-- <template #body-row-post="{ row }">
          </template> -->
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="currentPage" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <FaqFormModal v-model="isFormModalOpen" :faq-id="selectedId"
      @update:list="() => { fetchData(); successNotify(); selectedId = undefined; }" @close="selectedId = undefined" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
