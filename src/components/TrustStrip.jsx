import { Flame, HandHeart, Landmark, BookOpen, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Flame, title: 'Vedic Tradition', text: 'Guidance rooted in traditional spiritual knowledge.' },
  { icon: HandHeart, title: 'Personal Attention', text: 'We listen to your requirement before suggesting any traditional practice.' },
  { icon: Landmark, title: 'Ujjain Heritage', text: 'Connected with the sacred spiritual heritage of Ujjain.' },
  { icon: BookOpen, title: 'Clear Guidance', text: 'We explain the purpose and process before proceeding.' },
  { icon: ShieldCheck, title: 'Confidentiality', text: 'Your personal information is treated with respect and privacy.' }
]

export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-grid">
          {ITEMS.map((it) => (
            <div className="trust-item reveal" key={it.title}>
              <div className="trust-icon"><it.icon size={26} /></div>
              <h4>{it.title}</h4>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
