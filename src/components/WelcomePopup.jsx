import { useEffect, useState } from 'react'
import { X, Phone, MessageCircle } from 'lucide-react'
import logoImg from '../assets/images/Logo Shiv Shakti.png'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const KEY = 'assu_welcome_shown_v1'
const DELAY_MS = 30000

export default function WelcomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let shown = false
    try { shown = !!sessionStorage.getItem(KEY) } catch (_) {}
    if (shown) return
    const t = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setOpen(false)
    try { sessionStorage.setItem(KEY, '1') } catch (_) {}
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div className="welcome-overlay" role="dialog" aria-modal="true" onClick={close}>
      <div className="welcome-modal" onClick={(e) => e.stopPropagation()}>
        <button className="welcome-close" onClick={close} aria-label="Close">
          <X size={20} />
        </button>

        <div className="welcome-header">
          <img
            src={logoImg}
            alt="Astro Shiv Shakti Ujjain"
            className="welcome-logo"
          />
        </div>

        <div className="welcome-body">
          <span className="welcome-om" aria-hidden="true">ॐ</span>
          <h3 className="welcome-title">Har Har Mahadev</h3>
          <p className="welcome-tagline">Pehle Baat Karein, Phir Puja Karwayein</p>
          <p className="welcome-desc">
            Speak directly with <strong>Pt. Yashwant Vyas</strong> about Puja, Kundli or
            Adhyatmik Margdarshan — guidance rooted in the sacred heritage of Ujjain.
          </p>

          <div className="welcome-lang">
            <label className="welcome-lang-label">Prefer another language?</label>
            <LanguageSwitcher compact />
          </div>

          <div className="welcome-ctas">
            <a href="tel:+919244300875" className="btn btn-primary" onClick={close}>
              <Phone size={16} /> Call Pandit Ji
            </a>
            <a
              href="https://wa.me/919244300875"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              onClick={close}
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>

          <button className="welcome-later" onClick={close}>Maybe later</button>
        </div>
      </div>
    </div>
  )
}
