# A Little Lighter Day — Project Guidelines

## Platform

- **Mobile-first and mobile-only.** The target viewport is 375×812 (iPhone standard). All screens, animations, and layouts are designed for this size. Do not optimize for desktop — every design decision should be made at mobile scale first and only.

## Global UI Rules

- **No text selection anywhere.** Apply `user-select: none` globally. No element should allow text selection or highlighting. This is a consumption experience, not an editing one.
- **No content copying.** The UI should feel like an immersive experience, not a document.

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Supabase (auth, database, edge functions)
- **Styling:** CSS (App.css, index.css)
- **Deployment:** Vite build → dist/

## Project Structure

```
src/
  App.jsx          — Main app component
  App.css          — App styles
  index.css        — Global styles
  main.jsx         — Entry point
  api/             — API/Supabase client
  components/      — React components
  data/            — Static data/content
  lib/             — Utilities and helpers
```

## Design Philosophy

See `.claude/skills/product-strategy/SKILL.md` for full product strategy. Key points:

- Effortless, zero-friction experience
- Reduce cognitive load — every interaction should take weight away
- Quiet confidence — no over-explaining, no tutorials
- 2-minute contract — never ask for more than 2 minutes
- Warm, human tone — never clinical or demanding


# Project Skills — A Little Lighter Day

## About This Project
A wellness app that provides daily emotional reset in under 2 minutes. 
Not therapy, not habit-tracking — pressure-free micro-moments.
Four core categories: "Get Curious," "Calm Your Body," "Quiet Your Mind," "Gift Yourself."

## About Me (the developer)
I'm a product designer who vibe codes. I don't have a traditional engineering background.
- Explain errors and decisions in plain language
- Prefer simple, readable code over clever/abstract patterns
- Add comments that explain WHY something is done, not just what it does

## Architecture Rules

- **Overlay components (`ContentOverlay`, `ArchiveDetail`) must be direct children of `.app-container`** — never nested inside wrappers that use CSS `transform` or `scale`. Transforms create a new containing block that breaks `position: fixed`, which these components rely on for their expand-from-card animations. If you add a new wrapper div in `App.jsx`, keep overlays outside of it.

## UX & Interaction Rules
- No loading spinners — use skeleton screens or gentle fade-ins
- Error states should feel soft, not alarming (no red alerts)
- Empty states always have helpful guidance
- All interactive elements need visible focus states for accessibility
- Use optimistic UI updates where possible