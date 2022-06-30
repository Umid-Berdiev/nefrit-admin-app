<script setup lang="ts">
import { ref, watchPostEffect, watch } from 'vue'
import { useRoute } from 'vue-router'

import type { SidebarTheme } from '/@src/components/navigation/desktop/Sidebar.vue'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import StatementsSubsidebar from './sidebar-subsidebar/StatementsSubsidebar.vue';
import ApplicantsSubsidebar from './sidebar-subsidebar/ApplicantsSubsidebar.vue';
import DashboardsSubsidebar from './sidebar-subsidebar/DashboardsSubsidebar.vue';
import DashboardsMobileSubsidebar from './mobile-subsidebars/DashboardsMobileSubsidebar.vue';
import ApplicantsMobileSubsidebar from './mobile-subsidebars/ApplicantsMobileSubsidebar.vue';
import StatementsMobileSubsidebar from './mobile-subsidebars/StatementsMobileSubsidebar.vue';
import ConfirmActionModal from '../components/base/modal/ConfirmActionModal.vue';

const props = withDefaults(
  defineProps<{
    theme?: SidebarTheme
    defaultSidebar?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    defaultSidebar: 'dashboard',
    theme: 'default',
    openOnMounted: true,
  }
)

const viewWrapper = useViewWrapper()
const route = useRoute()
const isMobileSidebarOpen = ref(false)
const isDesktopSidebarOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSidebar)

function switchSidebar(id: string) {
  if (id === activeMobileSubsidebar.value) {
    isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value
  } else {
    isDesktopSidebarOpen.value = true
    activeMobileSubsidebar.value = id
  }
}

/**
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushed(isDesktopSidebarOpen.value ?? false)
})
watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false

    if (props.closeOnChange && isDesktopSidebarOpen.value) {
      isDesktopSidebarOpen.value = false
    }
  }
)
console.log('activeMobileSubsidebar: ', activeMobileSubsidebar.value);

</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar :is-open="isMobileSidebarOpen" @toggle="isMobileSidebarOpen = !isMobileSidebarOpen">
      <template #brand>
        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar :is-open="isMobileSidebarOpen" @toggle="isMobileSidebarOpen = !isMobileSidebarOpen">
      <template #links>
        <li>
          <RouterLink :to="{ name: 'app' }">
            <i aria-hidden="true" class="iconify" data-icon="feather:home"></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a href="#">
            <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
          </a>
        </li>
      </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <Transition name="slide-x">
      <DashboardsMobileSubsidebar v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'" />
      <ApplicantsMobileSubsidebar v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'applicant'" />
      <StatementsMobileSubsidebar v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'statement'" />
    </Transition>

    <Transition name="slide-x">
      <ApplicantsSubsidebar v-if="isDesktopSidebarOpen" @close="isDesktopSidebarOpen = false" />
      <!-- <DashboardsSubsidebar v-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'dashboard'"
        @close="isDesktopSidebarOpen = false" />
      <ApplicantsSubsidebar v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar.startsWith('applicant')"
        @close="isDesktopSidebarOpen = false" />
      <StatementsSubsidebar v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar.startsWith('statement')"
        @close="isDesktopSidebarOpen = false" /> -->
    </Transition>

    <LanguagesPanel />

    <VViewWrapper>
      <VPageContent class="is-relative">
        <div class="page-title has-text-centered">
          <!-- Sidebar Trigger -->
          <div class="vuero-hamburger nav-trigger push-resize" tabindex="0"
            @keydown.space.prevent="isDesktopSidebarOpen = !isDesktopSidebarOpen"
            @click="isDesktopSidebarOpen = !isDesktopSidebarOpen">
            <span class="menu-toggle has-chevron">
              <span :class="[isDesktopSidebarOpen && 'active']" class="icon-box-toggle">
                <span class="rotate">
                  <i aria-hidden="true" class="icon-line-top"></i>
                  <i aria-hidden="true" class="icon-line-center"></i>
                  <i aria-hidden="true" class="icon-line-bottom"></i>
                </span>
              </span>
            </span>
          </div>

          <div class="title-wrap">
            <h1 class="title is-4">{{ viewWrapper.pageTitle }}</h1>
          </div>

          <Toolbar class="desktop-toolbar" />
        </div>
        <div class="is-divider"></div>

        <slot></slot>
      </VPageContent>
    </VViewWrapper>
  </div>
  <ConfirmActionModal />
</template>
