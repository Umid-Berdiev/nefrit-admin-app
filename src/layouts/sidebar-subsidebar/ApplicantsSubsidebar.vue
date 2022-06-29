<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic px-3">
    <div class="subpanel-header mb-2">
      <div class="sidebar-brand">
        <RouterLink :to="{ name: 'index' }">
          <AnimatedLogo width="36px" class="mr-3" />
          <span class="is-size-3 my-auto">
            {{ $t('Nefrit') }}
          </span>
        </RouterLink>
      </div>
      <div class="panel-close" tabindex="0" @keydown.space.prevent="emit('close')" @click="emit('close')">
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <p class="ml-5">Menu</p>
    <div class="is-divider my-0"></div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink class="is-size-6" :to="{ name: 'app' }">
            <i aria-hidden="true" class="lnil lnil-home mr-2"></i>
            {{ $t('Dashboard') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink class="is-size-6" :to="{ name: 'app-applicant' }">
            <i aria-hidden="true" class="lnil lnil-users mr-2"></i>
            {{ $t('Applicants') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink class="is-size-6" :to="{ name: 'app-statement' }">
            <i aria-hidden="true" class="lnil lnil-users mr-2"></i>
            {{ $t('Statements') }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
