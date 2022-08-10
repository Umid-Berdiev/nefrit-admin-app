<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { useHead } from '@vueuse/head'
import ContractTemplateFormModal from '/@src/components/base/modal/ContractTemplateFormModal.vue'
import { fetchList, removeById } from '/@src/utils/api/contract-templates'
import { useNotyf } from '/@src/composable/useNotyf'

const { t } = useI18n()

useHead({
  title: t('Contract_templates') + ' - Nefrit',
})

const notif = useNotyf()
const mainStore = useMainStore()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Contract_templates'))

const isFormModalOpen = ref(false)
const selectedRowIds = ref<number[]>([])
const isAllSelected = computed(() => data.result.length === selectedRowIds.value.length)
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

function onEdit(rowId: Object) {
  isFormModalOpen.value = true
  selectedId.value = rowId
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  await removeById(selectedId.value)
  await fetchTemplatesList()
  successNotify()
}

async function fetchTemplatesList(page: number = 1) {
  const res = await fetchList(page)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
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

          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.result.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'actions'">
              <DepartmentFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-model:current-page="currentPage" class="mt-6" :item-per-page="data.pagination.per_page"
          :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <ContractTemplateFormModal v-model="isFormModalOpen" :template-id="selectedId"
      @update:list="() => { fetchTemplatesList(); successNotify(); selectedId = undefined; }"
      @close="selectedId = undefined" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
