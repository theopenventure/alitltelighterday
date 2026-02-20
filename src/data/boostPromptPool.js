// ── Category metadata (static, never rotates) ──

export const categoryMeta = {
  energy:  { category: 'Energy',    variant: 'warm' },
  calm:    { category: 'Calm',      variant: 'gray' },
  nourish: { category: 'Nourish',   variant: 'beige' },
  joy:     { category: 'Curiosity', variant: 'sage' },
}

// ── Time-of-day periods ──
// morning: before 12pm | afternoon: 12–5pm | evening: after 5pm
// 'anytime' prompts are used as fallback / filler regardless of time

// ── Prompt pools: 30 curated prompts per category ──
// Each prompt tagged with `time` for time-of-day awareness

export const promptPool = {
  energy: [
    // Morning
    { prompt: 'Give me a 60-second morning routine that actually works', detail: 'A quick routine to start strong', segment: 'breath', time: 'morning' },
    { prompt: 'Give me three micro-habits that make mornings easier', detail: 'Small shifts, big difference', segment: 'breath', time: 'morning' },
    { prompt: 'Give me a one-minute morning body wake-up sequence', detail: '4 moves from bed to ready', segment: 'breath', time: 'morning' },
    { prompt: 'Suggest three songs that feel like the start of something great', detail: '3 tracks, fresh-start energy', segment: 'song', time: 'morning' },
    { prompt: 'Give me one bold thing to try before lunch', detail: 'A tiny dare for your day', segment: 'text', time: 'morning' },
    { prompt: 'Write me a pep talk to start the day like a cool coach would', detail: 'A morning burst of motivation', segment: 'text', time: 'morning' },
    { prompt: 'Pick three songs for a morning power walk', detail: '3 tracks, walking tempo', segment: 'song', time: 'morning' },
    { prompt: 'Create a quick confidence ritual for before a big day', detail: 'A 90-second power-up', segment: 'breath', time: 'morning' },
    { prompt: 'Give me a mantra and a song to carry through the morning', detail: '1 thought + 1 track', segment: 'song', time: 'morning' },
    { prompt: 'Describe the simplest way to double my energy this morning', detail: 'One hack, instant boost', segment: 'text', time: 'morning' },

    // Afternoon
    { prompt: 'Pick a soundtrack for getting things done this afternoon', detail: '3 focus-friendly tracks', segment: 'song', time: 'afternoon' },
    { prompt: 'Help me shake off a sluggish afternoon in 90 seconds', detail: 'A quick afternoon rescue', segment: 'breath', time: 'afternoon' },
    { prompt: 'Give me a mini workout I can do between meetings', detail: '3 minutes, no gear needed', segment: 'breath', time: 'afternoon' },
    { prompt: 'Give me a two-minute standing desk power break', detail: 'Move, stretch, recharge', segment: 'breath', time: 'afternoon' },
    { prompt: 'Suggest three songs that feel like a Friday afternoon', detail: '3 tracks, weekend energy', segment: 'song', time: 'afternoon' },
    { prompt: 'Find me a song that makes the afternoon commute feel cinematic', detail: '1 song, main character energy', segment: 'song', time: 'afternoon' },
    { prompt: 'Give me a 60-second posture reset that actually energizes', detail: 'Stand taller, feel better', segment: 'breath', time: 'afternoon' },
    { prompt: 'Create a 5-step "get out of your head" afternoon reset', detail: 'Body-first, brain follows', segment: 'breath', time: 'afternoon' },
    { prompt: 'Find a song that turns a slow afternoon completely around', detail: '1 track, mood-flip guaranteed', segment: 'song', time: 'afternoon' },
    { prompt: 'Describe one physical thing I can do right now to feel alive', detail: 'One move, instant energy', segment: 'text', time: 'afternoon' },

    // Evening
    { prompt: 'Suggest a playlist theme for cooking dinner with energy', detail: '3 songs, kitchen tempo', segment: 'song', time: 'evening' },
    { prompt: 'Pick a song that turns cleaning into a dance party', detail: '1 track, instant vibe shift', segment: 'song', time: 'evening' },
    { prompt: 'Name three songs that feel like driving with the windows down at sunset', detail: '3 tracks, golden-hour energy', segment: 'song', time: 'evening' },
    { prompt: 'Give me an evening energy boost that won\'t keep me up', detail: 'Recharge without the wired feeling', segment: 'breath', time: 'evening' },
    { prompt: 'Pick three songs that make you feel unstoppable tonight', detail: '3 tracks, pure confidence', segment: 'song', time: 'evening' },

    // Anytime
    { prompt: 'Curate a three-song playlist to hype me up', detail: '3 songs, picked for your mood', segment: 'song', time: 'anytime' },
    { prompt: 'Find me a pump-up anthem I haven\'t heard yet', detail: '1 song + why it slaps', segment: 'song', time: 'anytime' },
    { prompt: 'Design a five-minute stretch sequence for desk zombies', detail: '5 moves, no equipment', segment: 'breath', time: 'anytime' },
    { prompt: 'Build me a two-minute energy reset I can do anywhere', detail: 'A body-and-mind reboot', segment: 'breath', time: 'anytime' },
    { prompt: 'Recommend an underrated artist who brings pure energy', detail: '1 artist + 1 song to start with', segment: 'song', time: 'anytime' },
  ],

  calm: [
    // Morning
    { prompt: 'Help me start the day without rushing — a 2-minute calm ritual', detail: 'A gentle way to begin', segment: 'breath', time: 'morning' },
    { prompt: 'Give me a morning intention-setting exercise', detail: 'Start with clarity, not chaos', segment: 'text', time: 'morning' },
    { prompt: 'Walk me through a breathing exercise to ease morning anxiety', detail: 'Steady nerves before the day', segment: 'breath', time: 'morning' },
    { prompt: 'Help me turn a deep morning breath into a full reset', detail: 'One breath, done right', segment: 'breath', time: 'morning' },
    { prompt: 'Suggest a tiny act of self-kindness to start the day', detail: 'One small gift to yourself', segment: 'text', time: 'morning' },
    { prompt: 'Describe what it feels like to have a slow, unhurried morning', detail: 'Permission to just be', segment: 'text', time: 'morning' },

    // Afternoon
    { prompt: 'Share a soothing thought to carry through the afternoon', detail: 'A gentle perspective shift', segment: 'text', time: 'afternoon' },
    { prompt: 'Walk me through a breathing exercise I can do at my desk', detail: 'A guided 4-step reset', segment: 'breath', time: 'afternoon' },
    { prompt: 'Suggest a calming micro-ritual I can do before a meeting', detail: 'Steady nerves in 60 seconds', segment: 'breath', time: 'afternoon' },
    { prompt: 'Design a phone-free five minutes that actually recharges me', detail: 'A screen break that works', segment: 'breath', time: 'afternoon' },
    { prompt: 'Give me a jaw-unclenching, shoulder-dropping reset', detail: '4 tension-release steps', segment: 'breath', time: 'afternoon' },
    { prompt: 'Design a micro-break routine for between tasks', detail: '90 seconds to reset your focus', segment: 'breath', time: 'afternoon' },
    { prompt: 'Create a 90-second anxiety reset for a stressful afternoon', detail: 'Steps for when things feel heavy', segment: 'breath', time: 'afternoon' },
    { prompt: 'Help me do a quick emotional check-in with myself', detail: 'Name it to tame it', segment: 'text', time: 'afternoon' },

    // Evening
    { prompt: 'Give me a tiny evening wind-down ritual', detail: '3 steps to ease into the night', segment: 'breath', time: 'evening' },
    { prompt: 'Create a bedtime wind-down sequence in four steps', detail: 'Sleep-ready in 5 minutes', segment: 'breath', time: 'evening' },
    { prompt: 'Give me a 2-minute nature visualization to calm my nerves tonight', detail: 'Close your eyes and arrive', segment: 'text', time: 'evening' },
    { prompt: 'Share one thing I can tell myself to let go of today\'s stress', detail: 'A thought to hold onto tonight', segment: 'text', time: 'evening' },
    { prompt: 'Walk me through the simplest evening meditation that actually works', detail: 'No apps, no fluff, just calm', segment: 'breath', time: 'evening' },
    { prompt: 'Help me practice letting go of one small worry before bed', detail: 'A guided thought exercise', segment: 'text', time: 'evening' },

    // Anytime
    { prompt: 'Share simple, fun ways to instantly de-stress', detail: 'Takes about 2 minutes', segment: 'breath', time: 'anytime' },
    { prompt: 'Describe a calming scene so vivid I can almost feel it', detail: 'A mini mental vacation', segment: 'text', time: 'anytime' },
    { prompt: 'Teach me one grounding technique that works fast', detail: 'One method, instant calm', segment: 'breath', time: 'anytime' },
    { prompt: 'Suggest a simple body scan I can do in two minutes', detail: 'A head-to-toe check-in', segment: 'breath', time: 'anytime' },
    { prompt: 'Give me three things to do when my brain won\'t stop racing', detail: 'Quick ways to hit pause', segment: 'text', time: 'anytime' },
    { prompt: 'Help me build a micro-meditation I can do with open eyes', detail: 'Calm without closing your eyes', segment: 'breath', time: 'anytime' },
    { prompt: 'Teach me the simplest relaxation trick most people skip', detail: 'One underrated calm hack', segment: 'breath', time: 'anytime' },
    { prompt: 'Walk me through a progressive muscle relaxation in 2 minutes', detail: 'Tense, release, repeat', segment: 'breath', time: 'anytime' },
    { prompt: 'Give me a sensory grounding exercise for right now', detail: '5-4-3-2-1 and you\'re back', segment: 'breath', time: 'anytime' },
    { prompt: 'Teach me a hand-based relaxation technique', detail: 'Calm literally at your fingertips', segment: 'breath', time: 'anytime' },
  ],

  nourish: [
    // Morning
    { prompt: 'Give me a simple breakfast worth waking up for', detail: 'Morning fuel, made easy', segment: 'meal', time: 'morning' },
    { prompt: 'Suggest a smoothie that actually keeps me full', detail: 'One blend, real staying power', segment: 'meal', time: 'morning' },
    { prompt: 'Give me a quick breakfast I can eat on the go', detail: 'Grab, go, glow', segment: 'meal', time: 'morning' },
    { prompt: 'Suggest a weekend brunch dish worth the effort', detail: 'A slow-morning treat', segment: 'meal', time: 'morning' },
    { prompt: 'What\'s the best thing I can put on toast this morning?', detail: 'Toast, elevated', segment: 'meal', time: 'morning' },
    { prompt: 'Suggest a hydration habit that\'s more fun than plain water', detail: 'A tastier way to start the day', segment: 'text', time: 'morning' },

    // Afternoon
    { prompt: 'What should I make for lunch that takes under 15 minutes?', detail: 'Quick, satisfying, real food', segment: 'meal', time: 'afternoon' },
    { prompt: 'Suggest a snack that gives me energy without a crash', detail: 'One smart snack idea', segment: 'meal', time: 'afternoon' },
    { prompt: 'Give me a protein-packed lunch that isn\'t boring', detail: 'Fuel that actually excites you', segment: 'meal', time: 'afternoon' },
    { prompt: 'Give me a post-workout snack that helps recovery', detail: 'Refuel the right way', segment: 'meal', time: 'afternoon' },
    { prompt: 'Suggest a refreshing salad that doesn\'t feel like a punishment', detail: 'A salad you\'ll actually crave', segment: 'meal', time: 'afternoon' },
    { prompt: 'What should I drink that actually improves my afternoon?', detail: 'One sip, better half of the day', segment: 'text', time: 'afternoon' },
    { prompt: 'Give me a 3-ingredient snack that feels indulgent', detail: 'Simple, satisfying, smart', segment: 'meal', time: 'afternoon' },
    { prompt: 'Recommend a pantry-staple meal I can make right now', detail: 'Made from what you already have', segment: 'meal', time: 'afternoon' },

    // Evening
    { prompt: 'Design a one-bowl dinner I\'ll actually look forward to', detail: 'One bowl, all the satisfaction', segment: 'meal', time: 'evening' },
    { prompt: 'Recommend a five-ingredient dinner that impresses', detail: '5 ingredients, zero stress', segment: 'meal', time: 'evening' },
    { prompt: 'What should I eat tonight if I want to sleep better?', detail: 'A sleep-friendly dinner idea', segment: 'meal', time: 'evening' },
    { prompt: 'Suggest a cozy soup I can make in under 20 minutes', detail: 'Warmth in a bowl, fast', segment: 'meal', time: 'evening' },
    { prompt: 'Recommend a meal that looks fancy but takes 10 minutes', detail: 'Impress yourself, easily', segment: 'meal', time: 'evening' },
    { prompt: 'Suggest a veggie-forward dinner even picky eaters would love', detail: 'Vegetables, but make it fun', segment: 'meal', time: 'evening' },
    { prompt: 'Suggest a playlist theme for cooking dinner with energy', detail: '3 songs, kitchen tempo', segment: 'song', time: 'evening' },
    { prompt: 'What\'s a one-pot meal I can set and forget tonight?', detail: 'Effort-free, flavor-full', segment: 'meal', time: 'evening' },
    { prompt: 'Suggest a dessert that\'s secretly healthy', detail: 'Sweet without the regret', segment: 'meal', time: 'evening' },
    { prompt: 'Recommend a meal that tastes expensive but costs almost nothing', detail: 'Gourmet on a budget', segment: 'meal', time: 'evening' },

    // Anytime
    { prompt: 'Suggest a healthy meal that feels like a treat', detail: 'One recipe, no fuss', segment: 'meal', time: 'anytime' },
    { prompt: 'Recommend a comfort food upgrade that\'s actually good for me', detail: 'Comfort without the guilt', segment: 'meal', time: 'anytime' },
    { prompt: 'What\'s a meal I can prep on Sunday that saves my whole week?', detail: 'Prep once, eat well all week', segment: 'meal', time: 'anytime' },
    { prompt: 'Give me one self-care ritual that involves something warm', detail: 'A cozy nourishment moment', segment: 'text', time: 'anytime' },
    { prompt: 'Give me a no-cook meal for when I can\'t be bothered', detail: 'Zero cooking, still delicious', segment: 'meal', time: 'anytime' },
    { prompt: 'Recommend a nourishing bowl that hits every flavor', detail: 'Sweet, salty, savory, done', segment: 'meal', time: 'anytime' },
  ],

  joy: [
    // Morning
    { prompt: 'Give me a fascinating fact to carry through the day', detail: 'One thought, all-day wonder', segment: 'fact', time: 'morning' },
    { prompt: 'Suggest a creative exercise I can do in 60 seconds this morning', detail: 'A quick spark of creativity', segment: 'text', time: 'morning' },
    { prompt: 'What\'s the most interesting thing that happened on this date in history?', detail: 'Today in history, the good parts', segment: 'fact', time: 'morning' },
    { prompt: 'Give me a thought experiment to occupy my brain on the commute', detail: 'A fun puzzle to sit with', segment: 'text', time: 'morning' },
    { prompt: 'Share something beautiful about how music affects the brain', detail: 'The neuroscience of melody', segment: 'fact', time: 'morning' },
    { prompt: 'Tell me about an accidental discovery that changed everything', detail: 'The best mistakes in history', segment: 'fact', time: 'morning' },

    // Afternoon
    { prompt: 'Teach me something fascinating in 30 seconds', detail: 'One fact to carry with you', segment: 'fact', time: 'afternoon' },
    { prompt: 'What\'s something ordinary that\'s secretly extraordinary?', detail: 'Finding wonder in the mundane', segment: 'fact', time: 'afternoon' },
    { prompt: 'Share a scientific fact that sounds like magic', detail: 'Science, but make it whimsical', segment: 'fact', time: 'afternoon' },
    { prompt: 'Teach me a tiny skill I can learn in under a minute', detail: 'One micro-skill, instant joy', segment: 'text', time: 'afternoon' },
    { prompt: 'Give me a riddle that\'s fun without being frustrating', detail: 'A brain teaser, no stress', segment: 'text', time: 'afternoon' },
    { prompt: 'What\'s the weirdest true thing about the human body?', detail: 'Your body is stranger than fiction', segment: 'fact', time: 'afternoon' },
    { prompt: 'What\'s a math fact that\'s genuinely mind-blowing?', detail: 'Numbers, but make it fun', segment: 'fact', time: 'afternoon' },
    { prompt: 'What\'s something about color that most people don\'t know?', detail: 'See the world differently', segment: 'fact', time: 'afternoon' },

    // Evening
    { prompt: 'Give me a fun question to ask someone at dinner tonight', detail: 'One great conversation starter', segment: 'text', time: 'evening' },
    { prompt: 'Tell me something about space that puts everything in perspective', detail: 'Cosmic perspective, 30 seconds', segment: 'fact', time: 'evening' },
    { prompt: 'Tell me about a place on Earth that doesn\'t seem real', detail: 'A real place, unreal beauty', segment: 'fact', time: 'evening' },
    { prompt: 'What\'s a food fact that will change how I eat tonight?', detail: 'Dinner table knowledge', segment: 'fact', time: 'evening' },
    { prompt: 'Tell me about a cultural tradition from somewhere I\'ve never been', detail: 'A window into another world', segment: 'fact', time: 'evening' },
    { prompt: 'Give me a philosophical question that\'s fun to think about tonight', detail: 'Deep thoughts, light mood', segment: 'text', time: 'evening' },
    { prompt: 'Share something about language that will make me think differently', detail: 'Words are weirder than you think', segment: 'fact', time: 'evening' },

    // Anytime
    { prompt: 'Tell me something about the ocean that will blow my mind', detail: 'A deep dive into wonder', segment: 'fact', time: 'anytime' },
    { prompt: 'What\'s a word in another language that has no English translation?', detail: 'One untranslatable gem', segment: 'fact', time: 'anytime' },
    { prompt: 'Share a piece of history that sounds completely made up', detail: 'True story, hard to believe', segment: 'fact', time: 'anytime' },
    { prompt: 'What\'s the most surprising thing about how the brain works?', detail: 'One mind-bending brain fact', segment: 'fact', time: 'anytime' },
    { prompt: 'Tell me about an animal that does something ridiculously cool', detail: 'Nature being extra', segment: 'fact', time: 'anytime' },
    { prompt: 'Share a connection between two things I\'d never expect', detail: 'A surprising link', segment: 'fact', time: 'anytime' },
    { prompt: 'What\'s an everyday invention with a wild origin story?', detail: 'The backstory you never knew', segment: 'fact', time: 'anytime' },
    { prompt: 'Tell me about a forgotten piece of history worth remembering', detail: 'A story time almost erased', segment: 'fact', time: 'anytime' },
    { prompt: 'What\'s the most wholesome fact about nature?', detail: 'Nature being adorable', segment: 'fact', time: 'anytime' },
    { prompt: 'Tell me about a tiny creature with an outsized superpower', detail: 'Small but mighty', segment: 'fact', time: 'anytime' },
  ],
}

