<script setup lang="ts">
import { useRoute } from 'vue-router'
import MainMenu from '/@src/components/navigation/MainMenu.vue'
import AppLogo from '/@src/components/svg/AppLogo.vue'

const emit = defineEmits(['close'])

const route = useRoute()
// console.log({ route: route.path });
</script>

<template>
  <div class="sidebar-panel is-generic px-3">
    <div class="subpanel-header mb-2">
      <RouterLink :to="{ name: 'app' }">
        <div class="sidebar-brand is-flex is-align-items-start">
          <AppLogo width="36px" class="mr-3" />
          <span class="is-size-3 has-text-primary"> Nefrit </span>
        </div>
      </RouterLink>
      <div
        class="panel-close"
        tabindex="0"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <!-- <p class="ml-5">Menu</p> -->
    <div class="is-divider"></div>
    <div class="inner" data-simplebar>
      <MainMenu />
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
