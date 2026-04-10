// Prompt pool + daily selection logic.
// The 360 prompt entries (90 per category) live in ./prompts/*.js — this file
// only holds the helpers that pick and order boosts for a given date. Splitting
// made the previous 1600+ line monolith easier to edit category-by-category.

import { liftPrompts } from './prompts/lift'
import { steadyPrompts } from './prompts/steady'
import { spacePrompts } from './prompts/space'
import { smallPrompts } from './prompts/small'

// ── Category metadata (static, never rotates) ──

export const categoryMeta = {
  lift:   { category: 'Get curious',     variant: 'warm' },
  steady: { category: 'Calm your body',  variant: 'gray' },
  space:  { category: 'Quiet your mind', variant: 'sage' },
  small:  { category: 'Treat yourself',   variant: 'beige' },
}

// ── Time-of-day periods ──
// morning: before 12pm | afternoon: 12–5pm | evening: after 5pm
// 'anytime' prompts are used as fallback / filler regardless of time

// ── Prompt pool: assembled from the per-category files ──
// Each prompt: { prompt, detail, segment, time, shortTitle, cta }
// Prompt Framework v3: 50-60 chars, strict formulas, no state assumptions, no "shoulds"

export const promptPool = {
  lift:   liftPrompts,
  steady: steadyPrompts,
  space:  spacePrompts,
  small:  smallPrompts,
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
