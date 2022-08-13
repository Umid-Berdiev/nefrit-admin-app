import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchAboutPageData() {
  try {
    const { data } = await api({
      url: `/api/admin/about`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateAboutPageContent(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/about`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
