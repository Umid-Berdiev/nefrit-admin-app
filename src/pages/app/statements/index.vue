<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from "/@src/stores";
import { fetchList } from '/@src/utils/api/statement'
import { useNotyf } from '/@src/composable/useNotyf'
import VTag from '/@src/components/base/tags/VTag.vue'

const { t, locale } = useI18n()

useHead({
  title: t('Statements') + ' - Nefrit',
})

const notif = useNotyf()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statements'))

const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const filterForm = ref({})

const isFormModalOpen = ref(false)
const isConclusionFormModalOpen = ref(false)
const isNoticeFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowId = ref<number>()
const router = useRouter()
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  }
})

const columns = {
  code: {
    label: t('statement_code'),
  },
  legal_entity: {
    label: t('applied_legal_entity'),
    searchable: true,
  },
  drug: {
    label: t('drug_name'),
    searchable: true,
  },
  status: {
    label: t('Status'),
    grow: true,
  },
  stage: {
    label: t('Stage'),
    grow: true,
  },
  is_paid: {
    label: t('Payment_status'),
    // grow: true,
  },
  date: {
    label: t('applied_at'),
    // grow: true,
    searchable: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

await fetchData()

function onActionTriggered(rowId: number) {
  router.push('/app/statements/' + rowId)
}

function gotoConclusionList(statementId: number) {
  router.push(`/app/statements/${statementId}#conclusions`)
}

function gotoNoticeList(statementId: number) {
  router.push(`/app/statements/${statementId}#notices`)
}

async function fetchData(page: number = 1) {
  const res = await fetchList(page)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock center title="" @add="isFormModalOpen = true" @filter="displayFilterForm = !displayFilterForm"
      remove-disabled add-disabled print-disabled />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
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
          <!-- </div>
              <div class="columns is-desktop"> -->
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
          <div class="column">
            <CountrySelect v-model="filterForm.applicantsCountry" />
          </div>
        </div>
        <VFlex>
          <VFlexItem class="ml-auto">
            <VButton outlined color="success" icon="feather:filter">{{ t('Filter') }}</VButton>
          </VFlexItem>
        </VFlex>
      </VCard>
    </div>

    <!-- table -->
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
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
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'legal_entity'">
              <span>{{ value?.name }}</span>
            </template>
            <template v-else-if="column.key === 'drug'">
              <span>{{ value?.name }}</span>
            </template>
            <template v-else-if="column.key === 'date' && value">
              <span>{{ $h.formatDate(value, 'HH:mm DD.MM.YYYY') }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
              <StatusTag :status="value" />
            </template>
            <template v-else-if="column.key === 'stage'">
              <!-- <button class="button is-size-6 has-background-info is-rounded has-text-white" rounded
                style="white-space: break-spaces;">
                {{ value.name }}
              </button> -->
              <VTag class="is-size-6" color="info" rounded :label="value.name"
                style="white-space: break-spaces; height: fit-content;" />
            </template>
            <template v-else-if="column.key === 'is_paid'">
              <VTag class="is-size-6" :color="value ? 'primary' : 'warning'" rounded
                :label="value ? $t('Paid') : $t('Not_Paid')" />
            </template>
            <template v-else-if="column.key === 'actions'">
              <!-- <ActionButtons @edit="isFormModalOpen = true" /> -->
              <StatementsFlexTableDropdown @view="onActionTriggered(row.id)"
                @conclusion:add="isConclusionFormModalOpen = true; selectedRowId = row.id"
                @notice:add="isNoticeFormModalOpen = true; selectedRowId = row.id"
                @conclusion:list="gotoConclusionList(row.id)" @notice:list="gotoNoticeList(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination class="mt-6" v-model:current-page="currentPage" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ConclusionFormModal v-model="isConclusionFormModalOpen" :item-id="undefined" :parent-id="Number(selectedRowId)"
      @update:list="() => { fetchData(); successNotify(); }" @close="selectedRowId = undefined" />
    <NoticeFormModal v-model="isNoticeFormModalOpen" :item-id="undefined" :parent-id="Number(selectedRowId)"
      @update:list="() => { fetchData(); successNotify(); }" @close="selectedRowId = undefined" />
  </div>
</template>
