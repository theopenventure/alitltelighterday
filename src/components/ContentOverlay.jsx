import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import ReactionBar from './ReactionBar'
import Toast from './Toast'
import { flattenSegments, renderSegment, findFirstTextIndex } from '../lib/segments'
import { getRandomThinkingCopy } from '../data/thinkingCopyPool'
import { VARIANT_BG, VARIANT_TEXT } from '../data/variants'
import './ContentOverlay.css'

// Animation timing constants (ms)
const SHEET_FADE_IN_DELAY = 250
const THINKING_SHOW_DELAY = 2550
const TITLE_REVEAL_DELAY = 300
const STREAM_START_DELAY = 800
const SEGMENT_STREAM_INTERVAL = 400
const REACTION_BAR_DELAY = 500
const CONTRACT_DELAY = 100
const EXIT_ANIMATION_DURATION = 500

// ── Thinking indicator ──
function ThinkingIndicator({ visible, label }) {
  return (
    <div className={`thinking ${visible ? 'visible' : ''}`}>
      <div className="thinking-content">
        <div className="thinking-dots">
          <span /><span /><span />
        </div>
        <div className="thinking-label">{label || 'Thinking...'}</div>
      </div>
      <div className="thinking-skeleton">
        <div className="skeleton-line skeleton-line--wide" />
        <div className="skeleton-line skeleton-line--medium" />
        <div className="skeleton-line skeleton-line--narrow" />
      </div>
    </div>
  )
}

// ── Error state ──
function ErrorState({ message, onClose }) {
  return (
    <div className="content-error">
      <div className="content-error-emoji">hmm</div>
      <p className="content-error-text">
        {message || "Something went wrong generating this boost."}
      </p>
      <button className="content-error-btn" onClick={onClose}>
        Go back
      </button>
    </div>
  )
}

// ── Main Component ──

