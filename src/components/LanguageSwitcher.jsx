import { useEffect, useRef, useState } from 'react'
import { Languages, ChevronDown, Check } from 'lucide-react'

const LANGS = [
  { code: 'en', label: 'English', native: 'English', isDefault: true },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' }
]

function readCookie() {
  const m = document.cookie.match(/googtrans=([^;]+)/)
  if (!m) return 'en'
  const parts = decodeURIComponent(m[1]).split('/')
  return parts[2] || 'en'
}

function setGoogTrans(code) {
  const host = window.location.hostname
  const value = code === 'en' ? '' : `/en/${code}`
  const opts = [
    `googtrans=${value};path=/`,
    `googtrans=${value};path=/;domain=${host}`,
    `googtrans=${value};path=/;domain=.${host}`
  ]
  opts.forEach((s) => { document.cookie = s })
}

export default function LanguageSwitcher({ compact = false }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('en')
  const ref = useRef(null)
  const inited = useRef(false)

  useEffect(() => {
    setCurrent(readCookie())
    if (inited.current) return
    inited.current = true

    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,ta,gu,bn,kn,mr',
            autoDisplay: false
          },
          'google_translate_element'
        )
      } catch (e) {
        // silently ignore
      }
    }

    if (!document.querySelector('script[data-gt-loader]')) {
      const s = document.createElement('script')
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      s.async = true
      s.defer = true
      s.dataset.gtLoader = '1'
      document.body.appendChild(s)
    }
  }, [])

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const pick = (code) => {
    setCurrent(code)
    setOpen(false)
    setGoogTrans(code)
    // Reload so Google Translate re-applies against the fresh React render.
    // (Live combo updates get fought by React re-renders and don't stick.)
    setTimeout(() => window.location.reload(), 60)
  }

  const currentLang = LANGS.find((l) => l.code === current) || LANGS[0]

  return (
    <div className={`lang-switcher ${compact ? 'compact' : ''}`} ref={ref}>
      <button
        className="lang-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Select language"
      >
        <Languages size={16} />
        <span className="lang-btn-label">{currentLang.native}</span>
        <ChevronDown size={14} className={`lang-chev ${open ? 'up' : ''}`} />
      </button>
      {open && (
        <div className="lang-menu" role="listbox">
          <div className="lang-menu-head">Select Language</div>
          {LANGS.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === current}
              className={`lang-item ${l.code === current ? 'active' : ''}`}
              onClick={() => pick(l.code)}
            >
              <span className="lang-item-main">
                <span className="lang-item-label">{l.label}</span>
                <span className="lang-item-native">{l.native}</span>
              </span>
              {l.isDefault && <span className="lang-default">Default</span>}
              {l.code === current && <Check size={14} className="lang-check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
