import { definePlugin } from '/@src/app'
import { defineAsyncComponent } from 'vue'

export default definePlugin(({ app }) => {
  // here we are defining a lazy loaded component
  // that will be imported on demand
  app.component(
    // eslint-disable-next-line vue/multi-word-component-names
    'VueIconify',
    defineAsyncComponent({
      loader: () => import('@iconify/vue').then((mod) => mod.Icon),
      delay: 0,
      suspensible: false,
    })
  )
})
