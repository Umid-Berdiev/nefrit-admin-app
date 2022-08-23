import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/regulation?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/regulation/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/regulation`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateById(id: number, payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/regulation/${id}`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeById(id: number | undefined) {
  try {
    const { data } = await api({
      url: `/api/admin/regulation/${id}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}
