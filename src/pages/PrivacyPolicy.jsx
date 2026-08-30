import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-inner">
          <a href="#/" className="page-back"><ArrowLeft size={14} /> Back to Home</a>
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: {new Date().getFullYear()}</p>

          <p>
            Astro Shiv Shakti Ujjain (“we”, “us”, “our”) respects your privacy. This
            policy explains what information we collect when you consult with Pt. Yashwant
            Vyas, book a Puja or use our website, and how that information is handled.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Contact details: name, phone number, WhatsApp number and email address.</li>
            <li>Consultation details: date, time and place of birth (for Kundli / Jyotish), and the concern you wish to discuss.</li>
            <li>Booking details: Puja selected, address (if applicable) and payment reference for confirmation only.</li>
            <li>Website usage data: basic analytics such as pages visited, device type and referrer, collected via standard cookies and third-party analytics.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiry and provide personal consultation.</li>
            <li>To perform the Puja or Anushthan you have requested and share the relevant details (Muhurat, Samagri, Vidhi).</li>
            <li>To send booking confirmations, updates and follow-up communication.</li>
            <li>To improve the website and our services.</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information. Details may be shared only with:
          </p>
          <ul>
            <li>Payment gateways or service providers strictly to process a transaction.</li>
            <li>Government or legal authorities when required by law.</li>
          </ul>

          <h2>Confidentiality</h2>
          <p>
            Personal, family and spiritual concerns shared with Pandit Ji are handled with
            respect and discretion. Consultations are treated as private conversations.
          </p>

          <h2>Cookies &amp; Analytics</h2>
          <p>
            The website may use cookies and third-party analytics (such as Google Analytics,
            Meta Pixel) to understand aggregate site usage and improve the experience. You
            can disable cookies from your browser settings.
          </p>

          <h2>Your Rights</h2>
          <ul>
            <li>Request access to the information we hold about you.</li>
            <li>Ask us to correct or delete your information.</li>
            <li>Withdraw consent for further communication at any time.</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For any privacy-related question or request, write to{' '}
            <a href="mailto:support@astroshivshaktiujjain.com">support@astroshivshaktiujjain.com</a>{' '}
            or call <a href="tel:+919244300875">+91 92443 00875</a>. Address: Siddhavat
            Ghat, Ganesh Nagar, Ujjain, Madhya Pradesh – 456003.
          </p>
        </div>
      </div>
    </section>
  )
}
