<script setup lang="ts">
import { useRoute } from 'vue-router';

const emit = defineEmits(['close'])

const route = useRoute()
// console.log({ route: route.path });

</script>

<template>
  <div class="sidebar-panel is-generic px-3">
    <div class="subpanel-header mb-2">
      <RouterLink :to="{ name: 'index' }">
        <div class="sidebar-brand is-flex is-align-items-start">
          <AnimatedLogo width="36px" class="mr-3" />
          <span class="is-size-3 has-text-primary">
            {{ $t('Nefrit') }}
          </span>
        </div>
      </RouterLink>
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
          <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/applicant') }"
            :to="{ name: 'app-applicant' }">
            <i aria-hidden="true" class="lnil lnil-users mr-2"></i>
            {{ $t('Applicants') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/statement') }"
            :to="{ name: 'app-statement' }">
            <i aria-hidden="true" class="lnil lnil-notepad mr-2"></i>
            {{ $t('Statements') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/users') }"
            :to="{ name: 'app-users' }">
            <i aria-hidden="true" class="lnil lnil-users mr-2"></i>
            {{ $t('Users') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/reports') }"
            :to="{ name: 'app-reports' }">
            <i aria-hidden="true" class="lnil lnil-sales-report mr-2"></i>
            {{ $t('Reports') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/handbooks') }"
            :to="{ name: 'app-handbooks' }">
            <i aria-hidden="true" class="lnil lnil-database mr-2"></i>
            {{ $t('Handbooks') }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
