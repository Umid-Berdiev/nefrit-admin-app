<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n';

import { useViewWrapper } from '/@src/stores/viewWrapper'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Dashboard'))


useHead({
  title: t('Dashboard') + ' - Nefrit',
})
</script>

<template>
  <div class="page-content-inner">
    <MainDashboard />
  </div>
</template>
