<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { fetchList, removeById, searchList, sortList } from '/@src/utils/api/role';

const notif = useNotyf()
const router = useRouter()
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
const isFormModalOpen = ref(false)
const selectedRowIds = ref<number[]>([])
const isAllSelected = computed(() => data.result.length === selectedRowIds.value.length && selectedRowIds.value.length !== 0)
const selectedId = ref<number>()
const searchInput = computed({
  get(): string {
    return ''
  },
  async set(v: string) {
    await onSearch(v)
  }
})
const defaultSort = ref('')
const sort = computed({
  get: () => {
    let sortQuery: string = defaultSort.value
    return sortQuery
  },
  async set(value) {
    defaultSort.value = value ?? ''
    await onSort(value)
  },
})

const columns = computed(() => ({
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
}))
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Roles_List'))

useHead({
  title: t('Roles') + ' - Nefrit',
})

await fetchData()

// the select all checkbox click handler
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRowIds.value = []
  } else {
    selectedRowIds.value = data.result.map((row: any) => row.id)
  }
}

// this it the row click handler (enabled with clickable props)
function clickOnRow(row: any) {
  if (selectedRowIds.value.includes(row.id)) {
    selectedRowIds.value = selectedRowIds.value.filter((i) => i !== row.id)
  } else {
    selectedRowIds.value = [...selectedRowIds.value, row.id]
  }
}

function onEdit(rowId: number | null) {
  isFormModalOpen.value = true
  selectedId.value = rowId
}

function confirmAction() {
  if (selectedRowIds.value.length > 0)
    mainStore.$patch({ confirmModalState: true })
  else alert(t('No_row_selected'))
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

function gotoPermissions(id: number) {
  router.push(`/app/roles/${id}/permissions`)
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

async function onSearch(val: string) {
  const res = await searchList(val)
  Object.assign(data, res)
}

async function onSort(val: string) {
  const res = await sortList(val)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onEdit(undefined)">
        {{ $t('Add') }}
      </VButton>
    </VFlex>
    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total" v-model:sort="sort">
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
                <VInput v-model="searchInput" class="is-rounded" :placeholder="t('Search') + '...'" />
              </VControl>
            </VField>
          </template>
        </VFlexTableToolbar> -->

        <VFlexTable rounded>
          <template #header-column="{ column }">
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_matches')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'actions'">
              <RolesFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)"
                @permissions="gotoPermissions(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="data.pagination.current_page" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <RoleFormModal v-model="isFormModalOpen" :role-id="selectedId"
      @update:list="() => { fetchData(); successNotify(); selectedId = undefined; }" @close="selectedId = undefined" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
