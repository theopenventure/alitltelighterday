const STORAGE_KEY = 'alld-saved-boosts'

// ── Read / Write ──

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

function writeAll(boosts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(boosts))
}

// ── Public API ──

export function saveBoost({ title, category, variant, prompt, segments }) {
  const all = readAll()
  const today = new Date().toISOString().slice(0, 10)
  // Deduplicate by title + calendar date
  const exists = all.some(
    (b) => b.title === title && b.savedAt.slice(0, 10) === today
  )
  if (exists) return getSavedBoostsByDay()

  all.push({
    id: crypto.randomUUID?.() || String(Date.now()),
    title,
    category,
    variant,
    prompt,
    segments,
    savedAt: new Date().toISOString(),
  })
  writeAll(all)
  return getSavedBoostsByDay()
}

export function getSavedBoostsByDay() {
  const all = readAll()
  if (all.length === 0) return []

  // Group by calendar date
  const groups = {}
  for (const boost of all) {
    const dateKey = boost.savedAt.slice(0, 10)
    if (!groups[dateKey]) groups[dateKey] = []
    groups[dateKey].push(boost)
  }

  // Sort date keys descending (latest first)
  const sortedKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a))

  return sortedKeys.map((dateKey) => {
    const d = new Date(dateKey + 'T12:00:00') // noon to avoid timezone shifts
    return {
      dateKey,
      dayNumber: d.getDate(),
      month: new Intl.DateTimeFormat('en', { month: 'long' }).format(d),
      weekday: new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d),
      items: groups[dateKey],
    }
  })
}

// ── Placeholder seed data ──

function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString()
}

