import { ShieldCheck, Mail } from 'lucide-react'

export default function AdsPolicy() {
  return (
    <section className="disclaimer" id="disclaimer">
      <div className="container">
        <div className="disclaimer-head reveal">
          <span className="eyebrow dark">Transparency</span>
          <h2>Disclaimer &amp; Ads Policy</h2>
          <p>
            A clear note on the nature of our services and how we comply with major
            advertising platforms.
          </p>
        </div>

        <div className="disclaimer-card reveal">
          <div className="disclaimer-card-top">
            <div className="disclaimer-badge" aria-hidden="true">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong>Please Read Before Booking a Consultation</strong>
              <span>Astro Shiv Shakti Ujjain — Puja • Jyotish • Adhyatmik Margdarshan</span>
            </div>
          </div>

          <div className="disclaimer-body">
            <div className="disclaimer-block">
              <h4>01 · Nature of Our Services</h4>
              <h3>Traditional Guidance, Offered in Good Faith</h3>
              <p>
                Astro Shiv Shakti Ujjain offers Puja, Vedic Jyotish and Adhyatmik
                Margdarshan rooted in traditional Shastranusar Vidhi. All guidance is
                shared for spiritual and informational purposes only.
              </p>
              <p>
                No result, cure, remedy or specific outcome is promised or guaranteed.
                Our services are not a substitute for professional medical, legal,
                financial or psychological advice.
              </p>
            </div>

            <div className="disclaimer-block">
              <h4>02 · Meta &amp; Google Ads Compliance</h4>
              <h3>Aligned With Platform Policies</h3>
              <p>
                In line with <strong>Meta Ads</strong> and <strong>Google Ads</strong>
                policies for spiritual and astrology services, all our consultations are
                intended for users aged <strong>18 years and above</strong>.
              </p>
              <p>
                We do not run ad campaigns that promise miracle solutions, guaranteed
                results, fear-based outcomes or claims of medical, legal or financial
                benefit — as required by both platforms.
              </p>
            </div>

            <div className="disclaimer-block">
              <h4>03 · Privacy &amp; Confidentiality</h4>
              <h3>Your Information Stays With Us</h3>
              <p>
                Personal information shared with us — name, contact details, date/time/place
                of birth or the concern being discussed — is used only to respond to your
                enquiry and perform the Puja or consultation you have requested.
              </p>
              <p>
                Your data is never sold, rented or shared for third-party marketing.
                Read our <a href="#/privacy">Privacy Policy</a>,{' '}
                <a href="#/terms">Terms &amp; Conditions</a> and{' '}
                <a href="#/refund">Refund / Cancellation Policy</a> for full details.
              </p>
            </div>
          </div>

          <div className="disclaimer-contact">
            <Mail size={18} />
            <span>
              For any advertising, compliance or account-related concern, contact{' '}
              <a href="mailto:support@astroshivshaktiujjain.com">
                support@astroshivshaktiujjain.com
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
