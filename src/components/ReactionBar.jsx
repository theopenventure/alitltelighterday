import { useState } from 'react'
import './ReactionBar.css'

const reactions = [
  { type: 'love', emoji: '💛', label: 'Loved it' },
  { type: 'meh', emoji: '😐', label: 'Meh' },
  { type: 'skip', emoji: '⏭️', label: 'Skip' }
]

export default function ReactionBar({ visible, onReact }) {
  const [chosen, setChosen] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleReact = (type) => {
    if (chosen) return
    setChosen(type)
    setTimeout(() => setShowConfirmation(true), 300)
    onReact(type)
  }

  return (
    <div className={`reaction-bar ${visible ? 'visible' : ''}`}>
      <div className="reaction-buttons">
        {reactions.map((r) => (
          <button
            key={r.type}
            className={`reaction-btn ${chosen === r.type ? 'chosen' : ''} ${chosen && chosen !== r.type ? 'faded' : ''}`}
            onClick={() => handleReact(r.type)}
            aria-label={`React: ${r.label}`}
          >
            <span className="reaction-emoji" aria-hidden="true">{r.emoji}</span>
            <span className="reaction-label">{r.label}</span>
          </button>
        ))}
      </div>
      <div className={`reaction-confirmation ${showConfirmation ? 'show' : ''}`}>
        Noted — this helps your boosts get better
      </div>
    </div>
  )
}
