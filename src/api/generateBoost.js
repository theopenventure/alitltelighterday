const SUPABASE_URL = 'https://bnqlizizcmzcmcsubcfw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJucWxpeml6Y216Y21jc3ViY2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNTg2NjksImV4cCI6MjA4NjkzNDY2OX0.rWN6DHUGtiDyYGiytekoMOQO31VljdBhwlXwTe16Fo0'

export async function generateBoost(category, prompt) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/generate-boost`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ category, prompt }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `API error: ${res.status}`)
  }

  return res.json()
}