export default function ContentOverlay({
  card,        // { category, variant, prompt }
  content,     // null while loading, then { title, segments }
  loading,     // boolean
  error,       // string or null
  sourceRect,
  isClosing,
  onClose,
  onExited,
  onReact,
  onSave,
}) {
  // Phases: 'expanding' → 'thinking' → 'ready' → 'streaming' → 'collapsing'
  const [phase, setPhase] = useState('expanding')
  const [expanded, setExpanded] = useState(false)
  const [visibleSegments, setVisibleSegments] = useState(0)
  const [reactionBarVisible, setReactionBarVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [saved, setSaved] = useState(false)
  const [toastMsg, setToastMsg] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)
  const intervalRef = useRef(null)
  const savedRectRef = useRef(sourceRect)

  const handleSaveToggle = useCallback(() => {
    const next = !saved
    setSaved(next)
    onSave?.()
    setToastMsg(next ? 'Saved to your collection' : 'Removed from your collection')
    setToastVisible(true)
  }, [saved, onSave])

  const handleToastDone = useCallback(() => {
    setToastVisible(false)
  }, [])

  const variant = card.variant || 'gray'
  const bgColor = VARIANT_BG[variant] || VARIANT_BG.gray

  const flatSegments = useMemo(() => {
    return content ? flattenSegments(content.segments) : []
  }, [content])

  const firstTextIdx = useMemo(() => findFirstTextIndex(flatSegments), [flatSegments])

  // Random loading copy — picked once per card open
  const [thinkingLabel] = useState(() => getRandomThinkingCopy())

  // ── OPENING: Expansion → prompt bubble → 2s pause → thinking indicator ──
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setExpanded(true)
      })
    })

    // Sheet fades in at 250ms — prompt bubble starts animating (CSS 0.3s delay)
    const contentTimer = setTimeout(() => {
      setContentVisible(true)
    }, SHEET_FADE_IN_DELAY)

    // Thinking indicator shows after prompt bubble has settled
    const thinkingTimer = setTimeout(() => {
      setPhase('thinking')
    }, THINKING_SHOW_DELAY)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(contentTimer)
      clearTimeout(thinkingTimer)
    }
  }, [])

  // ── When AI content arrives, start streaming ──
  useEffect(() => {
    if (!content || phase === 'collapsing') return

    // Brief pause to let thinking dissolve, then show title
    const titleTimer = setTimeout(() => {
      setPhase('ready')
    }, TITLE_REVEAL_DELAY)

    // Then stream segments
    const streamTimer = setTimeout(() => {
      setPhase('streaming')
      const total = flatSegments.length
      let count = 0
      intervalRef.current = setInterval(() => {
        count++
        setVisibleSegments(count)
        if (count >= total) {
          clearInterval(intervalRef.current)
          setTimeout(() => setReactionBarVisible(true), REACTION_BAR_DELAY)
        }
      }, SEGMENT_STREAM_INTERVAL)
    }, STREAM_START_DELAY)

    return () => {
      clearTimeout(titleTimer)
      clearTimeout(streamTimer)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [content, flatSegments])

  // ── CLOSING: Collapse back to card ──
  useEffect(() => {
    if (!isClosing) return

    setPhase('collapsing')
    setContentVisible(false)

    const contractTimer = setTimeout(() => {
      setExpanded(false)
    }, CONTRACT_DELAY)

    const exitTimer = setTimeout(() => {
      onExited()
    }, EXIT_ANIMATION_DURATION)

    return () => {
      clearTimeout(contractTimer)
      clearTimeout(exitTimer)
    }
  }, [isClosing, onExited])

  // Compute expansion layer style
  const rect = savedRectRef.current

  let expansionStyle
  if (!expanded && rect) {
    expansionStyle = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      borderRadius: 32,
      background: bgColor
    }
  } else {
    expansionStyle = {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 0,
      background: bgColor
    }
  }

  const isThinking = loading || (phase === 'thinking' && !content)
  const hasContent = content && (phase === 'ready' || phase === 'streaming')

  return (
    <div className="content-overlay">
      <div
        className={`expansion-layer ${expanded ? 'expanded' : ''}`}
        style={expansionStyle}
      />

      <div
        className={`content-sheet content-sheet--${variant} ${contentVisible ? 'visible' : ''}`}
        style={{ '--sheet-bg': bgColor, '--variant-text': VARIANT_TEXT[variant] || VARIANT_TEXT.gray }}
      >

        {/* Sticky header */}
        <div className="content-header">
          <button className={`content-save ${reactionBarVisible ? 'content-save--visible' : ''} ${saved ? 'content-save--active' : ''}`} onClick={handleSaveToggle} aria-label={saved ? 'Unsave' : 'Save'}>
            <svg width="31" height="31" viewBox="0 0 34.65 34.65" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.6563 4.33125C24.8325 4.33125 27.4313 6.93 27.4313 10.1063V28.7307C27.4313 30.1744 25.8432 30.8963 24.8325 29.7413L17.325 21.6563L9.8175 29.7413C8.8069 30.8963 7.2188 30.1744 7.2188 28.7307V10.1063C7.2188 6.93 9.8175 4.33125 12.9938 4.33125H21.6563Z" />
            </svg>
          </button>
          <div className="content-header-spacer" />
          <button className="content-close" onClick={onClose} aria-label="Close">
            <svg width="31" height="31" viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M30.3189 30.3188L20.2126 20.2125" />
              <path d="M20.2126 26.9982V20.2125H26.9983" />
              <path d="M4.3314 4.3313L14.4376 14.4375" />
              <path d="M14.4377 7.6519V14.4375H7.6521" />
            </svg>
          </button>
        </div>

        {/* Prompt bubble */}
        <div className="content-prompt">
          {card.prompt}
        </div>

        {/* Body: thinking + response share the same space */}
        <div className="content-body">
          {/* Thinking indicator — shows while API is loading */}
          <ThinkingIndicator visible={isThinking} label={thinkingLabel} />

          {/* Error state */}
          {error && !loading && (
            <ErrorState message={error} onClose={onClose} />
          )}

          {/* AI response */}
          <div className={`content-response ${hasContent ? 'visible' : ''}`}>

            <h2 className={`content-title ${hasContent ? 'visible' : ''}`}>
              {content?.title}
            </h2>

            <div className="content-segments">
              {flatSegments.map((seg, i) => (
                <div
                  key={i}
                  className="seg-wrapper"
                  style={{
                    opacity: i < visibleSegments ? 1 : 0,
                    transform: i < visibleSegments ? 'translateY(0)' : 'translateY(14px)',
                    transition: `opacity 0.5s ease, transform 0.6s cubic-bezier(0.34, 1.3, 0.64, 1)`
                  }}
                >
                  {renderSegment(seg, i, firstTextIdx)}
                </div>
              ))}
            </div>
          </div>

          <ReactionBar visible={reactionBarVisible} onReact={onReact} />
        </div>
      </div>

      <Toast message={toastMsg} visible={toastVisible} onDone={handleToastDone} />
    </div>
  )
}
