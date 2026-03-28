import './HeroScreen.css'

export default function HeroScreen({ heroRef, headline, subhead }) {
  return (
    <div ref={heroRef} className="hero-screen">
      <div className="hero-blobs" aria-hidden="true">
        <div className="hero-blob hero-blob--coral" />
        <div className="hero-blob hero-blob--violet" />
      </div>
      <div className="hero-content">
        <h1 className="hero-headline">{headline}</h1>
        <p className="hero-subhead">{subhead}</p>
      </div>
      <div className="hero-image" aria-hidden="true">
        <img src="/images/hero-illustration.png" alt="" className="hero-image__img" />
      </div>
    </div>
  )
}
