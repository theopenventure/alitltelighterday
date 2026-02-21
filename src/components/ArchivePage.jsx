import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { flattenSegments, renderSegment, findFirstTextIndex } from './segments'
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

function DayGroup({ dateKey, items, groupIndex, onOpenItem }) {
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
          return (
            <button
              key={item.id}
              className="archive-item"
              style={{ '--item-index': i }}
              onClick={() => onOpenItem(item)}
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

export function ArchiveDetail({ item, onClose }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  const flatSegments = useMemo(() => {
    return item ? flattenSegments(item.segments) : []
  }, [item])

  const firstTextIdx = useMemo(() => findFirstTextIndex(flatSegments), [flatSegments])

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

  const variant = item.variant || 'sage'
  const sheetBg = SHEET_BG[variant] || SHEET_BG.sage
  const variantText = VARIANT_TEXT[variant] || VARIANT_TEXT.sage

  return (
    <div className={`archive-detail ${visible ? 'archive-detail--visible' : ''} ${closing ? 'archive-detail--closing' : ''}`}>
      <div
        className={`archive-detail-sheet content-sheet--${variant}`}
        style={{ '--sheet-bg': sheetBg, '--variant-text': variantText }}
      >
        {/* Sticky header */}
        <div className="content-header">
          <div className="content-header-spacer" />
          <button className="content-close" onClick={handleClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 30.55 30.55" fill="currentColor" aria-hidden="true">
              <path d="M25.9 17.44a1 1 0 0 1 0 2h-5.04l9.39 9.4a1 1 0 0 1-1.41 1.41l-9.4-9.39v5.04a1 1 0 0 1-2 0v-7.46a1 1 0 0 1 1-1h7.46ZM.29.29a1 1 0 0 1 1.42 0l9.39 9.4V4.65a1 1 0 0 1 2 0v7.45a1 1 0 0 1-1 1H4.65a1 1 0 0 1 0-2h5.04L.29 1.71A1 1 0 0 1 .29.29Z" />
            </svg>
          </button>
        </div>

        {/* Prompt bubble */}
        <div className="archive-detail-prompt">{item.prompt}</div>

        {/* Title */}
        <h2 className="archive-detail-title">{item.title}</h2>

        {/* Segments */}
        <div className="content-segments">
          {flatSegments.map((seg, i) => (
            <div key={i} className="seg-wrapper" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {renderSegment(seg, i, firstTextIdx)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Component ──

export default function ArchivePage({ savedBoosts, onScrollProgress, onOpenItem }) {
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
            />
          ))}
        </div>
      )}

    </div>
  )
}
