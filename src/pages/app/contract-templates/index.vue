<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import type {
  VFlexTableWrapperSortFunction,
  VFlexTableWrapperFilterFunction,
} from '/@src/components/base/table/VFlexTableWrapper.vue'
import { templates } from '/@src/stores/contractTemplateMockData'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import TableActionsBlock from '/@src/components/base/block/TableActionsBlock.vue'
import { useMainStore } from '/@src/stores'
import UserFormModal from '/@src/components/base/modal/UserFormModal.vue'
import { useHead } from '@vueuse/head'
import ContractDownloadModal from '/@src/components/base/modal/ContractDownloadModal.vue'
import ContractTemplateFormModal from '/@src/components/base/modal/ContractTemplateFormModal.vue'

const { t } = useI18n()

useHead({
  title: t('Contract_templates') + ' - Nefrit',
})

const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Contract_templates'))

type User = typeof templates[0]

// duplicate user data to grow the array
const data: User[] = templates
// for (let i = 0; i < 100; i++) {
//   data.push(...templates)
// }
const filterForm = ref({})

const isFormModalOpen = ref(false)
const displayFilterForm = ref(false)
const selectedRowIds = ref<number[]>([])
const isAllSelected = computed(() => data.length === selectedRowIds.value.length)
const router = useRouter()
const selectedTemplate = ref()

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
  selectedTemplate.value = rowId
}

function confirmAction() {
  if (selectedRowIds.value.length > 0)
    mainStore.$patch({ confirmModalState: true })
  else alert(t('No_row_selected'))
}

async function onRemoveUser() {
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
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onEdit({})">
        {{
            $t('Add')
        }}
      </VButton>
    </VFlex>
    <VFlexTableWrapper :columns="columns" :data="data">
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
              <UsersFlexTableDropdown @remove="onRemoveUser" />
            </template>
          </template>
        </VFlexTable>
      </template>
    </VFlexTableWrapper>
    <ContractTemplateFormModal v-model="isFormModalOpen" :item="selectedTemplate" />
  </div>
</template>
