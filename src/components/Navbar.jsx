import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
]

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(href)
    } else {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => handleClick(e, '#hero')}
        >
          <span className="navbar__logo-mark">付浩然</span>
          <span className="navbar__logo-dot" />
        </a>
        <div className="navbar__links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__link"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="navbar__cta"
          onClick={(e) => handleClick(e, '#contact')}
        >
          联系我
        </a>
      </div>
    </nav>
  )
}
