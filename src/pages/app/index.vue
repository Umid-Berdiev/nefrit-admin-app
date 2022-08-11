<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useUserSession } from '/@src/stores/userSession';
import MainDashboard from '/@src/components/pages/dashboards/MainDashboard.vue';
import AccountantDashboard from '/@src/components/pages/dashboards/AccountantDashboard.vue';
import OtherDashboard from '/@src/components/pages/dashboards/OtherDashboard.vue';

const { t } = useI18n()
const userSession = useUserSession()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Dashboard'))

const currentDashboard = ref('OtherDashboard')
const currentRoleId = computed(() => userSession.user?.role_id)
const dashboards: { [key: string]: any } = {
  MainDashboard,
  AccountantDashboard,
  OtherDashboard
}

watchEffect(
  async () => {
    console.log('role id: ', currentRoleId.value);

    switch (currentRoleId.value) {
      case 1:
      case 2:
      case 3: currentDashboard.value = 'MainDashboard'; break;
      case 4:
      case 5:
      case 6: currentDashboard.value = 'OtherDashboard'; break;
      case 7: currentDashboard.value = 'AccountantDashboard'; break;
      default: currentDashboard.value = 'OtherDashboard';
    }
  }
)

useHead({
  title: t('Dashboard') + ' - Nefrit',
})
</script>

<template>
  <div class="page-content-inner">
    <component :is="dashboards[currentDashboard]" />
  </div>
</template>
