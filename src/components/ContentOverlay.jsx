import { useState, useEffect, useRef, useMemo } from 'react'
import ReactionBar from './ReactionBar'
import { flattenSegments, renderSegment, findFirstTextIndex } from './segments'
import { getRandomThinkingCopy } from '../data/thinkingCopyPool'
import './ContentOverlay.css'

// Variant → background color mapping (matches BoostCard.css gradient start colors)
const VARIANT_COLORS = {
  warm: '#FFF5F2',
  gray: '#F0F5FA',
  beige: '#FFFCF5',
  sage: '#F0F7F0'
}

// Variant → text color mapping
const VARIANT_TEXT = {
  warm: '#3A2E2E',
  gray: '#1A2E3A',
  beige: '#4A4036',
  sage: '#1A2F1A',
}

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
}) {
  // Phases: 'expanding' → 'thinking' → 'ready' → 'streaming' → 'collapsing'
  const [phase, setPhase] = useState('expanding')
  const [expanded, setExpanded] = useState(false)
  const [visibleSegments, setVisibleSegments] = useState(0)
  const [reactionBarVisible, setReactionBarVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const intervalRef = useRef(null)
  const savedRectRef = useRef(sourceRect)

  const variant = card.variant || 'gray'
  const bgColor = VARIANT_COLORS[variant] || VARIANT_COLORS.gray

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
    }, 250)

    // Thinking indicator shows 2s after prompt bubble has settled (~550ms)
    const thinkingTimer = setTimeout(() => {
      setPhase('thinking')
    }, 2550)

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
    }, 300)

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
          setTimeout(() => setReactionBarVisible(true), 500)
        }
      }, 400)
    }, 800)

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
    }, 100)

    const exitTimer = setTimeout(() => {
      onExited()
    }, 500)

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
          <div className="content-header-spacer" />
          <button className="content-close" onClick={onClose} aria-label="Close">
            <svg width="31" height="31" viewBox="0 0 30.55 30.55" fill="currentColor" aria-hidden="true">
              <path d="M25.9 17.44a1 1 0 0 1 0 2h-5.04l9.39 9.4a1 1 0 0 1-1.41 1.41l-9.4-9.39v5.04a1 1 0 0 1-2 0v-7.46a1 1 0 0 1 1-1h7.46ZM.29.29a1 1 0 0 1 1.42 0l9.39 9.4V4.65a1 1 0 0 1 2 0v7.45a1 1 0 0 1-1 1H4.65a1 1 0 0 1 0-2h5.04L.29 1.71A1 1 0 0 1 .29.29Z" />
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
    </div>
  )
}
