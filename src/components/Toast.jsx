import { useReducer, useEffect, useRef } from 'react'
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

// Toast state machine. Phases correspond to what the CSS expects:
//   idle     → nothing rendered
//   entering → pill rendered but without .visible class (pre-animation frame)
//   visible  → pill rendered with .visible class (fully shown)
//   exiting  → pill rendered with .exiting class (fading out)
//
// A reducer lets every animation step be one atomic transition, so we can
// never briefly land in a half-updated state like "exiting=true + show=true"
// that the old multi-useState version could expose between two setState calls.
const initialState = { phase: 'idle', displayMsg: null, displayUndo: false }

function toastReducer(state, action) {
  switch (action.type) {
    case 'PREPARE':
      return { phase: 'entering', displayMsg: action.message, displayUndo: action.hasUndo }
    case 'SHOW':
      return { ...state, phase: 'visible' }
    case 'EXIT':
      return { ...state, phase: 'exiting' }
    case 'HIDE':
      return initialState
    case 'CROSSFADE_OUT':
      // Old pill fades out by dropping back to 'entering' (no .visible class)
      return { ...state, phase: 'entering' }
    case 'CROSSFADE_IN':
      return { phase: 'visible', displayMsg: action.message, displayUndo: action.hasUndo }
    default:
      return state
  }
}

export default function Toast({ message, visible, onDone, onUndo, variant }) {
  const [state, dispatch] = useReducer(toastReducer, initialState)
  const { phase, displayMsg, displayUndo } = state
  const timerRef = useRef(null)
  const exitRef = useRef(null)
  const crossfadeRef = useRef(null)
  const onDoneRef = useRef(onDone)
  const onUndoRef = useRef(onUndo)

  // Keep callback refs fresh so timers always call the latest handler
  onDoneRef.current = onDone
  onUndoRef.current = onUndo

  const duration = onUndo ? UNDO_DISPLAY_DURATION : DISPLAY_DURATION

  useEffect(() => {
    const clearAllTimers = () => {
      clearTimeout(crossfadeRef.current)
      clearTimeout(timerRef.current)
      clearTimeout(exitRef.current)
    }

    if (visible && message) {
      clearAllTimers()

      const startAutoDismiss = () => {
        timerRef.current = setTimeout(() => {
          dispatch({ type: 'EXIT' })
          exitRef.current = setTimeout(() => {
            dispatch({ type: 'HIDE' })
            onDoneRef.current?.()
          }, EXIT_DURATION)
        }, duration)
      }

      // If we're already fully shown and a new message comes in, crossfade.
      // We read displayMsg via ref-free closure since the reducer always
      // returns a fresh state on the next render — this branch only runs
      // on effect re-entry triggered by the visible/message prop change.
      if (phase === 'visible' && message !== displayMsg) {
        dispatch({ type: 'CROSSFADE_OUT' })
        crossfadeRef.current = setTimeout(() => {
          dispatch({ type: 'CROSSFADE_IN', message, hasUndo: !!onUndo })
          startAutoDismiss()
        }, CROSSFADE_DURATION)
        return clearAllTimers
      }

      // Fresh enter: prepare pill in 'entering' phase, then double-RAF to
      // 'visible' so the CSS transition has two distinct frames to animate
      // between (pre-visible → visible).
      dispatch({ type: 'PREPARE', message, hasUndo: !!onUndo })
      const enterRaf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          dispatch({ type: 'SHOW' })
        })
      })
      startAutoDismiss()

      return () => {
        cancelAnimationFrame(enterRaf)
        clearAllTimers()
      }
    }

    if (!visible) {
      clearAllTimers()
      dispatch({ type: 'HIDE' })
    }
    // `phase` and `displayMsg` are read for the crossfade branch but MUST NOT
    // be in deps — including them would re-run the effect on every dispatch
    // and cancel our own timers mid-animation. The effect should only react
    // to external prop changes (visible/message/duration).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, message, duration])

  // Unmount cleanup
  useEffect(() => {
    return () => {
      clearTimeout(crossfadeRef.current)
      clearTimeout(timerRef.current)
      clearTimeout(exitRef.current)
    }
  }, [])

  const handleUndo = () => {
    clearTimeout(timerRef.current)
    clearTimeout(exitRef.current)
    clearTimeout(crossfadeRef.current)
    dispatch({ type: 'EXIT' })
    setTimeout(() => {
      dispatch({ type: 'HIDE' })
      onUndoRef.current?.()
    }, EXIT_DURATION)
  }

  if (phase === 'idle') return null

  const show = phase === 'visible'
  const exiting = phase === 'exiting'

  return (
    <div className="toast" role="status" aria-live="polite">
      <div
        className={`toast-pill ${show ? 'visible' : ''} ${exiting ? 'exiting' : ''}`}
        style={variant ? { '--toast-bg': TOAST_BG[variant], '--toast-fg': TOAST_FG[variant] } : undefined}
      >
        <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6.6 12.1 10 15.6 17.7 8" />
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
