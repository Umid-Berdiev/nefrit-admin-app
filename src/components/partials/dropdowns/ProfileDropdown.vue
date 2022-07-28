<script setup lang="ts">
import { useRouter } from 'vue-router';
import { logout } from '/@src/api';
import { useNotyf } from '/@src/composable/useNotyf';
import { useUserSession } from '/@src/stores/userSession';

const { user, token, logoutUser, setLoading } = useUserSession()
const notif = useNotyf()
const router = useRouter()

async function onLogout() {
  try {
    setLoading(true)
    await logoutUser()
    router.push('/auth/login')
  } catch (error: any) {
    notif.error(error.message)
  } finally {
    setLoading(false)
  }
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
      <h1 class="dropdown-item is-size-4">
        {{ user?.username?.toUpperCase() }}
      </h1>
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