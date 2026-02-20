import { getTimeOfDay, dateSeed } from './boostPromptPool'

// ── Hero copy pool ──
// 90 variants: 30 per time of day.
// Rules: headline 2-5 words (<= ~30 chars), subhead 1 sentence (10-18 words).
// Tone: calm, grounding. Morning = gentle possibility. Afternoon = mid-day reset.
// Evening = reflective, winding down. Never motivational or urgent.

export const heroCopyPool = {
  morning: [
    {
      headline: "A new page.",
      subhead: "The day is still finding its shape. No need to rush.",
    },
    {
      headline: "Something quiet first.",
      subhead: "Before the noise picks up, there's a small window of calm.",
    },
    {
      headline: "Here, before the day.",
      subhead: "The world will ask a lot today. For now, just breathe.",
    },
    {
      headline: "Ease in.",
      subhead: "There's no rush to be anywhere just yet. Settle in.",
    },
    {
      headline: "Soft start.",
      subhead: "The day doesn't need you at full speed yet. Take your time.",
    },
    {
      headline: "A gentle opening.",
      subhead: "Today hasn't asked anything of you yet. Take this moment.",
    },
    {
      headline: "Still morning.",
      subhead: "The world is waking up. You don't have to wake up with it.",
    },
    {
      headline: "Before the rush.",
      subhead: "Things are quiet right now. Here's a place to land first.",
    },
    {
      headline: "Begin here.",
      subhead: "Not with your list or phone. With one unhurried breath.",
    },
    {
      headline: "Just this.",
      subhead: "Today is still wide open. Choose how to step into it.",
    },
    {
      headline: "Nothing yet.",
      subhead: "The day hasn't made a single demand. Sit with that a moment.",
    },
    {
      headline: "Morning, still.",
      subhead: "The hours ahead will come on their own. No need to chase them.",
    },
    {
      headline: "One thing at a time.",
      subhead: "The whole day doesn't need to be figured out right now.",
    },
    {
      headline: "Slow morning.",
      subhead: "Let the first few minutes belong to you and nothing else.",
    },
    {
      headline: "Not yet.",
      subhead: "The to-do list can wait. Right now there's just this quiet.",
    },
    {
      headline: "You're here.",
      subhead: "That's the only thing this morning is asking of you.",
    },
    {
      headline: "Fresh air.",
      subhead: "The day is new and unhurried. Let it stay that way a little longer.",
    },
    {
      headline: "No hurry.",
      subhead: "Morning has its own pace. You're allowed to follow it.",
    },
    {
      headline: "Wide open.",
      subhead: "Nothing has been decided yet. The day is still yours to feel into.",
    },
    {
      headline: "Room to stretch.",
      subhead: "Before the world fills in, there's space here just for you.",
    },
    {
      headline: "The quiet part.",
      subhead: "This is the stretch of morning that belongs to no one else.",
    },
    {
      headline: "Unhurried.",
      subhead: "The sun is up but the rush hasn't started. Stay here a moment.",
    },
    {
      headline: "A blank hour.",
      subhead: "Nothing is owed to anyone yet. Let this moment be light.",
    },
    {
      headline: "Small and good.",
      subhead: "The morning doesn't need to be big. Just warm and slow.",
    },
    {
      headline: "Start soft.",
      subhead: "You don't owe the day anything just yet. Be easy with yourself.",
    },
    {
      headline: "Only morning.",
      subhead: "Later will take care of itself. Right now the light is gentle.",
    },
    {
      headline: "First breath.",
      subhead: "Before everything else, there's this. A moment with no edges.",
    },
    {
      headline: "Low and slow.",
      subhead: "The morning is yours to move through at whatever pace feels right.",
    },
    {
      headline: "Open hands.",
      subhead: "You don't have to grip the day. Let it come to you gently.",
    },
    {
      headline: "Right here.",
      subhead: "The morning is simple if you let it be. No plans for this minute.",
    },
  ],

  afternoon: [
    {
      headline: "Come back.",
      subhead: "Midday is a good place to pause and find yourself again.",
    },
    {
      headline: "Just here, now.",
      subhead: "Things are moving fast. You're allowed to slow down a moment.",
    },
    {
      headline: "A small pause.",
      subhead: "The afternoon asks a lot. Here's permission to step back.",
    },
    {
      headline: "Take a breath.",
      subhead: "You've been going since morning. The world can wait a bit.",
    },
    {
      headline: "Halfway through.",
      subhead: "Here's a quiet corner to stop and collect yourself.",
    },
    {
      headline: "Surface for a moment.",
      subhead: "You've been deep in the day's demands. Come up for air.",
    },
    {
      headline: "A moment between.",
      subhead: "Between the rush and the rest, there's still space for stillness.",
    },
    {
      headline: "Reset.",
      subhead: "The afternoon can feel relentless. Here's a quiet place to land.",
    },
    {
      headline: "Anchor here.",
      subhead: "Before the next thing pulls you, let yourself be right here.",
    },
    {
      headline: "Still with you.",
      subhead: "The noise hasn't stopped, but you don't have to take it all in.",
    },
    {
      headline: "Brief landing.",
      subhead: "You've been in motion. Set it down for thirty seconds.",
    },
    {
      headline: "Steady.",
      subhead: "The afternoon is loud. You don't have to match its volume.",
    },
    {
      headline: "A gap in the noise.",
      subhead: "This is a small clearing in the middle of a full day.",
    },
    {
      headline: "Feet on the ground.",
      subhead: "Whatever is spinning, you're still here. That's something solid.",
    },
    {
      headline: "Drop your shoulders.",
      subhead: "You're probably holding tension you forgot about. Let it loosen.",
    },
    {
      headline: "Middle of things.",
      subhead: "You don't have to finish everything. Just be where you are.",
    },
    {
      headline: "Be here a second.",
      subhead: "The list will still be there. Right now there's just this.",
    },
    {
      headline: "Soft landing.",
      subhead: "You've been carrying the day. Set it beside you for a moment.",
    },
    {
      headline: "Pause here.",
      subhead: "Not because you have to. Because you're allowed to.",
    },
    {
      headline: "One breath.",
      subhead: "That's all. One slow breath before you go back to the rest.",
    },
    {
      headline: "Room to think.",
      subhead: "The afternoon gets tangled. Here's a little space to unknot.",
    },
    {
      headline: "A clearing.",
      subhead: "Right now, nothing is urgent. Even if everything felt that way.",
    },
    {
      headline: "Hands open.",
      subhead: "You've been gripping the day. Loosen your hold for a moment.",
    },
    {
      headline: "Catch your breath.",
      subhead: "The pace isn't yours to keep up with. Slow down if you need.",
    },
    {
      headline: "Check in.",
      subhead: "Not on your tasks. On you. How are you carrying all of this.",
    },
    {
      headline: "Right now is fine.",
      subhead: "This exact moment is manageable. Stay in it a little longer.",
    },
    {
      headline: "Lighter than you think.",
      subhead: "Some of what you're carrying can be set down. Even briefly.",
    },
    {
      headline: "You're doing fine.",
      subhead: "The day is messy and that's okay. You don't need to fix it all.",
    },
    {
      headline: "Somewhere quiet.",
      subhead: "Even in the middle of everything, this is a place to rest your mind.",
    },
    {
      headline: "Let it breathe.",
      subhead: "The afternoon doesn't need to be solved. Just moved through gently.",
    },
  ],

  evening: [
    {
      headline: "You made it.",
      subhead: "The day asked a lot. Here's a place to set it all down.",
    },
    {
      headline: "Soften a little.",
      subhead: "The noise is quieting. Let the rest of today be gentle.",
    },
    {
      headline: "The day is done.",
      subhead: "It's behind you now. Here's a quiet place to close it out.",
    },
    {
      headline: "Winding down.",
      subhead: "The world needs nothing more from you tonight. Rest here.",
    },
    {
      headline: "Let it land.",
      subhead: "You moved through a whole day. Give yourself a breath now.",
    },
    {
      headline: "Evening, finally.",
      subhead: "The pace is fading. Here's somewhere soft to settle into.",
    },
    {
      headline: "Enough for today.",
      subhead: "You don't have to keep going. This is a place to be still.",
    },
    {
      headline: "Put it down.",
      subhead: "The day's weight doesn't need to follow you here. Let go.",
    },
    {
      headline: "A slow close.",
      subhead: "The light is changing. Let yourself ease along with it.",
    },
    {
      headline: "You showed up.",
      subhead: "That's enough. The world was loud, and you moved through it.",
    },
    {
      headline: "Almost through.",
      subhead: "The hard part of the day is behind you. Be easy now.",
    },
    {
      headline: "Nothing left to do.",
      subhead: "The evening has no requirements. Just you and a little quiet.",
    },
    {
      headline: "Settle in.",
      subhead: "The day handed you a lot. You don't need to hold it anymore.",
    },
    {
      headline: "Gently now.",
      subhead: "The edges of the day are going soft. Let yourself follow.",
    },
    {
      headline: "Day's end.",
      subhead: "Whatever happened, you're here. That matters more than the rest.",
    },
    {
      headline: "Let it go quiet.",
      subhead: "The evening doesn't need a plan. Just let things settle on their own.",
    },
    {
      headline: "Rest your hands.",
      subhead: "They've done enough today. Let them be still for a while.",
    },
    {
      headline: "Closing time.",
      subhead: "Not everything got done. That's fine. Today was still a full day.",
    },
    {
      headline: "Easy does it.",
      subhead: "The evening is for softening. No need to carry anything further.",
    },
    {
      headline: "Lamp light.",
      subhead: "The bright part of the day is over. This is the warm, dim part.",
    },
    {
      headline: "Set it beside you.",
      subhead: "The weight of the day doesn't belong in your lap anymore.",
    },
    {
      headline: "Quiet hours.",
      subhead: "The world is getting softer. You're allowed to get softer too.",
    },
    {
      headline: "No more tasks.",
      subhead: "Whatever's left can wait until morning. Tonight is for being still.",
    },
    {
      headline: "Breathe out.",
      subhead: "You've been holding a lot today. This is your exhale.",
    },
    {
      headline: "Fade to warm.",
      subhead: "The sharp edges of the day are rounding off. Let them.",
    },
    {
      headline: "Just tonight.",
      subhead: "Tomorrow is its own thing. Right now it's only this evening.",
    },
    {
      headline: "Permission to stop.",
      subhead: "You've given enough today. The rest of the night is yours.",
    },
    {
      headline: "A soft place.",
      subhead: "You don't have to think about what's next. Just be where you are.",
    },
    {
      headline: "Almost done.",
      subhead: "The day is releasing its grip. Let yourself release yours too.",
    },
    {
      headline: "Good night, almost.",
      subhead: "Before sleep, there's this. A moment of warmth with nothing attached.",
    },
  ],
}

// ── Deterministic daily selection ──
// Same date always returns same copy. Changes with each new day.

export function getDailyHeroCopy(date = new Date()) {
  const timeKey = getTimeOfDay(date)
  const pool = heroCopyPool[timeKey]
  const dateStr = date.toDateString()
  const seed = dateSeed(dateStr + timeKey)
  return pool[seed % pool.length]
}

export function getRandomHeroCopy(exclude = null) {
  const timeKey = getTimeOfDay()
  const pool = heroCopyPool[timeKey]
  const candidates = exclude ? pool.filter(c => c.headline !== exclude.headline) : pool
  return candidates[Math.floor(Math.random() * candidates.length)]
}
