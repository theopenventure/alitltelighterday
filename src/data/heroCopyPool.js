import { getTimeOfDay, dateSeed } from './boostPromptPool'

// ── Hero copy pool ──
// 30 variants: 10 per time of day.
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
      subhead: "Not with your list or phone — with one unhurried breath.",
    },
    {
      headline: "Just this.",
      subhead: "Today is still wide open. Choose how to step into it.",
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
      subhead: "Between rush and rest, there's still space for stillness.",
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
