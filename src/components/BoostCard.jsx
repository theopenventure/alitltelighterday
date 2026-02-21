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
  returning,
  animDelay = '0.1s'
}, ref) {
  const isInteractive = !explored && !returning && onClick

  const handleKeyDown = (e) => {
    if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      ref={ref}
      className={`card boost-card boost-card--${variant} ${explored ? 'explored' : ''} ${expanding ? 'expanding' : ''} ${returning ? 'returning' : ''}`}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={isInteractive ? 0 : -1}
      aria-label={`Explore ${label} boost: ${title}`}
      aria-disabled={explored}
      style={{ animationDelay: animDelay }}
    >
      {variant === 'warm' && <div className="card-aura" aria-hidden="true" />}
      <div className="card-pill">{label}</div>
      <h2 className="card-headline">{shortTitle}</h2>
      <p className="card-prompt">{title}</p>
      <span className="card-cta" aria-hidden="true">{ctaText}</span>
    </div>
  )
})

export default BoostCard
