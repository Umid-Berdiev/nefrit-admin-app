import { definePlugin } from '/@src/app'
import * as NProgress from 'nprogress'

export default definePlugin(({ router }) => {
  if (import.meta.env.SSR) {
    return
  }

  // NProgress.configure({ showSpinner: true })

  // router.beforeEach(() => {
  //   NProgress.start()
  // })
  // router.afterEach(() => {
  //   NProgress.done()
  // })
})
