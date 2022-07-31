<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from 'vue'
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
  title: 'Auth Login - Vuero',
})

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}
</script>

<template>
  <Transition name="fade-fast" mode="out-in">
    <div class="auth-wrapper-inner columns is-gapless">
      <!-- Form section -->
      <div class="column">
        <div class="hero is-fullheight is-white">
          <div class="hero-heading">
            <LocalesDropdown />
            <label class="dark-mode" tabindex="0"
              @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()">
              <input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange" />
              <span></span>
            </label>
          </div>
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-12">
                  <div class="auth-content">
                    <h2>{{ $t('Welcome_to_NEFRIT') }}</h2>
                    <p>{{ $t('Please_sign_in_to_your_account') }}</p>

                  </div>
                  <div class="auth-form-wrapper">
                    <!-- Login Form -->
                    <form @submit.prevent="handleLogin">
                      <div class="login-form">
                        <!-- Username -->
                        <VField>
                          <VControl icon="feather:user" :has-error="errors.username[0]">
                            <VInput type="text" name="username" :placeholder="$t('Username')" autocomplete="username"
                              @input="clearErrors" />
                            <!-- <span class="has-text-danger">{{ errors.username[0] }}</span> -->
                            <p class="help has-text-danger">{{ errors.username[0] }}</p>
                          </VControl>
                        </VField>

                        <!-- Password -->
                        <VField>
                          <VControl icon="feather:lock" :has-error="errors.password[0]">
                            <VInput type="password" name="password" :placeholder="$t('Password')"
                              autocomplete="current-password" @input="clearErrors" />
                            <!-- <span class="has-text-danger">{{ errors.password[0] }}</span> -->
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
                          <VButton :loading="isLoading" color="primary" type="submit" bold fullwidth raised>
                            {{ $t('Sign_In') }}
                          </VButton>
                        </div>

                        <!-- <div class="is-flex is-justify-content-space-between">
                        <RouterLink :to="{ name: 'auth' }">
                          <i>{{ $t('I_do_not_have_an_account_yet') }}</i>
                        </RouterLink>
                        <a>
                          <i>{{ $t('Forgot_Password') }}?</i>
                        </a>
                      </div> -->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
