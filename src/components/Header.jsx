import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import logoImg from '../assets/images/Logo Shiv Shakti.png'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const PHONE = '+919244300875'
const PHONE_DISPLAY = '+91 92443 00875'
const WHATSAPP = 'https://wa.me/919244300875'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Shiv-Shakti Pooja', href: '/shiv-shakti-pooja' },
  { label: 'Mangal Dosh', href: '/mangal-dosh-puja' },
  { label: 'Kaal Sarp', href: '/kaal-sarp-dosh-puja' },
  { label: 'Contact Us', href: '/contact' }
]

function getPathname() {
  return (window.location.pathname || '/').replace(/\/+$/, '') || '/'
}

// Smoothly navigate within the SPA for path routes.
function navigate(href) {
  const isPath = href.startsWith('/') && !href.startsWith('/#')
  if (!isPath) return false
  if (getPathname() === href.replace(/\/+$/, '') || (href === '/' && getPathname() === '/')) {
    window.scrollTo(0, 0)
    return true
  }
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
  return true
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [path, setPath] = useState(getPathname())

  useEffect(() => {
    const onRoute = () => setPath(getPathname())
    window.addEventListener('popstate', onRoute)
    window.addEventListener('hashchange', onRoute)
    return () => {
      window.removeEventListener('popstate', onRoute)
      window.removeEventListener('hashchange', onRoute)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href) => {
    if (href === '/') return path === '/'
    return path === href.replace(/\/+$/, '')
  }

  const onNavClick = (href) => (e) => {
    if (navigate(href)) {
      e.preventDefault()
      setOpen(false)
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} id="home">
      <div className="container header-inner">
        <a
          href="/"
          className="logo notranslate"
          translate="no"
          aria-label="Astro Shiv Shakti Ujjain"
          onClick={onNavClick('/')}
        >
          <img
            src={logoImg}
            alt="Astro Shiv Shakti Ujjain"
            className="logo-img"
          />
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={onNavClick(n.href)}
              className={isActive(n.href) ? 'is-active' : ''}
              aria-current={isActive(n.href) ? 'page' : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <LanguageSwitcher />
          <a
            href={`tel:${PHONE}`}
            className="btn btn-primary header-btn-call"
            data-cta="call"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone size={16} /> <span className="header-btn-label">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp header-btn-book"
            data-cta="whatsapp"
          >
            <MessageCircle size={16} /> Book Now
          </a>
          <button
            className="icon-btn hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((o) => !o)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div
        className={`drawer-backdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />
      <aside
        id="mobile-drawer"
        className={`mobile-drawer ${open ? 'open' : ''}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <button
          className="drawer-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X size={22} />
        </button>
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            onClick={onNavClick(n.href)}
            className={isActive(n.href) ? 'is-active' : ''}
            aria-current={isActive(n.href) ? 'page' : undefined}
          >
            {n.label}
          </a>
        ))}
        <a
          href={`tel:${PHONE}`}
          className="btn btn-primary"
          onClick={() => setOpen(false)}
          data-cta="call"
        >
          <Phone size={16} /> Call Pandit Ji
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp"
          onClick={() => setOpen(false)}
          data-cta="whatsapp"
        >
          <MessageCircle size={16} /> Book Now
        </a>
        <LanguageSwitcher />
      </aside>
    </header>
  )
}
