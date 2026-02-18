import { useState, useCallback, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import BoostCard from './components/BoostCard'
import FeedFooter from './components/FeedFooter'
import ContentOverlay from './components/ContentOverlay'
import { getDailyBoosts, getRandomBoosts } from './data/boostPromptPool'
import { generateBoost } from './api/generateBoost'

const CATEGORIES = ['energy', 'calm', 'nourish', 'joy']

function App() {
  const [cards, setCards] = useState(() => getDailyBoosts())
  const [exploredCards, setExploredCards] = useState({
    energy: false,
    nourish: false,
    calm: false,
    joy: false
  })
  const [activeBoost, setActiveBoost] = useState(null)
  const [boostContent, setBoostContent] = useState(null) // { title, segments } from API
  const [boostLoading, setBoostLoading] = useState(false)
  const [boostError, setBoostError] = useState(null)
  const [isOverlayClosing, setIsOverlayClosing] = useState(false)
  const [sourceRect, setSourceRect] = useState(null)
  const [expandingCard, setExpandingCard] = useState(null)

  const closeTimerRef = useRef(null)
  const activeBoostRef = useRef(null)
  const shouldExploreRef = useRef(false)

  // Card refs for measuring position
  const energyRef = useRef(null)
  const calmRef = useRef(null)
  const nourishRef = useRef(null)
  const joyRef = useRef(null)
  const cardRefMap = { energy: energyRef, calm: calmRef, nourish: nourishRef, joy: joyRef }

  const allExplored = Object.values(exploredCards).every(Boolean)

  const handleOpenBoost = useCallback(async (category) => {
    if (exploredCards[category]) return

    const card = cards[category]

    // Capture card rect
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

    // Call AI
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

  const handleReact = useCallback(() => {
    shouldExploreRef.current = true
    closeTimerRef.current = setTimeout(() => {
      startClosing()
    }, 1800)
  }, [startClosing])

  const handleShuffle = useCallback(() => {
    setCards(getRandomBoosts())
    setExploredCards({ energy: false, nourish: false, calm: false, joy: false })
  }, [])

  return (
    <div className="app-container">
      <Header onShuffle={handleShuffle} />

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

      <BottomNav />

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
