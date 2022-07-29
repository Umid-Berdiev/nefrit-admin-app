import { definePlugin } from '/@src/app'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

export default definePlugin(({ app }) => {
  app.use(SetupCalendar, {
    locales: {
      uz: {
        masks: {
          L: 'DD.MM.YYYY',
          weekdays: 'WW',
        },
      },
    },
  })

  app.component('VCalendar', Calendar)
  app.component('VDatePicker', DatePicker)
})
