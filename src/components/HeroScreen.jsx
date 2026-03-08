import { useEffect } from 'react'
import './HeroScreen.css'

export default function HeroScreen({ heroRef, atmosphereRef, headline, subhead }) {
  // Set initial atmosphere opacity (same as Collections)
  useEffect(() => {
    if (atmosphereRef?.current) {
      atmosphereRef.current.style.opacity = 0.4
    }
  }, [atmosphereRef])

  return (
    <div ref={heroRef} className="hero-screen">
      <div ref={atmosphereRef} className="hero-atmosphere" aria-hidden="true">
        <div className="hero-blob hero-blob--moss" />
        <div className="hero-blob hero-blob--peach" />
      </div>
      <div className="hero-content">
        <h1 className="hero-headline">{headline}</h1>
        <p className="hero-subhead">{subhead}</p>
      </div>
    </div>
  )
}
