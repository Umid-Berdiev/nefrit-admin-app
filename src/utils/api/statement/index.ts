import { StatementData } from '../../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(locale: string): Promise<{ data: StatementData[] }> {
  try {
    const { data } = await api({
      url: `/api/admin/application`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number): Promise<StatementData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStages(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}/stage`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchChronologies(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}/chronologies`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
