import { useState, useEffect, useRef } from 'react'
import './UndoToast.css'

const DISPLAY_DURATION = 3000
const EXIT_DURATION = 350

export default function UndoToast({ message, visible, onUndo, onDone }) {
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

  const handleUndo = () => {
    // Clear auto-dismiss timer
    clearTimeout(timerRef.current)
    clearTimeout(exitRef.current)

    // Animate out
    setExiting(true)
    setShow(false)

    setTimeout(() => {
      setExiting(false)
      onUndo?.()
    }, EXIT_DURATION)
  }

  if (!visible && !exiting) return null

  return (
    <div className="undo-toast" role="status" aria-live="polite">
      <div className={`undo-toast-pill ${show ? 'visible' : ''} ${exiting ? 'exiting' : ''}`}>
        <span className="undo-toast-text">{message}</span>
        <button className="undo-toast-action" onClick={handleUndo}>
          Undo
        </button>
      </div>
    </div>
  )
}
