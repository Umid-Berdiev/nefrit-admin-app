import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/faqs?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/faqs/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/faqs`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateById(id: number, payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/faqs/${id}`,
      method: 'PUT',
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
      url: `/api/admin/faqs/${id}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}
