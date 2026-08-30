import { Info } from 'lucide-react'

export default function AdsPolicy() {
  return (
    <section className="disclaimer" id="disclaimer">
      <div className="container">
        <div className="disclaimer-inner">
          <div className="disclaimer-icon" aria-hidden="true">
            <Info size={22} />
          </div>
          <div>
            <h4>Disclaimer &amp; Ads Policy</h4>
            <p>
              Astro Shiv Shakti Ujjain offers Puja, Vedic Jyotish and Adhyatmik
              Margdarshan rooted in traditional practice. Guidance is offered in good faith
              for spiritual and informational purposes only — no results, cures or specific
              outcomes are guaranteed, and nothing shared here is a substitute for
              professional medical, legal, financial or psychological advice.
            </p>
            <p>
              In line with <strong>Meta Ads</strong> and <strong>Google Ads</strong>
              policies for spiritual and astrology services, all consultations are
              intended for users aged 18+ and are treated as strictly confidential.
              Personal information shared with us is used only to respond to your enquiry
              and is never sold or misused. Read our{' '}
              <a href="#/privacy">Privacy Policy</a>,{' '}
              <a href="#/terms">Terms &amp; Conditions</a> and{' '}
              <a href="#/refund">Refund / Cancellation Policy</a> for details.
            </p>
            <p>
              For any advertising, compliance or account-related concern, contact{' '}
              <a href="mailto:support@astroshivshaktiujjain.com">
                support@astroshivshaktiujjain.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
