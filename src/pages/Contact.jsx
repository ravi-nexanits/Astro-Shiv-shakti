import { useEffect, useState } from 'react'
import {
  Phone, MessageCircle, Mail, MapPin, ChevronDown,
  Check, ShieldCheck, ArrowRight, Landmark, Flame, BookOpen, Lock, Send
} from 'lucide-react'
import siddhavatImg from '../assets/images/siddhvat-1024x768.webp'

const PHONE = '+919244300875'
const PHONE_DISPLAY = '+91 92443 00875'
const WHATSAPP = 'https://wa.me/919244300875'
const EMAIL = 'vyasyasvant4070@gmail.com'
const MAPS_URL = 'https://www.google.com/maps?q=Siddhavat+Ghat+Ujjain'

function useSeo() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Contact Astro Shiv Shakti Ujjain — Talk to Pandit Ji'

    let meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'Talk to Pandit Ji about Puja, Jyotish or spiritual guidance. Call, WhatsApp or email Astro Shiv Shakti Ujjain — based at Siddhavat Ghat, Ujjain.'
    )

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://astroshivshaktiujjain.com/contact')

    return () => {
      document.title = prevTitle
      if (prevDesc && meta) meta.setAttribute('content', prevDesc)
    }
  }, [])
}

/* -------------------- SECTIONS -------------------- */

