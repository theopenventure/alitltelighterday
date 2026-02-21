import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import BoostCard from './components/BoostCard'
import FeedFooter from './components/FeedFooter'
import ContentOverlay from './components/ContentOverlay'
import HeroScreen from './components/HeroScreen'
import ArchivePage from './components/ArchivePage'
import { getDailyBoosts, getRandomBoosts, getCategoryOrder } from './data/boostPromptPool'
import { getDailyHeroCopy, getRandomHeroCopy } from './data/heroCopyPool'
import { generateBoost } from './api/generateBoost'
import { saveBoost, isBoostSaved, getSavedBoostsByDay, seedPlaceholderData } from './lib/savedBoosts'

// Dynamic category order based on day + time of day
const CATEGORIES = getCategoryOrder()

function App() {
  const [cards, setCards] = useState(() => getDailyBoosts())
  const [heroCopy, setHeroCopy] = useState(() => getDailyHeroCopy())
  const [exploredCards, setExploredCards] = useState({
    lift: false,
    steady: false,
    space: false,
    small: false
  })
  const [activeBoost, setActiveBoost] = useState(null)
  const [boostContent, setBoostContent] = useState(null)
  const [boostLoading, setBoostLoading] = useState(false)
  const [boostError, setBoostError] = useState(null)
  const [isOverlayClosing, setIsOverlayClosing] = useState(false)
  const [sourceRect, setSourceRect] = useState(null)
  const [expandingCard, setExpandingCard] = useState(null)

  // View switching
  const [activeView, setActiveView] = useState('home')
  const [savedBoosts, setSavedBoosts] = useState(() => getSavedBoostsByDay())

  const closeTimerRef = useRef(null)
  const activeBoostRef = useRef(null)
  const shouldExploreRef = useRef(false)
  const todayViewRef = useRef(null)
  const archiveViewRef = useRef(null)
  const heroRef = useRef(null)
  const headerRef = useRef(null)
  const homeScrollRef = useRef(0)
  const archiveScrollRef = useRef(0)
  const contentCacheRef = useRef({})  // category → generated content (persists across opens)

  // Card refs for measuring position
  const liftRef = useRef(null)
  const steadyRef = useRef(null)
  const spaceRef = useRef(null)
  const smallRef = useRef(null)
  const cardRefMap = { lift: liftRef, steady: steadyRef, space: spaceRef, small: smallRef }

  const allExplored = Object.values(exploredCards).every(Boolean)

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

  // Archive view scroll listener (mirrors the homepage hero parallax)
  useEffect(() => {
    const container = archiveViewRef.current
    if (!container) return

    const onScroll = () => {
      const scrollTop = container.scrollTop
      // Delegate to ArchivePage's internal scroll handler via DOM
      const archivePage = container.querySelector('.archive-page')
      if (archivePage && archivePage.__archiveScroll) {
        archivePage.__archiveScroll(scrollTop)
      }
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  const handleOpenBoost = useCallback(async (category) => {
    const card = cards[category]

    const cardEl = cardRefMap[category]?.current
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect()
      setSourceRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      })
    }

    activeBoostRef.current = category
    shouldExploreRef.current = false
    setBoostError(null)
    setExpandingCard(category)
    setIsOverlayClosing(false)
    setActiveBoost(category)

    // If we already generated content for this card, show it instantly
    const cached = contentCacheRef.current[category]
    if (cached) {
      setBoostContent(cached)
      setBoostLoading(false)
      return
    }

    setBoostContent(null)
    setBoostLoading(true)

    try {
      const result = await generateBoost(category, card.prompt)
      contentCacheRef.current[category] = result
      setBoostContent(result)
    } catch (err) {
      console.error('Boost generation failed:', err)
      setBoostError(err.message)
    } finally {
      setBoostLoading(false)
    }
  }, [cards])

  const startClosing = useCallback(() => {
    if (isOverlayClosing) return
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setIsOverlayClosing(true)
  }, [isOverlayClosing])

  const handleOverlayExited = useCallback(() => {
    if (shouldExploreRef.current && activeBoostRef.current) {
      setExploredCards((prev) => ({ ...prev, [activeBoostRef.current]: true }))
    }
    activeBoostRef.current = null
    shouldExploreRef.current = false
    setExpandingCard(null)
    setActiveBoost(null)
    setIsOverlayClosing(false)
    setSourceRect(null)
    setBoostContent(null)
    setBoostError(null)
    setBoostLoading(false)
  }, [])

  const handleReact = useCallback((type) => {
    shouldExploreRef.current = true

    // Save boost when user loved it
    if (type === 'love' && boostContent && activeBoostRef.current) {
      const card = cards[activeBoostRef.current]
      const updated = saveBoost({
        title: boostContent.title,
        shortTitle: card.shortTitle,
        category: card.category,
        variant: card.variant,
        prompt: card.prompt,
        segments: boostContent.segments,
      })
      setSavedBoosts(updated)
    }

    closeTimerRef.current = setTimeout(() => {
      startClosing()
    }, 4600)
  }, [startClosing, boostContent, cards])

  const handleSave = useCallback(() => {
    if (!boostContent || !activeBoostRef.current) return
    const card = cards[activeBoostRef.current]
    const updated = saveBoost({
      title: boostContent.title,
      shortTitle: card.shortTitle,
      category: card.category,
      variant: card.variant,
      prompt: card.prompt,
      segments: boostContent.segments,
    })
    setSavedBoosts(updated)
  }, [boostContent, cards])

  const handleShuffle = useCallback(() => {
    setCards(getRandomBoosts())
    setHeroCopy((prev) => getRandomHeroCopy(prev))
    setExploredCards({ lift: false, steady: false, space: false, small: false })
    contentCacheRef.current = {}  // new prompts → clear cached content
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
        label={activeView === 'archive' ? 'Collection' : 'Today'}
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
        <ArchivePage savedBoosts={savedBoosts} onScrollProgress={handleArchiveScrollProgress} />
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
          isSaved={boostContent ? isBoostSaved(boostContent.title) : false}
        />
      )}
    </div>
  )
}

export default App
