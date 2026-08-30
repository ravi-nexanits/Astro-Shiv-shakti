import { Phone, ArrowRight } from 'lucide-react'

const FEATURED = [
  {
    glyph: '🔴',
    title: 'Mangal Dosh / Bhat Puja',
    desc: 'Traditional ritual associated with Mangal Dosh and marriage-related concerns, performed according to Shastranusar Vidhi.'
  },
  {
    glyph: '🐍',
    title: 'Kaal Sarp Dosh Puja',
    desc: 'Traditional Naag Pujan, mantra jaap and havan associated with Kaal Sarp Dosh, guided personally by Pandit Ji.'
  },
  {
    glyph: '🕉️',
    title: 'Rudrabhishek',
    desc: 'Shiva Abhishek with Rudri / Rudrashtadhyayi mantra recitation and traditional offerings, in the sacred city of Ujjain.'
  }
]

export default function FeaturedServices() {
  return (
    <section className="services featured">
      <div className="container">
        <div className="section-head featured-head reveal">
          <span className="eyebrow dark">Featured Puja Services</span>
          <h2>Our Most Requested Pujas</h2>
          <p>
            Traditional Pujas most often sought by devotees — performed with proper Vidhi
            and personal guidance from Pandit Ji.
          </p>
        </div>
        <div className="featured-grid">
          {FEATURED.map((f) => (
            <div className="featured-card reveal" key={f.title}>
              <span className="featured-badge">Featured</span>
              <div className="featured-icon" aria-hidden="true">{f.glyph}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="featured-actions">
                <a href="tel:+919244300875" className="btn btn-primary">
                  <Phone size={14} /> Consult Pandit Ji
                </a>
                <a href="#services" className="btn btn-ghost">
                  Know More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
