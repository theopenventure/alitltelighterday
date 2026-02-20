import { getTimeOfDay, dateSeed } from './boostPromptPool'

// ── Archive hero copy pool ──
// Same structure as heroCopyPool: { headline, subhead }
// Rules: headline 2-5 words (<= ~30 chars), subhead 1 sentence (10-18 words).
// Tone: calm, grounding. Context: revisiting saved moments, things that resonated.

// ── When saved items exist (10 variants, no time-of-day split) ──

export const archiveHeroCopyPool = [
  {
    headline: "things you kept.",
    subhead: "moments that stayed with you. here whenever you need them.",
  },
  {
    headline: "your quiet collection.",
    subhead: "everything here found you at the right time. come back when ready.",
  },
  {
    headline: "saved for a reason.",
    subhead: "you kept these because something landed. that instinct was right.",
  },
  {
    headline: "return to this.",
    subhead: "some things are worth revisiting. these are the ones you chose.",
  },
  {
    headline: "what stayed.",
    subhead: "not everything needs to be new. the best thing might be here already.",
  },
  {
    headline: "still here for you.",
    subhead: "what resonated once tends to resonate again. take your time.",
  },
  {
    headline: "a gentle archive.",
    subhead: "no rush, no order. just moments you thought were worth keeping.",
  },
  {
    headline: "yours to revisit.",
    subhead: "these aren't going anywhere. here whenever the moment feels right.",
  },
  {
    headline: "gathered light.",
    subhead: "each of these carried something you needed. maybe they still do.",
  },
  {
    headline: "come back here.",
    subhead: "this is where the good stuff lives. the things that made you pause.",
  },
]

// ── When nothing saved yet (10 variants, flat — no time-of-day split) ──
// Headlines: one word / short interjection. Tone: wry but warm, not pressure.

export const archiveEmptyCopyPool = [
  {
    headline: "nothing.",
    subhead: "explore a boost and save what speaks to you.",
  },
  {
    headline: "oops.",
    subhead: "nothing here yet. head back and grab something good.",
  },
  {
    headline: "empty.",
    subhead: "your collection is waiting. save what stays with you.",
  },
  {
    headline: "blank.",
    subhead: "this page is yours to fill. start whenever you're ready.",
  },
  {
    headline: "quiet.",
    subhead: "no saved moments yet. the right one will find you.",
  },
  {
    headline: "oh.",
    subhead: "nothing saved yet. explore a boost and keep what resonates.",
  },
  {
    headline: "hmm.",
    subhead: "looks empty here. head back and see what lands today.",
  },
  {
    headline: "bare.",
    subhead: "your archive is empty. one saved moment is all it takes.",
  },
  {
    headline: "clean.",
    subhead: "a fresh start. save a boost when something feels right.",
  },
  {
    headline: "open.",
    subhead: "this space is waiting. something good will find its way here.",
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
