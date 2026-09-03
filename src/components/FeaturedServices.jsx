import { Phone, ArrowRight } from 'lucide-react'
import mangalImg from '../assets/images/Mangal dosh puja .png'
import kaalSarpImg from '../assets/images/kaal sharp dosh 1.png'
import rudraImg from '../assets/images/Rudrabhishek Puja 1.png'

const FEATURED = [
  {
    img: mangalImg,
    title: 'Traditional Mangal Dosh Puja',
    desc: 'Traditional Vedic Puja performed as per Shastranusar Vidhi. Consult a Vedic practitioner for personal guidance based on your Kundli.'
  },
  {
    img: kaalSarpImg,
    title: 'Traditional Kaal Sarp Dosh Puja',
    desc: 'Traditional Naag Pujan, mantra jaap and havan performed as per Shastranusar Vidhi, in the sacred city of Ujjain.'
  },
  {
    img: rudraImg,
    title: 'Rudrabhishek',
    desc: 'Traditional Shiva Abhishek with Rudri / Rudrashtadhyayi mantra recitation and devotional offerings, performed as per Vedic tradition.'
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
              <div className="featured-image">
                <img src={f.img} alt={f.title} loading="lazy" />
              </div>
              <div className="featured-content">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
