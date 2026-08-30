import { ArrowLeft } from 'lucide-react'

export default function TermsConditions() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-inner">
          <a href="#/" className="page-back"><ArrowLeft size={14} /> Back to Home</a>
          <span className="eyebrow">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p className="updated">Last updated: {new Date().getFullYear()}</p>

          <p>
            These Terms &amp; Conditions govern your use of the Astro Shiv Shakti Ujjain
            website and any consultation, Puja or service arranged through us. By using
            the site or engaging our services, you agree to these terms.
          </p>

          <h2>Nature of Services</h2>
          <ul>
            <li>We offer Puja, Anushthan, Vedic Jyotish and personal Adhyatmik Margdarshan following traditional Shastranusar Vidhi.</li>
            <li>All guidance is offered in good faith for spiritual and informational purposes only. No specific outcome, result, cure or event is promised or guaranteed.</li>
            <li>Our services are not a substitute for professional medical, legal, psychological or financial advice.</li>
          </ul>

          <h2>Eligibility</h2>
          <p>Consultations and bookings are intended for users aged 18 years or above.</p>

          <h2>Bookings &amp; Communication</h2>
          <ul>
            <li>Bookings are confirmed only after direct discussion with Pandit Ji and mutual agreement on Puja details, Muhurat and Dakshina.</li>
            <li>You are responsible for providing accurate details (name, date/time/place of birth, contact information). Incorrect details may affect the Puja or Kundli reading.</li>
            <li>All communication over phone, WhatsApp, email or video call is intended solely for the person who initiated it.</li>
          </ul>

          <h2>Payments</h2>
          <ul>
            <li>Dakshina, Puja Samagri costs and any related charges will be communicated in advance.</li>
            <li>Payments are collected through the mode agreed at the time of booking.</li>
          </ul>

          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site or our services for any unlawful, misleading or harmful purpose.</li>
            <li>Record or publicly share private consultations without written consent.</li>
            <li>Attempt to disrupt the website’s operation or security.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logo, brand elements and
            layouts — belongs to Astro Shiv Shakti Ujjain and may not be reproduced without
            prior written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Astro Shiv Shakti Ujjain and Pt.
            Yashwant Vyas are not liable for any indirect, incidental or consequential loss
            arising from use of the website or reliance on the guidance provided.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time. Continued use of
            the website after changes are posted constitutes acceptance of the revised terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any dispute will be subject to
            the exclusive jurisdiction of the courts at Ujjain, Madhya Pradesh.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Write to{' '}
            <a href="mailto:support@astroshivshaktiujjain.com">support@astroshivshaktiujjain.com</a>{' '}
            or call <a href="tel:+919244300875">+91 92443 00875</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
