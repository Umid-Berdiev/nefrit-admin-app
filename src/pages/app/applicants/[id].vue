<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '/@src/stores'
import { fetchById } from '/@src/utils/api/applicant'
import { ApplicantData } from '/@src/utils/interfaces'

const mainStore = useMainStore()
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const currentId = (route.params?.id as string) ?? ''
const applicant = ref<ApplicantInterface>()
const tabs = reactive<TabHeader[]>([
  { label: t('Applicant_details'), value: 'details', icon: 'feather:info' },
  {
    label: t('Statements'),
    value: 'statements',
    icon: 'feather:file-text',
  },
  { label: t('Payments'), value: 'payments', icon: 'fas fa-dollar' },
  { label: t('Chat'), value: 'chat', icon: 'fas fa-comments' },
])
const columns = {
  select: {
    label: '',
    cellClass: 'is-flex-grow-0',
  },
  orderNumber: {
    label: 'Ariza qabul raqami',
  },
  company: {
    label: t('applied_legal_entity'),
  },
  drug: {
    label: t('drug_name'),
  },
  date: {
    label: t('applied_at'),
  },
  status: t('Status'),
  stage: t('Stage'),
  actions: {
    label: t('Actions'),
    align: 'center',
  },
}
const isAllSelected = ref(false)
const isFeedbackModalOpen = ref(false)
const selectedRowsId = ref<number[]>([])
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicant_Info'))
const data = reactive<ApplicantData>({})

onMounted(async () => {
  await fetchData()
})

useHead({
  title: computed(() => applicant.value?.title ?? 'Loading applicant...'),
})

async function fetchData() {
  const res = await fetchById(Number(currentId))
  Object.assign(data, res)
}

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

function onActionTriggered(rowId: string | number) {
  router.push('/app/applicant/' + rowId)
}

function gotoList(statementId: number) {
  router.push(`/app/statement/${statementId}#conclusions`)
}
</script>

<template>
  <div class="applicant-detail-wrapper">
    <VTabs selected="details" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'" class="mt-5">
          <ApplicantForm :applicant-data="data" />
        </div>
        <div v-else-if="activeValue === 'statements'" class="mt-5">
          <VFlexTable :data="data" :columns="columns" rounded compact>
            <!-- header-column slot -->
            <template #header-column="{ column }">
              <VCheckbox v-if="column.key === 'select'" class="ml-2 mr-3" :checked="isAllSelected" name="all_selected"
                color="primary" @click="toggleSelection" />
            </template>

            <!-- Custom "name" cell content -->
            <template #body-cell="{ row, column, value, index }">
              <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
                @change="clickOnRow" />

              <template v-else-if="column.key === 'orderNumber'">
                {{ '00000' + (row.id + 1) }}
              </template>
              <template v-else-if="column.key === 'status'">
                <VTag class="is-size-6" rounded :color="
                  value === 'pending'
                    ? 'warning'
                    : value === 'rejected'
                      ? 'danger'
                      : value === 'completed'
                        ? 'primary'
                        : undefined
                ">
                  {{ t(value) }}
                </VTag>
              </template>
              <template v-else-if="column.key === 'stage'">
                <VTag class="is-size-6" rounded color="info">
                  {{ t(value) }}
                </VTag>
              </template>
              <template v-else-if="column.key === 'actions'">
                <StatementsFlexTableDropdown @view="onActionTriggered(row.id)" @conclusion="gotoList(row.id)"
                  @remove="confirmAction" @feedback="isFeedbackModalOpen = true" />
              </template>
            </template>
          </VFlexTable>

          <!-- Table Pagination with data.page binded-->
          <VFlexPagination v-model:current-page="data.page" class="mt-6" :item-per-page="data.limit"
            :total-items="data.total" :max-links-displayed="5" no-router />
        </div>
        <div v-else-if="activeValue === 'payments'" class="mt-5">
          <PaymentStatusTable />
        </div>
        <div v-else-if="activeValue === 'chat'" class="mt-5">
          <MessagingV1 />
        </div>
      </template>
    </VTabs>
  </div>
</template>

<style lang="scss" scoped>
.applicant-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>
