<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type {
  VFlexTableWrapperSortFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/stores/usersMockData'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import VButtons from '../button/VButtons.vue'
import VButton from '../button/VButton.vue'
import ViewListV1 from './ViewListV1.vue'

const mainStore = useMainStore()
const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Conclusions_List'))

type User = typeof users[0]

const data: User[] = users
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
  invoice: { // created_by column
    label: t('Invoice'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    bold: true
    // filter: userFilter,
  },
  status: { // created_by_dept column
    label: t('Status'),
    searchable: true,
    sortable: true,
    sort: locationSorter,
    bold: true
  },
  amount: { // description column
    label: t('Amount'),
    bold: true
    // inverted: true,
    // grow: true,
  },
  paidDate: {
    label: t('Paid_date'),
    bold: true
  },
  verifiedDate: {
    label: t('Verified_date'),
    bold: true
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
    <!-- table -->
    <h1 class="is-size-3 mb-3">{{ $t('Payment_status') }}</h1>
    <ViewListV1 />
    <VFlexTableWrapper :columns="columns" :data="data">
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <VFlexTable rounded>
          <!-- header-column slot -->
          <template #header-column="{ column }">
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value }">
            <!-- <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
              @change="clickOnRow" /> -->

            <template v-if="column.key === 'invoice'">
              <a href="javascript:;" class="has-text-primary">{{ row.invoice }}</a>
            </template>
            <template v-if="column.key === 'status'">
              <VButton rounded :color="
                value === 'pending'
                  ? 'warning'
                  : value === 'rejected'
                    ? 'danger'
                    : value === 'completed'
                      ? 'primary'
                      : undefined
              ">{{ row.status }}</VButton>
            </template>
            <template v-if="column.key === 'actions'">
              <VButtons>
                <VButton class="is-primary is-outlined">{{ $t('Verify') }}</VButton>
                <VButton class="is-danger is-outlined">{{ $t('Cancel') }}</VButton>
              </VButtons>
            </template>
          </template>
        </VFlexTable>
        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
  </div>
</template>
