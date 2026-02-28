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
// Prompt Framework v2: 60-80 chars, strict formulas, no state assumptions, no "shoulds"

export const promptPool = {

  // ═══════════════════════════════════════════════════════════════
  // LIFT — "Get curious" (90 prompts)
  // Formula: [Show/Tell me] + [Something unexpected/surprising]
  // Cognitive redirection via wonder. Lean forward.
  // Segment mix: ~28 text, ~22 fact, ~20 breath, ~10 list, ~10 song
  // ═══════════════════════════════════════════════════════════════

  lift: [

    // ── LIFT: Morning — Starting (25 prompts) ──

    { prompt: 'Show me something a wild animal does that sounds completely made up.',
      detail: 'Almost unbelievable', segment: 'fact', time: 'morning',
      shortTitle: 'Made up', cta: 'Oh, really?' },

    { prompt: 'Tell me something worth noticing before the morning moves too fast.',
      detail: 'Before it passes', segment: 'text', time: 'morning',
      shortTitle: 'Before it goes', cta: 'Try this' },

    { prompt: 'Show me a stretch so small it surprises me how much my body opens up.',
      detail: 'Tiny but real', segment: 'breath', time: 'morning',
      shortTitle: 'Small stretch', cta: 'Move' },

    { prompt: 'Tell me a fact about breakfast that is surprisingly strange to think about.',
      detail: 'A breakfast surprise', segment: 'fact', time: 'morning',
      shortTitle: 'Breakfast fact', cta: 'Oh, really?' },

    { prompt: 'Show me a reason to look out the window before I start anything today.',
      detail: 'One glance outside', segment: 'text', time: 'morning',
      shortTitle: 'Window first', cta: 'Try this' },

    { prompt: 'Tell me a song that sounds like the very first light of the morning.',
      detail: 'First light', segment: 'song', time: 'morning',
      shortTitle: 'First light', cta: 'Play it' },

    { prompt: 'Show me a creature that experiences the world in a way I never imagined.',
      detail: 'A different world', segment: 'fact', time: 'morning',
      shortTitle: 'Other senses', cta: 'Oh, really?' },

    { prompt: 'Tell me about something happening right now in nature that I can\'t see.',
      detail: 'Invisible nature', segment: 'text', time: 'morning',
      shortTitle: 'Hidden nature', cta: 'Try this' },

    { prompt: 'Show me a tiny movement I can do right now that wakes up my whole spine.',
      detail: 'A spine hello', segment: 'breath', time: 'morning',
      shortTitle: 'Spine wake-up', cta: 'Move' },

    { prompt: 'Tell me something my body is doing right now that I had no idea about.',
      detail: 'Your body right now', segment: 'fact', time: 'morning',
      shortTitle: 'Body secret', cta: 'Oh, really?' },

    { prompt: 'Show me something about early morning light that most people miss.',
      detail: 'Morning light', segment: 'text', time: 'morning',
      shortTitle: 'Morning glow', cta: 'Look up' },

    { prompt: 'Tell me a song that makes getting ready feel like a scene from a film.',
      detail: 'A movie moment', segment: 'song', time: 'morning',
      shortTitle: 'Getting ready', cta: 'Play it' },

    { prompt: 'Show me a hand movement so quick it surprises me with how good it feels.',
      detail: 'Just your hands', segment: 'breath', time: 'morning',
      shortTitle: 'Hand thing', cta: 'Move' },

    { prompt: 'Tell me something trees do underground that sounds almost like talking.',
      detail: 'Underground whispers', segment: 'fact', time: 'morning',
      shortTitle: 'Tree talk', cta: 'Oh, really?' },

    { prompt: 'Show me something about this morning that only happens once and is gone.',
      detail: 'One-time-only', segment: 'text', time: 'morning',
      shortTitle: 'Only today', cta: 'Look up' },

    { prompt: 'Tell me a three-second face movement that is surprisingly satisfying.',
      detail: 'A face surprise', segment: 'breath', time: 'morning',
      shortTitle: 'Face thing', cta: 'Move' },

    { prompt: 'Show me a fact about water that sounds stranger the more I think about it.',
      detail: 'Water is weird', segment: 'fact', time: 'morning',
      shortTitle: 'Water fact', cta: 'Oh, really?' },

    { prompt: 'Tell me about a sound I could hear this morning if I really listened.',
      detail: 'Listen closely', segment: 'text', time: 'morning',
      shortTitle: 'Morning sound', cta: 'Try this' },

    { prompt: 'Show me a song that feels like walking outside into cool fresh air.',
      detail: 'Cool air track', segment: 'song', time: 'morning',
      shortTitle: 'Fresh air', cta: 'Play it' },

    { prompt: 'Tell me a breath pattern that is oddly fun to try first thing in the day.',
      detail: 'A playful breath', segment: 'breath', time: 'morning',
      shortTitle: 'Fun breath', cta: 'Move' },

    { prompt: 'Show me something a small insect does that is genuinely mind-blowing.',
      detail: 'Tiny and mighty', segment: 'fact', time: 'morning',
      shortTitle: 'Tiny wonder', cta: 'Oh, really?' },

    { prompt: 'Tell me a surprising thing that happens in my brain while I am waking up.',
      detail: 'Waking-up science', segment: 'text', time: 'morning',
      shortTitle: 'Brain waking', cta: 'Try this' },

    { prompt: 'Show me a balance move so quick no one would even notice I was doing it.',
      detail: 'A secret balance', segment: 'breath', time: 'morning',
      shortTitle: 'Balance trick', cta: 'Move' },

    { prompt: 'Tell me things happening right now on Earth that sound too wild to be real.',
      detail: 'Earth right now', segment: 'list', time: 'morning',
      shortTitle: 'Right now', cta: 'Go on' },

    { prompt: 'Show me small things most people walk right past without ever noticing.',
      detail: 'Easy to miss', segment: 'list', time: 'morning',
      shortTitle: 'Walk past', cta: 'Go on' },

    // ── LIFT: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Tell me about a place on Earth where the rules of nature seem to break.',
      detail: 'Rules don\'t apply', segment: 'text', time: 'afternoon',
      shortTitle: 'Broken rules', cta: 'Try this' },

    { prompt: 'Show me a few things happening on Earth right now that sound impossible.',
      detail: 'Right this second', segment: 'list', time: 'afternoon',
      shortTitle: 'Impossible now', cta: 'Go on' },

    { prompt: 'Tell me a fact about sunlight that most people have never thought about.',
      detail: 'Sunlight surprise', segment: 'fact', time: 'afternoon',
      shortTitle: 'Sunlight fact', cta: 'Oh, really?' },

    { prompt: 'Show me a shoulder move so subtle it looks like nothing but feels great.',
      detail: 'A subtle shift', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulder shift', cta: 'Move' },

    { prompt: 'Tell me a song that feels like walking into a warm patch of sunshine.',
      detail: 'A warm patch', segment: 'song', time: 'afternoon',
      shortTitle: 'Into the sun', cta: 'Play it' },

    { prompt: 'Show me something about the color blue that I have probably never heard.',
      detail: 'Blue is stranger', segment: 'fact', time: 'afternoon',
      shortTitle: 'Blue secret', cta: 'Oh, really?' },

    { prompt: 'Tell me about something ordinary that becomes amazing when you zoom in.',
      detail: 'Zoom in close', segment: 'text', time: 'afternoon',
      shortTitle: 'Zoom in', cta: 'Try this' },

    { prompt: 'Show me a quick twist I can do sitting that my whole back will thank me for.',
      detail: 'A seated twist', segment: 'breath', time: 'afternoon',
      shortTitle: 'Seated twist', cta: 'Move' },

    { prompt: 'Tell me the best animal group name that I have absolutely never heard of.',
      detail: 'A name worth knowing', segment: 'fact', time: 'afternoon',
      shortTitle: 'Group name', cta: 'Oh, really?' },

    { prompt: 'Show me a reason to stand up for just ten seconds and then sit back down.',
      detail: 'Just ten seconds', segment: 'breath', time: 'afternoon',
      shortTitle: 'Stand and sit', cta: 'Move' },

    { prompt: 'Tell me something about the afternoon sky that changes every single day.',
      detail: 'Never the same', segment: 'text', time: 'afternoon',
      shortTitle: 'Today\'s sky', cta: 'Look up' },

    { prompt: 'Show me a fact about the human hand that is strangely hard to believe.',
      detail: 'Hand facts', segment: 'fact', time: 'afternoon',
      shortTitle: 'Hand truth', cta: 'Oh, really?' },

    { prompt: 'Tell me a song that makes the middle of the day feel like a slow stroll.',
      detail: 'A slow stroll', segment: 'song', time: 'afternoon',
      shortTitle: 'Slow stroll', cta: 'Play it' },

    { prompt: 'Show me a posture shift so easy it barely counts but somehow changes things.',
      detail: 'Barely counts', segment: 'breath', time: 'afternoon',
      shortTitle: 'Tiny shift', cta: 'Move' },

    { prompt: 'Tell me something about how my eyes see color that sounds like science fiction.',
      detail: 'Color fiction', segment: 'fact', time: 'afternoon',
      shortTitle: 'Color trick', cta: 'Oh, really?' },

    { prompt: 'Show me a place in the world where something truly strange happens daily.',
      detail: 'Daily strangeness', segment: 'text', time: 'afternoon',
      shortTitle: 'Strange place', cta: 'Try this' },

    { prompt: 'Tell me a few things that are surprisingly recent inventions.',
      detail: 'Newer than you think', segment: 'list', time: 'afternoon',
      shortTitle: 'Recent things', cta: 'Go on' },

    { prompt: 'Show me a neck roll so slow it becomes something completely different.',
      detail: 'Slow becomes new', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow roll', cta: 'Move' },

    { prompt: 'Tell me about an ocean creature that does something no one would believe.',
      detail: 'Deep sea wonder', segment: 'fact', time: 'afternoon',
      shortTitle: 'Ocean creature', cta: 'Oh, really?' },

    { prompt: 'Show me something about this exact moment in time that will never repeat.',
      detail: 'Only this once', segment: 'text', time: 'afternoon',
      shortTitle: 'Never again', cta: 'Try this' },

    { prompt: 'Tell me a song that makes standing at a window feel like an adventure.',
      detail: 'Window adventure', segment: 'song', time: 'afternoon',
      shortTitle: 'Window song', cta: 'Play it' },

    { prompt: 'Show me something about gravity that I probably took for granted today.',
      detail: 'Gravity is wild', segment: 'fact', time: 'afternoon',
      shortTitle: 'Gravity fact', cta: 'Oh, really?' },

    { prompt: 'Tell me a wrist circle so intentional it actually becomes interesting.',
      detail: 'Wrist wonder', segment: 'breath', time: 'afternoon',
      shortTitle: 'Wrist circles', cta: 'Move' },

    { prompt: 'Show me something about clouds that makes them seem like living things.',
      detail: 'Clouds are alive', segment: 'text', time: 'afternoon',
      shortTitle: 'Living clouds', cta: 'Look up' },

    { prompt: 'Tell me about the strangest fruit in the world and why it got that way.',
      detail: 'Fruit gone rogue', segment: 'fact', time: 'afternoon',
      shortTitle: 'Strange fruit', cta: 'Oh, really?' },

    { prompt: 'Show me a few ordinary things that look completely different under a microscope.',
      detail: 'Zoomed in beauty', segment: 'list', time: 'afternoon',
      shortTitle: 'Micro world', cta: 'Go on' },

    { prompt: 'Tell me about a small thing I could notice right now if I just looked up.',
      detail: 'Look up now', segment: 'text', time: 'afternoon',
      shortTitle: 'Just look up', cta: 'Look up' },

    { prompt: 'Show me a toe exercise that sounds ridiculous but is oddly satisfying.',
      detail: 'Oddly satisfying', segment: 'breath', time: 'afternoon',
      shortTitle: 'Toe thing', cta: 'Move' },

    { prompt: 'Tell me a few sounds worth paying attention to in the middle of the day.',
      detail: 'Midday sounds', segment: 'list', time: 'afternoon',
      shortTitle: 'Day sounds', cta: 'Go on' },

    { prompt: 'Show me something about a bird I see every day that I never knew before.',
      detail: 'A common bird secret', segment: 'text', time: 'afternoon',
      shortTitle: 'Bird secret', cta: 'Try this' },

    // ── LIFT: Evening — Shedding (20 prompts) ──

    { prompt: 'Tell me a song that sounds like the world slowing down just for a moment.',
      detail: 'The world slows', segment: 'song', time: 'evening',
      shortTitle: 'Slowing down', cta: 'Play it' },

    { prompt: 'Show me a fact about the night sky that changes how I look at it tonight.',
      detail: 'Look up tonight', segment: 'fact', time: 'evening',
      shortTitle: 'Night sky', cta: 'Oh, really?' },

    { prompt: 'Tell me about something that only happens in the sky during this hour.',
      detail: 'This hour only', segment: 'text', time: 'evening',
      shortTitle: 'Evening sky', cta: 'Look up' },

    { prompt: 'Show me a gentle stretch that feels like putting the whole day behind me.',
      detail: 'A closing stretch', segment: 'breath', time: 'evening',
      shortTitle: 'Day behind', cta: 'Move' },

    { prompt: 'Tell me something surprising about what my brain does while I am sleeping.',
      detail: 'Sleep is wild', segment: 'fact', time: 'evening',
      shortTitle: 'Sleep brain', cta: 'Oh, really?' },

    { prompt: 'Show me something about the moon tonight that I would never have guessed.',
      detail: 'Moon surprise', segment: 'text', time: 'evening',
      shortTitle: 'Moon fact', cta: 'Look up' },

    { prompt: 'Tell me a song that turns the last hour of the day into something warm.',
      detail: 'A warm hour', segment: 'song', time: 'evening',
      shortTitle: 'Last hour', cta: 'Play it' },

    { prompt: 'Show me a fact about stars that makes them feel closer than they actually are.',
      detail: 'Stars feel close', segment: 'fact', time: 'evening',
      shortTitle: 'Close stars', cta: 'Oh, really?' },

    { prompt: 'Tell me something about darkness that is genuinely more beautiful than light.',
      detail: 'Darkness is beautiful', segment: 'text', time: 'evening',
      shortTitle: 'Dark beauty', cta: 'Try this' },

    { prompt: 'Show me a jaw release so gentle it feels like the day quietly unclenching.',
      detail: 'An unclenching', segment: 'breath', time: 'evening',
      shortTitle: 'Jaw release', cta: 'Move' },

    { prompt: 'Tell me a song for the exact feeling of watching the last light disappear.',
      detail: 'Last light track', segment: 'song', time: 'evening',
      shortTitle: 'Last light', cta: 'Play it' },

    { prompt: 'Show me something about the sound of nighttime that most people overlook.',
      detail: 'Night sounds', segment: 'fact', time: 'evening',
      shortTitle: 'Night sounds', cta: 'Oh, really?' },

    { prompt: 'Tell me about an evening ritual from another culture that sounds beautiful.',
      detail: 'A world ritual', segment: 'text', time: 'evening',
      shortTitle: 'Evening ritual', cta: 'Try this' },

    { prompt: 'Show me a slow shoulder movement that feels like quietly setting things down.',
      detail: 'Setting it down', segment: 'breath', time: 'evening',
      shortTitle: 'Set it down', cta: 'Move' },

    { prompt: 'Tell me something about the way animals settle in for the night together.',
      detail: 'Animals at dusk', segment: 'text', time: 'evening',
      shortTitle: 'Settling in', cta: 'Try this' },

    { prompt: 'Show me a song that feels like the exact moment I decide the day is done.',
      detail: 'Day is done', segment: 'song', time: 'evening',
      shortTitle: 'Done now', cta: 'Play it' },

    { prompt: 'Tell me what happens to the sky in the minutes just after the sun sets.',
      detail: 'Post-sunset magic', segment: 'text', time: 'evening',
      shortTitle: 'After sunset', cta: 'Look up' },

    { prompt: 'Show me a breathing pattern that makes a long exhale feel like a reward.',
      detail: 'A reward exhale', segment: 'breath', time: 'evening',
      shortTitle: 'Reward breath', cta: 'Move' },

    { prompt: 'Tell me a few unexpected things that glow in the dark in the natural world.',
      detail: 'Things that glow', segment: 'list', time: 'evening',
      shortTitle: 'Night glow', cta: 'Go on' },

    { prompt: 'Show me a fact about dreaming that makes tonight feel more interesting.',
      detail: 'Dream science', segment: 'fact', time: 'evening',
      shortTitle: 'Dream fact', cta: 'Oh, really?' },

    // ── LIFT: Anytime (15 prompts) ──

    { prompt: 'Tell me about a color that exists in nature but barely looks real.',
      detail: 'Unreal colors', segment: 'text', time: 'anytime',
      shortTitle: 'Unreal color', cta: 'Try this' },

    { prompt: 'Show me a fact about my body that I genuinely will never be able to un-know.',
      detail: 'Can\'t un-know this', segment: 'fact', time: 'anytime',
      shortTitle: 'Can\'t un-know', cta: 'Oh, really?' },

    { prompt: 'Tell me a side stretch that opens everything and takes almost no effort.',
      detail: 'Open it all', segment: 'breath', time: 'anytime',
      shortTitle: 'Side stretch', cta: 'Move' },

    { prompt: 'Show me something about how plants move that will change how I see gardens.',
      detail: 'Plants move too', segment: 'fact', time: 'anytime',
      shortTitle: 'Moving plants', cta: 'Oh, really?' },

    { prompt: 'Tell me about a texture in the room I am in that deserves more attention.',
      detail: 'Touch something new', segment: 'text', time: 'anytime',
      shortTitle: 'Room texture', cta: 'Try this' },

    { prompt: 'Show me a reason to take ten steps in any direction just to see what happens.',
      detail: 'Just ten steps', segment: 'text', time: 'anytime',
      shortTitle: 'Ten steps', cta: 'Move' },

    { prompt: 'Tell me something about an octopus that seems genuinely impossible.',
      detail: 'Octopus magic', segment: 'fact', time: 'anytime',
      shortTitle: 'Octopus fact', cta: 'Oh, really?' },

    { prompt: 'Show me a quick balance check that my whole body quietly enjoys doing.',
      detail: 'A balance check', segment: 'breath', time: 'anytime',
      shortTitle: 'Balance check', cta: 'Move' },

    { prompt: 'Tell me a few incredible things the human body does without being asked.',
      detail: 'Without being asked', segment: 'list', time: 'anytime',
      shortTitle: 'Body wonders', cta: 'Go on' },

    { prompt: 'Show me something about how sound travels that makes the world feel bigger.',
      detail: 'Sound travels far', segment: 'fact', time: 'anytime',
      shortTitle: 'Sound fact', cta: 'Oh, really?' },

    { prompt: 'Tell me about a sound from this week that is quietly worth remembering.',
      detail: 'A sound worth keeping', segment: 'text', time: 'anytime',
      shortTitle: 'That sound', cta: 'Try this' },

    { prompt: 'Show me a wrist exercise that is surprisingly more satisfying than it looks.',
      detail: 'Wrist surprise', segment: 'breath', time: 'anytime',
      shortTitle: 'Wrist thing', cta: 'Move' },

    { prompt: 'Tell me something about how animals navigate that sounds like a superpower.',
      detail: 'Animal superpowers', segment: 'text', time: 'anytime',
      shortTitle: 'Superpower', cta: 'Try this' },

    { prompt: 'Show me a few things that are surprisingly recent inventions in our world.',
      detail: 'Newer than you think', segment: 'list', time: 'anytime',
      shortTitle: 'Recent things', cta: 'Go on' },

    { prompt: 'Tell me a deep breath pattern that somehow manages to feel fun to do.',
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

    { prompt: 'Give me three slow breaths I can take before my feet touch the floor.',
      detail: 'Before the floor', segment: 'breath', time: 'morning',
      shortTitle: 'Three breaths', cta: 'Breathe' },

    { prompt: 'Show me a belly breathing exercise I can do in just three quiet rounds.',
      detail: 'Belly breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Belly breath', cta: 'Breathe' },

    { prompt: 'Give me a way to notice where my body is holding on this morning.',
      detail: 'A morning notice', segment: 'text', time: 'morning',
      shortTitle: 'Morning notice', cta: 'Soften' },

    { prompt: 'Show me a way to feel grounded before the morning asks anything of me.',
      detail: 'Grounded first', segment: 'breath', time: 'morning',
      shortTitle: 'Feel grounded', cta: 'Settle in' },

    { prompt: 'Give me a simple breathing check I could do without even leaving the bed.',
      detail: 'A bed breath', segment: 'breath', time: 'morning',
      shortTitle: 'Still in bed', cta: 'Breathe' },

    { prompt: 'Show me a gentle reminder that nothing has to be planned right this second.',
      detail: 'No rush yet', segment: 'text', time: 'morning',
      shortTitle: 'Not yet', cta: 'Settle in' },

    { prompt: 'Give me a box breathing pattern that calms everything in just one round.',
      detail: 'One round only', segment: 'breath', time: 'morning',
      shortTitle: 'Box breath', cta: 'Breathe' },

    { prompt: 'Show me a slow neck movement that feels like gently clearing yesterday.',
      detail: 'Yesterday\'s gone', segment: 'breath', time: 'morning',
      shortTitle: 'Neck release', cta: 'Soften' },

    { prompt: 'Give me a few things my body might quietly love first thing this morning.',
      detail: 'A body menu', segment: 'list', time: 'morning',
      shortTitle: 'Morning menu', cta: 'Try this' },

    { prompt: 'Show me a part of my body that is often holding on without me knowing.',
      detail: 'A hidden spot', segment: 'text', time: 'morning',
      shortTitle: 'Hidden spot', cta: 'Soften' },

    { prompt: 'Give me a calmer way to breathe through just my nose for a few rounds.',
      detail: 'Nose-only calm', segment: 'breath', time: 'morning',
      shortTitle: 'Nose breath', cta: 'Breathe' },

    { prompt: 'Show me a gentler way to think about how this morning could unfold.',
      detail: 'A softer morning', segment: 'text', time: 'morning',
      shortTitle: 'Softer start', cta: 'Settle in' },

    { prompt: 'Give me a warm-hands trick that feels like a small gift from me to me.',
      detail: 'Warm hands', segment: 'breath', time: 'morning',
      shortTitle: 'Warm hands', cta: 'Try this' },

    { prompt: 'Show me a shoulder roll so slow it becomes something else entirely.',
      detail: 'Slow on purpose', segment: 'breath', time: 'morning',
      shortTitle: 'Slow rolls', cta: 'Soften' },

    { prompt: 'Give me a doorway stretch that opens up my chest in under ten seconds.',
      detail: 'Open the chest', segment: 'breath', time: 'morning',
      shortTitle: 'Doorway open', cta: 'Try this' },

    { prompt: 'Show me how to move through this next hour without needing any rush.',
      detail: 'No rush needed', segment: 'text', time: 'morning',
      shortTitle: 'Unhurried', cta: 'Settle in' },

    { prompt: 'Give me a shoulder exercise that feels like one long exhale of relief.',
      detail: 'A shoulder sigh', segment: 'breath', time: 'morning',
      shortTitle: 'Shoulder sigh', cta: 'Let go' },

    { prompt: 'Show me a pressure point in my palm that quietly brings me back to here.',
      detail: 'Palm grounding', segment: 'breath', time: 'morning',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Give me a way to notice a muscle that might be holding on for no reason.',
      detail: 'For no reason', segment: 'text', time: 'morning',
      shortTitle: 'Let it go', cta: 'Soften' },

    { prompt: 'Show me what the slowest breath I have taken all morning could feel like.',
      detail: 'The slowest one', segment: 'breath', time: 'morning',
      shortTitle: 'Slowest breath', cta: 'Breathe' },

    { prompt: 'Give me a grounding trick I can do with just my toes on any surface.',
      detail: 'Toe grounding', segment: 'breath', time: 'morning',
      shortTitle: 'Toe ground', cta: 'Try this' },

    { prompt: 'Show me what it feels like to give this morning permission to be slow.',
      detail: 'A speed check', segment: 'text', time: 'morning',
      shortTitle: 'Go slow', cta: 'Settle in' },

    { prompt: 'Give me a gentle neck hold that takes five seconds and changes everything.',
      detail: 'Five-second hold', segment: 'breath', time: 'morning',
      shortTitle: 'Neck hold', cta: 'Soften' },

    { prompt: 'Show me a morning body checklist where I just notice without fixing.',
      detail: 'Notice, don\'t fix', segment: 'list', time: 'morning',
      shortTitle: 'Body scan', cta: 'Try this' },

    { prompt: 'Give me three breaths that each feel a little longer than the one before.',
      detail: 'Longer each time', segment: 'breath', time: 'morning',
      shortTitle: 'Grow the breath', cta: 'Breathe' },

    // ── STEADY: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Show me a way to let my shoulders drop without anyone around me noticing.',
      detail: 'A quiet drop', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulders down', cta: 'Soften' },

    { prompt: 'Give me a quick jaw release I can do that is barely visible from outside.',
      detail: 'A jaw release', segment: 'breath', time: 'afternoon',
      shortTitle: 'Jaw soften', cta: 'Soften' },

    { prompt: 'Show me a way to feel my feet on the floor and let that be enough.',
      detail: 'Floor connection', segment: 'breath', time: 'afternoon',
      shortTitle: 'Feet on floor', cta: 'Settle in' },

    { prompt: 'Give me a breathing pattern I can follow that takes less than one minute.',
      detail: 'Under one minute', segment: 'breath', time: 'afternoon',
      shortTitle: 'One minute', cta: 'Breathe' },

    { prompt: 'Show me what it looks like to take a break that my whole body agrees with.',
      detail: 'A body-approved break', segment: 'text', time: 'afternoon',
      shortTitle: 'Body says yes', cta: 'Settle in' },

    { prompt: 'Give me a long exhale that feels like it carries something away with it.',
      detail: 'Carry it away', segment: 'breath', time: 'afternoon',
      shortTitle: 'Long exhale', cta: 'Let go' },

    { prompt: 'Show me a hand stretch that releases something I did not know I was holding.',
      detail: 'Hands open up', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hand stretch', cta: 'Try this' },

    { prompt: 'Give me a way to reset my posture that feels more like a gift than a fix.',
      detail: 'A posture gift', segment: 'breath', time: 'afternoon',
      shortTitle: 'Posture reset', cta: 'Soften' },

    { prompt: 'Show me a few things my body could quietly use in the middle of the day.',
      detail: 'A midday menu', segment: 'list', time: 'afternoon',
      shortTitle: 'Midday needs', cta: 'Try this' },

    { prompt: 'Give me a way to make my next few breaths feel intentional and easy.',
      detail: 'Intentional ease', segment: 'breath', time: 'afternoon',
      shortTitle: 'Easy breaths', cta: 'Breathe' },

    { prompt: 'Show me a part of my body that could use a moment of quiet attention.',
      detail: 'Quiet attention', segment: 'text', time: 'afternoon',
      shortTitle: 'One spot', cta: 'Soften' },

    { prompt: 'Give me a spinal twist so easy I can do it without getting up from here.',
      detail: 'A seated twist', segment: 'breath', time: 'afternoon',
      shortTitle: 'Seated twist', cta: 'Try this' },

    { prompt: 'Show me how to make one glass of water feel like a real moment of care.',
      detail: 'Mindful water', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow water', cta: 'Settle in' },

    { prompt: 'Give me a sigh that is built to actually release something from my body.',
      detail: 'A proper sigh', segment: 'breath', time: 'afternoon',
      shortTitle: 'Real sigh', cta: 'Let go' },

    { prompt: 'Show me a hip shift I can do while sitting that changes how I feel right away.',
      detail: 'A hip shift', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hip shift', cta: 'Try this' },

    { prompt: 'Give me a way to bring my attention back to my body without any effort.',
      detail: 'No effort needed', segment: 'text', time: 'afternoon',
      shortTitle: 'Come back', cta: 'Settle in' },

    { prompt: 'Show me a humming breath that is quietly one of the most calming things.',
      detail: 'Humming calm', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hum breath', cta: 'Breathe' },

    { prompt: 'Give me a two-second thing I can do with my hands that grounds everything.',
      detail: 'A hand ground', segment: 'breath', time: 'afternoon',
      shortTitle: 'Hands now', cta: 'Try this' },

    { prompt: 'Show me how to notice what my body has been quietly carrying all afternoon.',
      detail: 'Afternoon check', segment: 'text', time: 'afternoon',
      shortTitle: 'Body check', cta: 'Soften' },

    { prompt: 'Give me a chest opener that takes five seconds and feels like breathing room.',
      detail: 'Breathing room', segment: 'breath', time: 'afternoon',
      shortTitle: 'Chest open', cta: 'Try this' },

    { prompt: 'Show me a way to let my face soften when I did not realize it was tight.',
      detail: 'Face softness', segment: 'text', time: 'afternoon',
      shortTitle: 'Soft face', cta: 'Soften' },

    { prompt: 'Give me a three-count exhale I can do between anything and anything else.',
      detail: 'Between things', segment: 'breath', time: 'afternoon',
      shortTitle: 'Between breath', cta: 'Breathe' },

    { prompt: 'Show me a leg stretch I can do right here that my lower back will love.',
      detail: 'A leg stretch', segment: 'breath', time: 'afternoon',
      shortTitle: 'Leg stretch', cta: 'Try this' },

    { prompt: 'Give me a gentle way to check in with my body without trying to change it.',
      detail: 'Just checking in', segment: 'text', time: 'afternoon',
      shortTitle: 'Just notice', cta: 'Settle in' },

    { prompt: 'Show me a breathing pattern where the exhale is twice as long as the inhale.',
      detail: 'Long exhale ratio', segment: 'breath', time: 'afternoon',
      shortTitle: 'Double exhale', cta: 'Breathe' },

    { prompt: 'Give me a few body signals that are quietly asking for a pause right now.',
      detail: 'Your body is talking', segment: 'list', time: 'afternoon',
      shortTitle: 'Body signals', cta: 'Try this' },

    { prompt: 'Show me a palm press I can do under a table that calms my whole system.',
      detail: 'A secret press', segment: 'breath', time: 'afternoon',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Give me a way to feel my spine lengthen without it feeling like a chore.',
      detail: 'Easy spine', segment: 'breath', time: 'afternoon',
      shortTitle: 'Spine length', cta: 'Soften' },

    { prompt: 'Show me what it means to take a breath that reaches my whole torso.',
      detail: 'A full breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Full torso', cta: 'Breathe' },

    { prompt: 'Give me a subtle body scan I can run in about twenty seconds flat.',
      detail: 'Twenty-second scan', segment: 'list', time: 'afternoon',
      shortTitle: 'Quick scan', cta: 'Try this' },

    // ── STEADY: Evening — Shedding (20 prompts) ──

    { prompt: 'Give me a way to sigh that actually helps my whole body feel lighter.',
      detail: 'A real sigh', segment: 'breath', time: 'evening',
      shortTitle: 'Full sigh', cta: 'Let go' },

    { prompt: 'Show me a slow body scan I can do lying down that feels like sinking in.',
      detail: 'Sink right in', segment: 'breath', time: 'evening',
      shortTitle: 'Sink in', cta: 'Settle in' },

    { prompt: 'Give me a breathing pattern built for the exact energy of this time of day.',
      detail: 'Evening rhythm', segment: 'breath', time: 'evening',
      shortTitle: 'Evening breath', cta: 'Breathe' },

    { prompt: 'Show me a way to let my jaw release everything it collected since morning.',
      detail: 'Jaw at night', segment: 'breath', time: 'evening',
      shortTitle: 'Jaw release', cta: 'Soften' },

    { prompt: 'Give me a gentle humming exhale that is deeply and quietly calming.',
      detail: 'Humming exhale', segment: 'breath', time: 'evening',
      shortTitle: 'Hum out', cta: 'Breathe' },

    { prompt: 'Show me how to make lying down feel like the most intentional thing I do.',
      detail: 'Intentional rest', segment: 'text', time: 'evening',
      shortTitle: 'Lie down well', cta: 'Settle in' },

    { prompt: 'Give me an exhale that feels like gently putting something down for good.',
      detail: 'Put it down', segment: 'breath', time: 'evening',
      shortTitle: 'Set it down', cta: 'Let go' },

    { prompt: 'Show me a leg-heavy exercise that tells my whole body it is time to rest.',
      detail: 'Legs go heavy', segment: 'breath', time: 'evening',
      shortTitle: 'Heavy legs', cta: 'Settle in' },

    { prompt: 'Give me a way to feel the weight of my own body and let that be grounding.',
      detail: 'Weight as comfort', segment: 'text', time: 'evening',
      shortTitle: 'Feel the weight', cta: 'Settle in' },

    { prompt: 'Show me a hand-on-chest breath that feels like a quiet goodnight to myself.',
      detail: 'Goodnight breath', segment: 'breath', time: 'evening',
      shortTitle: 'Goodnight', cta: 'Breathe' },

    { prompt: 'Give me a slow shoulder melt that lets everything from today slide off.',
      detail: 'Shoulder melt', segment: 'breath', time: 'evening',
      shortTitle: 'Melt down', cta: 'Let go' },

    { prompt: 'Show me a few gentle things my body might appreciate before I fall asleep.',
      detail: 'Pre-sleep gifts', segment: 'list', time: 'evening',
      shortTitle: 'Before sleep', cta: 'Try this' },

    { prompt: 'Give me an eye softening trick that makes the room feel calmer instantly.',
      detail: 'Soft eye trick', segment: 'breath', time: 'evening',
      shortTitle: 'Soft eyes', cta: 'Soften' },

    { prompt: 'Show me a way to breathe that feels like slowly dimming all the lights.',
      detail: 'Dimming breath', segment: 'breath', time: 'evening',
      shortTitle: 'Dim the lights', cta: 'Breathe' },

    { prompt: 'Give me a gentle reminder that my body carried me through an entire day.',
      detail: 'A whole day', segment: 'text', time: 'evening',
      shortTitle: 'Carried me', cta: 'Settle in' },

    { prompt: 'Show me a hip release I can do in bed that feels like settling into sand.',
      detail: 'Settle into sand', segment: 'breath', time: 'evening',
      shortTitle: 'Hip settle', cta: 'Soften' },

    { prompt: 'Give me a way to notice the pillow under my head as if for the first time.',
      detail: 'Pillow moment', segment: 'text', time: 'evening',
      shortTitle: 'Pillow feel', cta: 'Settle in' },

    { prompt: 'Show me a winding-down stretch that takes ten seconds and asks for nothing.',
      detail: 'Asks for nothing', segment: 'breath', time: 'evening',
      shortTitle: 'Easy stretch', cta: 'Soften' },

    { prompt: 'Give me a few body parts that could use a quiet thank you before sleep.',
      detail: 'A body thank you', segment: 'list', time: 'evening',
      shortTitle: 'Thank the body', cta: 'Try this' },

    { prompt: 'Show me a way to breathe that turns the exhale into a kind of lullaby.',
      detail: 'A lullaby breath', segment: 'breath', time: 'evening',
      shortTitle: 'Lullaby breath', cta: 'Breathe' },

    // ── STEADY: Anytime (15 prompts) ──

    { prompt: 'Give me a five-senses grounding exercise I can do wherever I am right now.',
      detail: 'Five senses', segment: 'breath', time: 'anytime',
      shortTitle: 'Five senses', cta: 'Try this' },

    { prompt: 'Show me one deep breath that fills my whole chest and then slowly lets go.',
      detail: 'One full breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Full breath', cta: 'Breathe' },

    { prompt: 'Give me a way to feel the ground underneath me and let that be enough.',
      detail: 'Ground beneath me', segment: 'breath', time: 'anytime',
      shortTitle: 'Feel the floor', cta: 'Settle in' },

    { prompt: 'Show me a cold-water trick that quietly resets how my whole body feels.',
      detail: 'A cold reset', segment: 'text', time: 'anytime',
      shortTitle: 'Cold wrists', cta: 'Try this' },

    { prompt: 'Give me a few signals my body sends when it is quietly asking for a pause.',
      detail: 'Body is talking', segment: 'list', time: 'anytime',
      shortTitle: 'Body signals', cta: 'Try this' },

    { prompt: 'Show me a three-six breath pattern I can follow for just three easy rounds.',
      detail: 'Three-six breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Three and six', cta: 'Breathe' },

    { prompt: 'Give me a squeeze-and-release for whatever is closest to my hands right now.',
      detail: 'Squeeze and let go', segment: 'breath', time: 'anytime',
      shortTitle: 'Squeeze it', cta: 'Try this' },

    { prompt: 'Show me something my body is already handling beautifully without my help.',
      detail: 'Already handled', segment: 'text', time: 'anytime',
      shortTitle: 'Let it work', cta: 'Settle in' },

    { prompt: 'Give me an isometric press I can do with just my palms anywhere I am.',
      detail: 'Just your palms', segment: 'breath', time: 'anytime',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Show me a low humming sound I can make that calms things from the inside.',
      detail: 'Hum from inside', segment: 'breath', time: 'anytime',
      shortTitle: 'Low hum', cta: 'Try this' },

    { prompt: 'Give me a gentle reminder about something my body does not actually need.',
      detail: 'A subtraction', segment: 'text', time: 'anytime',
      shortTitle: 'Drop this', cta: 'Let go' },

    { prompt: 'Show me a ten-second ear trick that brings a surprising amount of quiet.',
      detail: 'Ear quiet', segment: 'breath', time: 'anytime',
      shortTitle: 'Cup ears', cta: 'Try this' },

    { prompt: 'Give me a way to soften my gaze without closing my eyes all the way.',
      detail: 'A soft gaze', segment: 'text', time: 'anytime',
      shortTitle: 'Soft eyes', cta: 'Soften' },

    { prompt: 'Show me a few things my body could quietly let go of and never miss.',
      detail: 'Won\'t miss these', segment: 'list', time: 'anytime',
      shortTitle: 'Let these go', cta: 'Let go' },

    { prompt: 'Give me a breath where the pause at the top is the most important part.',
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

    { prompt: 'Take me somewhere quiet where I only have to think about one thing.',
      detail: 'Just one thing', segment: 'text', time: 'morning',
      shortTitle: 'Somewhere quiet', cta: 'Read on' },

    { prompt: 'Tell me about a morning where someone decided to do less, not more.',
      detail: 'Less is more', segment: 'text', time: 'morning',
      shortTitle: 'Less today', cta: 'Read on' },

    { prompt: 'Take me through a quick brain dump that clears some space for the day.',
      detail: 'Clear the deck', segment: 'breath', time: 'morning',
      shortTitle: 'Brain dump', cta: 'Clear it' },

    { prompt: 'Tell me why writing things down actually changes what happens in my brain.',
      detail: 'Writing clears', segment: 'fact', time: 'morning',
      shortTitle: 'Write it down', cta: 'Oh, really?' },

    { prompt: 'Take me to a place where I only ever have to pick between three things.',
      detail: 'Only three choices', segment: 'text', time: 'morning',
      shortTitle: 'Only three', cta: 'Read on' },

    { prompt: 'Tell me a short story about someone who put something heavy down and walked.',
      detail: 'A putting-down story', segment: 'text', time: 'morning',
      shortTitle: 'Set it down', cta: 'Read on' },

    { prompt: 'Take me through three breaths where each one gets a single quiet word.',
      detail: 'Three-word morning', segment: 'breath', time: 'morning',
      shortTitle: 'Three words', cta: 'Breathe' },

    { prompt: 'Tell me a few things I do not owe a single person today and mean it.',
      detail: 'You don\'t owe these', segment: 'list', time: 'morning',
      shortTitle: 'Don\'t owe', cta: 'Read on' },

    { prompt: 'Take me to a moment where a decision became simple by just waiting.',
      detail: 'Simple by waiting', segment: 'text', time: 'morning',
      shortTitle: 'Wait on it', cta: 'Read on' },

    { prompt: 'Tell me a breathing exercise where I put each thought somewhere safe.',
      detail: 'Safe containers', segment: 'breath', time: 'morning',
      shortTitle: 'Box it up', cta: 'Try this' },

    { prompt: 'Take me through how many thoughts I actually have per day and why it matters.',
      detail: 'A thought stat', segment: 'fact', time: 'morning',
      shortTitle: 'Thought count', cta: 'Oh, really?' },

    { prompt: 'Tell me about a place where there is absolutely nothing to plan at all.',
      detail: 'No plan needed', segment: 'text', time: 'morning',
      shortTitle: 'No plans here', cta: 'Read on' },

    { prompt: 'Take me through a breathing exercise that gently erases one thing at a time.',
      detail: 'Erase one thing', segment: 'breath', time: 'morning',
      shortTitle: 'Erase it', cta: 'Clear it' },

    { prompt: 'Tell me a few questions I genuinely do not have to answer before tonight.',
      detail: 'Not today\'s questions', segment: 'list', time: 'morning',
      shortTitle: 'Not today', cta: 'Skip it' },

    { prompt: 'Take me to a scene where the first thought of the day floats right past.',
      detail: 'Let it float by', segment: 'text', time: 'morning',
      shortTitle: 'Float past', cta: 'Read on' },

    { prompt: 'Tell me about a breath where I think of one person I am glad exists.',
      detail: 'Glad they exist', segment: 'breath', time: 'morning',
      shortTitle: 'One person', cta: 'Try this' },

    { prompt: 'Take me through a sentence that starts with the words I wish someone knew.',
      detail: 'A naming moment', segment: 'text', time: 'morning',
      shortTitle: 'I wish', cta: 'Read on' },

    { prompt: 'Tell me a few kinds of mornings that are worth protecting from busyness.',
      detail: 'Protect the morning', segment: 'list', time: 'morning',
      shortTitle: 'Worth keeping', cta: 'Read on' },

    { prompt: 'Take me through a breath where the exhale carries exactly one thought away.',
      detail: 'One thought, gone', segment: 'breath', time: 'morning',
      shortTitle: 'Breathe it out', cta: 'Breathe' },

    { prompt: 'Tell me about a place where the morning is so still it almost hums.',
      detail: 'A still morning', segment: 'text', time: 'morning',
      shortTitle: 'Still hum', cta: 'Read on' },

    { prompt: 'Take me to a version of this morning where nothing is expected of me yet.',
      detail: 'Nothing expected', segment: 'text', time: 'morning',
      shortTitle: 'No expectations', cta: 'Read on' },

    { prompt: 'Tell me why the first thought of the morning is rarely the most accurate one.',
      detail: 'Morning thought filter', segment: 'fact', time: 'morning',
      shortTitle: 'First thought', cta: 'Oh, really?' },

    { prompt: 'Take me through a breath where the inhale is a question and the exhale answers.',
      detail: 'Ask and answer', segment: 'breath', time: 'morning',
      shortTitle: 'Question breath', cta: 'Breathe' },

    { prompt: 'Tell me a few things I could say no to today and feel lighter for it.',
      detail: 'Lighter no\'s', segment: 'list', time: 'morning',
      shortTitle: 'Say no', cta: 'Read on' },

    { prompt: 'Take me to a place where all the decisions can wait until I am ready.',
      detail: 'Decisions can wait', segment: 'text', time: 'morning',
      shortTitle: 'Not yet', cta: 'Read on' },

    // ── SPACE: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Tell me a short story about someone who put something heavy down.',
      detail: 'A letting-go story', segment: 'text', time: 'afternoon',
      shortTitle: 'Put it down', cta: 'Read on' },

    { prompt: 'Take me through a breath that feels like stepping into a silent room.',
      detail: 'A silent room', segment: 'breath', time: 'afternoon',
      shortTitle: 'Silent room', cta: 'Breathe' },

    { prompt: 'Tell me about a place where the middle of the day is actually the stillest.',
      detail: 'Midday stillness', segment: 'text', time: 'afternoon',
      shortTitle: 'Still midday', cta: 'Read on' },

    { prompt: 'Take me to a place where decisions can wait and nothing at all is expected.',
      detail: 'Nothing expected', segment: 'text', time: 'afternoon',
      shortTitle: 'Can wait', cta: 'Read on' },

    { prompt: 'Tell me a few things that feel like problems but are really just small bumps.',
      detail: 'Just small bumps', segment: 'list', time: 'afternoon',
      shortTitle: 'Just bumps', cta: 'Read on' },

    { prompt: 'Take me through a breath where I name one thing and then let it pass.',
      detail: 'Name and release', segment: 'breath', time: 'afternoon',
      shortTitle: 'Name it', cta: 'Clear it' },

    { prompt: 'Tell me about a moment where doing absolutely nothing turned out to be enough.',
      detail: 'Nothing was enough', segment: 'text', time: 'afternoon',
      shortTitle: 'Enough', cta: 'Read on' },

    { prompt: 'Take me to a scene where everything slowed down and nobody minded at all.',
      detail: 'Nobody minded', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow scene', cta: 'Read on' },

    { prompt: 'Tell me a few thoughts that feel heavy but I could safely set aside for now.',
      detail: 'Set these aside', segment: 'list', time: 'afternoon',
      shortTitle: 'For now', cta: 'Skip it' },

    { prompt: 'Take me through a breath where the pause at the bottom is the whole point.',
      detail: 'The pause is it', segment: 'breath', time: 'afternoon',
      shortTitle: 'Bottom pause', cta: 'Breathe' },

    { prompt: 'Tell me about a place that is so quiet it makes thoughts feel optional.',
      detail: 'Thoughts optional', segment: 'text', time: 'afternoon',
      shortTitle: 'Quiet place', cta: 'Read on' },

    { prompt: 'Take me to a park bench in a story where sitting is the only plot point.',
      detail: 'A bench story', segment: 'text', time: 'afternoon',
      shortTitle: 'Bench sit', cta: 'Read on' },

    { prompt: 'Tell me a few kind ways to say not right now to someone without any guilt.',
      detail: 'Kind boundaries', segment: 'list', time: 'afternoon',
      shortTitle: 'Kind no', cta: 'Read on' },

    { prompt: 'Take me through a one-breath reset that can fit between any two moments.',
      detail: 'Between moments', segment: 'breath', time: 'afternoon',
      shortTitle: 'Micro reset', cta: 'Try this' },

    { prompt: 'Tell me about a library in the world where silence is treated like treasure.',
      detail: 'Silence as treasure', segment: 'text', time: 'afternoon',
      shortTitle: 'Library quiet', cta: 'Read on' },

    { prompt: 'Take me through an exhale that makes my whole mental to-do list feel smaller.',
      detail: 'Shrinking list', segment: 'breath', time: 'afternoon',
      shortTitle: 'Smaller list', cta: 'Clear it' },

    { prompt: 'Tell me why the brain actually benefits from doing less in the afternoon.',
      detail: 'Less is smarter', segment: 'fact', time: 'afternoon',
      shortTitle: 'Do less', cta: 'Oh, really?' },

    { prompt: 'Take me to a place where the air is so clean that thinking becomes easy.',
      detail: 'Clear air, clear mind', segment: 'text', time: 'afternoon',
      shortTitle: 'Clean air', cta: 'Read on' },

    { prompt: 'Tell me a few things that are completely fine to leave unfinished today.',
      detail: 'Fine unfinished', segment: 'list', time: 'afternoon',
      shortTitle: 'Leave it', cta: 'Skip it' },

    { prompt: 'Take me through a breath where my mind gets to be a passenger, not a driver.',
      detail: 'Passenger mode', segment: 'breath', time: 'afternoon',
      shortTitle: 'Passenger', cta: 'Breathe' },

    { prompt: 'Tell me about a river that moves so slowly it almost looks like it stopped.',
      detail: 'A slow river', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow river', cta: 'Read on' },

    { prompt: 'Take me somewhere where the only job is to sit and watch something gentle.',
      detail: 'Watch something gentle', segment: 'text', time: 'afternoon',
      shortTitle: 'Just watch', cta: 'Read on' },

    { prompt: 'Tell me why switching between things costs my brain more than I realize.',
      detail: 'Switching costs', segment: 'fact', time: 'afternoon',
      shortTitle: 'Switch tax', cta: 'Oh, really?' },

    { prompt: 'Take me through three breaths that each get a little bit quieter inside.',
      detail: 'Quieter each time', segment: 'breath', time: 'afternoon',
      shortTitle: 'Getting quiet', cta: 'Breathe' },

    { prompt: 'Tell me about a tiny chapel or garden built for people who just want to sit.',
      detail: 'A sitting place', segment: 'text', time: 'afternoon',
      shortTitle: 'Just sit', cta: 'Read on' },

    { prompt: 'Take me through a visualization where each thought is a leaf on moving water.',
      detail: 'Leaves on water', segment: 'breath', time: 'afternoon',
      shortTitle: 'Leaf thoughts', cta: 'Try this' },

    { prompt: 'Tell me a few permissions I could quietly give myself in the next five minutes.',
      detail: 'Permission slips', segment: 'list', time: 'afternoon',
      shortTitle: 'Permissions', cta: 'Read on' },

    { prompt: 'Take me to a version of this afternoon where my only task is being present.',
      detail: 'Just being here', segment: 'text', time: 'afternoon',
      shortTitle: 'Just present', cta: 'Read on' },

    { prompt: 'Tell me why giving the brain a gap between thoughts actually helps it work.',
      detail: 'Gaps help', segment: 'fact', time: 'afternoon',
      shortTitle: 'Brain gaps', cta: 'Oh, really?' },

    { prompt: 'Take me through a breath where I give my mind permission to wander freely.',
      detail: 'Wander freely', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let it wander', cta: 'Breathe' },

    // ── SPACE: Evening — Shedding (20 prompts) ──

    { prompt: 'Take me to the kind of evening where nothing is waiting to be done.',
      detail: 'Nothing waiting', segment: 'text', time: 'evening',
      shortTitle: 'Free evening', cta: 'Read on' },

    { prompt: 'Tell me a few thoughts that are safe to let go of before I fall asleep.',
      detail: 'Safe to release', segment: 'list', time: 'evening',
      shortTitle: 'Let these go', cta: 'Read on' },

    { prompt: 'Take me through a breath that gently closes the door on today\'s thinking.',
      detail: 'Close the door', segment: 'breath', time: 'evening',
      shortTitle: 'Door closed', cta: 'Breathe' },

    { prompt: 'Tell me about a place where evening is treated as something truly sacred.',
      detail: 'Sacred evenings', segment: 'text', time: 'evening',
      shortTitle: 'Sacred time', cta: 'Read on' },

    { prompt: 'Take me somewhere where the only sound is the kind that helps people sleep.',
      detail: 'Sleepy sounds', segment: 'text', time: 'evening',
      shortTitle: 'Sleep sounds', cta: 'Read on' },

    { prompt: 'Tell me why sleeping on something genuinely helps the brain figure it out.',
      detail: 'Sleep solves things', segment: 'fact', time: 'evening',
      shortTitle: 'Sleep on it', cta: 'Oh, really?' },

    { prompt: 'Take me through an exhale that carries the last thought of the day away.',
      detail: 'Last thought out', segment: 'breath', time: 'evening',
      shortTitle: 'Last exhale', cta: 'Let it go' },

    { prompt: 'Tell me a few things my mind does not actually have to solve before bed.',
      detail: 'Stop solving', segment: 'list', time: 'evening',
      shortTitle: 'Not tonight', cta: 'Skip it' },

    { prompt: 'Take me to a field at dusk where the sky is doing all the talking instead.',
      detail: 'Sky at dusk', segment: 'text', time: 'evening',
      shortTitle: 'Dusk field', cta: 'Read on' },

    { prompt: 'Tell me one small thing that went quietly well today and almost got missed.',
      detail: 'Almost missed it', segment: 'text', time: 'evening',
      shortTitle: 'Went well', cta: 'Read on' },

    { prompt: 'Take me through a thought-dimmer breath that turns the volume down slowly.',
      detail: 'Volume down', segment: 'breath', time: 'evening',
      shortTitle: 'Turn it down', cta: 'Breathe' },

    { prompt: 'Tell me why nobody actually remembers the awkward thing I said last week.',
      detail: 'They already forgot', segment: 'fact', time: 'evening',
      shortTitle: 'They forgot', cta: 'Let it go' },

    { prompt: 'Take me to a zoomed-out view of today where most of it was actually fine.',
      detail: 'Mostly fine', segment: 'text', time: 'evening',
      shortTitle: 'Zoomed out', cta: 'Read on' },

    { prompt: 'Tell me a few gentle thoughts that are light enough to carry into sleep.',
      detail: 'Carry these lightly', segment: 'list', time: 'evening',
      shortTitle: 'Light thoughts', cta: 'Read on' },

    { prompt: 'Take me through a body-and-breath wind-down that takes under sixty seconds.',
      detail: 'Under a minute', segment: 'breath', time: 'evening',
      shortTitle: 'Quick wind-down', cta: 'Try this' },

    { prompt: 'Tell me about an evening somewhere in the world that sounds perfectly still.',
      detail: 'A still evening', segment: 'text', time: 'evening',
      shortTitle: 'Somewhere still', cta: 'Read on' },

    { prompt: 'Take me through a breath where I imagine someone kind is sitting nearby.',
      detail: 'Someone nearby', segment: 'breath', time: 'evening',
      shortTitle: 'Not alone', cta: 'Breathe' },

    { prompt: 'Tell me a few things that are completely fine to leave for tomorrow morning.',
      detail: 'Tomorrow\'s list', segment: 'list', time: 'evening',
      shortTitle: 'Leave it', cta: 'Skip it' },

    { prompt: 'Take me to a place where every thought that arrives is gently sent to bed.',
      detail: 'Thoughts to bed', segment: 'text', time: 'evening',
      shortTitle: 'Bedtime thoughts', cta: 'Read on' },

    { prompt: 'Tell me about a reason to stop replaying today and simply let it be done.',
      detail: 'Let it be done', segment: 'text', time: 'evening',
      shortTitle: 'It\'s done', cta: 'Let it go' },

    // ── SPACE: Anytime (15 prompts) ──

    { prompt: 'Tell me why the brain keeps replaying things even when I tell it to stop.',
      detail: 'The replay loop', segment: 'fact', time: 'anytime',
      shortTitle: 'On repeat', cta: 'Oh, really?' },

    { prompt: 'Take me through three exhales where each one releases a different thought.',
      detail: 'Three thoughts out', segment: 'breath', time: 'anytime',
      shortTitle: 'Three exhales', cta: 'Breathe' },

    { prompt: 'Tell me about a place where every thought floats by without ever landing.',
      detail: 'Nothing lands', segment: 'text', time: 'anytime',
      shortTitle: 'Float by', cta: 'Read on' },

    { prompt: 'Take me to a pause where saying I don\'t know yet is the whole answer.',
      detail: 'Don\'t know yet', segment: 'text', time: 'anytime',
      shortTitle: 'Don\'t know', cta: 'Read on' },

    { prompt: 'Tell me why the feeling of something and the truth of it are not the same.',
      detail: 'Feeling vs fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Not the same', cta: 'Oh, really?' },

    { prompt: 'Take me through a breath for the things I can control and the things I can\'t.',
      detail: 'Control breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Control sort', cta: 'Breathe' },

    { prompt: 'Tell me about a moment where someone changed their mind and it was a relief.',
      detail: 'Changed my mind', segment: 'text', time: 'anytime',
      shortTitle: 'Change it', cta: 'Read on' },

    { prompt: 'Take me through a one-breath reset that can happen anytime and anywhere.',
      detail: 'A micro-reset', segment: 'breath', time: 'anytime',
      shortTitle: 'Tiny reset', cta: 'Try this' },

    { prompt: 'Tell me a few kind ways to set a boundary without feeling guilty about it.',
      detail: 'Boundary phrases', segment: 'list', time: 'anytime',
      shortTitle: 'Kind limits', cta: 'Read on' },

    { prompt: 'Take me to a reminder that I am allowed to take up space in my own life.',
      detail: 'Take up space', segment: 'text', time: 'anytime',
      shortTitle: 'My space', cta: 'Read on' },

    { prompt: 'Tell me why rejection hurts the way it does and why that is completely normal.',
      detail: 'Rejection is real', segment: 'fact', time: 'anytime',
      shortTitle: 'It\'s real', cta: 'Oh, really?' },

    { prompt: 'Take me through a snow-globe pause where everything is still settling.',
      detail: 'Let it settle', segment: 'breath', time: 'anytime',
      shortTitle: 'Snow globe', cta: 'Try this' },

    { prompt: 'Tell me a few thoughts that are worth questioning instead of just believing.',
      detail: 'Question these', segment: 'list', time: 'anytime',
      shortTitle: 'Question it', cta: 'Read on' },

    { prompt: 'Take me to a reminder that my version of what happened is just one of many.',
      detail: 'One version', segment: 'text', time: 'anytime',
      shortTitle: 'One story', cta: 'Read on' },

    { prompt: 'Tell me a breath pattern that quietly says the words I will figure this out.',
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

    { prompt: 'Give me a small, warm reason to feel good about right now, for nothing.',
      detail: 'For no reason', segment: 'text', time: 'morning',
      shortTitle: 'For nothing', cta: 'Go on' },

    { prompt: 'Tell me a way to make my first sip of the morning feel like a real ritual.',
      detail: 'A slow first sip', segment: 'text', time: 'morning',
      shortTitle: 'Slow sip', cta: 'Try it' },

    { prompt: 'Give me a song that feels like a warm hand gently placed on my back.',
      detail: 'A warm hand', segment: 'song', time: 'morning',
      shortTitle: 'Warm hand', cta: 'Play it' },

    { prompt: 'Tell me a tiny reaching-out text I could send someone right now just because.',
      detail: 'A small reach-out', segment: 'text', time: 'morning',
      shortTitle: 'Send it', cta: 'Do it' },

    { prompt: 'Give me a thirty-second thing involving a window and some fresh morning air.',
      detail: 'Fresh air gift', segment: 'text', time: 'morning',
      shortTitle: 'Window air', cta: 'Try it' },

    { prompt: 'Tell me something my brain does when I smile, even when I don\'t mean it.',
      detail: 'Smile science', segment: 'fact', time: 'morning',
      shortTitle: 'Smile trick', cta: 'Oh, really?' },

    { prompt: 'Give me a reminder about a small luxury I already own but keep forgetting.',
      detail: 'Already yours', segment: 'text', time: 'morning',
      shortTitle: 'Small luxury', cta: 'Do it' },

    { prompt: 'Tell me a few kind things I could easily do for myself before noon today.',
      detail: 'Before noon kindness', segment: 'list', time: 'morning',
      shortTitle: 'Before noon', cta: 'Go on' },

    { prompt: 'Give me a breath that feels like wrapping my arms around myself gently.',
      detail: 'A self-hug breath', segment: 'breath', time: 'morning',
      shortTitle: 'Self-hug', cta: 'Breathe' },

    { prompt: 'Tell me something kind I could say to myself the next time I catch a mirror.',
      detail: 'Mirror words', segment: 'text', time: 'morning',
      shortTitle: 'Mirror kind', cta: 'Try it' },

    { prompt: 'Give me a reason a certain scent could gently shift how this morning feels.',
      detail: 'A scent shift', segment: 'fact', time: 'morning',
      shortTitle: 'Morning scent', cta: 'Oh, really?' },

    { prompt: 'Tell me a song that turns the simple act of getting dressed into something.',
      detail: 'Getting-dressed song', segment: 'song', time: 'morning',
      shortTitle: 'Getting ready', cta: 'Play it' },

    { prompt: 'Give me a kind note I could leave for my future self somewhere in the day.',
      detail: 'A note ahead', segment: 'text', time: 'morning',
      shortTitle: 'Note to self', cta: 'Do it' },

    { prompt: 'Tell me a cat-like stretch I can do before I even get out of bed today.',
      detail: 'A morning stretch', segment: 'breath', time: 'morning',
      shortTitle: 'Cat stretch', cta: 'Try it' },

    { prompt: 'Give me five minutes of something kind I could give to just morning-me.',
      detail: 'Five kind minutes', segment: 'text', time: 'morning',
      shortTitle: 'Five minutes', cta: 'Try it' },

    { prompt: 'Tell me a few tiny morning pleasures that most people walk right past.',
      detail: 'Easy to miss', segment: 'list', time: 'morning',
      shortTitle: 'Tiny pleasures', cta: 'Go on' },

    { prompt: 'Give me a surprising reason to laugh more today that is backed by science.',
      detail: 'Laughter science', segment: 'fact', time: 'morning',
      shortTitle: 'Laugh more', cta: 'Oh, really?' },

    { prompt: 'Tell me a gentle phone-free experiment for the first fifteen minutes of today.',
      detail: 'Phone-free start', segment: 'text', time: 'morning',
      shortTitle: 'Phone away', cta: 'Try it' },

    { prompt: 'Give me a scent-only breath that anchors me completely right here right now.',
      detail: 'Scent anchor', segment: 'breath', time: 'morning',
      shortTitle: 'Smell the air', cta: 'Breathe' },

    { prompt: 'Tell me something nice I could do for absolutely no reason at all today.',
      detail: 'No reason needed', segment: 'text', time: 'morning',
      shortTitle: 'No reason', cta: 'Do it' },

    { prompt: 'Give me a small favor I could do right now that tonight-me would appreciate.',
      detail: 'A future-you gift', segment: 'text', time: 'morning',
      shortTitle: 'Future favor', cta: 'Do it' },

    { prompt: 'Tell me what happens when I walk barefoot on grass and why it feels so good.',
      detail: 'Barefoot science', segment: 'fact', time: 'morning',
      shortTitle: 'Go barefoot', cta: 'Oh, really?' },

    { prompt: 'Give me a song that makes getting ready in the morning feel like a movie scene.',
      detail: 'Movie morning', segment: 'song', time: 'morning',
      shortTitle: 'Movie scene', cta: 'Play it' },

    { prompt: 'Tell me three breaths for three things I am quietly looking forward to.',
      detail: 'Looking forward', segment: 'breath', time: 'morning',
      shortTitle: 'Look forward', cta: 'Breathe' },

    { prompt: 'Give me a gentle reminder to use the nice one today because I am worth it.',
      detail: 'Use the good stuff', segment: 'text', time: 'morning',
      shortTitle: 'Good stuff', cta: 'Do it' },

    // ── SMALL: Afternoon — Resetting (30 prompts) ──

    { prompt: 'Tell me something kind I could say to myself next time I catch a mirror.',
      detail: 'Afternoon mirror', segment: 'text', time: 'afternoon',
      shortTitle: 'Kind words', cta: 'Try it' },

    { prompt: 'Give me thirty seconds of free warmth I can stand in and feel right away.',
      detail: 'Free warmth', segment: 'text', time: 'afternoon',
      shortTitle: 'Find warmth', cta: 'Try it' },

    { prompt: 'Tell me a song that turns the middle of the afternoon into a gentle stroll.',
      detail: 'A gentle stroll', segment: 'song', time: 'afternoon',
      shortTitle: 'Afternoon walk', cta: 'Play it' },

    { prompt: 'Give me a tiny creative act I could finish in under sixty seconds flat.',
      detail: 'Under a minute', segment: 'text', time: 'afternoon',
      shortTitle: 'Quick create', cta: 'Try it' },

    { prompt: 'Tell me something surprising about what happens when I am kind to myself.',
      detail: 'Kindness science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Self-kindness', cta: 'Oh, really?' },

    { prompt: 'Give me a few two-minute treats I probably have access to right this second.',
      detail: 'Instant treats', segment: 'list', time: 'afternoon',
      shortTitle: 'Quick treats', cta: 'Go on' },

    { prompt: 'Tell me the guilty pleasure song and give me permission to sing the chorus.',
      detail: 'A guilty pleasure', segment: 'song', time: 'afternoon',
      shortTitle: 'Guilty chorus', cta: 'Play it' },

    { prompt: 'Give me a way to eat something slowly and turn it into a whole small moment.',
      detail: 'Slow and sweet', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow bite', cta: 'Try it' },

    { prompt: 'Tell me a tiny hand ritual that turns thirty seconds into genuine self-care.',
      detail: 'Hand ritual', segment: 'text', time: 'afternoon',
      shortTitle: 'Hand care', cta: 'Try it' },

    { prompt: 'Give me three breaths that are a quiet micro-treat for my tired attention.',
      detail: 'Attention rest', segment: 'breath', time: 'afternoon',
      shortTitle: 'Attention rest', cta: 'Breathe' },

    { prompt: 'Tell me a few things that count as self-care even though they seem tiny.',
      detail: 'Small things count', segment: 'list', time: 'afternoon',
      shortTitle: 'It counts', cta: 'Go on' },

    { prompt: 'Give me a reason that gently touching my own arm actually does something real.',
      detail: 'Touch science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Gentle touch', cta: 'Oh, really?' },

    { prompt: 'Tell me to find a photo on my phone that makes me smile. Not social media.',
      detail: 'A real memory', segment: 'text', time: 'afternoon',
      shortTitle: 'Old photo', cta: 'Do it' },

    { prompt: 'Give me a small unprompted kindness I could give a stranger in ten seconds.',
      detail: 'A micro-kindness', segment: 'text', time: 'afternoon',
      shortTitle: 'Small kindness', cta: 'Do it' },

    { prompt: 'Tell me a song that makes me nod slowly and feel like everything is okay.',
      detail: 'A nod-along song', segment: 'song', time: 'afternoon',
      shortTitle: 'Nod along', cta: 'Play it' },

    { prompt: 'Give me a tiny literary adventure I can have with a random page of any book.',
      detail: 'Random page magic', segment: 'text', time: 'afternoon',
      shortTitle: 'Random page', cta: 'Try it' },

    { prompt: 'Tell me a few free things in this world that feel weirdly expensive.',
      detail: 'Free luxury', segment: 'list', time: 'afternoon',
      shortTitle: 'Free luxury', cta: 'Go on' },

    { prompt: 'Give me a mindful sip of water where the sipping is the entire activity.',
      detail: 'Just the sip', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow water', cta: 'Try it' },

    { prompt: 'Tell me why nostalgia is actually good for me and not just sentimental.',
      detail: 'Nostalgia science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Happy memory', cta: 'Oh, really?' },

    { prompt: 'Give me one minute at a window with no phone and nothing but the view.',
      detail: 'A window minute', segment: 'text', time: 'afternoon',
      shortTitle: 'Window gaze', cta: 'Try it' },

    { prompt: 'Tell me five breaths, one for each small thing that went right so far today.',
      detail: 'Small wins', segment: 'breath', time: 'afternoon',
      shortTitle: 'Small wins', cta: 'Breathe' },

    { prompt: 'Give me permission to buy the tiny treat under five dollars I always skip.',
      detail: 'The tiny treat', segment: 'text', time: 'afternoon',
      shortTitle: 'Tiny treat', cta: 'Do it' },

    { prompt: 'Tell me a few nice things I could do for future-me before this day ends.',
      detail: 'Gifts for later', segment: 'list', time: 'afternoon',
      shortTitle: 'Future favors', cta: 'Go on' },

    { prompt: 'Give me one tiny thing to straighten up that gives me a small bit of order.',
      detail: 'Micro-organizing', segment: 'text', time: 'afternoon',
      shortTitle: 'Straighten one', cta: 'Try it' },

    { prompt: 'Tell me why spending on an experience almost always beats spending on a thing.',
      detail: 'Experiences win', segment: 'fact', time: 'afternoon',
      shortTitle: 'Buy moments', cta: 'Oh, really?' },

    { prompt: 'Give me a grounding breath where the inhale is also a treat for my nose.',
      detail: 'Nose treat', segment: 'breath', time: 'afternoon',
      shortTitle: 'Nose breath', cta: 'Breathe' },

    { prompt: 'Tell me a thirty-second phone change I will notice a hundred times this week.',
      detail: 'A small swap', segment: 'text', time: 'afternoon',
      shortTitle: 'Phone change', cta: 'Do it' },

    { prompt: 'Give me a song I loved when I was fourteen and let me feel what comes back.',
      detail: 'Age fourteen', segment: 'song', time: 'afternoon',
      shortTitle: 'Fourteen again', cta: 'Play it' },

    { prompt: 'Tell me a few things in this world that are always, always worth pausing for.',
      detail: 'Worth pausing for', segment: 'list', time: 'afternoon',
      shortTitle: 'Pause for these', cta: 'Go on' },

    { prompt: 'Give me a stretch that feels like taking up space in the world on purpose.',
      detail: 'Take up space', segment: 'breath', time: 'afternoon',
      shortTitle: 'Arms wide', cta: 'Try it' },

    // ── SMALL: Evening — Shedding (20 prompts) ──

    { prompt: 'Give me gentle words for someone who gave a lot of themselves today.',
      detail: 'After a full day', segment: 'text', time: 'evening',
      shortTitle: 'Gentle words', cta: 'Go on' },

    { prompt: 'Tell me a song that feels like being gently tucked in by someone warm.',
      detail: 'A tucked-in song', segment: 'song', time: 'evening',
      shortTitle: 'Tucked in', cta: 'Play it' },

    { prompt: 'Give me something small I can light that quietly changes the whole room.',
      detail: 'A small flame', segment: 'text', time: 'evening',
      shortTitle: 'Light one', cta: 'Do it' },

    { prompt: 'Tell me to put on the softest thing I own and let that be the whole plan.',
      detail: 'Comfort dressing', segment: 'text', time: 'evening',
      shortTitle: 'Soft clothes', cta: 'Do it' },

    { prompt: 'Give me a warm drink held with both hands and tell me that is the whole thing.',
      detail: 'Both hands', segment: 'text', time: 'evening',
      shortTitle: 'Warm hands', cta: 'Try it' },

    { prompt: 'Tell me something about the act of waiting that puts tonight in perspective.',
      detail: 'No waiting tonight', segment: 'fact', time: 'evening',
      shortTitle: 'No waiting', cta: 'Oh, really?' },

    { prompt: 'Give me a few small evening rituals that feel like being wrapped in a blanket.',
      detail: 'Cozy rituals', segment: 'list', time: 'evening',
      shortTitle: 'Cozy list', cta: 'Go on' },

    { prompt: 'Tell me to take a few extra minutes of warmth tonight just because I can.',
      detail: 'Extra warmth', segment: 'text', time: 'evening',
      shortTitle: 'Longer shower', cta: 'Do it' },

    { prompt: 'Give me one page of a book and tell me that still counts as reading tonight.',
      detail: 'One page counts', segment: 'text', time: 'evening',
      shortTitle: 'One page', cta: 'Try it' },

    { prompt: 'Tell me a warm-palms-over-eyes trick that is a gift from me to myself.',
      detail: 'Warm eye rest', segment: 'breath', time: 'evening',
      shortTitle: 'Warm eyes', cta: 'Try it' },

    { prompt: 'Give me a scientific reason to pile on all the blankets I want tonight.',
      detail: 'Blanket science', segment: 'fact', time: 'evening',
      shortTitle: 'Pile blankets', cta: 'Oh, really?' },

    { prompt: 'Tell me a song for the exact feeling of doing the dishes and feeling at peace.',
      detail: 'Peaceful dishes', segment: 'song', time: 'evening',
      shortTitle: 'Dish peace', cta: 'Play it' },

    { prompt: 'Give me a two-minute phone call idea that could quietly change my whole night.',
      detail: 'A voice note', segment: 'text', time: 'evening',
      shortTitle: 'Call someone', cta: 'Do it' },

    { prompt: 'Tell me a few tiny luxuries that cost nothing at all and are all mine tonight.',
      detail: 'Free tonight', segment: 'list', time: 'evening',
      shortTitle: 'Free luxuries', cta: 'Go on' },

    { prompt: 'Give me a slow hand ritual that turns thirty seconds into pure gentleness.',
      detail: 'Hand gentleness', segment: 'breath', time: 'evening',
      shortTitle: 'Hand care', cta: 'Try it' },

    { prompt: 'Tell me one specific thing that deserves to be noticed and loved tonight.',
      detail: 'One thing tonight', segment: 'text', time: 'evening',
      shortTitle: 'Notice one', cta: 'Do it' },

    { prompt: 'Give me my medical permission to spend five minutes looking at baby animals.',
      detail: 'Cute animal science', segment: 'fact', time: 'evening',
      shortTitle: 'Baby animals', cta: 'Oh, really?' },

    { prompt: 'Tell me a phone-free experiment for the very last hour of my night.',
      detail: 'A phone-free hour', segment: 'text', time: 'evening',
      shortTitle: 'Phone down', cta: 'Try it' },

    { prompt: 'Give me five breaths of warmth in and the entire day gently breathed out.',
      detail: 'Warmth in, day out', segment: 'breath', time: 'evening',
      shortTitle: 'Day out', cta: 'Breathe' },

    { prompt: 'Tell me a few things that make a bed feel more inviting on a night like this.',
      detail: 'A better bed', segment: 'list', time: 'evening',
      shortTitle: 'Better bed', cta: 'Go on' },

    // ── SMALL: Anytime (15 prompts) ──

    { prompt: 'Give me a few small things that always seem to make everything a bit better.',
      detail: 'The small things', segment: 'list', time: 'anytime',
      shortTitle: 'Always better', cta: 'Go on' },

    { prompt: 'Tell me why crying is one of the most human and healing things we ever do.',
      detail: 'Crying is healing', segment: 'fact', time: 'anytime',
      shortTitle: 'Let it out', cta: 'Oh, really?' },

    { prompt: 'Give me a song that feels like being wrapped in something warm and safe.',
      detail: 'A warm wrap', segment: 'song', time: 'anytime',
      shortTitle: 'Warm song', cta: 'Play it' },

    { prompt: 'Tell me three breaths where each one sends kind thoughts to someone I love.',
      detail: 'Kindness breathing', segment: 'breath', time: 'anytime',
      shortTitle: 'Kind breaths', cta: 'Breathe' },

    { prompt: 'Give me permission to eat something right now purely for the pleasure of it.',
      detail: 'Pleasure is good', segment: 'text', time: 'anytime',
      shortTitle: 'Eat for joy', cta: 'Do it' },

    { prompt: 'Tell me the name for the smell of rain and why it has its own beautiful word.',
      detail: 'Rain has a name', segment: 'fact', time: 'anytime',
      shortTitle: 'Rain smell', cta: 'Oh, really?' },

    { prompt: 'Give me an unprompted compliment I could hand to someone today for nothing.',
      detail: 'A free gift', segment: 'text', time: 'anytime',
      shortTitle: 'Give it', cta: 'Do it' },

    { prompt: 'Tell me about a texture I love and what it would feel like under my fingers.',
      detail: 'A soft texture', segment: 'breath', time: 'anytime',
      shortTitle: 'Soft touch', cta: 'Try it' },

    { prompt: 'Give me a few comforts I can reach right now without spending a single cent.',
      detail: 'Free comfort', segment: 'list', time: 'anytime',
      shortTitle: 'Free comforts', cta: 'Go on' },

    { prompt: 'Tell me why music and chocolate do the exact same thing inside my brain.',
      detail: 'Music is chocolate', segment: 'fact', time: 'anytime',
      shortTitle: 'Brain chocolate', cta: 'Oh, really?' },

    { prompt: 'Give me a song that makes me feel held even when nobody is in the room.',
      detail: 'Held by a song', segment: 'song', time: 'anytime',
      shortTitle: 'Feel held', cta: 'Play it' },

    { prompt: 'Tell me one tiny thing my future self would genuinely thank me for doing.',
      detail: 'Future thanks', segment: 'text', time: 'anytime',
      shortTitle: 'Future thanks', cta: 'Do it' },

    { prompt: 'Give me a gentle arm squeeze and tell me my body won\'t know the difference.',
      detail: 'Self-comfort touch', segment: 'breath', time: 'anytime',
      shortTitle: 'Arm squeeze', cta: 'Try it' },

    { prompt: 'Tell me a few ways to turn an ordinary moment into something slightly special.',
      detail: 'Ordinary to special', segment: 'list', time: 'anytime',
      shortTitle: 'Make it special', cta: 'Go on' },

    { prompt: 'Give me a reason to feel good about being exactly where I am right now.',
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
