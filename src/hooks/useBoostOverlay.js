import { useState, useCallback, useRef } from 'react'
import { generateBoost } from '../api/generateBoost'

// Delay before auto-closing after a reaction (ms)
const REACTION_CLOSE_DELAY = 4600

export default function useBoostOverlay({ cards, cardRefMap, onSaveBoost }) {
  const [activeBoost, setActiveBoost] = useState(null)
  const [boostContent, setBoostContent] = useState(null)
  const [boostLoading, setBoostLoading] = useState(false)
  const [boostError, setBoostError] = useState(null)
  const [isOverlayClosing, setIsOverlayClosing] = useState(false)
  const [sourceRect, setSourceRect] = useState(null)
  const [expandingCard, setExpandingCard] = useState(null)
  const [exploredCards, setExploredCards] = useState({
    lift: false,
    steady: false,
    space: false,
    small: false,
  })

  const closeTimerRef = useRef(null)
  const activeBoostRef = useRef(null)
  const shouldExploreRef = useRef(false)
  const contentCacheRef = useRef({})

  const allExplored = Object.values(exploredCards).every(Boolean)

  const handleOpenBoost = useCallback(async (category) => {
    const card = cards[category]

    const cardEl = cardRefMap[category]?.current
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect()
      setSourceRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
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
  }, [cards, cardRefMap])

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

  const doSaveBoost = useCallback(() => {
    if (!boostContent || !activeBoostRef.current) return
    const card = cards[activeBoostRef.current]
    onSaveBoost({
      title: boostContent.title,
      shortTitle: card.shortTitle,
      category: card.category,
      variant: card.variant,
      prompt: card.prompt,
      segments: boostContent.segments,
    })
  }, [boostContent, cards, onSaveBoost])

  const handleReact = useCallback((type) => {
    shouldExploreRef.current = true

    if (type === 'up') {
      doSaveBoost()
    }

    closeTimerRef.current = setTimeout(() => {
      startClosing()
    }, REACTION_CLOSE_DELAY)
  }, [startClosing, doSaveBoost])

  const handleSave = useCallback(() => {
    doSaveBoost()
  }, [doSaveBoost])

  return {
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
  }
}
