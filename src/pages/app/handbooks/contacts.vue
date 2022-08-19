<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { fetchContactItemList, removeContactItem } from '/@src/utils/api/handbook';
import { ContactItemData } from "/@src/utils/interfaces";

const notif = useNotyf()
const router = useRouter()
const { t, locale } = useI18n()
const mainStore = useMainStore()
const data = ref<ContactItemData[]>([])
const isFormModalOpen = ref(false)
const selectedId = ref<number | null>(null)
const columns = computed(() => ({
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  icon: {
    label: t('Icon'),
    align: 'center'
    // grow: true
  },
  name: {
    label: t('Name'),
    grow: true
  },
  type: {
    label: t('Type'),
  },
  value: {
    label: t('Value'),
  },
  status: {
    label: t('Status'),
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
}))
const viewWrapper = useViewWrapper()

viewWrapper.setPageTitle(t('Contact_items'))

useHead({
  title: t('Contact_items') + ' - Nefrit',
})

await fetchData()

function onEdit(rowId: number | null = null) {
  isFormModalOpen.value = true
  selectedId.value = rowId
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

function gotoPermissions(id: number) {
  router.push(`/app/roles/${id}/permissions`)
}

async function handleRemoveAction() {
  await removeContactItem(selectedId.value)
  await fetchData()
  successNotify()
}

async function fetchData() {
  const res = await fetchContactItemList()
  data.value = res
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onEdit()">
        {{ $t('Add') }}
      </VButton>
    </VFlex>
    <!-- table -->
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
          <template #body>
            <!-- This is the empty state -->
            <div v-if="data.length === 0" class="flex-list-inner">
              <VPlaceholderSection :title="$t('No_data')" :subtitle="$t('There_is_no_data_that_match_your_query')"
                class="my-6" />
            </div>
          </template>

          <template #body-cell="{ row, column, value, index }">
            <template v-if="column.key === 'icon'">
              <img :src="value" alt="" width="50" />
            </template>
            <template v-if="column.key === 'status'">
              <VTag class="is-size-6" rounded :color="value === 'active' ? 'success' : 'danger'" :label="$t(value)" />
            </template>
            <template v-if="column.key === 'actions'">
              <ContactItemFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>
      </template>
    </VFlexTableWrapper>
    <ContactItemFormModal v-model="isFormModalOpen" :item-id="selectedId"
      @update:list="() => { fetchData(); successNotify(); selectedId = null; }" @close="selectedId = null" />
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
