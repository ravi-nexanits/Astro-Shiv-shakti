import { useState } from 'react'
import { X } from 'lucide-react'

const CATS = ['All', 'Puja', 'Pandit Ji', 'Ujjain', 'Events']

const ITEMS = [
  { cat: 'Puja', label: 'Havan', emoji: '🔥', span: 'tall' },
  { cat: 'Ujjain', label: 'Mahakal Darshan', emoji: '🛕', span: 'wide' },
  { cat: 'Pandit Ji', label: 'Consultation', emoji: '🙏' },
  { cat: 'Puja', label: 'Puja Setup', emoji: '🪔' },
  { cat: 'Events', label: 'Special Anushthan', emoji: '🕉️', span: 'tall' },
  { cat: 'Ujjain', label: 'Ujjain Ghats', emoji: '🌅' },
  { cat: 'Puja', label: 'Aarti', emoji: '🌟' },
  { cat: 'Events', label: 'Community Puja', emoji: '🌺' }
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filtered = active === 'All' ? ITEMS : ITEMS.filter((i) => i.cat === active)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Gallery</span>
          <h2>Moments &amp; Memories</h2>
          <p>Glimpses from Puja, Anushthan and consultations. Replace with real project photos.</p>
        </div>
        <div className="gallery-tabs reveal">
          {CATS.map((c) => (
            <button
              key={c}
              className={`gallery-tab ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filtered.map((it, i) => (
            <div
              key={i}
              className={`gallery-item reveal ${it.span || ''}`}
              onClick={() => setLightbox(it)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightbox(it)}
            >
              <span>{it.emoji}</span>
              <div className="gallery-caption">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
              <X size={22} />
            </button>
            <span>{lightbox.emoji}</span>
          </div>
        </div>
      )}
    </section>
  )
}
