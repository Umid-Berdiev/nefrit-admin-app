<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import VButton from '/@src/components/base/button/VButton.vue'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicant_Info'))

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''

const applicant = ref<ApplicantInterface>()
const isFormModalOpen = ref(false)
const data = [
  {
    id: 1,
    company: 'Grubspot',
    type: 'New Lead',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 1,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  {
    id: 2,
    company: 'Ferrario',
    type: 'Old Bee',
    industry: 'Enginering',
    status: 'InActive',
    contacts: [
      {
        id: 1,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  // and more data ...
]

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

<template>
  <div class="applicant-detail-wrapper">
    <VTabs type="boxed" selected="details" :tabs="[
      { label: t('Applicant_details'), value: 'details' },
      { label: t('Applicant_statements'), value: 'statements' },
      { label: t('Chat'), value: 'chat' },
    ]">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'">
          <VBlock title="" center>
            <template #action>
              <VButtons>
                <VButton outlined rounded color="success" icon="feather:edit" @click="isFormModalOpen = true">
                  {{ t('Edit') }}
                </VButton>
              </VButtons>
            </template>
          </VBlock>
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td>Tina</td>
                <td>Bergmann</td>
              </tr>
              <tr>
                <td>John</td>
                <td>Wistmus</td>
              </tr>
              <tr>
                <td>Sam</td>
                <td>Watson</td>
              </tr>
              <tr>
                <td>Jolaine</td>
                <td>Joestar</td>
              </tr>
              <tr>
                <td>Anders</td>
                <td>Jensen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="activeValue === 'statements'">
          <VFlexTable :data="data" rounded compact />
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
