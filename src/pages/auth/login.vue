<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import LocalesDropdown from '/@src/components/partials/dropdowns/LocalesDropdown.vue'

const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notif = useNotyf()
const userSession = useUserSession()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    userSession.setToken('logged-in')

    notif.dismissAll()
    notif.success('Welcome back, Erik Kovalsky')

    if (redirect) {
      router.push(redirect)
    } else {
      router.push({
        name: 'app',
      })
    }

    isLoading.value = false
  }
}

useHead({
  title: 'Auth Login - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Form section -->
    <div class="column">
      <div class="hero is-fullheight is-white">
        <div class="hero-heading">
          <LocalesDropdown />
          <label class="dark-mode" tabindex="0" @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()">
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
                        <VControl icon="feather:user">
                          <VInput type="text" :placeholder="$t('Username')" autocomplete="username" />
                        </VControl>
                      </VField>

                      <!-- Password -->
                      <VField>
                        <VControl icon="feather:lock">
                          <VInput type="password" :placeholder="$t('Password')" autocomplete="current-password" />
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

                      <div class="is-flex is-justify-content-space-between">
                        <RouterLink :to="{ name: 'auth' }">
                          <i>{{ $t('I_do_not_have_an_account_yet') }}</i>
                        </RouterLink>
                        <a>
                          <i>{{ $t('Forgot_Password') }}?</i>
                        </a>
                      </div>
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
</template>
