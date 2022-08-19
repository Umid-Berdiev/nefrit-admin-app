import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchAboutPageData() {
  try {
    const { data } = await api({
      url: `/api/admin/about`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateAboutPageContent(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/about`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// Contact item api
export async function fetchContactItemList() {
  try {
    const { data } = await api({
      url: `/api/admin/contact`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchContactItem(contactItemID: number) {
  try {
    const { data } = await api({
      url: `/api/admin/contact/${contactItemID}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createContactItem(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/contact`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateContactItem(contactItemID: number, payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/contact/${contactItemID}`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeContactItem(contactItemID: number | null) {
  try {
    const { data } = await api({
      url: `/api/admin/contact/${contactItemID}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}

// Article api
export async function fetchArticleList(page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/article?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchArticle(articleID: number) {
  try {
    const { data } = await api({
      url: `/api/admin/article/${articleID}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function createArticle(payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/article`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updateArticle(articleID: number, payload: FormData) {
  try {
    const { data } = await api({
      url: `/api/admin/article/${articleID}`,
      method: 'POST',
      data: payload,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function removeArticle(articleID: number | null) {
  try {
    const { data } = await api({
      url: `/api/admin/article/${articleID}`,
      method: 'DELETE',
    })

    return data.data
  } catch (error) {
    throw error
  }
}
