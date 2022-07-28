import { useI18n } from 'vue-i18n'
import { useApi } from '/@src/composable/useApi'

const api = useApi()
const { locale } = useI18n()

export async function loginUser(): Promise<{ user: UserData; token: string }> {
  const { data } = await api({
    url: `/api/login`,
    headers: {
      Language: locale.value,
    },
  })

  return { ...data }
}
