import { ScrollText, Hand, Gem, Sparkles, Heart, ArrowRight } from 'lucide-react'

const ITEMS = [
  { icon: ScrollText, title: 'Lagan / Janam Kundli' },
  { icon: Hand, title: 'Hast Rekha / Samudrik' },
  { icon: Gem, title: 'Ratna Jyotish' },
  { icon: Sparkles, title: 'Falit Jyotish' },
  { icon: Heart, title: 'Kundli Milan' }
]

export default function AstrologySection() {
  return (
    <section className="astro" id="astrology">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Astrology</span>
          <h2>Vedic Jyotish for Clarity &amp; Guidance</h2>
          <p>
            Kundli analysis considering date of birth, time of birth, place of birth, planetary
            positions, Dasha, career, relationships and other life areas — over phone or video call.
          </p>
        </div>
        <div className="astro-grid">
          {ITEMS.map((it) => (
            <div className="astro-item reveal" key={it.title}>
              <div className="astro-icon"><it.icon size={22} /></div>
              <h4>{it.title}</h4>
            </div>
          ))}
        </div>
        <div className="astro-cta reveal">
          <a href="tel:+919244300875" className="btn btn-primary">
            Consult Pandit Ji <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
