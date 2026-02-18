import './BottomNav.css'

export default function BottomNav() {
  return (
    <nav className="nav-bar" aria-label="Main navigation">

      {/* Home — active */}
      <button className="nav-item nav-item--active" aria-label="Home" aria-current="page">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span className="nav-dot" aria-hidden="true" />
      </button>

      {/* Cards */}
      <button className="nav-item" aria-label="Cards">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      </button>

      {/* Saved */}
      <button className="nav-item" aria-label="Saved">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17 3H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2z" />
        </svg>
      </button>

      {/* Profile */}
      <button className="nav-avatar" aria-label="Profile">VM</button>

    </nav>
  )
}
