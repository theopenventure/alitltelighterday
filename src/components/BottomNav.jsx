import './BottomNav.css'

const TABS = [
  {
    id: 'home',
    label: 'Home',
    icon: () => (
      <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21.6563 20.2125H12.9938" />
        <path d="M21.6563 14.4375H12.9938" />
        <path d="M30.3188 10.1063V24.5438C30.3188 27.72 27.72 30.3188 24.5438 30.3188H10.1063C6.93 30.3188 4.3313 27.72 4.3313 24.5438V10.1063C4.3313 6.93 6.93 4.3313 10.1063 4.3313H24.5438C27.72 4.3313 30.3188 6.93 30.3188 10.1063Z" />
      </svg>
    ),
  },
  {
    id: 'archived',
    label: 'Collections',
    icon: () => (
      <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.6563 4.33125C24.8325 4.33125 27.4313 6.93 27.4313 10.1063V28.7307C27.4313 30.1744 25.8432 30.8963 24.8325 29.7413L17.325 21.6563L9.8175 29.7413C8.8069 30.8963 7.2188 30.1744 7.2188 28.7307V10.1063C7.2188 6.93 9.8175 4.33125 12.9938 4.33125H21.6563Z" />
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
