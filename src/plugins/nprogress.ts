import { definePlugin } from '/@src/app'
import NProgress from 'nprogress'

export default definePlugin(({ router }) => {
  if (import.meta.env.SSR) {
    return
  }

  NProgress.configure({ showSpinner: false })
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
})
