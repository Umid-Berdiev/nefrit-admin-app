<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n';
import { useViewWrapper } from '/@src/stores/viewWrapper'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Edit_profile_pwd'))

useHead({
  title: `${t('Edit_profile_pwd')} - Nefrit`,
})
</script>

<template>
  <UpdateProfilePassword />
</template>
