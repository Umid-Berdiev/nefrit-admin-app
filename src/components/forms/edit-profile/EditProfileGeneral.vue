<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useNotyf } from '/@src/composable/useNotyf'
import { useUserSession } from '/@src/stores/userSession'
import { UserData } from '/@src/utils/interfaces'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const { t, locale } = useI18n()
const { user, updateProfile } = useUserSession()
const userData: UserData = reactive({
  avatar: '',
  email: '',
  firstname: '',
  lastname: '',
  username: ''
})
const avatarFile = ref<File>()
const isUploading = ref(false)
const isLoading = ref(false)
const errors = reactive({
  avatar: [],
  email: [],
  firstname: [],
  lastname: [],
  username: []
})
const userAvatar = computed(() => userData.avatar || "/images/avatars/svg/vuero-1.svg")
const notyf = useNotyf()
const { y } = useWindowScroll()

onMounted(() => {
  Object.assign(userData, user)
})

const isScrolling = computed(() => {
  return y.value > 30
})

async function onSave() {
  try {
    clearErrors()

    isLoading.value = true
    const formData = new FormData()
    formData.append('avatar', avatarFile.value || '')
    formData.append('username', userData.username)
    formData.append('email', userData.email)
    formData.append('firstname', userData.firstname)
    formData.append('lastname', userData.lastname)

    await updateProfile(formData)
    notyf.success(t('Updated_successfully'))
  } catch (error: any) {
    notyf.error(t('Error_while_updating_data'))
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

const onAddFile = (event: Event) => {
  if (errors.avatar?.length) errors.avatar = []
  avatarFile.value = event.target.files[0]
}

const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }
  avatarFile.value = undefined
  userData.avatar = ''
  // console.log('file removed', file)
}

function clearErrors() {
  Object.assign(errors, {
    avatar: [],
    email: [],
    firstname: [],
    lastname: [],
    username: []
  })
}

</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>{{ $t('Personal_Info') }}</h3>
          <!-- <h3>{{ $t('General_Info') }}</h3>
          <p>{{ $t('Edit_general_info') }}</p> -->
        </div>
        <div class="right">
          <div class="buttons">
            <VButton :to="{ name: 'app' }" icon="lnir lnir-arrow-left rem-100" light dark-outlined>
              {{ $t('Go_Back') }}
            </VButton>
            <VButton type="submit" color="primary" raised :loading="isLoading" tabindex="0" form="profile-update-form">
              {{ $t('Save_changes') }}
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <form id="profile-update-form" class="form-body" @submit.prevent="onSave">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>{{ $t('Profile_Picture') }}</h4>
          <p>{{ $t('Update_profile_picture') }}</p>
        </div>

        <VAvatar size="xl" class="profile-v-avatar">
          <template #avatar>
            <img v-if="!isUploading" class="avatar" :src="userAvatar" alt=""
              @error.once="(event) => onceImageErrored(event, '150x150')" />
            <VFilePond v-else class="profile-filepond" name="profile_filepond" :chunk-retry-delays="[500, 1000, 3000]"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']" :image-preview-height="140"
              :image-resize-target-width="140" :image-resize-target-height="140" image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle" style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom" style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom" @change="onAddFile" @removefile="onRemoveFile" />
            <VIconButton v-if="!isUploading" icon="feather:edit-2" class="edit-button is-edit" circle tabindex="0"
              @keydown.space.prevent="isUploading = true" @click="isUploading = true" />
            <VIconButton v-else icon="feather:arrow-left" class="edit-button is-back" circle tabindex="0"
              @keydown.space.prevent="isUploading = false" @click="isUploading = false" />
          </template>
        </VAvatar>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" :placeholder="$t('First_name')" autocomplete="given-name"
                  v-model="userData.firstname" />
                <p class="help has-text-danger">{{ errors.firstname[0] }}</p>
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" :placeholder="$t('Last_name')" autocomplete="family-name"
                  v-model="userData.lastname" />
                <p class="help has-text-danger">{{ errors.lastname[0] }}</p>
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:map-pin">
                <VInput type="text" :placeholder="$t('Username')" autocomplete="country-name"
                  v-model="userData.username" />
                <p class="help has-text-danger">{{ errors.username[0] }}</p>
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:mail">
                <VInput type="text" :placeholder="$t('Email')" autocomplete="organization-title"
                  v-model="userData.email" />
                <p class="help has-text-danger">{{ errors.email[0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.profile-v-avatar {
  position: relative;

  .edit-button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
  }
}

.filepond-profile-wrap,
.filepond-square-wrap {
  display: block;
}
</style>
