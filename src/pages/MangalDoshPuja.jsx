import { useEffect, useState } from 'react'
import {
  Phone, MessageCircle, Check, ChevronDown, X, ArrowRight,
  Flame, Landmark, HandHeart, Lock, ScrollText, Users,
  BookOpen, ShieldCheck, MapPin, Mail, Sparkles, CalendarClock, Info
} from 'lucide-react'
import mangalImg from '../assets/images/Mangal dosh puja .png'
import panditImg from '../assets/images/pandit-ji-yashwantji.webp'
import siddhavatImg from '../assets/images/siddhvat-1024x768.webp'
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

const CTA_CALL = (
  <a href={`tel:${PHONE}`} className="btn btn-primary">
    <Phone size={16} /> Call Pandit Ji
  </a>
)
const CTA_WA = (
  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary">
    <MessageCircle size={16} /> WhatsApp Consultation
  </a>
)

function useSeo() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Mangal Dosh Puja in Ujjain | Astro Shiv Shakti'

    let meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'Learn about traditional Mangal Dosh Puja in Ujjain. Explore Vedic astrology guidance, Kundli analysis and Shastranusar Vidhi with Pandit Ji.'
    )

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://astroshivshaktiujjain.com/mangal-dosh-puja')

    return () => {
      document.title = prevTitle
      if (prevDesc && meta) meta.setAttribute('content', prevDesc)
    }
  }, [])
}

