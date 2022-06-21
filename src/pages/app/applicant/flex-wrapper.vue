<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'

import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/stores/usersMockData'
import FlexTableDropdown from '/@src/components/partials/dropdowns/FlexTableDropdown.vue'
import ActionButtons from '/@src/components/partials/buttons/ActionButtons.vue'

type User = typeof users[0]

// duplicate user data to grow the array
const data: User[] = users
// for (let i = 0; i < 100; i++) {
//   data.push(...users)
// }
const filterForm = ref({})

const displayFilterForm = ref(false)
const selectedRowsId = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowsId.value.length)

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
  name: {
    label: 'Username',
    media: true,
    grow: true,
    searchable: true,
    sortable: true,
    filter: userFilter,
  },
  location: {
    label: 'Location',
    sortable: true,
    searchable: true,
    sort: locationSorter,
  },
  role: 'Role',
  actions: {
    label: 'Actions',
    align: 'end',
  },
} as const

// the select all checkbox click handler
function toggleSelection() {
  // console.log('data:', data)

  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = data.map((row: any) => row.id)
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

function onActionTriggered(event) {
  console.log('event target: ', event)
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <!-- filter block -->
    <VBlock title="" center>
      <template #action>
        <VButtons>
          <VButton outlined rounded color="warning" icon="feather:filter"
            @click="displayFilterForm = !displayFilterForm">
            Filter
          </VButton>
          <VButton outlined rounded color="info" icon="feather:eye"> View </VButton>
          <VButton outlined rounded color="danger" icon="feather:trash"> Remove </VButton>
          <VButton outlined rounded color="primary" icon="feather:edit-2"> Edit </VButton>
        </VButtons>
      </template>
    </VBlock>
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">Filter form</h3>
        <div class="columns is-desktop">
          <VField class="column">
            <VLabel>User</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantUser" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Status</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantStatus" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Boss name</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantBossName" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <!-- </div>
              <div class="columns is-desktop"> -->
          <VField class="column">
            <VLabel>Name</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantName" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Phone</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantPhone" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Country</VLabel>
            <VControl>
              <VSelect v-model="filterForm.applicantsCountry">
                <VOption value="">Select a Hero</VOption>
                <VOption value="Superman">Superman</VOption>
                <VOption value="Batman">Batman</VOption>
                <VOption value="Spiderman">Spiderman</VOption>
                <VOption value="Deadpool">Deadpool</VOption>
                <VOption value="Spawn">Spawn</VOption>
                <VOption value="Galactus">Galactus</VOption>
              </VSelect>
            </VControl>
          </VField>
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
                  placeholder="Filter..." />
              </VControl>
            </VField>
          </template>

          <!-- We can also bind wrapperState.limit -->
          <!-- <template #right>
            <VField>
              <VControl>
                <div class="select is-rounded">
                  <select v-model="wrapperState.limit">
                    <option :value="1">1 results per page</option>
                    <option :value="10">10 results per page</option>
                    <option :value="15">15 results per page</option>
                    <option :value="25">25 results per page</option>
                    <option :value="50">50 results per page</option>
                  </select>
                </div>
              </VControl>
            </VField>
          </template> -->
        </VFlexTableToolbar>

        <!--
          The VFlexTable "data" and "columns" props
          will be inherited from parent VFlexTableWrapper
        -->
        <VFlexTable rounded>
          <!-- header-column slot -->
          <template #header-column="{ column }">
            <VCheckbox v-if="column.key === 'select'" class="ml-2 mr-3" :checked="isAllSelected" name="all_selected"
              color="primary" @click="toggleSelection" />
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value }">
            <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
              @change="clickOnRow" />

            <template v-if="column.key === 'name'">
              <!-- <VAvatar size="medium" :picture="row.medias.avatar" :badge="row.medias.badge" :initials="row.initials" /> -->
              <div>
                <span class="dark-text" :title="row.name">
                  {{ row.shortname }}
                </span>
                <VTextEllipsis width="280px" class="light-text" :title="row.bio">
                  <small>{{ row.bio }}</small>
                </VTextEllipsis>
              </div>
            </template>
            <template v-if="column.key === 'actions'">
              <div class="is-flex is-justify-content-flex-end">
                <!-- <VIconButton class="mr-2" outlined circle color="info" icon="feather:eye">
                  View
                </VIconButton>
                <VIconButton class="mr-2" outlined circle color="danger" icon="feather:trash">
                  Remove
                </VIconButton>
                <VIconButton class="mr-2" outlined circle color="primary" icon="feather:edit-2">
                  Edit
                </VIconButton> -->
                <ActionButtons @edit="onActionTriggered" />
                <FlexTableDropdown @view="
                  () => {
                    console.log('viewing', row)
                  }
                " />
              </div>
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
  </div>
</template>
