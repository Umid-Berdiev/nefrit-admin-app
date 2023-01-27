<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import StatementDocumentCollapse from '/@src/components/base/accordion/StatementDocumentCollapse.vue'
import { useUserSession } from '/@src/stores/userSession'

const { userRoleID } = useUserSession()
const { t } = useI18n()
const route = useRoute()
const selectedTab = ref('details')
const tabs = ref([
  {
    label: t('Statement_details'),
    value: 'details',
    icon: 'lnil lnil-tap',
    included: [1, 2, 3].includes(userRoleID),
  },
  {
    label: t('Statement_docs'),
    value: 'docs',
    icon: 'lnil lnil-files',
    included: [1, 2, 3, 4, 5, 6].includes(userRoleID),
  },
  {
    label: t('Drug_instructions'),
    value: 'drug-instructions',
    icon: 'feather:file-text',
    included: [1, 2, 3, 4, 5, 6].includes(userRoleID),
  },
  {
    label: t('Statement_conclusions'),
    value: 'conclusions',
    icon: 'feather:git-branch',
    included: [1, 2, 3, 4, 5, 6].includes(userRoleID),
  },
  {
    label: t('Statement_notices'),
    value: 'notices',
    icon: 'feather:git-merge',
    included: [1, 2, 3, 4, 5, 6, 7].includes(userRoleID),
  },
  {
    label: t('ITK'),
    value: 'itk',
    icon: 'feather:activity',
    included: [1, 2, 5].includes(userRoleID),
  },
  {
    label: t('Chat'),
    value: 'chat',
    icon: 'fas fa-comments',
    included: [1, 2, 3].includes(userRoleID),
  },
])

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statement_card'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Statement_card')),
})

onMounted(() => {
  if (route.hash) {
    selectedTab.value = route.hash.slice(1)
  }
})
</script>

<template>
  <div class="statement-detail-wrapper">
    <VTabs v-model:selected="selectedTab" :tabs="tabs.filter((tab) => tab.included)">
      <template #tab="{ activeValue }">
        <div v-if="activeValue == 'details' && [1, 2, 3, 7].includes(userRoleID)">
          <StatementForm />
        </div>
        <div
          v-if="activeValue == 'docs' && [1, 2, 3, 4, 5, 6].includes(userRoleID)"
          class="mt-5"
        >
          <StatementDocumentCollapse />
        </div>
        <div
          v-if="
            activeValue == 'drug-instructions' && [1, 2, 3, 4, 5, 6].includes(userRoleID)
          "
          class="mt-5"
        >
          <StatementDrugInstructionBlock />
        </div>
        <div
          v-if="activeValue == 'conclusions' && [1, 2, 3, 4, 5, 6].includes(userRoleID)"
          class="mt-5"
        >
          <StatementConclusionTable />
        </div>
        <div v-if="activeValue == 'notices'" class="mt-5">
          <StatementNoticeTable />
        </div>
        <div v-if="activeValue == 'itk' && [1, 2, 5].includes(userRoleID)" class="mt-5">
          <UsersGridV1 />
        </div>
        <div v-if="activeValue == 'chat' && [1, 2, 3].includes(userRoleID)" class="pt-5">
          <MessagingV1 />
        </div>
      </template>
    </VTabs>
  </div>
</template>
