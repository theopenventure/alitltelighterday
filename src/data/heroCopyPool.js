import { getTimeOfDay, dateSeed } from './boostPromptPool'

// ── Hero copy pool ──
// 30 variants: 10 per time of day.
// Rules: headline 2-5 words (<= ~30 chars), subhead 1 sentence (10-18 words).
// Tone: calm, grounding. Morning = gentle possibility. Afternoon = mid-day reset.
// Evening = reflective, winding down. Never motivational or urgent.

export const heroCopyPool = {
  morning: [
    {
      headline: "a new page.",
      subhead: "the day is still finding its shape. no need to rush.",
    },
    {
      headline: "something quiet first.",
      subhead: "before the noise picks up, there's a small window of calm.",
    },
    {
      headline: "here, before the day.",
      subhead: "the world will ask a lot today. for now, just breathe.",
    },
    {
      headline: "ease in.",
      subhead: "there's no rush to be anywhere just yet. settle in.",
    },
    {
      headline: "soft start.",
      subhead: "the day doesn't need you at full speed yet. take your time.",
    },
    {
      headline: "a gentle opening.",
      subhead: "today hasn't asked anything of you yet. take this moment.",
    },
    {
      headline: "still morning.",
      subhead: "the world is waking up. you don't have to wake up with it.",
    },
    {
      headline: "before the rush.",
      subhead: "things are quiet right now. here's a place to land first.",
    },
    {
      headline: "begin here.",
      subhead: "not with your list or phone — with one unhurried breath.",
    },
    {
      headline: "just this.",
      subhead: "today is still wide open. choose how to step into it.",
    },
  ],

  afternoon: [
    {
      headline: "come back.",
      subhead: "midday is a good place to pause and find yourself again.",
    },
    {
      headline: "just here, now.",
      subhead: "things are moving fast. you're allowed to slow down a moment.",
    },
    {
      headline: "a small pause.",
      subhead: "the afternoon asks a lot. here's permission to step back.",
    },
    {
      headline: "take a breath.",
      subhead: "you've been going since morning. the world can wait a bit.",
    },
    {
      headline: "halfway through.",
      subhead: "here's a quiet corner to stop and collect yourself.",
    },
    {
      headline: "surface for a moment.",
      subhead: "you've been deep in the day's demands. come up for air.",
    },
    {
      headline: "a moment between.",
      subhead: "between rush and rest, there's still space for stillness.",
    },
    {
      headline: "reset.",
      subhead: "the afternoon can feel relentless. here's a quiet place to land.",
    },
    {
      headline: "anchor here.",
      subhead: "before the next thing pulls you, let yourself be right here.",
    },
    {
      headline: "still with you.",
      subhead: "the noise hasn't stopped, but you don't have to take it all in.",
    },
  ],

  evening: [
    {
      headline: "you made it.",
      subhead: "the day asked a lot. here's a place to set it all down.",
    },
    {
      headline: "soften a little.",
      subhead: "the noise is quieting. let the rest of today be gentle.",
    },
    {
      headline: "the day is done.",
      subhead: "it's behind you now. here's a quiet place to close it out.",
    },
    {
      headline: "winding down.",
      subhead: "the world needs nothing more from you tonight. rest here.",
    },
    {
      headline: "let it land.",
      subhead: "you moved through a whole day. give yourself a breath now.",
    },
    {
      headline: "evening, finally.",
      subhead: "the pace is fading. here's somewhere soft to settle into.",
    },
    {
      headline: "enough for today.",
      subhead: "you don't have to keep going. this is a place to be still.",
    },
    {
      headline: "put it down.",
      subhead: "the day's weight doesn't need to follow you here. let go.",
    },
    {
      headline: "a slow close.",
      subhead: "the light is changing. let yourself ease along with it.",
    },
    {
      headline: "you showed up.",
      subhead: "that's enough. the world was loud, and you moved through it.",
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
