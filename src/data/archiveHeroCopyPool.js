import { getTimeOfDay, dateSeed } from './boostPromptPool'

// ── Archive hero copy pool ──
// Same structure as heroCopyPool: { headline, subhead }
// Rules: headline 2-5 words (<= ~30 chars), subhead 1 sentence (10-18 words).
// Tone: calm, grounding. Context: revisiting saved moments, things that resonated.

// ── When saved items exist (10 variants, no time-of-day split) ──

export const archiveHeroCopyPool = [
  {
    headline: "Things you kept.",
    subhead: "These are the moments that stayed with you. They're here whenever you need them.",
  },
  {
    headline: "Your quiet collection.",
    subhead: "Everything here found you at the right time. Come back to it when you're ready.",
  },
  {
    headline: "Saved for a reason.",
    subhead: "You kept these because something landed. That instinct is worth trusting.",
  },
  {
    headline: "Return to this.",
    subhead: "Some things are worth revisiting. These are the ones you chose to hold onto.",
  },
  {
    headline: "What stayed.",
    subhead: "Not everything needs to be new. Sometimes the best thing is something you already found.",
  },
  {
    headline: "Still here for you.",
    subhead: "The things that resonated once tend to resonate again. Take your time with them.",
  },
  {
    headline: "A gentle archive.",
    subhead: "No rush, no order. Just the moments you thought were worth keeping close.",
  },
  {
    headline: "Yours to revisit.",
    subhead: "These aren't going anywhere. They'll be here whenever the moment feels right.",
  },
  {
    headline: "Gathered light.",
    subhead: "Each of these carried something you needed. Maybe they still do.",
  },
  {
    headline: "Come back here.",
    subhead: "This is where the good stuff lives. The things that made you pause and feel something.",
  },
]

// ── When nothing saved yet (5 per time of day) ──
// Context: gentle encouragement, the archive is waiting, no pressure.

export const archiveEmptyCopyPool = {
  morning: [
    {
      headline: "Nothing here yet.",
      subhead: "That's perfectly fine. Explore today's boosts and save what speaks to you.",
    },
    {
      headline: "A blank page.",
      subhead: "Your archive starts whenever you're ready. There's no hurry to fill it.",
    },
    {
      headline: "Room for something.",
      subhead: "This space is waiting. When a moment resonates this morning, it can live here.",
    },
    {
      headline: "Empty, for now.",
      subhead: "The day is just beginning. Something might find its way here before it ends.",
    },
    {
      headline: "Start small.",
      subhead: "One saved moment is enough. The morning has plenty to offer if you look gently.",
    },
  ],

  afternoon: [
    {
      headline: "Nothing here yet.",
      subhead: "That's okay. When something lands today, you can keep it here for later.",
    },
    {
      headline: "Still open.",
      subhead: "Your archive is patient. It'll be here whenever something feels worth keeping.",
    },
    {
      headline: "Waiting quietly.",
      subhead: "This space holds the things that resonate. Explore a boost and see what stays.",
    },
    {
      headline: "No rush.",
      subhead: "The afternoon still has room for discovery. Save what matters when it finds you.",
    },
    {
      headline: "A place to keep things.",
      subhead: "Nothing here just yet, but that can change with a single moment that lands right.",
    },
  ],

  evening: [
    {
      headline: "Nothing here yet.",
      subhead: "The evening is a good time to explore. Save what feels right before the day ends.",
    },
    {
      headline: "Quiet and empty.",
      subhead: "This space is yours to fill, gently. There's still time to find something tonight.",
    },
    {
      headline: "Room to grow.",
      subhead: "Your archive doesn't need to be full. Even one saved moment is a beautiful start.",
    },
    {
      headline: "An open shelf.",
      subhead: "Nothing on it yet, and that's fine. The right things will find their way here.",
    },
    {
      headline: "Not yet, and that's okay.",
      subhead: "When something resonates, you'll know. And this is where it'll wait for you.",
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
