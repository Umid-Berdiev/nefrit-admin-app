<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import VButton from '/@src/components/base/button/VButton.vue'
import VFlexPagination from '/@src/components/base/pagination/VFlexPagination.vue'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
// viewWrapper.setPageTitle(t('Applicant_Info'))

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''

const applicant = ref<ApplicantInterface>()
const isFormModalOpen = ref(false)
const data = [
  {
    id: 1,
    statement_date: '2022-06-23',
    statement_status: 'In process',
    in_stage: '2-stage',
    company: 'Grubspot',
  },
  {
    id: 2,
    statement_date: '2022-06-23',
    statement_status: 'In process',
    in_stage: '2-stage',
    company: 'Ferrario',
  },
  // and more data ...
]

const columns = {
  id: 'Id',
  statement_date: 'Statement_date',
  statement_status: 'Statement_status',
  in_stage: 'In_stage',
  company: 'Company',
  actions: {
    label: 'Actions',
    align: 'center'
  },
}

async function fetchApplicantById(id: number) {
  const api = useApi()
  const router = useRouter()

  try {
    const { data } = await api.get<ApplicantInterface[]>(`/applicants?id=${id}`)

    if (!data.length) {
      // the applicant does not exist, we replace the route to the 404 page
      // we also pass the original url to the 404 page as a query parameter
      // http://localhost:3000/applicant-not-found?original=/blog/a-fake-id
      router.replace({
        name: 'all', // this will match the ./src/pages/[...all].vue route
        params: {
          all: 'applicant-not-found',
        },
        query: {
          original: router.currentRoute.value.fullPath,
        },
      })
    }

    applicant.value = data[0]
  } catch (error) {
    console.error(error)
  }
}

// We trigger the fetchArticles function when the component is mounted
// onMounted(() => {
//   fetchApplicantById(currentId)
// })

// here we setup our page meta with our applicant data
useHead({
  title: computed(() => applicant.value?.title ?? 'Loading applicant...'),
})
</script>
 <!-- <i class="lnil lnil-tap" aria-hidden="true"></i> -->
<template>
  <div class="applicant-detail-wrapper">
    <VTabs selected="details" :tabs="[
      { label: t('Applicant_details'), value: 'details', icon: 'feather:info' },
      {
        label: t('Applicant_statements'),
        value: 'statements',
        icon: 'feather:file-text',
      },
      { label: t('Chat'), value: 'chat', icon: 'fas fa-comments' },
    ]">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'">
          <ApplicantForm />
        </div>
        <div v-else-if="activeValue === 'statements'">
          <VFlexTable :data="data" :columns="columns" rounded compact>
            <template #body-cell="{ row, column, value }">
              <VAction v-if="column.key === 'actions'">
                Details
              </VAction>
            </template>
          </VFlexTable>
          <!-- Table Pagination with wrapperState.page binded-->
          <VFlexPagination v-model:current-page="data.page" class="mt-6" :item-per-page="data.limit"
            :total-items="data.total" :max-links-displayed="5" no-router />
        </div>
        <div v-else-if="activeValue === 'chat'">
          <MessagingV1 />
        </div>
      </template>
    </VTabs>
    <ApplicantFormModal v-model="isFormModalOpen" />
  </div>
</template>

<style lang="scss" scoped>
.applicant-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>
