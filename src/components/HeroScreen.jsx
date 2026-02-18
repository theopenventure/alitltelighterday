import './HeroScreen.css'

export default function HeroScreen({ heroRef, headline, subhead }) {
  return (
    <div ref={heroRef} className="hero-screen">
      <div className="hero-atmosphere" aria-hidden="true">
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
