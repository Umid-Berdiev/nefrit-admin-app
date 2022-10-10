import moment from 'moment'
import { VueroAppContext } from '../app'

const helpers = {
  cutText(text, length) {
    if (text.split(' ').length > 1) {
      const string = text.substring(0, length)
      const splitText = string.split(' ')
      splitText.pop()
      return splitText.join(' ') + '...'
    } else {
      return text
    }
  },
  formatDate(date: string, format: string) {
    return moment(date).format(format)
  },
  capitalizeFirstLetter(string: string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    } else {
      return ''
    }
  },
  onlyNumber(string: string) {
    if (string) {
      return string.replace(/\D/g, '')
    } else {
      return ''
    }
  },
  formatCurrency(number: number) {
    if (number) {
      const formattedNumber = number.toString().replace(/\D/g, '')
      const rest = formattedNumber.length % 3
      let currency = formattedNumber.substr(0, rest)
      const thousand = formattedNumber.substr(rest).match(/\d{3}/g)
      let separator

      if (thousand) {
        separator = rest ? '.' : ''
        currency += separator + thousand.join('.')
      }

      return currency
    } else {
      return ''
    }
  },
  isset(obj: any) {
    if (obj !== null && obj !== undefined) {
      if (typeof obj === 'object' || Array.isArray(obj)) {
        return Object.keys(obj).length
      } else {
        return obj.toString().length
      }
    }

    return false
  },
  toRaw(obj: Object) {
    return JSON.parse(JSON.stringify(obj))
  },
  randomNumbers(from: number, to: number, length: number) {
    const numbers = [0]
    for (let i = 1; i < length; i++) {
      numbers.push(Math.ceil(Math.random() * (from - to) + to))
    }

    return numbers
  },

  gotoStatementPage(rowId: number, userRoleID: number) {
    let url = `/app/statements/${rowId}`
    if (userRoleID == 5) {
      url += '#docs'
    }

    return url
  },
}

const install = (app: VueroAppContext['app']) => {
  app.config.globalProperties.$h = helpers
}

export { install as default, helpers as helper }
