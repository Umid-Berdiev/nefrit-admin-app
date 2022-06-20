<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedRowsId = ref<string[]>([])
const filterForm = ref({})
const displayFilterForm = ref(false)

// this is our data
const datatableV3 = [
  [
    '/images/icons/files/pdf.svg',
    'Company UX Guide',
    '4.7 mb',
    '1.5.2',
    '/images/avatars/svg/vuero-1.svg',
    'Erik K.',
    '2 weeks ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/sheet.svg',
    'Tech Summit Expenses',
    '34 kb',
    '1.1.3',
    '/demo/avatars/7.jpg',
    'Alice C.',
    '3 days ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/doc-2.svg',
    'Project Outline',
    '77 kb',
    '1.0.0',
    '/demo/avatars/18.jpg',
    'Esteban C.',
    '5 days ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/ppt.svg',
    'UX Presentation',
    '2.3 mb',
    '1.0.0',
    '/demo/avatars/13.jpg',
    'Tara S.',
    '2 weeks ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/ai.svg',
    'Website Homepage Redesign',
    '4.8 mb',
    '1.0.0',
    '/demo/avatars/5.jpg',
    'Mary L.',
    '2 weeks ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/doc-2.svg',
    'UX Ramp Up for Interns',
    '1.8 mb',
    '1.2.0',
    '/images/avatars/svg/vuero-1.svg',
    'Erik K.',
    '2 months ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/pdf.svg',
    '2020 Projects Digest',
    '8.9 mb',
    '1.3.4',
    '/demo/avatars/27.jpg',
    'Carmen E.',
    '3 weeks ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/doc-2.svg',
    'Financial Report - 2020',
    '1.2 mb',
    '1.0.4',
    '/demo/avatars/10.jpg',
    'Henry G.',
    '5 days ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/doc-2.svg',
    '2020 Supplier Expenses',
    '250 kb',
    '1.0.0',
    '/demo/avatars/38.jpg',
    'Christie D.',
    '6 days ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/ai.svg',
    'Website About Page Redesign',
    '3.9 mb',
    '1.2.1',
    '/demo/avatars/5.jpg',
    'Mary L.',
    '4 days ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/ai.svg',
    'Website Pricing Page Redesign',
    '2.6 mb',
    '1.1.0',
    '/demo/avatars/5.jpg',
    'Mary L.',
    '3 days ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/doc-2.svg',
    'Financial Report - 2019',
    '1.1 mb',
    '1.3.2',
    '/demo/avatars/10.jpg',
    'Henry G.',
    '1 year ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/doc-2.svg',
    '2019 Supplier Expenses',
    '34 kb',
    '1.2.1',
    '/demo/avatars/38.jpg',
    'Christie D.',
    '1 year ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/ai.svg',
    'Website Contact Page Redesign',
    '5.8 mb',
    '1.4.1',
    '/demo/avatars/5.jpg',
    'Mary L.',
    '1 week ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/pdf.svg',
    'Company Brand Book',
    '5.3 mb',
    '1.6.3',
    '/images/avatars/svg/vuero-1.svg',
    'Erik K.',
    '3 months ago',
    '+1 234 567 89',
    'Yes',
  ],
  [
    '/images/icons/files/pdf.svg',
    '2019 Projects Digest',
    '4.7 mb',
    '1.2.1',
    '/demo/avatars/27.jpg',
    'Carmen E.',
    '1 year ago',
    '+1 234 567 89',
    'Yes',
  ],
]

// const isAllSelected = computed(() => datatableV3.length === selectedRowsId.value.length)
const isAllSelected = computed({
  get() {
    return datatableV3.length === selectedRowsId.value.length
  },
  set(val) {
    if (!val) {
      selectedRowsId.value = []
    } else {
      selectedRowsId.value = datatableV3.map((row) => row[5])
    }
  },
})

// this is the columns configuration
const columns = {
  select: {
    label: '',
    cellClass: 'is-flex-grow-0',
  },
  company: {
    label: 'Company',
    grow: true,
  },
  type: 'Type',
  industry: 'Industry',
  status: 'Status',
  contacts: {
    label: 'Contacts',
    align: 'end',
  },
}

// the select all checkbox click handler
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = datatableV3.map((row) => row[5])
  }
}

function clickOnCheckbox(event: any) {
  const val = event.target.value
  if (selectedRowsId.value.includes(val)) {
    selectedRowsId.value = selectedRowsId.value.filter((i) => i !== val)
  } else {
    selectedRowsId.value = [...selectedRowsId.value, val]
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
          <th scope="col" data-sortable="false">
            <VField>
              <VControl>
                <VCheckbox v-model="isAllSelected" color="primary" circle outlined />
              </VControl>
            </VField>
          </th>
          <th scope="col">{{ $t('User') }}</th>
          <th scope="col">{{ $t('Status') }}</th>
          <th scope="col">{{ $t('BossName') }}</th>
          <th scope="col">{{ $t('Inn') }}</th>
          <th scope="col">{{ $t('Name') }}</th>
          <th scope="col">{{ $t('Phone') }}</th>
          <th scope="col">{{ $t('is_national') }}</th>
          <th scope="col" class="text-center has-text-centered" data-sortable="false">
            {{ $t('Actions') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in datatableV3" :key="index">
          <td>
            <div class="field">
              <input :id="'checked' + (index + 1)" v-model="selectedRowsId" class="is-checkradio is-circle"
                type="checkbox" :value="row[5]" />
              <label :for="'checked' + (index + 1)"></label>
            </div>
          </td>
          <td>
            <img class="file-icon" :src="row[0]" alt="" />
          </td>
          <td>
            <span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">{{
                row[1]
            }}</span>
          </td>
          <td>
            <span class="light-text">{{ row[2] }}</span>
          </td>
          <td>
            <span class="light-text">{{ row[3] }}</span>
          </td>
          <td>
            <div class="flex-media">
              <VAvatar :picture="row[4]" size="small" />

              <div class="meta">
                <span>{{ row[5] }}</span>
                <span>{{ row[6] }}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="light-text">{{ row[7] }}</span>
          </td>
          <td>
            <span class="light-text">{{ row[8] }}</span>
          </td>
          <td>
            <VIconButton class="mr-2" outlined circle color="info" icon="feather:eye">
              View
            </VIconButton>
            <VIconButton class="mr-2" outlined circle color="danger" icon="feather:trash">
              Remove
            </VIconButton>
            <VIconButton class="mr-2" outlined circle color="primary" icon="feather:edit-2">
              Edit
            </VIconButton>
            <FlexTableDropdown />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
