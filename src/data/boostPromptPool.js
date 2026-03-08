// ── Category metadata (static, never rotates) ──

export const categoryMeta = {
  lift:   { category: 'Get curious',     variant: 'warm' },
  steady: { category: 'Calm your body',  variant: 'gray' },
  space:  { category: 'Quiet your mind', variant: 'sage' },
  small:  { category: 'Gift yourself',   variant: 'beige' },
}

// ── Time-of-day periods ──
// morning: before 12pm | afternoon: 12–5pm | evening: after 5pm
// 'anytime' prompts are used as fallback / filler regardless of time

// ── Prompt pools: 90 curated prompts per category (360 total) ──
// Each prompt: { prompt, detail, segment, time, shortTitle, cta }
// Prompt Framework v3: 50-60 chars, strict formulas, no state assumptions, no "shoulds"

export const promptPool = {

  // ═══════════════════════════════════════════════════════════════
  // LIFT — "Get curious" (90 prompts)
  // Formula: [Show/Tell me] + [Something unexpected/surprising]
  // Cognitive redirection via wonder. Lean forward.
  // Segment mix: ~28 text, ~22 fact, ~20 breath, ~10 list, ~10 song
  // ═══════════════════════════════════════════════════════════════

  lift: [

    // ── LIFT: Morning — Starting (25 prompts) ──

    { prompt: 'Show me something a wild animal does that sounds fake',
      detail: 'Almost unbelievable', segment: 'fact', time: 'morning',
      shortTitle: 'Made up', cta: 'Oh, really?' },

    { prompt: 'Tell me something worth noticing before morning goes',
      detail: 'Before it passes', segment: 'text', time: 'morning',
      shortTitle: 'Before it goes', cta: 'Try this' },

    { prompt: 'Show me a tiny stretch that opens my body surprisingly',
      detail: 'Tiny but real', segment: 'breath', time: 'morning',
      shortTitle: 'Small stretch', cta: 'Move' },

    { prompt: 'Tell me a breakfast fact that is surprisingly strange',
      detail: 'A breakfast surprise', segment: 'fact', time: 'morning',
      shortTitle: 'Breakfast fact', cta: 'Oh, really?' },

    { prompt: 'Show me a reason to look outside before I start today',
      detail: 'One glance outside', segment: 'text', time: 'morning',
      shortTitle: 'Window first', cta: 'Try this' },

    { prompt: 'Tell me a song that sounds like the first morning light',
      detail: 'First light', segment: 'song', time: 'morning',
      shortTitle: 'First light', cta: 'Play it' },

    { prompt: 'Show me a creature that experiences the world uniquely',
      detail: 'A different world', segment: 'fact', time: 'morning',
      shortTitle: 'Other senses', cta: 'Oh, really?' },

    { prompt: 'Tell me something happening in nature I cannot see now',
      detail: 'Invisible nature', segment: 'text', time: 'morning',
      shortTitle: 'Hidden nature', cta: 'Try this' },

    { prompt: 'Show me a tiny move that wakes up my entire spine now',
      detail: 'A spine hello', segment: 'breath', time: 'morning',
      shortTitle: 'Spine wake-up', cta: 'Move' },

    { prompt: 'Tell me something my body is doing that I had no idea',
      detail: 'Your body right now', segment: 'fact', time: 'morning',
      shortTitle: 'Body secret', cta: 'Oh, really?' },

    { prompt: 'Show me something about early light most people miss',
      detail: 'Morning light', segment: 'text', time: 'morning',
      shortTitle: 'Morning glow', cta: 'Look up' },

    { prompt: 'Tell me a song that makes getting ready feel cinematic',
      detail: 'A movie moment', segment: 'song', time: 'morning',
      shortTitle: 'Getting ready', cta: 'Play it' },

    { prompt: 'Show me a quick hand move that feels surprisingly good',
      detail: 'Just your hands', segment: 'breath', time: 'morning',
      shortTitle: 'Hand thing', cta: 'Move' },

    { prompt: 'Tell me something trees do underground like a language',
      detail: 'Underground whispers', segment: 'fact', time: 'morning',
      shortTitle: 'Tree talk', cta: 'Oh, really?' },

    { prompt: 'Show me something about this morning that happens once',
      detail: 'One-time-only', segment: 'text', time: 'morning',
      shortTitle: 'Only today', cta: 'Look up' },

    { prompt: 'Tell me a quick face movement that feels so satisfying',
      detail: 'A face surprise', segment: 'breath', time: 'morning',
      shortTitle: 'Face thing', cta: 'Move' },

    { prompt: 'Show me a water fact that gets stranger the more I think',
      detail: 'Water is weird', segment: 'fact', time: 'morning',
      shortTitle: 'Water fact', cta: 'Oh, really?' },

    { prompt: 'Tell me a sound I could hear this morning if I listened',
      detail: 'Listen closely', segment: 'text', time: 'morning',
      shortTitle: 'Morning sound', cta: 'Try this' },

    { prompt: 'Show me a song that feels like stepping into fresh air',
      detail: 'Cool air track', segment: 'song', time: 'morning',
      shortTitle: 'Fresh air', cta: 'Play it' },

    { prompt: 'Tell me a breath pattern that is oddly fun to try early',
      detail: 'A playful breath', segment: 'breath', time: 'morning',
      shortTitle: 'Fun breath', cta: 'Move' },

    { prompt: 'Show me something a tiny insect does that is astounding',
      detail: 'Tiny and mighty', segment: 'fact', time: 'morning',
      shortTitle: 'Tiny wonder', cta: 'Oh, really?' },

    { prompt: 'Tell me a surprising thing my brain does while waking up',
      detail: 'Waking-up science', segment: 'text', time: 'morning',
      shortTitle: 'Brain waking', cta: 'Try this' },

    { prompt: 'Show me a balance move so quick that nobody would notice',
      detail: 'A secret balance', segment: 'breath', time: 'morning',
      shortTitle: 'Balance trick', cta: 'Move' },

    { prompt: 'Tell me things happening on Earth that sound too wild',
      detail: 'Earth right now', segment: 'list', time: 'morning',
      shortTitle: 'Right now', cta: 'Go on' },

    { prompt: 'Show me small things people walk right past every day',
      detail: 'Easy to miss', segment: 'list', time: 'morning',
      shortTitle: 'Walk past', cta: 'Go on' },

    // ── LIFT: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Tell me about a place where nature seems to break rules',
      detail: 'Rules don\'t apply', segment: 'text', time: 'afternoon',
      shortTitle: 'Broken rules', cta: 'Try this' },

    { prompt: 'Show me things happening on Earth now that seem impossible',
      detail: 'Right this second', segment: 'list', time: 'afternoon',
      shortTitle: 'Impossible now', cta: 'Go on' },

    { prompt: 'Tell me a sunlight fact most people have never considered',
      detail: 'Sunlight surprise', segment: 'fact', time: 'afternoon',
      shortTitle: 'Sunlight fact', cta: 'Oh, really?' },

    { prompt: 'Show me a subtle shoulder move that feels surprisingly good',
      detail: 'A subtle shift', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulder shift', cta: 'Move' },

    { prompt: 'Tell me a song that feels like a warm patch of sunshine',
      detail: 'A warm patch', segment: 'song', time: 'afternoon',
      shortTitle: 'Into the sun', cta: 'Play it' },

    { prompt: 'Show me something about the color blue I have never heard',
      detail: 'Blue is stranger', segment: 'fact', time: 'afternoon',
      shortTitle: 'Blue secret', cta: 'Oh, really?' },

    { prompt: 'Tell me something ordinary that amazes when you zoom in',
      detail: 'Zoom in close', segment: 'text', time: 'afternoon',
      shortTitle: 'Zoom in', cta: 'Try this' },

    { prompt: 'Show me a seated twist my whole back will be glad I did',
      detail: 'A seated twist', segment: 'breath', time: 'afternoon',
      shortTitle: 'Seated twist', cta: 'Move' },

    { prompt: 'Tell me the best animal group name I have never heard of',
      detail: 'A name worth knowing', segment: 'fact', time: 'afternoon',
      shortTitle: 'Group name', cta: 'Oh, really?' },

    { prompt: 'Show me a reason to stand for ten seconds then sit down',
      detail: 'Just ten seconds', segment: 'breath', time: 'afternoon',
      shortTitle: 'Stand and sit', cta: 'Move' },

    { prompt: 'Tell me something about the afternoon sky that changes',
      detail: 'Never the same', segment: 'text', time: 'afternoon',
      shortTitle: 'Today\'s sky', cta: 'Look up' },

    { prompt: 'Show me a human hand fact that is strangely unbelievable',
      detail: 'Hand facts', segment: 'fact', time: 'afternoon',
      shortTitle: 'Hand truth', cta: 'Oh, really?' },

    { prompt: 'Tell me a song that makes midday feel like a slow stroll',
      detail: 'A slow stroll', segment: 'song', time: 'afternoon',
      shortTitle: 'Slow stroll', cta: 'Play it' },

    { prompt: 'Show me a posture shift so easy it barely counts at all',
      detail: 'Barely counts', segment: 'breath', time: 'afternoon',
      shortTitle: 'Tiny shift', cta: 'Move' },

    { prompt: 'Tell me how my eyes see color in a way that sounds unreal',
      detail: 'Color fiction', segment: 'fact', time: 'afternoon',
      shortTitle: 'Color trick', cta: 'Oh, really?' },

    { prompt: 'Show me a place where something truly strange happens daily',
      detail: 'Daily strangeness', segment: 'text', time: 'afternoon',
      shortTitle: 'Strange place', cta: 'Try this' },

    { prompt: 'Tell me a few things that are surprisingly recent inventions',
      detail: 'Newer than you think', segment: 'list', time: 'afternoon',
      shortTitle: 'Recent things', cta: 'Go on' },

    { prompt: 'Show me a neck roll so slow it becomes something else',
      detail: 'Slow becomes new', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow roll', cta: 'Move' },

    { prompt: 'Tell me about an ocean creature that defies all belief',
      detail: 'Deep sea wonder', segment: 'fact', time: 'afternoon',
      shortTitle: 'Ocean creature', cta: 'Oh, really?' },

    { prompt: 'Show me something about this exact moment that won\'t repeat',
      detail: 'Only this once', segment: 'text', time: 'afternoon',
      shortTitle: 'Never again', cta: 'Try this' },

    { prompt: 'Tell me a song that makes standing at a window exciting',
      detail: 'Window adventure', segment: 'song', time: 'afternoon',
      shortTitle: 'Window song', cta: 'Play it' },

    { prompt: 'Show me something about gravity I took for granted today',
      detail: 'Gravity is wild', segment: 'fact', time: 'afternoon',
      shortTitle: 'Gravity fact', cta: 'Oh, really?' },

    { prompt: 'Tell me a wrist circle so intentional it gets interesting',
      detail: 'Wrist wonder', segment: 'breath', time: 'afternoon',
      shortTitle: 'Wrist circles', cta: 'Move' },

    { prompt: 'Show me something about clouds that makes them feel alive',
      detail: 'Clouds are alive', segment: 'text', time: 'afternoon',
      shortTitle: 'Living clouds', cta: 'Look up' },

    { prompt: 'Tell me about the strangest fruit and why it got that way',
      detail: 'Fruit gone rogue', segment: 'fact', time: 'afternoon',
      shortTitle: 'Strange fruit', cta: 'Oh, really?' },

    { prompt: 'Show me ordinary things that look different under a scope',
      detail: 'Zoomed in beauty', segment: 'list', time: 'afternoon',
      shortTitle: 'Micro world', cta: 'Go on' },

    { prompt: 'Tell me a small thing I could notice now if I looked up',
      detail: 'Look up now', segment: 'text', time: 'afternoon',
      shortTitle: 'Just look up', cta: 'Look up' },

    { prompt: 'Show me a toe exercise that sounds silly but feels great',
      detail: 'Oddly satisfying', segment: 'breath', time: 'afternoon',
      shortTitle: 'Toe thing', cta: 'Move' },

    { prompt: 'Tell me a few sounds worth noticing in the middle of day',
      detail: 'Midday sounds', segment: 'list', time: 'afternoon',
      shortTitle: 'Day sounds', cta: 'Go on' },

    { prompt: 'Show me something about an everyday bird I never knew',
      detail: 'A common bird secret', segment: 'text', time: 'afternoon',
      shortTitle: 'Bird secret', cta: 'Try this' },

    // ── LIFT: Evening — Shedding (20 prompts) ──

    { prompt: 'Tell me a song that feels like the world slowing down',
      detail: 'The world slows', segment: 'song', time: 'evening',
      shortTitle: 'Slowing down', cta: 'Play it' },

    { prompt: 'Show me a night sky fact that changes how I see it tonight',
      detail: 'Look up tonight', segment: 'fact', time: 'evening',
      shortTitle: 'Night sky', cta: 'Oh, really?' },

    { prompt: 'Tell me something that only happens in the sky right now',
      detail: 'This hour only', segment: 'text', time: 'evening',
      shortTitle: 'Evening sky', cta: 'Look up' },

    { prompt: 'Show me a gentle stretch that feels like ending the day',
      detail: 'A closing stretch', segment: 'breath', time: 'evening',
      shortTitle: 'Day behind', cta: 'Move' },

    { prompt: 'Tell me something surprising my brain does while I sleep',
      detail: 'Sleep is wild', segment: 'fact', time: 'evening',
      shortTitle: 'Sleep brain', cta: 'Oh, really?' },

    { prompt: 'Show me something about tonight\'s moon I would not guess',
      detail: 'Moon surprise', segment: 'text', time: 'evening',
      shortTitle: 'Moon fact', cta: 'Look up' },

    { prompt: 'Tell me a song that turns the last hour into something warm',
      detail: 'A warm hour', segment: 'song', time: 'evening',
      shortTitle: 'Last hour', cta: 'Play it' },

    { prompt: 'Show me a star fact that makes them feel nearby now',
      detail: 'Stars feel close', segment: 'fact', time: 'evening',
      shortTitle: 'Close stars', cta: 'Oh, really?' },

    { prompt: 'Tell me something about darkness more beautiful than light',
      detail: 'Darkness is beautiful', segment: 'text', time: 'evening',
      shortTitle: 'Dark beauty', cta: 'Try this' },

    { prompt: 'Show me a jaw release that feels like the day unclenching',
      detail: 'An unclenching', segment: 'breath', time: 'evening',
      shortTitle: 'Jaw release', cta: 'Move' },

    { prompt: 'Tell me a song for watching the very last light disappear',
      detail: 'Last light track', segment: 'song', time: 'evening',
      shortTitle: 'Last light', cta: 'Play it' },

    { prompt: 'Show me something about nighttime sound people overlook',
      detail: 'Night sounds', segment: 'fact', time: 'evening',
      shortTitle: 'Night sounds', cta: 'Oh, really?' },

    { prompt: 'Tell me an evening ritual from another culture I would love',
      detail: 'A world ritual', segment: 'text', time: 'evening',
      shortTitle: 'Evening ritual', cta: 'Try this' },

    { prompt: 'Show me a shoulder move like quietly setting it down',
      detail: 'Setting it down', segment: 'breath', time: 'evening',
      shortTitle: 'Set it down', cta: 'Move' },

    { prompt: 'Tell me how animals settle in together for the night',
      detail: 'Animals at dusk', segment: 'text', time: 'evening',
      shortTitle: 'Settling in', cta: 'Try this' },

    { prompt: 'Show me a song that feels like deciding the day is done',
      detail: 'Day is done', segment: 'song', time: 'evening',
      shortTitle: 'Done now', cta: 'Play it' },

    { prompt: 'Tell me what happens to the sky just after the sun sets',
      detail: 'Post-sunset magic', segment: 'text', time: 'evening',
      shortTitle: 'After sunset', cta: 'Look up' },

    { prompt: 'Show me a breathing pattern that makes exhaling a reward',
      detail: 'A reward exhale', segment: 'breath', time: 'evening',
      shortTitle: 'Reward breath', cta: 'Move' },

    { prompt: 'Tell me a few unexpected things that glow in the dark',
      detail: 'Things that glow', segment: 'list', time: 'evening',
      shortTitle: 'Night glow', cta: 'Go on' },

    { prompt: 'Show me a dreaming fact that makes tonight more interesting',
      detail: 'Dream science', segment: 'fact', time: 'evening',
      shortTitle: 'Dream fact', cta: 'Oh, really?' },

    // ── LIFT: Anytime (15 prompts) ──

    { prompt: 'Tell me about a color in nature that barely looks real',
      detail: 'Unreal colors', segment: 'text', time: 'anytime',
      shortTitle: 'Unreal color', cta: 'Try this' },

    { prompt: 'Show me a body fact I genuinely will never be able to unknow',
      detail: 'Can\'t un-know this', segment: 'fact', time: 'anytime',
      shortTitle: 'Can\'t un-know', cta: 'Oh, really?' },

    { prompt: 'Tell me a side stretch that opens everything effortlessly',
      detail: 'Open it all', segment: 'breath', time: 'anytime',
      shortTitle: 'Side stretch', cta: 'Move' },

    { prompt: 'Show me how plants move in a way that changes everything',
      detail: 'Plants move too', segment: 'fact', time: 'anytime',
      shortTitle: 'Moving plants', cta: 'Oh, really?' },

    { prompt: 'Tell me about a texture near me that deserves more notice',
      detail: 'Touch something new', segment: 'text', time: 'anytime',
      shortTitle: 'Room texture', cta: 'Try this' },

    { prompt: 'Show me a reason to take ten steps in any direction now',
      detail: 'Just ten steps', segment: 'text', time: 'anytime',
      shortTitle: 'Ten steps', cta: 'Move' },

    { prompt: 'Tell me something about an octopus that seems impossible',
      detail: 'Octopus magic', segment: 'fact', time: 'anytime',
      shortTitle: 'Octopus fact', cta: 'Oh, really?' },

    { prompt: 'Show me a quick balance check my whole body quietly enjoys',
      detail: 'A balance check', segment: 'breath', time: 'anytime',
      shortTitle: 'Balance check', cta: 'Move' },

    { prompt: 'Tell me incredible things my body does without being asked',
      detail: 'Without being asked', segment: 'list', time: 'anytime',
      shortTitle: 'Body wonders', cta: 'Go on' },

    { prompt: 'Show me something about sound that makes the world bigger',
      detail: 'Sound travels far', segment: 'fact', time: 'anytime',
      shortTitle: 'Sound fact', cta: 'Oh, really?' },

    { prompt: 'Tell me a sound from this week that is quietly worth saving',
      detail: 'A sound worth keeping', segment: 'text', time: 'anytime',
      shortTitle: 'That sound', cta: 'Try this' },

    { prompt: 'Show me a wrist exercise more satisfying than it looks',
      detail: 'Wrist surprise', segment: 'breath', time: 'anytime',
      shortTitle: 'Wrist thing', cta: 'Move' },

    { prompt: 'Tell me how animals navigate in ways that seem superhuman',
      detail: 'Animal superpowers', segment: 'text', time: 'anytime',
      shortTitle: 'Superpower', cta: 'Try this' },

    { prompt: 'Show me a few things that are surprisingly recent inventions',
      detail: 'Newer than you think', segment: 'list', time: 'anytime',
      shortTitle: 'Recent things', cta: 'Go on' },

    { prompt: 'Tell me a deep breath pattern that somehow feels fun to do',
      detail: 'A fun breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Fun to breathe', cta: 'Move' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // STEADY — "Calm your body" (90 prompts)
  // Formula: [Give/Show me] + [Way to feel physical ease/lightness]
  // Body-first, always. Plain language. ZERO songs.
  // Segment mix: ~30 text, ~50 breath, ~10 list
  // ═══════════════════════════════════════════════════════════════

  steady: [

    // ── STEADY: Morning — Starting (25 prompts) ──

    { prompt: 'Give me three slow breaths before my feet hit floor',
      detail: 'Before the floor', segment: 'breath', time: 'morning',
      shortTitle: 'Three breaths', cta: 'Breathe' },

    { prompt: 'Show me a belly breathing exercise in three rounds',
      detail: 'Belly breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Belly breath', cta: 'Breathe' },

    { prompt: 'Give me a way to notice where my body holds tension',
      detail: 'A morning notice', segment: 'text', time: 'morning',
      shortTitle: 'Morning notice', cta: 'Soften' },

    { prompt: 'Show me how to feel grounded before morning begins',
      detail: 'Grounded first', segment: 'breath', time: 'morning',
      shortTitle: 'Feel grounded', cta: 'Settle in' },

    { prompt: 'Give me a breathing check I can do still lying in bed',
      detail: 'A bed breath', segment: 'breath', time: 'morning',
      shortTitle: 'Still in bed', cta: 'Breathe' },

    { prompt: 'Show me a reminder that nothing needs planning yet',
      detail: 'No rush yet', segment: 'text', time: 'morning',
      shortTitle: 'Not yet', cta: 'Settle in' },

    { prompt: 'Give me a box breathing pattern that calms in one go',
      detail: 'One round only', segment: 'breath', time: 'morning',
      shortTitle: 'Box breath', cta: 'Breathe' },

    { prompt: 'Show me a slow neck roll that clears away yesterday',
      detail: 'Yesterday\'s gone', segment: 'breath', time: 'morning',
      shortTitle: 'Neck release', cta: 'Soften' },

    { prompt: 'Give me a few things my body might love this morning',
      detail: 'A body menu', segment: 'list', time: 'morning',
      shortTitle: 'Morning menu', cta: 'Try this' },

    { prompt: 'Show me a body part that holds on without me knowing',
      detail: 'A hidden spot', segment: 'text', time: 'morning',
      shortTitle: 'Hidden spot', cta: 'Soften' },

    { prompt: 'Give me a calmer way to breathe through just my nose',
      detail: 'Nose-only calm', segment: 'breath', time: 'morning',
      shortTitle: 'Nose breath', cta: 'Breathe' },

    { prompt: 'Show me a gentler way to think about how today could go',
      detail: 'A softer morning', segment: 'text', time: 'morning',
      shortTitle: 'Softer start', cta: 'Settle in' },

    { prompt: 'Give me a warm-hands trick that feels like a small gift',
      detail: 'Warm hands', segment: 'breath', time: 'morning',
      shortTitle: 'Warm hands', cta: 'Try this' },

    { prompt: 'Show me a shoulder roll so slow it becomes something',
      detail: 'Slow on purpose', segment: 'breath', time: 'morning',
      shortTitle: 'Slow rolls', cta: 'Soften' },

    { prompt: 'Give me a doorway stretch that opens my chest quickly',
      detail: 'Open the chest', segment: 'breath', time: 'morning',
      shortTitle: 'Doorway open', cta: 'Try this' },

    { prompt: 'Show me how to move through this hour without rushing',
      detail: 'No rush needed', segment: 'text', time: 'morning',
      shortTitle: 'Unhurried', cta: 'Settle in' },

    { prompt: 'Give me a shoulder release that feels like one exhale',
      detail: 'A shoulder sigh', segment: 'breath', time: 'morning',
      shortTitle: 'Shoulder sigh', cta: 'Let go' },

    { prompt: 'Show me a pressure point in my palm that grounds me',
      detail: 'Palm grounding', segment: 'breath', time: 'morning',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Give me a way to find a muscle holding for no reason',
      detail: 'For no reason', segment: 'text', time: 'morning',
      shortTitle: 'Let it go', cta: 'Soften' },

    { prompt: 'Show me what my slowest breath this morning feels like',
      detail: 'The slowest one', segment: 'breath', time: 'morning',
      shortTitle: 'Slowest breath', cta: 'Breathe' },

    { prompt: 'Give me a grounding trick using just my toes on floor',
      detail: 'Toe grounding', segment: 'breath', time: 'morning',
      shortTitle: 'Toe ground', cta: 'Try this' },

    { prompt: 'Show me what giving this morning permission feels like',
      detail: 'A speed check', segment: 'text', time: 'morning',
      shortTitle: 'Go slow', cta: 'Settle in' },

    { prompt: 'Give me a gentle neck hold that changes everything fast',
      detail: 'Five-second hold', segment: 'breath', time: 'morning',
      shortTitle: 'Neck hold', cta: 'Soften' },

    { prompt: 'Show me a morning body checklist with no fixing needed',
      detail: 'Notice, don\'t fix', segment: 'list', time: 'morning',
      shortTitle: 'Body scan', cta: 'Try this' },

    { prompt: 'Give me three breaths each longer than the one before',
      detail: 'Longer each time', segment: 'breath', time: 'morning',
      shortTitle: 'Grow the breath', cta: 'Breathe' },

    // ── STEADY: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Show me how to drop my shoulders without anyone seeing',
      detail: 'A quiet drop', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulders down', cta: 'Soften' },

    { prompt: 'Give me a quick jaw release barely visible from outside',
      detail: 'A jaw release', segment: 'breath', time: 'afternoon',
      shortTitle: 'Jaw soften', cta: 'Soften' },

    { prompt: 'Show me how to feel my feet on the floor and be still',
      detail: 'Floor connection', segment: 'breath', time: 'afternoon',
      shortTitle: 'Feet on floor', cta: 'Settle in' },

    { prompt: 'Give me a breathing pattern that takes under one minute',
      detail: 'Under one minute', segment: 'breath', time: 'afternoon',
      shortTitle: 'One minute', cta: 'Breathe' },

    { prompt: 'Show me a break that my whole body quietly agrees with',
      detail: 'A body-approved break', segment: 'text', time: 'afternoon',
      shortTitle: 'Body says yes', cta: 'Settle in' },

    { prompt: 'Give me a long exhale that carries something away gently',
      detail: 'Carry it away', segment: 'breath', time: 'afternoon',
      shortTitle: 'Long exhale', cta: 'Let go' },

    { prompt: 'Show me a hand stretch that releases hidden held tension',
      detail: 'Hands open up', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hand stretch', cta: 'Try this' },

    { prompt: 'Give me a posture reset that feels more like a present',
      detail: 'A posture gift', segment: 'breath', time: 'afternoon',
      shortTitle: 'Posture reset', cta: 'Soften' },

    { prompt: 'Show me a few things my body could use right about now',
      detail: 'A midday menu', segment: 'list', time: 'afternoon',
      shortTitle: 'Midday needs', cta: 'Try this' },

    { prompt: 'Give me a way to make my next breaths feel intentional',
      detail: 'Intentional ease', segment: 'breath', time: 'afternoon',
      shortTitle: 'Easy breaths', cta: 'Breathe' },

    { prompt: 'Show me a body part that could use a moment of quiet',
      detail: 'Quiet attention', segment: 'text', time: 'afternoon',
      shortTitle: 'One spot', cta: 'Soften' },

    { prompt: 'Give me a spinal twist I can do without getting up now',
      detail: 'A seated twist', segment: 'breath', time: 'afternoon',
      shortTitle: 'Seated twist', cta: 'Try this' },

    { prompt: 'Show me how to make a glass of water feel like real care',
      detail: 'Mindful water', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow water', cta: 'Settle in' },

    { prompt: 'Give me a sigh that actually releases something held in',
      detail: 'A proper sigh', segment: 'breath', time: 'afternoon',
      shortTitle: 'Real sigh', cta: 'Let go' },

    { prompt: 'Show me a seated hip shift that changes how I feel fast',
      detail: 'A hip shift', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hip shift', cta: 'Try this' },

    { prompt: 'Give me a way to bring attention back to my body gently',
      detail: 'No effort needed', segment: 'text', time: 'afternoon',
      shortTitle: 'Come back', cta: 'Settle in' },

    { prompt: 'Show me a humming breath that is quietly very calming',
      detail: 'Humming calm', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hum breath', cta: 'Breathe' },

    { prompt: 'Give me a two-second hand trick that grounds everything',
      detail: 'A hand ground', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hands now', cta: 'Try this' },

    { prompt: 'Show me what my body has been quietly carrying all day',
      detail: 'Afternoon check', segment: 'text', time: 'afternoon',
      shortTitle: 'Body check', cta: 'Soften' },

    { prompt: 'Give me a chest opener that feels like real breathing room',
      detail: 'Breathing room', segment: 'breath', time: 'afternoon',
      shortTitle: 'Chest open', cta: 'Try this' },

    { prompt: 'Show me how to let my face soften when it feels too tight',
      detail: 'Face softness', segment: 'text', time: 'afternoon',
      shortTitle: 'Soft face', cta: 'Soften' },

    { prompt: 'Give me a three-count exhale I can do between anything',
      detail: 'Between things', segment: 'breath', time: 'afternoon',
      shortTitle: 'Between breath', cta: 'Breathe' },

    { prompt: 'Show me a leg stretch right here my lower back will love',
      detail: 'A leg stretch', segment: 'breath', time: 'afternoon',
      shortTitle: 'Leg stretch', cta: 'Try this' },

    { prompt: 'Give me a gentle way to check in with my body as it is',
      detail: 'Just checking in', segment: 'text', time: 'afternoon',
      shortTitle: 'Just notice', cta: 'Settle in' },

    { prompt: 'Show me a breath where the exhale is twice the inhale',
      detail: 'Long exhale ratio', segment: 'breath', time: 'afternoon',
      shortTitle: 'Double exhale', cta: 'Breathe' },

    { prompt: 'Give me a few body signals quietly asking for a pause',
      detail: 'Your body is talking', segment: 'list', time: 'afternoon',
      shortTitle: 'Body signals', cta: 'Try this' },

    { prompt: 'Show me a palm press under a table that calms my system',
      detail: 'A secret press', segment: 'breath', time: 'afternoon',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Give me a way to feel my spine lengthen without effort',
      detail: 'Easy spine', segment: 'breath', time: 'afternoon',
      shortTitle: 'Spine length', cta: 'Soften' },

    { prompt: 'Show me a breath that feels like it reaches my whole body',
      detail: 'A full breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Full torso', cta: 'Breathe' },

    { prompt: 'Give me a subtle body scan I can run in twenty seconds',
      detail: 'Twenty-second scan', segment: 'list', time: 'afternoon',
      shortTitle: 'Quick scan', cta: 'Try this' },

    // ── STEADY: Evening — Shedding (20 prompts) ──

    { prompt: 'Give me a sigh that helps my whole body feel much lighter',
      detail: 'A real sigh', segment: 'breath', time: 'evening',
      shortTitle: 'Full sigh', cta: 'Let go' },

    { prompt: 'Show me a slow body scan lying down that feels like rest',
      detail: 'Sink right in', segment: 'breath', time: 'evening',
      shortTitle: 'Sink in', cta: 'Settle in' },

    { prompt: 'Give me a breathing pattern built for this time of day',
      detail: 'Evening rhythm', segment: 'breath', time: 'evening',
      shortTitle: 'Evening breath', cta: 'Breathe' },

    { prompt: 'Show me how to let my jaw release everything it carried',
      detail: 'Jaw at night', segment: 'breath', time: 'evening',
      shortTitle: 'Jaw release', cta: 'Soften' },

    { prompt: 'Give me a gentle humming exhale that is deeply calming',
      detail: 'Humming exhale', segment: 'breath', time: 'evening',
      shortTitle: 'Hum out', cta: 'Breathe' },

    { prompt: 'Show me how to make lying down feel truly intentional',
      detail: 'Intentional rest', segment: 'text', time: 'evening',
      shortTitle: 'Lie down well', cta: 'Settle in' },

    { prompt: 'Give me an exhale like gently putting something down',
      detail: 'Put it down', segment: 'breath', time: 'evening',
      shortTitle: 'Set it down', cta: 'Let go' },

    { prompt: 'Show me a leg-heavy exercise that says it is time to rest',
      detail: 'Legs go heavy', segment: 'breath', time: 'evening',
      shortTitle: 'Heavy legs', cta: 'Settle in' },

    { prompt: 'Give me a way to feel my own body weight as grounding',
      detail: 'Weight as comfort', segment: 'text', time: 'evening',
      shortTitle: 'Feel the weight', cta: 'Settle in' },

    { prompt: 'Show me a hand-on-chest breath like a quiet goodnight',
      detail: 'Goodnight breath', segment: 'breath', time: 'evening',
      shortTitle: 'Goodnight', cta: 'Breathe' },

    { prompt: 'Give me a slow shoulder melt that lets today slide away',
      detail: 'Shoulder melt', segment: 'breath', time: 'evening',
      shortTitle: 'Melt down', cta: 'Let go' },

    { prompt: 'Show me gentle things my body might want before sleep',
      detail: 'Pre-sleep gifts', segment: 'list', time: 'evening',
      shortTitle: 'Before sleep', cta: 'Try this' },

    { prompt: 'Give me an eye softening trick that calms things quickly',
      detail: 'Soft eye trick', segment: 'breath', time: 'evening',
      shortTitle: 'Soft eyes', cta: 'Soften' },

    { prompt: 'Show me a breath that feels like slowly dimming lights',
      detail: 'Dimming breath', segment: 'breath', time: 'evening',
      shortTitle: 'Dim the lights', cta: 'Breathe' },

    { prompt: 'Give me a reminder that my body carried me all day long',
      detail: 'A whole day', segment: 'text', time: 'evening',
      shortTitle: 'Carried me', cta: 'Settle in' },

    { prompt: 'Show me a hip release in bed that feels like settling in',
      detail: 'Settle into sand', segment: 'breath', time: 'evening',
      shortTitle: 'Hip settle', cta: 'Soften' },

    { prompt: 'Give me a way to notice my pillow as if for first time',
      detail: 'Pillow moment', segment: 'text', time: 'evening',
      shortTitle: 'Pillow feel', cta: 'Settle in' },

    { prompt: 'Show me a winding-down stretch that asks nothing of me',
      detail: 'Asks for nothing', segment: 'breath', time: 'evening',
      shortTitle: 'Easy stretch', cta: 'Soften' },

    { prompt: 'Give me a few body parts to quietly thank before sleep',
      detail: 'A body thank you', segment: 'list', time: 'evening',
      shortTitle: 'Thank the body', cta: 'Try this' },

    { prompt: 'Show me a breath that turns the exhale into a lullaby',
      detail: 'A lullaby breath', segment: 'breath', time: 'evening',
      shortTitle: 'Lullaby breath', cta: 'Breathe' },

    // ── STEADY: Anytime (15 prompts) ──

    { prompt: 'Give me a five-senses grounding exercise for right now',
      detail: 'Five senses', segment: 'breath', time: 'anytime',
      shortTitle: 'Five senses', cta: 'Try this' },

    { prompt: 'Show me one deep breath that fills my chest and lets go',
      detail: 'One full breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Full breath', cta: 'Breathe' },

    { prompt: 'Give me a way to feel the ground beneath me and be still',
      detail: 'Ground beneath me', segment: 'breath', time: 'anytime',
      shortTitle: 'Feel the floor', cta: 'Settle in' },

    { prompt: 'Show me a cold-water trick that resets how my body feels',
      detail: 'A cold reset', segment: 'text', time: 'anytime',
      shortTitle: 'Cold wrists', cta: 'Try this' },

    { prompt: 'Give me a few signals my body sends when it needs pause',
      detail: 'Body is talking', segment: 'list', time: 'anytime',
      shortTitle: 'Body signals', cta: 'Try this' },

    { prompt: 'Show me a three-six breath pattern for just three rounds',
      detail: 'Three-six breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Three and six', cta: 'Breathe' },

    { prompt: 'Give me a squeeze-and-release for whatever is near me',
      detail: 'Squeeze and let go', segment: 'breath', time: 'anytime',
      shortTitle: 'Squeeze it', cta: 'Try this' },

    { prompt: 'Show me something my body handles beautifully on its own',
      detail: 'Already handled', segment: 'text', time: 'anytime',
      shortTitle: 'Let it work', cta: 'Settle in' },

    { prompt: 'Give me an isometric press I can do with just my palms',
      detail: 'Just your palms', segment: 'breath', time: 'anytime',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Show me a low humming sound that calms from the inside',
      detail: 'Hum from inside', segment: 'breath', time: 'anytime',
      shortTitle: 'Low hum', cta: 'Try this' },

    { prompt: 'Give me a gentle reminder of what my body does not need',
      detail: 'A subtraction', segment: 'text', time: 'anytime',
      shortTitle: 'Drop this', cta: 'Let go' },

    { prompt: 'Show me a ten-second ear trick that brings real quiet',
      detail: 'Ear quiet', segment: 'breath', time: 'anytime',
      shortTitle: 'Cup ears', cta: 'Try this' },

    { prompt: 'Give me a way to soften my gaze without closing my eyes',
      detail: 'A soft gaze', segment: 'text', time: 'anytime',
      shortTitle: 'Soft eyes', cta: 'Soften' },

    { prompt: 'Show me a few things my body could let go of and not miss',
      detail: 'Won\'t miss these', segment: 'list', time: 'anytime',
      shortTitle: 'Let these go', cta: 'Let go' },

    { prompt: 'Give me a breath where the pause at the top matters most',
      detail: 'The pause matters', segment: 'breath', time: 'anytime',
      shortTitle: 'Pause breath', cta: 'Breathe' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SPACE — "Quiet your mind" (90 prompts)
  // Formula: [Tell me/Take me] + [A story/place that feels like a pause]
  // Lowering mental volume via stillness. Slow down.
  // Segment mix: ~38 text, ~25 breath, ~10 fact, ~17 list. ZERO songs.
  // ═══════════════════════════════════════════════════════════════

  space: [

    // ── SPACE: Morning — Starting (25 prompts) ──

    { prompt: 'Take me somewhere quiet where only one thing matters',
      detail: 'Just one thing', segment: 'text', time: 'morning',
      shortTitle: 'Somewhere quiet', cta: 'Read on' },

    { prompt: 'Tell me about a morning where someone decided on less',
      detail: 'Less is more', segment: 'text', time: 'morning',
      shortTitle: 'Less today', cta: 'Read on' },

    { prompt: 'Take me through a brain dump that clears some space',
      detail: 'Clear the deck', segment: 'breath', time: 'morning',
      shortTitle: 'Brain dump', cta: 'Clear it' },

    { prompt: 'Tell me why writing things down changes my thinking',
      detail: 'Writing clears', segment: 'fact', time: 'morning',
      shortTitle: 'Write it down', cta: 'Oh, really?' },

    { prompt: 'Take me where I only ever pick between three things',
      detail: 'Only three choices', segment: 'text', time: 'morning',
      shortTitle: 'Only three', cta: 'Read on' },

    { prompt: 'Tell me about someone who set something heavy down',
      detail: 'A putting-down story', segment: 'text', time: 'morning',
      shortTitle: 'Set it down', cta: 'Read on' },

    { prompt: 'Take me through three breaths with one quiet word each',
      detail: 'Three-word morning', segment: 'breath', time: 'morning',
      shortTitle: 'Three words', cta: 'Breathe' },

    { prompt: 'Tell me a few things I do not owe a single person today',
      detail: 'You don\'t owe these', segment: 'list', time: 'morning',
      shortTitle: 'Don\'t owe', cta: 'Read on' },

    { prompt: 'Take me to a moment where waiting made it all simple',
      detail: 'Simple by waiting', segment: 'text', time: 'morning',
      shortTitle: 'Wait on it', cta: 'Read on' },

    { prompt: 'Tell me a breath where I put each thought somewhere',
      detail: 'Safe containers', segment: 'breath', time: 'morning',
      shortTitle: 'Box it up', cta: 'Try this' },

    { prompt: 'Take me through how many daily thoughts I really have',
      detail: 'A thought stat', segment: 'fact', time: 'morning',
      shortTitle: 'Thought count', cta: 'Oh, really?' },

    { prompt: 'Tell me about a place where there is nothing to plan',
      detail: 'No plan needed', segment: 'text', time: 'morning',
      shortTitle: 'No plans here', cta: 'Read on' },

    { prompt: 'Take me through a breath that erases one thing gently',
      detail: 'Erase one thing', segment: 'breath', time: 'morning',
      shortTitle: 'Erase it', cta: 'Clear it' },

    { prompt: 'Tell me a few questions I do not have to answer yet',
      detail: 'Not today\'s questions', segment: 'list', time: 'morning',
      shortTitle: 'Not today', cta: 'Skip it' },

    { prompt: 'Take me where the first thought of the day floats by',
      detail: 'Let it float by', segment: 'text', time: 'morning',
      shortTitle: 'Float past', cta: 'Read on' },

    { prompt: 'Tell me about a breath for someone I am glad exists',
      detail: 'Glad they exist', segment: 'breath', time: 'morning',
      shortTitle: 'One person', cta: 'Try this' },

    { prompt: 'Take me through a sentence starting with I wish they knew',
      detail: 'A naming moment', segment: 'text', time: 'morning',
      shortTitle: 'I wish', cta: 'Read on' },

    { prompt: 'Tell me about mornings worth protecting from busyness',
      detail: 'Protect the morning', segment: 'list', time: 'morning',
      shortTitle: 'Worth keeping', cta: 'Read on' },

    { prompt: 'Take me through a breath that carries one thought out',
      detail: 'One thought, gone', segment: 'breath', time: 'morning',
      shortTitle: 'Breathe it out', cta: 'Breathe' },

    { prompt: 'Tell me about a place where the morning almost hums',
      detail: 'A still morning', segment: 'text', time: 'morning',
      shortTitle: 'Still hum', cta: 'Read on' },

    { prompt: 'Take me to a morning where nothing is expected of me',
      detail: 'Nothing expected', segment: 'text', time: 'morning',
      shortTitle: 'No expectations', cta: 'Read on' },

    { prompt: 'Tell me why the first morning thought is rarely right',
      detail: 'Morning thought filter', segment: 'fact', time: 'morning',
      shortTitle: 'First thought', cta: 'Oh, really?' },

    { prompt: 'Take me through a breath where the exhale is the answer',
      detail: 'Ask and answer', segment: 'breath', time: 'morning',
      shortTitle: 'Question breath', cta: 'Breathe' },

    { prompt: 'Tell me a few things I could say no to and feel light',
      detail: 'Lighter no\'s', segment: 'list', time: 'morning',
      shortTitle: 'Say no', cta: 'Read on' },

    { prompt: 'Take me where all the decisions can wait until I am ready',
      detail: 'Decisions can wait', segment: 'text', time: 'morning',
      shortTitle: 'Not yet', cta: 'Read on' },

    // ── SPACE: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Tell me about someone who put something heavy down',
      detail: 'A letting-go story', segment: 'text', time: 'afternoon',
      shortTitle: 'Put it down', cta: 'Read on' },

    { prompt: 'Take me through a breath like stepping into silence',
      detail: 'A silent room', segment: 'breath', time: 'afternoon',
      shortTitle: 'Silent room', cta: 'Breathe' },

    { prompt: 'Tell me about a place where midday is the stillest',
      detail: 'Midday stillness', segment: 'text', time: 'afternoon',
      shortTitle: 'Still midday', cta: 'Read on' },

    { prompt: 'Take me where decisions wait and nothing is expected',
      detail: 'Nothing expected', segment: 'text', time: 'afternoon',
      shortTitle: 'Can wait', cta: 'Read on' },

    { prompt: 'Tell me a few things that are really just small bumps',
      detail: 'Just small bumps', segment: 'list', time: 'afternoon',
      shortTitle: 'Just bumps', cta: 'Read on' },

    { prompt: 'Take me through a breath where I name it then let go',
      detail: 'Name and release', segment: 'breath', time: 'afternoon',
      shortTitle: 'Name it', cta: 'Clear it' },

    { prompt: 'Tell me about a moment where doing nothing was enough',
      detail: 'Nothing was enough', segment: 'text', time: 'afternoon',
      shortTitle: 'Enough', cta: 'Read on' },

    { prompt: 'Take me where everything slowed and nobody minded it',
      detail: 'Nobody minded', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow scene', cta: 'Read on' },

    { prompt: 'Tell me a few heavy thoughts I could set aside for now',
      detail: 'Set these aside', segment: 'list', time: 'afternoon',
      shortTitle: 'For now', cta: 'Skip it' },

    { prompt: 'Take me through a breath where the pause is the point',
      detail: 'The pause is it', segment: 'breath', time: 'afternoon',
      shortTitle: 'Bottom pause', cta: 'Breathe' },

    { prompt: 'Tell me about a place so quiet thoughts feel optional',
      detail: 'Thoughts optional', segment: 'text', time: 'afternoon',
      shortTitle: 'Quiet place', cta: 'Read on' },

    { prompt: 'Take me to a park bench where sitting is the only plot',
      detail: 'A bench story', segment: 'text', time: 'afternoon',
      shortTitle: 'Bench sit', cta: 'Read on' },

    { prompt: 'Tell me a few kind ways to say not right now to someone',
      detail: 'Kind boundaries', segment: 'list', time: 'afternoon',
      shortTitle: 'Kind no', cta: 'Read on' },

    { prompt: 'Take me through a one-breath reset between two moments',
      detail: 'Between moments', segment: 'breath', time: 'afternoon',
      shortTitle: 'Micro reset', cta: 'Try this' },

    { prompt: 'Tell me about a library where silence is like treasure',
      detail: 'Silence as treasure', segment: 'text', time: 'afternoon',
      shortTitle: 'Library quiet', cta: 'Read on' },

    { prompt: 'Take me through an exhale that shrinks my mental list',
      detail: 'Shrinking list', segment: 'breath', time: 'afternoon',
      shortTitle: 'Smaller list', cta: 'Clear it' },

    { prompt: 'Tell me why the brain benefits from doing less midday',
      detail: 'Less is smarter', segment: 'fact', time: 'afternoon',
      shortTitle: 'Do less', cta: 'Oh, really?' },

    { prompt: 'Take me where the air is so clean that thinking is easy',
      detail: 'Clear air, clear mind', segment: 'text', time: 'afternoon',
      shortTitle: 'Clean air', cta: 'Read on' },

    { prompt: 'Tell me a few things that are fine to leave unfinished',
      detail: 'Fine unfinished', segment: 'list', time: 'afternoon',
      shortTitle: 'Leave it', cta: 'Skip it' },

    { prompt: 'Take me through a breath where my mind is a passenger',
      detail: 'Passenger mode', segment: 'breath', time: 'afternoon',
      shortTitle: 'Passenger', cta: 'Breathe' },

    { prompt: 'Tell me about a river so slow it looks like it stopped',
      detail: 'A slow river', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow river', cta: 'Read on' },

    { prompt: 'Take me somewhere where the only job is watching gently',
      detail: 'Watch something gentle', segment: 'text', time: 'afternoon',
      shortTitle: 'Just watch', cta: 'Read on' },

    { prompt: 'Tell me why switching tasks costs my brain so much more',
      detail: 'Switching costs', segment: 'fact', time: 'afternoon',
      shortTitle: 'Switch tax', cta: 'Oh, really?' },

    { prompt: 'Take me through three breaths that each get quieter',
      detail: 'Quieter each time', segment: 'breath', time: 'afternoon',
      shortTitle: 'Getting quiet', cta: 'Breathe' },

    { prompt: 'Tell me about a tiny garden built just for sitting still',
      detail: 'A sitting place', segment: 'text', time: 'afternoon',
      shortTitle: 'Just sit', cta: 'Read on' },

    { prompt: 'Take me through a scene where thoughts are leaves on water',
      detail: 'Leaves on water', segment: 'breath', time: 'afternoon',
      shortTitle: 'Leaf thoughts', cta: 'Try this' },

    { prompt: 'Tell me a few permissions I could give myself right now',
      detail: 'Permission slips', segment: 'list', time: 'afternoon',
      shortTitle: 'Permissions', cta: 'Read on' },

    { prompt: 'Take me to an afternoon where my only task is presence',
      detail: 'Just being here', segment: 'text', time: 'afternoon',
      shortTitle: 'Just present', cta: 'Read on' },

    { prompt: 'Tell me why a gap between thoughts helps my brain work',
      detail: 'Gaps help', segment: 'fact', time: 'afternoon',
      shortTitle: 'Brain gaps', cta: 'Oh, really?' },

    { prompt: 'Take me through a breath where my mind can wander free',
      detail: 'Wander freely', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let it wander', cta: 'Breathe' },

    // ── SPACE: Evening — Shedding (20 prompts) ──

    { prompt: 'Take me to an evening where nothing is waiting for me',
      detail: 'Nothing waiting', segment: 'text', time: 'evening',
      shortTitle: 'Free evening', cta: 'Read on' },

    { prompt: 'Tell me a few thoughts safe to release before I sleep',
      detail: 'Safe to release', segment: 'list', time: 'evening',
      shortTitle: 'Let these go', cta: 'Read on' },

    { prompt: 'Take me through a breath that gently closes today off',
      detail: 'Close the door', segment: 'breath', time: 'evening',
      shortTitle: 'Door closed', cta: 'Breathe' },

    { prompt: 'Tell me about a place where evening feels truly sacred',
      detail: 'Sacred evenings', segment: 'text', time: 'evening',
      shortTitle: 'Sacred time', cta: 'Read on' },

    { prompt: 'Take me where the only sound is the kind that brings sleep',
      detail: 'Sleepy sounds', segment: 'text', time: 'evening',
      shortTitle: 'Sleep sounds', cta: 'Read on' },

    { prompt: 'Tell me why sleeping on a problem helps the brain solve it',
      detail: 'Sleep solves things', segment: 'fact', time: 'evening',
      shortTitle: 'Sleep on it', cta: 'Oh, really?' },

    { prompt: 'Take me through an exhale carrying today\'s last thought',
      detail: 'Last thought out', segment: 'breath', time: 'evening',
      shortTitle: 'Last exhale', cta: 'Let it go' },

    { prompt: 'Tell me a few things my mind does not need to solve now',
      detail: 'Stop solving', segment: 'list', time: 'evening',
      shortTitle: 'Not tonight', cta: 'Skip it' },

    { prompt: 'Take me to a dusk field where the sky does the talking',
      detail: 'Sky at dusk', segment: 'text', time: 'evening',
      shortTitle: 'Dusk field', cta: 'Read on' },

    { prompt: 'Tell me one small thing that went quietly well today',
      detail: 'Almost missed it', segment: 'text', time: 'evening',
      shortTitle: 'Went well', cta: 'Read on' },

    { prompt: 'Take me through a breath that dims the volume slowly',
      detail: 'Volume down', segment: 'breath', time: 'evening',
      shortTitle: 'Turn it down', cta: 'Breathe' },

    { prompt: 'Tell me why nobody remembers the awkward thing I said',
      detail: 'They already forgot', segment: 'fact', time: 'evening',
      shortTitle: 'They forgot', cta: 'Let it go' },

    { prompt: 'Take me to a view of today where most of it was fine',
      detail: 'Mostly fine', segment: 'text', time: 'evening',
      shortTitle: 'Zoomed out', cta: 'Read on' },

    { prompt: 'Tell me a few gentle thoughts light enough for sleep',
      detail: 'Carry these lightly', segment: 'list', time: 'evening',
      shortTitle: 'Light thoughts', cta: 'Read on' },

    { prompt: 'Take me through a wind-down breath under sixty seconds',
      detail: 'Under a minute', segment: 'breath', time: 'evening',
      shortTitle: 'Quick wind-down', cta: 'Try this' },

    { prompt: 'Tell me about an evening somewhere that sounds so still',
      detail: 'A still evening', segment: 'text', time: 'evening',
      shortTitle: 'Somewhere still', cta: 'Read on' },

    { prompt: 'Take me through a breath with someone kind sitting near',
      detail: 'Someone nearby', segment: 'breath', time: 'evening',
      shortTitle: 'Not alone', cta: 'Breathe' },

    { prompt: 'Tell me a few things that are fine to leave for morning',
      detail: 'Tomorrow\'s list', segment: 'list', time: 'evening',
      shortTitle: 'Leave it', cta: 'Skip it' },

    { prompt: 'Take me where every arriving thought is sent gently off',
      detail: 'Thoughts to bed', segment: 'text', time: 'evening',
      shortTitle: 'Bedtime thoughts', cta: 'Read on' },

    { prompt: 'Tell me a reason to stop replaying today and let it be',
      detail: 'Let it be done', segment: 'text', time: 'evening',
      shortTitle: 'It\'s done', cta: 'Let it go' },

    // ── SPACE: Anytime (15 prompts) ──

    { prompt: 'Tell me why the brain replays things even when I say stop',
      detail: 'The replay loop', segment: 'fact', time: 'anytime',
      shortTitle: 'On repeat', cta: 'Oh, really?' },

    { prompt: 'Take me through three exhales releasing three thoughts',
      detail: 'Three thoughts out', segment: 'breath', time: 'anytime',
      shortTitle: 'Three exhales', cta: 'Breathe' },

    { prompt: 'Tell me about a place where thoughts float by and never land',
      detail: 'Nothing lands', segment: 'text', time: 'anytime',
      shortTitle: 'Float by', cta: 'Read on' },

    { prompt: 'Take me to a pause where I don\'t know yet is enough',
      detail: 'Don\'t know yet', segment: 'text', time: 'anytime',
      shortTitle: 'Don\'t know', cta: 'Read on' },

    { prompt: 'Tell me why the feeling and the truth are not the same',
      detail: 'Feeling vs fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Not the same', cta: 'Oh, really?' },

    { prompt: 'Take me through a breath for what I can and cannot hold',
      detail: 'Control breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Control sort', cta: 'Breathe' },

    { prompt: 'Tell me about a moment where changing my mind was relief',
      detail: 'Changed my mind', segment: 'text', time: 'anytime',
      shortTitle: 'Change it', cta: 'Read on' },

    { prompt: 'Take me through a one-breath reset anytime and anywhere',
      detail: 'A micro-reset', segment: 'breath', time: 'anytime',
      shortTitle: 'Tiny reset', cta: 'Try this' },

    { prompt: 'Tell me a few kind ways to set a boundary without guilt',
      detail: 'Boundary phrases', segment: 'list', time: 'anytime',
      shortTitle: 'Kind limits', cta: 'Read on' },

    { prompt: 'Take me to a reminder that I can take up my own space',
      detail: 'Take up space', segment: 'text', time: 'anytime',
      shortTitle: 'My space', cta: 'Read on' },

    { prompt: 'Tell me why rejection hurts and why that is so normal',
      detail: 'Rejection is real', segment: 'fact', time: 'anytime',
      shortTitle: 'It\'s real', cta: 'Oh, really?' },

    { prompt: 'Take me through a snow-globe pause where all is settling',
      detail: 'Let it settle', segment: 'breath', time: 'anytime',
      shortTitle: 'Snow globe', cta: 'Try this' },

    { prompt: 'Tell me a few thoughts worth questioning before believing',
      detail: 'Question these', segment: 'list', time: 'anytime',
      shortTitle: 'Question it', cta: 'Read on' },

    { prompt: 'Take me to a reminder that my version is just one view',
      detail: 'One version', segment: 'text', time: 'anytime',
      shortTitle: 'One story', cta: 'Read on' },

    { prompt: 'Tell me a breath pattern that says I will figure this out',
      detail: 'I will figure it out', segment: 'breath', time: 'anytime',
      shortTitle: 'I will', cta: 'Breathe' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SMALL — "Gift yourself" (90 prompts)
  // Formula: [Give/Tell me] + [Gentle words/a reason to feel good]
  // Radical, externalized self-compassion. Feel held.
  // Segment mix: ~38 text, ~15 breath, ~12 fact, ~15 list, ~10 song
  // ═══════════════════════════════════════════════════════════════

  small: [

    // ── SMALL: Morning — Starting (25 prompts) ──

    { prompt: 'Give me a small, warm reason to feel good right now',
      detail: 'For no reason', segment: 'text', time: 'morning',
      shortTitle: 'For nothing', cta: 'Go on' },

    { prompt: 'Tell me how to make my morning sip feel like ritual',
      detail: 'A slow first sip', segment: 'text', time: 'morning',
      shortTitle: 'Slow sip', cta: 'Try it' },

    { prompt: 'Give me a song like a warm hand placed gently on me',
      detail: 'A warm hand', segment: 'song', time: 'morning',
      shortTitle: 'Warm hand', cta: 'Play it' },

    { prompt: 'Tell me a tiny text I could send someone right now',
      detail: 'A small reach-out', segment: 'text', time: 'morning',
      shortTitle: 'Send it', cta: 'Do it' },

    { prompt: 'Give me a thirty-second thing with a window and air',
      detail: 'Fresh air gift', segment: 'text', time: 'morning',
      shortTitle: 'Window air', cta: 'Try it' },

    { prompt: 'Tell me what my brain does when I smile for no reason',
      detail: 'Smile science', segment: 'fact', time: 'morning',
      shortTitle: 'Smile trick', cta: 'Oh, really?' },

    { prompt: 'Give me a reminder about a luxury I keep forgetting',
      detail: 'Already yours', segment: 'text', time: 'morning',
      shortTitle: 'Small luxury', cta: 'Do it' },

    { prompt: 'Tell me a few kind things I could easily do by noon',
      detail: 'Before noon kindness', segment: 'list', time: 'morning',
      shortTitle: 'Before noon', cta: 'Go on' },

    { prompt: 'Give me a breath like wrapping my arms around myself',
      detail: 'A self-hug breath', segment: 'breath', time: 'morning',
      shortTitle: 'Self-hug', cta: 'Breathe' },

    { prompt: 'Tell me something kind to say next time I see a mirror',
      detail: 'Mirror words', segment: 'text', time: 'morning',
      shortTitle: 'Mirror kind', cta: 'Try it' },

    { prompt: 'Give me a scent that could gently shift this morning',
      detail: 'A scent shift', segment: 'fact', time: 'morning',
      shortTitle: 'Morning scent', cta: 'Oh, really?' },

    { prompt: 'Tell me a song that makes getting dressed feel special',
      detail: 'Getting-dressed song', segment: 'song', time: 'morning',
      shortTitle: 'Getting ready', cta: 'Play it' },

    { prompt: 'Give me a kind note to leave for my future self today',
      detail: 'A note ahead', segment: 'text', time: 'morning',
      shortTitle: 'Note to self', cta: 'Do it' },

    { prompt: 'Tell me a cat-like stretch I can do before leaving bed',
      detail: 'A morning stretch', segment: 'breath', time: 'morning',
      shortTitle: 'Cat stretch', cta: 'Try it' },

    { prompt: 'Give me five minutes of something kind for morning-me',
      detail: 'Five kind minutes', segment: 'text', time: 'morning',
      shortTitle: 'Five minutes', cta: 'Try it' },

    { prompt: 'Tell me a few tiny morning pleasures most people miss',
      detail: 'Easy to miss', segment: 'list', time: 'morning',
      shortTitle: 'Tiny pleasures', cta: 'Go on' },

    { prompt: 'Give me a surprising science-backed reason to laugh',
      detail: 'Laughter science', segment: 'fact', time: 'morning',
      shortTitle: 'Laugh more', cta: 'Oh, really?' },

    { prompt: 'Tell me a phone-free experiment for my first minutes',
      detail: 'Phone-free start', segment: 'text', time: 'morning',
      shortTitle: 'Phone away', cta: 'Try it' },

    { prompt: 'Give me a scent-breath that anchors me right here now',
      detail: 'Scent anchor', segment: 'breath', time: 'morning',
      shortTitle: 'Smell the air', cta: 'Breathe' },

    { prompt: 'Tell me something nice I could do for no reason today',
      detail: 'No reason needed', segment: 'text', time: 'morning',
      shortTitle: 'No reason', cta: 'Do it' },

    { prompt: 'Give me a small favor that tonight-me would thank for',
      detail: 'A future-you gift', segment: 'text', time: 'morning',
      shortTitle: 'Future favor', cta: 'Do it' },

    { prompt: 'Tell me why walking barefoot on grass feels so good',
      detail: 'Barefoot science', segment: 'fact', time: 'morning',
      shortTitle: 'Go barefoot', cta: 'Oh, really?' },

    { prompt: 'Give me a song that makes mornings feel like a movie',
      detail: 'Movie morning', segment: 'song', time: 'morning',
      shortTitle: 'Movie scene', cta: 'Play it' },

    { prompt: 'Tell me three breaths for things I am looking forward to',
      detail: 'Looking forward', segment: 'breath', time: 'morning',
      shortTitle: 'Look forward', cta: 'Breathe' },

    { prompt: 'Give me a reminder to use the nice one because I can',
      detail: 'Use the good stuff', segment: 'text', time: 'morning',
      shortTitle: 'Good stuff', cta: 'Do it' },

    // ── SMALL: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Tell me kind words for next time I catch my reflection',
      detail: 'Afternoon mirror', segment: 'text', time: 'afternoon',
      shortTitle: 'Kind words', cta: 'Try it' },

    { prompt: 'Give me thirty seconds of free warmth I can stand in',
      detail: 'Free warmth', segment: 'text', time: 'afternoon',
      shortTitle: 'Find warmth', cta: 'Try it' },

    { prompt: 'Tell me a song that turns my afternoon into a stroll',
      detail: 'A gentle stroll', segment: 'song', time: 'afternoon',
      shortTitle: 'Afternoon walk', cta: 'Play it' },

    { prompt: 'Give me a tiny creative act I can finish in a minute',
      detail: 'Under a minute', segment: 'text', time: 'afternoon',
      shortTitle: 'Quick create', cta: 'Try it' },

    { prompt: 'Tell me something surprising about being kind to myself',
      detail: 'Kindness science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Self-kindness', cta: 'Oh, really?' },

    { prompt: 'Give me a two-minute treat I have right this second',
      detail: 'Instant treats', segment: 'list', time: 'afternoon',
      shortTitle: 'Quick treats', cta: 'Go on' },

    { prompt: 'Tell me a guilty pleasure song and let me sing along',
      detail: 'A guilty pleasure', segment: 'song', time: 'afternoon',
      shortTitle: 'Guilty chorus', cta: 'Play it' },

    { prompt: 'Give me a way to eat slowly and make it a small moment',
      detail: 'Slow and sweet', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow bite', cta: 'Try it' },

    { prompt: 'Tell me a tiny hand ritual that becomes real self-care',
      detail: 'Hand ritual', segment: 'text', time: 'afternoon',
      shortTitle: 'Hand care', cta: 'Try it' },

    { prompt: 'Give me three breaths as a micro-treat for my attention',
      detail: 'Attention rest', segment: 'breath', time: 'afternoon',
      shortTitle: 'Attention rest', cta: 'Breathe' },

    { prompt: 'Tell me things that count as self-care even if tiny',
      detail: 'Small things count', segment: 'list', time: 'afternoon',
      shortTitle: 'It counts', cta: 'Go on' },

    { prompt: 'Tell me why gently touching my own arm does something',
      detail: 'Touch science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Gentle touch', cta: 'Oh, really?' },

    { prompt: 'Tell me to find a phone photo that makes me smile now',
      detail: 'A real memory', segment: 'text', time: 'afternoon',
      shortTitle: 'Old photo', cta: 'Do it' },

    { prompt: 'Give me a small kindness for a stranger in ten seconds',
      detail: 'A micro-kindness', segment: 'text', time: 'afternoon',
      shortTitle: 'Small kindness', cta: 'Do it' },

    { prompt: 'Tell me a song that makes me feel like things are okay',
      detail: 'A nod-along song', segment: 'song', time: 'afternoon',
      shortTitle: 'Nod along', cta: 'Play it' },

    { prompt: 'Give me a tiny adventure with a random page of a book',
      detail: 'Random page magic', segment: 'text', time: 'afternoon',
      shortTitle: 'Random page', cta: 'Try it' },

    { prompt: 'Tell me a few free things that feel weirdly expensive',
      detail: 'Free luxury', segment: 'list', time: 'afternoon',
      shortTitle: 'Free luxury', cta: 'Go on' },

    { prompt: 'Give me a mindful sip where the sipping is everything',
      detail: 'Just the sip', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow water', cta: 'Try it' },

    { prompt: 'Tell me why nostalgia is actually good and not just soft',
      detail: 'Nostalgia science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Happy memory', cta: 'Oh, really?' },

    { prompt: 'Give me one minute at a window with nothing but the view',
      detail: 'A window minute', segment: 'text', time: 'afternoon',
      shortTitle: 'Window gaze', cta: 'Try it' },

    { prompt: 'Tell me five breaths for small things that went right',
      detail: 'Small wins', segment: 'breath', time: 'afternoon',
      shortTitle: 'Small wins', cta: 'Breathe' },

    { prompt: 'Give me permission to buy the tiny treat I always skip',
      detail: 'The tiny treat', segment: 'text', time: 'afternoon',
      shortTitle: 'Tiny treat', cta: 'Do it' },

    { prompt: 'Tell me nice things I could do for future-me by tonight',
      detail: 'Gifts for later', segment: 'list', time: 'afternoon',
      shortTitle: 'Future favors', cta: 'Go on' },

    { prompt: 'Give me one tiny thing to tidy that brings a bit of order',
      detail: 'Micro-organizing', segment: 'text', time: 'afternoon',
      shortTitle: 'Straighten one', cta: 'Try it' },

    { prompt: 'Tell me why spending on experiences beats buying things',
      detail: 'Experiences win', segment: 'fact', time: 'afternoon',
      shortTitle: 'Buy moments', cta: 'Oh, really?' },

    { prompt: 'Give me a grounding breath that is also a treat for me',
      detail: 'Nose treat', segment: 'breath', time: 'afternoon',
      shortTitle: 'Nose breath', cta: 'Breathe' },

    { prompt: 'Tell me a thirty-second phone change I will notice often',
      detail: 'A small swap', segment: 'text', time: 'afternoon',
      shortTitle: 'Phone change', cta: 'Do it' },

    { prompt: 'Give me a song I loved at fourteen and let me feel that',
      detail: 'Age fourteen', segment: 'song', time: 'afternoon',
      shortTitle: 'Fourteen again', cta: 'Play it' },

    { prompt: 'Tell me things in this world always worth stopping for',
      detail: 'Worth pausing for', segment: 'list', time: 'afternoon',
      shortTitle: 'Pause for these', cta: 'Go on' },

    { prompt: 'Give me a stretch that feels like taking up real space',
      detail: 'Take up space', segment: 'breath', time: 'afternoon',
      shortTitle: 'Arms wide', cta: 'Try it' },

    // ── SMALL: Evening — Shedding (20 prompts) ──

    { prompt: 'Give me gentle words for someone who gave a lot today',
      detail: 'After a full day', segment: 'text', time: 'evening',
      shortTitle: 'Gentle words', cta: 'Go on' },

    { prompt: 'Tell me a song that feels like being tucked in warmly',
      detail: 'A tucked-in song', segment: 'song', time: 'evening',
      shortTitle: 'Tucked in', cta: 'Play it' },

    { prompt: 'Give me something small to light that changes the room',
      detail: 'A small flame', segment: 'text', time: 'evening',
      shortTitle: 'Light one', cta: 'Do it' },

    { prompt: 'Tell me to wear the softest thing I own and just be',
      detail: 'Comfort dressing', segment: 'text', time: 'evening',
      shortTitle: 'Soft clothes', cta: 'Do it' },

    { prompt: 'Give me a warm drink in both hands and say that is all',
      detail: 'Both hands', segment: 'text', time: 'evening',
      shortTitle: 'Warm hands', cta: 'Try it' },

    { prompt: 'Tell me something about waiting that puts things in view',
      detail: 'No waiting tonight', segment: 'fact', time: 'evening',
      shortTitle: 'No waiting', cta: 'Oh, really?' },

    { prompt: 'Give me small evening rituals that feel like a blanket',
      detail: 'Cozy rituals', segment: 'list', time: 'evening',
      shortTitle: 'Cozy list', cta: 'Go on' },

    { prompt: 'Tell me to take extra minutes of warmth just because',
      detail: 'Extra warmth', segment: 'text', time: 'evening',
      shortTitle: 'Longer shower', cta: 'Do it' },

    { prompt: 'Give me one page of a book and say that still counts',
      detail: 'One page counts', segment: 'text', time: 'evening',
      shortTitle: 'One page', cta: 'Try it' },

    { prompt: 'Tell me a warm-palms-over-eyes gift from me to myself',
      detail: 'Warm eye rest', segment: 'breath', time: 'evening',
      shortTitle: 'Warm eyes', cta: 'Try it' },

    { prompt: 'Give me a scientific reason to pile on all the blankets',
      detail: 'Blanket science', segment: 'fact', time: 'evening',
      shortTitle: 'Pile blankets', cta: 'Oh, really?' },

    { prompt: 'Tell me a song for doing the dishes and feeling at peace',
      detail: 'Peaceful dishes', segment: 'song', time: 'evening',
      shortTitle: 'Dish peace', cta: 'Play it' },

    { prompt: 'Give me a two-minute call idea that could change my night',
      detail: 'A voice note', segment: 'text', time: 'evening',
      shortTitle: 'Call someone', cta: 'Do it' },

    { prompt: 'Tell me tiny luxuries that cost nothing and are all mine',
      detail: 'Free tonight', segment: 'list', time: 'evening',
      shortTitle: 'Free luxuries', cta: 'Go on' },

    { prompt: 'Give me a slow hand ritual that becomes pure gentleness',
      detail: 'Hand gentleness', segment: 'breath', time: 'evening',
      shortTitle: 'Hand care', cta: 'Try it' },

    { prompt: 'Tell me one specific thing that deserves love tonight',
      detail: 'One thing tonight', segment: 'text', time: 'evening',
      shortTitle: 'Notice one', cta: 'Do it' },

    { prompt: 'Give me permission to spend five minutes on baby animals',
      detail: 'Cute animal science', segment: 'fact', time: 'evening',
      shortTitle: 'Baby animals', cta: 'Oh, really?' },

    { prompt: 'Tell me a phone-free experiment for my last hour tonight',
      detail: 'A phone-free hour', segment: 'text', time: 'evening',
      shortTitle: 'Phone down', cta: 'Try it' },

    { prompt: 'Give me five breaths of warmth in and the day breathed out',
      detail: 'Warmth in, day out', segment: 'breath', time: 'evening',
      shortTitle: 'Day out', cta: 'Breathe' },

    { prompt: 'Tell me things that make a bed more inviting tonight',
      detail: 'A better bed', segment: 'list', time: 'evening',
      shortTitle: 'Better bed', cta: 'Go on' },

    // ── SMALL: Anytime (15 prompts) ──

    { prompt: 'Give me small things that always make everything better',
      detail: 'The small things', segment: 'list', time: 'anytime',
      shortTitle: 'Always better', cta: 'Go on' },

    { prompt: 'Tell me why crying is one of the most healing things',
      detail: 'Crying is healing', segment: 'fact', time: 'anytime',
      shortTitle: 'Let it out', cta: 'Oh, really?' },

    { prompt: 'Give me a song that feels like being wrapped in warmth',
      detail: 'A warm wrap', segment: 'song', time: 'anytime',
      shortTitle: 'Warm song', cta: 'Play it' },

    { prompt: 'Tell me three breaths sending kind thoughts to loved ones',
      detail: 'Kindness breathing', segment: 'breath', time: 'anytime',
      shortTitle: 'Kind breaths', cta: 'Breathe' },

    { prompt: 'Give me permission to eat something purely for pleasure',
      detail: 'Pleasure is good', segment: 'text', time: 'anytime',
      shortTitle: 'Eat for joy', cta: 'Do it' },

    { prompt: 'Tell me the name for the smell of rain and why it exists',
      detail: 'Rain has a name', segment: 'fact', time: 'anytime',
      shortTitle: 'Rain smell', cta: 'Oh, really?' },

    { prompt: 'Give me a compliment I could hand to someone for free',
      detail: 'A free gift', segment: 'text', time: 'anytime',
      shortTitle: 'Give it', cta: 'Do it' },

    { prompt: 'Tell me about a texture I love and how it would feel now',
      detail: 'A soft texture', segment: 'breath', time: 'anytime',
      shortTitle: 'Soft touch', cta: 'Try it' },

    { prompt: 'Give me comforts I can reach right now without spending',
      detail: 'Free comfort', segment: 'list', time: 'anytime',
      shortTitle: 'Free comforts', cta: 'Go on' },

    { prompt: 'Tell me why music and chocolate do the same thing inside',
      detail: 'Music is chocolate', segment: 'fact', time: 'anytime',
      shortTitle: 'Brain chocolate', cta: 'Oh, really?' },

    { prompt: 'Give me a song that makes me feel held in an empty room',
      detail: 'Held by a song', segment: 'song', time: 'anytime',
      shortTitle: 'Feel held', cta: 'Play it' },

    { prompt: 'Tell me one tiny thing my future self would thank me for',
      detail: 'Future thanks', segment: 'text', time: 'anytime',
      shortTitle: 'Future thanks', cta: 'Do it' },

    { prompt: 'Give me a gentle arm squeeze my body will still believe',
      detail: 'Self-comfort touch', segment: 'breath', time: 'anytime',
      shortTitle: 'Arm squeeze', cta: 'Try it' },

    { prompt: 'Tell me ways to turn an ordinary moment into something',
      detail: 'Ordinary to special', segment: 'list', time: 'anytime',
      shortTitle: 'Make it special', cta: 'Go on' },

    { prompt: 'Give me a reason to feel good about being right here now',
      detail: 'Right here is good', segment: 'text', time: 'anytime',
      shortTitle: 'Right here', cta: 'Go on' },
  ],
}

// ── Time-of-day helper ──

export function getTimeOfDay(date = new Date()) {
  const h = date.getHours()
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

// ── Deterministic date-based rotation (DJB2 hash) ──

export function dateSeed(str) {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash)
}

// ── Day × Time category order matrix ──

const categoryOrderMatrix = {
  // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  0: { morning: ['steady','space','small','lift'], afternoon: ['space','small','steady','lift'], evening: ['steady','small','space','lift'] },
  1: { morning: ['lift','space','steady','small'], afternoon: ['space','steady','lift','small'], evening: ['steady','small','space','lift'] },
  2: { morning: ['space','lift','small','steady'], afternoon: ['steady','space','small','lift'], evening: ['small','steady','space','lift'] },
  3: { morning: ['lift','small','space','steady'], afternoon: ['lift','space','steady','small'], evening: ['steady','space','small','lift'] },
  4: { morning: ['small','lift','space','steady'], afternoon: ['space','lift','small','steady'], evening: ['small','space','steady','lift'] },
  5: { morning: ['lift','space','small','steady'], afternoon: ['lift','small','space','steady'], evening: ['small','lift','space','steady'] },
  6: { morning: ['small','space','lift','steady'], afternoon: ['small','lift','space','steady'], evening: ['small','steady','lift','space'] },
}

export function getCategoryOrder(date = new Date()) {
  const day = date.getDay() // 0=Sun … 6=Sat
  const time = getTimeOfDay(date)
  return categoryOrderMatrix[day][time]
}

// ── getDailyBoosts — deterministic, time-aware ──

export function getDailyBoosts(date = new Date()) {
  const timeOfDay = getTimeOfDay(date)
  const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  const order = getCategoryOrder(date)
  const boosts = {}

  for (const cat of order) {
    const pool = promptPool[cat]

    // Filter to time-specific + anytime prompts
    const timePool = pool.filter(p => p.time === timeOfDay || p.time === 'anytime')

    // Use the filtered pool (falls back to full pool if somehow empty)
    const available = timePool.length > 0 ? timePool : pool
    const index = dateSeed(dateStr + ':' + cat + ':' + timeOfDay) % available.length

    const selected = available[index]
    boosts[cat] = {
      ...categoryMeta[cat],
      ...selected,
      ctaText: selected.cta,
    }
  }

  return boosts
}

// ── getRandomBoosts — random, time-aware ──

export function getRandomBoosts() {
  const date = new Date()
  const timeOfDay = getTimeOfDay(date)
  const order = getCategoryOrder(date)
  const boosts = {}

  for (const cat of order) {
    const pool = promptPool[cat]
    const timePool = pool.filter(p => p.time === timeOfDay || p.time === 'anytime')
    const available = timePool.length > 0 ? timePool : pool
    const index = Math.floor(Math.random() * available.length)

    const selected = available[index]
    boosts[cat] = {
      ...categoryMeta[cat],
      ...selected,
      ctaText: selected.cta,
    }
  }

  return boosts
}
