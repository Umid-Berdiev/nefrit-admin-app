<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type {
  VFlexTableWrapperSortFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { users } from '/@src/stores/usersMockData'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import CountrySelect from '/@src/components/forms/selects/CountrySelect.vue'
import { useMainStore } from '/@src/stores'
import ConclusionFlexTableDropdown from '/@src/components/partials/dropdowns/ConclusionFlexTableDropdown.vue'
import FeedbackModal from '/@src/components/base/modal/FeedbackModal.vue'
import VButton from '../button/VButton.vue'

const mainStore = useMainStore()
const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Conclusions_List'))

type User = typeof users[0]

// duplicate user data to grow the array
const data: User[] = users
// for (let i = 0; i < 100; i++) {
//   data.push(...users)
// }
const filterForm = ref({})

const isConclusionModalOpen = ref(false)
const isFeedbackModalOpen = ref(false)
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
    <!-- filter block -->
    <!-- <VBlock title="" center>
      <template #action>
        <VButtons>
          <VButton outlined rounded color="info" icon="feather:plus" @click="isConclusionModalOpen = true"> {{ t('Add')
          }} </VButton>
          <VButton outlined rounded color="primary" icon="feather:printer">
            {{ t('Print') }}
          </VButton>
          <VButton outlined rounded color="warning" icon="feather:filter"
            @click="displayFilterForm = !displayFilterForm">
            {{ t('Filter') }}
          </VButton>
          <VButton outlined rounded color="danger" icon="feather:trash">
            {{ t('Delete_selected') }}
          </VButton>
        </VButtons>
      </template>
    </VBlock> -->
    <!-- <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Payment_status') }}</h3>
        <div class="columns is-desktop">
          <VField class="column">
            <VLabel>{{ t('applied_legal_entity') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantUser" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Status') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantStatus" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('applied_at') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantBossName" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('stage') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantName" type="text" placeholder="" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>{{ t('Phone') }}</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantPhone" type="text" placeholder="" />
            </VControl>
          </VField>
          <CountrySelect v-model="filterForm.applicantsCountry" class="column" />
        </div>
        <div class="columns">
          <div class="column is-1 ml-auto">
            <VButton outlined color="warning" fullwidth icon="feather:filter">{{ t('Filter') }}</VButton>
          </div>
        </div>
      </VCard>
    </div> -->

    <!-- table -->
    <h1 class="is-size-3 mb-3">{{ $t('Payment_status') }}</h1>
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
          <template #body-cell="{ row, column }">
            <!-- <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
              @change="clickOnRow" /> -->

            <template v-if="column.key === 'invoice'">
              <a href="javascript:;" class="has-text-primary">{{ row.invoice }}</a>
            </template>
            <template v-if="column.key === 'actions'">
              <div class="buttons">
                <VButton class="is-primary is-outlined">{{ $t('Verify') }}</VButton>
                <VButton class="is-danger is-outlined">{{ $t('Cancel') }}</VButton>
              </div>
            </template>
          </template>
        </VFlexTable>
        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
  </div>
</template>