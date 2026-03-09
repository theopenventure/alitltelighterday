import { useState, useEffect, useCallback } from 'react'
import './Onboarding.css'

// Words revealed one at a time in Phase 0
const LOGO_WORDS = ['a', 'little', 'lighter', 'day']

// Content for each of the 3 onboarding steps
const STEPS = [
  {
    headline: [
      { text: 'Some days feel ' },
      { text: 'heavier', italic: true },
      { text: ' than others.' }
    ],
    body: "The kind of heavy that's hard to name — not a crisis, just… a lot. This app was made for exactly that feeling."
  },
  {
    headline: [
      { text: 'A small moment crafted for ' },
      { text: 'right now', italic: true },
      { text: '.' }
    ],
    body: 'Fresh every time. Something to move your body, calm your mind, spark curiosity, or be kinder to yourself.'
  },
  {
    headline: [
      { text: 'Show up when you ' },
      { text: 'feel like it', italic: true },
      { text: '.' }
    ],
    body: "No sign-up, no streaks, no tracking. There's nothing to keep up with here. A little boost is enough."
  }
]

// (Nav layout is now flexbox — no position constants needed)

// Arrow icon pointing right
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function Onboarding({ onComplete }) {
  const [phase, setPhase] = useState(0)           // 0 = logo, 1 = steps
  const [visibleWords, setVisibleWords] = useState(0)
  const [logoHidden, setLogoHidden] = useState(false)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)  // 0, 1, 2
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [exitingStep, setExitingStep] = useState(null)
  const [exiting, setExiting] = useState(false)

  // Track whether logo-to-steps transition is happening for crossfade
  const [logoToSteps, setLogoToSteps] = useState(false)

  // Choreographed exit: each element exits at different times
  const [exitPhase, setExitPhase] = useState(0) // 0=none, 1=headline out, 2=panel out, 3=fade

  // Slot morph: collapse current arrow → expand next dot
  const [morphPhase, setMorphPhase] = useState('idle') // 'idle' | 'collapse' | 'expand' | 'completing'
  const [collapsingSlot, setCollapsingSlot] = useState(null)
  const [expandingSlot, setExpandingSlot] = useState(null)

  // Phase 0: reveal words one by one, then crossfade to steps
  useEffect(() => {
    if (phase !== 0) return

    const timers = LOGO_WORDS.map((_, i) =>
      setTimeout(() => setVisibleWords(i + 1), 300 + i * 500)
    )

    // After all words visible + hold, begin crossfade to steps
    const transitionTimer = setTimeout(() => {
      setLogoHidden(true)
      setLogoToSteps(true)
      setTimeout(() => {
        setPhase(1)
        setStepsVisible(true)
      }, 400)
    }, 4500)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(transitionTimer)
    }
  }, [phase])

  // Clean up logo phase after crossfade completes
  useEffect(() => {
    if (phase === 1 && logoToSteps) {
      const t = setTimeout(() => setLogoToSteps(false), 1000)
      return () => clearTimeout(t)
    }
  }, [phase, logoToSteps])

  // Handle step advance — collapse current arrow, expand next dot
  const handleNext = useCallback(() => {
    if (isTransitioning) return

    if (activeStep < STEPS.length - 1) {
      const nextStep = activeStep + 1
      setIsTransitioning(true)
      setExitingStep(activeStep)

      // Start collapsing current arrow into a dot
      setCollapsingSlot(activeStep)
      setMorphPhase('collapse')

      // Staggered overlap: start expanding next dot into arrow
      // at 120ms so collapse and expand visually overlap
      setTimeout(() => {
        setExpandingSlot(nextStep)
        setMorphPhase('expand')
        setActiveStep(nextStep)
        setExitingStep(null)
      }, 120)

      // Settle — clear all morph state
      setTimeout(() => {
        setCollapsingSlot(null)
        setExpandingSlot(null)
        setMorphPhase('idle')
        setIsTransitioning(false)
      }, 560)
    } else {
      // Last step — completion pulse, then choreographed exit
      setIsTransitioning(true)
      setMorphPhase('completing')

      // After pulse, start exit choreography
      setTimeout(() => {
        setMorphPhase('idle')
        setExitPhase(1) // headline floats up
      }, 350)

      setTimeout(() => setExitPhase(2), 550) // panel slides down

      setTimeout(() => {
        setExiting(true)
        setExitPhase(3) // full fade
      }, 900)

      setTimeout(() => onComplete(), 1450) // unmount
    }
  }, [activeStep, isTransitioning, onComplete])

  // Determine class for a headline at index i
  const headlineClass = (i) => {
    if (exitPhase >= 1 && i === activeStep) return 'onboarding__headline onboarding__headline--exit-final'
    if (i === exitingStep) return 'onboarding__headline onboarding__headline--exit'
    if (i === activeStep && exitingStep === null) return 'onboarding__headline onboarding__headline--active'
    return 'onboarding__headline'
  }

  // Body class
  const bodyClass = (i) => {
    if (i === exitingStep) return 'onboarding__body onboarding__body--exit'
    if (i === activeStep && exitingStep === null) return 'onboarding__body onboarding__body--active'
    return 'onboarding__body'
  }

  // Determine CSS class for each nav slot based on morph state
  const slotClass = (i) => {
    // Completion pulse on last step
    if (morphPhase === 'completing' && i === activeStep) {
      return 'onboarding__slot onboarding__slot--active onboarding__slot--completing'
    }
    if (i === collapsingSlot) return 'onboarding__slot onboarding__slot--collapsing'
    if (i === expandingSlot) return 'onboarding__slot onboarding__slot--expanding'
    if (i === activeStep && morphPhase === 'idle') return 'onboarding__slot onboarding__slot--active'
    if (i < activeStep) return 'onboarding__slot onboarding__slot--visited'
    return 'onboarding__slot onboarding__slot--future'
  }

  // Render headline with italic spans
  const renderHeadline = (parts) =>
    parts.map((part, i) =>
      part.italic ? (
        <span key={i} className="onboarding__headline-italic">{part.text}</span>
      ) : (
        <span key={i}>{part.text}</span>
      )
    )

  return (
    <div className={`onboarding${exiting ? ' onboarding--exiting' : ''}`}>
      {/* Atmosphere background — shared across all phases */}
      <div className="onboarding__atmosphere" aria-hidden="true">
        <div className="onboarding__blob onboarding__blob--moss" />
        <div className="onboarding__blob onboarding__blob--peach" />
      </div>

      {/* Phase 0: Logo word reveal — stays mounted during crossfade */}
      {(phase === 0 || logoToSteps) && (
        <div className={`onboarding__logo${logoHidden ? ' onboarding__logo--hidden' : ''}`}>
          {LOGO_WORDS.map((word, i) => (
            <span
              key={word}
              className={`onboarding__word${i < visibleWords ? ' onboarding__word--visible' : ''}`}
            >
              {word}
            </span>
          ))}
        </div>
      )}

      {/* Steps screens — begin rendering during crossfade for smooth overlap */}
      {(phase >= 1 || logoToSteps) && (
        <div className={`onboarding__steps${stepsVisible ? ' onboarding__steps--visible' : ''}`}>
          {/* Upper area with headline */}
          <div className="onboarding__upper">
            {STEPS.map((step, i) => (
              <h2 key={i} className={headlineClass(i)}>
                {renderHeadline(step.headline)}
              </h2>
            ))}
          </div>

          {/* White bottom panel */}
          <div className={`onboarding__panel${exitPhase >= 2 ? ' onboarding__panel--exit' : ''}`}>
            <div className="onboarding__body-wrapper">
              {STEPS.map((step, i) => (
                <p key={i} className={bodyClass(i)}>
                  {step.body}
                </p>
              ))}
            </div>

            {/* Navigation: 3 slots that morph between dot ↔ arrow */}
            <div className="onboarding__nav">
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  className={slotClass(i)}
                  onClick={i === activeStep ? handleNext : undefined}
                  aria-label={i === activeStep ? (activeStep < STEPS.length - 1 ? 'Next step' : 'Get started') : `Step ${i + 1}`}
                  tabIndex={i === activeStep ? 0 : -1}
                >
                  <ArrowIcon />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
