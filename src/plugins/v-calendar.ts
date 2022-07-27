import { definePlugin } from '/@src/app'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

export default definePlugin(({ app }) => {
  app.use(SetupCalendar, {
    // locales: {
    //   uz: {
    //     firstDayOfWeek: 2,
    //     masks: {
    //       L: 'DD-MM-YYYY',
    //       weekdays: 'WW',
    //       // ...optional `title`, `weekdays`, `navMonths`, etc
    //       monthNames: [
    //         'Yanvar',
    //         'Fevral',
    //         'Mart',
    //         'April',
    //         'May',
    //         'Iyun',
    //         'Iyul',
    //         'Avgust',
    //         'Sentabr',
    //         'Oktabr',
    //         'Dekabr',
    //       ],
    //       dayNames: [
    //         'Dushanba',
    //         'Seshanba',
    //         'Chorshanba',
    //         'Payshanba',
    //         'Juma',
    //         'Shanba',
    //         'Yakshanba',
    //       ],
    //       dayNamesShort: ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'],
    //       dayNamesShorter: ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'],
    //     },
    //   },
    // },
  })

  app.component('VCalendar', Calendar)
  app.component('VDatePicker', DatePicker)
})
