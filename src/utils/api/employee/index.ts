import { ApplicantData } from '../../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(
  page: number,
  locale: string
): Promise<{ data: ApplicantData[] }> {
  try {
    const { data } = await api({
      url: `/api/admin/employee?page=${page}`,
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
      url: `/api/admin/employee/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/employee`,
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
      url: `/api/admin/employee/${id}`,
      method: 'POST',
      data: payload,
    })
  } catch (error) {
    throw error
  }
}

export async function updatePassword(id: number, payload: any) {
  try {
    const { data } = await api({
      url: `/api/admin/employee/${id}/pass`,
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
      url: `/api/admin/employee/${id}`,
      method: 'DELETE',
    })
  } catch (error) {
    throw error
  }
}
