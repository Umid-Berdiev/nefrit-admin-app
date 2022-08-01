<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { fetchChronologies } from '/@src/utils/api/statement'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { StatementData } from '/@src/utils/interfaces'

const { t, locale } = useI18n()
const route = useRoute()
const currentId = (route.params?.id as string) ?? null
const selectedTab = ref(route.hash.slice(1) || 'details')
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statement_details'))
const statement = ref<StatementData>()
const tabs = ref([
  { label: t('Statement_details'), value: 'details', icon: 'lnil lnil-tap' },
  // { label: t('Payment'), value: 'payment', icon: 'fas fa-tree' },
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
const chronologyData = ref([])

onMounted(async () => {
  const res = await fetchChronologies(Number(currentId), locale.value)
  chronologyData.value = res
})

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Statement_details')),
})

</script>

<template>
  <div class="statement-detail-wrapper">
    <VTabs :selected="selectedTab" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'" class="columns mt-5">
          <div class="column is-6">
            <StatementForm />
          </div>
          <div class="column is-6">
            <ListWidgetSingle :title="$t('Chronology')" straight class="list-widget-v3">
              <ListWidgetIconTimeline :items="chronologyData" />
            </ListWidgetSingle>
          </div>
        </div>
        <!-- <div v-else-if="activeValue === 'payment'" class="mt-5">
          <PaymentStatusTable :is-contract-info-table-visible="true" />
        </div> -->
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
        </div>
      </template>
    </VTabs>
  </div>
</template>