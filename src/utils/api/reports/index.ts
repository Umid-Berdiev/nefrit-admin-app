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

export async function fetchStatementReport(page: number, range: any) {
  try {
    const { data } = await api({
      url: `/api/admin/report/application?page=${page}`,
      params: range,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchCertificateReport(payload: any) {
  try {
    const { data } = await api({
      url: `/api/admin/report/certificate`,
      params: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
