# Codebase Audit Report

**Project:** alitltelighterday (Boost My Day)
**Date:** 2026-02-21
**Auditor:** Claude Code
**Scope:** Every file and directory in the project

---

## 1. Dead Code & Unused Files

### 1.1 Unused CSS Custom Properties

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 1 | `src/index.css:5` | `--bg-card-gray: #F4F4F4` is defined but never referenced anywhere | Warning | Remove unused variable |
| 2 | `src/index.css:6` | `--bg-card-beige: #FCEBC4` is defined but never referenced anywhere | Warning | Remove unused variable |
| 3 | `src/index.css:7` | `--bg-card-sage: #D6E2C6` is defined but never referenced anywhere | Warning | Remove unused variable |
| 4 | `src/index.css:10` | `--surface-white: #FFFFFF` is defined but never referenced anywhere | Warning | Remove unused variable |
| 5 | `src/index.css:22` | `--space-card: 32px` is defined but never referenced anywhere | Warning | Remove unused variable |
| 6 | `src/index.css:25` | `--ease-elastic` is defined but never referenced with `var(--ease-elastic)` anywhere; the same cubic-bezier is hardcoded inline instead | Warning | Remove variable or refactor inline usages to use it |

### 1.2 Unused Font Weight Import

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 7 | `index.html:10` | Manrope `wght@300` (light) is loaded from Google Fonts but the weight `300` is never used in any CSS file | Suggestion | Remove `300` from the font URL to reduce payload |

### 1.3 Placeholder Favicon

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 8 | `public/vite.svg` + `index.html:5` | Default Vite favicon is still in use. Should be a project-specific icon | Suggestion | Replace with an app-branded favicon |

### 1.4 Boilerplate README

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 9 | `README.md` | Still contains the default Vite + React template README, not project-specific documentation | Suggestion | Replace with project-specific README |

### 1.5 Scaffold Package Name

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 10 | `package.json:2` | Package name is `"tmp-scaffold"` — leftover from initial scaffolding | Suggestion | Rename to `"alitltelighterday"` or the actual project name |

### 1.6 Unused TypeScript Types in devDependencies

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 11 | `package.json:18-19` | `@types/react` and `@types/react-dom` are installed but the project uses `.jsx` (not TypeScript). No `.ts`/`.tsx` files exist | Warning | Remove these packages to reduce install size |

---

## 2. Code Cleanliness

### 2.1 Duplicate Code

| # | File(s) | Issue | Severity | Fix |
|---|---------|-------|----------|-----|
| 12 | `src/components/ContentOverlay.jsx:9-22` + `src/components/ArchivePage.jsx:8-27` | `VARIANT_COLORS`/`VARIANT_BG`, `VARIANT_TEXT`, and `VARIANT_SUB` color maps are defined in both files with largely identical values. Slight inconsistency: ArchivePage `sage` bg is `#ECF6EB` while ContentOverlay uses `#F0F7F0` | Warning | Extract shared variant color maps into a single `src/data/variants.js` module |
| 13 | `src/components/ArchivePage.jsx:114-119` | `SHEET_BG` is a third near-duplicate of the same variant-to-color mapping, defined just 90 lines below `VARIANT_BG` in the same file | Warning | Consolidate with `VARIANT_BG` or the shared module |
| 14 | `src/components/ArchivePage.css:247-250` + `src/components/ContentOverlay.css:58-61` | Identical variant gradient background rules duplicated across two CSS files (`.content-sheet--warm`, `--gray`, `--beige`, `--sage`) | Warning | Move shared variant gradient rules to a common CSS file or `index.css` |
| 15 | `src/components/ArchivePage.css:9-23` + `src/components/HeroScreen.css:2-16` | `.archive-hero` is a near-copy of `.hero-screen` (same sticky, 80vh, flexbox center pattern) | Suggestion | Extract a shared `.hero-zone` base class |
| 16 | `src/components/ArchivePage.css:32-61` + `src/components/HeroScreen.css:66-95` | `.archive-hero-content`, `.archive-hero-headline`, `.archive-hero-subhead` are copies of `.hero-content`, `.hero-headline`, `.hero-subhead` with only minor differences (headline font-size 54px vs 48px) | Suggestion | Share base classes with variant modifiers |
| 17 | `src/components/ArchivePage.css:63-98` + `src/components/HeroScreen.css:25-63` | Atmosphere/blob CSS (gradient background, blob positioning, blur, animation) is duplicated across both files | Suggestion | Extract shared `.atmosphere` / `.blob` classes |
| 18 | `src/App.jsx:206-215` + `src/App.jsx:223-234` | `saveBoost(...)` call with the same payload shape is duplicated in `handleReact` and `handleSave` | Suggestion | Extract a `doSaveBoost()` helper within the component |

