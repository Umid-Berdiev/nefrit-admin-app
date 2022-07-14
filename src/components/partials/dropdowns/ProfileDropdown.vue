<script setup lang="ts">
import { ref } from 'vue'
import { useUserSession } from '/@src/stores/userSession';

const { user } = useUserSession()

function onLogout() {
  //
}
</script>

<template>
  <VDropdown title="Dropdown with icon" spaced right>
    <template #button="{ open, toggle }">
      <VButton class="is-trigger" rounded outlined light @click="toggle">
        <i class="fas fa-user fa-lg has-text-primary" aria-hidden="true"></i>
      </VButton>
    </template>

    <template #content>
      <a href="#" class="dropdown-item">
        {{ user.fullname || 'John Doe' }}
      </a>
      <RouterLink to="/app/profile/profile-edit" class="dropdown-item is-media">
        <div class="icon">
          <i class="iconify" data-icon="feather:user" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Go_to_profile') }}</span>
        </div>
      </RouterLink>
      <RouterLink to="/app/profile/profile-notifications" class="dropdown-item is-media">
        <div class="icon">
          <i class="iconify" data-icon="feather:bell" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Notifications') }}</span>
        </div>
      </RouterLink>
      <hr class="dropdown-divider" />
      <a href="javascript:;" class="dropdown-item is-media" @click="onLogout">
        <div class="icon">
          <i class="iconify" data-icon="feather:log-out" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Logout') }}</span>
        </div>
      </a>
      <!-- <ToolbarNotification /> -->

    </template>
  </VDropdown>
</template>
