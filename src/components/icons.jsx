// Module-level static JSX for icons used in overlays. Hoisting these out
// of component render bodies means React reuses the same element reference
// across re-renders — no reconciliation work, no allocations per render.
// The save icon is a function that takes `filled` so the shared element
// can toggle its fill state without duplicating the path.

const SAVE_ICON_PATH = (
  <path fillRule="evenodd" clipRule="evenodd" d="M15 3c2.2 0 4 1.8 4 4v12.9c0 1-1.1 1.5-1.8.8L12 15l-5.2 5.7c-.7.7-1.8.2-1.8-.8V7c0-2.2 1.8-4 4-4h6Z" />
)

export function SaveIcon({ filled, width = 31, height = 31 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {SAVE_ICON_PATH}
    </svg>
  )
}

// Close icon is fully static — hoisted as a single JSX constant.
export const CLOSE_ICON = (
  <svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 21 14 14" />
    <path d="M14 18.7V14h4.7" />
    <path d="M3 3l7 7" />
    <path d="M10 5.3V10H5.3" />
  </svg>
)