### 2.2 Overly Long Files

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 19 | `src/data/boostPromptPool.js` (1622 lines) | This file contains 360 prompt objects plus utility functions. While the data itself is inherently large, the utility functions (`getTimeOfDay`, `dateSeed`, `getCategoryOrder`, `getDailyBoosts`, `getRandomBoosts`) could be separated | Suggestion | Move utility functions to a separate `src/data/boostUtils.js` file |
| 20 | `src/components/ContentOverlay.css` (564 lines) | Contains styles for the overlay, thinking indicator, error state, title, all 6 segment types, and variant tinting. Could be split | Suggestion | Extract segment styles (`.seg-*`) into a shared `segments.css` |
| 21 | `src/App.jsx` (355 lines) | Main component has significant state management, scroll handling, view transitions, and rendering logic | Suggestion | Consider extracting scroll/parallax logic into a custom hook |

### 2.3 Console Statements

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 22 | `src/App.jsx:170` | `console.error('Boost generation failed:', err)` — useful for debugging but should use a proper logging utility in production | Suggestion | Wrap in a dev-only conditional or use a logger |

### 2.4 Inconsistent Naming

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 23 | `src/components/ArchivePage.jsx:8` vs `src/components/ContentOverlay.jsx:9` | Same concept named `VARIANT_BG` in ArchivePage but `VARIANT_COLORS` in ContentOverlay | Warning | Use consistent naming |
| 24 | `src/App.jsx:201` | `handleReact` callback passes `type` param with values `'up'`/`'down'` in ReactionBar, but checks for `'love'` in App — these are disconnected; `'love'` is never passed | Critical | ReactionBar sends `'up'` but App checks `type === 'love'` — saving on thumbs-up may not work as intended |

---

## 3. Best Practices

### 3.1 Security: dangerouslySetInnerHTML

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 25 | `src/components/segments.jsx:41` | Uses `dangerouslySetInnerHTML` with `sanitizeText()` — the sanitizer only allows `<strong>` tags via regex, which is reasonable but fragile | Warning | Consider using a proper sanitization library like DOMPurify, or render bold text via React nodes instead of raw HTML |
| 26 | `src/components/segments.jsx:32-34` | `sanitizeText` regex `/<(?!\/?strong\b)[^>]*>/gi` is a blocklist approach — it strips non-`<strong>` tags but may miss edge cases with malformed HTML | Warning | Allowlist approach would be safer |

### 3.2 Error Handling

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 27 | `src/App.jsx` (root) | No React Error Boundary wrapping the app. An unhandled error in any component will crash the entire app with a white screen | Critical | Add an `<ErrorBoundary>` component wrapping `<App />` in `main.jsx` |
| 28 | `src/api/generateBoost.js:14-16` | `res.json().catch(() => ({}))` silently swallows JSON parse errors — good, but the error message fallback `err.error || "API error: ${res.status}"` doesn't include the response body for debugging | Suggestion | Log the full response for debugging |
| 29 | `src/lib/savedBoosts.js:29` | `crypto.randomUUID?.()` has a fallback to `String(Date.now())`, but `Date.now()` can produce collisions if two boosts are saved in the same millisecond | Suggestion | Use a more robust fallback (e.g., `Date.now() + Math.random()`) |

### 3.3 React Hook Issues

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 30 | `src/App.jsx:175` | `handleOpenBoost` depends on `cards` but also references `cardRefMap` which contains refs that are stable — however, the `cardRefMap` object is recreated every render (line 55). It should be wrapped in `useMemo` or moved to `useRef` | Warning | Memoize `cardRefMap` with `useMemo` or `useRef` |
| 31 | `src/App.jsx:65-105` | Two `useEffect` hooks with empty `[]` dependency arrays manipulate DOM refs directly (hero parallax, scroll snap). These work but skip React's rendering model | Suggestion | Consider if a scroll-event-based approach via a custom hook would be cleaner |
| 32 | `src/components/ContentOverlay.jsx:162` | `useEffect` for streaming has `[content, flatSegments]` — `flatSegments` is derived from `content` via `useMemo`, so it changes whenever `content` changes. Including both is redundant (though harmless) | Suggestion | Remove `flatSegments` from the dependency array |
| 33 | `src/components/Toast.jsx:43` | `onDone` is in the dependency array of `useEffect` but is a callback prop that may change on every render if not memoized by the parent. This could cause the toast to re-trigger | Warning | Ensure parent memoizes `onDone` (it does via `useCallback` — verified) or use a ref for the callback |

