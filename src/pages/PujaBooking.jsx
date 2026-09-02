import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Phone, MessageCircle, Search, ChevronDown, Check,
  ShieldCheck, ArrowRight, ArrowLeft, Sparkles, HandHeart,
  Home, Baby, Flame, Star, Video, MapPin, Send, Calendar, Info
} from 'lucide-react'
import heroBg from '../assets/images/hero.png'
import mangalImg from '../assets/images/Mangal dosh puja .png'
import kaalSarpImg from '../assets/images/kaal sharp dosh 1.png'
import rudraImg from '../assets/images/Rudrabhishek Puja 1.png'
import siddhavatImg from '../assets/images/siddhvat-1024x768.webp'
import g1 from '../assets/images/Gallery-image1-1.jpg'
import g2 from '../assets/images/Gallery-image1-2.jpg'
import g3 from '../assets/images/Gallery-image1-3.jpg'
import g4 from '../assets/images/Gallery-image1-4.jpg'
import g5 from '../assets/images/Gallery-image1-5.jpg'
import g6 from '../assets/images/Gallery-image1-6.jpg'
import g7 from '../assets/images/Gallery-image1-7.jpg'

const PHONE = '+919244300875'
const PHONE_DISPLAY = '+91 92443 00875'
const WHATSAPP = 'https://wa.me/919244300875'

/* -------------------- DATA -------------------- */

const CATEGORIES = [
  { id: 'all', label: 'All Pujas' },
  { id: 'home', label: 'Home Well-Being & Prosperity', icon: Home },
  { id: 'ganesh', label: 'Shree Ganesh Pujas', icon: Sparkles },
  { id: 'sanskar', label: 'Sanskar Pujas', icon: Baby },
  { id: 'bagalamukhi', label: 'Maa Bagalamukhi Pujas', icon: HandHeart },
  { id: 'shakti', label: 'Shakti Havans', icon: Flame }
]

