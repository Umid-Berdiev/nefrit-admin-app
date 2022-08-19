<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { fetchList, removeById } from '/@src/utils/api/doc-category';

const notif = useNotyf()
const { t, locale } = useI18n()
const mainStore = useMainStore()
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
const selectedId = ref<number | null>(null)
const columns = reactive({
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Name'),
    searchable: true,
    // sortable: true,
  },
  description: {
    label: t('Description'),
    // sortable: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
})

const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Doc_Category_List'))

useHead({
  title: t('Doc_Category') + ' - Nefrit',
})

await fetchData()

function onEdit(rowId: number | null = null) {
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

async function fetchData(page = 1) {
  const res = await fetchList(page)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="doc-category-list-wrapper">
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onEdit()">
        {{ $t('Add') }}
      </VButton>
    </VFlex>
    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
      <template #default="wrapperState">
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

          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'actions'">
              <DocCategoryFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="currentPage" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <DocCategoryFormModal v-model="isFormModalOpen" :item-id="selectedId"
      @update:list="() => { fetchData(); successNotify(); selectedId = null; }" @close="selectedId = null" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
