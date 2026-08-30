import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: 14 }}>
              <span className="logo-mark">ॐ</span>
              <span className="logo-text">
                <span className="logo-title">Astro Shiv Shakti</span>
                <span className="logo-sub">Ujjain</span>
              </span>
            </div>
            <p>Puja &nbsp;|&nbsp; Jyotish &nbsp;|&nbsp; Adhyatmik Margdarshan</p>
            <p style={{ marginTop: 10 }}>
              Pt. Yashwant Vyas — Siddhavat Ghat, Ujjain. Personalised Vedic guidance
              rooted in Shastranusar Vidhi.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Pandit Ji</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Puja Services</h4>
            <ul className="footer-list">
              <li><a href="#services">Mangal Dosh / Bhat Puja</a></li>
              <li><a href="#services">Kaal Sarp Dosh Puja</a></li>
              <li><a href="#services">Rudrabhishek</a></li>
              <li><a href="#services">Mahamrityunjay Puja</a></li>
              <li><a href="#services">Kumbh &amp; Ark Vivah</a></li>
            </ul>
          </div>

          <div>
            <h4>Astrology</h4>
            <ul className="footer-list">
              <li><a href="#astrology">Lagan / Janam Kundli</a></li>
              <li><a href="#astrology">Falit Jyotish</a></li>
              <li><a href="#astrology">Hast Rekha</a></li>
              <li><a href="#astrology">Ratna Jyotish</a></li>
              <li><a href="#astrology">Kundli Milan</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><Phone size={16} /> <a href="tel:+919244300875">+91 92443 00875</a></li>
              <li><MessageCircle size={16} /> <a href="https://wa.me/919244300875">WhatsApp</a></li>
              <li><Mail size={16} /> <a href="mailto:support@astroshivshaktiujjain.com">support@astroshivshaktiujjain.com</a></li>
              <li><MapPin size={16} /> <span>Siddhavat Ghat, Ganesh Nagar,<br />Ujjain, Madhya Pradesh – 456003</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Astro Shiv Shakti Ujjain. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <a href="#/privacy">Privacy Policy</a>
            <a href="#/terms">Terms &amp; Conditions</a>
            <a href="#/refund">Refund / Cancellation</a>
          </div>
          <div className="social-list">
            <a href="#" aria-label="Facebook" className="fb"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="ig"><Instagram size={16} /></a>
            <a href="#" aria-label="YouTube" className="yt"><Youtube size={16} /></a>
            <a href="https://wa.me/919244300875" aria-label="WhatsApp" className="wa"><MessageCircle size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
