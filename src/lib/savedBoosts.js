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

export function saveBoost({ title, shortTitle, category, variant, prompt, segments }) {
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
    shortTitle,
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
    shortTitle: 'Something lighter.',
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
    shortTitle: 'Turn it up.',
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
    shortTitle: 'You\'ve done enough.',
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
    shortTitle: 'Stretch a little.',
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
    shortTitle: 'Breathe easy.',
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
    shortTitle: 'Unplug early.',
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
    shortTitle: 'Just look.',
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
    shortTitle: 'Let go.',
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
    shortTitle: 'Treat yourself.',
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
    shortTitle: 'Feel alive.',
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
  // 4 days ago
  {
    id: 'seed-11',
    title: 'Stretch Into the Afternoon',
    shortTitle: 'Wake up.',
    category: 'Energy',
    variant: 'warm',
    prompt: 'I\'m in a slump. Give me a quick stretch to wake up.',
    segments: [
      { type: 'text', content: 'Stand up. Reach both arms overhead and <strong>interlace your fingers</strong>. Push your palms toward the ceiling and hold for 10 seconds.' },
      { type: 'text', content: 'Now fold forward at the waist, letting your arms dangle. Sway gently side to side. Feel your spine decompress.' },
      { type: 'fact', content: 'Even 60 seconds of stretching increases blood flow to your muscles and brain, improving alertness within minutes.' },
    ],
    savedAt: daysAgo(4),
  },
  {
    id: 'seed-12',
    title: 'A Cup of Calm',
    shortTitle: 'Something warm.',
    category: 'Nourish',
    variant: 'beige',
    prompt: 'What\'s a soothing drink I can make right now?',
    segments: [
      { type: 'meal', name: 'Warm Lemon-Honey Water', vibe: 'Simple, soothing, grounding', desc: 'Heat water until steaming (not boiling). Squeeze half a lemon in. Stir in a spoonful of raw honey. Sip slowly, both hands on the cup.' },
      { type: 'text', content: 'There\'s a reason every culture has a ritual around warm drinks. <strong>The warmth in your hands becomes warmth in your chest.</strong>' },
    ],
    savedAt: daysAgo(4),
  },
  {
    id: 'seed-13',
    title: 'The Gratitude Pivot',
    shortTitle: 'How curious.',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Help me find something good in today.',
    segments: [
      { type: 'text', content: 'Name one thing that went right today — even something tiny. Maybe the coffee was good. Maybe someone smiled at you. Maybe you\'re here, reading this.' },
      { type: 'text', content: '<strong>Gratitude isn\'t about ignoring what\'s hard.</strong> It\'s about making sure the good things get noticed too.' },
      { type: 'fact', content: 'Studies show that writing down three good things each day for just one week can increase happiness for up to six months.' },
    ],
    savedAt: daysAgo(4),
  },
  // 5 days ago
  {
    id: 'seed-14',
    title: 'Walking Without a Destination',
    shortTitle: 'Be still.',
    category: 'Calm',
    variant: 'gray',
    prompt: 'I need to clear my head. What should I do?',
    segments: [
      { type: 'text', content: 'Step outside with no destination. <strong>Walk for 10 minutes in any direction.</strong> Don\'t plan the route — just go.' },
      { type: 'text', content: 'Notice three things you see, two things you hear, one thing you feel on your skin. This is a moving meditation.' },
    ],
    savedAt: daysAgo(5),
  },
  {
    id: 'seed-15',
    title: 'The Power of a Cold Splash',
    shortTitle: 'Move more.',
    category: 'Energy',
    variant: 'warm',
    prompt: 'Give me a 30-second energy hack.',
    segments: [
      { type: 'text', content: 'Go to the nearest sink. Run cold water over your wrists for 15 seconds, then <strong>splash cold water on your face</strong>.' },
      { type: 'text', content: 'Your body will respond with a jolt of alertness — it\'s the dive reflex, an ancient survival mechanism repurposed for your afternoon.' },
      { type: 'fact', content: 'The mammalian dive reflex triggers when cold water hits your face, slowing your heart rate and redirecting blood to vital organs.' },
    ],
    savedAt: daysAgo(5),
  },
  {
    id: 'seed-16',
    title: 'Music for Focus',
    shortTitle: 'Did you know?',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Recommend something to listen to while I work.',
    segments: [
      { type: 'song', title: 'Weightless', artist: 'Marconi Union', why: 'Scientifically designed to reduce anxiety by up to 65%. The tempo gradually slows from 60 to 50 BPM, guiding your heart rate down with it.' },
      { type: 'text', content: 'Put on headphones, press play, and let the sound create a cocoon around your focus. <strong>The world can wait.</strong>' },
    ],
    savedAt: daysAgo(5),
  },
  // 6 days ago
  {
    id: 'seed-17',
    title: 'A Bowl of Comfort',
    shortTitle: 'Savor this.',
    category: 'Nourish',
    variant: 'beige',
    prompt: 'I want something warm and filling. What can I make quickly?',
    segments: [
      { type: 'meal', name: 'Miso Soup with Greens', vibe: 'Savory, nurturing, light', desc: 'Dissolve a tablespoon of miso paste in hot (not boiling) water. Add a handful of spinach or kale, some cubed tofu, and a splash of soy sauce. Ready in 3 minutes.' },
      { type: 'text', content: 'In Japan, miso soup is often the first thing eaten in the morning — a gentle wake-up call for your digestive system. <strong>Treat your body kindly.</strong>' },
    ],
    savedAt: daysAgo(6),
  },
  {
    id: 'seed-18',
    title: 'The Five Senses Check-In',
    shortTitle: 'Soften.',
    category: 'Calm',
    variant: 'gray',
    prompt: 'Guide me through a grounding exercise.',
    segments: [
      { type: 'text', content: 'Wherever you are, pause and notice:' },
      { type: 'text', content: '<strong>5 things you can see.</strong> 4 things you can touch. 3 things you can hear. 2 things you can smell. 1 thing you can taste.' },
      { type: 'text', content: 'This is the 5-4-3-2-1 technique. It pulls your mind out of spiraling thoughts and anchors it right here, right now.' },
    ],
    savedAt: daysAgo(6),
  },
  // 10 days ago
  {
    id: 'seed-19',
    title: 'Shake It Off — Literally',
    shortTitle: 'Shake it off.',
    category: 'Energy',
    variant: 'warm',
    prompt: 'I feel stuck in my body. Help me reset.',
    segments: [
      { type: 'text', content: 'Stand up and shake your whole body for 60 seconds. Start with your hands, then arms, shoulders, hips, legs. <strong>Shake like a dog after a bath.</strong>' },
      { type: 'text', content: 'Animals do this instinctively after stress — they literally shake off the tension. Your body knows how to release; sometimes it just needs permission.' },
    ],
    savedAt: daysAgo(10),
  },
  {
    id: 'seed-20',
    title: 'The Kindness of Strangers',
    shortTitle: 'Imagine.',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Tell me something that restores my faith in people.',
    segments: [
      { type: 'fact', content: 'In 2024, a stranger in Tokyo found a wallet with $3,000 and turned it in. Japan\'s police report that over 75% of lost wallets are returned with the cash still inside.' },
      { type: 'text', content: 'People are mostly good. The evidence is everywhere if you look for it. <strong>Today, be the evidence for someone else.</strong>' },
    ],
    savedAt: daysAgo(10),
  },
  {
    id: 'seed-21',
    title: 'Bedtime Wind-Down',
    shortTitle: 'Slow down.',
    category: 'Calm',
    variant: 'gray',
    prompt: 'Help me prepare for a good night\'s sleep.',
    segments: [
      { type: 'breath', steps: [
        { label: 'Breathe in deeply', detail: 'Inhale through your nose for 4 counts, filling your belly first, then chest.' },
        { label: 'Hold softly', detail: 'Hold for 7 counts. No strain — imagine holding a feather in place.' },
        { label: 'Release slowly', detail: 'Exhale through your mouth for 8 counts, like blowing through a straw.' },
      ]},
      { type: 'text', content: 'This is the 4-7-8 technique. Repeat 3 times. <strong>Your nervous system will begin to downshift.</strong>' },
      { type: 'fact', content: 'The 4-7-8 breathing method was developed by Dr. Andrew Weil and is one of the most effective non-pharmaceutical sleep aids.' },
    ],
    savedAt: daysAgo(10),
  },
  // Two weeks ago
  {
    id: 'seed-22',
    title: 'Permission to Rest',
    shortTitle: 'Just pause.',
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
    id: 'seed-23',
    title: 'A Playlist for the Soul',
    shortTitle: 'Wonder why?',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Give me a song that feels like a warm hug.',
    segments: [
      { type: 'song', title: 'Bloom', artist: 'The Paper Kites', why: 'This song moves slowly, like a deep breath in a quiet room. It\'s the musical equivalent of someone saying "take your time."' },
      { type: 'text', content: 'Sometimes the right song at the right moment can be a form of healing. <strong>Let this one hold you for a few minutes.</strong>' },
    ],
    savedAt: daysAgo(14),
  },
  {
    id: 'seed-24',
    title: 'Energise Your Morning',
    shortTitle: 'Rise up.',
    category: 'Energy',
    variant: 'warm',
    prompt: 'What\'s a simple thing I can do to start my day strong?',
    segments: [
      { type: 'text', content: 'Before you check your phone, <strong>make your bed</strong>. It takes 90 seconds and gives you your first accomplishment of the day.' },
      { type: 'text', content: 'Then drink a full glass of water. Your body has been fasting for 7-8 hours — it\'s asking for hydration, not notifications.' },
    ],
    savedAt: daysAgo(14),
  },
  // Three weeks ago
  {
    id: 'seed-25',
    title: 'The Comfort of Oats',
    shortTitle: 'Fuel up.',
    category: 'Nourish',
    variant: 'beige',
    prompt: 'Suggest a breakfast that feels like a hug.',
    segments: [
      { type: 'meal', name: 'Cinnamon-Banana Overnight Oats', vibe: 'Creamy, sweet, effortless', desc: 'Mix oats, milk, a mashed banana, cinnamon, and a drizzle of maple syrup. Refrigerate overnight. Wake up to breakfast already made.' },
      { type: 'text', content: '<strong>Taking care of tomorrow-you is one of the kindest things today-you can do.</strong>' },
    ],
    savedAt: daysAgo(21),
  },
  {
    id: 'seed-26',
    title: 'A Moment of Awe',
    shortTitle: 'Stay curious.',
    category: 'Joy',
    variant: 'sage',
    prompt: 'Share something beautiful about the world.',
    segments: [
      { type: 'fact', content: 'There are more trees on Earth than stars in the Milky Way — roughly 3 trillion trees compared to 100-400 billion stars.' },
      { type: 'text', content: 'The world is staggeringly, incomprehensibly abundant. And you get to walk through it today. <strong>What a thing.</strong>' },
    ],
    savedAt: daysAgo(21),
  },
]

export function seedPlaceholderData() {
  const existing = readAll()
  // Re-seed if empty, or if only old seed data (fewer items or missing shortTitle)
  const onlySeeds = existing.length > 0 && existing.every((b) => b.id?.startsWith('seed-'))
  const missingShortTitle = onlySeeds && existing.some((b) => !b.shortTitle)
  if (existing.length > 0 && !(onlySeeds && (existing.length < SEED_DATA.length || missingShortTitle))) return false

  writeAll(SEED_DATA)
  return true
}
