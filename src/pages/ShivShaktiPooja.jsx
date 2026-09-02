import { useEffect, useState } from 'react'
import {
  Phone, MessageCircle, ChevronDown, ArrowRight, Check, Send, Calendar,
  Flame, Landmark, HandHeart, Lock, BookOpen, Sparkles, Star, Video, MapPin
} from 'lucide-react'
import heroImg from '../assets/images/hero.png'
import mahakalImg from '../assets/images/siddhvat-1024x768.webp'
import rudraImg from '../assets/images/Rudrabhishek Puja 1.png'
import mangalImg from '../assets/images/Mangal dosh puja .png'
import kaalSarpImg from '../assets/images/kaal sharp dosh 1.png'
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

const CallBtn = ({ className = 'btn btn-primary', label = 'Talk to Pandit Ji' }) => (
  <a href={`tel:${PHONE}`} className={className} data-cta="call">
    <Phone size={16} /> {label}
  </a>
)
const WaBtn = ({ className = 'btn btn-secondary', label = 'WhatsApp Us' }) => (
  <a href={WHATSAPP} target="_blank" rel="noreferrer" className={className} data-cta="whatsapp">
    <MessageCircle size={16} /> {label}
  </a>
)

function useSeo() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Shiv-Shakti Pooja in Ujjain | Astro Shiv Shakti'
    let meta = document.querySelector('meta[name="description"]')
    const prev = meta?.getAttribute('content')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'Explore traditional Shiv and Shakti Pooja services in Ujjain including Rudrabhishek, Maha Mrityunjaya Jaap, Navchandi Havan, Maha Kali Havan and more. Talk to Pandit Ji for guidance.'
    )
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://astroshivshaktiujjain.com/shiv-shakti-pooja')
    return () => {
      document.title = prevTitle
      if (prev && meta) meta.setAttribute('content', prev)
    }
  }, [])
}

/* -------------------- SECTIONS -------------------- */

