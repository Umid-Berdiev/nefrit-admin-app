<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMainStore } from '/@src/stores';
import { useUserSession } from '/@src/stores/userSession';

const route = useRoute()
const mainStore = useMainStore()
const userSession = useUserSession()
const roleCan = ref(false)
const currentRoleId = computed(() => userSession.user?.role_id)

function openContractDownloadModal() {
  mainStore.$patch({ contractDownloadModalState: true })
}

</script>

<template>
  <ul class="fa-ul">
    <li>
      <RouterLink class="is-size-6" :to="{ name: 'app' }">
        <span class="fa-li">
          <i class="fas fa-home" aria-hidden="true"></i>
        </span>
        {{ $t('Dashboard') }}
      </RouterLink>
    </li>
    <li v-if="[1, 2, 3].includes(currentRoleId)">
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/applicant') }"
        :to="{ name: 'app-applicants' }">
        <span class="fa-li">
          <i class="fas fa-user-friends" aria-hidden="true"></i>
        </span>
        {{ $t('Applicants') }}
      </RouterLink>
    </li>
    <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/statement') }"
        :to="{ name: 'app-statements' }">
        <span class="fa-li">
          <i class="fas fa-file-alt" aria-hidden="true"></i>
        </span>
        {{ $t('Statements') }}
      </RouterLink>
    </li>
    <li v-if="[1, 2].includes(currentRoleId)">
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/employees') }"
        :to="{ name: 'app-employees' }">
        <span class="fa-li">
          <i class="fas fa-users" aria-hidden="true"></i>
        </span>
        {{ $t('Employees') }}
      </RouterLink>
    </li>
    <li v-if="[1, 2].includes(currentRoleId)">
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/roles') }"
        :to="{ name: 'app-roles' }">
        <span class="fa-li">
          <i class="fas fa-user-shield" aria-hidden="true"></i>
        </span>
        {{ $t('Roles') }}
      </RouterLink>
    </li>
    <!-- <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/reports') }"
        :to="{ name: 'app-reports' }">
        <span class="fa-li">
          <i class="fas fa-chart-line" aria-hidden="true"></i>
        </span>
        {{ $t('Reports') }}
      </RouterLink>
    </li> -->
    <!-- <li>
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/handbooks') }"
        :to="{ name: 'app-handbooks' }">
        <span class="fa-li">
          <i class="fas fa-database" aria-hidden="true"></i>
          </span>
        {{ $t('Handbook') }}
      </RouterLink>
    </li> -->
    <li v-if="[1].includes(currentRoleId)">
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/departments') }"
        :to="{ name: 'app-departments' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li">
          <i class="lnir lnir-grid-alt" aria-hidden="true"></i>
        </span>
        {{ $t('Departments') }}
      </RouterLink>
    </li>
    <li v-if="[1, 2, 3, 7].includes(currentRoleId)">
      <RouterLink class="is-size-6" :class="{ 'router-link-exact-active': route.path.startsWith('/app/contracts') }"
        :to="{ name: 'app-contracts' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li">
          <i class="lnir lnir-revenue" aria-hidden="true"></i>
        </span>
        {{ $t('Contracts') }}
      </RouterLink>
    </li>
    <li v-if="[1, 2, 7].includes(currentRoleId)">
      <RouterLink class="is-size-6"
        :class="{ 'router-link-exact-active': route.path.startsWith('/app/contract_templates') }"
        :to="{ name: 'app-contract-templates' }">
        <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
        <span class="fa-li">
          <i class="lnil lnil-euro-down" aria-hidden="true"></i>
        </span>
        {{ $t('Contract_templates') }}
      </RouterLink>
    </li>
    <VCollapseLinks v-if="[1, 2, 3, 5, 7].includes(currentRoleId)">
      <template #header>
        <!-- <span class="fa-li">
          <i class="fas fa-chart-line" aria-hidden="true"></i>
        </span> -->
        <span class="is-size-6">
          {{ $t('Reports') }}
        </span>
        <VueIconify icon="feather:chevron-right" />
      </template>

      <RouterLink v-if="[1, 2, 3, 5, 7].includes(currentRoleId)" :to="{ name: 'app-reports-payments' }"
        class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Payments') }}
      </RouterLink>
      <RouterLink v-if="[1, 2, 3, 5].includes(currentRoleId)" :to="{ name: 'app-reports-applicants' }"
        class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Contacts') }}
      </RouterLink>
      <RouterLink v-if="[1, 2, 3, 5].includes(currentRoleId)" :to="{ name: 'app-reports-statements' }"
        class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('News') }}
      </RouterLink>
      <RouterLink v-if="[1, 2, 3, 5].includes(currentRoleId)" :to="{ name: 'app-reports-certificates' }"
        class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Faq') }}
      </RouterLink>
    </VCollapseLinks>
    <VCollapseLinks v-if="[1, 2].includes(currentRoleId)">
      <template #header>
        <!-- <span class="fa-li">
          <i class="fas fa-database" aria-hidden="true"></i>
          </span> -->
        <span class="is-size-6">
          {{ $t('Handbook') }}
        </span>
        <VueIconify icon="feather:chevron-right" />
      </template>

      <RouterLink :to="{ name: 'app-handbooks-about' }" class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('About') }}
      </RouterLink>
      <RouterLink :to="{ name: 'app-handbooks-contacts' }" class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Contacts') }}
      </RouterLink>
      <RouterLink :to="{ name: 'app-handbooks-news' }" class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('News') }}
      </RouterLink>
      <RouterLink :to="{ name: 'app-handbooks-faq' }" class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Faq') }}
      </RouterLink>
      <RouterLink :to="{ name: 'app-handbooks-regulation' }" class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Regulation') }}
      </RouterLink>
      <RouterLink :to="{ name: 'app-handbooks-doc-categories' }" class="is-submenu is-size-6">
        <VueIconify icon="feather:circle" />
        {{ $t('Doc_categories') }}
      </RouterLink>
    </VCollapseLinks>
    <div class="is-divider" />
    <li v-if="[1, 2, 7].includes(currentRoleId)">
      <!-- <i aria-hidden="true" class="lnil lnil-database"></i> -->
      <span class="fa-li ml-3">
        <VButton color="primary" outlined class="is-size-6" @click="openContractDownloadModal">
          <i class="fas fa-download" aria-hidden="true"></i>
          {{ $t('Download_contract_template') }}
        </VButton>
      </span>
    </li>
  </ul>
</template>

<style lang="scss">
.collapse-links a.parent-link {
  color: var(--dark-text) !important;
}
</style>
