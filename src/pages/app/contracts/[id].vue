<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { fetchChronologies, fetchStatementDocuments } from '/@src/utils/api/statement'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { StatementDocumentData, StatementChronologyData } from '/@src/utils/interfaces'

const { t, locale } = useI18n()
const route = useRoute()
const currentId = (route.params?.id as string) ?? null
const selectedTab = ref(route.hash.slice(1) || 'details')
const tabs = ref([
  { label: t('Contract_details'), value: 'details', icon: 'lnil lnil-tap' },
  { label: t('Payment'), value: 'payment', icon: 'fas fa-tree' },
])
const chronologyData = ref<StatementChronologyData[]>()
const docsData = ref<StatementDocumentData[]>()
const docIndexList = ref<number[]>()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Contract_card'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Contract_card')),
})

onMounted(async () => {
  const res = await fetchChronologies(Number(currentId))
  const res2 = await fetchStatementDocuments(Number(currentId))
  chronologyData.value = res
  docsData.value = res2
  docIndexList.value = res2.map((_, index) => index)
})
</script>

<template>
  <div class="statement-detail-wrapper">
    <VTabs :selected="selectedTab" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'" class="columns mt-5">
          <ContractForm />
        </div>
        <div v-if="activeValue === 'payment'" class="mt-5">
          <PaymentStatusTable />
        </div>
      </template>
    </VTabs>
  </div>
</template>
