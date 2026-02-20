import { useState } from 'react'
import './ReactionBar.css'

export default function ReactionBar({ visible, onReact }) {
  const [chosen, setChosen] = useState(null)

  const handleReact = (type) => {
    if (chosen) return
    setChosen(type)
    onReact(type)
  }

  return (
    <div className={`reaction-bar ${visible ? 'visible' : ''}`}>
      <div className="reaction-buttons">
        <button
          className={`reaction-circle ${chosen === 'love' ? 'chosen' : ''} ${chosen && chosen !== 'love' ? 'faded' : ''}`}
          onClick={() => handleReact('love')}
          aria-label="Love it"
        >
          <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinejoin="round" aria-hidden="true" style={{ transform: 'scaleY(-1)' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2862 21.6563L7.3906 21.6563C5.3803 21.6563 3.9061 19.425 4.4422 17.4563L7.5246 7.2188C8.0607 5.5125 9.6689 4.3313 11.4111 4.3313L21.4613 4.3313C23.2035 4.3313 24.5437 5.6438 24.5437 7.35V19.425C24.5437 20.6063 24.0077 21.7875 23.2035 22.7063L17.3068 29.2688C16.7707 29.925 15.8326 30.3188 14.8944 30.3188C12.6161 30.3188 11.0079 28.0875 11.678 26.1188L13.2862 21.6563Z" />
            <rect x="30.3187" y="21.6563" width="0.00144375" height="17.325" rx="0.000721876" transform="rotate(-180 30.3187 21.6563)" />
          </svg>
        </button>
        <button
          className={`reaction-circle ${chosen === 'done' ? 'chosen' : ''} ${chosen && chosen !== 'done' ? 'faded' : ''}`}
          onClick={() => handleReact('done')}
          aria-label="Done"
        >
          <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="3.60938" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22.5224 11.55L10.4382 24.5438L4.3312 18.0469" />
            <path d="M30.3185 11.55L18.2343 24.5438L12.1273 18.0469" />
          </svg>
        </button>
      </div>
    </div>
  )
}
