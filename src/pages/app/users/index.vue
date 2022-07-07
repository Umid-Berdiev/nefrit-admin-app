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
import UserFormModal from '/@src/components/base/modal/UserFormModal.vue'

const { t } = useI18n()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicants_List'))

type User = typeof users[0]

// duplicate user data to grow the array
const data: User[] = users
// for (let i = 0; i < 100; i++) {
//   data.push(...users)
// }
const filterForm = ref({})

const isFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowIds = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowIds.value.length)
const router = useRouter()
const selectedUser = ref()

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
    label: '#',
    // cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Fullname'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    filter: userFilter,
  },
  shortname: {
    label: t('Username'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    filter: userFilter,
  },
  email: {
    label: t('Email'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    filter: userFilter,
  },
  location: {
    label: t('Department'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    filter: userFilter,
  },
  role: {
    label: t('Role'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    filter: userFilter,
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

function onEditUser(rowId: Object) {
  isFormModalOpen.value = true
  selectedUser.value = rowId
}

function confirmAction() {
  if (selectedRowIds.value.length > 0)
    mainStore.$patch({ confirmModalState: true })
  else alert(t('No_row_selected'))
}

async function onRemoveUser() {
  mainStore.$patch({ confirmModalState: true })
  if (mainStore.confirmState) {
    console.log('User deleted!');
    mainStore.$patch({ confirmState: false })
  }
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" @add="onEditUser({})" @filter="displayFilterForm = !displayFilterForm"
      @remove="confirmAction" />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <div class="columns is-desktop">
          <VField class="column">
            <VLabel>{{ t('First_name') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.first_name" type="text" :placeholder="$t('Type') + '...'" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Last_name') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.last_name" type="text" :placeholder="$t('Type') + '...'" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Username') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.username" type="text" :placeholder="$t('Type') + '...'" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Email') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.email" type="text" :placeholder="$t('Type') + '...'" />
            </VControl>
          </VField>
        </div>
        <div class="columns">
          <div class="column is-1 ml-auto">
            <VButton outlined color="warning" fullwidth icon="feather:filter">{{ t('Filter') }}</VButton>
          </div>
        </div>
      </VCard>
    </div>

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
                <input v-model="wrapperState.searchInput" type="text" class="input is-rounded"
                  :placeholder="t('Search') + '...'" />
              </VControl>
            </VField>
          </template>
        </VFlexTableToolbar>

        <VFlexTable rounded>
          <template #header-column="{ column }">
            <VCheckbox v-if="column.key === 'select'" class="ml-2 mr-3" :checked="isAllSelected" name="all_selected"
              color="primary" @click="toggleSelection" />
          </template>
          <template #body-cell="{ row, column, value, index }">
            <VCheckbox v-if="column.key === 'select'" v-model="selectedRowIds" :value="row.id" name="selection"
              @change="clickOnRow" />

            <template v-if="column.key === 'orderNumber'">
              <span class="w-5">
                {{ index + 1 }}
              </span>
            </template>
            <template v-if="column.key === 'actions'">
              <!-- <div class="is-flex is-justify-content-flex-end">
                <ActionButtons @view="onActionTriggered(row.id)" @edit="isFormModalOpen = true" />
              </div> -->
              <UsersFlexTableDropdown @view="onActionTriggered(row.id)" @edit="onEditUser(row)"
                @remove="onRemoveUser" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
    <UserFormModal v-model="isFormModalOpen" :item="selectedUser" />
  </div>
</template>
