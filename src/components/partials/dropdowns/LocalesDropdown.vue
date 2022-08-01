<script setup lang="ts">
import { computed, ref } from 'vue'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router';


const router = useRouter()
const { locale, availableLocales, t } = useI18n()

/**
 * We use the same storage key as we use in the /src/i18n.ts file
 * so if user reload the page, the selected language will be the same
 */
// const defaultLocale = useStorage('locale', navigator?.language || 'uz')
const defaultLocale = useStorage('locale', 'uz')

/**
 * Each time we change the locale, we persit it in the storage
 */
watch(locale, () => {
  defaultLocale.value = locale.value
})

const filteredLocales = computed(() => availableLocales.filter(item => item !== locale.value))

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})

function changeLocale(loc: string) {
  locale.value = loc
  router.go(0)
}
</script>

<template>
  <VDropdown right>
    <template #button="{ open, toggle }">
      <VButton class="is-trigger has-text-primary px-4" style="border:none;" rounded outlined light @click="toggle">
        {{ locale.toUpperCase() }}
      </VButton>
    </template>

    <template #content="{ close }">
      <div @mouseleave="close" class="p-3">
        <a href="javascript:;" class="dropdown-item is-size-6" v-for="lang in filteredLocales"
          @click="changeLocale(lang)">
          <!-- <img :src="localFlagSrc" alt="" /> -->
          <span>{{ lang.toUpperCase() }}</span>
        </a>
      </div>
    </template>
  </VDropdown>
</template>
