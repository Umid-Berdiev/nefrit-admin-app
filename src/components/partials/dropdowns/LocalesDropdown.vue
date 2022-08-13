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
  return (locale: string) => {
    switch (locale) {
      case 'en':
        return '/images/logos/flag_en.svg'
      case 'ru':
        return '/images/logos/flag_ru.svg'
      case 'uz':
      default:
        return '/images/logos/flag_uz.svg'
    }
  }
})

function changeLocale(loc: string) {
  locale.value = loc
  router.go(0)
}
</script>

<template>
  <VDropdown right class="locale-dropdown">
    <template #button="{ open, toggle }">
      <VButton class="is-trigger has-text-primary px-4" style="border:none;" rounded outlined light @click="toggle">
        {{ locale.toUpperCase() }}
      </VButton>
    </template>

    <template #content="{ close }">
      <div @mouseleave="close" class="p-3">
        <a href="javascript:;" class="dropdown-item is-size-6 is-flex is-justify-content-flex-end"
          v-for="lang in filteredLocales" @click="() => { changeLocale(lang); close(); }">
          <img class="mr-3" :src="localFlagSrc(lang)" :alt="lang + 'flag'" />
          <span>{{ lang.toUpperCase() }}</span>
        </a>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped lang="scss">
.locale-dropdown .dropdown-menu {
  min-width: none !important;
}
</style>
