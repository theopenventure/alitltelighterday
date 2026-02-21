import { useState, useEffect, useRef } from 'react'
import './Toast.css'

const DISPLAY_DURATION = 2800
const EXIT_DURATION = 350

const TOAST_BG = {
  warm: '#3A2E2E',
  gray: '#1A2E3A',
  beige: '#4A4036',
  sage: '#1A2F1A',
}

const TOAST_FG = {
  warm: '#FFF5F2',
  gray: '#F0F5FA',
  beige: '#FFFCF5',
  sage: '#F0F7F0',
}

export default function Toast({ message, visible, onDone, variant }) {
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)
  const timerRef = useRef(null)
  const exitRef = useRef(null)

  useEffect(() => {
    if (visible && message) {
      // Reset state for new toast
      setExiting(false)
      setShow(false)

      // Small delay to ensure DOM reflow before animating in
      const enterRaf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShow(true)
        })
      })

      // Auto-dismiss after display duration
      timerRef.current = setTimeout(() => {
        setExiting(true)
        setShow(false)

        exitRef.current = setTimeout(() => {
          setExiting(false)
          onDone?.()
        }, EXIT_DURATION)
      }, DISPLAY_DURATION)

      return () => {
        cancelAnimationFrame(enterRaf)
        clearTimeout(timerRef.current)
        clearTimeout(exitRef.current)
      }
    }
  }, [visible, message, onDone])

  if (!visible && !exiting) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <div
        className={`toast-pill ${show ? 'visible' : ''} ${exiting ? 'exiting' : ''}`}
        style={variant ? { '--toast-bg': TOAST_BG[variant], '--toast-fg': TOAST_FG[variant] } : undefined}
      >
        <svg className="toast-icon" viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9.5 17.5L14.5 22.5L25.5 11.5" />
        </svg>
        <span className="toast-text">{message}</span>
      </div>
    </div>
  )
}
