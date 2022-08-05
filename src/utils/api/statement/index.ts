import {
  UserData,
  ConclusionData,
  NoticeData,
  StatementCertificateData,
  StatementVoteData,
  StatementData,
  VoteStatisticsData,
  StatementDocumentData,
  StatementChronologyData,
  StatementChatMessageData,
  StatementContractData,
} from '../../interfaces'
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

export async function fetchById(id: number, locale: string): Promise<StatementData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// stages api
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

// chronologies api
export async function fetchChronologies(
  id: number,
  locale: string
): Promise<StatementChronologyData[]> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}/chronologies`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// notices api
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

// conclusions api
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
  payload: FormData
): Promise<ConclusionData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/conclusion/${id}`,
      method: 'POST',
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
  payload: FormData
): Promise<ConclusionData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${payload.get('application_id')}/conclusion`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// certificates
export async function fetchStatementCertificates(page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/certificate?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementCertificateStatuses() {
  try {
    const { data } = await api({
      url: `/api/admin/certificate/status`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementCertificateById(
  id: number
): Promise<StatementCertificateData> {
  try {
    const { data } = await api({
      url: `/api/admin/certificate/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateStatementCertificateById(
  id: number,
  payload: StatementCertificateData
): Promise<StatementCertificateData> {
  try {
    const { data } = await api({
      url: `/api/admin/certificate/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeStatementCertificateById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/certificate/${id}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createStatementCertificate(
  payload: StatementCertificateData
): Promise<StatementCertificateData> {
  try {
    const { data } = await api({
      url: `/api/admin/certificate`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

/*
 * votes_api
 */
export async function fetchStatementVotes(
  id: number,
  locale: string
): Promise<{ user: UserData; vote: StatementVoteData; is_me: boolean }[]> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}/vote`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementVoteStatistics(
  id: number
): Promise<VoteStatisticsData> {
  try {
    const { data } = await api({
      url: `/api/admin/application/${id}/vote/statistics`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateStatementVote(
  applicationId: number,
  payload: StatementVoteData
) {
  try {
    const { data } = await api({
      url: `/api/admin/application/${applicationId}/vote`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeStatementVoteById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/application/vote/${id}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createStatementVote(
  payload: StatementVoteData
): Promise<StatementVoteData> {
  try {
    const { data } = await api({
      url: `/api/admin/vote`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// statement docs api
export async function fetchStatementDocuments(
  id: number,
  locale: string
): Promise<StatementDocumentData[]> {
  try {
    const { data } = await api({
      // url: `/api/admin/document?application_id=${id}`,
      url: `/api/admin/application/${id}/document`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementDocumentById(
  id: number
): Promise<StatementDocumentData> {
  try {
    const { data } = await api({
      url: `/api/admin/document/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// statement chat api
export async function fetchStatementChatMessages(id: number, locale: string) {
  try {
    const { data } = await api({
      // url: `/api/admin/document?application_id=${id}`,
      url: `/api/admin/chat?application_id=${id}`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createChatMessage(
  payload: StatementChatMessageData
): Promise<StatementChatMessageData[]> {
  try {
    const { data } = await api({
      url: `/api/admin/message`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// statement contracts api
export async function fetchStatementContracts(page: number, locale: string) {
  try {
    const { data } = await api({
      // url: `/api/admin/document?application_id=${id}`,
      url: `/api/admin/appcontract?page=${page}`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchStatementContractById(id: number, locale: string) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${id}`,
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createStatementContract(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateContractById(
  id: number,
  payload: FormData
): Promise<StatementContractData> {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${id}`,
      method: 'PUT',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeContractById(id: number, locale: string) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${id}`,
      method: 'DELETE',
      headers: {
        Language: locale,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function verifyContractById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${id}/verify`,
      method: 'PUT',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function addContractFile(id: number, formData: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${id}/file`,
      method: 'POST',
      data: formData,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
