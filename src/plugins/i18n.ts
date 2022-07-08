import { definePlugin } from '/@src/app'
import { useStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'
import en from '/@src/locales/en.json'
import ru from '/@src/locales/ru.json'
import uz from '/@src/locales/uz.json'
/**
 * messages are generated using vite-plugin-i18n
 * each .json files located in the ./src/locales are registered in messages
 * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default definePlugin(({ app }) => {
  const defaultLocale = useStorage('locale', 'uz')
  const i18n = createI18n({
    locale: defaultLocale.value,
    messages: {
      uz,
      ru,
      en,
    },
  })

  app.use(i18n)
})
