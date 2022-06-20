<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import { useApi } from '/@src/composable/useApi'
import FlexTableDropdown from '/@src/components/partials/dropdowns/FlexTableDropdown.vue'

// the total data will be set by the fetchData function
const filterForm = ref({})
const displayFilterForm = ref(false)
const selectedRowsId = ref<string[]>([])
const isAllSelected = computed(
  () => fetchedData.value.length === selectedRowsId.value.length
)

// the fetchData function will be called each time one of the parameter changes
const api = useApi()
const fetchedData = ref([])
const fetchData = async () => {
  // async fetch data to our server
  const { data: users } = await api.get(`/api/users`)

  // the return of the function must be an array
  return users
}

onMounted(async () => {
  const res = await fetchData()
  fetchedData.value = res
})

// the select all checkbox click handler
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = fetchedData.value.map(({ initials }) => initials)
  }
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <!-- filter block -->
    <VBlock title="" center>
      <template #action>
        <VButtons>
          <VButton outlined rounded color="warning" icon="feather:filter"
            @click="displayFilterForm = !displayFilterForm">
            Filter
          </VButton>
          <VButton outlined rounded color="info" icon="feather:eye"> View </VButton>
          <VButton outlined rounded color="danger" icon="feather:trash"> Remove </VButton>
          <VButton outlined rounded color="primary" icon="feather:edit-2"> Edit </VButton>
        </VButtons>
      </template>
    </VBlock>
    <div v-show="displayFilterForm" class="mb-5">
      <VCard radius="small">
        <h3 class="title is-5 mb-2">Filter form</h3>
        <div class="columns is-desktop">
          <VField class="column">
            <VLabel>User</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantUser" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Status</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantStatus" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Boss name</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantBossName" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <!-- </div>
            <div class="columns is-desktop"> -->
          <VField class="column">
            <VLabel>Name</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantName" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Phone</VLabel>
            <VControl>
              <VInput v-model="filterForm.applicantPhone" type="text" placeholder="john.doe" />
            </VControl>
          </VField>
          <VField class="column">
            <VLabel>Country</VLabel>
            <VControl>
              <VSelect v-model="filterForm.applicantsCountry">
                <VOption value="">Select a Hero</VOption>
                <VOption value="Superman">Superman</VOption>
                <VOption value="Batman">Batman</VOption>
                <VOption value="Spiderman">Spiderman</VOption>
                <VOption value="Deadpool">Deadpool</VOption>
                <VOption value="Spawn">Spawn</VOption>
                <VOption value="Galactus">Galactus</VOption>
              </VSelect>
            </VControl>
          </VField>
        </div>
      </VCard>
    </div>

    <!-- table -->
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <VCheckbox :checked="isAllSelected" name="all_selected" color="primary" @click="toggleSelection" />
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Location</th>
          <th scope="col">Bio</th>
          <th scope="col" class="is-end">
            <div class="dark-inverted is-flex is-justify-content-flex-end">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in fetchedData" :key="row.id">
          <VCheckbox v-model="selectedRowsId" :value="row.initials" name="selection" />
          <td>{{ row.name }}</td>
          <td>{{ row.position }}</td>
          <td>{{ row.location }}</td>
          <td>{{ row.bio }}</td>
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

<style scoped lang="scss">
.applicant-list-wrapper {
  .table {
    border-radius: 0.675rem;
  }
}
</style>
