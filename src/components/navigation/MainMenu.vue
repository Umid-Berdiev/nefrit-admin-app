<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMainStore } from '/@src/stores';

const route = useRoute()
const mainStore = useMainStore()

function openContractDownloadModal() {
  mainStore.$patch({ contractDownloadModalState: true })
  // if (mainStore.confirmState) {
  //   console.log('User deleted!');
  //   mainStore.$patch({ confirmState: false })
  // }
}
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
        :to="{ name: 'app-applicants' }">
        <span class="fa-li"><i class="fas fa-user-friends" aria-hidden="true"></i></span>
        {{ $t('Applicants') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/statement') }"
        :to="{ name: 'app-statements' }">
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
    <!-- <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/handbooks') }"
        :to="{ name: 'app-handbooks' }">
        <span class="fa-li"><i class="fas fa-database" aria-hidden="true"></i></span>
        {{ $t('Handbook') }}
      </RouterLink>
    </li> -->
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/departments') }"
        :to="{ name: 'app-departments' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li"><i class="fas fa-file" aria-hidden="true"></i></span>
        {{ $t('Departments') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/contracts') }"
        :to="{ name: 'app-contracts' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li"><i class="fas fa-file" aria-hidden="true"></i></span>
        {{ $t('Contracts') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6"
        :class="{ 'router-link-exact-active': route.path.startsWith('/app/contract_templates') }"
        :to="{ name: 'app-contract-templates' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li"><i class="fas fa-file" aria-hidden="true"></i></span>
        {{ $t('Contract_templates') }}
      </RouterLink>
    </li>
    <div class="is-divider" />
    <li>
      <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
      <span class="fa-li">
        <VButton color="primary" outlined class="is-size-6" @click="openContractDownloadModal">
          <i class="fas fa-download" aria-hidden="true"></i>
          {{ $t('Download_contract_template') }}
        </VButton>
      </span>
    </li>
  </ul>
</template>
