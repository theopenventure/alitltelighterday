import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { flattenSegments, renderSegment } from './segments'
import './ArchivePage.css'

// ── Day Group ──

function DayGroup({ dayNumber, month, weekday, items, groupIndex, onOpenItem }) {
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
      <div className="archive-group-header">
        <div className="archive-day-number">{dayNumber}</div>
        <div className="archive-date-meta">
          <div className="archive-month">{month}</div>
          <div className="archive-weekday">{weekday}</div>
        </div>
      </div>

      <div className="archive-items">
        {items.map((item, i) => (
          <button
            key={item.id}
            className="archive-item"
            style={{ '--item-index': i }}
            onClick={() => onOpenItem(item)}
          >
            <span className="archive-item-title">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Archive Detail Overlay ──

function ArchiveDetail({ item, onClose }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  const flatSegments = useMemo(() => {
    return item ? flattenSegments(item.segments) : []
  }, [item])

  useEffect(() => {
    if (!item) return
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true))
    })
  }, [item])

  const handleClose = () => {
    setClosing(true)
    setVisible(false)
    setTimeout(() => {
      setClosing(false)
      onClose()
    }, 380)
  }

  if (!item) return null

  return (
    <div className={`archive-detail ${visible ? 'archive-detail--visible' : ''} ${closing ? 'archive-detail--closing' : ''}`}>
      <div className="archive-detail-sheet">
        {/* Sticky header */}
        <div className="content-header">
          <button className="content-back" onClick={handleClose} aria-label="Go back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="content-header-cat">{item.category}</span>
          <div className="content-header-spacer" />
        </div>

        {/* Prompt */}
        <div className="archive-detail-prompt">{item.prompt}</div>

        {/* Divider */}
        <div className="content-divider" />

        {/* Title */}
        <h2 className="archive-detail-title">{item.title}</h2>

        {/* Segments */}
        <div className="content-segments">
          {flatSegments.map((seg, i) => (
            <div key={i} className="seg-wrapper" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {renderSegment(seg, i)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Empty State ──

function ArchiveEmpty() {
  return (
    <div className="archive-empty">
      <div className="archive-empty-content">
        <div className="archive-empty-label">Nothing saved yet</div>
        <p className="archive-empty-sub">
          When something resonates, tap "Loved it" to save it here.
        </p>
      </div>
    </div>
  )
}

// ── Main Component ──

export default function ArchivePage({ savedBoosts, onScrollProgress }) {
  const [activeItem, setActiveItem] = useState(null)
  const heroRef = useRef(null)
  const atmosphereRef = useRef(null)

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
    if (!heroEl) return

    const heroHeight = heroEl.offsetHeight
    const progress = Math.min(scrollTop / heroHeight, 1)

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

  if (!savedBoosts || savedBoosts.length === 0) {
    return (
      <div className="archive-page">
        <div ref={atmosphereRef} className="archive-atmosphere" aria-hidden="true">
          <div className="archive-blob archive-blob--moss" />
          <div className="archive-blob archive-blob--peach" />
        </div>
        <div ref={heroRef} className="archive-hero" />
        <ArchiveEmpty />
      </div>
    )
  }

  return (
    <div className="archive-page">
      <div ref={atmosphereRef} className="archive-atmosphere" aria-hidden="true">
        <div className="archive-blob archive-blob--moss" />
        <div className="archive-blob archive-blob--peach" />
      </div>

      <div ref={heroRef} className="archive-hero" />

      <div className="archive-content">
        {savedBoosts.map((dayGroup, groupIndex) => (
          <DayGroup
            key={dayGroup.dateKey}
            dayNumber={dayGroup.dayNumber}
            month={dayGroup.month}
            weekday={dayGroup.weekday}
            items={dayGroup.items}
            groupIndex={groupIndex}
            onOpenItem={setActiveItem}
          />
        ))}
      </div>

      <ArchiveDetail item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  )
}
