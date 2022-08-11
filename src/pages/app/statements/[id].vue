<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import StatementDocumentCollapse from '/@src/components/base/accordion/StatementDocumentCollapse.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const selectedTab = computed({
  get: () => route.hash.slice(1) || 'details',
  set: (val) => {
    router.push({ hash: `#${val}` })
  }
})
const tabs = ref([
  { label: t('Statement_details'), value: 'details', icon: 'lnil lnil-tap' },
  // { label: t('Payment'), value: 'payment', icon: 'fas fa-tree' },
  {
    label: t('Statement_docs'),
    value: 'docs',
    icon: 'lnil lnil-files',
  },
  {
    label: t('Statement_conclusions'),
    value: 'conclusions',
    icon: 'lnil lnil-euro-down',
  },
  {
    label: t('Statement_notices'),
    value: 'notices',
    icon: 'lnil lnil-euro-down',
  },
  { label: t('ITK'), value: 'itk', icon: 'feather:activity' },
  { label: t('Chat'), value: 'chat', icon: 'fas fa-comments' },
]);

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statement_card'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Statement_card')),
})

</script>

<template>
  <div class="statement-detail-wrapper">
    <VTabs v-model:selected="selectedTab" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue == 'details'">
          <StatementForm />
        </div>
        <div v-if="activeValue == 'docs'" class="mt-5">
          <StatementDocumentCollapse />
        </div>
        <div v-if="activeValue == 'conclusions'" class="mt-5">
          <StatementConclusionTable />
        </div>
        <div v-if="activeValue == 'notices'" class="mt-5">
          <StatementNoticeTable />
        </div>
        <div v-if="activeValue == 'itk'" class="mt-5">
          <UsersGridV1 />
        </div>
        <div v-if="activeValue == 'chat'" class="mt-5">
          <MessagingV1 />
        </div>
      </template>
    </VTabs>
  </div>
</template>
