import { ref } from 'vue'

export default function usePromise(fn) {
  const results = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function createPromise(...args: any) {
    loading.value = true
    error.value = null
    results.value = null

    try {
      results.value = await fn(...args)
    } catch (err: any) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    results,
    loading,
    error,
    createPromise,
  }
}
