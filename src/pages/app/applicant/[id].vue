<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''

const applicant = ref<ApplicantInterface>()

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
onMounted(() => fetchApplicantById(currentId))

// here we setup our page meta with our applicant data
useHead({
  title: computed(() => applicant.value?.title ?? 'Loading applicant...'),
})
</script>

<template>
  <div class="applicant-detail-wrapper">
    <!--
        Page content goes here

        You can see more complete pages content samples from
        files in /src/components/pages directory
      -->

    <h1>{{ applicant?.title }}</h1>
    <div>{{ applicant?.content }}</div>
  </div>
</template>

<style lang="scss" scoped>
.applicant-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>
