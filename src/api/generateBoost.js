const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const REQUEST_TIMEOUT = 15000

export async function generateBoost(category, prompt) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/generate-boost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ category, prompt }),
      signal: controller.signal,
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.error || `API error: ${res.status}`)
    }

    return res.json()
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('Request timed out — please try again')
    }
    throw err
  } finally {
    clearTimeout(timeoutId)
  }
}
