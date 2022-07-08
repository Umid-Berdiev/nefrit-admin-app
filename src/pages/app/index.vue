<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n';

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Main Dashboard')

const { t } = useI18n()

useHead({
  title: t('Dashboard') + ' - Nefrit',
})
</script>

<template>
  <div class="page-content-inner">
    <CompanyDashboard />
  </div>
</template>
