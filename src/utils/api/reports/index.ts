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

export async function fetchStatementReport(payload: any) {
  try {
    const { data } = await api({
      url: `/api/admin/report/application`,
      params: payload,
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

export async function fetchPaymentReport(payload: any) {
  try {
    const { data } = await api({
      url: `/api/admin/report/payment`,
      params: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchApplicantReport(payload: any) {
  try {
    const { data } = await api({
      url: `/api/admin/report/legal-entity`,
      params: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}
