import { ApplicantData } from '../../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(
  page: number,
  locale: string
): Promise<{ data: ApplicantData[] }> {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity?page=${page}`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number): Promise<ApplicantData> {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchApplicantStatements(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}/applications`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchApplicantCertificate(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}/certificate`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function blockApplicant(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}`,
      method: 'POST',
    })

    return data.data
  } catch (error) {
    throw error
  }
}
