import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { flattenSegments, renderSegment, findFirstTextIndex } from './segments'
import Toast from './Toast'
import { SaveIcon, CLOSE_ICON } from './icons'
import { getDailyArchiveHeroCopy } from '../data/archiveHeroCopyPool'
import './ArchivePage.css'

// ── Variant color maps ──

const VARIANT_BG = {
  warm:  'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 52%, #FDF3F0 95%)',
  gray:  'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 52%, #EDF4FA 95%)',
  beige: 'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 55%, #FCF8F0 100%)',
  sage:  'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 37.5%, #EFF3EE 90%)',
}

const VARIANT_TEXT = {
  warm: '#3A2E2E',
  gray: '#1A2E3A',
  beige: '#4A4036',
  sage: '#1A2F1A',
}

const VARIANT_SUB = {
  warm: '#6A5555',
  gray: '#4A6070',
  beige: '#7A7066',
  sage: '#596A59',
}

// ── Date label helper ──

function getDateLabel(dateKey) {
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)

  if (dateKey === today) return 'Today'
  if (dateKey === yesterday) return 'Yesterday'

  const d = new Date(dateKey + 'T12:00:00')
  const weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d)
  const day = d.getDate()
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
  return `${weekday}, ${day} ${month}`
}

// ── Day Group ──

