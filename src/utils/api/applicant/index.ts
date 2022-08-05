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

export async function fetchApplicants(locale: string): Promise<ApplicantData[]> {
  try {
    const { data } = await api({
      url: `/api/admin/legal/entities`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchApplicantStatuses(locale: string) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/status`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchApplicantStatementsList(id: number, locale: string) {
  try {
    const { data } = await api({
      url: `/api/admin/legal/entities/${id}/applications`,
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

export async function fetchApplicantStatements(id: number, page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}/applications?page=${page}`,
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

export async function updateApplicant(id: number, payload: ApplicantData) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function blockApplicant(id: number, payload: { block_reason: string }) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}/block`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function unblockApplicant(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}/unblock`,
      method: 'POST',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function verifyApplicant(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/legal-entity/${id}/verify`,
      method: 'PUT',
    })

    return data.data
  } catch (error) {
    throw error
  }
}
