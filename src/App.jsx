import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import BoostCard from './components/BoostCard'
import FeedFooter from './components/FeedFooter'
import ContentOverlay from './components/ContentOverlay'
import HeroScreen from './components/HeroScreen'
import ArchivePage from './components/ArchivePage'
import { getDailyBoosts, getRandomBoosts } from './data/boostPromptPool'
import { getDailyHeroCopy, getRandomHeroCopy } from './data/heroCopyPool'
import { generateBoost } from './api/generateBoost'
import { saveBoost, getSavedBoostsByDay, seedPlaceholderData } from './lib/savedBoosts'

const CATEGORIES = ['energy', 'calm', 'nourish', 'joy']

function App() {
  const [cards, setCards] = useState(() => getDailyBoosts())
  const [heroCopy, setHeroCopy] = useState(() => getDailyHeroCopy())
  const [exploredCards, setExploredCards] = useState({
    energy: false,
    nourish: false,
    calm: false,
    joy: false
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
  const heroRef = useRef(null)
  const headerRef = useRef(null)
  const homeScrollRef = useRef(0)

  // Card refs for measuring position
  const energyRef = useRef(null)
  const calmRef = useRef(null)
  const nourishRef = useRef(null)
  const joyRef = useRef(null)
  const cardRefMap = { energy: energyRef, calm: calmRef, nourish: nourishRef, joy: joyRef }

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
      const progress = Math.min(scrolled / heroHeight, 1)

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

  // Force header visible when on archive view
  useEffect(() => {
    const headerEl = headerRef.current
    if (!headerEl) return
    if (activeView === 'archive') {
      headerEl.style.opacity = 1
    }
  }, [activeView])

  const handleOpenBoost = useCallback(async (category) => {
    if (exploredCards[category]) return

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
    setBoostContent(null)
    setBoostError(null)
    setBoostLoading(true)
    setExpandingCard(category)
    setIsOverlayClosing(false)
    setActiveBoost(category)

    try {
      const result = await generateBoost(category, card.prompt)
      setBoostContent(result)
    } catch (err) {
      console.error('Boost generation failed:', err)
      setBoostError(err.message)
    } finally {
      setBoostLoading(false)
    }
  }, [exploredCards, cards])

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
        category: card.category,
        variant: card.variant,
        prompt: card.prompt,
        segments: boostContent.segments,
      })
      setSavedBoosts(updated)
    }

    closeTimerRef.current = setTimeout(() => {
      startClosing()
    }, 1800)
  }, [startClosing, boostContent, cards])

  const handleShuffle = useCallback(() => {
    setCards(getRandomBoosts())
    setHeroCopy((prev) => getRandomHeroCopy(prev))
    setExploredCards({ energy: false, nourish: false, calm: false, joy: false })
  }, [])

  const handleTabChange = useCallback((tabId) => {
    // Block tab change while overlay is open
    if (activeBoost) return

    if (tabId === 'favourites' && activeView !== 'archive') {
      homeScrollRef.current = todayViewRef.current?.scrollTop || 0
      setSavedBoosts(getSavedBoostsByDay())
      setActiveView('archive')
    } else if (tabId === 'home' && activeView !== 'home') {
      setActiveView('home')
      requestAnimationFrame(() => {
        todayViewRef.current?.scrollTo(0, homeScrollRef.current)
      })
    }
  }, [activeView, activeBoost])

  const navTab = activeView === 'archive' ? 'favourites' : 'home'

  return (
    <div className="app-container">
      <Header
        ref={headerRef}
        label={activeView === 'archive' ? 'Archived' : 'Today'}
        onShuffle={activeView === 'home' ? handleShuffle : undefined}
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
      <div className={`view-layer ${activeView === 'archive' ? 'view-active' : 'view-exit-right'}`}>
        <ArchivePage savedBoosts={savedBoosts} />
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
        />
      )}
    </div>
  )
}

export default App