const PUJAS = [
  // 01 — Home Well-Being & Prosperity
  { id: 'satyanarayan', category: 'home', name: 'Satyanarayan Puja', img: g3, desc: 'Traditional Puja performed as a devotional ceremony for the home and family.' },
  { id: 'griha-shanti', category: 'home', name: 'Griha Shanti & Vastu Shanti Puja', img: siddhavatImg, desc: 'Traditional rituals performed for spiritual harmony and auspiciousness within the home.' },
  { id: 'mahamrityunjaya', category: 'home', name: 'Maha Mrityunjaya Jaap', img: rudraImg, desc: 'Traditional recitation of the Mahamrityunjaya Mantra as part of a Shiva-focused spiritual practice.' },
  { id: 'lakshmi-kuber', category: 'home', name: 'Lakshmi Kuber Puja', img: g5, desc: 'Traditional worship dedicated to Maa Lakshmi and Lord Kuber.' },
  { id: 'navagraha', category: 'home', name: 'Navagraha Shanti Puja', img: mangalImg, desc: 'Traditional Graha Shanti ritual associated with the nine planetary deities.' },

  // 02 — Shree Ganesh Pujas
  { id: 'ganapathi-homam', category: 'ganesh', name: 'Ganapathi Homam', img: g1, desc: 'Traditional fire ritual dedicated to Lord Ganesha.' },
  { id: 'ganesh-shodasho', category: 'ganesh', name: 'Ganesh Chaturthi Shodashopachara Puja', img: g4, desc: 'Traditional sixteen-step devotional worship of Lord Ganesha.' },
  { id: 'sankashti', category: 'ganesh', name: 'Sankashti Chaturthi Vrat Puja', img: g6, desc: 'Traditional Ganesh worship associated with Sankashti Chaturthi observance.' },
  { id: 'nitya-ganesh', category: 'ganesh', name: 'Nitya Ganesh Puja', img: g2, desc: 'Traditional daily devotional Puja dedicated to Lord Ganesha.' },

  // 03 — Sanskar Pujas
  { id: 'namakarana', category: 'sanskar', name: 'Namakarana Sanskar', img: g7, desc: 'Traditional naming ceremony performed as a significant family and life-stage Sanskar.' },
  { id: 'mundan', category: 'sanskar', name: 'Mundan / Chudakarana Sanskar', img: g2, desc: 'Traditional Sanskar associated with the child’s first hair-cutting ceremony.' },
  { id: 'vidyarambha', category: 'sanskar', name: 'Vidyarambha / Aksharabhyasam', img: g6, desc: 'Traditional ceremony marking the beginning of a child’s formal learning journey.' },
  { id: 'upanayana', category: 'sanskar', name: 'Upanayana Sanskar (Sacred Thread Ceremony)', img: g4, desc: 'Traditional Sacred Thread Ceremony marking an important spiritual and educational milestone.' },
  { id: 'vivaha', category: 'sanskar', name: 'Vivaha Sanskar', img: g3, desc: 'Traditional Hindu marriage ceremony performed according to the appropriate rituals and family requirements.' },

  // 04 — Maa Bagalamukhi Pujas
  { id: 'shatru-vinash', category: 'bagalamukhi', name: 'Shatru Vinash & Legal Victory Puja', img: kaalSarpImg, desc: 'Traditional Maa Bagalamukhi worship sought for spiritual support during challenging disputes and legal situations.' },
  { id: 'nazar-dosha', category: 'bagalamukhi', name: 'Nazar Dosha & Tantra Badha Nivaran', img: g5, desc: 'Traditional spiritual rituals associated with protection and removal of perceived negative influences.' },
  { id: 'mirchi-havan', category: 'bagalamukhi', name: 'Mantra Jaap & Mirchi Havan', img: g1, desc: 'Traditional Maa Bagalamukhi mantra recitation and fire ritual.' },

  // 05 — Shakti Havans
  { id: 'navchandi', category: 'shakti', name: 'Navchandi / Durga Havan', img: mangalImg, desc: 'Traditional Shakti Havan dedicated to Maa Durga and divine feminine energy.' },
  { id: 'maha-kali', category: 'shakti', name: 'Maha Kali Havan', img: kaalSarpImg, desc: 'Traditional fire ritual dedicated to Maa Kali.' },
  { id: 'lalitha', category: 'shakti', name: 'Lalitha Sahasranamam Havan', img: g4, desc: 'Traditional Havan incorporating the devotional recitation associated with Lalitha Sahasranamam.' },
  { id: 'pratyangira', category: 'shakti', name: 'Pratyangira Devi Havan', img: rudraImg, desc: 'Traditional Shakti Havan dedicated to Maa Pratyangira Devi.' }
]

const CATEGORY_NAME = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]))

/* -------------------- SEO -------------------- */

function useSeo() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Book Your Puja — Online or Offline | Astro Shiv Shakti Ujjain'

    let meta = document.querySelector('meta[name="description"]')
    const prev = meta?.getAttribute('content')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'Choose from 21 traditional Pujas — Home Well-Being, Ganesh, Sanskar, Bagalamukhi and Shakti Havans. Enquire online or request an offline Puja at home with Astro Shiv Shakti Ujjain.'
    )

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://astroshivshaktiujjain.com/puja-booking')

    return () => {
      document.title = prevTitle
      if (prev && meta) meta.setAttribute('content', prev)
    }
  }, [])
}

/* -------------------- HERO -------------------- */

function Hero({ onStart }) {
  return (
    <section className="pb-hero">
      <div className="pb-hero-bg" aria-hidden="true">
        <img src={heroBg} alt="" />
      </div>
      <div className="container pb-hero-inner reveal">
        <span className="eyebrow">
          <span aria-hidden="true">🕉️</span>
          <span>Online &amp; Offline Puja Services</span>
        </span>
        <h1>Book Your Puja — Online or At Home</h1>
        <p className="pb-lead">
          Choose the Puja you are looking for and tell us how you would like to
          participate. Submit your requirement and speak with us before your Puja is
          confirmed.
        </p>
        <div className="hero-ctas">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onStart}
            data-conversion="puja-selection"
          >
            Start Your Booking <ArrowRight size={16} />
          </button>
          <a href={`tel:${PHONE}`} className="btn btn-secondary" data-conversion="phone">
            <Phone size={16} /> Talk to Pandit Ji
          </a>
        </div>
      </div>
    </section>
  )
}

