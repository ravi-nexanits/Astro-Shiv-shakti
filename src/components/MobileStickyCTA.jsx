import { Phone, MessageCircle } from 'lucide-react'

export default function MobileStickyCTA() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Contact">
      <a href="tel:+919244300875" className="call">
        <Phone size={18} /> Call Pandit Ji
      </a>
      <a href="https://wa.me/919244300875" target="_blank" rel="noreferrer" className="wa">
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  )
}