### 3.4 DOM Manipulation Anti-patterns

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 34 | `src/components/ArchivePage.jsx:243-249` | Stores a function on a DOM element via `page.__archiveScroll = handleScroll` to allow cross-component communication. This bypasses React's data flow | Warning | Use a forwarded ref, callback ref, or context instead of attaching functions to DOM nodes |
| 35 | `src/App.jsx:77-84` | Directly manipulates `heroEl.style.opacity` and `heroEl.style.transform` via DOM refs on every scroll event, bypassing React state | Suggestion | Acceptable for performance-critical scroll handlers, but should be documented as intentional |

### 3.5 Accessibility

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 36 | `src/components/ContentOverlay.jsx:213` | The `.content-overlay` div acts as a modal but has no `role="dialog"`, no `aria-modal="true"`, and no focus trapping | Critical | Add `role="dialog"`, `aria-modal="true"`, and implement focus trapping |
| 37 | `src/components/ArchivePage.jsx:156` | `.archive-detail` overlay also functions as a modal without proper ARIA roles or focus management | Critical | Add `role="dialog"` and `aria-modal="true"` |
| 38 | `src/components/ContentOverlay.jsx:243-245` | The `.content-prompt` div has no semantic role — it's the user's question/prompt but is just a plain `<div>` | Suggestion | Consider using a `<blockquote>` or adding an `aria-label` |
| 39 | `index.html:6` | `<meta name="viewport" ... user-scalable=no>` — disabling pinch-to-zoom violates WCAG 1.4.4 (Resize Text) | Warning | Remove `user-scalable=no` to allow users to zoom |
| 40 | `src/components/ArchivePage.jsx:80-84` | Archive item `<button>` elements have no `aria-label` — screen readers will read the full inner text which may be confusing | Suggestion | Add an `aria-label` like "View saved boost: {title}" |
| 41 | `src/components/ReactionBar.jsx:56-58` | Thumbs-up SVG uses `style={{ transform: 'scale(-1, -1)' }}` to flip the icon — the `aria-label` says "Thumbs up" which is correct, but the visual flip is done via inline style on the SVG, not the button | Suggestion | Move the transform to CSS for consistency |

### 3.6 Missing `.env` / Environment Variable Validation

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 42 | `src/api/generateBoost.js:1-2` | `SUPABASE_URL` and `SUPABASE_ANON_KEY` are read from `import.meta.env` but there's no validation that they exist. If missing, the fetch URL will be `undefined/functions/v1/generate-boost` | Warning | Add runtime validation or a `.env.example` file documenting required vars |

---

## 4. Project Structure

### 4.1 File Organization

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 43 | `src/components/segments.jsx` | This file contains shared rendering utilities (not a component itself) — lives in `components/` but is a utility module | Suggestion | Move to `src/lib/segments.jsx` or `src/utils/segments.jsx` |
| 44 | `src/data/` | Contains both pure data (prompt pools, copy pools) and logic (hash functions, time-of-day helpers, random selection). The logic could be separated | Suggestion | Consider `src/data/` for data, `src/lib/` or `src/utils/` for logic |

### 4.2 No Barrel Exports

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 45 | `src/components/` | No `index.js` barrel file exists. Each component is imported by full path (e.g., `'./components/Header'`). This is fine for this project size | Suggestion | Not a problem at current scale; barrel files are optional |

### 4.3 Cross-Component DOM Coupling

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 46 | `src/App.jsx:123-131` + `src/components/ArchivePage.jsx:241-249` | App.jsx queries `.archive-page` via `querySelector` and calls `__archiveScroll` — tight DOM coupling between parent and child | Warning | Replace with React ref forwarding or context-based scroll communication |

---

## 5. Performance Concerns

