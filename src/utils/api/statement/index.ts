import { NoticeData, StatementData } from '../../interfaces'
import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchList(
  page: number,
  locale: string
): Promise<{ data: StatementData[] }> {
  try {
    const { data } = await api({
      url: `/api/admin/application?page=${page}`,
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

export async function fetchStatementNotices(id: number, page: number) {
  try {
    const { data } = await api({
      // url: `/api/admin/app/notice`,
      url: `/api/admin/application/${id}/notice?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementNoticeStatuses() {
  try {
    const { data } = await api({
      url: `/api/admin/noticestatus`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementNoticeById(id: number): Promise<NoticeData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/notice/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateStatementNoticeById(
  id: number,
  payload: NoticeData
): Promise<NoticeData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/notice/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeStatementNoticeById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/application/notice/${id}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createStatementNotice(payload: NoticeData): Promise<NoticeData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${payload.application_id}/notice`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementConclusions(id: number, page: number) {
  try {
    const { data } = await api({
      // url: `/api/admin/app/conclusion`,
      url: `/api/admin/application/${id}/conclusion?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementConclusionStatuses() {
  try {
    const { data } = await api({
      url: `/api/admin/conclusionstatus`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementConclusionById(id: number): Promise<ConclusionData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/conclusion/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateStatementConclusionById(
  id: number,
  payload: ConclusionData
): Promise<ConclusionData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/conclusion/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeStatementConclusionById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/application/conclusion/${id}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createStatementConclusion(
  payload: ConclusionData
): Promise<ConclusionData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${payload.application_id}/conclusion`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