function Hero() {
  return (
    <section className="mdp-hero">
      <div className="container mdp-hero-inner">
        <div className="mdp-hero-copy reveal">
          <span className="eyebrow">
            <span aria-hidden="true">🕉️</span>
            <span>Mangal Dosh Puja • Ujjain</span>
          </span>
          <h1>Mangal Dosh Puja in Ujjain</h1>
          <p className="mdp-hero-sub">Traditional Vedic Puja &amp; Personal Guidance by Pandit Ji</p>
          <p className="mdp-lead">
            Learn about the traditional Vedic Puja associated with Mangal Dosh. Speak
            with Pandit Ji to understand your Kundli and explore appropriate traditional
            practices as per Shastranusar Vidhi.
          </p>
          <div className="hero-ctas">{CTA_CALL}{CTA_WA}</div>
          <ul className="mdp-hero-checks">
            <li><Check size={14} /> Personal Consultation</li>
            <li><Check size={14} /> Traditional Vidhi</li>
            <li><Check size={14} /> Ujjain Puja</li>
            <li><Check size={14} /> Confidential Guidance</li>
          </ul>
        </div>
        <div className="mdp-hero-visual reveal">
          <img src={mangalImg} alt="Mangal Dosh Puja setup with traditional Vedic Samagri" />
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: Flame, label: 'Traditional Vedic Vidhi' },
    { icon: MapPin, label: 'Ujjain' },
    { icon: HandHeart, label: 'Personal Guidance' },
    { icon: Lock, label: 'Confidential Consultation' }
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

function WhatIs() {
  return (
    <section className="mdp-section">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Overview</span>
          <h2>What Is Mangal Dosh Puja?</h2>
        </div>
        <div className="mdp-prose reveal">
          <p>
            According to traditional Vedic astrology, <strong>Mangal Dosh</strong>
            (also called Manglik Dosh) refers to a specific placement or influence of the
            planet Mars (Mangal) in a person's birth chart (Kundli). It is considered
            when Mars sits in particular houses, and is traditionally discussed as part
            of Kundli analysis and Vedic astrology guidance.
          </p>
          <p>
            <strong>Mangal Dosh Puja</strong> is a traditional Vedic Anushthan performed
            after Kundli analysis, when Pandit Ji considers the Puja appropriate for the
            individual's situation. The process typically involves Sankalp, mantra jaap,
            traditional Puja Vidhi and Havan — carried out as per Shastranusar practice.
          </p>
          <p>
            Whether this Puja is right for you depends on your individual Kundli. The
            recommended first step is always a personal consultation with Pandit Ji.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhoConsider() {
  const points = [
    'People whose Kundli is identified with a Mangal Dosh placement in traditional astrology',
    'People seeking traditional Vedic astrology guidance or Kundli Milan',
    'Families exploring a traditional Mangal-related Vedic Anushthan',
    'People who want to understand whether this Puja is appropriate for their Kundli'
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Who May Benefit</span>
          <h2>Who May Consider Mangal Dosh Puja?</h2>
          <p>
            Mangal Dosh Puja is not for everyone — it is considered based on individual
            Kundli analysis. Below are situations where devotees often seek guidance.
          </p>
        </div>
        <ul className="mdp-check-list reveal">
          {points.map((p) => (
            <li key={p}>
              <span className="mdp-check-badge"><Check size={16} /></span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mdp-note reveal">
          <Info size={18} />
          <p>
            If you have been advised about Mangal Dosh, consult Pandit Ji to understand
            your individual Kundli before deciding on a Puja.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyUjjain() {
  return (
    <section className="mdp-section mdp-band-dark">
      <div className="container mdp-two">
        <div className="reveal">
          <span className="eyebrow">Ujjain Heritage</span>
          <h2>Why Do Devotees Choose Ujjain for Mangal Dosh Puja?</h2>
          <p>
            Ujjain — the ancient city of Mahakal — is a long-standing centre of Vedic
            tradition and Shaiv worship in India. It is traditionally associated with
            <em> Mangalnath</em>, one of the temples devotees connect with when seeking
            Mangal-related Puja and guidance.
          </p>
          <ul className="mdp-icon-list">
            <li><Landmark size={18} /><span>Rooted in the spiritual heritage of Ujjain</span></li>
            <li><Flame size={18} /><span>Traditional Mangal-related worship and Anushthan</span></li>
            <li><BookOpen size={18} /><span>Puja performed as per Shastranusar Vidhi</span></li>
            <li><MapPin size={18} /><span>Based at Siddhavat Ghat, Ujjain</span></li>
          </ul>
        </div>
        <div className="mdp-photo reveal">
          <img src={siddhavatImg} alt="Siddhavat Ghat, Ujjain — traditional site of Vedic Puja" />
        </div>
      </div>
    </section>
  )
}

function AboutPanditJi() {
  return (
    <section className="mdp-section">
      <div className="container mdp-two">
        <div className="mdp-portrait reveal">
          <img src={panditImg} alt="Pt. Yashwant Vyas — Astro Shiv Shakti Ujjain" />
        </div>
        <div className="reveal">
          <span className="eyebrow dark">Meet Pandit Ji</span>
          <h2>Pt. Yashwant Vyas</h2>
          <p className="mdp-sub">Vedic Karmakand • Jyotish • Adhyatmik Margdarshan • Vastu Shastra</p>
          <p>
            Pt. Yashwant Vyas comes from Lakhakhedi village, Garoth, Mandsaur (Madhya
            Pradesh) and was brought up within a Vedic tradition. He is based at Siddhavat
            Ghat, Ujjain, and offers Puja, Jyotish and personal spiritual guidance rooted
            in Shastranusar Vidhi.
          </p>
          <ul className="mdp-icon-list">
            <li><BookOpen size={18} /><span>Vedic education from Shri Kayavarneshwar Veda Vidya Peeth, Jhalawar</span></li>
            <li><ScrollText size={18} /><span>Jyotish &amp; Vastu Shastra studies at Sandipani Pratishthan, Ujjain</span></li>
            <li><Flame size={18} /><span>Practices Vedic Karmakand, Falit Jyotish, Vastu Shastra and Traditional Anushthan Pujas</span></li>
          </ul>
          <blockquote className="mdp-quote">
            <em>Pehle sunte hain, samajhte hain, phir sahi raasta batate hain.</em>
          </blockquote>
          <a href={`tel:${PHONE}`} className="btn btn-gold">
            <Phone size={16} /> Speak With Pandit Ji
          </a>
        </div>
      </div>
    </section>
  )
}

function PujaProcess() {
  const steps = [
    { n: '01', title: 'Kundli / Birth Details', text: 'Share date, time and place of birth so Pandit Ji can review your Kundli.' },
    { n: '02', title: 'Consultation', text: 'Discuss your concern directly with Pandit Ji and understand whether the Puja is appropriate.' },
    { n: '03', title: 'Sankalp', text: 'On the agreed Muhurat, Sankalp is taken with your name, gotra and intention.' },
    { n: '04', title: 'Mantra & Puja Vidhi', text: 'Traditional Mangal Puja Vidhi and mantra jaap performed as per Shastra.' },
    { n: '05', title: 'Havan & Offerings', text: 'Havan and traditional offerings are performed according to the Puja process.' },
    { n: '06', title: 'Puja Completion & Guidance', text: 'Pandit Ji concludes the Puja and shares guidance for the next steps.' }
  ]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Puja Process</span>
          <h2>How Mangal Dosh Puja Is Performed</h2>
          <p>A simple, honest process — every step is explained to you in advance.</p>
        </div>
        <div className="mdp-steps">
          {steps.map((s) => (
            <div className="mdp-step reveal" key={s.n}>
              <div className="mdp-step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  const items = [
    'Sankalp with your name, gotra and intention',
    'Traditional Mangal Puja Vidhi',
    'Mantra Jaap as per Shastranusar practice',
    'Havan with traditional Samagri',
    'Traditional offerings during the Puja',
    'Personal guidance from Pandit Ji throughout'
  ]
  return (
    <section className="mdp-section">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">What's Included</span>
          <h2>What Is Included in the Traditional Puja Process?</h2>
          <p>The specific Samagri and process are confirmed with you before the Puja begins.</p>
        </div>
        <div className="mdp-highlight-grid">
          {items.map((it) => (
            <div className="mdp-highlight-card reveal" key={it}>
              <span className="mdp-check-badge gold"><Check size={16} /></span>
              <span>{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhenPerformed() {
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Timing</span>
          <h2>When Is Mangal Dosh Puja Considered?</h2>
        </div>
        <div className="mdp-prose reveal">
          <p>
            The right time to consider Mangal Dosh Puja is decided after a Kundli
            consultation. A few common situations:
          </p>
          <ul>
            <li>When your Kundli indicates a Mangal Dosh placement per traditional astrology.</li>
            <li>During Kundli Milan or a consultation with a Vedic practitioner.</li>
            <li>On a traditional Muhurat suggested by Pandit Ji after reviewing your Kundli.</li>
            <li><strong>Tuesday (Mangalvar)</strong> is traditionally considered significant for Mangal-related Puja, but the exact date is chosen based on the individual's Kundli and available Muhurat.</li>
          </ul>
          <p>
            The actual date and process are always confirmed with you after consultation —
            no fixed day guarantees a specific result.
          </p>
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
          <h2>Can't Come to Ujjain?</h2>
          <p>
            If travelling to Ujjain is not possible, contact Pandit Ji to understand the
            available Puja arrangements. Puja can be performed at Siddhavat Ghat in
            Ujjain, with <strong>video-call participation</strong> for the devotee — the
            Sankalp is taken in your name, and you can witness the Puja live.
          </p>
          <ul className="mdp-icon-list">
            <li><MessageCircle size={18} /><span>Enquiry over phone or WhatsApp</span></li>
            <li><CalendarClock size={18} /><span>Muhurat confirmed before booking</span></li>
            <li><Sparkles size={18} /><span>Puja performed in Ujjain, joined via video call</span></li>
          </ul>
          <div className="hero-ctas">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-gold">
              <MessageCircle size={16} /> Ask About Online Puja
            </a>
            <a href={`tel:${PHONE}`} className="btn btn-secondary">
              <Phone size={16} /> Call Pandit Ji
            </a>
          </div>
        </div>
        <div className="mdp-photo reveal">
          <img src={g4} alt="Live Puja arrangement — devotees participate remotely via video call" />
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const cards = [
    { n: '01', title: 'Personal Guidance', text: 'Every consultation begins by listening to your specific situation.' },
    { n: '02', title: 'Traditional Vidhi', text: 'Puja and Anushthan are performed as per Shastranusar practice.' },
    { n: '03', title: 'Ujjain-Based Service', text: 'Based at Siddhavat Ghat, in the sacred heritage of Mahakal Ujjain.' },
    { n: '04', title: 'Clear Process', text: 'Muhurat, Samagri and Vidhi are explained before the Puja begins.' },
    { n: '05', title: 'Confidential Consultation', text: 'Your personal information is handled with respect and discretion.' }
  ]
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Why Us</span>
          <h2>Why Choose Astro Shiv Shakti Ujjain</h2>
          <p>Five reasons devotees speak with Pt. Yashwant Vyas before booking a Puja.</p>
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

function ConsultationCTA() {
  return (
    <section className="mdp-cta-band">
      <div className="container mdp-cta-inner reveal">
        <span className="eyebrow">Before You Book</span>
        <h2>Before Booking, Talk to Pandit Ji</h2>
        <p>
          Every Kundli is different. Share your concern and understand whether Mangal
          Dosh Puja is appropriate for your situation — <em>before</em> making a decision.
        </p>
        <div className="hero-ctas">{CTA_CALL}{CTA_WA}</div>
        <a href={`tel:${PHONE}`} className="mdp-cta-number">{PHONE_DISPLAY}</a>
      </div>
    </section>
  )
}

function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const imgs = [g1, g2, g3, g4, g5, g6]
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Gallery</span>
          <h2>Glimpses of Puja in Ujjain</h2>
          <p>Moments from Puja, Havan and Anushthan at Siddhavat Ghat, Ujjain.</p>
        </div>
        <div className="mdp-gallery">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="mdp-gallery-item reveal"
              onClick={() => setLightbox(src)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightbox(src)}
            >
              <img src={src} alt="" loading="lazy" />
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
            <img src={lightbox} alt="" />
          </div>
        </div>
      )}
    </section>
  )
}

function Testimonials() {
  const items = [
    { initial: 'R', name: '[ADD VERIFIED CUSTOMER REVIEW]', place: 'City, State' },
    { initial: 'S', name: '[ADD VERIFIED CUSTOMER REVIEW]', place: 'City, State' },
    { initial: 'A', name: '[ADD VERIFIED CUSTOMER REVIEW]', place: 'City, State' }
  ]
  return (
    <section className="mdp-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">In Their Words</span>
          <h2>Experiences Shared With Us</h2>
        </div>
        <div className="mdp-testimonial-grid">
          {items.map((t, i) => (
            <div className="mdp-testimonial-card reveal" key={i}>
              <span className="placeholder-tag">Real testimonial to be added</span>
              <p>Add the actual customer's own words here once a verified testimonial is available.</p>
              <div className="mdp-testimonial-meta">
                <div className="mdp-testimonial-avatar">{t.initial}</div>
                <div>
                  <div className="mdp-testimonial-name">{t.name}</div>
                  <div className="mdp-testimonial-place">{t.place}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  { q: 'What is Mangal Dosh according to Vedic astrology?', a: 'According to traditional Vedic astrology, Mangal Dosh (Manglik Dosh) refers to a specific placement of the planet Mars in a person\'s birth chart. It is traditionally discussed as part of Kundli analysis. Its relevance to any individual is discussed during a personal Kundli reading with a Vedic practitioner.' },
  { q: 'Who should consider Mangal Dosh Puja?', a: 'People whose Kundli is identified with a Mangal Dosh placement in traditional astrology, or those seeking traditional Vedic astrology guidance. Whether this Puja is appropriate for you is discussed after Kundli analysis with Pandit Ji.' },
  { q: 'Is Kundli required before booking?', a: 'Yes — a Kundli reading is recommended first. To prepare an accurate Kundli, Pandit Ji needs your date of birth, exact time of birth and place of birth.' },
  { q: 'Can I speak with Pandit Ji before booking?', a: 'Yes. In fact, this is encouraged. Call or WhatsApp Pandit Ji, share your concern, and only proceed with a Puja if it feels appropriate for your situation.' },
  { q: 'Can Mangal Dosh Puja be arranged in Ujjain?', a: 'Yes. Puja is performed at Siddhavat Ghat, Ujjain, following Shastranusar Vidhi.' },
  { q: 'Can I participate through video call?', a: 'Yes. If travelling to Ujjain is not possible, the Sankalp is taken in your name and you can join the Puja live via video call.' },
  { q: 'What details are required for consultation?', a: 'Typically your full name, date of birth, exact time of birth, place of birth, and a brief description of the concern you wish to discuss.' },
  { q: 'How can I book the Puja?', a: 'Call or WhatsApp Pandit Ji on ' + PHONE_DISPLAY + '. After a consultation, Muhurat, Samagri and process are shared, and the booking is confirmed after mutual agreement.' },
  { q: 'Can someone perform the Puja on behalf of a family member?', a: 'Yes. Sankalp can be taken in a family member\'s name with their consent and correct birth details. Discuss this with Pandit Ji so the appropriate arrangement is made.' },
  { q: 'How can I contact Pandit Ji?', a: 'You can call or send a WhatsApp message on ' + PHONE_DISPLAY + ', or email ' + EMAIL + '.' }
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mdp-section mdp-band-cream">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the questions devotees ask most often before booking.</p>
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

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', whatsapp: '', dob: '', tob: '', pob: '', concern: ''
  })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    const msg = [
      `Mangal Dosh Puja enquiry from ${form.name}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${form.whatsapp || form.phone}`,
      `DOB: ${form.dob}, TOB: ${form.tob}, POB: ${form.pob}`,
      `Concern: ${form.concern}`
    ].join('\n')
    // No backend yet — open WhatsApp with prefilled message as a graceful fallback.
    const url = `${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener')
    setSubmitted(true)
  }
  return (
    <section className="mdp-section" id="enquiry">
      <div className="container mdp-narrow">
        <div className="section-head reveal">
          <span className="eyebrow dark">Enquiry</span>
          <h2>Speak With Pandit Ji</h2>
          <p>Share a few details and we'll respond over your preferred contact channel.</p>
        </div>
        {submitted ? (
          <div className="mdp-form-success reveal">
            <ShieldCheck size={22} />
            <div>
              <h4>Thank you — we've received your details.</h4>
              <p>Pandit Ji will get back to you soon. For urgent enquiries, call <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.</p>
            </div>
          </div>
        ) : (
          <form className="mdp-form reveal" onSubmit={onSubmit}>
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
                <span>WhatsApp Number</span>
                <input type="tel" value={form.whatsapp} onChange={set('whatsapp')} placeholder="If different from phone" />
              </label>
              <label>
                <span>Date of Birth</span>
                <input type="date" value={form.dob} onChange={set('dob')} />
              </label>
            </div>
            <div className="mdp-form-row">
              <label>
                <span>Time of Birth</span>
                <input type="time" value={form.tob} onChange={set('tob')} />
              </label>
              <label>
                <span>Place of Birth</span>
                <input value={form.pob} onChange={set('pob')} placeholder="City, State" />
              </label>
            </div>
            <label className="mdp-form-full">
              <span>Your Concern</span>
              <textarea rows={4} value={form.concern} onChange={set('concern')} placeholder="Briefly describe what you would like to discuss with Pandit Ji" />
            </label>
            <div className="mdp-form-footer">
              <p className="mdp-form-privacy">
                <Lock size={14} /> Your details are used only to respond to your consultation request.
              </p>
              <button type="submit" className="btn btn-primary">
                Request Consultation <ArrowRight size={16} />
              </button>
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
            <li><Phone size={18} /> <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li><MessageCircle size={18} /> <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp on {PHONE_DISPLAY}</a></li>
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
        <h2>Have Questions About Mangal Dosh?</h2>
        <p>
          Don't make a decision based only on what you read online. Speak with Pandit Ji,
          discuss your Kundli and understand the appropriate traditional guidance.
        </p>
        <div className="hero-ctas">
          <a href={`tel:${PHONE}`} className="btn btn-primary">
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          {CTA_WA}
        </div>
      </div>
    </section>
  )
}

export default function MangalDoshPuja() {
  useSeo()
  return (
    <div className="mdp-page">
      <Hero />
      <TrustBar />
      <WhatIs />
      <WhoConsider />
      <WhyUjjain />
      <AboutPanditJi />
      <PujaProcess />
      <Highlights />
      <WhenPerformed />
      <OnlinePuja />
      <WhyChoose />
      <ConsultationCTA />
      <Gallery />
      <Testimonials />
      <Faq />
      <EnquiryForm />
      <ContactBlock />
      <FinalCTA />
    </div>
  )
}