function Hero() {
  return (
    <section className="ssp-hero">
      <div className="ssp-hero-bg" aria-hidden="true">
        <img src={heroImg} alt="" />
      </div>
      <div className="container ssp-hero-inner reveal">
        <span className="ssp-hero-ornament" aria-hidden="true">☉ · 🔱 · ☾</span>
        <span className="eyebrow">Shiv • Shakti • Ujjain</span>
        <h1>Shiv-Shakti Pooja</h1>
        <p className="ssp-hero-sub">Sacred Shiv and Shakti Poojas performed with traditional Vidhi in Ujjain</p>
        <p className="ssp-hero-lead">
          Explore traditional Shiva and Shakti worship and discuss your requirement with
          Pandit Ji before choosing the appropriate Puja.
        </p>
        <div className="hero-ctas">
          <CallBtn />
          <a href="/puja-booking" className="btn btn-secondary" data-cta="enquire">
            <Calendar size={16} /> Book a Pooja
          </a>
        </div>
        <a href={`tel:${PHONE}`} className="ssp-hero-phone" data-cta="call">
          <Phone size={14} /> {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}

function Introduction() {
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Introduction</span>
          <h2>The Sacred Tradition of Shiv-Shakti</h2>
          <div className="ssp-gold-divider" aria-hidden="true"></div>
          <p style={{ fontSize: '1.05rem', color: 'var(--dark-text)' }}>
            Ujjain has a deep spiritual association with the worship of Lord Shiva and the
            Divine Mother. Astro Shiv Shakti Ujjain offers traditional Shiv and Shakti
            Pooja services with attention to Vidhi, mantra, sankalp and the requirements
            of each family.
          </p>
        </div>
        <div className="ssp-intro-highlights">
          <div className="ssp-intro-tile reveal">
            <div className="ssp-intro-icon shiv"><span aria-hidden="true">🔱</span></div>
            <h3>Shiv Pooja</h3>
            <p>Traditional worship dedicated to Lord Shiva.</p>
          </div>
          <div className="ssp-intro-tile reveal">
            <div className="ssp-intro-icon shakti"><span aria-hidden="true">✦</span></div>
            <h3>Shakti Pooja</h3>
            <p>Traditional worship dedicated to the Divine Mother.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TempleSection() {
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Ujjain</span>
          <h2>The Sacred Spirit of Ujjain</h2>
          <p style={{ color: 'var(--divine-gold)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Mahakal Mandir &amp; Harsiddhi Mata Mandir
          </p>
        </div>
        <div className="ssp-temple-grid">
          <article className="ssp-temple-card reveal">
            <div className="ssp-temple-img">
              <img src={mahakalImg} alt="Mahakaleshwar Mandir — Ujjain" loading="lazy" />
              <span className="ssp-temple-tag shiv">Shiv</span>
            </div>
            <div className="ssp-temple-body">
              <h3>Mahakaleshwar Mandir</h3>
              <p>Mahakaleshwar is one of Ujjain's most revered Shiva temples and an important part of the city's spiritual identity.</p>
            </div>
          </article>
          <article className="ssp-temple-card reveal">
            <div className="ssp-temple-img">
              <img src={g5} alt="Harsiddhi Mata Mandir — Ujjain" loading="lazy" />
              <span className="ssp-temple-tag shakti">Shakti</span>
            </div>
            <div className="ssp-temple-body">
              <h3>Harsiddhi Mata Mandir</h3>
              <p>Harsiddhi Mata Mandir is one of Ujjain's prominent Shakti temples and an important part of the city's devotional tradition.</p>
            </div>
          </article>
        </div>
        <div className="ssp-temple-cta reveal">
          <a href="#shiv" className="btn btn-gold">
            Explore Shiv-Shakti Pooja <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

const SHIV_PUJAS = [
  { name: 'Rudrabhishek', img: rudraImg, desc: 'Traditional Abhishek of Lord Shiva performed with Rudra Mantra recitation and devotional offerings.', highlights: ['Shiva Abhishek', 'Rudra Mantra', 'Traditional Offerings', 'Sacred Vidhi'] },
  { name: 'Maha Mrityunjaya Jaap', img: g4, desc: 'Traditional recitation of the Mahamrityunjaya Mantra as part of a Shiva-focused spiritual practice.', highlights: ['Mantra Jaap', 'Sankalp', 'Traditional Vidhi', 'Shiva Worship'] },
  { name: 'Maha Mrityunjaya Puja', img: g3, desc: 'Traditional Shiva-focused Puja incorporating Mahamrityunjaya Mantra recitation and devotional rituals.', highlights: ['Shiva Puja', 'Mantra Jaap', 'Sankalp', 'Traditional Vidhi'] },
  { name: 'Shiv Pooja', img: g6, desc: 'Traditional devotional worship dedicated to Lord Shiva, performed according to the appropriate Puja Vidhi.', highlights: ['Shiva Worship', 'Mantra', 'Offerings', 'Sankalp'] },
  { name: 'Navagraha Shanti Puja', img: mangalImg, desc: 'Traditional Graha Shanti ritual associated with the nine planetary deities and devotional worship.', highlights: ['Navagraha Worship', 'Mantra', 'Havan', 'Traditional Vidhi'] },
  { name: 'Other Shiva Rituals', img: g1, desc: 'Speak with Pandit Ji to understand which traditional Shiva-focused Puja may be appropriate for your requirement.', highlights: [], primaryLabel: 'Talk to Pandit Ji' }
]

const SHAKTI_PUJAS = [
  { name: 'Navchandi / Durga Havan', img: mangalImg, desc: 'Traditional Shakti Havan dedicated to Maa Durga and divine feminine energy.', highlights: ['Chandi / Durga Worship', 'Mantra', 'Havan', 'Traditional Vidhi'] },
  { name: 'Maha Kali Havan', img: kaalSarpImg, desc: 'Traditional fire ritual dedicated to Maa Kali.', highlights: ['Maa Kali Worship', 'Mantra', 'Havan', 'Sankalp'] },
  { name: 'Mantra Jaap & Mirchi Havan', img: g2, desc: 'Traditional Maa Bagalamukhi mantra recitation and fire ritual.', highlights: ['Mantra Jaap', 'Mirchi Havan', 'Sankalp', 'Traditional Vidhi'] },
  { name: 'Lalitha Sahasranamam Havan', img: g4, desc: 'Traditional Havan incorporating devotional recitation associated with Lalitha Sahasranamam.', highlights: ['Lalitha Sahasranamam', 'Mantra', 'Havan', 'Devotional Worship'] },
  { name: 'Pratyangira Devi Havan', img: g7, desc: 'Traditional Shakti Havan dedicated to Maa Pratyangira Devi.', highlights: ['Pratyangira Devi Worship', 'Mantra', 'Havan', 'Sankalp'] },
  { name: 'Maa Bagalamukhi Pooja', img: g6, desc: 'Traditional Maa Bagalamukhi worship performed according to the appropriate ritual Vidhi.', highlights: ['Mantra Jaap', 'Sankalp', 'Havan', 'Traditional Vidhi'] }
]

function PujaCard({ p, variant }) {
  return (
    <article className={`ssp-puja-card ${variant}`}>
      <div className="ssp-puja-img">
        <img src={p.img} alt={p.name} loading="lazy" />
      </div>
      <div className="ssp-puja-body">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        {p.highlights?.length > 0 && (
          <ul className="ssp-puja-highlights">
            {p.highlights.map((h) => (
              <li key={h}><Check size={14} /> {h}</li>
            ))}
          </ul>
        )}
        <a href={`tel:${PHONE}`} className={`btn ${variant === 'shiv' ? 'btn-gold' : 'btn-primary'} ssp-puja-cta`} data-cta="call">
          {p.primaryLabel || 'Enquire Now'} <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}

function ShivSection() {
  return (
    <section className="mdp-section mdp-band-dark" id="shiv">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Shiv</span>
          <h2>Shiv Pooja</h2>
          <p style={{ color: 'var(--divine-gold)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Sacred Rituals Dedicated to Lord Shiva
          </p>
        </div>
        <div className="ssp-puja-grid">
          {SHIV_PUJAS.map((p) => (
            <div className="reveal" key={p.name}><PujaCard p={p} variant="shiv" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShaktiSection() {
  return (
    <section className="mdp-section mdp-band-cream ssp-shakti" id="shakti">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Shakti</span>
          <h2>Shakti Pooja</h2>
          <p style={{ color: 'var(--shakti-red)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Sacred Rituals Dedicated to Divine Mother
          </p>
        </div>
        <div className="ssp-puja-grid">
          {SHAKTI_PUJAS.map((p) => (
            <div className="reveal" key={p.name}><PujaCard p={p} variant="shakti" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShivShaktiBridge() {
  return (
    <section className="ssp-bridge">
      <div className="container ssp-bridge-inner reveal">
        <span className="eyebrow">A Timeless Tradition</span>
        <h2>Shiv aur Shakti — Ek Adhyatmik Parampara</h2>
        <p>
          Shiv aur Shakti ki upasana Bharatiya adhyatmik parampara mein ek gahra sthan
          rakhti hai. Apni requirement ke baare mein Pandit Ji se baat karein aur
          appropriate traditional Puja Vidhi ke baare mein margdarshan prapt karein.
        </p>
        <div className="ssp-bridge-grid">
          <div className="ssp-bridge-side shiv">
            <div className="ssp-bridge-badge">SHIV</div>
            <ul>
              <li>Rudrabhishek</li>
              <li>Maha Mrityunjaya Jaap</li>
              <li>Shiv Pooja</li>
            </ul>
          </div>
          <div className="ssp-bridge-divider" aria-hidden="true">
            <span>ॐ</span>
          </div>
          <div className="ssp-bridge-side shakti">
            <div className="ssp-bridge-badge">SHAKTI</div>
            <ul>
              <li>Navchandi / Durga Havan</li>
              <li>Maha Kali Havan</li>
              <li>Bagalamukhi Mantra Jaap</li>
              <li>Pratyangira Devi Havan</li>
            </ul>
          </div>
        </div>
        <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 28 }}>
          <CallBtn label="Discuss Your Pooja Requirement" />
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const cards = [
    { icon: Flame, title: 'Traditional Vidhi', text: 'Rituals approached through traditional Vedic practice.' },
    { icon: HandHeart, title: 'Personal Guidance by Pandit Ji', text: 'Every conversation begins by listening to your requirement.' },
    { icon: Landmark, title: 'Ujjain-Based Spiritual Services', text: 'Rooted in the spiritual heritage of Ujjain.' },
    { icon: Video, title: 'Online Consultation Available', text: 'Phone and video-call consultations available for those outside Ujjain.' }
  ]
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Why Us</span>
          <h2>Why Choose Astro Shiv Shakti Ujjain</h2>
        </div>
        <div className="ssp-why-grid">
          {cards.map((c) => (
            <div className="ssp-why-card reveal" key={c.title}>
              <div className="ssp-why-icon"><c.icon size={22} /></div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Baat Karein', text: 'Call or WhatsApp and explain your requirement.' },
    { n: '02', title: 'Samjhein', text: 'Pandit Ji understands your requirement and guides you.' },
    { n: '03', title: 'Puja Ki Tayyari', text: 'Discuss Muhurat, Vidhi and required Samagri.' },
    { n: '04', title: 'Puja Sampann', text: 'The Puja is performed according to the discussed traditional Vidhi.' }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Simple &amp; Clear</span>
          <h2>Pehle Baat Karein, Phir Pooja Karwayein</h2>
          <p>A calm, guided journey from your first call to the completed Puja.</p>
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

function OnlineUjjain() {
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Where &amp; How</span>
          <h2>Pooja in Ujjain or Online Guidance</h2>
          <p>Availability and participation depends on the specific Puja — Pandit Ji will confirm what applies to your requirement.</p>
        </div>
        <div className="ssp-online-grid">
          <div className="ssp-online-card reveal">
            <div className="ssp-online-icon"><Landmark size={22} /></div>
            <h3>Ujjain-Based Puja</h3>
            <p>
              Traditional Puja and Anushthan performed at Siddhavat Ghat, Ujjain — as per
              the appropriate Vidhi and Muhurat discussed with you in advance.
            </p>
            <a href={`tel:${PHONE}`} className="btn btn-primary" data-cta="call">
              <Phone size={16} /> Talk to Pandit Ji
            </a>
          </div>
          <div className="ssp-online-card reveal">
            <div className="ssp-online-icon"><Video size={22} /></div>
            <h3>Online Consultation / Video Participation</h3>
            <p>
              Where the Puja allows, Sankalp is taken in your name and you can join live
              via video call. Contact us to understand what's possible for your Puja.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary" data-cta="whatsapp">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConsultationCTA() {
  return (
    <section className="mdp-cta-band">
      <div className="container mdp-cta-inner reveal">
        <span className="eyebrow">Speak With Pandit Ji</span>
        <h2>Not Sure Which Pooja Is Right for You?</h2>
        <p>
          Har requirement ke liye ek hi Puja nahi hoti. Apni situation ke baare mein
          Pandit Ji se pehle baat karein aur appropriate traditional Puja ke baare mein
          guidance lein.
        </p>
        <div className="hero-ctas">
          <CallBtn label="Call Pandit Ji" />
          <WaBtn />
        </div>
        <a href={`tel:${PHONE}`} className="mdp-cta-number" data-cta="call">{PHONE_DISPLAY}</a>
      </div>
    </section>
  )
}

const FAQS = [
  { q: 'What is Shiv-Shakti Pooja?', a: 'Shiv-Shakti Pooja refers to traditional devotional worship dedicated to Lord Shiva and the Divine Mother, performed with the appropriate mantra, sankalp and Vidhi.' },
  { q: 'Which Shiv Poojas do you offer?', a: 'Traditional Shiv services include Rudrabhishek, Maha Mrityunjaya Jaap, Maha Mrityunjaya Puja, Shiv Pooja and Navagraha Shanti Puja. Additional Shiva-focused rituals can be discussed with Pandit Ji.' },
  { q: 'Which Shakti Poojas do you offer?', a: 'Traditional Shakti services include Navchandi / Durga Havan, Maha Kali Havan, Lalitha Sahasranamam Havan, Pratyangira Devi Havan, Maa Bagalamukhi Pooja and Mantra Jaap with Mirchi Havan.' },
  { q: 'Can I discuss my requirement before booking?', a: 'Yes. Consultation-first is the approach — call or WhatsApp to discuss your requirement before any booking is confirmed.' },
  { q: 'Do you provide online consultation?', a: 'Yes. Phone and video-call consultations are available for those unable to visit Ujjain in person.' },
  { q: 'Can I participate in the Puja online?', a: 'For certain Pujas, Sankalp is taken in your name and you can join live via video call. Availability depends on the specific Puja — please confirm with Pandit Ji.' },
  { q: 'Are these Pujas performed in Ujjain?', a: 'Yes. Traditional Pujas are performed at Siddhavat Ghat, Ujjain, in the sacred spiritual heritage of the city.' },
  { q: 'How do I choose the appropriate Puja?', a: 'The appropriate Puja is decided after understanding your requirement in a personal consultation with Pandit Ji.' }
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mdp-section mdp-band-cream">
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

function FinalCTA() {
  return (
    <section className="mdp-final">
      <div className="container reveal">
        <span className="eyebrow">Talk to Pandit Ji</span>
        <h2>Begin Your Shiv-Shakti Pooja Journey</h2>
        <p>
          Apni requirement ke baare mein Pandit Ji se baat karein aur traditional Puja
          Vidhi ke baare mein margdarshan prapt karein.
        </p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary" data-cta="call">
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          <WaBtn />
        </div>
      </div>
    </section>
  )
}

function SspMobileCTA() {
  const enquire = (e) => {
    e.preventDefault()
    const el = document.getElementById('shiv') || document.querySelector('.mdp-cta-band')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="contact-mobile-cta" role="navigation" aria-label="Shiv-Shakti actions">
      <a href={`tel:${PHONE}`} className="call" data-cta="call"><Phone size={16} /> Call</a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="wa" data-cta="whatsapp"><MessageCircle size={16} /> WhatsApp</a>
      <a href="#shiv" onClick={enquire} className="enq" data-cta="enquire"><Send size={16} /> Enquire</a>
    </div>
  )
}

export default function ShivShaktiPooja() {
  useSeo()
  return (
    <div className="mdp-page ssp-page">
      <Hero />
      <Introduction />
      <TempleSection />
      <ShivSection />
      <ShaktiSection />
      <ShivShaktiBridge />
      <WhyChoose />
      <HowItWorks />
      <OnlineUjjain />
      <ConsultationCTA />
      <Faq />
      <FinalCTA />
      <SspMobileCTA />
    </div>
  )
}
