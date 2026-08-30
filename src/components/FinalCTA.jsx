import { Phone, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact">
      <div className="container reveal">
        <span className="eyebrow">Get In Touch</span>
        <h2>Koi bhi sawaal ho —<br />pehle Pandit Ji se baat karein.</h2>
        <p style={{ maxWidth: 640, margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>
          You don’t have to decide everything immediately. Share your concern with Pandit Ji
          and understand the appropriate next step.
        </p>
        <div className="btns">
          <a href="tel:+919244300875" className="btn btn-primary">
            <Phone size={16} /> +91 92443 00875
          </a>
          <a href="https://wa.me/919244300875" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <MessageCircle size={16} /> WhatsApp Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
