export const getAnalytics = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/analytics/`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json().catch(() => null)

    if (!res.ok) {
      throw new Error(data?.message || `HTTP ${res.status}`)
    }

    return data
  } catch (err) {
    console.log('Error fetching analytics:', err)
    throw err
  }
}