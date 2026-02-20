import { useState, useEffect, useCallback } from 'react'
import './ReactionBar.css'

const REACTION_MESSAGES = {
  up: 'Glad you liked it — noted for next time',
  down: 'Got it, we\'ll refine your experience',
}

export default function ReactionBar({ visible, onReact }) {
  const [chosen, setChosen] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [thumbsHidden, setThumbsHidden] = useState(false)

  const handleReact = useCallback((type) => {
    if (chosen) return
    setChosen(type)
    onReact(type)
  }, [chosen, onReact])

  // After a thumb is chosen: fade out thumbs → show inline toast
  useEffect(() => {
    if (!chosen) return

    // Wait for the chosen/faded animation to settle, then hide thumbs and show toast
    const hideTimer = setTimeout(() => {
      setThumbsHidden(true)
      setShowToast(true)
    }, 600)

    return () => clearTimeout(hideTimer)
  }, [chosen])

  // Animate toast in after it mounts
  useEffect(() => {
    if (!showToast) return

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setToastVisible(true)
      })
    })

    return () => cancelAnimationFrame(raf)
  }, [showToast])

  return (
    <div className={`reaction-bar ${visible ? 'visible' : ''}`}>
      {/* Thumb buttons — hidden after toast replaces them */}
      <div className={`reaction-buttons ${thumbsHidden ? 'hidden' : ''}`}>
        <button
          className={`reaction-circle ${chosen === 'up' ? 'chosen' : ''} ${chosen && chosen !== 'up' ? 'faded' : ''}`}
          onClick={() => handleReact('up')}
          aria-label="Thumbs up"
        >
          <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinejoin="round" aria-hidden="true" style={{ transform: 'scale(-1, -1)' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2862 21.6563L7.3906 21.6563C5.3803 21.6563 3.9061 19.425 4.4422 17.4563L7.5246 7.2188C8.0607 5.5125 9.6689 4.3313 11.4111 4.3313L21.4613 4.3313C23.2035 4.3313 24.5437 5.6438 24.5437 7.35V19.425C24.5437 20.6063 24.0077 21.7875 23.2035 22.7063L17.3068 29.2688C16.7707 29.925 15.8326 30.3188 14.8944 30.3188C12.6161 30.3188 11.0079 28.0875 11.678 26.1188L13.2862 21.6563Z" />
            <rect x="30.3187" y="21.6563" width="0.00144375" height="17.325" rx="0.000721876" transform="rotate(-180 30.3187 21.6563)" />
          </svg>
        </button>
        <button
          className={`reaction-circle ${chosen === 'down' ? 'chosen' : ''} ${chosen && chosen !== 'down' ? 'faded' : ''}`}
          onClick={() => handleReact('down')}
          aria-label="Thumbs down"
        >
          <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinejoin="round" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2862 21.6563L7.3906 21.6563C5.3803 21.6563 3.9061 19.425 4.4422 17.4563L7.5246 7.2188C8.0607 5.5125 9.6689 4.3313 11.4111 4.3313L21.4613 4.3313C23.2035 4.3313 24.5437 5.6438 24.5437 7.35V19.425C24.5437 20.6063 24.0077 21.7875 23.2035 22.7063L17.3068 29.2688C16.7707 29.925 15.8326 30.3188 14.8944 30.3188C12.6161 30.3188 11.0079 28.0875 11.678 26.1188L13.2862 21.6563Z" />
            <rect x="30.3187" y="21.6563" width="0.00144375" height="17.325" rx="0.000721876" transform="rotate(-180 30.3187 21.6563)" />
          </svg>
        </button>
      </div>

      {/* Inline feedback toast — replaces thumbs */}
      {showToast && (
        <div className={`reaction-toast ${toastVisible ? 'visible' : ''}`} role="status" aria-live="polite">
          <span className="reaction-toast-text">{REACTION_MESSAGES[chosen]}</span>
        </div>
      )}
    </div>
  )
}
