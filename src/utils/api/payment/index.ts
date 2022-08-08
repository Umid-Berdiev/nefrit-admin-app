import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function verifyPaymentById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/payment/${id}/verified`,
      method: 'PUT',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function verifyPayment(paymentId: number, statementIds: number[]) {
  try {
    const { data } = await api({
      url: `/api/admin/payment/${paymentId}/verify`,
      method: 'PUT',
      data: {
        applications: statementIds,
      },
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function verifyAllPayments(contractId: number) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${contractId}/verify`,
      method: 'PUT',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchNotVerifiedStatements(contractId: number) {
  try {
    const { data } = await api({
      url: `/api/admin/appcontract/${contractId}/application/not-verified`,
      method: 'GET',
    })

    return data.data
  } catch (error) {
    throw error
  }
}
