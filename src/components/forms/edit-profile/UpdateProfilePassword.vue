<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { useNotyf } from '/@src/composable/useNotyf'
import { useUserSession } from '/@src/stores/userSession';

const notyf = useNotyf()
const { y } = useWindowScroll()
const { t, locale } = useI18n()

const { updateProfilePassword } = useUserSession()
const isLoading = ref(false)
const errors = reactive({
  old_password: [],
  password: [],
  password_confirmation: [],
})
const isScrolling = computed(() => {
  return y.value > 30
})

async function onSave(event: Event) {
  try {
    isLoading.value = true
    clearErrors()
    const values = Object.fromEntries(new FormData(event.target))
    await updateProfilePassword(values)
    console.log({ values });

    notyf.success(t('Updated_successfully'))
  } catch (error: any) {
    notyf.error(t('Error_while_updating_data'))
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function clearErrors() {
  Object.assign(errors, {
    old_password: [],
    password: [],
    password_confirmation: []
  })
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>{{ $t('Change_password') }}</h3>
          <!-- <h3>Settings</h3>
          <p>Edit your account prefs and settings</p> -->
        </div>
        <div class="right">
          <div class="buttons">
            <!-- <VButton type="button" :to="{ name: 'app' }" icon="lnir lnir-arrow-left rem-100" light dark-outlined>
              {{ $t('Go_Back') }}
            </VButton> -->
            <VButton type="submit" color="primary" raised :loading="isLoading" tabindex="0" form="pwd-update-form">
              {{ $t('Save_changes') }}
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <form id="pwd-update-form" class="form-body" @submit.prevent="onSave">
      <div class="fieldset">
        <div class="fieldset-heading">
          <!--Fieldset-->
          <!-- <p>For an improved account security</p> -->
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:unlock">
                <VInput type="password" :placeholder="$t('Old_Password')" name="old_password" />
                <p class="help has-text-danger">{{ errors.old_password[0] }}</p>
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:lock">
                <VInput type="password" :placeholder="$t('New_Password')" name="password" />
                <p class="help has-text-danger">{{ errors.password[0] }}</p>
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:lock">
                <VInput type="password" :placeholder="$t('Repeat_New_Password')" name="password_confirmation" />
                <p class="help has-text-danger">{{ errors.password_confirmation[0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
