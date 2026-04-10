import { useState, useCallback, useRef, useEffect, lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import BoostCard from './components/BoostCard'
import FeedFooter from './components/FeedFooter'
import HeroScreen from './components/HeroScreen'
import ErrorBoundary from './components/ErrorBoundary'
import { getDailyBoosts, getRandomBoosts, getCategoryOrder } from './data/boostPromptPool'

// Code-split the heavy slots: onboarding only runs once, the content overlay
// only appears when the user opens a card, and the whole archive view is only
// needed when they switch tabs. Keeping these off the initial bundle buys us
// a faster first paint on the feed, which is the screen that matters.
const Onboarding = lazy(() => import('./components/Onboarding'))
const ContentOverlay = lazy(() => import('./components/ContentOverlay'))
const ArchivePage = lazy(() => import('./components/ArchivePage'))
const ArchiveDetail = lazy(() =>
  import('./components/ArchivePage').then((m) => ({ default: m.ArchiveDetail }))
)

// Preload the archive chunk on hover/focus of the Collections tab. The module
// system caches the import result, so when the user actually clicks the tab
// the chunk is already parsed and React.lazy resolves instantly. This is a
// lightweight alternative to prefetching via <link rel="prefetch"> — it only
// runs when the user signals intent (hover or keyboard focus).
const preloadArchive = () => {
  import('./components/ArchivePage')
}
import { getDailyHeroCopy, getRandomHeroCopy } from './data/heroCopyPool'
import { generateBoost } from './api/generateBoost'
import { saveBoost, removeBoost, getSavedBoostsByDay, seedPlaceholderData } from './lib/savedBoosts'

// Dynamic category order based on day + time of day
const CATEGORIES = getCategoryOrder()

function App() {
  const [cards, setCards] = useState(() => getDailyBoosts())
  const [heroCopy, setHeroCopy] = useState(() => getDailyHeroCopy())
  const [activeBoost, setActiveBoost] = useState(null)
  const [boostContent, setBoostContent] = useState(null)
  const [boostLoading, setBoostLoading] = useState(false)
  const [boostError, setBoostError] = useState(null)
  const [isOverlayClosing, setIsOverlayClosing] = useState(false)
  const [sourceRect, setSourceRect] = useState(null)
  const [expandingCard, setExpandingCard] = useState(null)
  const [returningCard, setReturningCard] = useState(null)

  // Onboarding (always show for testing)
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [revealStage, setRevealStage] = useState(-1) // -1=hidden, 0=bg, 1=headline, 2=subhead, 3=illustration+blobs, 4=cards

  // Staged reveal — each element enters individually as onboarding dissolves,
  // creating a choreographed sequence instead of a monolithic crossfade.
  // Blobs are delayed to stage 3 so they don't bleed through the
  // semi-transparent onboarding during the crossfade overlap.
  const handleStartReveal = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRevealStage(0)                              // background
        setTimeout(() => setRevealStage(1), 200)       // headline
        setTimeout(() => setRevealStage(2), 500)       // subhead
        setTimeout(() => setRevealStage(3), 900)       // illustration + blobs
        setTimeout(() => setRevealStage(4), 1400)      // cards
      })
    })
  }, [])

  // Clean unmount after onboarding has fully dissolved
  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false)
  }, [])

  // View switching
  const [activeView, setActiveView] = useState('home')
  const [savedBoosts, setSavedBoosts] = useState(() => getSavedBoostsByDay())
  const [activeArchiveItem, setActiveArchiveItem] = useState(null)
  const [archiveSourceRect, setArchiveSourceRect] = useState(null)
  // Gate the archive chunk on first visit so its JS + data pool stay off the
  // initial bundle. Once mounted we never unmount, so tab switches feel instant.
  const [archiveMounted, setArchiveMounted] = useState(false)

  // Unsave flow
  const [undoItem, setUndoItem] = useState(null)
  const [removingItemId, setRemovingItemId] = useState(null)

  const closeTimerRef = useRef(null)
  const activeBoostRef = useRef(null)
  const todayViewRef = useRef(null)
  const archiveViewRef = useRef(null)
  const heroRef = useRef(null)
  const headerRef = useRef(null)
  const navRef = useRef(null)
  const homeScrollRef = useRef(0)
  const archiveScrollRef = useRef(0)
  const contentCacheRef = useRef({})  // category → generated content (persists across opens)
  const savedCategoriesRef = useRef({})  // category → true if user saved this boost
  // ArchivePage publishes its scroll handler into this ref so we can drive
  // its parallax/header fade from the view-layer scroll listener without
  // doing a DOM query + mutation dance.
  const archiveScrollHandlerRef = useRef(null)

  // Card refs for measuring position
  const liftRef = useRef(null)
  const steadyRef = useRef(null)
  const spaceRef = useRef(null)
  const smallRef = useRef(null)
  const cardRefMap = { lift: liftRef, steady: steadyRef, space: spaceRef, small: smallRef }

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

      // Fade background from #F5F5F5 → white only once cards appear
      const bgProgress = Math.max(0, (progress - 0.6) / 0.4)
      const gray = Math.round(245 + bgProgress * 10)
      container.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`

      const headerEl = headerRef.current
      const navEl = navRef.current
      if (headerEl) {
        const headerProgress = Math.max(0, (progress - 0.7) / 0.3)
        headerEl.style.opacity = headerProgress
        if (navEl) navEl.style.opacity = headerProgress
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

  // Archive scroll handler — header always visible on archive page
  const handleArchiveScrollProgress = useCallback(() => {
  }, [activeView])

  // Archive view scroll listener (mirrors the homepage hero parallax).
  // ArchivePage stashes its scroll handler in archiveScrollHandlerRef so we
  // can call it directly — no DOM query, no magic property on the page div.
  useEffect(() => {
    const container = archiveViewRef.current
    if (!container) return

    const onScroll = () => {
      archiveScrollHandlerRef.current?.(container.scrollTop)
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
    const category = activeBoostRef.current

    // Make card visible + start bounce
    setExpandingCard(null)
    setReturningCard(category)

    // After fade-in completes → clean up
    setTimeout(() => {
      setReturningCard(null)
    }, 350)

    // Clean up overlay state immediately
    activeBoostRef.current = null
    setActiveBoost(null)
    setIsOverlayClosing(false)
    setSourceRect(null)
    setBoostContent(null)
    setBoostError(null)
    setBoostLoading(false)
  }, [])

  const handleReact = useCallback((type) => {
    // Save boost when user loved it
    if (type === 'love' && boostContent && activeBoostRef.current) {
      const category = activeBoostRef.current
      const card = cards[category]
      const updated = saveBoost({
        title: boostContent.title,
        shortTitle: card.shortTitle,
        category: card.category,
        variant: card.variant,
        prompt: card.prompt,
        segments: boostContent.segments,
      })
      setSavedBoosts(updated)
      savedCategoriesRef.current[category] = true
    }

    closeTimerRef.current = setTimeout(() => {
      startClosing()
    }, 4600)
  }, [startClosing, boostContent, cards])

  const handleSave = useCallback(() => {
    if (!boostContent || !activeBoostRef.current) return
    const category = activeBoostRef.current
    const card = cards[category]
    const updated = saveBoost({
      title: boostContent.title,
      shortTitle: card.shortTitle,
      category: card.category,
      variant: card.variant,
      prompt: card.prompt,
      segments: boostContent.segments,
    })
    setSavedBoosts(updated)
    savedCategoriesRef.current[category] = true
  }, [boostContent, cards])

  const handleContentUnsaveConfirmed = useCallback(() => {
    if (!boostContent || !activeBoostRef.current) return
    const category = activeBoostRef.current
    // Find and remove the item from storage by title match
    const allBoosts = savedBoosts.flatMap(g => g.items)
    const match = allBoosts.find(b => b.title === boostContent.title)
    if (match) {
      const updated = removeBoost(match.id)
      setSavedBoosts(updated)
    }
    savedCategoriesRef.current[category] = false
  }, [boostContent, savedBoosts])

  // ── Unsave flow from Archive ──

  const handleArchiveUnsave = useCallback((item) => {
    // Store item for potential undo — don't remove from storage yet
    setUndoItem(item)
  }, [])

  const handleArchiveUndone = useCallback(() => {
    // User clicked Undo inside ArchiveDetail — keep item, clear undo state
    setUndoItem(null)
  }, [])

  const handleArchiveDetailClosed = useCallback(() => {
    setActiveArchiveItem(null)
    setArchiveSourceRect(null)
    // If an unsave was triggered (not undone), remove the item
    if (undoItem) {
      const itemId = undoItem.id
      const itemTitle = undoItem.title
      setUndoItem(null)

      // Sync homepage save state — find matching category key
      for (const key of Object.keys(contentCacheRef.current)) {
        if (contentCacheRef.current[key]?.title === itemTitle) {
          savedCategoriesRef.current[key] = false
          break
        }
      }

      // Trigger removal animation
      setRemovingItemId(itemId)

      // After animation completes, update storage and refresh list
      setTimeout(() => {
        const updated = removeBoost(itemId)
        setSavedBoosts(updated)
        setRemovingItemId(null)
      }, 600)
    }
  }, [undoItem])

  const handleShuffle = useCallback(() => {
    setCards(getRandomBoosts())
    setHeroCopy((prev) => getRandomHeroCopy(prev))
    contentCacheRef.current = {}  // new prompts → clear cached content
    savedCategoriesRef.current = {}  // reset save states
  }, [])

  const handleTabChange = useCallback((tabId) => {
    // Block tab change while overlay is open
    if (activeBoost) return

    const headerEl = headerRef.current

    if (tabId === 'archived' && activeView !== 'archive') {
      homeScrollRef.current = todayViewRef.current?.scrollTop || 0
      setSavedBoosts(getSavedBoostsByDay())

      // Header + nav always visible on archive
      if (headerEl) headerEl.style.opacity = 1
      if (navRef.current) navRef.current.style.opacity = 1

      setArchiveMounted(true)
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

          // Recalculate header opacity based on saved scroll position so
          // returning to Home matches the position the user left it in.
          const heroEl = heroRef.current
          if (heroEl && headerEl) {
            const heroHeight = heroEl.offsetHeight
            const progress = Math.min(homeScrollRef.current / heroHeight, 1)
            const headerProgress = Math.max(0, (progress - 0.7) / 0.3)
            headerEl.style.opacity = headerProgress
            if (navRef.current) navRef.current.style.opacity = headerProgress
          }
        }
      })
    }
  }, [activeView, activeBoost])

  const navTab = activeView === 'archive' ? 'archived' : 'home'

  // Landing entrance class — staged reveal replaces monolithic crossfade
  const landingClass = revealStage >= 0
    ? 'app-landing app-landing--visible'
    : 'app-landing app-landing--hidden'

  return (
    <div className="app-container">
      {showOnboarding && (
        // If onboarding chunk fails to load or crashes, skip straight to the
        // home reveal — don't block the app behind a broken intro.
        <ErrorBoundary
          fallback={null}
          onError={() => {
            handleStartReveal()
            handleOnboardingComplete()
          }}
        >
          <Suspense fallback={null}>
            <Onboarding onComplete={handleOnboardingComplete} onStartReveal={handleStartReveal} />
          </Suspense>
        </ErrorBoundary>
      )}

      <div className={landingClass}>
        <Header
          ref={headerRef}
          label={activeView === 'archive' ? 'Collections' : 'Here and now'}
        />

        {/* Today view */}
        <div
          ref={todayViewRef}
          className={`view-layer ${activeView === 'home' ? 'view-active' : 'view-exit-left'}`}
        >
          <HeroScreen heroRef={heroRef} headline={heroCopy.headline} subhead={heroCopy.subhead} revealStage={revealStage} />

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
                  expanding={expandingCard === key}
                  returning={returningCard === key}
                  animDelay={`${CATEGORIES.indexOf(key) * 0.15}s`}
                  revealed={revealStage >= 4}
                />
              )
            })}

            <FeedFooter />
          </div>
        </div>

        {/* Archive view — only mount once user has visited it, so its chunk
            loads on first tab switch rather than on initial page load. */}
        <div
          ref={archiveViewRef}
          className={`view-layer ${activeView === 'archive' ? 'view-active' : 'view-exit-right'}`}
          style={{ backgroundColor: '#fff' }}
        >
          {archiveMounted && (
            <ErrorBoundary>
              <Suspense fallback={null}>
                <ArchivePage savedBoosts={savedBoosts} onScrollProgress={handleArchiveScrollProgress} onOpenItem={(item, rect) => { setArchiveSourceRect(rect); setActiveArchiveItem(item) }} removingItemId={removingItemId} scrollHandlerRef={archiveScrollHandlerRef} />
              </Suspense>
            </ErrorBoundary>
          )}
        </div>

        <BottomNav
          ref={navRef}
          activeTab={navTab}
          onTabChange={handleTabChange}
          onPreloadTab={(tabId) => { if (tabId === 'archived') preloadArchive() }}
        />
      </div>

      {/* Overlays live outside the landing wrapper so CSS transforms
          don't break their position:fixed expand animations. Both are lazy
          — the chunks download the first time the user opens one and stay
          cached for the rest of the session. */}
      {activeArchiveItem && (
        // If the detail chunk fails, silently dismiss the overlay so the
        // user returns to the archive list instead of a stuck screen.
        <ErrorBoundary fallback={null} onError={handleArchiveDetailClosed}>
          <Suspense fallback={null}>
            <ArchiveDetail item={activeArchiveItem} sourceRect={archiveSourceRect} onClose={handleArchiveDetailClosed} onUnsave={handleArchiveUnsave} onUndoUnsave={handleArchiveUndone} />
          </Suspense>
        </ErrorBoundary>
      )}

      {activeBoost && (
        // Same pattern for the main content overlay — on error, run the
        // normal exit handler so the card snaps back home.
        <ErrorBoundary fallback={null} onError={handleOverlayExited}>
          <Suspense fallback={null}>
            <ContentOverlay
              card={cards[activeBoost]}
              content={boostContent}
              loading={boostLoading}
              error={boostError}
              sourceRect={sourceRect}
              isClosing={isOverlayClosing}
              initialSaved={!!savedCategoriesRef.current[activeBoost]}
              onClose={startClosing}
              onExited={handleOverlayExited}
              onReact={handleReact}
              onSave={handleSave}
              onUnsaveConfirmed={handleContentUnsaveConfirmed}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  )
}

export default App
