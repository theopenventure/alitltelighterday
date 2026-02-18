import { forwardRef } from 'react'
import './BoostCard.css'

const BoostCard = forwardRef(function BoostCard({
  variant = 'gray',
  label,
  title,
  shortTitle,
  ctaText = 'Explore',
  onClick,
  explored,
  expanding,
  animDelay = '0.1s'
}, ref) {
  return (
    <div
      ref={ref}
      className={`card boost-card boost-card--${variant} ${explored ? 'explored' : ''} ${expanding ? 'expanding' : ''}`}
      onClick={explored ? undefined : onClick}
      style={{ animationDelay: animDelay }}
    >
      {variant === 'warm' && <div className="card-aura" />}
      <div className="card-pill">{label}</div>
      <h2 className="card-headline">{shortTitle}</h2>
      <p className="card-prompt">{title}</p>
      <span className="card-cta">{ctaText}</span>
    </div>
  )
})

export default BoostCard
