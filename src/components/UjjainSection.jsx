import { MapPin, Landmark, BookOpen, Flame } from 'lucide-react'

const F = [
  { icon: Landmark, text: 'Based at Siddhavat Ghat, Ujjain' },
  { icon: Flame, text: 'Guidance connected with the spiritual heritage of Mahakaleshwar' },
  { icon: BookOpen, text: 'Traditional Vedic rituals and Shastranusar Vidhi' },
  { icon: MapPin, text: 'Siddhavat Ghat, Ganesh Nagar, Ujjain, Madhya Pradesh – 456003' }
]

export default function UjjainSection() {
  return (
    <section className="ujjain">
      <div className="container ujjain-inner">
        <div className="reveal">
          <span className="eyebrow">Ujjain Heritage</span>
          <h2>Guidance Rooted in the Spiritual Heritage of Ujjain</h2>
          <p>
            Ujjain — the sacred city of Mahakal — has been a centre of Vedic knowledge,
            astronomy and Shaiv tradition for centuries. Astro Shiv Shakti Ujjain draws
            quietly from this heritage and the traditional practices around Siddhavat Ghat
            and its ancient temples.
          </p>
          <ul className="ujjain-features">
            {F.map((f) => (
              <li key={f.text}><f.icon size={18} /><span>{f.text}</span></li>
            ))}
          </ul>
        </div>
        <div className="ujjain-visual reveal" aria-hidden="true">🛕</div>
      </div>
    </section>
  )
}
