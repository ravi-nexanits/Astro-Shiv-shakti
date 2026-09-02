import { useEffect, useState } from 'react'
import {
  Phone, MessageCircle, Check, ChevronDown, X, ArrowRight,
  Flame, Landmark, HandHeart, Lock, ScrollText, Users,
  BookOpen, ShieldCheck, MapPin, Mail, Sparkles, CalendarClock, Info,
  Waves, Feather, Star, HeartHandshake
} from 'lucide-react'
import kaalSarpImg from '../assets/images/kaal sharp dosh 1.png'
import panditImg from '../assets/images/pandit-ji-yashwantji.webp'
import siddhavatImg from '../assets/images/siddhvat-1024x768.webp'
import rudraImg from '../assets/images/Rudrabhishek Puja 1.png'
import g1 from '../assets/images/Gallery-image1-1.jpg'
import g2 from '../assets/images/Gallery-image1-2.jpg'
import g3 from '../assets/images/Gallery-image1-3.jpg'
import g4 from '../assets/images/Gallery-image1-4.jpg'
import g5 from '../assets/images/Gallery-image1-5.jpg'
import g6 from '../assets/images/Gallery-image1-6.jpg'

const PHONE = '+919244300875'
const PHONE_DISPLAY = '+91 92443 00875'
const WHATSAPP = 'https://wa.me/919244300875'
const EMAIL = 'support@astroshivshaktiujjain.com'

function CallBtn({ className = 'btn btn-primary', label = 'Talk to Pandit Ji' }) {
  return (
    <a href={`tel:${PHONE}`} className={className} data-conversion="phone">
      <Phone size={16} /> {label}
    </a>
  )
}
function WaBtn({ className = 'btn btn-secondary', label = 'WhatsApp Consultation' }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={className}
      data-conversion="whatsapp"
    >
      <MessageCircle size={16} /> {label}
    </a>
  )
}

function useSeo() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Kaal Sarp Dosh Puja in Ujjain | Astro Shiv Shakti'

    let meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'Learn about traditional Kaal Sarp Dosh Puja in Ujjain with Astro Shiv Shakti. Discuss your requirement with Pandit Yashwant Vyas Ji before choosing the appropriate traditional Puja.'
    )

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://astroshivshaktiujjain.com/kaal-sarp-dosh-puja')

    // Structured data: LocalBusiness + FAQ
    const scripts = []
    const addSchema = (obj) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-ksp-schema', '1')
      s.textContent = JSON.stringify(obj)
      document.head.appendChild(s)
      scripts.push(s)
    }
    addSchema({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Astro Shiv Shakti Ujjain',
      description: 'Traditional Kaal Sarp Dosh Puja, Vedic Jyotish and Adhyatmik Margdarshan.',
      url: 'https://astroshivshaktiujjain.com/kaal-sarp-dosh-puja',
      telephone: PHONE,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Siddhavat Ghat, Ganesh Nagar',
        addressLocality: 'Ujjain',
        addressRegion: 'Madhya Pradesh',
        postalCode: '456003',
        addressCountry: 'IN'
      }
    })
    addSchema({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    })

    return () => {
      document.title = prevTitle
      if (prevDesc && meta) meta.setAttribute('content', prevDesc)
      scripts.forEach((s) => s.remove())
    }
  }, [])
}

/* -------------------- SECTIONS -------------------- */

