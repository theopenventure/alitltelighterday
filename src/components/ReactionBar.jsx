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
          <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.9" strokeLinejoin="round" aria-hidden="true" style={{ transform: 'scale(-1, -1)' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3 21.7 7.4 21.7C5.4 21.7 3.9 19.4 4.4 17.5L7.5 7.2C8.1 5.5 9.7 4.3 11.4 4.3L21.5 4.3C23.2 4.3 24.5 5.6 24.5 7.35V19.4C24.5 20.6 24 21.8 23.2 22.7L17.3 29.3C16.8 29.9 15.8 30.3 14.9 30.3C12.6 30.3 11 28.1 11.7 26.1L13.3 21.7Z" />
          </svg>
        </button>
        <button
          className={`reaction-circle ${chosen === 'down' ? 'chosen' : ''} ${chosen && chosen !== 'down' ? 'faded' : ''}`}
          onClick={() => handleReact('down')}
          aria-label="Thumbs down"
        >
          <svg viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.9" strokeLinejoin="round" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3 21.7 7.4 21.7C5.4 21.7 3.9 19.4 4.4 17.5L7.5 7.2C8.1 5.5 9.7 4.3 11.4 4.3L21.5 4.3C23.2 4.3 24.5 5.6 24.5 7.35V19.4C24.5 20.6 24 21.8 23.2 22.7L17.3 29.3C16.8 29.9 15.8 30.3 14.9 30.3C12.6 30.3 11 28.1 11.7 26.1L13.3 21.7Z" />
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
