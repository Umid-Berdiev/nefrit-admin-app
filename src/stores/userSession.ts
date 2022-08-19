import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { useApi } from '../composable/useApi'
import { UserData } from '../utils/interfaces'

export const useUserSession = defineStore('userSession', () => {
  // token will be synced with local storage
  // @see https://vueuse.org/core/usestorage/
  const api = useApi()
  const token = useStorage('token', '')

  const user = ref<UserData>()
  const loading = ref(true)

  const isLoggedIn = computed(() => token.value !== undefined && token.value !== '')
  const userRoleID = computed(() => user.value?.role_id)

  function setUser(newUser: UserData | undefined) {
    user.value = newUser
  }

  function setToken(newToken: string | undefined) {
    token.value = newToken
  }

  function setLoading(newLoading: boolean) {
    loading.value = newLoading
  }

  async function loginUser(payload: any) {
    try {
      const { data } = await api({
        url: `/api/admin/login`,
        method: 'post',
        headers: {
          Language: 'uz',
        },
        data: payload,
      })

      setUser(data.user)
      setToken(data.token)
    } catch (error) {
      throw error
    }
  }

  async function logoutUser() {
    try {
      await api({
        url: '/api/logout',
        method: 'post',
      })
      token.value = undefined
      user.value = undefined
    } catch (error) {
      throw error
    }
  }

  async function fetchProfile() {
    try {
      const { data } = await api({
        url: '/api/admin/profile',
      })
      setUser(data.data)
    } catch (error) {
      throw error
    }
  }

  async function updateProfile(payload: FormData) {
    try {
      const { data } = await api({
        url: '/api/admin/profile/update',
        method: 'POST',
        data: payload,
      })

      setUser(data.data)
    } catch (error) {
      throw error
    }
  }

  async function updateProfilePassword(payload: any) {
    try {
      const { data } = await api({
        url: '/api/admin/profile/password',
        method: 'PUT',
        data: payload,
      })

      setUser(data.data)
    } catch (error) {
      throw error
    }
  }

  return {
    user,
    token,
    isLoggedIn,
    userRoleID,
    loading,
    loginUser,
    logoutUser,
    fetchProfile,
    updateProfile,
    updateProfilePassword,
    setUser,
    setToken,
    setLoading,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot))
}
