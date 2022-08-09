import { StageData } from '../../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchContractTemplates() {
  try {
    const { data } = await api({
      url: `/api/admin/contract/list`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchList(page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/contract?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/contract/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/contract`,
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
      url: `/api/admin/contract/${id}`,
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
      url: `/api/admin/contract/${id}`,
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
