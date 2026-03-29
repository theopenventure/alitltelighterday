import './HeroScreen.css'

export default function HeroScreen({ heroRef, headline, subhead, revealStage = 4 }) {
  return (
    <div ref={heroRef} className="hero-screen">
      <div className={`hero-blobs${revealStage >= 3 ? ' hero-blobs--visible' : ''}`} aria-hidden="true">
        <div className="hero-blob hero-blob--coral" />
        <div className="hero-blob hero-blob--violet" />
      </div>
      <div className="hero-content">
        <h1 className={`hero-headline${revealStage >= 1 ? ' hero-headline--visible' : ''}`}>{headline}</h1>
        <p className={`hero-subhead${revealStage >= 2 ? ' hero-subhead--visible' : ''}`}>{subhead}</p>
      </div>
      <div className={`hero-image${revealStage >= 3 ? ' hero-image--visible' : ''}`} aria-hidden="true">
        <img src="/images/hero-illustration.png" alt="" className="hero-image__img" />
      </div>
    </div>
  )
}
