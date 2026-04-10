import { forwardRef } from 'react'
import './BottomNav.css'

const TABS = [
  {
    id: 'home',
    label: 'Home',
    // Rescaled from 34.65 → 24 grid and rounded to 1-decimal precision.
    // All coordinates were exact multiples of 1.44375; the old values were
    // just bytes of noise from the original SVG export.
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 14H9" />
        <path d="M15 10H9" />
        <path d="M21 7v10c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4Z" />
      </svg>
    ),
  },
  {
    id: 'archived',
    label: 'Collections',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M15 3c2.2 0 4 1.8 4 4v12.9c0 1-1.1 1.5-1.8.8L12 15l-5.2 5.7c-.7.7-1.8.2-1.8-.8V7c0-2.2 1.8-4 4-4h6Z" />
      </svg>
    ),
  },
]

const BottomNav = forwardRef(function BottomNav({ activeTab = 'home', onTabChange, onPreloadTab }, ref) {
  const activeIndex = TABS.findIndex((t) => t.id === activeTab)

  // Fire preload on pointer-enter or keyboard focus — the user is signalling
  // intent, so we can warm the lazy chunk before they actually click.
  const handlePreload = (tabId) => {
    if (tabId === activeTab) return  // Already mounted, nothing to preload
    onPreloadTab?.(tabId)
  }

  return (
    <nav className="nav-bar" ref={ref} aria-label="Main navigation">
      <div className="nav-group">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              className={`nav-item ${isActive ? 'nav-item--active' : ''}`}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onTabChange?.(tab.id)}
              onPointerEnter={() => handlePreload(tab.id)}
              onFocus={() => handlePreload(tab.id)}
            >
              {tab.icon()}
            </button>
          )
        })}

        <span
          className="nav-sliding-dot"
          aria-hidden="true"
          style={{ '--dot-index': activeIndex }}
        />
      </div>
    </nav>
  )
})

export default BottomNav
