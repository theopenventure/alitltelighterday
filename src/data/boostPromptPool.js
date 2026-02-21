// ── Category metadata (static, never rotates) ──

export const categoryMeta = {
  lift:   { category: 'Get curious',     variant: 'warm' },
  steady: { category: 'Calm your body',  variant: 'gray' },
  space:  { category: 'Quiet your mind', variant: 'sage' },
  small:  { category: 'Treat yourself',  variant: 'beige' },
}

// ── Time-of-day periods ──
// morning: before 12pm | afternoon: 12–5pm | evening: after 5pm
// 'anytime' prompts are used as fallback / filler regardless of time

// ── Prompt pools: 90 curated prompts per category (360 total) ──
// Each prompt: { prompt, detail, segment, time, shortTitle, cta }

export const promptPool = {

  // ═══════════════════════════════════════════════════════════════
  // LIFT — "Get curious" (90 prompts)
  // Feeling more alive. Gentle spark, not hype.
  // Segment mix: ~28 text, ~22 fact, ~20 breath, ~10 list, ~10 song
  // ═══════════════════════════════════════════════════════════════

  lift: [

    // ── LIFT: Morning (25 prompts) ──

    { prompt: 'A stretch that takes ten seconds and changes everything.',
      detail: 'Just ten seconds', segment: 'breath', time: 'morning',
      shortTitle: 'Ten seconds', cta: 'Move' },

    { prompt: 'Something to notice before I check my phone.',
      detail: 'One glance, no screen', segment: 'text', time: 'morning',
      shortTitle: 'Before the phone', cta: 'Try this' },

    { prompt: 'A wild animal fact to start my morning.',
      detail: 'A wild fact to start the day', segment: 'fact', time: 'morning',
      shortTitle: 'Morning wonder', cta: 'Oh, really?' },

    { prompt: 'A tiny movement to wake up my whole body.',
      detail: 'A tiny wake-up trick', segment: 'breath', time: 'morning',
      shortTitle: 'Wake up move', cta: 'Move' },

    { prompt: 'A strange food fact I can think about at breakfast.',
      detail: 'Something to think about at breakfast', segment: 'fact', time: 'morning',
      shortTitle: 'Breakfast fact', cta: 'Oh, really?' },

    { prompt: 'A song that feels like the first light of the day.',
      detail: 'A gentle first track', segment: 'song', time: 'morning',
      shortTitle: 'First light', cta: 'Play it' },

    { prompt: 'One small thing to pay attention to today.',
      detail: 'Just that one thing', segment: 'text', time: 'morning',
      shortTitle: 'Notice this', cta: 'Try this' },

    { prompt: 'A quick hand exercise to get the blood moving.',
      detail: 'Instant circulation boost', segment: 'breath', time: 'morning',
      shortTitle: 'Hands alive', cta: 'Move' },

    { prompt: 'A creature that does something unbelievable.',
      detail: 'Nature does wild things', segment: 'fact', time: 'morning',
      shortTitle: 'Wild creature', cta: 'Oh, really?' },

    { prompt: 'A reason to walk to a different room right now.',
      detail: 'Change your scenery by ten feet', segment: 'text', time: 'morning',
      shortTitle: 'New room', cta: 'Try this' },

    { prompt: 'Three breaths that tell my body the day is safe.',
      detail: 'A nervous system hello', segment: 'breath', time: 'morning',
      shortTitle: 'Safe start', cta: 'Breathe' },

    { prompt: 'A fact about fruit that will surprise me.',
      detail: 'A breakfast table fact', segment: 'fact', time: 'morning',
      shortTitle: 'Fruit twist', cta: 'Oh, really?' },

    { prompt: 'Things worth noticing on a morning walk.',
      detail: 'Small things you might miss', segment: 'list', time: 'morning',
      shortTitle: 'Walk and look', cta: 'Try this' },

    { prompt: 'A surprising reason to drink a glass of water.',
      detail: 'Hydration as brain care', segment: 'fact', time: 'morning',
      shortTitle: 'Water first', cta: 'Oh, really?' },

    { prompt: 'Something I can do with my face in three seconds.',
      detail: 'A face wake-up', segment: 'breath', time: 'morning',
      shortTitle: 'Face reset', cta: 'Try this' },

    { prompt: 'A song for getting ready with no rush at all.',
      detail: 'Morning pace, no hurry', segment: 'song', time: 'morning',
      shortTitle: 'No rush', cta: 'Play it' },

    { prompt: 'Something trees do that sounds almost human.',
      detail: 'The wood wide web', segment: 'fact', time: 'morning',
      shortTitle: 'Tree secret', cta: 'Oh, really?' },

    { prompt: 'A tiny sensory adventure I can have right here.',
      detail: 'Micro-exploration', segment: 'text', time: 'morning',
      shortTitle: 'Tiny adventure', cta: 'Try this' },

    { prompt: 'Something oddly satisfying I can do with my toes.',
      detail: 'From the ground up', segment: 'breath', time: 'morning',
      shortTitle: 'Toe thing', cta: 'Try this' },

    { prompt: 'Something about the sky that only happens today.',
      detail: 'A one-time-only sky', segment: 'text', time: 'morning',
      shortTitle: 'Today only', cta: 'Look up' },

    { prompt: 'Incredible things my body is doing right now.',
      detail: 'You are more amazing than you think', segment: 'list', time: 'morning',
      shortTitle: 'Body facts', cta: 'Oh, really?' },

    { prompt: 'A sound I can make that resets my nervous system.',
      detail: 'Sound as a reset', segment: 'breath', time: 'morning',
      shortTitle: 'One sound', cta: 'Try this' },

    { prompt: 'The gentlest animal fact I will hear all day.',
      detail: 'The gentlest animal fact', segment: 'fact', time: 'morning',
      shortTitle: 'Gentle fact', cta: 'Oh, really?' },

    { prompt: 'A twist I can do sitting that my spine will love.',
      detail: 'A morning twist', segment: 'breath', time: 'morning',
      shortTitle: 'Spinal twist', cta: 'Move' },

    { prompt: 'One small thing to look forward to today.',
      detail: 'One small pull forward', segment: 'text', time: 'morning',
      shortTitle: 'One thing', cta: 'Try this' },

    // ── LIFT: Afternoon (30 prompts) ──

    { prompt: 'A reason to stand up for just ten seconds.',
      detail: 'Just ten seconds of standing', segment: 'breath', time: 'afternoon',
      shortTitle: 'Stand up', cta: 'Move' },

    { prompt: 'The best animal group name I have never heard.',
      detail: 'A fact that deserves to be shared', segment: 'fact', time: 'afternoon',
      shortTitle: 'Group name', cta: 'Oh, really?' },

    { prompt: 'A quick shoulder move to fix my posture.',
      detail: 'A quick posture check', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulder fix', cta: 'Move' },

    { prompt: 'A song that feels like walking into the sunshine.',
      detail: 'Instant mood shift', segment: 'song', time: 'afternoon',
      shortTitle: 'Into the sun', cta: 'Play it' },

    { prompt: 'Something about sunlight most people don\'t know.',
      detail: 'Time-traveling photons', segment: 'fact', time: 'afternoon',
      shortTitle: 'Sunlight fact', cta: 'Oh, really?' },

    { prompt: 'A strange little energy jolt I can do at my desk.',
      detail: 'A percussive wake-up', segment: 'breath', time: 'afternoon',
      shortTitle: 'Energy jolt', cta: 'Try this' },

    { prompt: 'A way to arrive in the present moment right now.',
      detail: 'A grounding spark', segment: 'text', time: 'afternoon',
      shortTitle: 'Be here now', cta: 'Try this' },

    { prompt: 'Something surprising that crows can do.',
      detail: 'Crows remember', segment: 'fact', time: 'afternoon',
      shortTitle: 'Clever crows', cta: 'Oh, really?' },

    { prompt: 'An absurd little exercise that actually works.',
      detail: 'Quick and a little silly', segment: 'breath', time: 'afternoon',
      shortTitle: 'A silly one', cta: 'Move' },

    { prompt: 'Tiny things I could do in the next two minutes.',
      detail: 'Micro-adventures', segment: 'list', time: 'afternoon',
      shortTitle: 'Two minutes', cta: 'Try this' },

    { prompt: 'Something wild about the human sense of smell.',
      detail: 'A sensory challenge', segment: 'fact', time: 'afternoon',
      shortTitle: 'Nose power', cta: 'Oh, really?' },

    { prompt: 'A five-second move to open up my chest.',
      detail: 'Open your chest', segment: 'breath', time: 'afternoon',
      shortTitle: 'Chest opener', cta: 'Move' },

    { prompt: 'A song that makes me feel like the main character.',
      detail: 'Main character energy', segment: 'song', time: 'afternoon',
      shortTitle: 'Main character', cta: 'Play it' },

    { prompt: 'A mind-blowing fact about the size of things.',
      detail: 'Infinite possibilities', segment: 'fact', time: 'afternoon',
      shortTitle: 'Scale check', cta: 'Oh, really?' },

    { prompt: 'Something my eyes need after staring at a screen.',
      detail: 'A rest for your eyes', segment: 'text', time: 'afternoon',
      shortTitle: 'Eye rest', cta: 'Try this' },

    { prompt: 'A wall exercise that resets more than I expect.',
      detail: 'Tension you can actually use', segment: 'breath', time: 'afternoon',
      shortTitle: 'Wall move', cta: 'Try this' },

    { prompt: 'An animal fact that serves absolutely no purpose.',
      detail: 'A fact for no reason', segment: 'fact', time: 'afternoon',
      shortTitle: 'Useless fact', cta: 'Oh, really?' },

    { prompt: 'A sneaky excuse to get up and walk somewhere.',
      detail: 'Movement disguised as hydration', segment: 'text', time: 'afternoon',
      shortTitle: 'Sneaky walk', cta: 'Move' },

    { prompt: 'Things most people have never thought about.',
      detail: 'Mind-opening tidbits', segment: 'list', time: 'afternoon',
      shortTitle: 'Think about this', cta: 'Go on' },

    { prompt: 'A quick brain-body sync I can do with my fingers.',
      detail: 'Finger agility reset', segment: 'breath', time: 'afternoon',
      shortTitle: 'Finger trick', cta: 'Try this' },

    { prompt: 'How dolphins call their friends.',
      detail: 'Dolphins have friend names', segment: 'fact', time: 'afternoon',
      shortTitle: 'Dolphin names', cta: 'Oh, really?' },

    { prompt: 'A neck stretch my body has been waiting for.',
      detail: 'A neck thank-you', segment: 'breath', time: 'afternoon',
      shortTitle: 'Neck stretch', cta: 'Move' },

    { prompt: 'A song for the last hour of the workday.',
      detail: 'A closing-time feeling', segment: 'song', time: 'afternoon',
      shortTitle: 'Clock out', cta: 'Play it' },

    { prompt: 'A reason to step outside for sixty seconds.',
      detail: 'Just one minute outside', segment: 'text', time: 'afternoon',
      shortTitle: 'Go outside', cta: 'Move' },

    { prompt: 'How far I will walk in my lifetime.',
      detail: 'You are a long-distance walker', segment: 'fact', time: 'afternoon',
      shortTitle: 'Walking miles', cta: 'Oh, really?' },

    { prompt: 'A stretch that hits more than I expect.',
      detail: 'Full arm extension', segment: 'breath', time: 'afternoon',
      shortTitle: 'Surprise stretch', cta: 'Move' },

    { prompt: 'An attention game I can play right now.',
      detail: 'An attention exercise', segment: 'text', time: 'afternoon',
      shortTitle: 'Sound game', cta: 'Try this' },

    { prompt: 'The most violent-sounding ocean creature.',
      detail: 'The toughest little shrimp', segment: 'fact', time: 'afternoon',
      shortTitle: 'Ocean punch', cta: 'Oh, really?' },

    { prompt: 'Five-second things that shift my energy.',
      detail: 'Quick resets', segment: 'list', time: 'afternoon',
      shortTitle: 'Five seconds', cta: 'Try this' },

    { prompt: 'One breath that counts as a real break.',
      detail: 'A single sigh', segment: 'breath', time: 'afternoon',
      shortTitle: 'One sigh', cta: 'Breathe' },

    // ── LIFT: Evening (20 prompts) ──

    { prompt: 'Something about starlight that blows my mind.',
      detail: 'Ancient starlight', segment: 'fact', time: 'evening',
      shortTitle: 'Old light', cta: 'Oh, really?' },

    { prompt: 'A reason to go outside and look up right now.',
      detail: 'A small dose of awe', segment: 'text', time: 'evening',
      shortTitle: 'Look up', cta: 'Try this' },

    { prompt: 'A song that feels like a drive at dusk.',
      detail: 'A golden-hour track', segment: 'song', time: 'evening',
      shortTitle: 'Dusk drive', cta: 'Play it' },

    { prompt: 'A number about Earth that sounds made up.',
      detail: 'More than you think', segment: 'fact', time: 'evening',
      shortTitle: 'Earth number', cta: 'Oh, really?' },

    { prompt: 'A weird reason to lie on the floor for a minute.',
      detail: 'Floor time', segment: 'breath', time: 'evening',
      shortTitle: 'Floor moment', cta: 'Try this' },

    { prompt: 'The biggest heartbeat on the planet.',
      detail: 'The biggest heartbeat', segment: 'fact', time: 'evening',
      shortTitle: 'Biggest heart', cta: 'Oh, really?' },

    { prompt: 'A question about my day only my eyes can answer.',
      detail: 'A small evening reflection', segment: 'text', time: 'evening',
      shortTitle: 'Best sight', cta: 'Try this' },

    { prompt: 'A hand thing that is weirdly relaxing.',
      detail: 'A hand thing', segment: 'breath', time: 'evening',
      shortTitle: 'Hand thing', cta: 'Try this' },

    { prompt: 'A tiny creature that can survive almost anything.',
      detail: 'Perspective from a micro-animal', segment: 'fact', time: 'evening',
      shortTitle: 'Tiny survivor', cta: 'Oh, really?' },

    { prompt: 'Things more beautiful when you actually look.',
      detail: 'Worth a second glance', segment: 'list', time: 'evening',
      shortTitle: 'Look again', cta: 'Go on' },

    { prompt: 'A song for sitting somewhere with nothing to prove.',
      detail: 'Evening ease', segment: 'song', time: 'evening',
      shortTitle: 'Nowhere to be', cta: 'Play it' },

    { prompt: 'A way to notice my own heartbeat right now.',
      detail: 'Your own percussion', segment: 'breath', time: 'evening',
      shortTitle: 'Heartbeat', cta: 'Try this' },

    { prompt: 'A planet where time works completely differently.',
      detail: 'Time works differently elsewhere', segment: 'fact', time: 'evening',
      shortTitle: 'Strange time', cta: 'Oh, really?' },

    { prompt: 'Three things in this room I didn\'t notice today.',
      detail: 'Evening eyes', segment: 'text', time: 'evening',
      shortTitle: 'Three things', cta: 'Try this' },

    { prompt: 'A gentle movement that is strangely soothing.',
      detail: 'A slow sway', segment: 'breath', time: 'evening',
      shortTitle: 'Gentle sway', cta: 'Move' },

    { prompt: 'Something in nature that glows in the dark.',
      detail: 'Glowing mushrooms', segment: 'fact', time: 'evening',
      shortTitle: 'Glow in dark', cta: 'Oh, really?' },

    { prompt: 'A song for doing absolutely nothing tonight.',
      detail: 'A nothing-to-do track', segment: 'song', time: 'evening',
      shortTitle: 'Do nothing', cta: 'Play it' },

    { prompt: 'Something about tonight\'s moon I\'ll never see again.',
      detail: 'A unique moon', segment: 'text', time: 'evening',
      shortTitle: 'Moon tonight', cta: 'Look up' },

    { prompt: 'A few questions to sit with. No answers needed.',
      detail: 'Curious questions', segment: 'list', time: 'evening',
      shortTitle: 'Sit with these', cta: 'Go on' },

    { prompt: 'Music that travels thousands of miles underwater.',
      detail: 'Invisible music', segment: 'fact', time: 'evening',
      shortTitle: 'Ocean music', cta: 'Oh, really?' },

    // ── LIFT: Anytime (15 prompts) ──

    { prompt: 'A five-second tension trick where the release is the point.',
      detail: 'Tension and release', segment: 'breath', time: 'anytime',
      shortTitle: 'Clench release', cta: 'Try this' },

    { prompt: 'How fast the Earth is spinning right now.',
      detail: 'You are moving right now', segment: 'fact', time: 'anytime',
      shortTitle: 'Fast rock', cta: 'Oh, really?' },

    { prompt: 'A song that feels like something good is coming.',
      detail: 'An anticipation track', segment: 'song', time: 'anytime',
      shortTitle: 'Something good', cta: 'Play it' },

    { prompt: 'A ten-second listening game I can play right now.',
      detail: 'A listening game', segment: 'text', time: 'anytime',
      shortTitle: 'Count sounds', cta: 'Try this' },

    { prompt: 'A fact about my body that I can never un-know.',
      detail: 'An uncomfortable fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Can\'t un-know', cta: 'Oh, really?' },

    { prompt: 'A stretch that opens everything at once.',
      detail: 'A side stretch', segment: 'breath', time: 'anytime',
      shortTitle: 'Open it all', cta: 'Move' },

    { prompt: 'Incredible things happening right now on Earth.',
      detail: 'The world is busy', segment: 'list', time: 'anytime',
      shortTitle: 'Right now', cta: 'Go on' },

    { prompt: 'A creature that experiences the world totally differently.',
      detail: 'Different senses', segment: 'fact', time: 'anytime',
      shortTitle: 'Different world', cta: 'Oh, really?' },

    { prompt: 'A reason to take ten steps in any direction.',
      detail: 'Just ten steps', segment: 'text', time: 'anytime',
      shortTitle: 'Ten steps', cta: 'Move' },

    { prompt: 'A song that reminds me I like being alive.',
      detail: 'A small aliveness track', segment: 'song', time: 'anytime',
      shortTitle: 'Feel alive', cta: 'Play it' },

    { prompt: 'A wrist exercise that releases hidden tension.',
      detail: 'Wrist circles', segment: 'breath', time: 'anytime',
      shortTitle: 'Wrist circles', cta: 'Move' },

    { prompt: 'Things that are surprisingly recent inventions.',
      detail: 'Newer than you think', segment: 'list', time: 'anytime',
      shortTitle: 'Recent things', cta: 'Oh, really?' },

    { prompt: 'Something an octopus can do that seems impossible.',
      detail: 'Octopus flexibility', segment: 'fact', time: 'anytime',
      shortTitle: 'Octopus trick', cta: 'Oh, really?' },

    { prompt: 'A sound worth remembering from this week.',
      detail: 'A sound worth remembering', segment: 'text', time: 'anytime',
      shortTitle: 'That sound', cta: 'Try this' },

    { prompt: 'A balance check my body secretly loves.',
      detail: 'A balance check', segment: 'breath', time: 'anytime',
      shortTitle: 'Balance check', cta: 'Try this' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // STEADY — "Calm your body" (90 prompts)
  // Body-first, always. Plain language. ZERO songs.
  // Segment mix: ~50 breath, ~30 text, ~10 list
  // ═══════════════════════════════════════════════════════════════

  steady: [

    // ── STEADY: Morning (25 prompts) ──

    { prompt: 'Three slow breaths before my feet hit the floor.',
      detail: 'A gentle start', segment: 'breath', time: 'morning',
      shortTitle: 'Before the floor', cta: 'Breathe' },

    { prompt: 'A belly breathing exercise. Just three rounds.',
      detail: 'Belly breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Belly breath', cta: 'Breathe' },

    { prompt: 'Where am I holding tension I don\'t notice?',
      detail: 'A morning jaw release', segment: 'text', time: 'morning',
      shortTitle: 'Hidden tension', cta: 'Let go' },

    { prompt: 'A way to feel grounded before the day starts.',
      detail: 'Grounded before the day', segment: 'breath', time: 'morning',
      shortTitle: 'Feel grounded', cta: 'Settle in' },

    { prompt: 'A simple breathing check I can do in bed.',
      detail: 'A diaphragm check', segment: 'breath', time: 'morning',
      shortTitle: 'Breath check', cta: 'Breathe' },

    { prompt: 'Something I don\'t have to plan right now.',
      detail: 'Permission to go slow', segment: 'text', time: 'morning',
      shortTitle: 'Just one hour', cta: 'Settle in' },

    { prompt: 'A breathing pattern that calms in one round.',
      detail: 'Box breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Box breath', cta: 'Breathe' },

    { prompt: 'A slow neck movement that releases yesterday.',
      detail: 'A morning neck release', segment: 'breath', time: 'morning',
      shortTitle: 'Neck release', cta: 'Soften' },

    { prompt: 'A few things my body might need this morning.',
      detail: 'A body menu', segment: 'list', time: 'morning',
      shortTitle: 'Pick one', cta: 'Try this' },

    { prompt: 'A spot where I hold tension without knowing it.',
      detail: 'Tongue tension release', segment: 'text', time: 'morning',
      shortTitle: 'Hidden spot', cta: 'Soften' },

    { prompt: 'A calmer way to breathe through my nose.',
      detail: 'Nose-only breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Nose breath', cta: 'Breathe' },

    { prompt: 'A gentler way to think about this morning.',
      detail: 'Lower the bar', segment: 'text', time: 'morning',
      shortTitle: 'Just start', cta: 'Settle in' },

    { prompt: 'A warm-hands trick that feels like a small gift.',
      detail: 'Warm hands, warm eyes', segment: 'breath', time: 'morning',
      shortTitle: 'Warm hands', cta: 'Try this' },

    { prompt: 'A shoulder roll. Slower than I think it should be.',
      detail: 'Deliberate slow rolls', segment: 'breath', time: 'morning',
      shortTitle: 'Slow rolls', cta: 'Soften' },

    { prompt: 'A doorway stretch that opens up my chest.',
      detail: 'Doorway stretch', segment: 'breath', time: 'morning',
      shortTitle: 'Doorway stretch', cta: 'Try this' },

    { prompt: 'A reminder about the thing I am dreading today.',
      detail: 'A pre-worry reminder', segment: 'text', time: 'morning',
      shortTitle: 'Not yet', cta: 'Settle in' },

    { prompt: 'A shoulder exercise that feels like a big sigh.',
      detail: 'A shoulder sigh', segment: 'breath', time: 'morning',
      shortTitle: 'Shoulder sigh', cta: 'Let go' },

    { prompt: 'A pressure point trick that quietly grounds me.',
      detail: 'Palm pressure points', segment: 'breath', time: 'morning',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'A muscle I am probably tensing for no reason.',
      detail: 'Forehead check', segment: 'text', time: 'morning',
      shortTitle: 'Smooth brow', cta: 'Soften' },

    { prompt: 'The slowest breath I have taken all morning.',
      detail: 'The slowest breath', segment: 'breath', time: 'morning',
      shortTitle: 'Slow one', cta: 'Breathe' },

    { prompt: 'A grounding trick I can do with my toes.',
      detail: 'Toe wiggle grounding', segment: 'breath', time: 'morning',
      shortTitle: 'Toe ground', cta: 'Try this' },

    { prompt: 'Permission to move through this morning slowly.',
      detail: 'A speed check', segment: 'text', time: 'morning',
      shortTitle: 'Go slow', cta: 'Settle in' },

    { prompt: 'A gentle neck hold that takes five seconds.',
      detail: 'A neck hold', segment: 'breath', time: 'morning',
      shortTitle: 'Neck hold', cta: 'Soften' },

    { prompt: 'A morning body checklist. Notice, don\'t fix.',
      detail: 'A body scan list', segment: 'list', time: 'morning',
      shortTitle: 'Body check', cta: 'Try this' },

    { prompt: 'A way to get heavier and calmer in my chair.',
      detail: 'Heavy exhales', segment: 'breath', time: 'morning',
      shortTitle: 'Get heavy', cta: 'Breathe' },

    // ── STEADY: Afternoon (30 prompts) ──

    { prompt: 'A shoulder check I probably need right now.',
      detail: 'A shoulder check', segment: 'text', time: 'afternoon',
      shortTitle: 'Drop them', cta: 'Let go' },

    { prompt: 'A long exhale that calms my nervous system.',
      detail: 'Extended exhale', segment: 'breath', time: 'afternoon',
      shortTitle: 'Long exhale', cta: 'Breathe' },

    { prompt: 'What happens when I unclench my hands right now.',
      detail: 'Open palms reset', segment: 'text', time: 'afternoon',
      shortTitle: 'Open hands', cta: 'Let go' },

    { prompt: 'A way to feel the ground through my feet.',
      detail: 'Desk grounding', segment: 'breath', time: 'afternoon',
      shortTitle: 'Feel the ground', cta: 'Settle in' },

    { prompt: 'A quick tension inventory for right now.',
      detail: 'A tension checklist', segment: 'list', time: 'afternoon',
      shortTitle: 'Tension check', cta: 'Try this' },

    { prompt: 'A breathing trick using just my lips.',
      detail: 'Straw breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Straw breath', cta: 'Breathe' },

    { prompt: 'A shoulder squeeze that feels like a self-hug.',
      detail: 'Shoulder squeeze', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulder hug', cta: 'Soften' },

    { prompt: 'Muscles in my face I could let rest right now.',
      detail: 'A face relaxation cue', segment: 'text', time: 'afternoon',
      shortTitle: 'Rest my face', cta: 'Soften' },

    { prompt: 'A sigh that is actually medicine.',
      detail: 'The physiological sigh', segment: 'breath', time: 'afternoon',
      shortTitle: 'Sigh it out', cta: 'Breathe' },

    { prompt: 'A ten-second break that counts as a real break.',
      detail: 'A ten-second vacation', segment: 'breath', time: 'afternoon',
      shortTitle: 'Lean back', cta: 'Settle in' },

    { prompt: 'A part of my body I could let go soft right now.',
      detail: 'Belly release', segment: 'text', time: 'afternoon',
      shortTitle: 'Go soft', cta: 'Let go' },

    { prompt: 'A gentle side stretch for my neck.',
      detail: 'A neck side stretch', segment: 'breath', time: 'afternoon',
      shortTitle: 'Ear to shoulder', cta: 'Soften' },

    { prompt: 'A way to slow my breathing down right now.',
      detail: 'Decreasing tempo breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow it down', cta: 'Breathe' },

    { prompt: 'A full body shake that takes ten seconds.',
      detail: 'A full body shake', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shake it off', cta: 'Try this' },

    { prompt: 'A desk-friendly head rub that my scalp needs.',
      detail: 'A desk-friendly head rub', segment: 'breath', time: 'afternoon',
      shortTitle: 'Scalp rub', cta: 'Try this' },

    { prompt: 'A body scan to find where I am holding today.',
      detail: 'A tension scan', segment: 'text', time: 'afternoon',
      shortTitle: 'Find it', cta: 'Soften' },

    { prompt: 'A gentle stretch using just my hands and head.',
      detail: 'A gentle neck traction', segment: 'breath', time: 'afternoon',
      shortTitle: 'Head cradle', cta: 'Soften' },

    { prompt: 'Where my body stores stress and what to do about it.',
      detail: 'A stress-spot guide', segment: 'list', time: 'afternoon',
      shortTitle: 'Stress spots', cta: 'Try this' },

    { prompt: 'A strange little trick that calms from the inside.',
      detail: 'Tongue-to-roof trick', segment: 'breath', time: 'afternoon',
      shortTitle: 'Inside trick', cta: 'Try this' },

    { prompt: 'A gentle reminder about what is actually in this room.',
      detail: 'A gentle reality check', segment: 'text', time: 'afternoon',
      shortTitle: 'Not here', cta: 'Let go' },

    { prompt: 'A hug I can give myself in five seconds.',
      detail: 'The butterfly hug', segment: 'breath', time: 'afternoon',
      shortTitle: 'Self hug', cta: 'Try this' },

    { prompt: 'A nostril breathing pattern for a busy afternoon.',
      detail: 'Alternate nostril breathing', segment: 'breath', time: 'afternoon',
      shortTitle: 'Nostril switch', cta: 'Breathe' },

    { prompt: 'A way to press into something solid and feel held.',
      detail: 'A grounding press', segment: 'breath', time: 'afternoon',
      shortTitle: 'Palms down', cta: 'Settle in' },

    { prompt: 'A spot in my throat that could use some softening.',
      detail: 'Throat release', segment: 'text', time: 'afternoon',
      shortTitle: 'Open throat', cta: 'Soften' },

    { prompt: 'A counted breath that gives my mind something to hold.',
      detail: 'Counted breaths', segment: 'breath', time: 'afternoon',
      shortTitle: 'Count breath', cta: 'Breathe' },

    { prompt: 'A secret grounding move nobody can see me do.',
      detail: 'Secret grounding', segment: 'breath', time: 'afternoon',
      shortTitle: 'Secret move', cta: 'Try this' },

    { prompt: 'A sitting reset to center my weight in the chair.',
      detail: 'A sitting reset', segment: 'text', time: 'afternoon',
      shortTitle: 'Center weight', cta: 'Settle in' },

    { prompt: 'A way to empty my lungs that feels like a reset.',
      detail: 'Empty lungs reset', segment: 'breath', time: 'afternoon',
      shortTitle: 'Empty out', cta: 'Breathe' },

    { prompt: 'Two-second tension releases nobody will notice.',
      detail: 'Invisible micro-resets', segment: 'list', time: 'afternoon',
      shortTitle: 'Secret resets', cta: 'Try this' },

    { prompt: 'A posture reset using just my shoulder blades.',
      detail: 'A posture reset', segment: 'breath', time: 'afternoon',
      shortTitle: 'Blade squeeze', cta: 'Soften' },

    // ── STEADY: Evening (20 prompts) ──

    { prompt: 'A two-minute position that lets my body do the rest.',
      detail: 'Legs up the wall', segment: 'breath', time: 'evening',
      shortTitle: 'Legs up', cta: 'Settle in' },

    { prompt: 'A slow melt from my forehead down to my toes.',
      detail: 'A top-down body scan', segment: 'breath', time: 'evening',
      shortTitle: 'Melt down', cta: 'Soften' },

    { prompt: 'A breathing pattern built for evenings.',
      detail: 'The 4-7-8 technique', segment: 'breath', time: 'evening',
      shortTitle: '4-7-8 breath', cta: 'Breathe' },

    { prompt: 'Permission to stop reviewing how today went.',
      detail: 'Permission to stop', segment: 'text', time: 'evening',
      shortTitle: 'No review', cta: 'Let go' },

    { prompt: 'A way to sync my breathing with my heartbeat.',
      detail: 'Heart-synced breathing', segment: 'breath', time: 'evening',
      shortTitle: 'Heart pace', cta: 'Breathe' },

    { prompt: 'A full-body squeeze and release that resets everything.',
      detail: 'A total tension drop', segment: 'breath', time: 'evening',
      shortTitle: 'Squeeze all', cta: 'Let go' },

    { prompt: 'Things I can let my body release before bed.',
      detail: 'An evening release list', segment: 'list', time: 'evening',
      shortTitle: 'Release list', cta: 'Soften' },

    { prompt: 'A small thank-you I can give my feet right now.',
      detail: 'A foot thank-you', segment: 'breath', time: 'evening',
      shortTitle: 'Foot press', cta: 'Try this' },

    { prompt: 'Something that resets my jaw, face, and breathing.',
      detail: 'The power of a yawn', segment: 'text', time: 'evening',
      shortTitle: 'Just yawn', cta: 'Try this' },

    { prompt: 'A whisper breathing exercise for winding down.',
      detail: 'Whisper breathing', segment: 'breath', time: 'evening',
      shortTitle: 'Whisper calm', cta: 'Breathe' },

    { prompt: 'A slow toe curl to say goodbye to the day.',
      detail: 'Toe curls for bedtime', segment: 'breath', time: 'evening',
      shortTitle: 'Toe waves', cta: 'Soften' },

    { prompt: 'A way to let my arms go completely heavy.',
      detail: 'Dead-arm relaxation', segment: 'text', time: 'evening',
      shortTitle: 'Heavy arms', cta: 'Let go' },

    { prompt: 'A breathing exercise that tells my body: day\'s done.',
      detail: 'Day-is-done breathing', segment: 'breath', time: 'evening',
      shortTitle: 'Day is done', cta: 'Breathe' },

    { prompt: 'A tiny spot between my eyebrows that holds a lot.',
      detail: 'Third-eye release', segment: 'breath', time: 'evening',
      shortTitle: 'Brow point', cta: 'Soften' },

    { prompt: 'Something unfinished that can stay unfinished.',
      detail: 'A bedtime boundary', segment: 'text', time: 'evening',
      shortTitle: 'Until morning', cta: 'Let go' },

    { prompt: 'A gentle rocking motion for winding down in bed.',
      detail: 'A bedtime rock', segment: 'breath', time: 'evening',
      shortTitle: 'Rock gently', cta: 'Settle in' },

    { prompt: 'A five-step wind-down for my body. Two minutes.',
      detail: 'A bedtime body routine', segment: 'list', time: 'evening',
      shortTitle: 'Wind down', cta: 'Try this' },

    { prompt: 'A way to sink a little deeper into where I am.',
      detail: 'A heaviness visualization', segment: 'breath', time: 'evening',
      shortTitle: 'Sink in', cta: 'Settle in' },

    { prompt: 'An evening check-in for the tension in my jaw.',
      detail: 'Nighttime jaw check', segment: 'text', time: 'evening',
      shortTitle: 'Night jaw', cta: 'Soften' },

    { prompt: 'A humming exhale that is deeply calming.',
      detail: 'Humming exhale', segment: 'breath', time: 'evening',
      shortTitle: 'Hum breath', cta: 'Breathe' },

    // ── STEADY: Anytime (15 prompts) ──

    { prompt: 'A five-senses grounding exercise for right now.',
      detail: '5-4-3-2-1 grounding', segment: 'breath', time: 'anytime',
      shortTitle: 'Five senses', cta: 'Try this' },

    { prompt: 'One deep breath that fills my whole torso.',
      detail: 'A depth check', segment: 'breath', time: 'anytime',
      shortTitle: 'Go deeper', cta: 'Breathe' },

    { prompt: 'A way to feel the floor pushing back.',
      detail: 'Instant grounding', segment: 'breath', time: 'anytime',
      shortTitle: 'Feel the floor', cta: 'Settle in' },

    { prompt: 'A cold-water trick that resets my temperature.',
      detail: 'A cold-water trick', segment: 'text', time: 'anytime',
      shortTitle: 'Cold wrists', cta: 'Try this' },

    { prompt: 'Body signals that mean I need a break right now.',
      detail: 'Your body is talking', segment: 'list', time: 'anytime',
      shortTitle: 'Body signals', cta: 'Try this' },

    { prompt: 'A grounding trick using something cold.',
      detail: 'The ice grounding trick', segment: 'text', time: 'anytime',
      shortTitle: 'Cold ground', cta: 'Try this' },

    { prompt: 'A 3-6 breath pattern. Just three rounds.',
      detail: '3-6 breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Three and six', cta: 'Breathe' },

    { prompt: 'A squeeze-and-release for whatever is near me.',
      detail: 'Squeeze and release', segment: 'breath', time: 'anytime',
      shortTitle: 'Squeeze it', cta: 'Try this' },

    { prompt: 'Something my body needs to hear right now.',
      detail: 'A reframe', segment: 'text', time: 'anytime',
      shortTitle: 'Body reminder', cta: 'Settle in' },

    { prompt: 'An isometric press I can do with just my palms.',
      detail: 'Isometric chest press', segment: 'breath', time: 'anytime',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'A low humming sound that calms from the inside.',
      detail: 'Vagus nerve humming', segment: 'breath', time: 'anytime',
      shortTitle: 'Low hum', cta: 'Try this' },

    { prompt: 'Something my body is already handling for me.',
      detail: 'Trust the body', segment: 'text', time: 'anytime',
      shortTitle: 'Let it work', cta: 'Settle in' },

    { prompt: 'Things my body doesn\'t need that I keep giving it.',
      detail: 'A subtraction list', segment: 'list', time: 'anytime',
      shortTitle: 'Let these go', cta: 'Let go' },

    { prompt: 'A ten-second ear trick for instant quiet.',
      detail: 'Ear cupping', segment: 'breath', time: 'anytime',
      shortTitle: 'Cup ears', cta: 'Try this' },

    { prompt: 'A way to soften my eyes without closing them.',
      detail: 'A soft gaze', segment: 'text', time: 'anytime',
      shortTitle: 'Soft eyes', cta: 'Soften' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SPACE — "Quiet your mind" (90 prompts)
  // Cognitive and relational. Navigating thoughts, people, decisions.
  // Segment mix: ~38 text, ~25 breath (cognitive steps), ~17 list, ~10 fact
  // ZERO songs.
  // ═══════════════════════════════════════════════════════════════

  space: [

    // ── SPACE: Morning (25 prompts) ──

    { prompt: 'Help me pick just one thing to focus on today.',
      detail: 'One thing is enough', segment: 'text', time: 'morning',
      shortTitle: 'Just one', cta: 'Clear it' },

    { prompt: 'Something I could say no to today.',
      detail: 'A morning no', segment: 'text', time: 'morning',
      shortTitle: 'Say no', cta: 'Try this' },

    { prompt: 'A quick brain dump to clear some space.',
      detail: 'A brain dump', segment: 'breath', time: 'morning',
      shortTitle: 'Brain dump', cta: 'Clear it' },

    { prompt: 'Why writing things down actually works.',
      detail: 'A clarity fact', segment: 'fact', time: 'morning',
      shortTitle: 'Write it down', cta: 'Oh, really?' },

    { prompt: 'If I could only do three things today, which three?',
      detail: 'A filtering question', segment: 'text', time: 'morning',
      shortTitle: 'Only three', cta: 'Clear it' },

    { prompt: 'Something I\'m carrying that isn\'t mine to carry.',
      detail: 'Not your weight', segment: 'text', time: 'morning',
      shortTitle: 'Not mine', cta: 'Let it go' },

    { prompt: 'Three breaths, three words for the day.',
      detail: 'Three-word intention', segment: 'breath', time: 'morning',
      shortTitle: 'Three words', cta: 'Breathe' },

    { prompt: 'Things I don\'t owe anyone today.',
      detail: 'Permission slips', segment: 'list', time: 'morning',
      shortTitle: 'Don\'t owe', cta: 'Read on' },

    { prompt: 'A decision I\'m overcomplicating right now.',
      detail: 'A gentle push', segment: 'text', time: 'morning',
      shortTitle: 'Simpler than', cta: 'Try this' },

    { prompt: 'A way to put each worry somewhere outside my head.',
      detail: 'A containment visualization', segment: 'breath', time: 'morning',
      shortTitle: 'Box it up', cta: 'Try this' },

    { prompt: 'How many thoughts I have per day. And why it matters.',
      detail: 'A thought stat', segment: 'fact', time: 'morning',
      shortTitle: 'Thought count', cta: 'Oh, really?' },

    { prompt: 'Something I don\'t need a plan for.',
      detail: 'A planning pause', segment: 'text', time: 'morning',
      shortTitle: 'No plan needed', cta: 'Settle in' },

    { prompt: 'A breathing exercise that erases one thing at a time.',
      detail: 'Whiteboard clearing', segment: 'breath', time: 'morning',
      shortTitle: 'Erase one', cta: 'Clear it' },

    { prompt: 'Questions I don\'t need to answer today.',
      detail: 'Questions to shelve', segment: 'list', time: 'morning',
      shortTitle: 'Not today', cta: 'Skip it' },

    { prompt: 'Why the first thought of the day is rarely the truest.',
      detail: 'Morning thought filter', segment: 'text', time: 'morning',
      shortTitle: 'Wait on it', cta: 'Read on' },

    { prompt: 'One person I am glad exists. Just that.',
      detail: 'A gratitude breath', segment: 'breath', time: 'morning',
      shortTitle: 'Glad they exist', cta: 'Try this' },

    { prompt: 'A sentence that starts with "I wish someone knew..."',
      detail: 'A naming exercise', segment: 'text', time: 'morning',
      shortTitle: 'Name it', cta: 'Try this' },

    { prompt: 'Things that feel urgent but almost never are.',
      detail: 'An urgency filter', segment: 'list', time: 'morning',
      shortTitle: 'Not urgent', cta: 'Read on' },

    { prompt: 'A breathing pattern for "I have enough. I am enough."',
      detail: 'Enough breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Enough', cta: 'Breathe' },

    { prompt: 'The smallest possible first step for right now.',
      detail: 'Starting is the only step', segment: 'text', time: 'morning',
      shortTitle: 'Just begin', cta: 'Try this' },

    { prompt: 'How many decisions I make per day. And what to do.',
      detail: 'Too many choices', segment: 'fact', time: 'morning',
      shortTitle: 'Decision count', cta: 'Oh, really?' },

    { prompt: 'Three things I can cross off my list right now.',
      detail: 'A list edit', segment: 'text', time: 'morning',
      shortTitle: 'Cross them off', cta: 'Clear it' },

    { prompt: 'A letting-go breath for something I\'m holding too tight.',
      detail: 'A letting-go breath', segment: 'breath', time: 'morning',
      shortTitle: 'Hold less', cta: 'Let it go' },

    { prompt: 'Scripts for saying no without any guilt.',
      detail: 'No templates', segment: 'list', time: 'morning',
      shortTitle: 'No scripts', cta: 'Read on' },

    { prompt: 'A kinder way to think about starting the day.',
      detail: 'No morning grade', segment: 'text', time: 'morning',
      shortTitle: 'No grade', cta: 'Settle in' },

    // ── SPACE: Afternoon (30 prompts) ──

    { prompt: 'Something I don\'t have to respond to right now.',
      detail: 'A reply permission slip', segment: 'text', time: 'afternoon',
      shortTitle: 'No reply needed', cta: 'Skip it' },

    { prompt: 'A one-breath check before I hit send.',
      detail: 'A reply check', segment: 'text', time: 'afternoon',
      shortTitle: 'Before I send', cta: 'Try this' },

    { prompt: 'A name for the thought loop I keep circling.',
      detail: 'Loop breaking', segment: 'text', time: 'afternoon',
      shortTitle: 'Name the loop', cta: 'Clear it' },

    { prompt: 'A breathing pattern for "I can handle this."',
      detail: 'A coping breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'I can handle it', cta: 'Breathe' },

    { prompt: 'Things that are fine to leave half-done today.',
      detail: 'Permission to pause', segment: 'list', time: 'afternoon',
      shortTitle: 'Half-done is fine', cta: 'Read on' },

    { prompt: 'Why doing one thing at a time is actually smart.',
      detail: 'A focus fact', segment: 'fact', time: 'afternoon',
      shortTitle: 'One thing only', cta: 'Oh, really?' },

    { prompt: 'A coin-flip trick for when I can\'t decide.',
      detail: 'The coin trick', segment: 'text', time: 'afternoon',
      shortTitle: 'Flip a coin', cta: 'Try this' },

    { prompt: 'A way to watch my thoughts pass without grabbing them.',
      detail: 'Cloud watching for your mind', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let them pass', cta: 'Try this' },

    { prompt: 'A kinder way to see someone who frustrated me.',
      detail: 'A perspective shift', segment: 'text', time: 'afternoon',
      shortTitle: 'Kinder view', cta: 'Let it go' },

    { prompt: 'Three breaths to set down what I\'ve been carrying.',
      detail: 'A setting-down breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Set it down', cta: 'Let it go' },

    { prompt: 'Phrases that help when the afternoon feels heavy.',
      detail: 'Things to tell yourself', segment: 'list', time: 'afternoon',
      shortTitle: 'Tell myself', cta: 'Read on' },

    { prompt: 'Why mental tiredness is real, physical tiredness.',
      detail: 'Brain energy', segment: 'fact', time: 'afternoon',
      shortTitle: 'Brain is tired', cta: 'Oh, really?' },

    { prompt: 'A breath to sort what I can and can\'t control.',
      detail: 'A control filter', segment: 'breath', time: 'afternoon',
      shortTitle: 'Control check', cta: 'Clear it' },

    { prompt: 'A way to pause a conversation without ending it.',
      detail: 'A conversation boundary', segment: 'text', time: 'afternoon',
      shortTitle: 'Think first', cta: 'Try this' },

    { prompt: 'A mental volume dial for the noise in my head.',
      detail: 'A mental volume dial', segment: 'breath', time: 'afternoon',
      shortTitle: 'Turn it down', cta: 'Try this' },

    { prompt: 'Decisions I can safely make in under ten seconds.',
      detail: 'Quick decision shortcuts', segment: 'list', time: 'afternoon',
      shortTitle: 'Decide fast', cta: 'Read on' },

    { prompt: 'Something that feels urgent but actually isn\'t.',
      detail: 'An urgency check', segment: 'text', time: 'afternoon',
      shortTitle: 'It can wait', cta: 'Skip it' },

    { prompt: 'A breath to let one thought leave. Just one.',
      detail: 'A release breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let one go', cta: 'Breathe' },

    { prompt: 'A gentler way to think about "good enough."',
      detail: 'A perfectionism check', segment: 'text', time: 'afternoon',
      shortTitle: 'Good enough', cta: 'Let it go' },

    { prompt: 'A way to let my thoughts scroll by without grabbing.',
      detail: 'Ticker tape thoughts', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let them scroll', cta: 'Try this' },

    { prompt: 'Things that felt like emergencies but turned out fine.',
      detail: 'A hindsight list', segment: 'list', time: 'afternoon',
      shortTitle: 'It was fine', cta: 'Read on' },

    { prompt: 'A reminder that I am not behind on anything.',
      detail: 'No invisible deadline', segment: 'text', time: 'afternoon',
      shortTitle: 'Not behind', cta: 'Read on' },

    { prompt: 'A fog-clearing breath to make the view clearer.',
      detail: 'A fog-clearing breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Clear the fog', cta: 'Breathe' },

    { prompt: 'The advice I would give a friend with my problem.',
      detail: 'A self-advice flip', segment: 'text', time: 'afternoon',
      shortTitle: 'Advise myself', cta: 'Try this' },

    { prompt: 'How long it really takes to refocus after a break.',
      detail: 'A refocus fact', segment: 'fact', time: 'afternoon',
      shortTitle: 'Refocus time', cta: 'Oh, really?' },

    { prompt: 'A closing breath that says "done" to the last task.',
      detail: 'A closing breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Say done', cta: 'Clear it' },

    { prompt: 'Something I don\'t have to explain to anyone.',
      detail: 'A boundary reminder', segment: 'text', time: 'afternoon',
      shortTitle: 'No explaining', cta: 'Let it go' },

    { prompt: 'Boundaries that are reasonable even when uncomfortable.',
      detail: 'Boundary reminders', segment: 'list', time: 'afternoon',
      shortTitle: 'Fair limits', cta: 'Read on' },

    { prompt: 'A breath to gather my scattered attention into one place.',
      detail: 'An attention gather', segment: 'breath', time: 'afternoon',
      shortTitle: 'Gather focus', cta: 'Breathe' },

    { prompt: 'A comparison I\'m making that isn\'t fair to me.',
      detail: 'A comparison check', segment: 'text', time: 'afternoon',
      shortTitle: 'Stop comparing', cta: 'Let it go' },

    // ── SPACE: Evening (20 prompts) ──

    { prompt: 'A way to acknowledge a hard conversation I had.',
      detail: 'A hard-day acknowledgment', segment: 'text', time: 'evening',
      shortTitle: 'I showed up', cta: 'Read on' },

    { prompt: 'Permission to stop replaying something from today.',
      detail: 'A replay stopper', segment: 'text', time: 'evening',
      shortTitle: 'Stop replaying', cta: 'Let it go' },

    { prompt: 'A breath for the gap between today and tomorrow.',
      detail: 'An evening presence breath', segment: 'breath', time: 'evening',
      shortTitle: 'Right now only', cta: 'Breathe' },

    { prompt: 'A brain-to-page exercise so my mind can rest.',
      detail: 'A before-bed brain dump', segment: 'breath', time: 'evening',
      shortTitle: 'Brain to page', cta: 'Clear it' },

    { prompt: 'Things that are okay to leave unsorted until morning.',
      detail: 'A tomorrow list', segment: 'list', time: 'evening',
      shortTitle: 'Leave it', cta: 'Skip it' },

    { prompt: 'A reminder that today\'s messy parts are survivable.',
      detail: 'An evening reassurance', segment: 'text', time: 'evening',
      shortTitle: 'Still here', cta: 'Read on' },

    { prompt: 'Five breaths to forgive myself for one small thing.',
      detail: 'A forgiveness breath', segment: 'breath', time: 'evening',
      shortTitle: 'Forgive one', cta: 'Breathe' },

    { prompt: 'If I could put today in a drawer, what\'s the label?',
      detail: 'A closing metaphor', segment: 'text', time: 'evening',
      shortTitle: 'Close the drawer', cta: 'Try this' },

    { prompt: 'A reason to stop worrying about tomorrow tonight.',
      detail: 'A worry reminder', segment: 'text', time: 'evening',
      shortTitle: 'Not tonight', cta: 'Let it go' },

    { prompt: 'Things I handled today, even if they felt small.',
      detail: 'An accomplishment list', segment: 'list', time: 'evening',
      shortTitle: 'I handled it', cta: 'Read on' },

    { prompt: 'A way to shelve my thoughts gently until morning.',
      detail: 'Thought shelving', segment: 'breath', time: 'evening',
      shortTitle: 'Shelve them', cta: 'Try this' },

    { prompt: 'Someone I was frustrated with who\'s already moved on.',
      detail: 'A release reminder', segment: 'text', time: 'evening',
      shortTitle: 'They moved on', cta: 'Let it go' },

    { prompt: 'A breath to gently close the door on today.',
      detail: 'Closing the day', segment: 'breath', time: 'evening',
      shortTitle: 'Close the door', cta: 'Breathe' },

    { prompt: 'Why sleeping on a problem actually works.',
      detail: 'A sleep-on-it fact', segment: 'fact', time: 'evening',
      shortTitle: 'Sleep on it', cta: 'Oh, really?' },

    { prompt: 'Things my mind doesn\'t need to solve before bed.',
      detail: 'A stop-solving list', segment: 'list', time: 'evening',
      shortTitle: 'Stop solving', cta: 'Skip it' },

    { prompt: 'One small thing that went well today.',
      detail: 'One good thing', segment: 'text', time: 'evening',
      shortTitle: 'One good thing', cta: 'Try this' },

    { prompt: 'A breath to turn the volume of my thoughts down.',
      detail: 'A thought-dimmer breath', segment: 'breath', time: 'evening',
      shortTitle: 'Turn it down', cta: 'Breathe' },

    { prompt: 'Why nobody remembers the awkward thing I said.',
      detail: 'A cringe release', segment: 'fact', time: 'evening',
      shortTitle: 'They forgot', cta: 'Let it go' },

    { prompt: 'A zoomed-out view of today. Most of it was fine.',
      detail: 'A zoomed-out view', segment: 'text', time: 'evening',
      shortTitle: 'Whole day', cta: 'Read on' },

    { prompt: 'Gentle thoughts to carry into sleep tonight.',
      detail: 'Bedtime thoughts', segment: 'list', time: 'evening',
      shortTitle: 'Carry these', cta: 'Read on' },

    // ── SPACE: Anytime (15 prompts) ──

    { prompt: 'A thought that\'s just noise, not worth my attention.',
      detail: 'A thought filter', segment: 'text', time: 'anytime',
      shortTitle: 'Just noise', cta: 'Let it go' },

    { prompt: 'Three exhales to let go of three thoughts.',
      detail: 'A three-thought release', segment: 'breath', time: 'anytime',
      shortTitle: 'Three exhales', cta: 'Breathe' },

    { prompt: 'Things that feel like problems but are just inconveniences.',
      detail: 'A proportionality check', segment: 'list', time: 'anytime',
      shortTitle: 'Just inconvenient', cta: 'Read on' },

    { prompt: 'Permission to say "I don\'t know" and mean it.',
      detail: 'Permission to not know', segment: 'text', time: 'anytime',
      shortTitle: 'Don\'t know yet', cta: 'Read on' },

    { prompt: 'Why "I feel bad about this" and "this is bad" differ.',
      detail: 'A feeling-fact split', segment: 'fact', time: 'anytime',
      shortTitle: 'Feeling vs fact', cta: 'Oh, really?' },

    { prompt: 'A breath for what I can control and what I can\'t.',
      detail: 'A control breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Control breath', cta: 'Breathe' },

    { prompt: 'Permission to change my mind about something.',
      detail: 'A permission note', segment: 'text', time: 'anytime',
      shortTitle: 'Change it', cta: 'Read on' },

    { prompt: 'Kind ways to set a boundary with someone.',
      detail: 'Boundary phrases', segment: 'list', time: 'anytime',
      shortTitle: 'Kind limits', cta: 'Read on' },

    { prompt: 'A one-breath reset I can do right now.',
      detail: 'A micro-reset', segment: 'breath', time: 'anytime',
      shortTitle: 'Tiny reset', cta: 'Try this' },

    { prompt: 'A reminder that I\'m allowed to take up space.',
      detail: 'A space reminder', segment: 'text', time: 'anytime',
      shortTitle: 'Take up space', cta: 'Read on' },

    { prompt: 'Why rejection actually hurts. Literally.',
      detail: 'Rejection is real pain', segment: 'fact', time: 'anytime',
      shortTitle: 'It hurts for real', cta: 'Oh, really?' },

    { prompt: 'A pause for when everything feels shaken up.',
      detail: 'A snow globe pause', segment: 'breath', time: 'anytime',
      shortTitle: 'Let it settle', cta: 'Try this' },

    { prompt: 'Thoughts worth questioning instead of believing.',
      detail: 'Question these', segment: 'list', time: 'anytime',
      shortTitle: 'Question it', cta: 'Read on' },

    { prompt: 'A reminder that my version of events isn\'t the only one.',
      detail: 'A narrative check', segment: 'text', time: 'anytime',
      shortTitle: 'One version', cta: 'Read on' },

    { prompt: 'A breath for "I will figure this out."',
      detail: 'A confidence breath', segment: 'breath', time: 'anytime',
      shortTitle: 'I will', cta: 'Breathe' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SMALL — "Treat yourself" (90 prompts)
  // Tiny, tangible, warm. Play, lightness, micro-connection, small comforts.
  // Not food-focused. Segment mix: ~38 text, ~15 breath, ~15 list,
  // ~12 fact, ~10 song
  // ═══════════════════════════════════════════════════════════════

  small: [

    // ── SMALL: Morning (25 prompts) ──

    { prompt: 'Something to wear today that\'s just for me.',
      detail: 'Dress for yourself', segment: 'text', time: 'morning',
      shortTitle: 'Wear this', cta: 'Do it' },

    { prompt: 'A way to make my first sip feel like a ritual.',
      detail: 'A slow first sip', segment: 'text', time: 'morning',
      shortTitle: 'Slow sip', cta: 'Try it' },

    { prompt: 'A song that feels like a hand on my back.',
      detail: 'A quiet confidence track', segment: 'song', time: 'morning',
      shortTitle: 'You got this', cta: 'Play it' },

    { prompt: 'A tiny reaching-out text to send right now.',
      detail: 'A small reaching out', segment: 'text', time: 'morning',
      shortTitle: 'Send it', cta: 'Do it' },

    { prompt: 'A 30-second thing involving a window and fresh air.',
      detail: 'Fresh air as a gift', segment: 'text', time: 'morning',
      shortTitle: 'Open window', cta: 'Try it' },

    { prompt: 'Something my brain does when I smile. Even a fake one.',
      detail: 'A brain hack', segment: 'fact', time: 'morning',
      shortTitle: 'Smile trick', cta: 'Oh, really?' },

    { prompt: 'A small luxury I already own but keep forgetting.',
      detail: 'Soft socks matter', segment: 'text', time: 'morning',
      shortTitle: 'Small luxury', cta: 'Do it' },

    { prompt: 'Kind things I could do for myself before noon.',
      detail: 'Morning self-care menu', segment: 'list', time: 'morning',
      shortTitle: 'Before noon', cta: 'Go on' },

    { prompt: 'A cat-like stretch I can do before I even get up.',
      detail: 'A cat stretch', segment: 'breath', time: 'morning',
      shortTitle: 'Cat stretch', cta: 'Try it' },

    { prompt: 'One kind thing to say to myself in the mirror.',
      detail: 'A mirror moment', segment: 'text', time: 'morning',
      shortTitle: 'Mirror kind', cta: 'Try it' },

    { prompt: 'A scent that can improve my mood this morning.',
      detail: 'A scent boost', segment: 'fact', time: 'morning',
      shortTitle: 'Morning scent', cta: 'Oh, really?' },

    { prompt: 'A song that makes breakfast feel like a celebration.',
      detail: 'A breakfast soundtrack', segment: 'song', time: 'morning',
      shortTitle: 'Morning track', cta: 'Play it' },

    { prompt: 'A kind note to write to my future self today.',
      detail: 'A future kindness', segment: 'text', time: 'morning',
      shortTitle: 'Note to self', cta: 'Do it' },

    { prompt: 'A sharp, alive sensation I can give myself right now.',
      detail: 'A cold splash', segment: 'breath', time: 'morning',
      shortTitle: 'Wake up trick', cta: 'Try it' },

    { prompt: 'One kind thing for morning-me that takes five minutes.',
      detail: 'Five minutes of peace', segment: 'text', time: 'morning',
      shortTitle: 'Five minutes', cta: 'Try it' },

    { prompt: 'Tiny morning pleasures most people forget to notice.',
      detail: 'Morning pleasures', segment: 'list', time: 'morning',
      shortTitle: 'Tiny pleasures', cta: 'Go on' },

    { prompt: 'A surprising reason to laugh more today.',
      detail: 'Laughter as self-care', segment: 'fact', time: 'morning',
      shortTitle: 'Laugh more', cta: 'Oh, really?' },

    { prompt: 'A phone-free experiment for the first 15 minutes.',
      detail: 'A phone-free start', segment: 'text', time: 'morning',
      shortTitle: 'Phone away', cta: 'Try it' },

    { prompt: 'A scent-only breath to anchor me right here.',
      detail: 'A scent breath', segment: 'breath', time: 'morning',
      shortTitle: 'Smell the air', cta: 'Breathe' },

    { prompt: 'Something nice for no reason at all.',
      detail: 'A small surprise', segment: 'text', time: 'morning',
      shortTitle: 'No reason', cta: 'Go on' },

    { prompt: 'A small favor I can do for tonight-me right now.',
      detail: 'A future-you favor', segment: 'text', time: 'morning',
      shortTitle: 'Future favor', cta: 'Do it' },

    { prompt: 'What happens when I walk barefoot on grass.',
      detail: 'Barefoot science', segment: 'fact', time: 'morning',
      shortTitle: 'Go barefoot', cta: 'Oh, really?' },

    { prompt: 'A song that makes getting dressed feel like a movie.',
      detail: 'A getting-ready track', segment: 'song', time: 'morning',
      shortTitle: 'Getting ready', cta: 'Play it' },

    { prompt: 'Three breaths for three things I\'m looking forward to.',
      detail: 'Anticipation breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Look forward', cta: 'Breathe' },

    { prompt: 'A reminder to use the nice one today. I\'m worth it.',
      detail: 'Use the good stuff', segment: 'text', time: 'morning',
      shortTitle: 'Good stuff', cta: 'Do it' },

    // ── SMALL: Afternoon (30 prompts) ──

    { prompt: 'A specific compliment I could text a friend right now.',
      detail: 'A micro-connection', segment: 'text', time: 'afternoon',
      shortTitle: 'Tell a friend', cta: 'Do it' },

    { prompt: 'Free warmth I can stand in for thirty seconds.',
      detail: 'A sun bath', segment: 'text', time: 'afternoon',
      shortTitle: 'Find sun', cta: 'Try it' },

    { prompt: 'A song that turns the afternoon into a stroll.',
      detail: 'An afternoon shift track', segment: 'song', time: 'afternoon',
      shortTitle: 'Afternoon stroll', cta: 'Play it' },

    { prompt: 'A tiny creative act that takes less than a minute.',
      detail: 'A small creative act', segment: 'text', time: 'afternoon',
      shortTitle: 'Doodle', cta: 'Try it' },

    { prompt: 'Why giving a small gift feels better than getting one.',
      detail: 'Giving feels better', segment: 'fact', time: 'afternoon',
      shortTitle: 'Give something', cta: 'Oh, really?' },

    { prompt: 'Two-minute treats I probably have access to right now.',
      detail: 'Instant treats', segment: 'list', time: 'afternoon',
      shortTitle: 'Quick treats', cta: 'Go on' },

    { prompt: 'The guilty pleasure song. Time to sing the chorus.',
      detail: 'A guilty pleasure song', segment: 'song', time: 'afternoon',
      shortTitle: 'Guilty pleasure', cta: 'Play it' },

    { prompt: 'A way to make eating something slow and intentional.',
      detail: 'Slow sweetness', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow bite', cta: 'Try it' },

    { prompt: 'A tiny hand ritual that feels like self-care.',
      detail: 'A hand ritual', segment: 'text', time: 'afternoon',
      shortTitle: 'Hand ritual', cta: 'Try it' },

    { prompt: 'Three breaths that are a micro-treat for my attention.',
      detail: 'Attention rest', segment: 'breath', time: 'afternoon',
      shortTitle: 'Attention rest', cta: 'Breathe' },

    { prompt: 'Things that count as self-care even though they seem tiny.',
      detail: 'It counts', segment: 'list', time: 'afternoon',
      shortTitle: 'It counts', cta: 'Go on' },

    { prompt: 'What happens in my body when I touch my own arm gently.',
      detail: 'Self-touch science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Gentle touch', cta: 'Oh, really?' },

    { prompt: 'A photo on my phone that makes me smile. Not social media.',
      detail: 'A memory visit', segment: 'text', time: 'afternoon',
      shortTitle: 'Old photo', cta: 'Do it' },

    { prompt: 'A small unprompted kindness I can give a stranger.',
      detail: 'A micro-kindness', segment: 'text', time: 'afternoon',
      shortTitle: 'Small kindness', cta: 'Do it' },

    { prompt: 'A song that makes me nod slowly and feel okay.',
      detail: 'A head-nod track', segment: 'song', time: 'afternoon',
      shortTitle: 'Nod along', cta: 'Play it' },

    { prompt: 'A tiny literary adventure with a random book page.',
      detail: 'Random page read', segment: 'text', time: 'afternoon',
      shortTitle: 'Random page', cta: 'Try it' },

    { prompt: 'Free things that feel weirdly expensive.',
      detail: 'Luxury at no cost', segment: 'list', time: 'afternoon',
      shortTitle: 'Free luxury', cta: 'Go on' },

    { prompt: 'A mindful sip of water. That\'s the whole activity.',
      detail: 'A mindful sip', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow water', cta: 'Try it' },

    { prompt: 'Why nostalgia is actually good for me.',
      detail: 'Nostalgia as medicine', segment: 'fact', time: 'afternoon',
      shortTitle: 'Happy memory', cta: 'Oh, really?' },

    { prompt: 'One minute at a window. No phone. Just out there.',
      detail: 'A window minute', segment: 'text', time: 'afternoon',
      shortTitle: 'Window gaze', cta: 'Try it' },

    { prompt: 'Five breaths for five small things that went right.',
      detail: 'A wins breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Small wins', cta: 'Breathe' },

    { prompt: 'A tiny treat under five dollars I normally skip.',
      detail: 'A micro-indulgence', segment: 'text', time: 'afternoon',
      shortTitle: 'Tiny treat', cta: 'Do it' },

    { prompt: 'Nice things I can do for future-me before today ends.',
      detail: 'Gifts for later', segment: 'list', time: 'afternoon',
      shortTitle: 'Future favors', cta: 'Go on' },

    { prompt: 'One tiny thing to straighten. A small bit of order.',
      detail: 'Micro-organizing', segment: 'text', time: 'afternoon',
      shortTitle: 'Straighten one', cta: 'Try it' },

    { prompt: 'Why spending on experiences beats spending on things.',
      detail: 'An experience fact', segment: 'fact', time: 'afternoon',
      shortTitle: 'Buy experiences', cta: 'Oh, really?' },

    { prompt: 'A grounding breath that\'s also a treat for my nose.',
      detail: 'A grounding sniff', segment: 'breath', time: 'afternoon',
      shortTitle: 'Nose ground', cta: 'Breathe' },

    { prompt: 'A 30-second phone change I\'ll notice a hundred times.',
      detail: 'A wallpaper swap', segment: 'text', time: 'afternoon',
      shortTitle: 'New wallpaper', cta: 'Do it' },

    { prompt: 'A song I loved at fourteen. Play it and feel what comes.',
      detail: 'A nostalgia track', segment: 'song', time: 'afternoon',
      shortTitle: 'Age fourteen', cta: 'Play it' },

    { prompt: 'Things that are always worth pausing for.',
      detail: 'Worth pausing for', segment: 'list', time: 'afternoon',
      shortTitle: 'Pause for these', cta: 'Go on' },

    { prompt: 'A stretch that feels like taking up space on purpose.',
      detail: 'A stretch treat', segment: 'breath', time: 'afternoon',
      shortTitle: 'Arms wide', cta: 'Try it' },

    // ── SMALL: Evening (20 prompts) ──

    { prompt: 'Something small I can light that changes the room.',
      detail: 'A small flame', segment: 'text', time: 'evening',
      shortTitle: 'Light one', cta: 'Do it' },

    { prompt: 'The softest thing I own. Time to put it on.',
      detail: 'Comfort dressing', segment: 'text', time: 'evening',
      shortTitle: 'Soft clothes', cta: 'Do it' },

    { prompt: 'A song for doing the dishes and feeling at peace.',
      detail: 'A dishwashing track', segment: 'song', time: 'evening',
      shortTitle: 'Dish track', cta: 'Play it' },

    { prompt: 'A warm drink held with both hands. That\'s the whole thing.',
      detail: 'A warm-hands moment', segment: 'text', time: 'evening',
      shortTitle: 'Warm hands', cta: 'Try it' },

    { prompt: 'Something about waiting that puts tonight in perspective.',
      detail: 'No waiting tonight', segment: 'fact', time: 'evening',
      shortTitle: 'No waiting', cta: 'Oh, really?' },

    { prompt: 'Small evening rituals that feel like a warm blanket.',
      detail: 'Cozy rituals', segment: 'list', time: 'evening',
      shortTitle: 'Cozy list', cta: 'Go on' },

    { prompt: 'An extra few minutes of warmth. Not for hygiene.',
      detail: 'An extra few minutes', segment: 'text', time: 'evening',
      shortTitle: 'Longer shower', cta: 'Do it' },

    { prompt: 'One page of a book. That still counts as reading.',
      detail: 'One-page reading', segment: 'text', time: 'evening',
      shortTitle: 'One page', cta: 'Try it' },

    { prompt: 'A warm-hands trick that is a gift from me to me.',
      detail: 'Warm palm eye rest', segment: 'breath', time: 'evening',
      shortTitle: 'Warm eyes', cta: 'Try it' },

    { prompt: 'Why piling on the blankets tonight is a good idea.',
      detail: 'Blanket science', segment: 'fact', time: 'evening',
      shortTitle: 'Pile blankets', cta: 'Oh, really?' },

    { prompt: 'A song that feels like being tucked in by someone warm.',
      detail: 'A tucked-in track', segment: 'song', time: 'evening',
      shortTitle: 'Tucked in', cta: 'Play it' },

    { prompt: 'A two-minute phone call that could change my night.',
      detail: 'A voice connection', segment: 'text', time: 'evening',
      shortTitle: 'Call someone', cta: 'Do it' },

    { prompt: 'Tiny luxuries that cost nothing and are mine tonight.',
      detail: 'Free luxuries', segment: 'list', time: 'evening',
      shortTitle: 'Free tonight', cta: 'Go on' },

    { prompt: 'A slow hand ritual. Thirty seconds of gentleness.',
      detail: 'A hand ritual', segment: 'breath', time: 'evening',
      shortTitle: 'Hand care', cta: 'Try it' },

    { prompt: 'One specific thing that deserves to be noticed tonight.',
      detail: 'One specific thing', segment: 'text', time: 'evening',
      shortTitle: 'Notice one', cta: 'Do it' },

    { prompt: 'My medical permission to look at baby animals.',
      detail: 'Cute animal science', segment: 'fact', time: 'evening',
      shortTitle: 'Baby animals', cta: 'Oh, really?' },

    { prompt: 'A phone-free experiment for the last hour of my night.',
      detail: 'A phone-free hour', segment: 'text', time: 'evening',
      shortTitle: 'Phone away', cta: 'Try it' },

    { prompt: 'Five breaths of warmth in and the whole day out.',
      detail: 'A warm breathing close', segment: 'breath', time: 'evening',
      shortTitle: 'Breathe warmth', cta: 'Breathe' },

    { prompt: 'Things that make a bed feel more inviting tonight.',
      detail: 'Bed prep ideas', segment: 'list', time: 'evening',
      shortTitle: 'Better bed', cta: 'Go on' },

    { prompt: 'A small pillow upgrade I can do right now.',
      detail: 'A pillow upgrade', segment: 'text', time: 'evening',
      shortTitle: 'Pillow treat', cta: 'Do it' },

    // ── SMALL: Anytime (15 prompts) ──

    { prompt: 'Something beautiful near me worth a photo. Just to have.',
      detail: 'A private photo', segment: 'text', time: 'anytime',
      shortTitle: 'Take a photo', cta: 'Do it' },

    { prompt: 'Why crying is one of the most human things we do.',
      detail: 'A crying fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Let it out', cta: 'Oh, really?' },

    { prompt: 'A song that feels like being wrapped in something warm.',
      detail: 'A comfort track', segment: 'song', time: 'anytime',
      shortTitle: 'Warm song', cta: 'Play it' },

    { prompt: 'Three breaths, three kind thoughts for someone I love.',
      detail: 'Kindness breathing', segment: 'breath', time: 'anytime',
      shortTitle: 'Kind breaths', cta: 'Breathe' },

    { prompt: 'Things that always make things a little better.',
      detail: 'Universal comforts', segment: 'list', time: 'anytime',
      shortTitle: 'Always better', cta: 'Go on' },

    { prompt: 'Permission to eat something just for the pleasure of it.',
      detail: 'Pleasure as fuel', segment: 'text', time: 'anytime',
      shortTitle: 'Eat for joy', cta: 'Do it' },

    { prompt: 'The smell of rain has a name. And it\'s beautiful.',
      detail: 'A rain fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Rain smell', cta: 'Oh, really?' },

    { prompt: 'An unprompted compliment I can give someone today.',
      detail: 'A free gift to give', segment: 'text', time: 'anytime',
      shortTitle: 'Give a compliment', cta: 'Do it' },

    { prompt: 'A texture I love. Imagining it under my fingers.',
      detail: 'A texture meditation', segment: 'breath', time: 'anytime',
      shortTitle: 'Soft texture', cta: 'Try it' },

    { prompt: 'Comforts I can access right now without spending a cent.',
      detail: 'Free comforts', segment: 'list', time: 'anytime',
      shortTitle: 'Free comfort', cta: 'Go on' },

    { prompt: 'Why music and chocolate do the same thing to my brain.',
      detail: 'Music as chocolate', segment: 'fact', time: 'anytime',
      shortTitle: 'Music dopamine', cta: 'Oh, really?' },

    { prompt: 'A song for feeling held without being touched.',
      detail: 'A holding track', segment: 'song', time: 'anytime',
      shortTitle: 'Feel held', cta: 'Play it' },

    { prompt: 'One tiny thing my future self will thank me for.',
      detail: 'A future-you gift', segment: 'text', time: 'anytime',
      shortTitle: 'Future thanks', cta: 'Do it' },

    { prompt: 'A gentle arm squeeze. My body won\'t know the difference.',
      detail: 'Self-comfort touch', segment: 'breath', time: 'anytime',
      shortTitle: 'Arm squeeze', cta: 'Try it' },

    { prompt: 'Ways to make any ordinary moment a little more special.',
      detail: 'Ordinary to special', segment: 'list', time: 'anytime',
      shortTitle: 'Make it special', cta: 'Go on' },
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
