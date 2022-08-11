<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { useViewWrapper } from '/@src/stores/viewWrapper';

const { t, locale } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Handbook_page'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Handbook_page')),
})

</script>

<template>
  <div>{{ $t('About_page') }}</div>
</template>
