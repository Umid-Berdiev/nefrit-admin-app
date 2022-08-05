<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type {
  VFlexTableWrapperSortFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/stores/usersMockData'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'

type User = typeof users[0]

const props = defineProps({
  isContractInfoTableVisible: Boolean
});
const data: User[] = users
const mainStore = useMainStore()
const { t } = useI18n()

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
    bold: true,
    // align: 'right',
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

async function onVerify() {
  mainStore.$patch({ confirmModalState: true, confirmModalOkButtonColor: 'primary' })
  if (mainStore.confirmState) {
    console.log('User deleted!');
    mainStore.$patch({ confirmState: false })
  }
}

async function onReject() {
  mainStore.$patch({ confirmModalState: true })
  if (mainStore.confirmState) {
    console.log('User deleted!');
    mainStore.$patch({ confirmState: false })
  }
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <!-- table -->
    <h1 class="is-size-3 mb-3">{{ $t('Payments') }}</h1>
    <ContractInfoTable />
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
              <a href="javascript:;" class="has-text-primary is-pushed-mobile">{{ row.invoice }}</a>
            </template>
            <!-- <template v-if="column.key === 'status'">
              <StatusTag :status="value" />
            </template> -->
            <template v-if="column.key === 'actions'">
              <VButtons v-if="row.status !== 'completed'">
                <VButton class="is-primary is-outlined px-3" @click="onVerify">{{ $t('Verify') }}</VButton>
                <VButton class="is-danger is-outlined px-3" @click="onReject">{{ $t('Cancel') }}</VButton>
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
