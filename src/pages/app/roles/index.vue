<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/stores/usersMockData'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import TableActionsBlock from '/@src/components/base/block/TableActionsBlock.vue'
import { useMainStore } from '/@src/stores'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('Roles') + ' - Nefrit',
})

const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Roles_List'))

type User = typeof users[0]

// duplicate user data to grow the array
const data: User[] = users
// for (let i = 0; i < 100; i++) {
//   data.push(...users)
// }
const filterForm = ref({})

const isFormModalOpen = ref(false)
const selectedRowIds = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowIds.value.length)
const router = useRouter()
const selectedRole = ref()

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
  select: {
    label: '',
    cellClass: 'is-flex-grow-0',
  },
  orderNumber: {
    // label: '#',
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Name'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    filter: userFilter,
  },
  description: {
    label: t('Description'),
    // searchable: true,
    // sortable: true,
    // sort: locationSorter,
    // filter: userFilter,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

// the select all checkbox click handler
function toggleSelection() {
  // console.log('data:', data)

  if (isAllSelected.value) {
    selectedRowIds.value = []
  } else {
    selectedRowIds.value = data.map((row: any) => row.id)
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

function onActionTriggered(rowId: number) {
  router.push('/app/applicant/' + rowId)
}

function onEdit(rowId: Object) {
  isFormModalOpen.value = true
  selectedRole.value = rowId
}

function confirmAction() {
  if (selectedRowIds.value.length > 0)
    mainStore.$patch({ confirmModalState: true })
  else alert(t('No_row_selected'))
}

async function onRemove() {
  mainStore.$patch({ confirmModalState: true })
  if (mainStore.confirmState) {
    console.log('User deleted!');
    mainStore.$patch({ confirmState: false })
  }
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" @add="onEdit({})" :filter-disabled="true" @remove="confirmAction" />

    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data">
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <!-- We can place any content inside the default slot-->
        <VFlexTableToolbar>
          <template #left>
            <!-- We can bind wrapperState.searchInput to any input -->
            <VField>
              <VControl icon="feather:search">
                <VInput v-model="wrapperState.searchInput" class="is-rounded" :placeholder="t('Search') + '...'" />
              </VControl>
            </VField>
          </template>
        </VFlexTableToolbar>

        <VFlexTable rounded>
          <template #header-column="{ column }">
            <VCheckbox v-if="column.key === 'select'" class="ml-2 mr-3" :checked="isAllSelected" name="all_selected"
              color="primary" @click="toggleSelection" />
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>
          <template #body-cell="{ row, column, value, index }">
            <VCheckbox v-if="column.key === 'select'" v-model="selectedRowIds" :value="row.id" name="selection"
              @change="clickOnRow" />

            <template v-if="column.key === 'actions'">
              <RolesFlexTableDropdown @edit="onEdit(row)" @remove="onRemove" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
    <RoleFormModal v-model="isFormModalOpen" :item="selectedRole" />
  </div>
</template>
