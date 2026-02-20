import { forwardRef } from 'react'
import './Header.css'

const Header = forwardRef(function Header({ label = 'Today' }, ref) {
  return (
    <header className="header-float" ref={ref}>
      <div className="header-float-inner">
        <div className="header-date-label">{label}</div>
      </div>
    </header>
  )
})

export default Header
