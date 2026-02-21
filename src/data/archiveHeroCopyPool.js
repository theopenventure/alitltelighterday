import { dateSeed } from './boostPromptPool'

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

// ── When nothing saved yet (10 variants, flat — no time-of-day split) ──
// Headlines: one word / short interjection. Tone: wry but warm, not pressure.

export const archiveEmptyCopyPool = [
  {
    headline: "Nothing.",
    subhead: "Explore a boost and save what speaks to you.",
  },
  {
    headline: "Oops.",
    subhead: "Nothing here yet. Head back and grab something good.",
  },
  {
    headline: "Empty.",
    subhead: "Your collection is waiting. Save what stays with you.",
  },
  {
    headline: "Blank.",
    subhead: "This page is yours to fill. Start whenever you're ready.",
  },
  {
    headline: "Quiet.",
    subhead: "No saved moments yet. The right one will find you.",
  },
  {
    headline: "Oh.",
    subhead: "Nothing saved yet. Explore a boost and keep what resonates.",
  },
  {
    headline: "Hmm.",
    subhead: "Looks empty here. Head back and see what lands today.",
  },
  {
    headline: "Bare.",
    subhead: "Your archive is empty. One saved moment is all it takes.",
  },
  {
    headline: "Clean.",
    subhead: "A fresh start. Save a boost when something feels right.",
  },
  {
    headline: "Open.",
    subhead: "This space is waiting. Something good will find its way here.",
  },
]

// ── Deterministic daily selection ──

export function getDailyArchiveHeroCopy(isEmpty = false, date = new Date()) {
  const dateStr = date.toDateString()

  if (isEmpty) {
    const seed = dateSeed(dateStr + 'archive-empty')
    return archiveEmptyCopyPool[seed % archiveEmptyCopyPool.length]
  }

  const seed = dateSeed(dateStr + 'archive-saved')
  return archiveHeroCopyPool[seed % archiveHeroCopyPool.length]
}
