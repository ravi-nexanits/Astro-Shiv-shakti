import { Phone, MessageCircle, Users, Lock, BookOpen } from 'lucide-react'
import heroImg from '../assets/images/hero.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src={heroImg} alt="" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy reveal">
            <span className="eyebrow">
              <span aria-hidden="true">ॐ</span>
              <span>Ujjain • Puja • Jyotish • Adhyatmik Margdarshan</span>
            </span>
            <h1>
              Divine Guidance,<br />
              Rooted in <span className="gold">Ujjain</span>
            </h1>
            <p className="hero-tagline">Pehle Baat Karein, Phir Puja Karwayein</p>
            <p className="lead">
              Personalised Puja, Vedic Jyotish and Adhyatmik Margdarshan by Pt. Yashwant Vyas
              at Siddhavat Ghat, Ujjain. Understand your concern first — then choose the
              appropriate traditional path.
            </p>
            <div className="hero-ctas">
              <a href="tel:+919244300875" className="btn btn-primary">
                <Phone size={16} /> Call Pandit Ji
              </a>
              <a
                href="https://wa.me/919244300875"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={16} /> WhatsApp Consultation
              </a>
            </div>
            <div className="hero-badges">
              <span className="hero-badge"><Users size={16} /> Personal Consultation</span>
              <span className="hero-badge"><Lock size={16} /> Confidential Discussion</span>
              <span className="hero-badge"><BookOpen size={16} /> Shastranusar Vidhi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