### 5.1 Scroll Handler Performance

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 47 | `src/App.jsx:70-84` | Scroll handler runs on every scroll event without `requestAnimationFrame` throttling. Directly mutates `style.opacity` and `style.transform` | Suggestion | Acceptable because of `{ passive: true }` and direct DOM manipulation, but wrapping in `rAF` would be more robust |

### 5.2 Large Data File in Main Bundle

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 48 | `src/data/boostPromptPool.js` (1622 lines) | 360 prompt objects (~40KB+ of text data) are bundled into the main chunk. All prompts load even though only 4 are shown per session | Warning | Consider lazy loading or splitting prompt pools by category |

### 5.3 Font Loading

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 49 | `src/index.css:1` + `index.html:10` | Two separate font loading mechanisms: Playfair Display via CSS `@import` (render-blocking) and Manrope via `<link>` in HTML. The CSS `@import` delays rendering | Warning | Move Playfair Display to a `<link>` tag in `index.html` with `preconnect` for consistency and better performance |

### 5.4 Missing Key Stability

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 50 | `src/components/ContentOverlay.jsx:265-276` | Segment `key={i}` uses array index — acceptable here since segments don't reorder, but fragile if segments become dynamic | Suggestion | If segments gain unique IDs in the future, use those instead |

### 5.5 Repeated `new Intl.DateTimeFormat` Calls

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 51 | `src/lib/savedBoosts.js:62-63` | Creates new `Intl.DateTimeFormat` instances inside a loop for every date group, every time `getSavedBoostsByDay()` is called | Suggestion | Cache the formatters outside the function |
| 52 | `src/components/ArchivePage.jsx:39-41` | Same pattern — new `Intl.DateTimeFormat` on every `getDateLabel()` call | Suggestion | Cache formatters at module level |

### 5.6 `will-change` Overuse

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 53 | Multiple CSS files | `will-change: opacity, transform` is applied to `.hero-screen`, `.view-layer`, `.archive-hero`, `.archive-atmosphere`, `.seg-wrapper` — having many elements with `will-change` simultaneously can increase GPU memory usage | Suggestion | Only apply `will-change` to elements actively animating, or remove if browser compositor handles it well without the hint |

---

## 6. Design Consistency (UI/Styling)

### 6.1 Hardcoded Colors Not Using Design Tokens

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 54 | `src/components/Header.css:37` | `color: #888` — should use a CSS variable | Warning | Create `--text-muted` or similar token |
| 55 | `src/components/FeedFooter.css:7` | `color: #888` — same hardcoded muted color | Warning | Use shared `--text-muted` token |
| 56 | `src/components/ArchivePage.css:130` | `color: #888` — same hardcoded muted color (third occurrence) | Warning | Use shared `--text-muted` token |
| 57 | `src/components/HeroScreen.css:84` | `color: #2A2A2A` — should use `var(--text-primary)` (which is `#1A1A1A`) or the token should be updated | Warning | Use `var(--text-primary)` or update the token |
| 58 | `src/components/HeroScreen.css:92` | `color: #555555` — should use `var(--text-secondary)` (which is `#595959`) | Warning | Decide on one value and use the token |
| 59 | `src/components/ArchivePage.css:50` | `color: #2A2A2A` — same as HeroScreen, should use token | Warning | Use `var(--text-primary)` |
| 60 | `src/components/ArchivePage.css:58` | `color: #555555` — same as HeroScreen subhead | Warning | Use `var(--text-secondary)` |
| 61 | Multiple CSS files | `background: #FFFFFF` hardcoded in ~8 places (ContentOverlay, ReactionBar, Toast, ArchivePage) | Suggestion | Use `var(--surface-white)` (which exists but is never used!) |
| 62 | `src/components/ContentOverlay.jsx:9-22` | Variant colors are defined as JS constants instead of CSS variables, making them harder to theme | Suggestion | Consider defining variant colors as CSS custom properties |

### 6.2 Inconsistent Spacing

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 63 | `src/components/ContentOverlay.css:36` | `.content-sheet` uses `padding: 0 40px` but other containers use `var(--space-container)` which is `32px` | Warning | Use `var(--space-container)` consistently or define a separate `--space-content` token |
| 64 | `src/components/ArchivePage.css:234` | `.archive-detail-sheet` also uses `padding: 0 40px` — inconsistent with the `32px` container standard | Warning | Align with container spacing token |
| 65 | `src/components/HeroScreen.css:70` | `.hero-content` uses `padding: 0 40px` — same inconsistency | Suggestion | Standardize or create a `--space-content` token for the wider padding |

