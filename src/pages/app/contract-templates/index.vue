<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { useHead } from '@vueuse/head'
import ContractTemplateFormModal from '/@src/components/base/modal/ContractTemplateFormModal.vue'
import { fetchList } from '/@src/utils/api/contract-templates'

const { t } = useI18n()

useHead({
  title: t('Contract_templates') + ' - Nefrit',
})

const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Contract_templates'))

const isFormModalOpen = ref(false)
const selectedRowIds = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowIds.value.length)
const router = useRouter()
const selectedId = ref()
const templatesList = ref([])
const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})

const columns = {
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  name: {
    label: t('Template_title'),
  },
  amount: {
    label: t('Amount'),
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchTemplatesList(page)
  }
})

await fetchTemplatesList()

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

function onEdit(rowId: Object) {
  isFormModalOpen.value = true
  selectedId.value = rowId
}

function confirmAction() {
  if (selectedRowIds.value.length > 0)
    mainStore.$patch({ confirmModalState: true })
  else alert(t('No_row_selected'))
}

async function onRemove(templateId: number) {
  mainStore.$patch({ confirmModalState: true })
  if (mainStore.confirmState) {
    console.log('User deleted!');
    mainStore.$patch({ confirmState: false })
  }
}

async function fetchTemplatesList(page: number = 1) {
  const res = await fetchList(page)
  Object.assign(data, res)
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <!-- table -->
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onEdit({})">
        {{
            $t('Add')
        }}
      </VButton>
    </VFlex>
    <VFlexTableWrapper :columns="columns" :data="data.result" :limit="data.pagination.per_page"
      :total="data.pagination.total">
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <VFlexTable rounded>
          <template #header-column="{ column }">
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>
          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'actions'">
              <UsersFlexTableDropdown @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="currentPage" class="mt-6" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ContractTemplateFormModal v-model="isFormModalOpen" :template-id="selectedId"
      @update:list="() => { fetchData(); successNotify(); selectedId = undefined; }" @close="selectedId = undefined" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
