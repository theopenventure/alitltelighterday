// LIFT — 'Get curious' (90 prompts)
// Formula: [Show/Tell me] + [Something unexpected/surprising]
// Cognitive redirection via wonder. Lean forward.
// Segment mix: ~28 text, ~22 fact, ~20 breath, ~10 list, ~10 song

export const liftPrompts = [

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
]
