<script setup lang="ts">
import { ref, watchPostEffect, watch } from 'vue'
import { useRoute } from 'vue-router'

import type { SidebarTheme } from '/@src/components/navigation/desktop/Sidebar.vue'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import MainSidebar from './sidebars/MainSidebar.vue';
import MobileMainSidebar from './mobile-sidebars/MobileMainSidebar.vue';
import ActivityPanel from '../components/partials/panels/ActivityPanel.vue';
import LanguagesPanel from '../components/partials/panels/LanguagesPanel.vue';
import VViewWrapper from '../components/base/layouts/VViewWrapper.vue';
import Toolbar from '../components/partials/toolbars/Toolbar.vue';
import ContractDownloadModal from '../components/base/modal/ContractDownloadModal.vue';

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
// console.log('activeMobileSubsidebar: ', activeMobileSubsidebar.value);

</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar :is-open="isMobileSidebarOpen" @toggle="isMobileSidebarOpen = !isMobileSidebarOpen">
      <!-- <template #brand>
        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template> -->
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar :is-open="isMobileSidebarOpen" @toggle="isMobileSidebarOpen = !isMobileSidebarOpen">
      <!-- <template #links>
        <li>
          <RouterLink :to="{ name: 'app' }">
            <i aria-hidden="true" class="iconify" data-icon="feather:home"></i>
          </RouterLink>
        </li>
      </template> -->

      <!-- <template #bottom-links>
        <li>
          <a href="#">
            <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
          </a>
        </li>
      </template> -->
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <Transition name="slide-x">
      <MobileMainSidebar v-if="isMobileSidebarOpen" />
    </Transition>

    <Transition name="slide-x">
      <MainSidebar v-if="isDesktopSidebarOpen" @close="isDesktopSidebarOpen = false" />
    </Transition>

    <LanguagesPanel />
    <ActivityPanel />

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

    <ContractDownloadModal />
  </div>
</template>