function DayGroup({ dateKey, items, groupIndex, onOpenItem, removingItemId }) {
  const groupRef = useRef(null)

  useEffect(() => {
    const el = groupRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('archive-group--visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={groupRef}
      className="archive-group"
      style={{ '--group-index': groupIndex }}
    >
      <div className="archive-date-label">{getDateLabel(dateKey)}</div>

      <div className="archive-items">
        {items.map((item, i) => {
          const variant = item.variant || 'sage'
          const isRemoving = removingItemId === item.id
          return (
            <button
              key={item.id}
              className={`archive-item ${isRemoving ? 'archive-item--removing' : ''}`}
              style={{ '--item-index': i }}
              onClick={(e) => {
                // Measure the colored square for expand-from animation
                const square = e.currentTarget.querySelector('.archive-item-square')
                const rect = square ? square.getBoundingClientRect() : null
                onOpenItem(item, rect ? { top: rect.top, left: rect.left, width: rect.width, height: rect.height } : null)
              }}
            >
              <div
                className="archive-item-square"
                style={{ background: VARIANT_BG[variant] }}
              />
              <div className="archive-item-text">
                <span
                  className="archive-item-headline"
                  style={{ color: VARIANT_TEXT[variant] }}
                >
                  {item.shortTitle || item.title}
                </span>
                <span
                  className="archive-item-subtitle"
                  style={{ color: VARIANT_SUB[variant] }}
                >
                  {item.title}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Sheet gradient backgrounds (matching BoostCard.css) ──

const SHEET_GRADIENTS = {
  warm:  'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 52%, #FDF3F0 95%)',
  gray:  'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 52%, #EDF4FA 95%)',
  beige: 'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 55%, #FCF8F0 100%)',
  sage:  'linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 37.5%, #EFF3EE 90%)',
}

// ── Archive Detail Overlay ──

export function ArchiveDetail({ item, sourceRect, onClose, onUnsave, onUndoUnsave }) {
  const [expanded, setExpanded] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [saved, setSaved] = useState(true)
  const [toastMsg, setToastMsg] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)
  const [pendingUnsave, setPendingUnsave] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const savedRectRef = useRef(sourceRect)

  // Always keep ref in sync so the expansion layer starts at the right position
  if (sourceRect) savedRectRef.current = sourceRect

  const flatSegments = useMemo(() => {
    return item ? flattenSegments(item.segments) : []
  }, [item])

  const firstTextIdx = useMemo(() => findFirstTextIndex(flatSegments), [flatSegments])

  // Opening animation — expand from source square, then fade in content
  useEffect(() => {
    if (!item) return
    setSaved(true)
    setToastVisible(false)
    setToastMsg(null)
    setPendingUnsave(false)
    setIsClosing(false)
    setExpanded(false)

    // Double RAF → trigger expansion to fullscreen
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true))
    })

    // Content fades in after expansion starts
    const contentTimer = setTimeout(() => setContentVisible(true), 250)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(contentTimer)
    }
  }, [item])

  // Closing animation — fade out content, contract back to source
  useEffect(() => {
    if (!isClosing) return

    setContentVisible(false)

    const contractTimer = setTimeout(() => setExpanded(false), 100)
    const exitTimer = setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 500)

    return () => {
      clearTimeout(contractTimer)
      clearTimeout(exitTimer)
    }
  }, [isClosing, onClose])

  const handleClose = useCallback(() => {
    if (isClosing) return
    setIsClosing(true)
  }, [isClosing])

  const handleSaveToggle = useCallback(() => {
    const next = !saved
    setSaved(next)
    if (next) {
      // Re-saving — cancel pending unsave
      setPendingUnsave(false)
      onUndoUnsave?.()
      setToastMsg('Saved to your collection')
    } else {
      // Unsaving — show toast with undo, don't close yet
      setPendingUnsave(true)
      onUnsave?.(item)
      setToastMsg('Removed from your collection')
    }
    setToastVisible(true)
  }, [saved, item, onUnsave, onUndoUnsave])

  const handleToastUndo = useCallback(() => {
    // User clicked Undo — re-activate save, cancel unsave
    setSaved(true)
    setPendingUnsave(false)
    setToastVisible(false)
    onUndoUnsave?.()
  }, [onUndoUnsave])

  const handleToastDone = useCallback(() => {
    setToastVisible(false)
    if (pendingUnsave) {
      // Undo window expired while unsaved — close the detail, then App.jsx removes the item
      setPendingUnsave(false)
      handleClose()
    }
  }, [handleClose, pendingUnsave])

  if (!item) return null

  const variant = item.variant || 'sage'
  const sheetGradient = SHEET_GRADIENTS[variant] || SHEET_GRADIENTS.sage
  const variantText = VARIANT_TEXT[variant] || VARIANT_TEXT.sage

  // Expansion layer: animates from source square → fullscreen
  const rect = savedRectRef.current
  let expansionStyle
  if (!expanded && rect) {
    expansionStyle = {
      top: rect.top, left: rect.left,
      width: rect.width, height: rect.height,
      borderRadius: 10, background: sheetGradient
    }
  } else {
    expansionStyle = {
      top: 0, left: 0,
      width: '100%', height: '100%',
      borderRadius: 0, background: sheetGradient
    }
  }

  return (
    <div className="archive-detail archive-detail--visible">
      {/* Expansion layer — visual bridge from square to fullscreen */}
      <div className="archive-expansion-layer" style={expansionStyle} />

      <div
        className={`archive-detail-sheet content-sheet--${variant} ${contentVisible ? 'archive-detail-sheet--visible' : ''}`}
        style={{ '--sheet-bg': '#F5F5F5', '--variant-text': variantText }}
      >
        {/* Sticky header */}
        <div className="content-header">
          <button
            className={`content-save content-save--visible ${saved ? 'content-save--active' : ''}`}
            onClick={handleSaveToggle}
            aria-label={saved ? 'Unsave' : 'Save'}
          >
            <SaveIcon filled={saved} />
          </button>
          <div className="content-header-spacer" />
          <button className="content-close" onClick={handleClose} aria-label="Close">
            {CLOSE_ICON}
          </button>
        </div>

        {/* Prompt bubble — reuse ContentOverlay class, skip enter animation */}
        <div className="content-prompt" style={{ opacity: 1, transform: 'translateY(0)' }}>{item.prompt}</div>

        {/* Title — reuse ContentOverlay class, skip enter animation */}
        <h2 className="content-title" style={{ opacity: 1, transform: 'translateY(0)' }}>{item.title}</h2>

        {/* Segments */}
        <div className="content-segments">
          {flatSegments.map((seg, i) => (
            <div key={i} className="seg-wrapper" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {renderSegment(seg, i, firstTextIdx)}
            </div>
          ))}
        </div>
      </div>

      {/* Toast — inside the detail overlay */}
      <Toast
        message={toastMsg}
        visible={toastVisible}
        onDone={handleToastDone}
        onUndo={pendingUnsave ? handleToastUndo : undefined}
        variant={variant}
      />
    </div>
  )
}

// ── Main Component ──

export default function ArchivePage({ savedBoosts, onScrollProgress, onOpenItem, removingItemId, scrollHandlerRef }) {
  const heroRef = useRef(null)
  const atmosphereRef = useRef(null)
  const isEmpty = !savedBoosts || savedBoosts.length === 0
  const heroCopy = useMemo(() => getDailyArchiveHeroCopy(isEmpty), [isEmpty])

  // Set initial atmosphere opacity
  useEffect(() => {
    if (atmosphereRef.current) {
      atmosphereRef.current.style.opacity = 0.4
    }
  }, [])

  // Scroll handler — called from App.jsx via the view-layer scroll container
  const handleScroll = useCallback((scrollTop) => {
    const heroEl = heroRef.current
    const atmosphereEl = atmosphereRef.current

    if (!heroEl) {
      // No hero (items exist) — fade header + atmosphere on scroll
      const progress = Math.min(scrollTop / 100, 1)
      if (atmosphereEl) {
        atmosphereEl.style.opacity = 0.4 * (1 - progress)
      }
      if (onScrollProgress) onScrollProgress(progress)
      return
    }

    const heroHeight = heroEl.offsetHeight
    const progress = Math.min(scrollTop / (heroHeight / 3), 1)

    // Fade + scale hero zone (same as homepage)
    heroEl.style.opacity = 1 - progress
    heroEl.style.transform = `scale(${1 - progress * 0.08})`

    // Fade atmosphere (from 0.4 → 0)
    if (atmosphereEl) {
      atmosphereEl.style.opacity = 0.4 * (1 - progress)
    }

    // Report progress to parent for header control
    if (onScrollProgress) {
      onScrollProgress(progress)
    }
  }, [onScrollProgress])

  // Publish the scroll handler through a ref the parent owns. This replaces
  // the previous `document.querySelector('.archive-page').__archiveScroll`
  // pubsub, which was fragile because it relied on a DOM query after mount
  // and silently broke if the class name ever changed. A parent-owned ref
  // is just a plain JS box — we assign during render (safe because refs
  // aren't React state) and clear on unmount.
  if (scrollHandlerRef) {
    scrollHandlerRef.current = handleScroll
  }
  useEffect(() => {
    return () => {
      if (scrollHandlerRef && scrollHandlerRef.current === handleScroll) {
        scrollHandlerRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="archive-page">

      {isEmpty && (
        <div ref={heroRef} className="archive-hero">
          <div className="archive-hero-content">
            <h1 className="archive-hero-headline">{heroCopy.headline}</h1>
            <p className="archive-hero-subhead">{heroCopy.subhead}</p>
          </div>
        </div>
      )}

      {!isEmpty && (
        <div className="archive-content">
          {savedBoosts.map((dayGroup, groupIndex) => (
            <DayGroup
              key={dayGroup.dateKey}
              dateKey={dayGroup.dateKey}
              items={dayGroup.items}
              groupIndex={groupIndex}
              onOpenItem={onOpenItem}
              removingItemId={removingItemId}
            />
          ))}
        </div>
      )}

    </div>
  )
}
