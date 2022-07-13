<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <ul class="fa-ul">
    <li>
      <RouterLink class="is-size-6" :to="{ name: 'app' }">
        <span class="fa-li"><i class="fas fa-home" aria-hidden="true"></i></span>
        {{ $t('Dashboard') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/applicant') }"
        :to="{ name: 'app-applicant' }">
        <span class="fa-li"><i class="fas fa-user-friends" aria-hidden="true"></i></span>
        {{ $t('Applicants') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/statement') }"
        :to="{ name: 'app-statement' }">
        <span class="fa-li"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
        {{ $t('Statements') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/users') }"
        :to="{ name: 'app-users' }">
        <span class="fa-li"><i class="fas fa-users" aria-hidden="true"></i></span>
        {{ $t('Users') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/roles') }"
        :to="{ name: 'app-roles' }">
        <span class="fa-li"><i class="fas fa-user-shield" aria-hidden="true"></i></span>
        {{ $t('Roles') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/reports') }"
        :to="{ name: 'app-reports' }">
        <!-- <i aria-hidden="true" class="lnil lnil-sales-report"></i> -->
        <!-- <i class="lnir lnir-analytics-alt-1" aria-hidden="true"></i> -->
        <span class="fa-li"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
        {{ $t('Reports') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/handbooks') }"
        :to="{ name: 'app-handbooks' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li"><i class="fas fa-database" aria-hidden="true"></i></span>
        {{ $t('Handbook') }}
      </RouterLink>
    </li>
  </ul>
</template>
