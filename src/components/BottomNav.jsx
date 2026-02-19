import './BottomNav.css'

const TABS = [
  {
    id: 'home',
    label: 'Home',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h5v-6h4v6h5V10" />
      </svg>
    ),
  },
  {
    id: 'favourites',
    label: 'Favourites',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

export default function BottomNav({ activeTab = 'home', onTabChange }) {
  const activeIndex = TABS.findIndex((t) => t.id === activeTab)

  return (
    <nav className="nav-bar" aria-label="Main navigation">
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
}
