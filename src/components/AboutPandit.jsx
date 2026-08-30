import { Check, ArrowRight } from 'lucide-react'
import panditImg from '../assets/images/pandit-ji-yashwantji.webp'

const POINTS = [
  'Vedic education from Shri Kayavarneshwar Veda Vidya Peeth, Jhalawar (Rajasthan)',
  'Jyotish & Vastu Shastra studies at Sandipani Pratishthan, Ujjain',
  'Practices Vedic Karmakand, Falit Jyotish, Vastu and Dosh Nivaran Puja',
  'Based at Siddhavat Ghat, Ujjain — offers personal spiritual guidance'
]

export default function AboutPandit() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-portrait photo reveal">
          <img src={panditImg} alt="Pt. Yashwant Vyas — Astro Shiv Shakti Ujjain" />
        </div>
        <div className="reveal">
          <span className="eyebrow">Meet Pandit Ji</span>
          <h2>Pt. Yashwant Vyas</h2>
          <h3 className="sub">Vedic Karmakand • Jyotish • Adhyatmik Margdarshan</h3>
          <p>
            Pt. Yashwant Vyas comes from Lakhakhedi village, Garoth, Mandsaur (Madhya Pradesh)
            and was brought up within a Vedic tradition. He is based at Siddhavat Ghat, Ujjain,
            and offers Puja, Jyotish and personal spiritual guidance rooted in Shastranusar Vidhi.
          </p>
          <ul className="about-list">
            {POINTS.map((p) => (
              <li key={p}><Check size={18} /><span>{p}</span></li>
            ))}
          </ul>
          <a href="tel:+919244300875" className="btn btn-gold">
            Talk to Pandit Ji <ArrowRight size={16} />
          </a>
          <div className="approach-card">
            <h4>His Approach</h4>
            <p>
              <em>Pehle sunte hain, samajhte hain, phir sahi raasta batate hain.</em> Every
              consultation begins by listening — a suitable traditional path is suggested
              only after understanding the situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