### 6.3 Inline Styles

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 66 | `src/components/ContentOverlay.jsx:188-207` | `expansionStyle` is computed entirely as inline styles — this is likely necessary for the dynamic card-to-fullscreen animation | Suggestion | Acceptable for dynamic animation; consider CSS custom properties if refactoring |
| 67 | `src/components/ContentOverlay.jsx:269-272` | Segment fade-in animation uses inline `style={{ opacity, transform, transition }}` on each segment wrapper | Suggestion | Consider CSS classes with CSS custom property `--delay` for staggering instead |
| 68 | `src/components/ArchivePage.jsx:88-89` | `.archive-item-square` uses `style={{ background: VARIANT_BG[variant] }}` — could use CSS classes | Suggestion | Use `.archive-item-square--warm` etc. classes matching the variant system |
| 69 | `src/components/ArchivePage.jsx:93-99` | Inline `style={{ color: VARIANT_TEXT[variant] }}` and `style={{ color: VARIANT_SUB[variant] }}` on headline/subtitle | Suggestion | Use CSS custom properties set on the parent element |

### 6.4 Font Declaration Inconsistency

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 70 | `src/components/ContentOverlay.css:314` | `.content-error-btn` uses `font-family: 'Manrope', sans-serif` hardcoded instead of `var(--font-sans)` | Warning | Use `var(--font-sans)` |
| 71 | `src/index.css:41` | `body` uses `font-family: 'Manrope', sans-serif` hardcoded instead of `var(--font-sans)` | Suggestion | Use `var(--font-sans)` for consistency |

### 6.5 Hardcoded Transition Curves

| # | File | Issue | Severity | Fix |
|---|------|-------|----------|-----|
| 72 | Multiple files | `cubic-bezier(0.34, 1.56, 0.64, 1)` appears ~15 times across CSS files — this is `--ease-elastic` which is defined but never referenced via `var()` | Warning | Replace hardcoded instances with `var(--ease-elastic)` |

---

## Summary

### Counts by Severity

| Severity | Count |
|----------|-------|
| Critical | 4 |
| Warning | 30 |
| Suggestion | 38 |
| **Total** | **72** |

### Critical Issues

1. **#24** — `handleReact` type mismatch: ReactionBar passes `'up'`/`'down'` but App.jsx checks `type === 'love'` — saving on reaction may be broken
2. **#27** — No React Error Boundary — unhandled errors will white-screen the app
3. **#36** — ContentOverlay modal lacks `role="dialog"`, `aria-modal`, and focus trapping
4. **#37** — ArchiveDetail modal lacks same accessibility attributes

---

## Top 10 Prioritized Action Items

| Priority | Issue # | Action | Why |
|----------|---------|--------|-----|
| 1 | #24 | Fix the reaction type mismatch (`'up'` vs `'love'`) — verify save-on-react behavior | **Possible broken feature** — users may think they're saving but data isn't persisted |
| 2 | #27 | Add a React Error Boundary in `main.jsx` | Prevents white-screen crashes in production |
| 3 | #36, #37 | Add `role="dialog"`, `aria-modal="true"`, and focus trapping to both overlay modals | Critical accessibility — modals must trap focus per WCAG |
| 4 | #39 | Remove `user-scalable=no` from viewport meta | WCAG compliance — users must be able to zoom |
| 5 | #42 | Add env var validation for Supabase credentials | Prevents confusing `undefined` URL errors in development |
| 6 | #49 | Move Playfair Display from CSS `@import` to `<link>` in HTML | Eliminates render-blocking font load |
| 7 | #12-14 | Consolidate duplicate variant color maps and CSS rules | Reduces inconsistency risk and bundle size |
| 8 | #1-6, #61 | Clean up unused CSS variables; use existing tokens (especially `--surface-white`, `--ease-elastic`) | Reduces dead code and improves design token adoption |
| 9 | #54-60, #70-72 | Replace hardcoded colors and curves with CSS custom properties | Design consistency and future themeability |
| 10 | #34, #46 | Replace DOM `__archiveScroll` hack with React-idiomatic ref forwarding | Eliminates fragile cross-component DOM coupling |
