<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'
import { useRouter } from 'vue-router'

const router = useRouter()

// articles and fetchArticles variables can be provided by a composable function
const articles = ref<ApplicantInterface[]>([]) // we know that the articles will be an array of Applicant

async function fetchArticles() {
  const api = useApi()

  try {
    const { data } = await api.get<ApplicantInterface[]>('/applicants') // we know that our api respond with an array of Applicant
    articles.value = data
  } catch (error) {
    // here we can handle the error
    console.error(error)
  }
}

// We trigger the fetchArticles function when the component is mounted
onMounted(fetchArticles)

// don't forget to setup our page meta
useHead({
  title: 'Applicants',
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Applicants')

function handleView(id: number) {
  router.push('/app/applicant/' + id)
}

async function handleRemove(id: number) {
  const api = useApi()
  await api.delete('/applicant/' + id)
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <!-- <ul>
      <li v-for="article in articles" :key="article.id">
        <RouterLink
          :to="{
            name: 'app-applicant-id',
            params: {
              id: article.id,
            },
          }"
        >
          {{ article.title }}
        </RouterLink>
      </li>
    </ul> -->

    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Position</th>
          <th scope="col" class="is-end">
            <div class="dark-inverted is-flex is-justify-content-flex-end">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tina</td>
          <td>Bergmann</td>
          <td>Head of Sales</td>
          <td class="is-end">
            <div class="is-flex is-justify-content-flex-end">
              <FlexTableDropdown @view="handleView(1)" />
            </div>
          </td>
        </tr>
        <tr>
          <td>John</td>
          <td>Wistmus</td>
          <td>Senior Executive</td>
          <td class="is-end">
            <div class="is-flex is-justify-content-flex-end">
              <FlexTableDropdown />
            </div>
          </td>
        </tr>
        <tr>
          <td>Sam</td>
          <td>Watson</td>
          <td>Software Engineer</td>
          <td class="is-end">
            <div class="is-flex is-justify-content-flex-end">
              <FlexTableDropdown />
            </div>
          </td>
        </tr>
        <tr>
          <td>Jolaine</td>
          <td>Joestar</td>
          <td>HR Manager</td>
          <td class="is-end">
            <div class="is-flex is-justify-content-flex-end">
              <FlexTableDropdown />
            </div>
          </td>
        </tr>
        <tr>
          <td>Anders</td>
          <td>Jensen</td>
          <td>Accountant</td>
          <td class="is-end">
            <div class="is-flex is-justify-content-flex-end">
              <FlexTableDropdown />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.applicant-list-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>

