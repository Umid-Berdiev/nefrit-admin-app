<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNotyf } from '/@src/composable/useNotyf';
import { useUserSession } from '/@src/stores/userSession';

const { user, logoutUser, setLoading } = useUserSession()
const notif = useNotyf()
const router = useRouter()
const openConfirmModal = ref(false)
const currentUser = computed(() => user)
function onLogout() {
  console.log('in onLogout func');

  openConfirmModal.value = true
}

async function confirmAction() {
  try {
    setLoading(true)
    await logoutUser()
    router.push('/')
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
        {{ currentUser?.username?.toUpperCase() }}
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
  <VModal :open="openConfirmModal" actions="center" :title="$t('Confirm_action')" :noclose="true"
    @close="openConfirmModal = false" :cancel-label="$t('No')">
    <template #content>
      <VPlaceholderSection :title="$t('Are_you_sure')" />
    </template>
    <template #action>
      <VButton type="button" class="is-justify-content-center" color="primary" outlined @click="confirmAction">
        {{ $t('Yes') }}
      </VButton>
    </template>
  </VModal>
</template>
