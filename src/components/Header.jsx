import { forwardRef } from 'react'
import './Header.css'

const Header = forwardRef(function Header({ label = 'Today', onShuffle }, ref) {
  return (
    <header className="header-float" ref={ref}>
      <div className="header-float-inner">
        <div className="header-date-label">{label}</div>
        {onShuffle && (
          <button className="shuffle-btn" onClick={onShuffle} aria-label="Shuffle prompts">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 3 21 3 21 8" />
              <line x1="4" y1="20" x2="21" y2="3" />
              <polyline points="21 16 21 21 16 21" />
              <line x1="15" y1="15" x2="21" y2="21" />
              <line x1="4" y1="4" x2="9" y2="9" />
            </svg>
          </button>
        )}
      </div>
    </header>
  )
})

export default Header
