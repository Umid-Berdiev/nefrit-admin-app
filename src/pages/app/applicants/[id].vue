<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const applicant = ref<ApplicantInterface>()
const tabs = reactive<TabHeader[]>([
  { label: t('Applicant_details'), value: 'details', icon: 'feather:info' },
  {
    label: t('Statements'),
    value: 'statements',
    icon: 'feather:file-text',
  },
  // { label: t('Payments'), value: 'payments', icon: 'fas fa-dollar' },
  // { label: t('Chat'), value: 'chat', icon: 'fas fa-comments' },
])
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Applicant_Info'))

useHead({
  title: computed(() => applicant.value?.title ?? 'Loading applicant...'),
})
</script>

<template>
  <div class="applicant-detail-wrapper">
    <VTabs selected="details" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'" class="mt-5">
          <ApplicantForm />
        </div>
        <div v-else-if="activeValue === 'statements'" class="mt-5">
          <ApplicantStatementsTable />
        </div>
      </template>
    </VTabs>
  </div>
</template>
