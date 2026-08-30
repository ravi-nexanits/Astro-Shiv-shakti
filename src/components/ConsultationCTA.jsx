import { Phone, MessageCircle } from 'lucide-react'

export default function ConsultationCTA() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div className="reveal">
          <span className="eyebrow">Speak With Pandit Ji</span>
          <h2>Pehle Baat Karein,<br />Phir Puja Karwayein.</h2>
          <p>
            Whether your concern is Mangal Dosh, Kaal Sarp, marriage, career, family or
            spiritual guidance — speak directly with Pt. Yashwant Vyas and understand your
            situation before taking the next step.
          </p>
          <div className="btns">
            <a href="tel:+919244300875" className="btn btn-primary">
              <Phone size={16} /> Call Pandit Ji
            </a>
            <a href="https://wa.me/919244300875" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="cta-illustration reveal" aria-hidden="true">🙏</div>
      </div>
    </section>
  )
}
