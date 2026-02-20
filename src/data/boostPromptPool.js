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

    { prompt: 'Your body has been horizontal for hours. Stand up and stretch your arms overhead for ten seconds.',
      detail: 'Just ten seconds', segment: 'breath', time: 'morning',
      shortTitle: 'Stand tall', cta: 'Get up' },

    { prompt: 'Before you check your phone, look out a window. What color is the sky right now?',
      detail: 'One glance, no screen', segment: 'text', time: 'morning',
      shortTitle: 'Look first', cta: 'Try this' },

    { prompt: 'Octopuses have three hearts. Two stop beating when they swim. Your one heart is doing great.',
      detail: 'A wild fact to start the day', segment: 'fact', time: 'morning',
      shortTitle: 'Three hearts', cta: 'Oh, really?' },

    { prompt: 'Roll your ankles in circles. Five times each direction. You just woke up your whole nervous system.',
      detail: 'A tiny wake-up trick', segment: 'breath', time: 'morning',
      shortTitle: 'Wake your feet', cta: 'Try this' },

    { prompt: 'Honey never spoils. Archaeologists found 3,000-year-old honey in Egyptian tombs and it was still edible.',
      detail: 'Something to think about at breakfast', segment: 'fact', time: 'morning',
      shortTitle: 'Ancient honey', cta: 'Oh, really?' },

    { prompt: 'Here is a song that feels like the first light coming through the curtains.',
      detail: 'A gentle first track', segment: 'song', time: 'morning',
      shortTitle: 'First light', cta: 'Play it' },

    { prompt: 'One thing to notice today: the temperature of the air the moment you step outside.',
      detail: 'Just that one thing', segment: 'text', time: 'morning',
      shortTitle: 'Notice this', cta: 'Try this' },

    { prompt: 'Shake your hands out fast for ten seconds. Like you are flicking water off your fingers.',
      detail: 'Instant circulation boost', segment: 'breath', time: 'morning',
      shortTitle: 'Shake it out', cta: 'Move' },

    { prompt: 'There is a jellyfish that is biologically immortal. It can revert to its youngest form when stressed.',
      detail: 'Nature does wild things', segment: 'fact', time: 'morning',
      shortTitle: 'Immortal jelly', cta: 'Oh, really?' },

    { prompt: 'Walk to a different room than the one you woke up in. Stand there for a moment. New room, new energy.',
      detail: 'Change your scenery by ten feet', segment: 'text', time: 'morning',
      shortTitle: 'New room', cta: 'Get up' },

    { prompt: 'Take three deep breaths where the exhale is longer than the inhale. You are gently telling your body the day is safe.',
      detail: 'A nervous system hello', segment: 'breath', time: 'morning',
      shortTitle: 'Easy breaths', cta: 'Breathe' },

    { prompt: 'Bananas are berries. Strawberries are not. Botany is chaos and that is kind of wonderful.',
      detail: 'A breakfast table fact', segment: 'fact', time: 'morning',
      shortTitle: 'Berry chaos', cta: 'Oh, really?' },

    { prompt: 'Here are a few things worth looking at on a morning walk, even a short one.',
      detail: 'Small things you might miss', segment: 'list', time: 'morning',
      shortTitle: 'Walk and look', cta: 'Try this' },

    { prompt: 'Your brain is about 73% water. Drinking a glass right now is basically watering your thoughts.',
      detail: 'Hydration as brain care', segment: 'fact', time: 'morning',
      shortTitle: 'Water your brain', cta: 'Oh, really?' },

    { prompt: 'Raise your eyebrows as high as they go. Hold for three seconds. Release. You just relaxed your whole forehead.',
      detail: 'A face wake-up', segment: 'breath', time: 'morning',
      shortTitle: 'Brow lift', cta: 'Try this' },

    { prompt: 'A song that sounds like getting ready with no rush and nowhere urgent to be.',
      detail: 'Morning pace, no hurry', segment: 'song', time: 'morning',
      shortTitle: 'No rush', cta: 'Play it' },

    { prompt: 'Trees in a forest share nutrients through underground fungal networks. They literally feed each other.',
      detail: 'The wood wide web', segment: 'fact', time: 'morning',
      shortTitle: 'Tree network', cta: 'Oh, really?' },

    { prompt: 'Open a door. Stand in the doorway. Feel the air difference between the two rooms. That is a tiny sensory adventure.',
      detail: 'Micro-exploration', segment: 'text', time: 'morning',
      shortTitle: 'Doorway air', cta: 'Try this' },

    { prompt: 'Scrunch your toes tight for five seconds, then release. A weirdly satisfying way to start the morning.',
      detail: 'From the ground up', segment: 'breath', time: 'morning',
      shortTitle: 'Toe scrunch', cta: 'Try this' },

    { prompt: 'The color of the sky at sunrise is different every single day. You have never seen today\'s version before.',
      detail: 'A one-time-only sky', segment: 'text', time: 'morning',
      shortTitle: 'Today\'s sky', cta: 'Look up' },

    { prompt: 'Here is a short list of things that are true and also kind of incredible about your body.',
      detail: 'You are more amazing than you think', segment: 'list', time: 'morning',
      shortTitle: 'Body facts', cta: 'Oh, really?' },

    { prompt: 'Hum a note. Any note. Humming activates your vagus nerve, which tells your body to settle.',
      detail: 'Sound as a reset', segment: 'breath', time: 'morning',
      shortTitle: 'Hum one note', cta: 'Try this' },

    { prompt: 'Sea otters hold hands while they sleep so they do not drift apart. That is just a fact you should have.',
      detail: 'The gentlest animal fact', segment: 'fact', time: 'morning',
      shortTitle: 'Otter hands', cta: 'Oh, really?' },

    { prompt: 'Twist your torso gently left and right, hands on hips. Like wringing out a towel. Your spine will thank you.',
      detail: 'A morning twist', segment: 'breath', time: 'morning',
      shortTitle: 'Spinal twist', cta: 'Move' },

    { prompt: 'Name one thing you are looking forward to today. Even something tiny. That small pull matters.',
      detail: 'One small pull forward', segment: 'text', time: 'morning',
      shortTitle: 'One thing', cta: 'Try this' },

    // ── LIFT: Afternoon (30 prompts) ──

    { prompt: 'Your body has been sitting for a while. Stand up for ten seconds. That is it.',
      detail: 'Just ten seconds of standing', segment: 'breath', time: 'afternoon',
      shortTitle: 'Stand up', cta: 'Get up' },

    { prompt: 'A group of flamingos is called a flamboyance. You are now armed with the best animal collective noun.',
      detail: 'A fact that deserves to be shared', segment: 'fact', time: 'afternoon',
      shortTitle: 'Flamboyance', cta: 'Oh, really?' },

    { prompt: 'Roll your shoulders backward five times. Slowly. You have probably been hunching without noticing.',
      detail: 'A quick posture check', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulder rolls', cta: 'Move' },

    { prompt: 'Here is a song that sounds like walking out of a meeting and into the sunshine.',
      detail: 'Instant mood shift', segment: 'song', time: 'afternoon',
      shortTitle: 'Walk out song', cta: 'Play it' },

    { prompt: 'Light takes 8 minutes and 20 seconds to reach Earth from the Sun. The light you see right now left the Sun before you read this.',
      detail: 'Time-traveling photons', segment: 'fact', time: 'afternoon',
      shortTitle: 'Sunlight delay', cta: 'Oh, really?' },

    { prompt: 'Tap the tops of your thighs with your palms, alternating, for ten seconds. It is a strange little energy jolt.',
      detail: 'A percussive wake-up', segment: 'breath', time: 'afternoon',
      shortTitle: 'Thigh taps', cta: 'Try this' },

    { prompt: 'Pick up the nearest object. Hold it. Notice its weight, temperature, texture. You just arrived in the present moment.',
      detail: 'A grounding spark', segment: 'text', time: 'afternoon',
      shortTitle: 'Hold something', cta: 'Try this' },

    { prompt: 'Crows can recognize human faces and hold grudges. They also give gifts to people who feed them.',
      detail: 'Crows remember', segment: 'fact', time: 'afternoon',
      shortTitle: 'Clever crows', cta: 'Oh, really?' },

    { prompt: 'March in place for fifteen seconds. Lift your knees. It is absurd and it works.',
      detail: 'Quick and a little silly', segment: 'breath', time: 'afternoon',
      shortTitle: 'Desk march', cta: 'Get up' },

    { prompt: 'Here is a short list of tiny things you could do in the next two minutes that might surprise you.',
      detail: 'Micro-adventures', segment: 'list', time: 'afternoon',
      shortTitle: 'Two minutes', cta: 'Try this' },

    { prompt: 'Your nose can detect over one trillion different scents. Right now, try to name the one closest to you.',
      detail: 'A sensory challenge', segment: 'fact', time: 'afternoon',
      shortTitle: 'Nose power', cta: 'Try this' },

    { prompt: 'Clasp your hands behind your back and squeeze your shoulder blades together. Hold five seconds. Instant posture reset.',
      detail: 'Open your chest', segment: 'breath', time: 'afternoon',
      shortTitle: 'Chest opener', cta: 'Move' },

    { prompt: 'A track that makes you feel like you are in a movie montage getting your life together.',
      detail: 'Main character energy', segment: 'song', time: 'afternoon',
      shortTitle: 'Montage track', cta: 'Play it' },

    { prompt: 'There are more possible chess games than atoms in the observable universe. Your afternoon is more open than you think.',
      detail: 'Infinite possibilities', segment: 'fact', time: 'afternoon',
      shortTitle: 'Chess infinity', cta: 'Oh, really?' },

    { prompt: 'Look at something far away for twenty seconds. Your eyes have been focused on a screen at the same distance for too long.',
      detail: 'A rest for your eyes', segment: 'text', time: 'afternoon',
      shortTitle: 'Far gaze', cta: 'Look up' },

    { prompt: 'Press your palms flat against a wall and push for ten seconds. A quick isometric reset.',
      detail: 'Tension you can actually use', segment: 'breath', time: 'afternoon',
      shortTitle: 'Wall press', cta: 'Try this' },

    { prompt: 'Wombats poop cubes. No one fully understands why. Science has limits and this is one of them.',
      detail: 'A fact for no reason', segment: 'fact', time: 'afternoon',
      shortTitle: 'Cube poop', cta: 'Oh, really?' },

    { prompt: 'Walk to get a glass of water. Not because you are thirsty. Because the walk is the point.',
      detail: 'Movement disguised as hydration', segment: 'text', time: 'afternoon',
      shortTitle: 'Water walk', cta: 'Get up' },

    { prompt: 'Here are a few surprising things most people have never thought about but probably should.',
      detail: 'Mind-opening tidbits', segment: 'list', time: 'afternoon',
      shortTitle: 'Think about this', cta: 'Go on' },

    { prompt: 'Touch your thumb to each fingertip on the same hand, back and forth, as fast as you can. A quick brain-body sync.',
      detail: 'Finger agility reset', segment: 'breath', time: 'afternoon',
      shortTitle: 'Finger taps', cta: 'Try this' },

    { prompt: 'Dolphins have names for each other. They use unique whistles to call specific friends.',
      detail: 'Dolphins have friend names', segment: 'fact', time: 'afternoon',
      shortTitle: 'Dolphin names', cta: 'Oh, really?' },

    { prompt: 'Tilt your head slowly to the left until you feel a stretch. Hold. Switch sides. Your neck has been waiting for this.',
      detail: 'A neck thank-you', segment: 'breath', time: 'afternoon',
      shortTitle: 'Neck stretch', cta: 'Move' },

    { prompt: 'Something that sounds like the last hour of the workday finally ending.',
      detail: 'A closing-time feeling', segment: 'song', time: 'afternoon',
      shortTitle: 'Clock out', cta: 'Play it' },

    { prompt: 'Step outside for sixty seconds. You do not need a reason. The air is different out there.',
      detail: 'Just one minute outside', segment: 'text', time: 'afternoon',
      shortTitle: 'Go outside', cta: 'Get up' },

    { prompt: 'The average person walks about 100,000 miles in a lifetime. That is four trips around the Earth.',
      detail: 'You are a long-distance walker', segment: 'fact', time: 'afternoon',
      shortTitle: 'Walking miles', cta: 'Oh, really?' },

    { prompt: 'Interlace your fingers and push your palms away from your body. A stretch that hits more than you expect.',
      detail: 'Full arm extension', segment: 'breath', time: 'afternoon',
      shortTitle: 'Palm push', cta: 'Move' },

    { prompt: 'Notice the loudest sound you can hear right now. Now the quietest. Your attention just zoomed in and out.',
      detail: 'An attention exercise', segment: 'text', time: 'afternoon',
      shortTitle: 'Sound zoom', cta: 'Try this' },

    { prompt: 'A mantis shrimp can punch at the speed of a bullet. The ocean is more violent and beautiful than we deserve.',
      detail: 'The toughest little shrimp', segment: 'fact', time: 'afternoon',
      shortTitle: 'Shrimp punch', cta: 'Oh, really?' },

    { prompt: 'Here is a list of five-second things that can shift your energy right now.',
      detail: 'Quick resets', segment: 'list', time: 'afternoon',
      shortTitle: 'Five seconds', cta: 'Try this' },

    { prompt: 'Take one deep breath where you breathe in through your nose and out through your mouth with a sigh. Just one.',
      detail: 'A single sigh', segment: 'breath', time: 'afternoon',
      shortTitle: 'One sigh', cta: 'Breathe' },

    // ── LIFT: Evening (20 prompts) ──

    { prompt: 'The nearest star to us beyond the Sun is 4.24 light-years away. The light you see from it tonight left before you were born.',
      detail: 'Ancient starlight', segment: 'fact', time: 'evening',
      shortTitle: 'Old light', cta: 'Oh, really?' },

    { prompt: 'Go outside and look up. Even for thirty seconds. The sky is doing something up there.',
      detail: 'A small dose of awe', segment: 'text', time: 'evening',
      shortTitle: 'Look up', cta: 'Look up' },

    { prompt: 'Here is a song that feels like driving with the windows down at dusk.',
      detail: 'A golden-hour track', segment: 'song', time: 'evening',
      shortTitle: 'Dusk drive', cta: 'Play it' },

    { prompt: 'There are more trees on Earth than stars in the Milky Way. About three trillion trees.',
      detail: 'More than you think', segment: 'fact', time: 'evening',
      shortTitle: 'Three trillion', cta: 'Oh, really?' },

    { prompt: 'Lie on the floor for one minute. Seriously. The floor is grounding in a way chairs never are.',
      detail: 'Floor time', segment: 'breath', time: 'evening',
      shortTitle: 'Floor moment', cta: 'Try this' },

    { prompt: 'A blue whale\'s heart is the size of a small car. It beats so slowly you could hear individual thuds.',
      detail: 'The biggest heartbeat', segment: 'fact', time: 'evening',
      shortTitle: 'Whale heart', cta: 'Oh, really?' },

    { prompt: 'What was the best thing you saw today? Not the best thing that happened. The best thing you actually saw with your eyes.',
      detail: 'A small evening reflection', segment: 'text', time: 'evening',
      shortTitle: 'Best sight', cta: 'Try this' },

    { prompt: 'Gently pull each finger on one hand, one at a time, and give it a small twist. It is weirdly relaxing.',
      detail: 'A hand thing', segment: 'breath', time: 'evening',
      shortTitle: 'Finger pulls', cta: 'Try this' },

    { prompt: 'Tardigrades can survive in outer space, at the bottom of the ocean, and in volcanoes. You can survive this week.',
      detail: 'Perspective from a micro-animal', segment: 'fact', time: 'evening',
      shortTitle: 'Tiny survivors', cta: 'Oh, really?' },

    { prompt: 'Here is a list of things that are more beautiful when you actually stop to look at them.',
      detail: 'Worth a second glance', segment: 'list', time: 'evening',
      shortTitle: 'Look again', cta: 'Go on' },

    { prompt: 'A song that feels like sitting on a porch with nowhere to be and nothing to prove.',
      detail: 'Evening ease', segment: 'song', time: 'evening',
      shortTitle: 'Porch song', cta: 'Play it' },

    { prompt: 'Put a hand on your chest. Feel your heartbeat. That rhythm has been going since before you were born.',
      detail: 'Your own percussion', segment: 'breath', time: 'evening',
      shortTitle: 'Heartbeat', cta: 'Try this' },

    { prompt: 'Venus rotates so slowly that a single day on Venus is longer than a Venusian year.',
      detail: 'Time works differently elsewhere', segment: 'fact', time: 'evening',
      shortTitle: 'Venus day', cta: 'Oh, really?' },

    { prompt: 'Name three things in the room that you did not notice this morning. Your attention shifts through the day.',
      detail: 'Evening eyes', segment: 'text', time: 'evening',
      shortTitle: 'Three things', cta: 'Try this' },

    { prompt: 'Sway gently side to side like a slow pendulum. Thirty seconds. It is strangely soothing.',
      detail: 'A slow sway', segment: 'breath', time: 'evening',
      shortTitle: 'Gentle sway', cta: 'Move' },

    { prompt: 'Some mushrooms glow in the dark. Bioluminescent fungi light up forest floors at night.',
      detail: 'Glowing mushrooms', segment: 'fact', time: 'evening',
      shortTitle: 'Glow fungi', cta: 'Oh, really?' },

    { prompt: 'Here is a song for doing absolutely nothing and feeling perfectly fine about it.',
      detail: 'A nothing-to-do track', segment: 'song', time: 'evening',
      shortTitle: 'Do nothing', cta: 'Play it' },

    { prompt: 'Tonight the moon is in a phase you will never see again exactly like this. Every night\'s moon is one of a kind.',
      detail: 'A unique moon', segment: 'text', time: 'evening',
      shortTitle: 'Moon phase', cta: 'Look up' },

    { prompt: 'Here are a few questions worth sitting with tonight. No answers required.',
      detail: 'Curious questions', segment: 'list', time: 'evening',
      shortTitle: 'Sit with these', cta: 'Go on' },

    { prompt: 'Whales sing songs that can travel thousands of miles through the ocean. The planet is full of music we cannot hear.',
      detail: 'Invisible music', segment: 'fact', time: 'evening',
      shortTitle: 'Whale songs', cta: 'Oh, really?' },

    // ── LIFT: Anytime (15 prompts) ──

    { prompt: 'Clench your fists as tight as you can for five seconds. Then release. The release is the point.',
      detail: 'Tension and release', segment: 'breath', time: 'anytime',
      shortTitle: 'Clench release', cta: 'Try this' },

    { prompt: 'The Earth is spinning at about 1,000 miles per hour right now. You are on a very fast rock.',
      detail: 'You are moving right now', segment: 'fact', time: 'anytime',
      shortTitle: 'Fast rock', cta: 'Oh, really?' },

    { prompt: 'Here is a song that feels like something good is about to happen.',
      detail: 'An anticipation track', segment: 'song', time: 'anytime',
      shortTitle: 'Something good', cta: 'Play it' },

    { prompt: 'Close your eyes and listen for ten seconds. Count every distinct sound you can identify.',
      detail: 'A listening game', segment: 'text', time: 'anytime',
      shortTitle: 'Count sounds', cta: 'Try this' },

    { prompt: 'Your skeleton is wet right now. Just thought you should know.',
      detail: 'An uncomfortable fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Wet skeleton', cta: 'Oh, really?' },

    { prompt: 'Reach both arms up and lean to one side. Hold for a breath. Switch. A stretch that opens everything.',
      detail: 'A side stretch', segment: 'breath', time: 'anytime',
      shortTitle: 'Side reach', cta: 'Move' },

    { prompt: 'Here are a few things happening right now, somewhere on Earth, that are genuinely incredible.',
      detail: 'The world is busy', segment: 'list', time: 'anytime',
      shortTitle: 'Right now', cta: 'Go on' },

    { prompt: 'Butterflies taste with their feet. The world is full of beings who experience it completely differently than you do.',
      detail: 'Different senses', segment: 'fact', time: 'anytime',
      shortTitle: 'Butterfly feet', cta: 'Oh, really?' },

    { prompt: 'Take ten steps. Any direction. Sometimes movement is the only thought that matters.',
      detail: 'Just ten steps', segment: 'text', time: 'anytime',
      shortTitle: 'Ten steps', cta: 'Get up' },

    { prompt: 'Here is a song that feels like remembering you actually like being alive.',
      detail: 'A small aliveness track', segment: 'song', time: 'anytime',
      shortTitle: 'Feel alive', cta: 'Play it' },

    { prompt: 'Circle your wrists ten times in each direction. They carry more tension than you realize.',
      detail: 'Wrist circles', segment: 'breath', time: 'anytime',
      shortTitle: 'Wrist circles', cta: 'Move' },

    { prompt: 'Here is a list of things that are surprisingly recent inventions. Some of these will shock you.',
      detail: 'Newer than you think', segment: 'list', time: 'anytime',
      shortTitle: 'Recent things', cta: 'Oh, really?' },

    { prompt: 'An octopus has blue blood and can fit through any hole larger than its beak, which is the only hard part of its body.',
      detail: 'Octopus flexibility', segment: 'fact', time: 'anytime',
      shortTitle: 'Blue blood', cta: 'Oh, really?' },

    { prompt: 'Think of someone who made you laugh recently. Not what they said. Just the sound of the laugh.',
      detail: 'A sound worth remembering', segment: 'text', time: 'anytime',
      shortTitle: 'That laugh', cta: 'Try this' },

    { prompt: 'Stand on one foot for fifteen seconds. Switch. Your balance is a quiet skill that loves a check-in.',
      detail: 'A balance check', segment: 'breath', time: 'anytime',
      shortTitle: 'One foot', cta: 'Try this' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // STEADY — "Calm your body" (90 prompts)
  // Body-first, always. Plain language. ZERO songs.
  // Segment mix: ~50 breath, ~30 text, ~10 list
  // ═══════════════════════════════════════════════════════════════

  steady: [

    // ── STEADY: Morning (25 prompts) ──

    { prompt: 'Before your feet hit the floor, take three slow breaths. You are not late yet.',
      detail: 'A gentle start', segment: 'breath', time: 'morning',
      shortTitle: 'Before the floor', cta: 'Breathe' },

    { prompt: 'Place both hands on your belly. Breathe in until you feel your hands rise. Out until they fall. Three times.',
      detail: 'Belly breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Hands on belly', cta: 'Breathe' },

    { prompt: 'Your jaw is probably clenched right now. Let your mouth open slightly. Let the jaw hang. There.',
      detail: 'A morning jaw release', segment: 'text', time: 'morning',
      shortTitle: 'Unclench', cta: 'Let go' },

    { prompt: 'Sit on the edge of your bed. Feel your feet flat on the floor. Press down gently. You are here.',
      detail: 'Grounded before the day', segment: 'breath', time: 'morning',
      shortTitle: 'Feet on floor', cta: 'Settle in' },

    { prompt: 'Place one hand on your chest and one on your stomach. Breathe so only the stomach hand moves.',
      detail: 'A diaphragm check', segment: 'breath', time: 'morning',
      shortTitle: 'Two hands', cta: 'Breathe' },

    { prompt: 'You do not have to plan your whole day right now. Just the next hour is fine.',
      detail: 'Permission to go slow', segment: 'text', time: 'morning',
      shortTitle: 'Just one hour', cta: 'Settle in' },

    { prompt: 'Inhale for four counts. Hold for four. Exhale for four. Hold for four. One round is enough.',
      detail: 'Box breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Box breath', cta: 'Breathe' },

    { prompt: 'Slowly turn your head to the left. Hold. Then to the right. Hold. Your neck carries the stress of yesterday.',
      detail: 'A morning neck release', segment: 'breath', time: 'morning',
      shortTitle: 'Turn your head', cta: 'Soften' },

    { prompt: 'Here are a few things your body might need this morning. Pick one.',
      detail: 'A body menu', segment: 'list', time: 'morning',
      shortTitle: 'Pick one', cta: 'Try this' },

    { prompt: 'Notice if your tongue is pressed against the roof of your mouth. Let it drop. Rest it behind your bottom teeth.',
      detail: 'Tongue tension release', segment: 'text', time: 'morning',
      shortTitle: 'Drop your tongue', cta: 'Soften' },

    { prompt: 'Breathe in through your nose for five counts. Out through your nose for five counts. Nose breathing is calmer than mouth breathing.',
      detail: 'Nose-only breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Nose breath', cta: 'Breathe' },

    { prompt: 'Your morning does not need to be productive. It just needs to start.',
      detail: 'Lower the bar', segment: 'text', time: 'morning',
      shortTitle: 'Just start', cta: 'Settle in' },

    { prompt: 'Rub your palms together quickly for ten seconds. Then place them over your closed eyes. The warmth is a small gift.',
      detail: 'Warm hands, warm eyes', segment: 'breath', time: 'morning',
      shortTitle: 'Warm palms', cta: 'Try this' },

    { prompt: 'Roll your shoulders forward three times. Backward three times. Slower than you think you should.',
      detail: 'Deliberate slow rolls', segment: 'breath', time: 'morning',
      shortTitle: 'Slow rolls', cta: 'Soften' },

    { prompt: 'Stand in a doorway and press both hands against the frame. Push gently for ten seconds. Release. Your chest just opened up.',
      detail: 'Doorway stretch', segment: 'breath', time: 'morning',
      shortTitle: 'Doorway press', cta: 'Try this' },

    { prompt: 'Whatever you are dreading today, it has not happened yet. Right now, you are just here.',
      detail: 'A pre-worry reminder', segment: 'text', time: 'morning',
      shortTitle: 'Not yet', cta: 'Settle in' },

    { prompt: 'Breathe in and raise your shoulders to your ears. Hold at the top. Exhale and drop them completely.',
      detail: 'A shoulder sigh', segment: 'breath', time: 'morning',
      shortTitle: 'Shoulder drop', cta: 'Let go' },

    { prompt: 'Press your thumbs into the center of each palm. Small circles. Ten seconds each. It is quietly grounding.',
      detail: 'Palm pressure points', segment: 'breath', time: 'morning',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Check your forehead. If there are lines, you are tensing muscles you do not need right now. Smooth them.',
      detail: 'Forehead check', segment: 'text', time: 'morning',
      shortTitle: 'Smooth brow', cta: 'Soften' },

    { prompt: 'Take the slowest breath you have taken all morning. In for six. Out for eight. One is plenty.',
      detail: 'The slowest breath', segment: 'breath', time: 'morning',
      shortTitle: 'Slow one', cta: 'Breathe' },

    { prompt: 'Wiggle your toes inside your shoes or socks. Five seconds of wiggling. A tiny grounding trick.',
      detail: 'Toe wiggle grounding', segment: 'breath', time: 'morning',
      shortTitle: 'Toe wiggle', cta: 'Try this' },

    { prompt: 'You are allowed to move slowly this morning. Rushing is not a requirement.',
      detail: 'A speed check', segment: 'text', time: 'morning',
      shortTitle: 'Go slow', cta: 'Settle in' },

    { prompt: 'Place your hand on the back of your neck. Gently squeeze. Hold for five seconds. Release. Repeat twice.',
      detail: 'A neck hold', segment: 'breath', time: 'morning',
      shortTitle: 'Neck squeeze', cta: 'Soften' },

    { prompt: 'Here is a short morning body checklist. Just notice. You do not need to fix anything.',
      detail: 'A body scan list', segment: 'list', time: 'morning',
      shortTitle: 'Body check', cta: 'Try this' },

    { prompt: 'Breathe in gently. As you exhale, let your whole body get a little heavier in the chair. Repeat three times.',
      detail: 'Heavy exhales', segment: 'breath', time: 'morning',
      shortTitle: 'Get heavy', cta: 'Breathe' },

    // ── STEADY: Afternoon (30 prompts) ──

    { prompt: 'Your shoulders are probably up near your ears right now. Drop them.',
      detail: 'A shoulder check', segment: 'text', time: 'afternoon',
      shortTitle: 'Drop them', cta: 'Drop them' },

    { prompt: 'Breathe in for four counts. Exhale for seven counts. The long exhale is the part that calms your nervous system.',
      detail: 'Extended exhale', segment: 'breath', time: 'afternoon',
      shortTitle: 'Long exhale', cta: 'Breathe' },

    { prompt: 'Unclench your hands. Open your palms face-up on your lap. Notice how different that feels.',
      detail: 'Open palms reset', segment: 'text', time: 'afternoon',
      shortTitle: 'Open hands', cta: 'Let go' },

    { prompt: 'Put your feet flat on the floor. Press down gently through your heels. Feel the ground hold you.',
      detail: 'Desk grounding', segment: 'breath', time: 'afternoon',
      shortTitle: 'Press heels', cta: 'Settle in' },

    { prompt: 'Here is a quick tension inventory. Check each spot, release what you find.',
      detail: 'A tension checklist', segment: 'list', time: 'afternoon',
      shortTitle: 'Tension check', cta: 'Try this' },

    { prompt: 'Breathe in through your nose. Out through pursed lips, like you are blowing through a straw. Five times.',
      detail: 'Straw breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Straw breath', cta: 'Breathe' },

    { prompt: 'Place your right hand on your left shoulder. Gently squeeze. Hold. Switch sides. That is a self-hug your muscles needed.',
      detail: 'Shoulder squeeze', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shoulder hug', cta: 'Soften' },

    { prompt: 'Your face has 42 muscles and most of them are working right now without your permission. Let them rest.',
      detail: 'A face relaxation cue', segment: 'text', time: 'afternoon',
      shortTitle: 'Rest your face', cta: 'Soften' },

    { prompt: 'Inhale slowly. At the top, hold for two seconds. Exhale with an audible sigh. The sigh is the medicine.',
      detail: 'The physiological sigh', segment: 'breath', time: 'afternoon',
      shortTitle: 'Sigh it out', cta: 'Breathe' },

    { prompt: 'Lean back in your chair. Let your arms hang. Close your eyes for ten seconds. That counts as a break.',
      detail: 'A ten-second vacation', segment: 'breath', time: 'afternoon',
      shortTitle: 'Lean back', cta: 'Settle in' },

    { prompt: 'Your belly is probably tight right now. Let it go soft. No one is looking.',
      detail: 'Belly release', segment: 'text', time: 'afternoon',
      shortTitle: 'Soft belly', cta: 'Let go' },

    { prompt: 'Gently pull your right ear toward your right shoulder. Hold for five breaths. Switch sides.',
      detail: 'A neck side stretch', segment: 'breath', time: 'afternoon',
      shortTitle: 'Ear to shoulder', cta: 'Soften' },

    { prompt: 'Take three breaths where each exhale is a little bit longer than the last. Slow the whole thing down.',
      detail: 'Decreasing tempo breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow it down', cta: 'Breathe' },

    { prompt: 'Stand up. Shake your whole body for ten seconds like a dog after a bath. Sit back down. You are different now.',
      detail: 'A full body shake', segment: 'breath', time: 'afternoon',
      shortTitle: 'Shake it off', cta: 'Try this' },

    { prompt: 'Run your fingers along your scalp like you are giving yourself a head massage. Fifteen seconds. Your head will thank you.',
      detail: 'A desk-friendly head rub', segment: 'breath', time: 'afternoon',
      shortTitle: 'Scalp rub', cta: 'Try this' },

    { prompt: 'You are holding tension somewhere right now. Scan from your head down. When you find it, breathe into that spot.',
      detail: 'A tension scan', segment: 'text', time: 'afternoon',
      shortTitle: 'Find it', cta: 'Soften' },

    { prompt: 'Interlace your fingers behind your head. Let the weight of your arms gently stretch your neck forward.',
      detail: 'A gentle neck traction', segment: 'breath', time: 'afternoon',
      shortTitle: 'Head cradle', cta: 'Soften' },

    { prompt: 'Here is a list of places your body stores stress and what to do about each one right now.',
      detail: 'A stress-spot guide', segment: 'list', time: 'afternoon',
      shortTitle: 'Stress spots', cta: 'Try this' },

    { prompt: 'Press your tongue to the roof of your mouth. Hold for five seconds. Release. A strange little trick that calms the vagus nerve.',
      detail: 'Tongue-to-roof trick', segment: 'breath', time: 'afternoon',
      shortTitle: 'Tongue press', cta: 'Try this' },

    { prompt: 'Whatever is making you tense right now, it is not in this room. Your body does not know that yet. Tell it.',
      detail: 'A gentle reality check', segment: 'text', time: 'afternoon',
      shortTitle: 'Not here', cta: 'Let go' },

    { prompt: 'Cross your arms over your chest and give yourself a squeeze. Hold for five seconds. That is a bilateral hug.',
      detail: 'The butterfly hug', segment: 'breath', time: 'afternoon',
      shortTitle: 'Self hug', cta: 'Try this' },

    { prompt: 'Breathe in through your left nostril only (close the right with your thumb). Out through the right. Alternate five times.',
      detail: 'Alternate nostril breathing', segment: 'breath', time: 'afternoon',
      shortTitle: 'Nostril switch', cta: 'Breathe' },

    { prompt: 'Let your hands rest, palms down, on your desk or thighs. Press gently. Feel the surface push back. Solid ground.',
      detail: 'A grounding press', segment: 'breath', time: 'afternoon',
      shortTitle: 'Palms down', cta: 'Settle in' },

    { prompt: 'Your throat might be tight. Swallow once. Yawn if you can. Open your mouth wide. Let the throat soften.',
      detail: 'Throat release', segment: 'text', time: 'afternoon',
      shortTitle: 'Open throat', cta: 'Soften' },

    { prompt: 'Take a breath and count to four on the inhale. Exhale and count to six. The count gives your mind something to hold.',
      detail: 'Counted breaths', segment: 'breath', time: 'afternoon',
      shortTitle: 'Count breath', cta: 'Breathe' },

    { prompt: 'Lift your toes off the ground inside your shoes. Hold. Release. Repeat five times. No one knows you are doing this.',
      detail: 'Secret grounding', segment: 'breath', time: 'afternoon',
      shortTitle: 'Toe lifts', cta: 'Try this' },

    { prompt: 'Notice where your weight is in your chair. Are you leaning? Shift to center. Even weight, even mind.',
      detail: 'A sitting reset', segment: 'text', time: 'afternoon',
      shortTitle: 'Center weight', cta: 'Settle in' },

    { prompt: 'Exhale completely. All the way. Then a little more. The deep inhale that follows will happen on its own.',
      detail: 'Empty lungs reset', segment: 'breath', time: 'afternoon',
      shortTitle: 'Empty out', cta: 'Breathe' },

    { prompt: 'Here are a few two-second tension releases you can do without anyone noticing.',
      detail: 'Invisible micro-resets', segment: 'list', time: 'afternoon',
      shortTitle: 'Secret resets', cta: 'Try this' },

    { prompt: 'Squeeze your shoulder blades together like you are holding a pencil between them. Hold five seconds. Release.',
      detail: 'A posture reset', segment: 'breath', time: 'afternoon',
      shortTitle: 'Blade squeeze', cta: 'Soften' },

    // ── STEADY: Evening (20 prompts) ──

    { prompt: 'Lie down. Put your legs up against a wall or the back of a couch. Stay for two minutes. Your body will do the rest.',
      detail: 'Legs up the wall', segment: 'breath', time: 'evening',
      shortTitle: 'Legs up', cta: 'Settle in' },

    { prompt: 'Starting at your forehead, slowly relax every muscle down to your toes. Take your time. There is no rush.',
      detail: 'A top-down body scan', segment: 'breath', time: 'evening',
      shortTitle: 'Melt down', cta: 'Soften' },

    { prompt: 'Breathe in for four. Hold for seven. Out for eight. This is the 4-7-8 breath. It was built for evenings.',
      detail: 'The 4-7-8 technique', segment: 'breath', time: 'evening',
      shortTitle: '4-7-8 breath', cta: 'Breathe' },

    { prompt: 'Your body did a lot today. You do not need to review its performance. Just let it rest.',
      detail: 'Permission to stop', segment: 'text', time: 'evening',
      shortTitle: 'No review', cta: 'Let go' },

    { prompt: 'Place a hand on your heart. Feel the rhythm. Match your breathing to it. Then slowly make both slower.',
      detail: 'Heart-synced breathing', segment: 'breath', time: 'evening',
      shortTitle: 'Heart pace', cta: 'Breathe' },

    { prompt: 'Squeeze every muscle in your body at once. Hold for five seconds. Release everything at once. Instant full-body reset.',
      detail: 'A total tension drop', segment: 'breath', time: 'evening',
      shortTitle: 'Squeeze all', cta: 'Let go' },

    { prompt: 'Here is a list of things you can let your body release before bed.',
      detail: 'An evening release list', segment: 'list', time: 'evening',
      shortTitle: 'Release list', cta: 'Soften' },

    { prompt: 'Your feet worked all day. Press your thumb into the arch of each foot. Small circles. Thirty seconds each.',
      detail: 'A foot thank-you', segment: 'breath', time: 'evening',
      shortTitle: 'Foot press', cta: 'Try this' },

    { prompt: 'Yawn. Even if you have to fake it at first. Yawning resets your jaw, your face, and your breathing all at once.',
      detail: 'The power of a yawn', segment: 'text', time: 'evening',
      shortTitle: 'Just yawn', cta: 'Try this' },

    { prompt: 'Breathe in gently. On the exhale, whisper the word "calm" to yourself. Repeat five times. The word becomes real.',
      detail: 'Whisper breathing', segment: 'breath', time: 'evening',
      shortTitle: 'Whisper calm', cta: 'Breathe' },

    { prompt: 'Curl and uncurl your toes slowly, ten times. Like your feet are waving goodbye to the day.',
      detail: 'Toe curls for bedtime', segment: 'breath', time: 'evening',
      shortTitle: 'Toe waves', cta: 'Soften' },

    { prompt: 'Let your arms go completely limp at your sides. Like they are made of something heavy and soft.',
      detail: 'Dead-arm relaxation', segment: 'text', time: 'evening',
      shortTitle: 'Heavy arms', cta: 'Let go' },

    { prompt: 'Take five breaths where the exhale is twice as long as the inhale. You are telling your nervous system the day is done.',
      detail: 'Day-is-done breathing', segment: 'breath', time: 'evening',
      shortTitle: 'Day is done', cta: 'Breathe' },

    { prompt: 'Gently massage the space between your eyebrows with one fingertip. Small circles. That spot holds more than you think.',
      detail: 'Third-eye release', segment: 'breath', time: 'evening',
      shortTitle: 'Brow point', cta: 'Soften' },

    { prompt: 'Your bed is not a place for solving problems. Whatever is unfinished can be unfinished until morning.',
      detail: 'A bedtime boundary', segment: 'text', time: 'evening',
      shortTitle: 'Until morning', cta: 'Let go' },

    { prompt: 'Rock gently side to side in bed. Like a boat. Small movements. Let the motion settle your body.',
      detail: 'A bedtime rock', segment: 'breath', time: 'evening',
      shortTitle: 'Rock gently', cta: 'Settle in' },

    { prompt: 'Here is a simple wind-down sequence for your body. Five things, two minutes.',
      detail: 'A bedtime body routine', segment: 'list', time: 'evening',
      shortTitle: 'Wind down', cta: 'Try this' },

    { prompt: 'Close your eyes. Picture your body getting heavier with each breath. Sinking a little deeper into wherever you are.',
      detail: 'A heaviness visualization', segment: 'breath', time: 'evening',
      shortTitle: 'Sink in', cta: 'Settle in' },

    { prompt: 'Unclench your jaw. Separate your teeth slightly. Let your lips part. The evening jaw release is one of the most important.',
      detail: 'Nighttime jaw check', segment: 'text', time: 'evening',
      shortTitle: 'Night jaw', cta: 'Soften' },

    { prompt: 'Take three breaths where you breathe in through your nose and hum on the exhale. The vibration is deeply calming.',
      detail: 'Humming exhale', segment: 'breath', time: 'evening',
      shortTitle: 'Hum breath', cta: 'Breathe' },

    // ── STEADY: Anytime (15 prompts) ──

    { prompt: 'Name five things you can see. Four you can touch. Three you can hear. Two you can smell. One you can taste.',
      detail: '5-4-3-2-1 grounding', segment: 'breath', time: 'anytime',
      shortTitle: 'Five senses', cta: 'Try this' },

    { prompt: 'Your breathing is probably shallow right now. Take one breath that fills your whole torso. One is enough.',
      detail: 'A depth check', segment: 'breath', time: 'anytime',
      shortTitle: 'Go deeper', cta: 'Breathe' },

    { prompt: 'Place both feet flat on the floor. Press down. Feel the floor push back. That is your ground.',
      detail: 'Instant grounding', segment: 'breath', time: 'anytime',
      shortTitle: 'Feel the floor', cta: 'Settle in' },

    { prompt: 'Splash cold water on your wrists. It cools your pulse points and resets your temperature regulation.',
      detail: 'A cold-water trick', segment: 'text', time: 'anytime',
      shortTitle: 'Cold wrists', cta: 'Try this' },

    { prompt: 'Here is a quick list of body signals that mean you need a break right now.',
      detail: 'Your body is talking', segment: 'list', time: 'anytime',
      shortTitle: 'Body signals', cta: 'Try this' },

    { prompt: 'Hold a piece of ice in your hand. Focus on the cold. When it gets too much, switch hands. You are completely present now.',
      detail: 'The ice grounding trick', segment: 'text', time: 'anytime',
      shortTitle: 'Hold ice', cta: 'Try this' },

    { prompt: 'Breathe in for a count of three. Pause. Exhale for a count of six. Just three rounds.',
      detail: '3-6 breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Three and six', cta: 'Breathe' },

    { prompt: 'Squeeze a stress ball, a pillow, or your own hand. Hold tight for ten seconds. Release slowly.',
      detail: 'Squeeze and release', segment: 'breath', time: 'anytime',
      shortTitle: 'Squeeze it', cta: 'Try this' },

    { prompt: 'You do not need to calm down. You just need to let your body catch up to the fact that you are safe.',
      detail: 'A reframe', segment: 'text', time: 'anytime',
      shortTitle: 'You are safe', cta: 'Settle in' },

    { prompt: 'Press your palms together in front of your chest. Push hard for ten seconds. Release. Your chest opens.',
      detail: 'Isometric chest press', segment: 'breath', time: 'anytime',
      shortTitle: 'Palm press', cta: 'Try this' },

    { prompt: 'Hum a low note. Feel it vibrate in your chest. Humming activates the vagus nerve. It is not woo. It is biology.',
      detail: 'Vagus nerve humming', segment: 'breath', time: 'anytime',
      shortTitle: 'Low hum', cta: 'Try this' },

    { prompt: 'Your body is doing thousands of things right now without your help. You can let it handle this too.',
      detail: 'Trust the body', segment: 'text', time: 'anytime',
      shortTitle: 'Let it work', cta: 'Settle in' },

    { prompt: 'Here is a list of things your body does not need right now that you might be giving it anyway.',
      detail: 'A subtraction list', segment: 'list', time: 'anytime',
      shortTitle: 'Let these go', cta: 'Let go' },

    { prompt: 'Cup your hands over your ears for ten seconds. The muffled quiet is a small vacation for your nervous system.',
      detail: 'Ear cupping', segment: 'breath', time: 'anytime',
      shortTitle: 'Cup ears', cta: 'Try this' },

    { prompt: 'Soften your eyes. Not closed, just soft. Like you are looking at something far away and gentle.',
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

    { prompt: 'You do not have to do all of it today. Pick one thing that actually matters. Start there.',
      detail: 'One thing is enough', segment: 'text', time: 'morning',
      shortTitle: 'Just one', cta: 'Just one' },

    { prompt: 'Before the day fills up, here is a thought: what would you like to say no to today?',
      detail: 'A morning no', segment: 'text', time: 'morning',
      shortTitle: 'Say no', cta: 'Try this' },

    { prompt: 'Write down three things on your mind. Not to solve them. Just to get them out of your head and onto something else.',
      detail: 'A brain dump', segment: 'breath', time: 'morning',
      shortTitle: 'Write it down', cta: 'Clear it' },

    { prompt: 'People who write down their priorities are 42% more likely to achieve them. Not because of magic. Because of clarity.',
      detail: 'A clarity fact', segment: 'fact', time: 'morning',
      shortTitle: 'Write it clear', cta: 'Oh, really?' },

    { prompt: 'If you could only do three things today and everything else disappeared, what would they be?',
      detail: 'A filtering question', segment: 'text', time: 'morning',
      shortTitle: 'Only three', cta: 'Clear it' },

    { prompt: 'Here is a morning practice: name one thing you are carrying that is not yours to carry.',
      detail: 'Not your weight', segment: 'text', time: 'morning',
      shortTitle: 'Not yours', cta: 'Let it go' },

    { prompt: 'Before your day starts, take three breaths and assign each one a word. Just three words for the day.',
      detail: 'Three-word intention', segment: 'breath', time: 'morning',
      shortTitle: 'Three words', cta: 'Breathe' },

    { prompt: 'Here is a list of things you do not owe anyone today.',
      detail: 'Permission slips', segment: 'list', time: 'morning',
      shortTitle: 'You don\'t owe', cta: 'Read on' },

    { prompt: 'The decision you are avoiding is probably simpler than the story you have built around it.',
      detail: 'A gentle push', segment: 'text', time: 'morning',
      shortTitle: 'Simpler than', cta: 'Try this' },

    { prompt: 'Close your eyes. Imagine putting each worry into a box. Stack the boxes. Walk away from the pile.',
      detail: 'A containment visualization', segment: 'breath', time: 'morning',
      shortTitle: 'Box it up', cta: 'Try this' },

    { prompt: 'The average person has about 6,000 thoughts per day. Most of them are reruns. You can change the channel.',
      detail: 'A thought stat', segment: 'fact', time: 'morning',
      shortTitle: '6,000 thoughts', cta: 'Oh, really?' },

    { prompt: 'You do not need a plan for everything. Some things just need your presence when they arrive.',
      detail: 'A planning pause', segment: 'text', time: 'morning',
      shortTitle: 'No plan needed', cta: 'Settle in' },

    { prompt: 'Imagine your mind is a whiteboard. Take three breaths. With each exhale, erase one thing.',
      detail: 'Whiteboard clearing', segment: 'breath', time: 'morning',
      shortTitle: 'Erase one', cta: 'Clear it' },

    { prompt: 'Here is a list of questions you do not need to answer today. Seeing them written might help you let go.',
      detail: 'Questions to shelve', segment: 'list', time: 'morning',
      shortTitle: 'Not today', cta: 'Skip it' },

    { prompt: 'The first thought of the day is rarely the truest one. Give it a few minutes before you trust it.',
      detail: 'Morning thought filter', segment: 'text', time: 'morning',
      shortTitle: 'Wait on it', cta: 'Read on' },

    { prompt: 'Take a breath and think of one person you are glad exists. Not what they do for you. Just that they are here.',
      detail: 'A gratitude breath', segment: 'breath', time: 'morning',
      shortTitle: 'Glad they\'re here', cta: 'Try this' },

    { prompt: 'If something is bothering you and you cannot name it, try finishing this sentence: I wish someone knew that...',
      detail: 'A naming exercise', segment: 'text', time: 'morning',
      shortTitle: 'Name it', cta: 'Try this' },

    { prompt: 'Here is a list of things that feel urgent but almost never are.',
      detail: 'An urgency filter', segment: 'list', time: 'morning',
      shortTitle: 'Not urgent', cta: 'Read on' },

    { prompt: 'Breathe in and think "I have enough." Breathe out and think "I am enough." Three rounds.',
      detail: 'Enough breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Enough', cta: 'Breathe' },

    { prompt: 'You do not have to be ready. You just have to begin.',
      detail: 'Starting is the only step', segment: 'text', time: 'morning',
      shortTitle: 'Just begin', cta: 'Try this' },

    { prompt: 'Decision fatigue is real. The average adult makes 35,000 decisions a day. Automate the ones that do not matter.',
      detail: 'Too many choices', segment: 'fact', time: 'morning',
      shortTitle: '35,000 choices', cta: 'Oh, really?' },

    { prompt: 'Picture your to-do list. Now cross off the bottom three items. They were not getting done anyway. That is fine.',
      detail: 'A list edit', segment: 'text', time: 'morning',
      shortTitle: 'Cross them off', cta: 'Clear it' },

    { prompt: 'Take a slow breath in. On the exhale, imagine releasing one thing you have been holding too tightly.',
      detail: 'A letting-go breath', segment: 'breath', time: 'morning',
      shortTitle: 'Hold less', cta: 'Let it go' },

    { prompt: 'Here are a few scripts for saying no without guilt.',
      detail: 'No templates', segment: 'list', time: 'morning',
      shortTitle: 'No scripts', cta: 'Read on' },

    { prompt: 'The morning is not a test. There is no grade. You are just here, starting.',
      detail: 'No morning grade', segment: 'text', time: 'morning',
      shortTitle: 'No grade', cta: 'Settle in' },

    // ── SPACE: Afternoon (30 prompts) ──

    { prompt: 'You do not have to respond to that right now. Or ever, actually.',
      detail: 'A reply permission slip', segment: 'text', time: 'afternoon',
      shortTitle: 'No reply needed', cta: 'Skip it' },

    { prompt: 'Before you send that reply, take one breath. Read it back. Is that what you actually want to say?',
      detail: 'A reply check', segment: 'text', time: 'afternoon',
      shortTitle: 'Before you send', cta: 'Try this' },

    { prompt: 'That thought loop you are in? Name it. "This is the one about _____." Naming it breaks the cycle.',
      detail: 'Loop breaking', segment: 'text', time: 'afternoon',
      shortTitle: 'Name the loop', cta: 'Clear it' },

    { prompt: 'Breathe in. Think "this is happening." Breathe out. Think "and I can handle it." Three rounds.',
      detail: 'A coping breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'I can handle it', cta: 'Breathe' },

    { prompt: 'Here is a list of things that are fine to leave half-done today.',
      detail: 'Permission to pause', segment: 'list', time: 'afternoon',
      shortTitle: 'Half-done is fine', cta: 'Read on' },

    { prompt: 'Multitasking reduces productivity by up to 40%. Doing one thing right now is not lazy. It is smart.',
      detail: 'A focus fact', segment: 'fact', time: 'afternoon',
      shortTitle: 'One thing only', cta: 'Oh, really?' },

    { prompt: 'If you are stuck on a decision, flip a coin. Not to decide. To notice what you hope it lands on.',
      detail: 'The coin trick', segment: 'text', time: 'afternoon',
      shortTitle: 'Flip a coin', cta: 'Try this' },

    { prompt: 'Close your eyes. Imagine each thought is a cloud passing by. You are not the clouds. You are the sky.',
      detail: 'Cloud watching for your mind', segment: 'breath', time: 'afternoon',
      shortTitle: 'Be the sky', cta: 'Try this' },

    { prompt: 'That person who frustrated you today is probably just having a hard time too.',
      detail: 'A perspective shift', segment: 'text', time: 'afternoon',
      shortTitle: 'Hard time too', cta: 'Let it go' },

    { prompt: 'Take three breaths. With each one, mentally set down something you have been carrying. Like putting bags on the floor.',
      detail: 'A setting-down breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Set it down', cta: 'Let it go' },

    { prompt: 'Here is a list of phrases that might help when you feel overwhelmed this afternoon.',
      detail: 'Things to tell yourself', segment: 'list', time: 'afternoon',
      shortTitle: 'Tell yourself', cta: 'Read on' },

    { prompt: 'Your brain uses 20% of your body\'s energy. When you feel mentally exhausted, your body is actually tired. Rest counts.',
      detail: 'Brain energy', segment: 'fact', time: 'afternoon',
      shortTitle: 'Brain is tired', cta: 'Oh, really?' },

    { prompt: 'Is the thing you are worrying about something you can control? If yes, do one small thing. If no, let this breath carry it away.',
      detail: 'A control filter', segment: 'breath', time: 'afternoon',
      shortTitle: 'Can you control it?', cta: 'Clear it' },

    { prompt: 'You do not have to finish every conversation in one sitting. It is okay to say "let me think about that."',
      detail: 'A conversation boundary', segment: 'text', time: 'afternoon',
      shortTitle: 'Think first', cta: 'Try this' },

    { prompt: 'Imagine a volume knob for the noise in your head. Picture yourself turning it down one notch. Just one.',
      detail: 'A mental volume dial', segment: 'breath', time: 'afternoon',
      shortTitle: 'Turn it down', cta: 'Try this' },

    { prompt: 'Here is a list of decisions you can safely make in under ten seconds.',
      detail: 'Quick decision shortcuts', segment: 'list', time: 'afternoon',
      shortTitle: 'Decide fast', cta: 'Read on' },

    { prompt: 'That email can wait. Most things that feel urgent have a shelf life much longer than your panic suggests.',
      detail: 'An urgency check', segment: 'text', time: 'afternoon',
      shortTitle: 'It can wait', cta: 'Skip it' },

    { prompt: 'Breathe in. Count to four. Breathe out. With the exhale, let one thought leave. Repeat until you feel lighter.',
      detail: 'A release breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let one go', cta: 'Breathe' },

    { prompt: 'Perfectionism is not a standard. It is a trap dressed up as ambition. Good enough is good.',
      detail: 'A perfectionism check', segment: 'text', time: 'afternoon',
      shortTitle: 'Good enough', cta: 'Let it go' },

    { prompt: 'Close your eyes. Imagine you are watching your thoughts on a news ticker. They scroll by. You do not have to grab any of them.',
      detail: 'Ticker tape thoughts', segment: 'breath', time: 'afternoon',
      shortTitle: 'Let them scroll', cta: 'Try this' },

    { prompt: 'Here is a list of things that seemed like emergencies last week that turned out fine.',
      detail: 'A hindsight list', segment: 'list', time: 'afternoon',
      shortTitle: 'It was fine', cta: 'Read on' },

    { prompt: 'You are not behind. There is no schedule you were supposed to follow. You are making it up as you go, and that is normal.',
      detail: 'No invisible deadline', segment: 'text', time: 'afternoon',
      shortTitle: 'Not behind', cta: 'Read on' },

    { prompt: 'Take a breath. Imagine you are exhaling fog. With each exhale, the fog gets thinner. The view gets clearer.',
      detail: 'A fog-clearing breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Clear the fog', cta: 'Breathe' },

    { prompt: 'If someone else came to you with your problem, what would you tell them? Now tell yourself that.',
      detail: 'A self-advice flip', segment: 'text', time: 'afternoon',
      shortTitle: 'Advise yourself', cta: 'Try this' },

    { prompt: 'It takes about 23 minutes to refocus after an interruption. Be gentle with yourself after one.',
      detail: 'A refocus fact', segment: 'fact', time: 'afternoon',
      shortTitle: '23 minutes', cta: 'Oh, really?' },

    { prompt: 'Take one deep breath. On the exhale, mentally say "done" to the last task, even if it is not perfect.',
      detail: 'A closing breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Say done', cta: 'Clear it' },

    { prompt: 'You do not have to explain yourself to everyone. Some people will not understand and that is not your problem.',
      detail: 'A boundary reminder', segment: 'text', time: 'afternoon',
      shortTitle: 'No explaining', cta: 'Let it go' },

    { prompt: 'Here is a list of boundaries that are reasonable even though they might feel uncomfortable.',
      detail: 'Boundary reminders', segment: 'list', time: 'afternoon',
      shortTitle: 'Reasonable limits', cta: 'Read on' },

    { prompt: 'Breathe in. Imagine gathering all your scattered attention. Breathe out. Imagine placing it gently on one thing.',
      detail: 'An attention gather', segment: 'breath', time: 'afternoon',
      shortTitle: 'Gather focus', cta: 'Breathe' },

    { prompt: 'The comparison you are making right now is between your inside and someone else\'s outside. It is not fair or useful.',
      detail: 'A comparison check', segment: 'text', time: 'afternoon',
      shortTitle: 'Stop comparing', cta: 'Let it go' },

    // ── SPACE: Evening (20 prompts) ──

    { prompt: 'That conversation was hard. You handled it. Maybe not perfectly. But you showed up, and that counts.',
      detail: 'A hard-day acknowledgment', segment: 'text', time: 'evening',
      shortTitle: 'You showed up', cta: 'Read on' },

    { prompt: 'Stop replaying it. You already did your best with what you had. The replay will not change the outcome.',
      detail: 'A replay stopper', segment: 'text', time: 'evening',
      shortTitle: 'Stop replaying', cta: 'Let it go' },

    { prompt: 'Breathe in. Think "today is over." Breathe out. Think "tomorrow is not here yet." You only have right now.',
      detail: 'An evening presence breath', segment: 'breath', time: 'evening',
      shortTitle: 'Right now only', cta: 'Breathe' },

    { prompt: 'Write down what is on your mind. Not to solve it. Just to move it from your head to the page so your brain can rest.',
      detail: 'A before-bed brain dump', segment: 'breath', time: 'evening',
      shortTitle: 'Brain to page', cta: 'Clear it' },

    { prompt: 'Here is a list of things that are okay to leave unsorted until morning.',
      detail: 'A tomorrow list', segment: 'list', time: 'evening',
      shortTitle: 'Leave it', cta: 'Skip it' },

    { prompt: 'You did not ruin anything today. Even the messy parts are survivable. You are still here.',
      detail: 'An evening reassurance', segment: 'text', time: 'evening',
      shortTitle: 'Still here', cta: 'Read on' },

    { prompt: 'Take five slow breaths. With each one, mentally forgive yourself for one small thing from today.',
      detail: 'A forgiveness breath', segment: 'breath', time: 'evening',
      shortTitle: 'Forgive one', cta: 'Breathe' },

    { prompt: 'If you could put today in a drawer and close it, what would the label on the drawer say?',
      detail: 'A closing metaphor', segment: 'text', time: 'evening',
      shortTitle: 'Close the drawer', cta: 'Try this' },

    { prompt: 'Worrying at night does not reduce tomorrow\'s troubles. It just steals tonight\'s rest.',
      detail: 'A worry reminder', segment: 'text', time: 'evening',
      shortTitle: 'Not tonight', cta: 'Let it go' },

    { prompt: 'Here is a list of things you handled today, even if they did not feel like much.',
      detail: 'An accomplishment list', segment: 'list', time: 'evening',
      shortTitle: 'You handled it', cta: 'Read on' },

    { prompt: 'Close your eyes. Imagine placing each thought from today on a shelf. Gently. They will be there if you need them tomorrow.',
      detail: 'Thought shelving', segment: 'breath', time: 'evening',
      shortTitle: 'Shelve them', cta: 'Try this' },

    { prompt: 'The person you were frustrated with today is not thinking about it right now. You are free to stop too.',
      detail: 'A release reminder', segment: 'text', time: 'evening',
      shortTitle: 'They moved on', cta: 'Let it go' },

    { prompt: 'Take a breath. On the exhale, mentally close a door on today. Not slam it. Just gently close it.',
      detail: 'Closing the day', segment: 'breath', time: 'evening',
      shortTitle: 'Close the door', cta: 'Breathe' },

    { prompt: 'Sleeping on a problem actually works. Your brain processes information during sleep. Let it do its job.',
      detail: 'A sleep-on-it fact', segment: 'fact', time: 'evening',
      shortTitle: 'Sleep on it', cta: 'Oh, really?' },

    { prompt: 'Here is a list of things your mind does not need to figure out before bed.',
      detail: 'A stop-solving list', segment: 'list', time: 'evening',
      shortTitle: 'Stop solving', cta: 'Skip it' },

    { prompt: 'Name one thing that went well today. Not a big thing. A small one. Let it be the last thought you hold.',
      detail: 'One good thing', segment: 'text', time: 'evening',
      shortTitle: 'One good thing', cta: 'Try this' },

    { prompt: 'Breathe in gently. On the exhale, imagine your thoughts getting quieter. Like turning down a radio.',
      detail: 'A thought-dimmer breath', segment: 'breath', time: 'evening',
      shortTitle: 'Turn it down', cta: 'Breathe' },

    { prompt: 'That awkward thing you said today? The other person probably already forgot it. People remember their own awkwardness, not yours.',
      detail: 'A cringe release', segment: 'fact', time: 'evening',
      shortTitle: 'They forgot', cta: 'Let it go' },

    { prompt: 'You are not your worst moment today. You are the whole day, and most of it was fine.',
      detail: 'A zoomed-out view', segment: 'text', time: 'evening',
      shortTitle: 'Whole day', cta: 'Read on' },

    { prompt: 'Here is a list of gentle thoughts to carry into sleep.',
      detail: 'Bedtime thoughts', segment: 'list', time: 'evening',
      shortTitle: 'Carry these', cta: 'Read on' },

    // ── SPACE: Anytime (15 prompts) ──

    { prompt: 'Not every thought deserves your attention. Some of them are just noise.',
      detail: 'A thought filter', segment: 'text', time: 'anytime',
      shortTitle: 'Just noise', cta: 'Let it go' },

    { prompt: 'Take three breaths. With each exhale, let go of one thought. You do not need to replace it with anything.',
      detail: 'A three-thought release', segment: 'breath', time: 'anytime',
      shortTitle: 'Three exhales', cta: 'Breathe' },

    { prompt: 'Here is a list of things that feel like problems but are actually just inconveniences.',
      detail: 'A proportionality check', segment: 'list', time: 'anytime',
      shortTitle: 'Just inconvenient', cta: 'Read on' },

    { prompt: 'Saying "I do not know" is an honest answer. It is not weakness. It is clarity.',
      detail: 'Permission to not know', segment: 'text', time: 'anytime',
      shortTitle: 'Don\'t know yet', cta: 'Read on' },

    { prompt: 'Your brain confuses "I feel bad about this" with "this is bad." They are not the same thing.',
      detail: 'A feeling-fact split', segment: 'fact', time: 'anytime',
      shortTitle: 'Feeling vs fact', cta: 'Oh, really?' },

    { prompt: 'Breathe in. Think of one thing you can control right now. Breathe out. Let go of one thing you cannot.',
      detail: 'A control breath', segment: 'breath', time: 'anytime',
      shortTitle: 'Control check', cta: 'Breathe' },

    { prompt: 'It is okay to change your mind. It means you are thinking.',
      detail: 'A permission note', segment: 'text', time: 'anytime',
      shortTitle: 'Change it', cta: 'Read on' },

    { prompt: 'Here is a list of kind ways to set a boundary with someone.',
      detail: 'Boundary phrases', segment: 'list', time: 'anytime',
      shortTitle: 'Kind limits', cta: 'Read on' },

    { prompt: 'Close your eyes. Take one slow breath. Open your eyes. You just pressed a tiny reset button.',
      detail: 'A micro-reset', segment: 'breath', time: 'anytime',
      shortTitle: 'Tiny reset', cta: 'Try this' },

    { prompt: 'You are allowed to take up space. In rooms, in conversations, in your own life.',
      detail: 'A space reminder', segment: 'text', time: 'anytime',
      shortTitle: 'Take up space', cta: 'Read on' },

    { prompt: 'Your brain processes rejection in the same area it processes physical pain. So yes, it actually hurts. That is not dramatic.',
      detail: 'Rejection is real pain', segment: 'fact', time: 'anytime',
      shortTitle: 'It hurts for real', cta: 'Oh, really?' },

    { prompt: 'Imagine your mind is a snow globe that just got shaken. You do not need to do anything. Just wait. It will settle.',
      detail: 'A snow globe pause', segment: 'breath', time: 'anytime',
      shortTitle: 'Let it settle', cta: 'Try this' },

    { prompt: 'Here is a list of thoughts worth questioning instead of believing.',
      detail: 'Question these', segment: 'list', time: 'anytime',
      shortTitle: 'Question it', cta: 'Read on' },

    { prompt: 'The story you are telling yourself about what happened is just one version. There are others.',
      detail: 'A narrative check', segment: 'text', time: 'anytime',
      shortTitle: 'One version', cta: 'Read on' },

    { prompt: 'Breathe in deeply. Hold at the top. Exhale slowly while mentally saying "I will figure this out." Because you will.',
      detail: 'A confidence breath', segment: 'breath', time: 'anytime',
      shortTitle: 'You will', cta: 'Breathe' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SMALL — "Treat yourself" (90 prompts)
  // Tiny, tangible, warm. Play, lightness, micro-connection, small comforts.
  // Not food-focused. Segment mix: ~38 text, ~15 breath, ~15 list,
  // ~12 fact, ~10 song
  // ═══════════════════════════════════════════════════════════════

  small: [

    // ── SMALL: Morning (25 prompts) ──

    { prompt: 'Wear something today that makes you feel good. Not for anyone else. For you.',
      detail: 'Dress for yourself', segment: 'text', time: 'morning',
      shortTitle: 'Wear this', cta: 'Do it' },

    { prompt: 'Make your coffee or tea with a little more care than usual. Watch the steam. Sip slowly.',
      detail: 'A slow first sip', segment: 'text', time: 'morning',
      shortTitle: 'Slow sip', cta: 'Try it' },

    { prompt: 'Here is a song that feels like a gentle hand on your back saying "you got this."',
      detail: 'A quiet confidence track', segment: 'song', time: 'morning',
      shortTitle: 'You got this', cta: 'Play it' },

    { prompt: 'Send a "thinking of you" text to someone. No reason. No context. Just because.',
      detail: 'A small reaching out', segment: 'text', time: 'morning',
      shortTitle: 'Send it', cta: 'Do it' },

    { prompt: 'Open a window for thirty seconds. Even if it is cold. Let the outside air in.',
      detail: 'Fresh air as a gift', segment: 'text', time: 'morning',
      shortTitle: 'Open window', cta: 'Try it' },

    { prompt: 'Smiling, even when you do not feel like it, activates the same brain circuits as genuine joy. Try it for ten seconds.',
      detail: 'A brain hack', segment: 'fact', time: 'morning',
      shortTitle: 'Fake smile', cta: 'Oh, really?' },

    { prompt: 'Put on a clean pair of socks. Specifically the softest pair you own. A small luxury you already have.',
      detail: 'Soft socks matter', segment: 'text', time: 'morning',
      shortTitle: 'Soft socks', cta: 'Do it' },

    { prompt: 'Here is a list of kind things you could do for yourself before noon.',
      detail: 'Morning self-care menu', segment: 'list', time: 'morning',
      shortTitle: 'Before noon', cta: 'Go on' },

    { prompt: 'Stretch in bed for thirty extra seconds before you get up. Like a cat. Cats know what they are doing.',
      detail: 'A cat stretch', segment: 'breath', time: 'morning',
      shortTitle: 'Cat stretch', cta: 'Try it' },

    { prompt: 'Look in a mirror. Say one kind thing to yourself. It will feel awkward. Do it anyway.',
      detail: 'A mirror moment', segment: 'text', time: 'morning',
      shortTitle: 'Mirror kind', cta: 'Try it' },

    { prompt: 'The scent of citrus can improve your mood. If you have an orange or a lemon, hold it close and breathe in.',
      detail: 'A scent boost', segment: 'fact', time: 'morning',
      shortTitle: 'Citrus scent', cta: 'Oh, really?' },

    { prompt: 'Here is a song for making breakfast feel like a small celebration.',
      detail: 'A breakfast soundtrack', segment: 'song', time: 'morning',
      shortTitle: 'Morning track', cta: 'Play it' },

    { prompt: 'Write yourself a note to find later today. Something kind. Tuck it in a pocket or a bag.',
      detail: 'A future kindness', segment: 'text', time: 'morning',
      shortTitle: 'Note to self', cta: 'Do it' },

    { prompt: 'Splash cold water on your face. Not to wake up. Just because the sensation is alive and sharp and real.',
      detail: 'A cold splash', segment: 'breath', time: 'morning',
      shortTitle: 'Cold splash', cta: 'Try it' },

    { prompt: 'One kind thing for yourself today: leave the house five minutes earlier so you do not have to rush.',
      detail: 'Five minutes of peace', segment: 'text', time: 'morning',
      shortTitle: 'Five early', cta: 'Try it' },

    { prompt: 'Here is a list of tiny morning pleasures most people forget to notice.',
      detail: 'Morning pleasures', segment: 'list', time: 'morning',
      shortTitle: 'Tiny pleasures', cta: 'Go on' },

    { prompt: 'Laughing for just 15 minutes a day can burn about 40 calories. A small excuse to find something funny this morning.',
      detail: 'Laughter as self-care', segment: 'fact', time: 'morning',
      shortTitle: 'Laugh more', cta: 'Oh, really?' },

    { prompt: 'Put your phone in another room for the first 15 minutes of your morning. The world will wait.',
      detail: 'A phone-free start', segment: 'text', time: 'morning',
      shortTitle: 'Phone away', cta: 'Try it' },

    { prompt: 'Take a slow, deep breath through your nose and focus only on the smell of wherever you are. Let it anchor you.',
      detail: 'A scent breath', segment: 'breath', time: 'morning',
      shortTitle: 'Smell the air', cta: 'Breathe' },

    { prompt: 'Here is something nice for no reason.',
      detail: 'A small surprise', segment: 'text', time: 'morning',
      shortTitle: 'No reason', cta: 'Go on' },

    { prompt: 'Make your bed. Not because you should. Because getting into a made bed tonight will feel like a gift from past-you.',
      detail: 'A future-you favor', segment: 'text', time: 'morning',
      shortTitle: 'Make the bed', cta: 'Do it' },

    { prompt: 'Walking barefoot on grass for even a few minutes has been shown to reduce stress hormones.',
      detail: 'Barefoot science', segment: 'fact', time: 'morning',
      shortTitle: 'Go barefoot', cta: 'Oh, really?' },

    { prompt: 'Here is a song that makes getting dressed feel like the opening scene of a movie.',
      detail: 'A getting-ready track', segment: 'song', time: 'morning',
      shortTitle: 'Getting ready', cta: 'Play it' },

    { prompt: 'Take three breaths and with each one, think of something you are looking forward to, even something small.',
      detail: 'Anticipation breathing', segment: 'breath', time: 'morning',
      shortTitle: 'Look forward', cta: 'Breathe' },

    { prompt: 'Use the nice mug today. The one you save for guests. You are worth the good mug.',
      detail: 'Use the good stuff', segment: 'text', time: 'morning',
      shortTitle: 'Good mug', cta: 'Do it' },

    // ── SMALL: Afternoon (30 prompts) ──

    { prompt: 'Text a friend something you genuinely appreciate about them. Be specific. Watch what happens.',
      detail: 'A micro-connection', segment: 'text', time: 'afternoon',
      shortTitle: 'Tell a friend', cta: 'Do it' },

    { prompt: 'Find the nearest patch of sunlight and stand in it for thirty seconds. Free warmth.',
      detail: 'A sun bath', segment: 'text', time: 'afternoon',
      shortTitle: 'Find sun', cta: 'Try it' },

    { prompt: 'Here is a song that makes the afternoon feel less like a slog and more like a stroll.',
      detail: 'An afternoon shift track', segment: 'song', time: 'afternoon',
      shortTitle: 'Afternoon stroll', cta: 'Play it' },

    { prompt: 'Doodle something on the nearest piece of paper. It does not need to be good. It needs to be yours.',
      detail: 'A small creative act', segment: 'text', time: 'afternoon',
      shortTitle: 'Doodle', cta: 'Try it' },

    { prompt: 'The act of giving a gift, even a small one, activates reward circuits in the giver\'s brain more than in the receiver\'s.',
      detail: 'Giving feels better', segment: 'fact', time: 'afternoon',
      shortTitle: 'Give something', cta: 'Oh, really?' },

    { prompt: 'Here is a list of two-minute treats you probably have access to right now.',
      detail: 'Instant treats', segment: 'list', time: 'afternoon',
      shortTitle: 'Two-minute treats', cta: 'Go on' },

    { prompt: 'Put on your favorite song. The one you are a little embarrassed about loving. Sing along. Just the chorus.',
      detail: 'A guilty pleasure song', segment: 'song', time: 'afternoon',
      shortTitle: 'Guilty pleasure', cta: 'Play it' },

    { prompt: 'Take a bite of something sweet. Eat it slowly. Let it dissolve. That is the whole activity.',
      detail: 'Slow sweetness', segment: 'text', time: 'afternoon',
      shortTitle: 'Slow bite', cta: 'Try it' },

    { prompt: 'Rub a tiny bit of hand lotion on your hands. The ritual matters as much as the moisture.',
      detail: 'A hand ritual', segment: 'text', time: 'afternoon',
      shortTitle: 'Lotion hands', cta: 'Try it' },

    { prompt: 'Take three breaths where you only focus on the feeling of air moving in and out of your nostrils. A micro-treat for your attention.',
      detail: 'Attention rest', segment: 'breath', time: 'afternoon',
      shortTitle: 'Air focus', cta: 'Breathe' },

    { prompt: 'Here is a list of things that count as "doing something for yourself" even though they seem small.',
      detail: 'It counts', segment: 'list', time: 'afternoon',
      shortTitle: 'It counts', cta: 'Go on' },

    { prompt: 'Physical touch releases oxytocin. Even touching your own arm gently. Place a hand on your forearm. Hold for ten seconds.',
      detail: 'Self-touch science', segment: 'fact', time: 'afternoon',
      shortTitle: 'Gentle touch', cta: 'Oh, really?' },

    { prompt: 'Look at a photo on your phone that makes you smile. Not social media. Your own camera roll. Something real.',
      detail: 'A memory visit', segment: 'text', time: 'afternoon',
      shortTitle: 'Old photo', cta: 'Do it' },

    { prompt: 'Compliment a stranger today. Something simple. Their shoes, their bag, their smile. Kindness costs nothing.',
      detail: 'A micro-kindness', segment: 'text', time: 'afternoon',
      shortTitle: 'Compliment', cta: 'Do it' },

    { prompt: 'Here is a track that makes you want to nod your head slowly and feel like everything is going to be okay.',
      detail: 'A head-nod track', segment: 'song', time: 'afternoon',
      shortTitle: 'Nod along', cta: 'Play it' },

    { prompt: 'Open a book to a random page. Read one paragraph. Close it. A tiny literary adventure.',
      detail: 'Random page read', segment: 'text', time: 'afternoon',
      shortTitle: 'Random page', cta: 'Try it' },

    { prompt: 'Here is a list of free things that feel expensive.',
      detail: 'Luxury at no cost', segment: 'list', time: 'afternoon',
      shortTitle: 'Free luxury', cta: 'Go on' },

    { prompt: 'Take a slow sip of water. Hold it in your mouth for a second. Swallow. You just did something kind for your body.',
      detail: 'A mindful sip', segment: 'breath', time: 'afternoon',
      shortTitle: 'Slow water', cta: 'Try it' },

    { prompt: 'Nostalgia is good for you. It boosts mood and increases feelings of social connectedness. Think of a happy memory for ten seconds.',
      detail: 'Nostalgia as medicine', segment: 'fact', time: 'afternoon',
      shortTitle: 'Happy memory', cta: 'Oh, really?' },

    { prompt: 'Step away from your desk and look out a window for one minute. Not at your phone. Out the window.',
      detail: 'A window minute', segment: 'text', time: 'afternoon',
      shortTitle: 'Window gaze', cta: 'Try it' },

    { prompt: 'Take five slow breaths and with each one, think of one thing that went right today, no matter how small.',
      detail: 'A wins breath', segment: 'breath', time: 'afternoon',
      shortTitle: 'Small wins', cta: 'Breathe' },

    { prompt: 'Buy yourself something tiny today. Under five dollars. A treat you would normally skip.',
      detail: 'A micro-indulgence', segment: 'text', time: 'afternoon',
      shortTitle: 'Tiny treat', cta: 'Do it' },

    { prompt: 'Here is a list of nice things you can do for future-you before the day ends.',
      detail: 'Gifts for later', segment: 'list', time: 'afternoon',
      shortTitle: 'Future favors', cta: 'Go on' },

    { prompt: 'Arrange something on your desk. Straighten a stack. Align a pen. A tiny bit of order can feel like a tiny bit of calm.',
      detail: 'Micro-organizing', segment: 'text', time: 'afternoon',
      shortTitle: 'Straighten one', cta: 'Try it' },

    { prompt: 'People who spend money on experiences report more lasting happiness than those who spend on things.',
      detail: 'An experience fact', segment: 'fact', time: 'afternoon',
      shortTitle: 'Buy experiences', cta: 'Oh, really?' },

    { prompt: 'Take a slow breath in through your nose. Really notice the smell of wherever you are. Let it ground you.',
      detail: 'A grounding sniff', segment: 'breath', time: 'afternoon',
      shortTitle: 'Nose ground', cta: 'Breathe' },

    { prompt: 'Change your phone wallpaper to something that makes you feel calm. It takes thirty seconds and you will see it a hundred times today.',
      detail: 'A wallpaper swap', segment: 'text', time: 'afternoon',
      shortTitle: 'New wallpaper', cta: 'Do it' },

    { prompt: 'Listen to a song you loved when you were fourteen. Whatever happens in your chest is the whole point.',
      detail: 'A nostalgia track', segment: 'song', time: 'afternoon',
      shortTitle: 'Age fourteen', cta: 'Play it' },

    { prompt: 'Here is a list of things that are always worth pausing for.',
      detail: 'Worth pausing for', segment: 'list', time: 'afternoon',
      shortTitle: 'Pause for these', cta: 'Go on' },

    { prompt: 'Stretch your arms above your head as wide as you can. Take one breath at the top. A small act of taking up space.',
      detail: 'A stretch treat', segment: 'breath', time: 'afternoon',
      shortTitle: 'Arms wide', cta: 'Try it' },

    // ── SMALL: Evening (20 prompts) ──

    { prompt: 'Light a candle. Even a cheap one. Firelight changes the entire energy of a room.',
      detail: 'A small flame', segment: 'text', time: 'evening',
      shortTitle: 'Light one', cta: 'Do it' },

    { prompt: 'Put on clothes that feel like a hug. The softest thing you own. You earned soft tonight.',
      detail: 'Comfort dressing', segment: 'text', time: 'evening',
      shortTitle: 'Soft clothes', cta: 'Do it' },

    { prompt: 'Here is a song for doing the dishes and feeling strangely at peace about it.',
      detail: 'A dishwashing track', segment: 'song', time: 'evening',
      shortTitle: 'Dish track', cta: 'Play it' },

    { prompt: 'Make a warm drink. Not because you need it. Because holding something warm is a comfort your hands deserve.',
      detail: 'A warm-hands moment', segment: 'text', time: 'evening',
      shortTitle: 'Warm hands', cta: 'Try it' },

    { prompt: 'The average person spends 6 months of their life waiting for red lights. This evening, you are not waiting for anything.',
      detail: 'No waiting tonight', segment: 'fact', time: 'evening',
      shortTitle: 'No waiting', cta: 'Oh, really?' },

    { prompt: 'Here is a list of small evening rituals that feel like wrapping yourself in something warm.',
      detail: 'Cozy rituals', segment: 'list', time: 'evening',
      shortTitle: 'Cozy list', cta: 'Go on' },

    { prompt: 'Take a slightly longer shower or bath than usual. Not for hygiene. For the warmth.',
      detail: 'An extra few minutes', segment: 'text', time: 'evening',
      shortTitle: 'Longer shower', cta: 'Do it' },

    { prompt: 'Read one page of a book. Not a chapter. One page. That still counts as reading.',
      detail: 'One-page reading', segment: 'text', time: 'evening',
      shortTitle: 'One page', cta: 'Try it' },

    { prompt: 'Rub your hands together until they are warm. Place them on your closed eyes. A small gift from you to you.',
      detail: 'Warm palm eye rest', segment: 'breath', time: 'evening',
      shortTitle: 'Warm eyes', cta: 'Try it' },

    { prompt: 'Weighted blankets work because deep pressure activates your parasympathetic nervous system. Pile on the blankets tonight.',
      detail: 'Blanket science', segment: 'fact', time: 'evening',
      shortTitle: 'Pile blankets', cta: 'Oh, really?' },

    { prompt: 'Here is a song that sounds like being tucked in by someone who cares about you.',
      detail: 'A tucked-in track', segment: 'song', time: 'evening',
      shortTitle: 'Tucked in', cta: 'Play it' },

    { prompt: 'Call someone. Not to text. To hear their voice. Even a two-minute call can change the entire shape of your night.',
      detail: 'A voice connection', segment: 'text', time: 'evening',
      shortTitle: 'Call someone', cta: 'Do it' },

    { prompt: 'Here is a list of tiny luxuries that cost nothing and are available to you tonight.',
      detail: 'Free luxuries', segment: 'list', time: 'evening',
      shortTitle: 'Free tonight', cta: 'Go on' },

    { prompt: 'Apply lotion to your hands very slowly. Like it is a ritual, not a task. Thirty seconds of gentleness.',
      detail: 'A hand ritual', segment: 'breath', time: 'evening',
      shortTitle: 'Hand care', cta: 'Try it' },

    { prompt: 'Write down one thing you are grateful for. Not because gratitude journals work. Because this specific thing deserves to be noticed.',
      detail: 'One specific thing', segment: 'text', time: 'evening',
      shortTitle: 'Write one', cta: 'Do it' },

    { prompt: 'Looking at photos of cute animals lowers cortisol. Here is your medical permission to look at baby animals.',
      detail: 'Cute animal science', segment: 'fact', time: 'evening',
      shortTitle: 'Baby animals', cta: 'Oh, really?' },

    { prompt: 'Put your phone in another room for the last hour before bed. See what your evening becomes without it.',
      detail: 'A phone-free hour', segment: 'text', time: 'evening',
      shortTitle: 'Phone away', cta: 'Try it' },

    { prompt: 'Take five long, slow breaths and imagine breathing in warmth and breathing out the whole day.',
      detail: 'A warm breathing close', segment: 'breath', time: 'evening',
      shortTitle: 'Breathe warmth', cta: 'Breathe' },

    { prompt: 'Here is a list of things that make a bed feel more inviting tonight.',
      detail: 'Bed prep ideas', segment: 'list', time: 'evening',
      shortTitle: 'Better bed', cta: 'Go on' },

    { prompt: 'Spray your pillow with something that smells good. Or flip it to the cool side. A small gift before sleep.',
      detail: 'A pillow upgrade', segment: 'text', time: 'evening',
      shortTitle: 'Pillow treat', cta: 'Do it' },

    // ── SMALL: Anytime (15 prompts) ──

    { prompt: 'Take a photo of something beautiful near you right now. Not to post. Just to have.',
      detail: 'A private photo', segment: 'text', time: 'anytime',
      shortTitle: 'Take a photo', cta: 'Do it' },

    { prompt: 'Humans are the only animals that cry emotional tears. That means crying is uniquely, deeply human. Let it happen if it needs to.',
      detail: 'A crying fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Let it out', cta: 'Oh, really?' },

    { prompt: 'Here is a song that feels like being wrapped in something warm.',
      detail: 'A comfort track', segment: 'song', time: 'anytime',
      shortTitle: 'Warm song', cta: 'Play it' },

    { prompt: 'Take three slow breaths and with each one, send a kind thought to someone you care about.',
      detail: 'Kindness breathing', segment: 'breath', time: 'anytime',
      shortTitle: 'Kind breaths', cta: 'Breathe' },

    { prompt: 'Here is a list of things that always make things a little better, no matter when.',
      detail: 'Universal comforts', segment: 'list', time: 'anytime',
      shortTitle: 'Always better', cta: 'Go on' },

    { prompt: 'Eat something you love. Not because you are hungry. Because pleasure is a valid reason to eat.',
      detail: 'Pleasure as fuel', segment: 'text', time: 'anytime',
      shortTitle: 'Eat for joy', cta: 'Do it' },

    { prompt: 'The smell of rain has a name. It is called petrichor. Next time it rains, step outside and breathe it in on purpose.',
      detail: 'A rain fact', segment: 'fact', time: 'anytime',
      shortTitle: 'Petrichor', cta: 'Oh, really?' },

    { prompt: 'Give someone a compliment today. Unprompted. Watch their face. That reaction is yours to keep.',
      detail: 'A free gift to give', segment: 'text', time: 'anytime',
      shortTitle: 'Give a compliment', cta: 'Do it' },

    { prompt: 'Take a breath and think of one texture you love. Velvet, warm sand, fresh sheets. Imagine it under your fingers.',
      detail: 'A texture meditation', segment: 'breath', time: 'anytime',
      shortTitle: 'Soft texture', cta: 'Try it' },

    { prompt: 'Here is a list of comforts you can access right now without spending a cent.',
      detail: 'Free comforts', segment: 'list', time: 'anytime',
      shortTitle: 'Free comfort', cta: 'Go on' },

    { prompt: 'Listening to music you love releases the same neurotransmitter as eating chocolate. Playlist or candy bar, your choice.',
      detail: 'Music as chocolate', segment: 'fact', time: 'anytime',
      shortTitle: 'Music dopamine', cta: 'Oh, really?' },

    { prompt: 'Here is a song for when you want to feel held without being touched.',
      detail: 'A holding track', segment: 'song', time: 'anytime',
      shortTitle: 'Feel held', cta: 'Play it' },

    { prompt: 'Do one thing right now that your future self will thank you for. Something tiny. Fill a water bottle. Charge your phone.',
      detail: 'A future-you gift', segment: 'text', time: 'anytime',
      shortTitle: 'Future thanks', cta: 'Do it' },

    { prompt: 'Place a hand on your own arm and give it a gentle squeeze. Your body does not know the difference between your comfort and someone else\'s.',
      detail: 'Self-comfort touch', segment: 'breath', time: 'anytime',
      shortTitle: 'Arm squeeze', cta: 'Try it' },

    { prompt: 'Here is a list of ways to make any ordinary moment feel a little more special.',
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
