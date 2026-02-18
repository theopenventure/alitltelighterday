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
      subhead: "The day is still finding its shape. You don't have to rush into it.",
    },
    {
      headline: "Something quiet first.",
      subhead: "Before the noise picks up, there's a small window of calm. It's yours.",
    },
    {
      headline: "Here, before the day.",
      subhead: "The world will ask a lot of you today. For now, just breathe.",
    },
    {
      headline: "Ease in.",
      subhead: "There's no rush to be anywhere just yet. The morning belongs to you.",
    },
    {
      headline: "Soft start.",
      subhead: "The day ahead doesn't need you at full speed quite yet. Settle in.",
    },
    {
      headline: "A gentle opening.",
      subhead: "Today hasn't asked anything of you yet. Take this moment while it lasts.",
    },
    {
      headline: "Still morning.",
      subhead: "The world outside is waking up. You don't have to wake up with it.",
    },
    {
      headline: "Before the rush.",
      subhead: "Right now, things are quiet. Here's a place to land before the noise starts.",
    },
    {
      headline: "Begin here.",
      subhead: "Not with your list or your phone — with one small, unhurried breath first.",
    },
    {
      headline: "Just this.",
      subhead: "Today is still wide open. You get to choose how to step into it.",
    },
  ],

  afternoon: [
    {
      headline: "Come back.",
      subhead: "The middle of the day is a good place to pause and find yourself again.",
    },
    {
      headline: "Just here, now.",
      subhead: "Things are moving fast out there. You're allowed to slow down for a moment.",
    },
    {
      headline: "A small pause.",
      subhead: "The afternoon asks a lot. This is your permission to step back for a second.",
    },
    {
      headline: "Take a breath.",
      subhead: "You've been going since morning. The world can wait a little while you rest.",
    },
    {
      headline: "Halfway through.",
      subhead: "The day is at its midpoint. Here's a quiet corner to stop and collect yourself.",
    },
    {
      headline: "Surface for a moment.",
      subhead: "You've been underwater in the day's demands. Come up for some air right now.",
    },
    {
      headline: "A moment between.",
      subhead: "Between the morning's rush and the evening's rest, there's still space for stillness.",
    },
    {
      headline: "Reset.",
      subhead: "The afternoon can feel relentless. This is a quiet place to land and recalibrate.",
    },
    {
      headline: "Anchor here.",
      subhead: "Before the next thing pulls you forward, let yourself be fully where you are.",
    },
    {
      headline: "Still with you.",
      subhead: "The noise outside hasn't stopped, but you don't have to take all of it in.",
    },
  ],

  evening: [
    {
      headline: "You made it.",
      subhead: "The day asked a lot of you. Here's a place to finally set it all down.",
    },
    {
      headline: "Soften a little.",
      subhead: "The noise is starting to quiet. You can let the rest of today be gentle.",
    },
    {
      headline: "The day is done.",
      subhead: "Whatever it held, it's behind you now. Here's a quiet place to close it out.",
    },
    {
      headline: "Winding down.",
      subhead: "The world doesn't need anything more from you tonight. This moment is just yours.",
    },
    {
      headline: "Let it land.",
      subhead: "You moved through a whole day. Give yourself a breath before moving on to tomorrow.",
    },
    {
      headline: "Evening, finally.",
      subhead: "The pace of the day is fading. Here's somewhere soft and unhurried to settle into.",
    },
    {
      headline: "Enough for today.",
      subhead: "You don't have to keep going. This is a place to rest and just be still.",
    },
    {
      headline: "Put it down.",
      subhead: "The day's weight doesn't need to follow you into the evening. Here, set it down.",
    },
    {
      headline: "A slow close.",
      subhead: "The light is changing and the pace is easing. Let yourself ease along with it.",
    },
    {
      headline: "You showed up.",
      subhead: "That's enough. The world was loud today, and you moved through it. Rest now.",
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
