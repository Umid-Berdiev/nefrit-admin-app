<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { fetchChronologies, fetchStatementDocuments } from '/@src/utils/api/statement'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { StatementDocumentData, StatementChronologyData } from '/@src/utils/interfaces.js'
import StatementDocumentCollapse from '/@src/components/base/accordion/StatementDocumentCollapse.vue'
import PaymentStatusTable from '/@src/components/base/table/PaymentStatusTable.vue'

const { t, locale } = useI18n()
const route = useRoute()
const currentId = (route.params?.id as string) ?? null
const selectedTab = ref(route.hash.slice(1) || 'details')
const tabs = ref([
  { label: t('Contract_details'), value: 'details', icon: 'lnil lnil-tap' },
  { label: t('Payment'), value: 'payment', icon: 'fas fa-tree' },
  // {
  //   label: t('Statement_docs'),
  //   value: 'docs',
  //   icon: 'lnil lnil-files',
  // },
  // {
  //   label: t('Statement_conclusions'),
  //   value: 'conclusions',
  //   icon: 'lnil lnil-euro-down',
  // },
  // {
  //   label: t('Statement_notices'),
  //   value: 'notices',
  //   icon: 'lnil lnil-euro-down',
  // },
  // { label: t('ITK'), value: 'itk', icon: 'feather:activity' },
  // { label: t('Chat'), value: 'chat', icon: 'fas fa-comments' },
]);
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
  const res = await fetchChronologies(Number(currentId), locale.value)
  const res2 = await fetchStatementDocuments(Number(currentId), locale.value)
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

        <!-- <div v-else-if="activeValue === 'docs'" class="mt-5">
          <StatementDocumentCollapse :items="docsData" :open-items="docIndexList" with-chevron />
        </div>
        <div v-else-if="activeValue === 'conclusions' || route.hash == '#conclusions'" class="mt-5">
          <StatementConclusionTable />
        </div>
        <div v-else-if="activeValue === 'notices' || route.hash == '#notices'" class="mt-5">
          <StatementNoticeTable />
        </div>
        <div v-else-if="activeValue === 'itk'" class="mt-5">
          <UsersGridV1 />
        </div>
        <div v-else-if="activeValue === 'chat'" class="mt-5">
          <MessagingV1 />
        </div> -->

      </template>
    </VTabs>
  </div>
</template>
