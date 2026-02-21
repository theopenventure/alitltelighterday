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

export function isBoostSaved(title) {
  if (!title) return false
  const all = readAll()
  return all.some((b) => b.title === title)
}

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
  // ── Today (3 items) ──
  {
    id: 'seed-1',
    title: 'Unclench Your Jaw, Drop Your Shoulders',
    shortTitle: 'Soften up.',
    category: 'Calm your body',
    variant: 'gray',
    prompt: 'Help me release the tension I didn\'t notice I was holding.',
    segments: [
      { type: 'text', content: 'Right now, without changing anything, notice: <strong>is your jaw clenched?</strong> Are your shoulders creeping toward your ears?' },
      { type: 'text', content: 'Let your tongue drop from the roof of your mouth. Let your shoulders melt down. Unclench your hands. You were holding all of that without realizing.' },
      { type: 'fact', content: 'Jaw tension is one of the most common places the body stores stress — many people clench without knowing it for hours at a time.' },
    ],
    savedAt: daysAgo(0),
  },
  {
    id: 'seed-2',
    title: 'You Don\'t Have to Reply Right Now',
    shortTitle: 'It can wait.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'Remind me I don\'t need to respond to everything immediately.',
    segments: [
      { type: 'text', content: 'That message sitting in your inbox, that text you\'re drafting a reply to in your head — <strong>it can wait.</strong> Most things can.' },
      { type: 'text', content: 'Not every notification deserves an immediate reaction. You\'re allowed to take your time. A slower reply is still a valid reply.' },
    ],
    savedAt: daysAgo(0),
  },
  {
    id: 'seed-3',
    title: 'Wrap Your Hands Around Something Warm',
    shortTitle: 'Warm hands.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'Suggest a small comfort I can make for myself right now.',
    segments: [
      { type: 'text', content: 'Make yourself a warm drink — tea, coffee, even just hot water with lemon. The specifics don\'t matter.' },
      { type: 'text', content: 'What matters is this: <strong>hold the cup with both hands.</strong> Feel the warmth move from your palms into your chest. Sip slowly. That\'s the whole ritual.' },
      { type: 'fact', content: 'Holding something warm in your hands activates the same brain regions associated with feelings of social warmth and trust.' },
    ],
    savedAt: daysAgo(0),
  },

  // ── Yesterday (3 items) ──
  {
    id: 'seed-4',
    title: 'Something Beautiful Is Happening in Space Right Now',
    shortTitle: 'Look up.',
    category: 'Get curious',
    variant: 'warm',
    prompt: 'Tell me something wondrous about the universe.',
    segments: [
      { type: 'fact', content: 'Right now, a star somewhere in our galaxy is being born — collapsing clouds of gas and dust, glowing hotter and brighter until it ignites. About 3 new stars form in the Milky Way every year.' },
      { type: 'text', content: 'The universe is constantly making new things. <strong>So are you, even on the days it doesn\'t feel like it.</strong>' },
    ],
    savedAt: daysAgo(1),
  },
  {
    id: 'seed-5',
    title: 'Breathing Through the Noise',
    shortTitle: 'Breathe easy.',
    category: 'Calm your body',
    variant: 'gray',
    prompt: 'Guide me through a quick breathing exercise to reset.',
    segments: [
      { type: 'breath', steps: [
        { label: 'Inhale slowly', detail: 'Breathe in through your nose for 4 counts. Feel your belly expand first, then your chest.' },
        { label: 'Hold gently', detail: 'Hold for 4 counts. No tension — just a quiet pause.' },
        { label: 'Exhale completely', detail: 'Release through your mouth for 6 counts. Let everything soften on the way out.' },
      ]},
      { type: 'fact', content: 'Extended exhales activate your parasympathetic nervous system — your body\'s built-in calm-down switch.' },
    ],
    savedAt: daysAgo(1),
  },
  {
    id: 'seed-6',
    title: 'Permission to Leave It Unfinished',
    shortTitle: 'Good enough.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'Help me let go of the pressure to finish everything.',
    segments: [
      { type: 'text', content: 'You don\'t have to finish that thing today. You don\'t even have to finish it this week.' },
      { type: 'text', content: '<strong>"Good enough" is a complete sentence.</strong> Perfectionism disguises itself as ambition, but it\'s really just fear wearing a nicer outfit.' },
      { type: 'text', content: 'What if you set it down — not forever, just for now — and see how that feels?' },
    ],
    savedAt: daysAgo(1),
  },

  // ── 3 days ago (3 items) ──
  {
    id: 'seed-7',
    title: 'Put On a Song That Makes You Feel Something',
    shortTitle: 'Press play.',
    category: 'Get curious',
    variant: 'warm',
    prompt: 'Recommend a song that sparks something.',
    segments: [
      { type: 'song', title: 'Intro', artist: 'The xx', why: 'No lyrics, no demands. Just a slow build of warmth that feels like the world slowing down for a minute to let you catch up.' },
      { type: 'text', content: 'Put it on, close your eyes, and give yourself the length of the song. <strong>That\'s all. Just the length of the song.</strong>' },
    ],
    savedAt: daysAgo(3),
  },
  {
    id: 'seed-8',
    title: 'The Conversation You Keep Replaying',
    shortTitle: 'Let it go.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'Help me stop replaying a conversation in my head.',
    segments: [
      { type: 'text', content: 'That thing you said, or didn\'t say, or wish you\'d said differently — <strong>your brain is trying to protect you by rehearsing it.</strong> But the rehearsal isn\'t helping anymore.' },
      { type: 'text', content: 'Try this: say to yourself, quietly, "I did what I could with what I knew at the time." Say it once more. Mean it a little.' },
      { type: 'text', content: 'The conversation is over. You\'re the only one still in the room.' },
    ],
    savedAt: daysAgo(3),
  },
  {
    id: 'seed-9',
    title: 'Cozy Up Your Next Hour',
    shortTitle: 'Get cozy.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'Help me make the next hour feel a little softer.',
    segments: [
      { type: 'list', items: [
        'Light a candle or turn on a warm lamp — overhead lights off',
        'Put on something with soft fabric (that hoodie counts)',
        'Queue up a playlist, a podcast, or comfortable silence',
        'Make a warm drink or pour a cold glass of something you like',
      ]},
      { type: 'text', content: 'You don\'t need a whole self-care day. <strong>One cozy hour is enough.</strong>' },
    ],
    savedAt: daysAgo(3),
  },

  // ── 4 days ago (3 items) ──
  {
    id: 'seed-10',
    title: 'Feet on the Floor, Five Breaths',
    shortTitle: 'Ground here.',
    category: 'Calm your body',
    variant: 'gray',
    prompt: 'I feel ungrounded. Help me come back to my body.',
    segments: [
      { type: 'text', content: 'Take your shoes off if you can. Place both feet flat on the floor. <strong>Press down gently, like you\'re leaving footprints.</strong>' },
      { type: 'breath', steps: [
        { label: 'Press and breathe in', detail: 'Push your feet into the ground. Inhale for 4 counts, feeling the solidity under you.' },
        { label: 'Hold and notice', detail: 'Hold for 3 counts. Feel the temperature of the floor, the texture.' },
        { label: 'Release and soften', detail: 'Exhale for 5 counts. Let your weight settle downward.' },
      ]},
      { type: 'text', content: 'Repeat that five times. You\'re here. The ground is holding you.' },
    ],
    savedAt: daysAgo(4),
  },
  {
    id: 'seed-11',
    title: 'A Tiny Decision Shortcut',
    shortTitle: 'Just pick one.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'I\'m stuck overthinking a small decision. Help me move past it.',
    segments: [
      { type: 'text', content: 'If you\'ve been going back and forth on something for more than 5 minutes and neither option is dangerous — <strong>pick the one that came to mind first.</strong>' },
      { type: 'text', content: 'Most small decisions don\'t matter nearly as much as the energy you spend debating them. The relief of choosing is almost always better than the "perfect" choice.' },
      { type: 'fact', content: 'Research suggests that people who make decisions quickly on low-stakes choices report higher overall life satisfaction than chronic deliberators.' },
    ],
    savedAt: daysAgo(4),
  },
  {
    id: 'seed-12',
    title: 'Text Someone You\'ve Been Thinking About',
    shortTitle: 'Say hello.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'Help me feel more connected today.',
    segments: [
      { type: 'text', content: 'Think of one person who crossed your mind recently. Maybe you almost texted them but didn\'t. <strong>Send the text now.</strong>' },
      { type: 'text', content: 'It doesn\'t have to be deep. "Hey, I was thinking about you" is one of the nicest things a person can receive. You\'ll probably make their day — and yours.' },
    ],
    savedAt: daysAgo(4),
  },

  // ── 5 days ago (2 items) ──
  {
    id: 'seed-13',
    title: 'Did You Know Octopuses Have Three Hearts?',
    shortTitle: 'How curious.',
    category: 'Get curious',
    variant: 'warm',
    prompt: 'Tell me something surprising about the natural world.',
    segments: [
      { type: 'fact', content: 'Octopuses have three hearts — two pump blood to their gills, and one pumps it to the rest of the body. When they swim, the main heart actually stops beating, which is why they prefer crawling.' },
      { type: 'text', content: 'The world is weirder and more wonderful than we give it credit for. <strong>Let that feel like good news today.</strong>' },
    ],
    savedAt: daysAgo(5),
  },
  {
    id: 'seed-14',
    title: 'Bedtime Wind-Down',
    shortTitle: 'Slow down.',
    category: 'Calm your body',
    variant: 'gray',
    prompt: 'Help me prepare for a good night\'s sleep.',
    segments: [
      { type: 'breath', steps: [
        { label: 'Breathe in deeply', detail: 'Inhale through your nose for 4 counts, filling your belly first, then chest.' },
        { label: 'Hold softly', detail: 'Hold for 7 counts. No strain — imagine holding a feather in place.' },
        { label: 'Release slowly', detail: 'Exhale through your mouth for 8 counts, like blowing through a straw.' },
      ]},
      { type: 'text', content: 'This is the 4-7-8 technique. Do it three times. <strong>Your nervous system will start to downshift on its own.</strong>' },
      { type: 'text', content: 'You don\'t have to feel sleepy right away. Just let your body know the day is done.' },
    ],
    savedAt: daysAgo(5),
  },

  // ── 6 days ago (2 items) ──
  {
    id: 'seed-15',
    title: 'A Boundary Script You Can Borrow',
    shortTitle: 'Say no.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'Give me a way to say no without the guilt spiral.',
    segments: [
      { type: 'text', content: 'Here are some phrases you\'re allowed to use. Pick one and keep it in your back pocket:' },
      { type: 'list', items: [
        '"I\'d love to, but I can\'t right now."',
        '"Let me think about it and get back to you."',
        '"I\'m at capacity this week — can we revisit?"',
        '"That sounds great, but I need to pass this time."',
      ]},
      { type: 'text', content: '<strong>No is a complete sentence,</strong> but if that feels too sharp, the phrases above are softer doors to the same room.' },
    ],
    savedAt: daysAgo(6),
  },
  {
    id: 'seed-16',
    title: 'Run a Bath, or Fake One',
    shortTitle: 'Warm soak.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'Suggest a small way to pamper myself tonight.',
    segments: [
      { type: 'text', content: 'If you have a bathtub, fill it. Add whatever you have — epsom salt, a splash of dish soap for bubbles, nothing at all. <strong>Warm water is the whole point.</strong>' },
      { type: 'text', content: 'No tub? Run the hottest comfortable shower and just stand in it for a few extra minutes. Let the water hit your shoulders. Don\'t think about anything on purpose.' },
      { type: 'text', content: 'You\'re not wasting time. You\'re replenishing.' },
    ],
    savedAt: daysAgo(6),
  },

  // ── 7 days ago (3 items) ──
  {
    id: 'seed-17',
    title: 'Shake It Off — Literally',
    shortTitle: 'Shake loose.',
    category: 'Get curious',
    variant: 'warm',
    prompt: 'I feel stuck in my body. Help me move a little.',
    segments: [
      { type: 'text', content: 'Stand up and shake your whole body for 60 seconds. Start with your hands, then arms, shoulders, hips, legs. <strong>Shake like a dog after a bath.</strong>' },
      { type: 'text', content: 'Animals do this instinctively after a stressful moment — they literally shake off the tension. Your body knows how to release; sometimes it just needs permission.' },
      { type: 'fact', content: 'Therapeutic shaking (TRE) is used by trauma therapists worldwide. Even 90 seconds of full-body shaking can measurably lower cortisol levels.' },
    ],
    savedAt: daysAgo(7),
  },
  {
    id: 'seed-18',
    title: 'The Five Senses Check-In',
    shortTitle: 'Come back.',
    category: 'Calm your body',
    variant: 'gray',
    prompt: 'Guide me through a grounding exercise.',
    segments: [
      { type: 'text', content: 'Wherever you are, pause and notice:' },
      { type: 'text', content: '<strong>5 things you can see.</strong> 4 things you can touch. 3 things you can hear. 2 things you can smell. 1 thing you can taste.' },
      { type: 'text', content: 'This is the 5-4-3-2-1 technique. It pulls your attention out of your head and plants it right here, in the room you\'re sitting in.' },
    ],
    savedAt: daysAgo(7),
  },
  {
    id: 'seed-19',
    title: 'Wear the Comfortable Thing',
    shortTitle: 'Be comfy.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'I want to feel a little more comfortable today.',
    segments: [
      { type: 'text', content: 'Put on the soft shirt. The old hoodie. The socks that feel like a hug. <strong>Comfort is not laziness.</strong>' },
      { type: 'text', content: 'Your body has been working hard — carrying you through conversations, decisions, feelings. Let it wear something that says "I\'ve got you."' },
    ],
    savedAt: daysAgo(7),
  },

  // ── 10 days ago (3 items) ──
  {
    id: 'seed-20',
    title: 'Trees Talk to Each Other Underground',
    shortTitle: 'Stay curious.',
    category: 'Get curious',
    variant: 'warm',
    prompt: 'Share something beautiful about the natural world.',
    segments: [
      { type: 'fact', content: 'Trees in a forest are connected by underground fungal networks. They share nutrients, send chemical warnings about pests, and even feed their stumps to keep them alive. Scientists call it the "Wood Wide Web."' },
      { type: 'text', content: 'Even trees don\'t do it alone. <strong>Connection is built into the fabric of things.</strong>' },
    ],
    savedAt: daysAgo(10),
  },
  {
    id: 'seed-21',
    title: 'Stop Shoulding Yourself',
    shortTitle: 'Drop the should.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'I feel like I should be doing more. Help me with that.',
    segments: [
      { type: 'text', content: 'Notice how many of your thoughts today started with "I should." <strong>That word is almost never kind.</strong>' },
      { type: 'text', content: 'Try replacing it: "I should call them" becomes "I\'d like to call them when I have the energy." "I should be further along" becomes "I\'m where I am, and that\'s the only place I can start from."' },
      { type: 'text', content: 'You\'re not behind. You\'re here.' },
    ],
    savedAt: daysAgo(10),
  },
  {
    id: 'seed-22',
    title: 'Your Body Is Holding Today for You',
    shortTitle: 'Body scan.',
    category: 'Calm your body',
    variant: 'gray',
    prompt: 'Walk me through a quick body scan.',
    segments: [
      { type: 'text', content: 'Close your eyes. Start at the top of your head and slowly move your attention downward, like a warm searchlight.' },
      { type: 'text', content: '<strong>Forehead.</strong> Soften it. <strong>Jaw.</strong> Unclench. <strong>Shoulders.</strong> Drop them. <strong>Hands.</strong> Open them. <strong>Belly.</strong> Let it be soft. <strong>Feet.</strong> Feel the ground.' },
      { type: 'text', content: 'You just checked in with the person who matters most today. That counts for a lot.' },
    ],
    savedAt: daysAgo(10),
  },

  // ── 14 days ago (2 items) ──
  {
    id: 'seed-23',
    title: 'A Playlist Moment Just for You',
    shortTitle: 'Your song.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'Give me a song that feels like a warm blanket.',
    segments: [
      { type: 'song', title: 'Bloom', artist: 'The Paper Kites', why: 'It moves slowly, like a deep breath in a quiet room. It\'s the musical equivalent of someone saying "take your time."' },
      { type: 'text', content: 'Put on headphones if you can. Give yourself the full length of the song. <strong>No multitasking, just this.</strong>' },
    ],
    savedAt: daysAgo(14),
  },
  {
    id: 'seed-24',
    title: 'A Stretch That\'s Really a Sigh',
    shortTitle: 'Open up.',
    category: 'Get curious',
    variant: 'warm',
    prompt: 'Give me a gentle stretch to wake up my body.',
    segments: [
      { type: 'text', content: 'Stand up. Reach both arms overhead and <strong>interlace your fingers</strong>. Push your palms toward the ceiling, rise onto your toes, and hold for 5 seconds.' },
      { type: 'text', content: 'Now drop everything — arms, heels, tension. Let out an audible sigh. The sigh is the important part.' },
      { type: 'fact', content: 'Physiological sighs — one deep inhale followed by a long exhale — are the fastest known way to calm the nervous system in real time.' },
    ],
    savedAt: daysAgo(14),
  },

  // ── 21 days ago (2 items) ──
  {
    id: 'seed-25',
    title: 'You\'re Allowed to Cancel Plans',
    shortTitle: 'Cancel it.',
    category: 'Quiet your mind',
    variant: 'sage',
    prompt: 'I feel guilty about wanting to cancel. Help.',
    segments: [
      { type: 'text', content: 'If the thought of going makes your whole body feel heavy, <strong>that\'s information, not weakness.</strong>' },
      { type: 'text', content: 'You can say: "I\'m so sorry, I need to reschedule — I\'m running on empty today." Most people understand. The ones who matter will.' },
      { type: 'text', content: 'An evening on the couch is sometimes the bravest thing you can do for yourself.' },
    ],
    savedAt: daysAgo(21),
  },
  {
    id: 'seed-26',
    title: 'Order the Fancy Drink',
    shortTitle: 'Treat yourself.',
    category: 'Treat yourself',
    variant: 'beige',
    prompt: 'Give me permission to enjoy a small luxury today.',
    segments: [
      { type: 'text', content: 'Get the latte with the oat milk. Add the vanilla. Get the large. <strong>You are allowed to enjoy things that cost $6.</strong>' },
      { type: 'text', content: 'Small luxuries aren\'t frivolous — they\'re proof that you think you\'re worth a little extra. And you are. Every single day.' },
    ],
    savedAt: daysAgo(21),
  },
]

export function seedPlaceholderData() {
  const existing = readAll()
  const onlySeeds = existing.length > 0 && existing.every((b) => b.id?.startsWith('seed-'))
  const missingShortTitle = onlySeeds && existing.some((b) => !b.shortTitle)
  const missingSpace = onlySeeds && !existing.some((b) => b.category === 'Quiet your mind')
  if (existing.length > 0 && !(onlySeeds && (existing.length < SEED_DATA.length || missingShortTitle || missingSpace))) return false

  writeAll(SEED_DATA)
  return true
}