// ── Editorial short titles per category ──
// These are rotated alongside prompts for the big serif headline on each card.

export const shortTitles = {
  energy: [
    'Turn it up.', 'Wake up.', 'Move more.', 'Feel alive.', 'Let\'s go.',
    'Get loud.', 'Rise up.', 'Shake it off.', 'Find your beat.', 'Go harder.',
    'Push play.', 'Start strong.', 'Own it.', 'Keep moving.', 'Light it up.',
  ],
  calm: [
    'Slow down.', 'Breathe easy.', 'Let go.', 'Be still.', 'Just pause.',
    'Soften.', 'Exhale.', 'Find quiet.', 'Rest here.', 'Unwind.',
    'Release.', 'Gently now.', 'Settle in.', 'Peace, okay?', 'Drift.',
  ],
  nourish: [
    'Eat well.', 'Treat yourself.', 'Savor this.', 'Fuel up.', 'Something warm.',
    'Taste more.', 'Feed your soul.', 'Nourish.', 'Indulge.', 'Good stuff.',
    'Cook simple.', 'One bowl.', 'Comfort food.', 'Fresh today.', 'Eat real.',
  ],
  joy: [
    'Just look.', 'Did you know?', 'How curious.', 'Imagine.', 'Wonder why?',
    'Think again.', 'Stay curious.', 'Look closer.', 'Oh, really?', 'Surprise.',
    'Go deeper.', 'Isn\'t it wild?', 'Fun fact.', 'No way.', 'Mind blown.',
  ],
}

