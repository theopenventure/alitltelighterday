import './BottomNav.css'

const TABS = [
  {
    id: 'home',
    label: 'Home',
    icon: () => (
      <svg viewBox="0 0 21.48 20" fill="currentColor" aria-hidden="true">
        <path d="M16.15 0C19.01 0 21.48 2.17 21.48 5v10c0 2.83-2.47 5-5.33 5H5.33C2.47 20 0 17.83 0 15V5c0-2.83 2.47-5 5.33-5h10.82ZM5.33 2C3.42 2 2 3.43 2 5v10c0 1.57 1.42 3 3.33 3h10.82c1.9 0 3.33-1.43 3.33-3V5c0-1.57-1.42-3-3.33-3H5.33Zm9.93 9a1 1 0 0 1 0 2H6.22a1 1 0 0 1 0-2h9.04Zm0-4a1 1 0 0 1 0 2H6.22a1 1 0 0 1 0-2h9.04Z" />
      </svg>
    ),
  },
  {
    id: 'favourites',
    label: 'Favourites',
    icon: () => (
      <svg viewBox="0 0 23.32 20.17" fill="currentColor" aria-hidden="true">
        <path d="M6.32 0c1.44 0 3.02.49 4.26 1.61l.25.23.02.03.84.9.93-.93c2.33-2.33 6.23-2.4 8.67-.38l.23.22.02.02c2.37 2.51 2.4 6.46.02 8.88l-9.15 9.15a1 1 0 0 1-1.41 0L1.81 10.74c-2.41-2.41-2.41-6.49 0-8.9C3.08.56 4.65 0 6.32 0Zm0 2c-1.18 0-2.23.39-3.1 1.25-1.63 1.63-1.63 4.44 0 6.07l8.44 8.44 8.44-8.44c1.61-1.61 1.65-4.31 0-6.08-1.63-1.62-4.44-1.62-6.07 0l-1.66 1.66a.99.99 0 0 1-.73.3 1 1 0 0 1-.71-.32l-1.54-1.65A4.29 4.29 0 0 0 6.32 2Z" />
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
