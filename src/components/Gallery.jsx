import { useState } from 'react'
import { X } from 'lucide-react'
import g1 from '../assets/images/Gallery-image1-1.jpg'
import g2 from '../assets/images/Gallery-image1-2.jpg'
import g3 from '../assets/images/Gallery-image1-3.jpg'
import g4 from '../assets/images/Gallery-image1-4.jpg'
import g5 from '../assets/images/Gallery-image1-5.jpg'
import g6 from '../assets/images/Gallery-image1-6.jpg'
import g7 from '../assets/images/Gallery-image1-7.jpg'

const IMAGES = [
  { src: g1, span: 'tall' },
  { src: g2, span: 'wide' },
  { src: g3 },
  { src: g4 },
  { src: g5, span: 'tall' },
  { src: g6 },
  { src: g7, span: 'wide' }
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Gallery</span>
          <h2>Moments &amp; Memories</h2>
          <p>Glimpses from Puja, Anushthan and consultations at Siddhavat Ghat, Ujjain.</p>
        </div>
        <div className="gallery-grid">
          {IMAGES.map((it, i) => (
            <div
              key={i}
              className={`gallery-item photo ${it.span || ''}`}
              onClick={() => setLightbox(it)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightbox(it)}
            >
              <img src={it.src} alt="" loading="lazy" />
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
            <img src={lightbox.src} alt="" />
          </div>
        </div>
      )}
    </section>
  )
}
