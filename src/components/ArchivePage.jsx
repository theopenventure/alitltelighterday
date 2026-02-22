import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { flattenSegments, renderSegment, findFirstTextIndex } from './segments'
import Toast from './Toast'
import { getDailyArchiveHeroCopy } from '../data/archiveHeroCopyPool'
import './ArchivePage.css'

// ── Variant color maps ──

const VARIANT_BG = {
  warm: '#FFF5F2',
  gray: '#F0F5FA',
  beige: '#FFFCF5',
  sage: '#ECF6EB',
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
                const sq = e.currentTarget.querySelector('.archive-item-square')
                if (sq) {
                  const r = sq.getBoundingClientRect()
                  onOpenItem(item, { top: r.top, left: r.left, width: r.width, height: r.height })
                } else {
                  onOpenItem(item, null)
                }
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

// ── Sheet background colors (matching BoostCard.css gradient starts) ──

const SHEET_BG = {
  warm: '#FFF5F2',
  gray: '#F0F5FA',
  beige: '#FFFCF5',
  sage: '#F0F7F0',
}

// ── Archive Detail Overlay ──

export function ArchiveDetail({ item, sourceRect, onClose, onUnsave, onUndoUnsave }) {
  const [expanded, setExpanded] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [saved, setSaved] = useState(true)
  const [toastMsg, setToastMsg] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)
  const [pendingUnsave, setPendingUnsave] = useState(false)
  const savedRectRef = useRef(null)

  const flatSegments = useMemo(() => {
    return item ? flattenSegments(item.segments) : []
  }, [item])

  const firstTextIdx = useMemo(() => findFirstTextIndex(flatSegments), [flatSegments])

  // Opening animation — capture rect and trigger expansion
  useEffect(() => {
    if (!item) return
    savedRectRef.current = sourceRect
    setSaved(true)
    setToastVisible(false)
    setToastMsg(null)
    setPendingUnsave(false)
    setClosing(false)
    setExpanded(false)
    setContentVisible(false)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setExpanded(true)
      })
    })

    const contentTimer = setTimeout(() => {
      setContentVisible(true)
    }, 250)

    return () => clearTimeout(contentTimer)
  }, [item, sourceRect])

  const handleClose = useCallback(() => {
    if (closing) return
    setClosing(true)
    setContentVisible(false)

    setTimeout(() => {
      setExpanded(false)
    }, 100)

    setTimeout(() => {
      setClosing(false)
      onClose()
    }, 550)
  }, [onClose, closing])

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
  const sheetBg = SHEET_BG[variant] || SHEET_BG.sage
  const variantText = VARIANT_TEXT[variant] || VARIANT_TEXT.sage
  const squareBg = VARIANT_BG[variant] || VARIANT_BG.sage

  // Expansion layer style — animates from square position to fullscreen
  const rect = savedRectRef.current
  let expansionStyle
  if (!expanded && rect) {
    expansionStyle = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      borderRadius: 10,
      background: squareBg,
    }
  } else {
    expansionStyle = {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 0,
      background: sheetBg,
    }
  }

  return (
    <div className="archive-detail">
      {/* Expansion layer — colored surface that morphs from square to fullscreen */}
      <div
        className={`archive-expansion-layer ${expanded ? 'expanded' : ''}`}
        style={expansionStyle}
      />

      {/* Content sheet — fades in after expansion begins */}
      <div
        className={`archive-detail-sheet content-sheet--${variant} ${contentVisible ? 'archive-detail-sheet--visible' : ''} ${closing ? 'archive-detail-sheet--closing' : ''}`}
        style={{ '--sheet-bg': sheetBg, '--variant-text': variantText }}
      >
        {/* Sticky header */}
        <div className="content-header">
          <button
            className={`content-save content-save--visible ${saved ? 'content-save--active' : ''}`}
            onClick={handleSaveToggle}
            aria-label={saved ? 'Unsave' : 'Save'}
          >
            <svg width="31" height="31" viewBox="0 0 34.65 34.65" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.6563 4.33125C24.8325 4.33125 27.4313 6.93 27.4313 10.1063V28.7307C27.4313 30.1744 25.8432 30.8963 24.8325 29.7413L17.325 21.6563L9.8175 29.7413C8.8069 30.8963 7.2188 30.1744 7.2188 28.7307V10.1063C7.2188 6.93 9.8175 4.33125 12.9938 4.33125H21.6563Z" />
            </svg>
          </button>
          <div className="content-header-spacer" />
          <button className="content-close" onClick={handleClose} aria-label="Close">
            <svg width="31" height="31" viewBox="0 0 34.65 34.65" fill="none" stroke="currentColor" strokeWidth="2.8875" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M30.3189 30.3188L20.2126 20.2125" />
              <path d="M20.2126 26.9982V20.2125H26.9983" />
              <path d="M4.3314 4.3313L14.4376 14.4375" />
              <path d="M14.4377 7.6519V14.4375H7.6521" />
            </svg>
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

export default function ArchivePage({ savedBoosts, onScrollProgress, onOpenItem, removingItemId }) {
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

  // Expose handleScroll via a ref-callback pattern on the component
  // We'll use a data attribute approach — App.jsx will call this directly
  useEffect(() => {
    // Store handler on the DOM for App.jsx to access
    const page = document.querySelector('.archive-page')
    if (page) {
      page.__archiveScroll = handleScroll
    }
    return () => {
      if (page) delete page.__archiveScroll
    }
  }, [handleScroll])

  return (
    <div className="archive-page">
      <div ref={atmosphereRef} className="archive-atmosphere" aria-hidden="true">
        <div className="archive-blob archive-blob--moss" />
        <div className="archive-blob archive-blob--peach" />
      </div>

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
