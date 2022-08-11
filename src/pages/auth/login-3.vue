<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import LocalesDropdown from '/@src/components/partials/dropdowns/LocalesDropdown.vue'

const { t } = useI18n()
const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notif = useNotyf()
const { loginUser, isLoggedIn } = useUserSession()
const redirect = route.query.redirect as string
const errors = reactive({
  username: '',
  password: '',
})

if (isLoggedIn) {
  router.push({
    name: 'app',
  })
}

const handleLogin = async (event: Event) => {
  try {
    isLoading.value = true
    const values = Object.fromEntries(new FormData(event.target as HTMLFormElement))

    await loginUser(values)

    notif.dismissAll()
    notif.success(`${t('Welcome_back')}, ${values.username?.toUpperCase()}`)

    if (redirect) {
      router.push(redirect)
    } else {
      router.push({
        name: 'app',
      })
    }
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    error.response?.data?.errors.message && notif.error(error.response?.data?.errors.message[0])
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: t('auth_login_nefrit'),
})

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink :to="{ name: 'index' }" class="header-item">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
      </div>
      <div class="right">
        <label class="dark-mode ml-auto" tabindex="0"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()">
          <input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange" />
          <span></span>
        </label>
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>{{ $t('Welcome_to_NEFRIT') }}</h2>
          <p>{{ $t('Please_sign_in_to_your_account') }}</p>
          <!-- <RouterLink :to="{ name: 'auth-signup-3' }">
            I do not have an account yet
          </RouterLink> -->
        </div>

        <!--Form-->
        <div class="form-card">
          <form @submit.prevent="handleLogin">
            <div class="login-form">
              <VField>
                <VControl icon="feather:user">
                  <VInput type="text" name="username" :placeholder="$t('Username')" autocomplete="username"
                    @input="clearErrors" />
                  <p class="help has-text-danger">{{ errors.username[0] }}</p>
                </VControl>
              </VField>
              <VField>
                <VControl icon="feather:lock">
                  <VInput type="password" name="password" :placeholder="$t('Password')" autocomplete="current-password"
                    @input="clearErrors" />
                  <p class="help has-text-danger">{{ errors.password[0] }}</p>
                </VControl>
              </VField>

              <!-- Switch -->
              <VField>
                <VControl class="setting-item">
                  <VCheckbox :label="$t('Remember_me')" paddingless />
                </VControl>
              </VField>

              <!-- Submit -->
              <div class="login">
                <VButton :loading="isLoading" color="primary" type="submit" bold fullwidth raised :disabled="isLoading">
                  {{ $t('Sign_In') }}
                </VButton>
              </div>
            </div>
          </form>
        </div>

        <!-- <div class="forgot-link has-text-centered">
          <a>Forgot Password?</a>
        </div> -->
      </div>
    </div>
  </div>
</template>
