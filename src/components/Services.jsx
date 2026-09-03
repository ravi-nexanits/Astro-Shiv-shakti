import { Flame, Sparkles, Heart, Star, ScrollText, Home, CalendarClock, Baby, ArrowRight } from 'lucide-react'

const SERVICES = [
  { icon: Flame, title: 'Mahamrityunjay Puja', desc: 'Shiva-focused traditional Anushthan involving Mahamrityunjay mantra jaap and havan.' },
  { icon: Heart, title: 'Kumbh & Ark Vivah', desc: 'Traditional Vedic pre-marriage ritual described in Shastranusar tradition.' },
  { icon: Sparkles, title: 'Guru Chandal Dosh Puja', desc: 'Traditional Vedic Puja associated with the Guru–Rahu combination in a Kundli. Consult a Vedic practitioner for guidance.' },
  { icon: Star, title: 'Angarak Dosh Puja', desc: 'Traditional Graha Shanti-oriented Vedic Puja associated with the Mangal–Rahu combination.' },
  { icon: ScrollText, title: 'Falit & Lagan Kundli', desc: 'Detailed reading of birth chart covering Dasha, career, relationships and other life areas.' },
  { icon: Home, title: 'Vastu Shastra', desc: 'Guidance on home and workplace layout as per traditional Vastu principles.' },
  { icon: CalendarClock, title: 'Muhurat', desc: 'Selection of auspicious dates and timings for important events and new beginnings.' },
  { icon: Baby, title: 'Naam Karan', desc: 'Traditional naming ceremony guidance based on Nakshatra and Vedic tradition.' }
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">All Services</span>
          <h2>Puja • Jyotish • Adhyatmik Margdarshan</h2>
          <p>Traditional practices and personalised guidance for important aspects of life.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card reveal" key={s.title}>
              <div className="service-icon"><s.icon size={24} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="tel:+919244300875" className="service-link">
                Consult Pandit Ji <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
