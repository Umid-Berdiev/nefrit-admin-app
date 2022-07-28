import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(page: number, locale: string) {
  try {
    const { data } = await api({
      url: `/api/admin/role?page=${page}`,
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
      url: `/api/admin/role/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/role`,
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
      url: `/api/admin/role/${id}`,
      method: 'PUT',
      data: payload,
    })
  } catch (error) {
    throw error
  }
}

export async function removeById(id: number | null) {
  try {
    const { data } = await api({
      url: `/api/admin/role/${id}`,
      method: 'DELETE',
    })
  } catch (error) {
    throw error
  }
}
