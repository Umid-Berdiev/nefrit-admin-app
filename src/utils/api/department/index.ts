import { StageData } from '../../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchDepartments() {
  try {
    const { data } = await api({
      url: `/api/admin/department/list`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchList(page: number, locale: string) {
  try {
    const { data } = await api({
      url: `/api/admin/department?page=${page}`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/department/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/department`,
      method: 'POST',
      data: payload,
    })
  } catch (error) {
    throw error
  }
}

export async function updateById(id: number, payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/department/${id}`,
      method: 'PUT',
      data: payload,
    })
  } catch (error) {
    throw error
  }
}

export async function removeById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/department/${id}`,
      method: 'DELETE',
    })
  } catch (error) {
    throw error
  }
}

export async function fetchStages(): Promise<StageData[]> {
  try {
    const { data } = await api({
      url: `/api/admin/stage`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