/* -------------------- MODE SELECT -------------------- */

function ModeSelect({ mode, setMode }) {
  const cards = [
    {
      id: 'online',
      icon: Video,
      label: 'Online Puja',
      text: 'Participate in your Puja remotely through an online / video-call arrangement.',
      cta: 'Choose Online Puja',
      conversion: 'online-puja'
    },
    {
      id: 'offline',
      icon: MapPin,
      label: 'Offline Puja at Home',
      text: 'Request a traditional Puja at your home, subject to location and service availability.',
      cta: 'Choose Offline Puja',
      conversion: 'offline-puja'
    }
  ]
  return (
    <section className="mdp-section" id="mode">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Step 01</span>
          <h2>Choose How You Want to Participate</h2>
          <p>Pick the mode that fits your situation — you can change it before submitting your enquiry.</p>
        </div>
        <div className="pb-mode-grid">
          {cards.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`pb-mode-card reveal ${mode === c.id ? 'is-selected' : ''}`}
              onClick={() => setMode(c.id)}
              data-conversion={c.conversion}
              aria-pressed={mode === c.id}
            >
              <div className="pb-mode-icon"><c.icon size={26} /></div>
              <h3>{c.label}</h3>
              <p>{c.text}</p>
              <span className="pb-mode-cta">
                {mode === c.id ? (<><Check size={16} /> Selected</>) : c.cta}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------- CATEGORIES + SEARCH + GRID -------------------- */

function PujaSelection({ mode, selected, onSelect, onScrollForm }) {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PUJAS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (!q) return true
      return p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || CATEGORY_NAME[p.category].toLowerCase().includes(q)
    })
  }, [category, search])

  const groups = useMemo(() => {
    if (category !== 'all') return [{ id: category, label: CATEGORY_NAME[category], items: filtered }]
    // Group by category, preserving CATEGORIES order (skip 'all')
    return CATEGORIES.filter((c) => c.id !== 'all')
      .map((c) => ({ id: c.id, label: c.label, items: filtered.filter((p) => p.category === c.id) }))
      .filter((g) => g.items.length > 0)
  }, [filtered, category])

  return (
    <section className="mdp-section mdp-band-cream" id="pujas">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Step 02</span>
          <h2>Choose Your Puja</h2>
          <p>{PUJAS.length} traditional Pujas across five categories. Use search or filters to find yours quickly.</p>
        </div>

        <div className="pb-toolbar reveal">
          <div className="pb-search">
            <Search size={16} />
            <input
              type="search"
              placeholder="Search Puja…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search Puja"
            />
          </div>
          <div className="pb-chips" role="tablist" aria-label="Puja categories">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.id}
                className={`pb-chip ${category === c.id ? 'is-active' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="pb-empty reveal">
            <Info size={20} />
            <p>No Puja found. Please try another search.</p>
          </div>
        ) : (
          groups.map((g) => (
            <div className="pb-group" key={g.id}>
              <div className="pb-group-head">
                <h3>{g.label}</h3>
                <span>{g.items.length} {g.items.length === 1 ? 'Puja' : 'Pujas'}</span>
              </div>
              <div className="pb-grid">
                {g.items.map((p) => (
                  <article
                    key={p.id}
                    className={`pb-card reveal ${selected?.id === p.id ? 'is-selected' : ''}`}
                  >
                    <div className="pb-card-img">
                      <img src={p.img} alt={p.name} loading="lazy" />
                      <span className="pb-card-cat">{CATEGORY_NAME[p.category]}</span>
                    </div>
                    <div className="pb-card-body">
                      <h4>{p.name}</h4>
                      <p>{p.desc}</p>
                      <button
                        type="button"
                        className={`btn ${selected?.id === p.id ? 'btn-gold' : 'btn-primary'} pb-card-cta`}
                        onClick={() => { onSelect(p); onScrollForm() }}
                        data-conversion="puja-selection"
                        aria-pressed={selected?.id === p.id}
                        disabled={!mode}
                        title={!mode ? 'Please choose Online or Offline first' : ''}
                      >
                        {selected?.id === p.id ? (<><Check size={14} /> Selected</>) : 'Select Puja'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
        {!mode && (
          <div className="pb-hint reveal">
            <Info size={16} /> Please choose <strong>Online</strong> or <strong>Offline at Home</strong> above before selecting a Puja.
          </div>
        )}
      </div>
    </section>
  )
}

/* -------------------- BOOKING FORM + SUMMARY + CONFIRMATION -------------------- */

const emptyForm = {
  name: '', phone: '', email: '', city: '', country: '', address: '',
  date: '', time: '', message: ''
}

function BookingArea({ mode, selectedPuja, formRef }) {
  const [step, setStep] = useState('form') // form | summary | submitted
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value })
    if (errors[k]) setErrors({ ...errors, [k]: null })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.'
    else if (!/^[+0-9\s\-()]{7,}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email.'
    if (!form.city.trim()) e.city = mode === 'online' ? 'Please enter your city or country.' : 'Please enter your city.'
    if (mode === 'offline' && !form.address.trim()) e.address = 'Please enter the full address for the Puja.'
    if (!form.date) e.date = 'Please select a preferred date.'
    return e
  }

  const onReview = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStep('summary')
  }

  const onSubmit = () => {
    const modeLabel = mode === 'online' ? 'Online Puja' : 'Offline Puja at Home'
    const msg = [
      `Puja enquiry from ${form.name}`,
      `Puja: ${selectedPuja.name}`,
      `Mode: ${modeLabel}`,
      `Preferred date: ${form.date}${form.time ? ' at ' + form.time : ''}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      mode === 'online' ? `City / Country: ${form.city}${form.country ? ', ' + form.country : ''}` : `City: ${form.city}`,
      mode === 'offline' && `Address: ${form.address}`,
      form.message && `Message: ${form.message}`
    ].filter(Boolean).join('\n')
    const url = `${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener')
    setStep('submitted')
  }

  // Guard: if selectedPuja was cleared while form was active, drop back to form step but keep values
  useEffect(() => {
    if (!selectedPuja && step !== 'form') setStep('form')
  }, [selectedPuja, step])

  const modeLabel = mode === 'online' ? 'Online Puja' : mode === 'offline' ? 'Offline Puja at Home' : '—'

  return (
    <section className="mdp-section" id="booking" ref={formRef}>
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Step 03</span>
          <h2>{step === 'submitted' ? 'Your Puja Enquiry Has Been Received' : step === 'summary' ? 'Your Puja Request' : 'Complete Your Puja Enquiry'}</h2>
          {step === 'form' && <p>Share your details — we&rsquo;ll respond over your preferred channel before anything is confirmed.</p>}
        </div>

        {!selectedPuja ? (
          <div className="pb-empty reveal">
            <Info size={20} />
            <p>Select a Puja above to open the enquiry form.</p>
          </div>
        ) : (
          <div className="pb-booking-card reveal">
            <div className="pb-booking-head">
              <div>
                <div className="pb-booking-label">Selected Puja</div>
                <div className="pb-booking-value">{selectedPuja.name}</div>
              </div>
              <div>
                <div className="pb-booking-label">Puja Mode</div>
                <div className="pb-booking-value">{modeLabel}</div>
              </div>
            </div>

            {step === 'form' && (
              <form className="mdp-form" onSubmit={onReview} noValidate data-conversion="puja-enquiry">
                <div className="mdp-form-row">
                  <label>
                    <span>Full Name*</span>
                    <input value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" aria-invalid={!!errors.name} />
                    {errors.name && <span className="contact-form-err">{errors.name}</span>}
                  </label>
                  <label>
                    <span>Phone Number*</span>
                    <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 …" autoComplete="tel" aria-invalid={!!errors.phone} />
                    {errors.phone && <span className="contact-form-err">{errors.phone}</span>}
                  </label>
                </div>
                <div className="mdp-form-row">
                  <label>
                    <span>Email Address</span>
                    <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email} />
                    {errors.email && <span className="contact-form-err">{errors.email}</span>}
                  </label>
                  <label>
                    <span>{mode === 'online' ? 'City / Country*' : 'City*'}</span>
                    <input value={form.city} onChange={set('city')} placeholder={mode === 'online' ? 'City, Country' : 'City'} aria-invalid={!!errors.city} />
                    {errors.city && <span className="contact-form-err">{errors.city}</span>}
                  </label>
                </div>

                {mode === 'offline' && (
                  <label className="mdp-form-full">
                    <span>Full Address*</span>
                    <input value={form.address} onChange={set('address')} placeholder="House / street / area / landmark" aria-invalid={!!errors.address} />
                    {errors.address && <span className="contact-form-err">{errors.address}</span>}
                  </label>
                )}

                <div className="mdp-form-row">
                  <label>
                    <span>Preferred Date*</span>
                    <input type="date" value={form.date} onChange={set('date')} aria-invalid={!!errors.date} min={new Date().toISOString().slice(0,10)} />
                    {errors.date && <span className="contact-form-err">{errors.date}</span>}
                  </label>
                  <label>
                    <span>Preferred Time</span>
                    <input type="time" value={form.time} onChange={set('time')} />
                  </label>
                </div>

                <label className="mdp-form-full">
                  <span>Additional Message</span>
                  <textarea rows={3} value={form.message} onChange={set('message')} placeholder="Anything you would like Pandit Ji to know (optional)" />
                </label>

                <div className="mdp-form-footer">
                  <p className="mdp-form-privacy"><ShieldCheck size={14} /> Enquiry only — nothing is booked until Pandit Ji confirms with you.</p>
                  <button type="submit" className="btn btn-primary" data-conversion="puja-enquiry">
                    Review Details <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {step === 'summary' && (
              <div className="pb-summary">
                <ul className="pb-summary-list">
                  <li><span>Puja</span><strong>{selectedPuja.name}</strong></li>
                  <li><span>Mode</span><strong>{modeLabel}</strong></li>
                  <li><span>Preferred Date</span><strong>{form.date || '—'}</strong></li>
                  <li><span>Preferred Time</span><strong>{form.time || '—'}</strong></li>
                  <li><span>Name</span><strong>{form.name}</strong></li>
                  <li><span>Phone</span><strong>{form.phone}</strong></li>
                  {form.email && <li><span>Email</span><strong>{form.email}</strong></li>}
                  <li><span>{mode === 'online' ? 'City / Country' : 'City'}</span><strong>{form.city}</strong></li>
                  {mode === 'offline' && form.address && <li><span>Address</span><strong>{form.address}</strong></li>}
                  {form.message && <li><span>Message</span><strong>{form.message}</strong></li>}
                </ul>
                <div className="pb-summary-actions">
                  <button type="button" className="btn btn-ghost" onClick={() => setStep('form')}>
                    <ArrowLeft size={16} /> Edit Details
                  </button>
                  <button type="button" className="btn btn-primary" onClick={onSubmit} data-conversion="puja-enquiry">
                    Submit Puja Enquiry <Send size={16} />
                  </button>
                </div>
              </div>
            )}

            {step === 'submitted' && (
              <div className="pb-success">
                <div className="pb-success-icon"><ShieldCheck size={26} /></div>
                <h3>Your Puja Enquiry Has Been Received</h3>
                <p>Thank you for contacting Astro Shiv Shakti Ujjain. We will contact you regarding your selected Puja, preferred date and other details.</p>
                <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 18 }}>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp" data-conversion="whatsapp">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a href={`tel:${PHONE}`} className="btn btn-primary" data-conversion="phone">
                    <Phone size={16} /> Call Pandit Ji
                  </a>
                </div>
                <button
                  type="button"
                  className="pb-restart"
                  onClick={() => { setForm(emptyForm); setStep('form') }}
                >
                  Submit another enquiry
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

/* -------------------- SPEAK BEFORE BOOKING -------------------- */

function SpeakBand() {
  return (
    <section className="mdp-cta-band">
      <div className="container mdp-cta-inner reveal">
        <span className="eyebrow">Speak With Pandit Ji</span>
        <h2>Not Sure Which Puja Is Right for You?</h2>
        <p>Speak with Pandit Ji before booking. Share your requirement and understand the appropriate traditional Puja or guidance for your situation.</p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary" data-conversion="phone"><Phone size={16} /> Call Pandit Ji</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary" data-conversion="whatsapp"><MessageCircle size={16} /> WhatsApp Us</a>
        </div>
        <a href={`tel:${PHONE}`} className="mdp-cta-number" data-conversion="phone">{PHONE_DISPLAY}</a>
        <p className="mdp-hero-tagline" style={{ marginTop: 8 }}><em>Pehle Baat Karein, Phir Puja Karwayein.</em></p>
      </div>
    </section>
  )
}

/* -------------------- HOW IT WORKS -------------------- */

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Choose Your Puja', text: 'Select from the available traditional Puja services.' },
    { n: '02', title: 'Choose Your Mode', text: 'Select Online Puja or Offline Puja at Home.' },
    { n: '03', title: 'Share Your Details', text: 'Provide your preferred date, location and requirement.' },
    { n: '04', title: 'Discuss & Confirm', text: 'Our team will contact you to discuss the details before confirmation.' }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Simple &amp; Clear</span>
          <h2>How It Works</h2>
          <p>Four calm steps — from choosing your Puja to a personal confirmation.</p>
        </div>
        <div className="pb-steps">
          {steps.map((s) => (
            <div className="pb-step reveal" key={s.n}>
              <div className="pb-step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------- FAQ -------------------- */

const FAQS = [
  { q: 'Can I choose between Online and Offline Puja?', a: 'Yes. Select your preferred mode while submitting your Puja enquiry. Offline home Puja is subject to location and availability.' },
  { q: 'Can I choose a specific Puja?', a: 'Yes. You can select from the available Puja services on this page.' },
  { q: 'Can I speak with Pandit Ji before booking?', a: 'Yes. You can contact Pandit Ji to discuss your requirement before deciding on a Puja.' },
  { q: 'Can I request a preferred date?', a: 'Yes. You can provide your preferred date, which will be subject to availability and confirmation.' },
  { q: 'Is Offline Puja at Home available everywhere?', a: 'Offline home Puja depends on location and service availability. Please contact us with your location for confirmation.' }
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mdp-section">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item reveal ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <ChevronDown size={20} className="chev" />
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------- FINAL CTA + MOBILE BAR -------------------- */

function FinalCTA() {
  return (
    <section className="mdp-final">
      <div className="container reveal">
        <span className="eyebrow">Talk to Pandit Ji</span>
        <h2>Have a Question About Your Puja?</h2>
        <p>Every situation is different. Speak with Pandit Ji before making a decision.</p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary" data-conversion="phone"><Phone size={16} /> {PHONE_DISPLAY}</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary" data-conversion="whatsapp"><MessageCircle size={16} /> WhatsApp Us</a>
        </div>
      </div>
    </section>
  )
}

function PbMobileCTA() {
  const scrollBook = (e) => {
    e.preventDefault()
    const el = document.getElementById('mode') || document.getElementById('pujas') || document.getElementById('booking')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="contact-mobile-cta" role="navigation" aria-label="Puja booking actions">
      <a href={`tel:${PHONE}`} className="call" data-conversion="phone"><Phone size={16} /> Call</a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="wa" data-conversion="whatsapp"><MessageCircle size={16} /> WhatsApp</a>
      <a href="#mode" onClick={scrollBook} className="enq"><Calendar size={16} /> Book</a>
    </div>
  )
}

/* -------------------- PAGE -------------------- */

export default function PujaBooking() {
  useSeo()
  const [mode, setMode] = useState(null)
  const [selectedPuja, setSelectedPuja] = useState(null)
  const modeRef = useRef(null)
  const formRef = useRef(null)

  const scrollToMode = () => {
    modeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToForm = () => {
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
  }

  return (
    <div className="mdp-page pb-page">
      <Hero onStart={scrollToMode} />
      <div ref={modeRef}><ModeSelect mode={mode} setMode={setMode} /></div>
      <PujaSelection mode={mode} selected={selectedPuja} onSelect={setSelectedPuja} onScrollForm={scrollToForm} />
      <BookingArea mode={mode} selectedPuja={selectedPuja} formRef={formRef} />
      <SpeakBand />
      <HowItWorks />
      <Faq />
      <FinalCTA />
      <PbMobileCTA />
    </div>
  )
}