// ── CTA text derived from segment type ──

export const CTA_MAP = {
  song: 'Play set',
  meal: 'See recipe',
  breath: 'Start routine',
  fact: 'Read more',
  text: 'Explore',
}

// ── Time-of-day helper ──

export function getTimeOfDay(date = new Date()) {
  const h = date.getHours()
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

// ── Deterministic date-based rotation ──

export function dateSeed(str) {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash)
}

/**
 * Returns today's 4 boost cards — one per category.
 * Picks from time-appropriate prompts first (morning/afternoon/evening),
 * falls back to 'anytime' prompts if needed.
 * Deterministic: same date + same time period = same selection.
 */
export function getDailyBoosts(date = new Date()) {
  const timeOfDay = getTimeOfDay(date)
  const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  const boosts = {}

  for (const cat of ['energy', 'calm', 'nourish', 'joy']) {
    const pool = promptPool[cat]

    // Filter to time-specific + anytime prompts
    const timePool = pool.filter(p => p.time === timeOfDay || p.time === 'anytime')

    // Use the filtered pool (falls back to full pool if somehow empty)
    const available = timePool.length > 0 ? timePool : pool
    const index = dateSeed(dateStr + ':' + cat + ':' + timeOfDay) % available.length

    // Pick a short title deterministically
    const titles = shortTitles[cat]
    const titleIndex = dateSeed(dateStr + ':title:' + cat) % titles.length

    const selected = available[index]
    boosts[cat] = {
      ...categoryMeta[cat],
      ...selected,
      shortTitle: titles[titleIndex],
      ctaText: CTA_MAP[selected.segment] || 'Explore',
    }
  }

  return boosts
}

/**
 * Returns a random set of 4 boost cards (for the refresh/shuffle feature).
 * Respects time-of-day filtering.
 */
export function getRandomBoosts() {
  const timeOfDay = getTimeOfDay()
  const boosts = {}

  for (const cat of ['energy', 'calm', 'nourish', 'joy']) {
    const pool = promptPool[cat]
    const timePool = pool.filter(p => p.time === timeOfDay || p.time === 'anytime')
    const available = timePool.length > 0 ? timePool : pool
    const index = Math.floor(Math.random() * available.length)

    const titles = shortTitles[cat]
    const titleIndex = Math.floor(Math.random() * titles.length)

    const selected = available[index]
    boosts[cat] = {
      ...categoryMeta[cat],
      ...selected,
      shortTitle: titles[titleIndex],
      ctaText: CTA_MAP[selected.segment] || 'Explore',
    }
  }

  return boosts
}
