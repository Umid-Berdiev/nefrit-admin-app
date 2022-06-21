<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { RouterLink } from 'vue-router'

import VTag from '/@src/components/base/tags/VTag.vue'
import FlexTableDropdown from '/@src/components/partials/dropdowns/FlexTableDropdown.vue'

import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'

const selectedRowsId = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowsId.value.length)
// this is our data
const data = [
  {
    id: 1,
    company: 'Grubspot',
    type: 'New Lead',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  {
    id: 2,
    company: 'ASKDhsjakd',
    type: 'weropiuwe',
    industry: 'Software',
    status: 'InActive',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  // and more data ...
]

// this is the how rows and columns are rendered
const columns = {
  select: {
    label: '',
    cellClass: 'is-flex-grow-0',
  },
  company: {
    label: 'Company',
    bold: true,
    sortable: true,
  },
  type: 'Type',
  industry: 'Industry',
  status: {
    label: 'Status',
    // we can use custom render function for each rows
    renderRow: (row: any) =>
      h(
        VTag,
        {
          rounded: true,
          color:
            row.status === 'Active'
              ? 'success'
              : row.status === 'New'
                ? 'info'
                : row.status === 'Suspended'
                  ? 'orange'
                  : undefined,
        },
        // this notation is to render content in the default slot
        {
          default() {
            return `${row.status}`
          },
        }
      ),
  },
  contacts: {
    label: 'Contacts',
    align: 'end',
    sortable: true,
  },
  actions: {
    label: 'Actions',
    align: 'end',
    renderRow: (row: any) =>
      h(FlexTableDropdown, {
        // We can catch all events from vue
        onView: () => {
          console.log('viewing', row)
        },
        onProjects: () => {
          console.log('projects', row)
        },
        onSchedule: () => {
          console.log('schedule', row)
        },
        onRemove: () => {
          console.log('remove', row)
        },
      }),
  },
}

// the select all checkbox click handler
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = data.map((_, index) => index)
  }
}

// this it the row click handler (enabled with clickable props)
function clickOnRow(row: any) {
  if (selectedRowsId.value.includes(row.id)) {
    selectedRowsId.value = selectedRowsId.value.filter((i) => i !== row.id)
  } else {
    selectedRowsId.value = [...selectedRowsId.value, row.id]
  }
}

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
</script>

<template>
  <VFlexTableWrapper :columns="columns" :data="data">
    <!-- We can place any content inside the default slot-->
    <VFlexTableToolbar>
      <template #left>
        <!-- We can bind data.searchInput to any input -->
        <VField>
          <VControl icon="feather:search">
            <input v-model="data.searchInput" type="text" class="input is-rounded" placeholder="Filter..." />
          </VControl>
        </VField>
      </template>

      <template #right>
        <!-- We can also bind data.limit -->
        <!-- <VField>
          <VControl>
            <div class="select is-rounded">
              <select v-model="data.limit">
                <option :value="1">1 results per page</option>
                <option :value="10">10 results per page</option>
                <option :value="15">15 results per page</option>
                <option :value="25">25 results per page</option>
                <option :value="50">50 results per page</option>
              </select>
            </div>
          </VControl>
        </VField> -->
      </template>
    </VFlexTableToolbar>

    <!--
        The VFlexTable "data" and "columns" props
        will be inherited from parent VFlexTableWrapper
      -->
    <VFlexTable compact rounded>
      <!-- header-column slot -->
      <template #header-column="{ column }">
        <VCheckbox v-if="column.key === 'select'" class="ml-2 mr-3" :checked="isAllSelected" name="all_selected"
          color="primary" @click="toggleSelection" />
      </template>

      <!-- body-cell slot -->
      <template #body-cell="{ row, column, value }">
        <!--This is the slot for row.select cells-->
        <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
          @change="clickOnRow" />
      </template>
    </VFlexTable>

    <!-- Table Pagination with data.page binded-->
    <VFlexPagination v-model:current-page="data.page" class="mt-6" :item-per-page="data.limit" :total-items="data.total"
      :max-links-displayed="5" no-router />
  </VFlexTableWrapper>
</template>
