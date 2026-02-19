import { getTimeOfDay, dateSeed } from './boostPromptPool'

// ── Archive hero copy pool ──
// Same structure as heroCopyPool: { headline, subhead }
// Rules: headline 2-5 words (<= ~30 chars), subhead 1 sentence (10-18 words).
// Tone: calm, grounding. Context: revisiting saved moments, things that resonated.

// ── When saved items exist (10 variants, no time-of-day split) ──

export const archiveHeroCopyPool = [
  {
    headline: "Things you kept.",
    subhead: "Moments that stayed with you. Here whenever you need them.",
  },
  {
    headline: "Your quiet collection.",
    subhead: "Everything here found you at the right time. Come back when ready.",
  },
  {
    headline: "Saved for a reason.",
    subhead: "You kept these because something landed. That instinct was right.",
  },
  {
    headline: "Return to this.",
    subhead: "Some things are worth revisiting. These are the ones you chose.",
  },
  {
    headline: "What stayed.",
    subhead: "Not everything needs to be new. The best thing might be here already.",
  },
  {
    headline: "Still here for you.",
    subhead: "What resonated once tends to resonate again. Take your time.",
  },
  {
    headline: "A gentle archive.",
    subhead: "No rush, no order. Just moments you thought were worth keeping.",
  },
  {
    headline: "Yours to revisit.",
    subhead: "These aren't going anywhere. Here whenever the moment feels right.",
  },
  {
    headline: "Gathered light.",
    subhead: "Each of these carried something you needed. Maybe they still do.",
  },
  {
    headline: "Come back here.",
    subhead: "This is where the good stuff lives. The things that made you pause.",
  },
]

// ── When nothing saved yet (5 per time of day) ──
// Context: gentle encouragement, the archive is waiting, no pressure.

export const archiveEmptyCopyPool = {
  morning: [
    {
      headline: "Nothing here yet.",
      subhead: "That's fine. Explore today's boosts and save what speaks to you.",
    },
    {
      headline: "A blank page.",
      subhead: "Your archive starts whenever you're ready. No hurry to fill it.",
    },
    {
      headline: "Room for something.",
      subhead: "This space is waiting. When something resonates, it can live here.",
    },
    {
      headline: "Empty, for now.",
      subhead: "The day is just beginning. Something might find its way here.",
    },
    {
      headline: "Start small.",
      subhead: "One saved moment is enough. The morning has plenty to offer.",
    },
  ],

  afternoon: [
    {
      headline: "Nothing here yet.",
      subhead: "That's okay. When something lands today, keep it here for later.",
    },
    {
      headline: "Still open.",
      subhead: "Your archive is patient. Here whenever something feels worth keeping.",
    },
    {
      headline: "Waiting quietly.",
      subhead: "This space holds what resonates. Explore a boost and see what stays.",
    },
    {
      headline: "No rush.",
      subhead: "The afternoon has room for discovery. Save what matters when it finds you.",
    },
    {
      headline: "A place to keep things.",
      subhead: "Nothing here yet, but one right moment can change that.",
    },
  ],

  evening: [
    {
      headline: "Nothing here yet.",
      subhead: "Evening is a good time to explore. Save what feels right tonight.",
    },
    {
      headline: "Quiet and empty.",
      subhead: "This space is yours to fill, gently. There's still time tonight.",
    },
    {
      headline: "Room to grow.",
      subhead: "Your archive doesn't need to be full. One moment is a beautiful start.",
    },
    {
      headline: "An open shelf.",
      subhead: "Nothing on it yet, and that's fine. The right things will find their way.",
    },
    {
      headline: "Not yet, and that's okay.",
      subhead: "When something resonates, you'll know. It'll wait for you here.",
    },
  ],
}

// ── Deterministic daily selection ──

export function getDailyArchiveHeroCopy(isEmpty = false, date = new Date()) {
  const dateStr = date.toDateString()

  if (isEmpty) {
    const timeKey = getTimeOfDay(date)
    const pool = archiveEmptyCopyPool[timeKey]
    const seed = dateSeed(dateStr + 'archive-empty-' + timeKey)
    return pool[seed % pool.length]
  }

  const seed = dateSeed(dateStr + 'archive-saved')
  return archiveHeroCopyPool[seed % archiveHeroCopyPool.length]
}
