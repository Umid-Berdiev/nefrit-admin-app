<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type {
  VFlexTableWrapperSortFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/stores/usersMockData'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'

const mainStore = useMainStore()
const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Conclusions_List'))

type User = typeof users[0]

const data: User[] = users

const isConclusionModalOpen = ref(false)
const isFeedbackModalOpen = ref(false)
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
  bio: { // description column
    label: t('Conclusion_desc'),
    // inverted: true,
    // grow: true,
  },
  company: { // created_by_dept column
    label: t('Department'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
  },
  name: { // created_by column
    label: t('Employee_name'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    // filter: userFilter,
  },
  date: {
    label: t('Date')
  }, // created_at column
  files: {
    label: t('Files'),
    // align: 'center',
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

function confirmAction() {
  mainStore.$patch({ confirmModalState: true })
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex class="mb-4" flex-wrap="wrap">
      <VFlexItem>
        <h1 class="is-size-3 mb-3">{{ $t('Statement_conclusions') }}</h1>
      </VFlexItem>
      <VFlexItem class="ml-auto">
        <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="isConclusionModalOpen = true">
          {{ $t('Add') }}
        </VButton>
      </VFlexItem>
    </VFlex>
    <VFlexTableWrapper :columns="columns" :data="data">
      <template #default="wrapperState">
        <VFlexTable rounded>
          <!-- header-column slot -->
          <template #header-column="{ column }">
            <VCheckbox v-if="column.key === 'select'" class="ml-2 mr-3" :checked="isAllSelected" name="all_selected"
              color="primary" @click="toggleSelection" />
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column }">
            <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
              @change="clickOnRow" />

            <template v-else-if="column.key === 'bio'">
              <div style="white-space: break-spaces;">
                {{ row.bio }}
              </div>
            </template>
            <template v-else-if="column.key === 'files'">
              <ul class="is-pushed-mobile">
                <li>
                  <a href="javascript:;" class="has-text-primary">file1</a>
                </li>
                <li>
                  <a href="javascript:;" class="has-text-primary">file2</a>
                </li>
                <li>
                  <a href="javascript:;" class="has-text-primary">file3</a>
                </li>
              </ul>
            </template>
            <template v-else-if="column.key === 'actions'">
              <ConclusionFlexTableDropdown @edit="isConclusionModalOpen = true" @remove="confirmAction" />
            </template>
          </template>
        </VFlexTable>

        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
    <FeedbackModal v-model="isConclusionModalOpen" />
  </div>
</template>
