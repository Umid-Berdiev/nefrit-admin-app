<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotyf } from '/@src/composable/useNotyf'
import { useUserSession } from '/@src/stores/userSession'
import VAvatar from '../../base/avatar/VAvatar.vue'

const userSession = useUserSession()
const notif = useNotyf()
const router = useRouter()
const openConfirmModal = ref(false)
const currentUser = computed(() => userSession.user)

function onLogout() {
  console.log('in onLogout func')

  openConfirmModal.value = true
}

async function confirmAction() {
  try {
    // setLoading(true)
    await userSession.logoutUser()
    router.push('/')
  } catch (error: any) {
    notif.error(error.message)
  } finally {
    // setLoading(false)
  }
}
</script>

<template>
  <VDropdown title="Dropdown with icon" spaced right>
    <template #button="{ open, toggle }">
      <VAvatar
        class="user_avatar is-trigger"
        :picture="currentUser?.avatar"
        @click="toggle"
      />
    </template>

    <template #content>
      <h1 class="is-size-5 mt-3 mb-5">
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
      <!-- <RouterLink to="/app/profile/profile-notifications" class="dropdown-item is-media">
        <div class="icon">
          <i class="iconify" data-icon="feather:bell" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Notifications') }}</span>
        </div>
      </RouterLink> -->
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
  <VModal
    :open="openConfirmModal"
    actions="center"
    :title="$t('Confirm_action')"
    :noclose="true"
    @close="openConfirmModal = false"
    :cancel-label="$t('No')"
  >
    <template #content>
      <VPlaceholderSection :title="$t('Are_you_sure')" />
    </template>
    <template #action>
      <VButton
        type="button"
        class="is-justify-content-center"
        color="primary"
        outlined
        @click="confirmAction"
      >
        {{ $t('Yes') }}
      </VButton>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.is-dark .dropdown.is-spaced.is-active .is-trigger,
.is-dark .dropdown.is-spaced:hover .is-trigger {
  background: none !important;
}
</style>
