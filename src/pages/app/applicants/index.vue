<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import {
  exportApplicantToExcel,
  fetchList,
  fetchApplicantStatuses,
} from '/@src/utils/api/applicant'
import { useNotyf } from '/@src/composable/useNotyf'
import { StatusData } from '/@src/utils/interfaces'

const { t, locale } = useI18n()
const router = useRouter()

useHead({
  title: t('Applicants') + ' - Nefrit',
})
const notif = useNotyf()

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicants_List'))

const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: [],
})
const filterForm = reactive({
  name: '',
  boss_name: '',
  country_id: '',
  status_id: '',
})

const isLoading = ref(false)
const displayFilterForm = ref(false)
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  },
})
const statusList = ref<StatusData[]>([])
const columns = {
  orderNumber: {
    // label: '#',
    format: (value: any, row: any, index: number) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Applicant_name'),
    // media: true,
    grow: true,
    searchable: true,
  },
  boss_name: {
    label: t('Boss_name'),
    // grow: true,
    searchable: true,
  },
  phone: {
    label: t('Phone_number'),
    // grow: true,
    searchable: true,
  },
  status: {
    label: t('Status'),
    // grow: true,
    searchable: true,
  },
  country: {
    label: t('Country'),
    // grow: true,
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const

await fetchData()

onMounted(async () => {
  const res = await fetchApplicantStatuses()
  statusList.value = res
})

function onView(rowId: string | number) {
  router.push('/app/applicants/' + rowId)
}

async function fetchData(page: number = 1) {
  const res = await fetchList({ page, ...filterForm })
  Object.assign(data, res)
}

async function submitFilterForm() {
  try {
    isLoading.value = true
    const res = await fetchList({ page: 1, ...filterForm })
    Object.assign(data, res)
  } catch (error: any) {
    notif.error('Error while fetching filtered data: ', error.message)
  } finally {
    isLoading.value = false
  }
}

async function clearFilterForm() {
  isLoading.value = true
  Object.assign(filterForm, {
    name: '',
    boss_name: '',
    country_id: '',
    status_id: '',
  })
  await fetchData()
  isLoading.value = false
}

async function exportToExcel() {
  try {
    isLoading.value = true
    const res = await exportApplicantToExcel(filterForm)

    const url = URL.createObjectURL(
      new Blob([res], {
        type: 'application/vnd.ms-excel',
      })
    )
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `Worksheet_${Date.now()}.xlsx`)
    document.body.appendChild(link)
    link.click()
  } catch (error) {
    console.log({ error })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <TableActionsBlock
      center
      title=""
      add-disabled
      remove-disabled
      @filter="displayFilterForm = !displayFilterForm"
      @export="exportToExcel"
    />
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">{{ t('Filter_form') }}</h3>
        <form @submit.prevent="submitFilterForm">
          <div class="columns is-desktop">
            <div class="column">
              <VField :label="$t('Name')">
                <VControl>
                  <VInput v-model="filterForm.name" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <VField :label="$t('Boss_name')">
                <VControl>
                  <VInput v-model="filterForm.boss_name" type="text" />
                </VControl>
              </VField>
            </div>
            <div class="column">
              <StatusSelect v-model="filterForm.status_id" :list="statusList" />
            </div>
            <div class="column">
              <CountrySelect v-model="filterForm.country_id" />
            </div>
          </div>
          <VFlex justify-content="end" column-gap="1rem">
            <VFlexItem>
              <VButton
                type="button"
                :disabled="isLoading"
                outlined
                color="warning"
                icon="feather:x"
                @click="clearFilterForm"
                >{{ t('Clear') }}
              </VButton>
            </VFlexItem>
            <VFlexItem>
              <VButton
                type="submit"
                :disabled="isLoading"
                outlined
                color="success"
                icon="feather:filter"
                >{{ t('Filter') }}
              </VButton>
            </VFlexItem>
          </VFlex>
        </form>
      </VCard>
    </div>

    <!-- table -->
    <VFlexTableWrapper
      :columns="columns"
      :data="data.result"
      :limit="data.pagination.per_page"
      :total="data.pagination.total"
    >
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <VFlexTable rounded>
          <template #header-column="{ column }">
            <span
              v-if="column.key === 'orderNumber'"
              class="is-flex-grow-0"
              v-text="'#'"
            />
            <!-- <span v-if="column.key === 'name'" style="overflow-wrap: break-word;" v-text="column.label" /> -->
          </template>
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection
                :title="$t('No_data')"
                :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6"
              />
            </div>
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'name'">
              <p style="overflow-wrap: break-word">{{ value }}</p>
            </template>
            <template v-if="column.key === 'status' && value">
              <StatusTag :status="value" />
            </template>
            <template v-if="column.key === 'country' && value">
              <span>{{ value.name }}</span>
            </template>
            <template v-if="column.key === 'actions'">
              <ApplicantFlexTableDropdown @view="onView(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination
          v-if="data.result.length"
          v-model:current-page="currentPage"
          class="mt-6"
          :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total"
        />
      </template>
    </VFlexTableWrapper>
  </div>
</template>
