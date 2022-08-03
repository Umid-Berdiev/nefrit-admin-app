import { App } from 'vue'
import helper from './helper'

export default (app: { use: (arg0: (app: App<Element>) => void) => void }) => {
  app.use(helper)
}
