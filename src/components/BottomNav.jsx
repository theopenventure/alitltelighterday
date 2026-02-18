import './BottomNav.css'

export default function BottomNav() {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <div className="nav-left">
        <button className="nav-item" aria-label="Home">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>
        <button className="nav-item" aria-label="Favourites">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="nav-right">
        <button className="nav-avatar" aria-label="Profile">VM</button>
      </div>
    </nav>
  )
}
