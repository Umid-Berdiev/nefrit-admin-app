import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function fetchRoles() {
  try {
    const { data } = await api({
      url: `/api/admin/role/list`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchList(page: number) {
  try {
    const { data } = await api({
      url: `/api/admin/role?page=${page}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function searchList(search: string) {
  try {
    const { data } = await api({
      url: `/api/admin/role?search=${search}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function sortList(sort: string) {
  try {
    const { data } = await api({
      url: `/api/admin/role?sort=${sort}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function fetchById(id: number) {
  try {
    const { data } = await api({
      url: `/api/admin/role/${id}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function create(payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/role`,
      method: 'POST',
      data: payload,
    })
  } catch (error) {
    throw error
  }
}

export async function updateById(id: number, payload: Object) {
  try {
    const { data } = await api({
      url: `/api/admin/role/${id}`,
      method: 'PUT',
      data: payload,
    })
  } catch (error) {
    throw error
  }
}

export async function removeById(id: number | null) {
  try {
    const { data } = await api({
      url: `/api/admin/role/${id}`,
      method: 'DELETE',
    })
  } catch (error) {
    throw error
  }
}

export async function removeMulti(ids: number[]) {
  try {
    const { data } = await api({
      url: `/api/admin/role`,
      method: 'DELETE',
      data: { ids },
    })
  } catch (error) {
    throw error
  }
}

// role permissions api
export async function fetchPermissionByRoleId(roleId: number) {
  try {
    const { data } = await api({
      url: `/api/admin/permission/role/${roleId}`,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export async function updatePermissionMethodById(methodId: number, value: 1 | 0) {
  try {
    const res = await api({
      url: `/api/admin/permission/method/${methodId}`,
      method: 'PUT',
      data: { value },
    })

    return res
  } catch (error) {
    throw error
  }
}
