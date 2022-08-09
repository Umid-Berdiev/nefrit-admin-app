<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { useViewWrapper } from '/@src/stores/viewWrapper'
import MainDashboard from '/@src/components/pages/dashboards/MainDashboard.vue';
import { useUserSession } from '/@src/stores/userSession';
import AccountantDashboard from '/@src/components/pages/dashboards/AccountantDashboard.vue';
import OtherDashboardVue from '/@src/components/pages/dashboards/OtherDashboard.vue';

const { t } = useI18n()
const { user } = useUserSession()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Dashboard'))

const dashboard = computed(() => {
  switch (user?.role_id) {
    case 1:
    case 2:
    case 3: return MainDashboard
    case 4:
    case 5:
    case 6: return OtherDashboardVue
    case 7: return AccountantDashboard
    default:
      break;
  }
})

useHead({
  title: t('Dashboard') + ' - Nefrit',
})
</script>

<template>
  <div class="page-content-inner">
    <component :is="dashboard"></component>
    <!-- <MainDashboard /> -->
  </div>
</template>
