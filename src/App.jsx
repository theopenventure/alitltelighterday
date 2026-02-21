import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import BoostCard from './components/BoostCard'
import FeedFooter from './components/FeedFooter'
import ContentOverlay from './components/ContentOverlay'
import HeroScreen from './components/HeroScreen'
import ArchivePage from './components/ArchivePage'
import { getDailyBoosts, getCategoryOrder } from './data/boostPromptPool'
import { getDailyHeroCopy } from './data/heroCopyPool'
import { saveBoost, getSavedBoostsByDay, seedPlaceholderData } from './lib/savedBoosts'
import useBoostOverlay from './hooks/useBoostOverlay'

// Dynamic category order based on day + time of day
const CATEGORIES = getCategoryOrder()

function App() {
  const [cards] = useState(() => getDailyBoosts())
  const [heroCopy] = useState(() => getDailyHeroCopy())

  // View switching
  const [activeView, setActiveView] = useState('home')
  const [savedBoosts, setSavedBoosts] = useState(() => getSavedBoostsByDay())

  const todayViewRef = useRef(null)
  const archiveViewRef = useRef(null)
  const heroRef = useRef(null)
  const headerRef = useRef(null)
  const homeScrollRef = useRef(0)
  const archiveScrollRef = useRef(0)
  const archivePageRef = useRef(null)

  // Card refs for measuring position
  const liftRef = useRef(null)
  const steadyRef = useRef(null)
  const spaceRef = useRef(null)
  const smallRef = useRef(null)
  const cardRefMap = { lift: liftRef, steady: steadyRef, space: spaceRef, small: smallRef }

  const handleSaveBoost = useCallback((boostData) => {
    const updated = saveBoost(boostData)
    setSavedBoosts(updated)
  }, [])

  const {
    activeBoost,
    boostContent,
    boostLoading,
    boostError,
    isOverlayClosing,
    sourceRect,
    expandingCard,
    exploredCards,
    allExplored,
    handleOpenBoost,
    startClosing,
    handleOverlayExited,
    handleReact,
    handleSave,
  } = useBoostOverlay({ cards, cardRefMap, onSaveBoost: handleSaveBoost })

  // Seed placeholder data on first load
  useEffect(() => {
    const seeded = seedPlaceholderData()
    if (seeded) setSavedBoosts(getSavedBoostsByDay())
  }, [])

  // Hero parallax fade on scroll
  useEffect(() => {
    const container = todayViewRef.current
    if (!container) return

    const handleScroll = () => {
      const heroEl = heroRef.current
      if (!heroEl) return
      const heroHeight = heroEl.offsetHeight
      const scrolled = container.scrollTop
      const progress = Math.min(scrolled / (heroHeight / 3), 1)

      heroEl.style.opacity = 1 - progress
      heroEl.style.transform = `scale(${1 - progress * 0.08})`

      const headerEl = headerRef.current
      if (headerEl) {
        const headerProgress = Math.max(0, (progress - 0.7) / 0.3)
        headerEl.style.opacity = headerProgress
      }
    }

    container.style.scrollSnapType = 'none'
    container.scrollTo(0, 0)

    let snapEnabled = false
    const enableSnap = () => {
      if (!snapEnabled) {
        snapEnabled = true
        container.style.scrollSnapType = 'y mandatory'
      }
    }

    const onScroll = () => {
      enableSnap()
      handleScroll()
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  // Archive scroll handler — controls header from archive page scroll progress
  const handleArchiveScrollProgress = useCallback((progress) => {
    const headerEl = headerRef.current
    if (!headerEl || activeView !== 'archive') return
    const headerProgress = Math.max(0, (progress - 0.7) / 0.3)
    headerEl.style.opacity = headerProgress
  }, [activeView])

  // Archive view scroll listener — delegates to ArchivePage via ref
  useEffect(() => {
    const container = archiveViewRef.current
    if (!container) return

    const onScroll = () => {
      archivePageRef.current?.handleScroll(container.scrollTop)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  const handleTabChange = useCallback((tabId) => {
    // Block tab change while overlay is open
    if (activeBoost) return

    const headerEl = headerRef.current

    if (tabId === 'archived' && activeView !== 'archive') {
      homeScrollRef.current = todayViewRef.current?.scrollTop || 0
      setSavedBoosts(getSavedBoostsByDay())

      // Header always starts hidden — scroll will reveal it
      if (headerEl) headerEl.style.opacity = 0

      setActiveView('archive')

      // Reset archive scroll to top so it starts fresh
      requestAnimationFrame(() => {
        archiveViewRef.current?.scrollTo(0, 0)
      })
    } else if (tabId === 'home' && activeView !== 'home') {
      // Save archive scroll position
      archiveScrollRef.current = archiveViewRef.current?.scrollTop || 0

      setActiveView('home')

      requestAnimationFrame(() => {
        const container = todayViewRef.current
        if (container) {
          container.scrollTo(0, homeScrollRef.current)

          // Recalculate header opacity based on saved scroll position
          const heroEl = heroRef.current
          if (heroEl && headerEl) {
            const heroHeight = heroEl.offsetHeight
            const progress = Math.min(homeScrollRef.current / heroHeight, 1)
            const headerProgress = Math.max(0, (progress - 0.7) / 0.3)
            headerEl.style.opacity = headerProgress
          }
        }
      })
    }
  }, [activeView, activeBoost])

  const navTab = activeView === 'archive' ? 'archived' : 'home'

  return (
    <div className="app-container">
      <Header
        ref={headerRef}
        label={activeView === 'archive' ? 'Archived' : 'Today'}
      />

      {/* Today view */}
      <div
        ref={todayViewRef}
        className={`view-layer ${activeView === 'home' ? 'view-active' : 'view-exit-left'}`}
      >
        <HeroScreen heroRef={heroRef} headline={heroCopy.headline} subhead={heroCopy.subhead} />

        <div className="feed">
          {CATEGORIES.map((key) => {
            const card = cards[key]
            return (
              <BoostCard
                key={key}
                ref={cardRefMap[key]}
                variant={card.variant}
                label={card.category}
                title={card.prompt}
                shortTitle={card.shortTitle}
                ctaText={card.ctaText}
                onClick={() => handleOpenBoost(key)}
                explored={exploredCards[key]}
                expanding={expandingCard === key}
                animDelay={`${0.1 + CATEGORIES.indexOf(key) * 0.1}s`}
              />
            )
          })}

          <FeedFooter allExplored={allExplored} />
        </div>
      </div>

      {/* Archive view */}
      <div
        ref={archiveViewRef}
        className={`view-layer ${activeView === 'archive' ? 'view-active' : 'view-exit-right'}`}
      >
        <ArchivePage ref={archivePageRef} savedBoosts={savedBoosts} onScrollProgress={handleArchiveScrollProgress} />
      </div>

      <BottomNav activeTab={navTab} onTabChange={handleTabChange} />

      {activeBoost && (
        <ContentOverlay
          card={cards[activeBoost]}
          content={boostContent}
          loading={boostLoading}
          error={boostError}
          sourceRect={sourceRect}
          isClosing={isOverlayClosing}
          onClose={startClosing}
          onExited={handleOverlayExited}
          onReact={handleReact}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default App
