import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import logoImg from '../assets/images/Logo Shiv Shakti.png'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Pandit Ji', href: '#about' },
  { label: 'Puja Services', href: '#services' },
  { label: 'Astrology', href: '#astrology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="site-header" id="home">
      <div className="container header-inner">
        <a href="#/" className="logo notranslate" translate="no" aria-label="Astro Shiv Shakti Ujjain">
          <img
            src={logoImg}
            alt="Astro Shiv Shakti Ujjain"
            className="logo-img"
          />
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <div className="header-cta">
          <LanguageSwitcher />
          <a href="tel:+919244300875" className="icon-btn" aria-label="Call Pandit Ji">
            <Phone size={18} />
          </a>
          <a href="tel:+919244300875" className="btn btn-primary">
            <Phone size={16} /> Call Pandit Ji
          </a>
          <button
            className="icon-btn hamburger"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div
        className={`drawer-backdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href="tel:+919244300875" className="btn btn-primary" onClick={() => setOpen(false)}>
          <Phone size={16} /> Call Pandit Ji
        </a>
        <LanguageSwitcher />
      </aside>
    </header>
  )
}