function Hero() {
  return (
    <section className="mdp-hero contact-hero">
      <div className="container contact-hero-inner reveal">
        <span className="eyebrow">
          <span aria-hidden="true">🕉️</span>
          <span>Astro Shiv Shakti Ujjain</span>
        </span>
        <h1>Talk to Pandit Ji</h1>
        <p className="mdp-lead">
          Have a question about Puja, Jyotish or spiritual guidance? Speak with us
          directly and discuss your requirement before deciding on the appropriate
          traditional path.
        </p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary" data-conversion="phone">
            <Phone size={16} /> Call Pandit Ji
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary" data-conversion="whatsapp">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

function QuickCards() {
  const cards = [
    {
      icon: Phone,
      label: 'Call Us',
      value: PHONE_DISPLAY,
      cta: 'Call Now',
      href: `tel:${PHONE}`,
      conversion: 'phone'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with Pandit Ji',
      cta: 'WhatsApp Us',
      href: WHATSAPP,
      external: true,
      variant: 'whatsapp',
      conversion: 'whatsapp'
    },
    {
      icon: Mail,
      label: 'Email',
      value: EMAIL,
      cta: 'Send Email',
      href: `mailto:${EMAIL}`
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Siddhavat Ghat, Ganesh Nagar, Ujjain, Madhya Pradesh – 456003',
      cta: 'View Location',
      href: MAPS_URL,
      external: true
    }
  ]
  return (
    <section className="mdp-section contact-cards-section">
      <div className="container">
        <div className="contact-cards">
          {cards.map((c) => (
            <div className="contact-card reveal" key={c.label}>
              <div className="contact-card-icon"><c.icon size={22} /></div>
              <div className="contact-card-label">{c.label}</div>
              <div className="contact-card-value">{c.value}</div>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className={`btn ${c.variant === 'whatsapp' ? 'btn-whatsapp' : 'btn-primary'} contact-card-cta`}
                data-conversion={c.conversion}
              >
                {c.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  'Mangal Dosh Puja',
  'Kaal Sarp Dosh Puja',
  'Rudrabhishek',
  'Mahamrityunjay Puja',
  'Kumbh & Ark Vivah',
  'Guru Chandal Dosh Puja',
  'Angarak Dosh Puja',
  'Kundli / Jyotish Consultation',
  'Vastu Guidance',
  'Other'
]

function EnquirySection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
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
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Please describe your requirement in a few words.'
    return e
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const msg = [
      `Contact enquiry from ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.service && `Service: ${form.service}`,
      '',
      form.message
    ].filter(Boolean).join('\n')
    const url = `${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener')
    setSubmitted(true)
  }
  return (
    <section className="mdp-section mdp-band-cream" id="enquiry">
      <div className="container contact-enquiry">
        <div className="contact-enquiry-form reveal">
          <div className="section-head" style={{ textAlign: 'left', margin: 0, marginBottom: 24 }}>
            <span className="eyebrow dark">Enquiry</span>
            <h2>Discuss Your Requirement</h2>
            <p>Share your requirement with us. Whether you are looking for a Puja, Jyotish consultation or spiritual guidance, you can contact us directly.</p>
          </div>
          {submitted ? (
            <div className="mdp-form-success">
              <ShieldCheck size={22} />
              <div>
                <h4>Thank you — we've received your enquiry.</h4>
                <p>Pandit Ji will respond over your preferred channel. For urgent enquiries, call <a href={`tel:${PHONE}`} data-conversion="phone">{PHONE_DISPLAY}</a>.</p>
              </div>
            </div>
          ) : (
            <form className="mdp-form" onSubmit={onSubmit} noValidate data-conversion="lead-form">
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
                  <span>Select Service</span>
                  <select value={form.service} onChange={set('service')}>
                    <option value="">Choose a service…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>
              <label className="mdp-form-full">
                <span>Message*</span>
                <textarea rows={4} value={form.message} onChange={set('message')} placeholder="Briefly describe your requirement or question" aria-invalid={!!errors.message} />
                {errors.message && <span className="contact-form-err">{errors.message}</span>}
              </label>
              <div className="mdp-form-footer">
                <p className="mdp-form-privacy">
                  <Lock size={14} /> Your information is used only to respond to your enquiry.
                </p>
                <button type="submit" className="btn btn-primary" data-conversion="lead-form">
                  <Send size={16} /> Send Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
        <aside className="contact-info reveal">
          <span className="eyebrow dark">Contact</span>
          <h3>Connect With Astro Shiv Shakti Ujjain</h3>
          <ul className="contact-info-list">
            <li>
              <span className="contact-info-icon"><Phone size={18} /></span>
              <div>
                <div className="contact-info-label">Phone</div>
                <a href={`tel:${PHONE}`} data-conversion="phone">{PHONE_DISPLAY}</a>
              </div>
            </li>
            <li>
              <span className="contact-info-icon"><Mail size={18} /></span>
              <div>
                <div className="contact-info-label">Email</div>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </li>
            <li>
              <span className="contact-info-icon"><MapPin size={18} /></span>
              <div>
                <div className="contact-info-label">Address</div>
                <span>Siddhavat Ghat,<br />Ganesh Nagar, Ujjain,<br />Madhya Pradesh – 456003</span>
              </div>
            </li>
            <li>
              <span className="contact-info-icon"><MessageCircle size={18} /></span>
              <div>
                <div className="contact-info-label">Consultation</div>
                <span>Phone &amp; Video Call Available</span>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function UjjainSection() {
  return (
    <section className="mdp-section">
      <div className="container mdp-two">
        <div className="reveal">
          <span className="eyebrow dark">Location</span>
          <h2>Based in Ujjain</h2>
          <p>
            Astro Shiv Shakti Ujjain is based at <strong>Siddhavat Ghat, Ujjain</strong>,
            with a focus on traditional Puja, Jyotish and spiritual guidance.
          </p>
          <ul className="mdp-icon-list">
            <li><Landmark size={18} /><span>Siddhavat Ghat, Ganesh Nagar, Ujjain</span></li>
            <li><Flame size={18} /><span>Connected with the spiritual heritage of Mahakal Ujjain</span></li>
            <li><BookOpen size={18} /><span>Traditional Vedic practices and Shastranusar Vidhi</span></li>
          </ul>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
            View on Google Maps <ArrowRight size={14} />
          </a>
        </div>
        <div className="mdp-photo reveal">
          <img src={siddhavatImg} alt="Siddhavat Ghat, Ujjain — Astro Shiv Shakti Ujjain location" />
        </div>
      </div>
    </section>
  )
}

function HowToConnect() {
  const steps = [
    { n: '01', title: 'Contact', text: 'Call or WhatsApp and share your requirement.' },
    { n: '02', title: 'Discuss', text: 'Speak with Pandit Ji and explain your concern.' },
    { n: '03', title: 'Get Guidance', text: 'Understand the appropriate Puja, consultation or next step.' }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Simple &amp; Clear</span>
          <h2>How to Connect With Us</h2>
          <p>A calm three-step conversation — from your first call to the guidance you need.</p>
        </div>
        <div className="contact-steps">
          {steps.map((s) => (
            <div className="contact-step reveal" key={s.n}>
              <div className="contact-step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  { q: 'Can I speak with Pandit Ji before booking a Puja?', a: 'Yes. You can discuss your requirement before deciding on a Puja or traditional remedy.' },
  { q: 'Do you provide online consultation?', a: 'Yes. Astrology consultations are available through phone or video call.' },
  { q: 'What services can I enquire about?', a: 'You can enquire about Puja services, Jyotish consultations, Vastu and spiritual guidance.' },
  { q: 'Where are you located?', a: 'Siddhavat Ghat, Ganesh Nagar, Ujjain, Madhya Pradesh – 456003.' },
  { q: 'How can I contact you?', a: `Call or WhatsApp ${PHONE_DISPLAY}.` }
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mdp-section">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the questions we're asked most often.</p>
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

function FinalCTA() {
  return (
    <section className="mdp-final">
      <div className="container reveal">
        <span className="eyebrow">Talk to Pandit Ji</span>
        <h2>Have a Question? Let's Talk.</h2>
        <p>Speak with us about your Puja, Jyotish or spiritual guidance requirement.</p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary" data-conversion="phone">
            <Phone size={16} /> Call Pandit Ji
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary" data-conversion="whatsapp">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
        <p className="mdp-hero-tagline" style={{ marginTop: 20 }}>
          <em>Pehle Baat Karein, Phir Puja Karwayein.</em>
        </p>
      </div>
    </section>
  )
}

function ContactMobileCTA() {
  const enquire = (e) => {
    e.preventDefault()
    const el = document.getElementById('enquiry')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="contact-mobile-cta" role="navigation" aria-label="Contact actions">
      <a href={`tel:${PHONE}`} className="call" data-conversion="phone"><Phone size={16} /> Call</a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="wa" data-conversion="whatsapp"><MessageCircle size={16} /> WhatsApp</a>
      <a href="#enquiry" onClick={enquire} className="enq"><Send size={16} /> Enquire</a>
    </div>
  )
}

export default function Contact() {
  useSeo()
  return (
    <div className="mdp-page contact-page">
      <Hero />
      <QuickCards />
      <EnquirySection />
      <UjjainSection />
      <HowToConnect />
      <Faq />
      <FinalCTA />
      <ContactMobileCTA />
    </div>
  )
}