function Hero() {
  return (
    <section className="mdp-hero">
      <div className="container mdp-hero-inner">
        <div className="mdp-hero-copy reveal">
          <span className="eyebrow">
            <span aria-hidden="true">🐍</span>
            <span>Kaal Sarp Dosh Puja • Ujjain</span>
          </span>
          <h1>Kaal Sarp Dosh Puja in Ujjain</h1>
          <p className="mdp-hero-sub">
            Traditional Vedic guidance, Naag Pujan, mantra jaap and havan with personal consultation.
          </p>
          <p className="mdp-lead">
            If you are considering Kaal Sarp Dosh Puja, first speak with Pandit Ji to
            understand your concern and the appropriate traditional ritual based on your
            requirements.
          </p>
          <div className="hero-ctas">
            <CallBtn />
            <WaBtn />
          </div>
          <p className="mdp-hero-tagline">
            Personal Guidance · Traditional Vidhi · Ujjain Based
          </p>
          <span className="mdp-hero-badge">Consult First · Decide With Clarity</span>
        </div>
        <div className="mdp-hero-visual reveal">
          <img
            src={kaalSarpImg}
            alt="Traditional Kaal Sarp Dosh Puja arrangement with silver kalash and offerings"
          />
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: Flame, label: 'Traditional Vedic Vidhi' },
    { icon: HandHeart, label: 'Personal Guidance' },
    { icon: MapPin, label: 'Ujjain Based' },
    { icon: BookOpen, label: 'Transparent Process' },
    { icon: Lock, label: 'Respect & Privacy' }
  ]
  return (
    <section className="mdp-trustbar">
      <div className="container mdp-trustbar-inner">
        {items.map((it) => (
          <div className="mdp-trustbar-item" key={it.label}>
            <it.icon size={18} />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function EarlyCTA() {
  return (
    <section className="mdp-cta-band">
      <div className="container mdp-cta-inner reveal">
        <span className="eyebrow">Speak With Pandit Ji</span>
        <h2>Not Sure If This Puja Is Right for You?</h2>
        <p>
          Speak with Pandit Ji first. Share your concern and relevant details so you can
          understand the appropriate traditional Puja or guidance for your situation.
        </p>
        <div className="hero-ctas">
          <CallBtn label="Call Pandit Ji" />
          <WaBtn label="WhatsApp Us" />
        </div>
      </div>
    </section>
  )
}

function WhatIs() {
  return (
    <section className="mdp-section">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Overview</span>
          <h2>What Is Kaal Sarp Dosh?</h2>
        </div>
        <div className="mdp-prose reveal">
          <p>
            According to traditional Vedic astrology, <strong>Kaal Sarp Dosh</strong> is
            a planetary configuration described in a birth chart when the planets are
            positioned between the Rahu and Ketu axis.
          </p>
          <p>
            Different astrologers and traditions may interpret this configuration
            differently. A proper horoscope assessment can help determine whether a
            traditional remedy is considered appropriate for the individual.
          </p>
          <p>
            The recommended first step is a personal consultation with Pandit Ji, so your
            Kundli can be reviewed before any Puja is planned.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhenConsider() {
  const cards = [
    {
      n: '01',
      icon: ScrollText,
      title: 'Kundli-Based Guidance',
      text: 'Understanding the Rahu-Ketu placement in the birth chart.'
    },
    {
      n: '02',
      icon: HandHeart,
      title: 'Repeated Concerns',
      text: 'Discussing recurring personal or professional concerns through the lens of traditional astrology.'
    },
    {
      n: '03',
      icon: Sparkles,
      title: 'Rahu-Ketu Related Guidance',
      text: 'Seeking traditional guidance when Rahu-Ketu placements are considered significant in the horoscope.'
    },
    {
      n: '04',
      icon: Flame,
      title: 'Traditional Spiritual Remedy',
      text: 'Considering a traditional Puja as part of a broader spiritual or astrological approach.'
    }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Who May Consider</span>
          <h2>When Is Kaal Sarp Dosh Puja Considered?</h2>
          <p>
            People may consider this traditional Puja after discussing their birth chart
            and concerns with a knowledgeable practitioner.
          </p>
        </div>
        <div className="ksp-grid-4">
          {cards.map((c) => (
            <div className="ksp-info-card reveal" key={c.n}>
              <div className="ksp-info-num">{c.n}</div>
              <div className="ksp-info-icon"><c.icon size={22} /></div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PujaIncludes() {
  const features = [
    { icon: Waves, title: 'Naag Pujan', text: 'Traditional worship associated with the serpent deities.' },
    { icon: Feather, title: 'Mantra Jaap', text: 'Traditional mantra recitation as part of the ritual.' },
    { icon: Flame, title: 'Havan', text: 'Sacred fire ritual performed as part of the traditional Puja process.' },
    { icon: HeartHandshake, title: 'Sankalp & Guidance', text: 'Personalised ritual guidance based on the purpose of the Puja.' }
  ]
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">The Puja</span>
          <h2>Traditional Kaal Sarp Dosh Puja</h2>
          <p>Traditional Naag Pujan, mantra jaap and havan associated with Kaal Sarp Dosh.</p>
        </div>
        <div className="ksp-features">
          {features.map((f) => (
            <div className="ksp-feature-card reveal" key={f.title}>
              <div className="ksp-feature-icon"><f.icon size={26} /></div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="ksp-note reveal">
          <Info size={18} />
          <p>
            Specific Samagri, mantra count and Muhurat are decided in consultation with
            Pandit Ji based on your requirement — nothing is standardised.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyUjjain() {
  const chips = [
    'Ujjain',
    'Mahakaleshwar',
    'Siddhavat Ghat',
    'Ancient Spiritual Heritage',
    'Traditional Vedic Practices'
  ]
  return (
    <section className="mdp-section mdp-band-dark">
      <div className="container mdp-two">
        <div className="reveal">
          <span className="eyebrow">Ujjain Heritage</span>
          <h2>Why Perform Traditional Pujas in Ujjain?</h2>
          <p>
            Ujjain has a deep connection with traditional Hindu spiritual practices,
            Shiva worship, astrology and Vedic rituals. Astro Shiv Shakti Ujjain serves
            devotees from this sacred city with a focus on traditional rituals, astrology
            and personal spiritual guidance.
          </p>
          <div className="ksp-chips">
            {chips.map((c) => <span className="ksp-chip" key={c}>{c}</span>)}
          </div>
        </div>
        <div className="mdp-photo reveal">
          <img src={siddhavatImg} alt="Siddhavat Ghat, Ujjain — traditional Vedic Puja site" />
        </div>
      </div>
    </section>
  )
}

function WhyAstroShivShakti() {
  const cards = [
    { n: '01', title: 'Listen First', text: 'We encourage you to discuss your concern before deciding on a Puja.' },
    { n: '02', title: 'Personal Guidance', text: 'Pandit Ji personally guides devotees regarding their requirements.' },
    { n: '03', title: 'Traditional Vidhi', text: 'Rituals are approached through traditional Vedic practices.' },
    { n: '04', title: 'Transparent Process', text: 'Muhurat, Samagri, Vidhi and the process are explained before the Puja.' },
    { n: '05', title: 'Ujjain Connection', text: 'Based in Ujjain, a city with a deep spiritual and Vedic heritage.' }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Why Us</span>
          <h2>Why Choose Astro Shiv Shakti Ujjain?</h2>
          <p>Five reasons devotees speak with Pt. Yashwant Vyas Ji before booking a Puja.</p>
        </div>
        <div className="mdp-why-grid">
          {cards.map((c) => (
            <div className="mdp-why-card reveal" key={c.n}>
              <div className="mdp-why-num">{c.n}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPandit() {
  return (
    <section className="mdp-section">
      <div className="container mdp-two">
        <div className="mdp-portrait reveal">
          <img src={panditImg} alt="Pt. Yashwant Vyas Ji — Astro Shiv Shakti Ujjain" />
        </div>
        <div className="reveal">
          <span className="eyebrow dark">Meet Pandit Ji</span>
          <h2>Pt. Yashwant Vyas Ji</h2>
          <p className="mdp-sub">Vedic Karmakand • Jyotish • Adhyatmik Margdarshan</p>
          <p>
            Pt. Yashwant Vyas Ji specialises in Vedic Karmakand, Jyotish and Adhyatmik
            Margdarshan. He comes from Lakhakhedi village, Garoth, Mandsaur (Madhya
            Pradesh) and is based at Siddhavat Ghat, Ujjain.
          </p>
          <h3 className="ksp-sub-h">Specialisations</h3>
          <ul className="mdp-icon-list">
            <li><Flame size={18} /><span>Vedic Karmakand &amp; complex Anushthan</span></li>
            <li><ScrollText size={18} /><span>Falit Jyotish</span></li>
            <li><Landmark size={18} /><span>Vastu Shastra</span></li>
            <li><Sparkles size={18} /><span>Dosh Nivaran Puja</span></li>
            <li><HandHeart size={18} /><span>Personal Spiritual Guidance</span></li>
          </ul>
          <h3 className="ksp-sub-h">Education</h3>
          <ul className="mdp-icon-list">
            <li><BookOpen size={18} /><span>Shri Kayavarneshwar Veda Vidya Peeth, Jhalawar, Rajasthan</span></li>
            <li><BookOpen size={18} /><span>Jyotish &amp; Vastu Shastra — Sandipani Pratishthan, Ujjain</span></li>
          </ul>
          <blockquote className="mdp-quote">
            <em>Pehle sunte hain, samajhte hain, phir sahi raasta batate hain.</em>
          </blockquote>
          <CallBtn className="btn btn-gold" label="Speak With Pandit Ji" />
        </div>
      </div>
    </section>
  )
}

function PujaProcess() {
  const steps = [
    { n: '01', title: 'Baat Karein', text: 'Call or WhatsApp Pandit Ji and explain your concern.' },
    { n: '02', title: 'Samjhein', text: 'Discuss your situation and understand the appropriate traditional Puja or guidance.' },
    { n: '03', title: 'Tayyari', text: 'Understand the Muhurat, Samagri, Vidhi and process before the Puja.' },
    { n: '04', title: 'Puja Sampann', text: 'The Puja is conducted according to the stated traditional procedure.' }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Simple &amp; Clear</span>
          <h2>How Your Puja Journey Works</h2>
          <p>No pressure. Clear guidance. Transparent process.</p>
        </div>
        <div className="ksp-process">
          {steps.map((s, i) => (
            <div className="ksp-process-step reveal" key={s.n}>
              <div className="ksp-process-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              {i < steps.length - 1 && <span className="ksp-process-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <div className="mdp-cta-inner" style={{ marginTop: 36 }}>
          <CallBtn label="Speak With Pandit Ji" />
        </div>
      </div>
    </section>
  )
}

function OnlinePuja() {
  return (
    <section className="mdp-section mdp-band-dark mdp-online">
      <div className="container mdp-two">
        <div className="reveal">
          <span className="eyebrow">Remote Puja</span>
          <h2>Can't Travel to Ujjain?</h2>
          <p>
            Online Puja arrangements may be available, with video-call participation
            according to the current service process. Contact us to understand the
            available options and confirm what applies to your booking.
          </p>
          <ul className="mdp-icon-list">
            <li><MessageCircle size={18} /><span>Enquiry over phone or WhatsApp</span></li>
            <li><CalendarClock size={18} /><span>Muhurat and Samagri discussed in advance</span></li>
            <li><Sparkles size={18} /><span>Puja performed in Ujjain — joined via video call</span></li>
          </ul>
          <div className="hero-ctas">
            <WaBtn className="btn btn-gold" label="Ask About Online Puja" />
            <CallBtn className="btn btn-secondary" label="Call Pandit Ji" />
          </div>
        </div>
        <div className="mdp-photo reveal">
          <img src={rudraImg} alt="Traditional Vedic Puja arrangement in Ujjain" />
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const imgs = [
    { src: g1, alt: 'Traditional Puja arrangement in Ujjain' },
    { src: g2, alt: 'Puja Samagri and offerings' },
    { src: g3, alt: 'Vedic Havan ceremony in Ujjain' },
    { src: g4, alt: 'Traditional Naag Pujan setup' },
    { src: g5, alt: 'Puja and Anushthan in Ujjain' },
    { src: g6, alt: 'Shiva worship and traditional ritual' }
  ]
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Gallery</span>
          <h2>Glimpses of Puja in Ujjain</h2>
          <p>Moments from Puja, Havan and Anushthan at Siddhavat Ghat, Ujjain.</p>
        </div>
        <div className="mdp-gallery">
          {imgs.map((it, i) => (
            <div
              key={i}
              className="mdp-gallery-item reveal"
              onClick={() => setLightbox(it)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightbox(it)}
            >
              <img src={it.src} alt={it.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner photo" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
              <X size={22} />
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </section>
  )
}

const FAQS = [
  {
    q: 'What is Kaal Sarp Dosh?',
    a: 'According to traditional Vedic astrology, Kaal Sarp Dosh is a planetary configuration associated with the Rahu-Ketu axis in a birth chart. Its interpretation can vary by tradition, so personal horoscope guidance is recommended.'
  },
  {
    q: 'Who should consider Kaal Sarp Dosh Puja?',
    a: 'Those who have been advised that the configuration is relevant in their birth chart may discuss the matter with Pandit Ji before deciding whether a traditional Puja is appropriate.'
  },
  {
    q: 'What does the Kaal Sarp Dosh Puja involve?',
    a: 'The service is traditionally associated with Naag Pujan, mantra jaap and havan.'
  },
  {
    q: 'Can I speak with Pandit Ji before booking?',
    a: 'Yes. The Astro Shiv Shakti approach is consultation-first. You can call or WhatsApp to discuss your requirement before deciding on a Puja.'
  },
  {
    q: 'Can the Puja be arranged if I am not in Ujjain?',
    a: 'Online Puja arrangements may be available with video-call participation. Contact us to understand the current process.'
  },
  {
    q: 'How do I know which Puja is appropriate for me?',
    a: 'Discuss your concern and relevant details with Pandit Ji. He can guide you regarding the appropriate traditional ritual or astrology consultation.'
  },
  {
    q: 'Where is Astro Shiv Shakti Ujjain based?',
    a: 'Siddhavat Ghat, Ganesh Nagar, Ujjain, Madhya Pradesh.'
  },
  {
    q: 'How can I contact Pandit Ji?',
    a: `You can call or send a WhatsApp message on ${PHONE_DISPLAY}, or email ${EMAIL}.`
  }
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions devotees ask before booking a Kaal Sarp Dosh Puja.</p>
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
        <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 28 }}>
          <CallBtn label="Call Pandit Ji" />
          <WaBtn label="WhatsApp Pandit Ji" />
        </div>
      </div>
    </section>
  )
}

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', prefer: 'WhatsApp', message: '',
    dob: '', tob: '', pob: ''
  })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    const msg = [
      `Kaal Sarp Dosh Puja enquiry from ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Preferred contact: ${form.prefer}`,
      form.dob && `DOB: ${form.dob}`,
      form.tob && `TOB: ${form.tob}`,
      form.pob && `POB: ${form.pob}`,
      '',
      form.message
    ].filter(Boolean).join('\n')
    // No backend yet — open WhatsApp with prefilled details as a graceful fallback.
    const url = `${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener')
    setSubmitted(true)
  }
  return (
    <section className="mdp-section" id="enquiry">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Enquiry</span>
          <h2>Discuss Your Kaal Sarp Dosh Puja Requirement</h2>
          <p>Speak with us first. Share your requirement and receive guidance regarding the appropriate traditional Puja.</p>
        </div>
        {submitted ? (
          <div className="mdp-form-success reveal">
            <ShieldCheck size={22} />
            <div>
              <h4>Thank you — we've received your enquiry.</h4>
              <p>Pandit Ji will get back to you soon. For urgent enquiries, call <a href={`tel:${PHONE}`} data-conversion="phone">{PHONE_DISPLAY}</a>.</p>
            </div>
          </div>
        ) : (
          <form className="mdp-form reveal" onSubmit={onSubmit} data-conversion="lead-form">
            <div className="mdp-form-row">
              <label>
                <span>Name*</span>
                <input required value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" />
              </label>
              <label>
                <span>Phone Number*</span>
                <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 …" autoComplete="tel" />
              </label>
            </div>
            <div className="mdp-form-row">
              <label>
                <span>Email</span>
                <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" autoComplete="email" />
              </label>
              <label>
                <span>Preferred Contact</span>
                <select value={form.prefer} onChange={set('prefer')}>
                  <option>WhatsApp</option>
                  <option>Phone Call</option>
                  <option>Email</option>
                </select>
              </label>
            </div>
            <label className="mdp-form-full">
              <span>Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={set('message')}
                placeholder="Briefly describe what you would like to discuss with Pandit Ji"
              />
            </label>
            <details className="ksp-optional reveal">
              <summary>Optional: add birth details for Kundli reference</summary>
              <div className="mdp-form-row" style={{ marginTop: 14 }}>
                <label>
                  <span>Date of Birth</span>
                  <input type="date" value={form.dob} onChange={set('dob')} />
                </label>
                <label>
                  <span>Time of Birth</span>
                  <input type="time" value={form.tob} onChange={set('tob')} />
                </label>
              </div>
              <label className="mdp-form-full" style={{ marginTop: 14 }}>
                <span>Place of Birth</span>
                <input value={form.pob} onChange={set('pob')} placeholder="City, State" />
              </label>
            </details>
            <div className="mdp-form-footer">
              <p className="mdp-form-privacy">
                <Lock size={14} /> Your details are used only to respond to your enquiry.
              </p>
              <div className="hero-ctas">
                <button type="submit" className="btn btn-primary" data-conversion="lead-form">
                  Request Puja Guidance <ArrowRight size={16} />
                </button>
                <WaBtn className="btn btn-secondary" label="WhatsApp Pandit Ji" />
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function ContactBlock() {
  return (
    <section className="mdp-section mdp-band-dark" id="contact">
      <div className="container mdp-two">
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h2>Reach Pandit Ji Directly</h2>
          <p>Call, WhatsApp or email — every enquiry is handled personally.</p>
          <ul className="mdp-contact-list">
            <li><Phone size={18} /> <a href={`tel:${PHONE}`} data-conversion="phone">{PHONE_DISPLAY}</a></li>
            <li><MessageCircle size={18} /> <a href={WHATSAPP} target="_blank" rel="noreferrer" data-conversion="whatsapp">WhatsApp on {PHONE_DISPLAY}</a></li>
            <li><Mail size={18} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><MapPin size={18} /> <span>Siddhavat Ghat, Ganesh Nagar,<br />Ujjain, Madhya Pradesh – 456003</span></li>
          </ul>
        </div>
        <div className="mdp-map reveal">
          <iframe
            title="Astro Shiv Shakti Ujjain — Siddhavat Ghat location"
            src="https://www.google.com/maps?q=Siddhavat+Ghat+Ujjain&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
        <h2>First Understand. Then Decide.</h2>
        <p>
          Have questions about Kaal Sarp Dosh Puja? Speak with Pandit Ji to understand
          your concern and the appropriate traditional path.
        </p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary" data-conversion="phone">
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          <WaBtn />
        </div>
        <p className="mdp-hero-tagline" style={{ marginTop: 18 }}>
          Personal Guidance · Traditional Vidhi · Ujjain Based
        </p>
      </div>
    </section>
  )
}

/* -------------------- PAGE -------------------- */

export default function KaalSarpDoshPuja() {
  useSeo()
  return (
    <div className="mdp-page ksp-page">
      <Hero />
      <TrustBar />
      <EarlyCTA />
      <WhatIs />
      <WhenConsider />
      <PujaIncludes />
      <WhyUjjain />
      <WhyAstroShivShakti />
      <AboutPandit />
      <PujaProcess />
      <OnlinePuja />
      <Gallery />
      <Faq />
      <EnquiryForm />
      <ContactBlock />
      <FinalCTA />
    </div>
  )
}