const SEED_DATA = [
  // Today
  {
    id: 'seed-1',
    title: 'A Morning That Sets the Tone',
    category: 'Energy',
    variant: 'warm',
    prompt: 'Give me a 60-second morning routine to start the day with intention.',
    segments: [
      { type: 'text', content: 'Before reaching for your phone, <strong>take three slow breaths</strong>. Place both feet on the floor and feel the ground beneath you.' },
      { type: 'text', content: 'Stand by a window. Let natural light reach your eyes for 30 seconds — this signals your brain that the day has begun.' },
      { type: 'fact', content: 'Morning light exposure within the first hour of waking helps regulate your circadian rhythm for the entire day.' },
    ],
    savedAt: daysAgo(0),
  },
  {
    id: 'seed-2',
    title: 'The Art of Doing Nothing',
    category: 'Calm',
    variant: 'gray',
    prompt: 'Help me embrace stillness for just 5 minutes today.',
    segments: [
      { type: 'text', content: 'Find a spot where you can sit without purpose. No phone, no book, no task. <strong>Just sit.</strong>' },
      { type: 'text', content: 'Notice what your mind does when it has nothing to do. It will wander — that is perfectly fine. The practice is in the sitting, not the stillness.' },
    ],
    savedAt: daysAgo(0),
  },
  // Yesterday
  {
    id: 'seed-3',
    title: 'Something Warm and Simple',
    category: 'Nourish',
    variant: 'beige',
    prompt: 'Suggest a simple, comforting meal I can make in under 15 minutes.',
    segments: [
      { type: 'meal', name: 'Golden Turmeric Broth Bowl', vibe: 'Warm, grounding, effortless', desc: 'Heat broth with a pinch of turmeric, ginger, and garlic. Pour over cooked rice or noodles. Top with a soft-boiled egg and a drizzle of sesame oil.' },
      { type: 'text', content: 'Cooking something simple for yourself is a quiet act of care. <strong>You deserve a warm meal today.</strong>' },
    ],
    savedAt: daysAgo(1),
  },
  {
    id: 'seed-4',
    title: 'A Song to Shift Your Energy',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Recommend a song that will gently lift my mood.',
    segments: [
      { type: 'song', title: 'Here Comes the Sun', artist: 'The Beatles', why: 'Sometimes the simplest melodies carry the deepest reassurance. This one has been lifting spirits since 1969 — and it still works.' },
      { type: 'text', content: 'Put it on, close your eyes for a moment, and let the warmth reach you.' },
    ],
    savedAt: daysAgo(1),
  },
  {
    id: 'seed-5',
    title: 'Breathing Through the Noise',
    category: 'Calm',
    variant: 'gray',
    prompt: 'Guide me through a quick breathing exercise to reset.',
    segments: [
      { type: 'breath', steps: [
        { label: 'Inhale slowly', detail: 'Breathe in through your nose for 4 counts. Feel your chest expand.' },
        { label: 'Hold gently', detail: 'Hold your breath for 4 counts. No tension — just a pause.' },
        { label: 'Exhale completely', detail: 'Release through your mouth for 6 counts. Let everything go.' },
      ]},
      { type: 'fact', content: 'Extended exhales activate your parasympathetic nervous system — your body\'s natural calm-down mechanism.' },
    ],
    savedAt: daysAgo(1),
  },
  // 3 days ago
  {
    id: 'seed-6',
    title: 'Move Like Nobody Is Watching',
    category: 'Energy',
    variant: 'warm',
    prompt: 'Give me a fun way to move my body for 5 minutes.',
    segments: [
      { type: 'text', content: 'Put on your favourite upbeat song. <strong>Dance.</strong> Not gracefully, not performatively — just move however your body wants to.' },
      { type: 'text', content: 'Shake your arms. Bounce. Sway. Let it be messy and joyful. Five minutes of unstructured movement can shift your entire afternoon.' },
    ],
    savedAt: daysAgo(3),
  },
  {
    id: 'seed-7',
    title: 'A Thought Worth Keeping',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Share something that might make me smile today.',
    segments: [
      { type: 'fact', content: 'Somewhere right now, a dog is dreaming about chasing something and their paws are twitching.' },
      { type: 'text', content: 'Joy doesn\'t always announce itself. Sometimes it\'s hidden in small, absurd, beautiful things — <strong>and that\'s enough.</strong>' },
    ],
    savedAt: daysAgo(3),
  },
  // A week ago
  {
    id: 'seed-8',
    title: 'The 2-Minute Reset',
    category: 'Calm',
    variant: 'gray',
    prompt: 'I only have 2 minutes. Help me find some calm.',
    segments: [
      { type: 'text', content: 'Close your eyes. Place one hand on your chest. <strong>Feel your heartbeat.</strong> That rhythm has been with you since the beginning.' },
      { type: 'text', content: 'You don\'t need an hour of meditation. Two minutes of presence is a gift you can give yourself right now.' },
    ],
    savedAt: daysAgo(7),
  },
  {
    id: 'seed-9',
    title: 'Fuel That Feels Good',
    category: 'Nourish',
    variant: 'beige',
    prompt: 'What\'s a healthy snack that actually tastes amazing?',
    segments: [
      { type: 'meal', name: 'Honey-Tahini Apple Slices', vibe: 'Sweet, crunchy, satisfying', desc: 'Slice a crisp apple. Drizzle with tahini and a touch of raw honey. Sprinkle with a pinch of sea salt and cinnamon.' },
      { type: 'text', content: 'Nourishment isn\'t about restriction — it\'s about <strong>choosing things that make your body feel cared for.</strong>' },
    ],
    savedAt: daysAgo(7),
  },
  {
    id: 'seed-10',
    title: 'Small Steps, Big Energy',
    category: 'Energy',
    variant: 'warm',
    prompt: 'How can I build energy without caffeine?',
    segments: [
      { type: 'text', content: 'Step outside for 3 minutes. <strong>Cold air on your face</strong> is one of the fastest natural energy boosters available to you.' },
      { type: 'text', content: 'Follow it with 10 jumping jacks. Not because you need to exercise — because your body responds to movement with aliveness.' },
      { type: 'fact', content: 'A brief cold exposure triggers norepinephrine release, which naturally increases alertness and focus.' },
    ],
    savedAt: daysAgo(7),
  },
  // Two weeks ago
  {
    id: 'seed-11',
    title: 'Permission to Rest',
    category: 'Calm',
    variant: 'gray',
    prompt: 'Remind me that it\'s okay to take a break.',
    segments: [
      { type: 'text', content: 'You are not a machine. <strong>Rest is not a reward for productivity</strong> — it\'s a basic human need.' },
      { type: 'text', content: 'If you\'re reading this and feeling guilty about pausing, let that guilt go. You showed up today. That counts.' },
    ],
    savedAt: daysAgo(14),
  },
  {
    id: 'seed-12',
    title: 'A Playlist for the Soul',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Give me a song that feels like a warm hug.',
    segments: [
      { type: 'song', title: 'Bloom', artist: 'The Paper Kites', why: 'This song moves slowly, like a deep breath in a quiet room. It\'s the musical equivalent of someone saying "take your time."' },
      { type: 'text', content: 'Sometimes the right song at the right moment can be a form of healing. <strong>Let this one hold you for a few minutes.</strong>' },
    ],
    savedAt: daysAgo(14),
  },
]

export function seedPlaceholderData() {
  const existing = readAll()
  if (existing.length > 0) return false

  // Flatten breath segments (stored as nested in seed, need to keep as-is for rendering)
  writeAll(SEED_DATA)
  return true
}
