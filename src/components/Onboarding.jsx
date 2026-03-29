import { useState, useEffect, useCallback } from 'react'
import './Onboarding.css'

// Content for each of the 3 onboarding steps
const STEPS = [
  {
    image: '/images/onboarding/step1.png',
    headline: [
      { text: 'Some days feel ' },
      { text: 'heavier', italic: true },
      { text: ' than others.' }
    ],
    body: "The kind of heavy that's hard to name — not a crisis, just… a lot. This app was made for exactly that feeling."
  },
  {
    image: '/images/onboarding/step2.png',
    headline: [
      { text: 'A small moment crafted for ' },
      { text: 'right now', italic: true },
      { text: '.' }
    ],
    body: 'Fresh every time. Something to move your body, calm your mind, spark curiosity, or be kinder to yourself.'
  },
  {
    image: '/images/onboarding/step3.png',
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

// 4-pointed sparkle symbol
function SparkleIcon() {
  return (
    <svg className="onboarding__star" viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0C25.5 9.5 40.5 24.5 50 25C40.5 25.5 25.5 40.5 25 50C24.5 40.5 9.5 25.5 0 25C9.5 24.5 24.5 9.5 25 0Z" />
    </svg>
  )
}

export default function Onboarding({ onComplete, onStartReveal }) {
  const [phase, setPhase] = useState(0)           // 0 = logo, 1 = steps

  const [symbolFaded, setSymbolFaded] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [atmosphereVisible, setAtmosphereVisible] = useState(false)
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

  // Phase 0: symbol reveal → text sweep → crossfade to steps
  useEffect(() => {
    if (phase !== 0) return

    // Symbol fades out after its moment
    const symbolTimer = setTimeout(() => setSymbolFaded(true), 3500)

    // Text sweep begins after symbol departs; atmosphere fades in with it
    const textTimer = setTimeout(() => {
      setTextVisible(true)
      setAtmosphereVisible(true)
    }, 4300)

    // Crossfade to steps after text has landed
    const transitionTimer = setTimeout(() => {
      setLogoHidden(true)
      setLogoToSteps(true)
      setTimeout(() => {
        setPhase(1)
        setStepsVisible(true)
      }, 600)
    }, 10000)

    return () => {
      clearTimeout(symbolTimer)
      clearTimeout(textTimer)
      clearTimeout(transitionTimer)
    }
  }, [phase])

  // Clean up logo phase after crossfade completes
  useEffect(() => {
    if (phase === 1 && logoToSteps) {
      const t = setTimeout(() => setLogoToSteps(false), 1400)
      return () => clearTimeout(t)
    }
  }, [phase, logoToSteps])

  // Handle step advance — sequential dissolve with breathing room:
  // old content fades out → brief pause → new content fades in
  // Nav morph bridges the gap as a visual connector
  const handleNext = useCallback(() => {
    if (isTransitioning) return

    if (activeStep < STEPS.length - 1) {
      const nextStep = activeStep + 1
      setIsTransitioning(true)

      // Old content starts fading out
      setExitingStep(activeStep)
      setCollapsingSlot(activeStep)
      setMorphPhase('collapse')

      // Nav expand bridges the gap between old and new
      setTimeout(() => {
        setExpandingSlot(nextStep)
        setMorphPhase('expand')
      }, 400)

      // Breathing room: new content enters after old is mostly gone
      setTimeout(() => {
        setActiveStep(nextStep)
        setExitingStep(null)
      }, 600)

      // Settle — everything at rest
      setTimeout(() => {
        setCollapsingSlot(null)
        setExpandingSlot(null)
        setMorphPhase('idle')
        setIsTransitioning(false)
      }, 1400)
    } else {
      // Last step — pulse, then all content lifts away as the
      // app emerges underneath. One continuous dissolve.
      setIsTransitioning(true)
      setMorphPhase('completing')

      // After pulse lands, all content starts fading
      setTimeout(() => {
        setMorphPhase('idle')
        setExitPhase(1) // headline lifts, body fades, panel lifts
      }, 600)

      // Start revealing app underneath earlier for smoother overlap —
      // the staged entrance begins while onboarding content is still dissolving
      setTimeout(() => {
        onStartReveal?.()
      }, 1000)

      // Onboarding container dissolves to transparent (1.2s CSS)
      // revealing the staged app entrance beneath
      setTimeout(() => {
        setExiting(true)
        setExitPhase(2)
      }, 1200)

      // Unmount after fully dissolved
      setTimeout(() => onComplete(), 2400)
    }
  }, [activeStep, isTransitioning, onComplete, onStartReveal])

  // Determine class for a step image at index i
  const imageClass = (i) => {
    if (exitPhase >= 1 && i === activeStep) return 'onboarding__step-image onboarding__step-image--exit-final'
    if (i === exitingStep) return 'onboarding__step-image onboarding__step-image--exit'
    if (i === activeStep && exitingStep === null) return 'onboarding__step-image onboarding__step-image--active'
    return 'onboarding__step-image'
  }

  // Determine class for a headline at index i
  // Step 1 = centered (default), Step 2 = 80px from bottom, Step 3 = 80px from top
  const headlinePosClass = (i) => {
    if (i === 1) return ' onboarding__headline--pos-bottom'
    if (i === 2) return ' onboarding__headline--pos-top'
    return ''
  }

  const headlineClass = (i) => {
    const pos = headlinePosClass(i)
    if (exitPhase >= 1 && i === activeStep) return 'onboarding__headline onboarding__headline--exit-final' + pos
    if (i === exitingStep) return 'onboarding__headline onboarding__headline--exit' + pos
    if (i === activeStep && exitingStep === null) return 'onboarding__headline onboarding__headline--active' + pos
    return 'onboarding__headline' + pos
  }

  // Body class — includes final exit for the dissolve-to-app transition
  const bodyClass = (i) => {
    if (exitPhase >= 1 && i === activeStep) return 'onboarding__body onboarding__body--exit-final'
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
      {/* Atmosphere background — hidden during logo, fades in with text */}
      <div className={`onboarding__atmosphere${atmosphereVisible ? ' onboarding__atmosphere--visible' : ''}${exitPhase >= 1 ? ' onboarding__atmosphere--exiting' : ''}`} aria-hidden="true">
        <div className="onboarding__blob onboarding__blob--moss" />
        <div className="onboarding__blob onboarding__blob--peach" />
      </div>

      {/* Phase 0: Symbol reveal → text sweep — stays mounted during crossfade */}
      {(phase === 0 || logoToSteps) && (
        <div className={`onboarding__logo${logoHidden ? ' onboarding__logo--hidden' : ''}`}>
          {/* Gradient glow + sparkle symbol */}
          <div className={`onboarding__symbol${symbolFaded ? ' onboarding__symbol--hidden' : ''}`}>
            <div className="onboarding__glow-orb onboarding__glow-orb--coral" />
            <div className="onboarding__glow-orb onboarding__glow-orb--magenta" />
            <SparkleIcon />
          </div>
          {/* Text appears after symbol departs */}
          <span className={`onboarding__logo-text${textVisible ? ' onboarding__logo-text--animate' : ''}`}>
            a little lighter day
          </span>
        </div>
      )}

      {/* Steps screens — begin rendering during crossfade for smooth overlap */}
      {(phase >= 1 || logoToSteps) && (
        <div className={`onboarding__steps${stepsVisible ? ' onboarding__steps--visible' : ''}`}>
          {/* Upper area with illustration + headline */}
          <div className="onboarding__upper">
            {STEPS.map((step, i) => (
              <img
                key={`img-${i}`}
                src={step.image}
                alt=""
                className={imageClass(i)}
              />
            ))}
            {STEPS.map((step, i) => (
              <h2 key={i} className={headlineClass(i)}>
                {renderHeadline(step.headline)}
              </h2>
            ))}
          </div>

          {/* White bottom panel */}
          <div className={`onboarding__panel${exitPhase >= 1 ? ' onboarding__panel--exit' : ''}`}>
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
