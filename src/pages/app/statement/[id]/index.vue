<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'
import VFlexPagination from '/@src/components/base/pagination/VFlexPagination.vue'
import { timeline } from '/@src/stores/timeline'
import UsersGridV1 from '/@src/components/pages/UsersGridV1.vue'
import StatementConclusionTable from '/@src/components/base/table/StatementConclusionTable.vue'
import PaymentStatusTable from '../../../../components/base/table/PaymentStatusTable.vue'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Statement_details'))

const statement = ref<StatementInterface>()
const isFormModalOpen = ref(false)
const data = [
  {
    id: 1,
    statement_date: '2022-06-23',
    statement_status: 'In process',
    in_stage: '2-stage',
    company: 'Grubspot',
  },
  {
    id: 2,
    statement_date: '2022-06-23',
    statement_status: 'In process',
    in_stage: '2-stage',
    company: 'Ferrario',
  },
  // and more data ...
]

const columns = {
  id: 'Id',
  statement_date: 'Statement_date',
  statement_status: 'Statement_status',
  in_stage: 'In_stage',
  company: 'Company',
  actions: {
    label: 'Actions',
    align: 'center'
  },
}

// here we setup our page meta with our statement data
useHead({
  title: computed(() => statement.value?.title ?? 'Loading statement...'),
})
</script>

<template>
  <div class="statement-detail-wrapper">
    <VTabs selected="details" :tabs="[
      { label: t('Statement_details'), value: 'details', icon: 'lnil lnil-tap' },
      { label: t('Payment'), value: 'payment', icon: 'fas fa-tree' },
      {
        label: t('Statement_conclusions'),
        value: 'conclusions',
        icon: 'lnil lnil-euro-down',
      },
      { label: t('ITK'), value: 'itk', icon: 'feather:activity' },
      { label: t('Chat'), value: 'chat', icon: 'fas fa-comments' },
    ]">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'details'" class="columns">
          <div class="column is-6">
            <StatementForm />
          </div>
          <div class="column is-6">
            <ListWidgetSingle :title="$t('Chronology')" straight class="list-widget-v3">
              <ListWidgetIconTimeline :items="timeline" />
            </ListWidgetSingle>
          </div>
        </div>
        <div v-else-if="activeValue === 'payment'">
          <PaymentStatusTable />
        </div>
        <div v-else-if="activeValue === 'conclusions'">
          <StatementConclusionTable />
        </div>
        <div v-else-if="activeValue === 'itk'">
          <UsersGridV1 />
        </div>
        <div v-else-if="activeValue === 'chat'">
          <MessagingV1 />
        </div>
      </template>
    </VTabs>
    <!-- <StatementFormModal v-model="isFormModalOpen" /> -->
  </div>
</template>

<style lang="scss" scoped>
.statement-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>
