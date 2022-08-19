<script setup lang="ts">
import { ref, computed, onMounted, h, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

import { useNotyf } from '/@src/composable/useNotyf'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useMainStore } from '/@src/stores'
import { fetchArticleList, removeArticle } from '/@src/utils/api/handbook';

const notif = useNotyf()
const router = useRouter()
const { t, locale } = useI18n()
const mainStore = useMainStore()
const selectedId = ref<number | null>(null)
const columns = computed(() => ({
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  image: {
    label: t('Image'),
    align: 'center'
    // grow: true
  },
  title: {
    label: t('Title'),
    // grow: true
  },
  author: {
    label: t('Author'),
  },
  date: {
    label: t('Date'),
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
}))
const viewWrapper = useViewWrapper()
const data = reactive({
  pagination: {
    current_page: 1,
    per_page: 10,
    total: 10,
  },
  result: []
})
const currentPage = computed({
  get: () => {
    return data.pagination.current_page
  },
  set: async (page) => {
    await fetchData(page)
  }
})

viewWrapper.setPageTitle(t('Articles'))

useHead({
  title: t('Articles') + ' - Nefrit',
})

await fetchData()

function onAdd() {
  router.push(`/app/handbooks/articles/add`)
}

function onEdit(rowID: number | null = null) {
  // isFormModalOpen.value = true
  // selectedId.value = rowID
  router.push(`/app/handbooks/articles/${rowID}`)
}

async function onRemove(id: number) {
  selectedId.value = id
  mainStore.$patch({ confirmModalState: true })
}

async function handleRemoveAction() {
  await removeArticle(selectedId.value)
  await fetchData()
  successNotify()
}

async function fetchData(page: number = 1) {
  const res = await fetchArticleList(page)
  Object.assign(data, res)
}

function successNotify() {
  notif.success(t('Success'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex justify-content="end" class="mb-4">
      <VButton outlined rounded color="info" icon="feather:plus" @click.prevent="onAdd()">
        {{ $t('Add') }}
      </VButton>
    </VFlex>
    <!-- table -->
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
            <template v-if="column.key === 'image'">
              <img :src="value" alt="" width="150" />
            </template>
            <template v-if="column.key === 'date' && value">
              {{ $h.formatDate(value, 'HH:mm DD.MM.YYYY') }}
            </template>
            <template v-if="column.key === 'actions'">
              <ArticleFlexTableDropdown @edit="onEdit(row.id)" @remove="onRemove(row.id)" />
            </template>
          </template>
        </VFlexTable>

        <!-- Table Pagination with wrapperState.page binded-->
        <VFlexPagination v-if="data.result.length" v-model:current-page="currentPage" class="mt-6"
          :item-per-page="data.pagination.per_page" :total-items="data.pagination.total" />
      </template>
    </VFlexTableWrapper>
    <!-- <ContactItemFormModal v-model="isFormModalOpen" :item-id="selectedId"
      @update:list="() => { fetchData(); successNotify(); selectedId = null; }" @close="selectedId = null" /> -->
    <ConfirmActionModal @confirm-action="handleRemoveAction" />
  </div>
</template>
