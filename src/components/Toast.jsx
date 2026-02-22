import { useState, useEffect, useRef } from 'react'
import './Toast.css'

const DISPLAY_DURATION = 2800
const UNDO_DISPLAY_DURATION = 3000
const EXIT_DURATION = 350
const CROSSFADE_DURATION = 200

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

export default function Toast({ message, visible, onDone, onUndo, variant }) {
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [displayMsg, setDisplayMsg] = useState(message)
  const [displayUndo, setDisplayUndo] = useState(!!onUndo)
  const timerRef = useRef(null)
  const exitRef = useRef(null)
  const crossfadeRef = useRef(null)
  const onDoneRef = useRef(onDone)
  const onUndoRef = useRef(onUndo)

  // Keep refs in sync
  onDoneRef.current = onDone
  onUndoRef.current = onUndo

  const duration = onUndo ? UNDO_DISPLAY_DURATION : DISPLAY_DURATION

  useEffect(() => {
    if (visible && message) {
      // Clear any pending crossfade/timers
      clearTimeout(crossfadeRef.current)
      clearTimeout(timerRef.current)
      clearTimeout(exitRef.current)

      if (show && message !== displayMsg) {
        // Already showing a different message — crossfade
        setShow(false)
        crossfadeRef.current = setTimeout(() => {
          setDisplayMsg(message)
          setDisplayUndo(!!onUndo)
          setShow(true)

          // Restart auto-dismiss timer
          timerRef.current = setTimeout(() => {
            setExiting(true)
            setShow(false)

            exitRef.current = setTimeout(() => {
              setExiting(false)
              onDoneRef.current?.()
            }, EXIT_DURATION)
          }, duration)
        }, CROSSFADE_DURATION)
      } else {
        // Fresh toast or same message — normal enter
        setExiting(false)
        setShow(false)
        setDisplayMsg(message)
        setDisplayUndo(!!onUndo)

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
            onDoneRef.current?.()
          }, EXIT_DURATION)
        }, duration)

        return () => {
          cancelAnimationFrame(enterRaf)
          clearTimeout(timerRef.current)
          clearTimeout(exitRef.current)
        }
      }
    }

    if (!visible) {
      clearTimeout(crossfadeRef.current)
      clearTimeout(timerRef.current)
      clearTimeout(exitRef.current)
      setShow(false)
      setExiting(false)
    }
  }, [visible, message, duration])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(crossfadeRef.current)
      clearTimeout(timerRef.current)
      clearTimeout(exitRef.current)
    }
  }, [])

  const handleUndo = () => {
    // Clear auto-dismiss timer
    clearTimeout(timerRef.current)
    clearTimeout(exitRef.current)
    clearTimeout(crossfadeRef.current)

    // Animate out
    setExiting(true)
    setShow(false)

    setTimeout(() => {
      setExiting(false)
      onUndoRef.current?.()
    }, EXIT_DURATION)
  }

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
        <span className="toast-text">{displayMsg}</span>
        {displayUndo && (
          <button className="toast-undo" onClick={handleUndo}>
            Undo
          </button>
        )}
      </div>
    </div>
  )
}
