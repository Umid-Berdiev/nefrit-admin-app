<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('User_details'))

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''

// here we setup our page meta with our role data
useHead({
  title: computed(() => t('Role_details')),
})
</script>

<template>
  <div class="role-detail-wrapper">
    <!--  -->
  </div>
</template>

<style lang="scss" scoped>
.role-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>
