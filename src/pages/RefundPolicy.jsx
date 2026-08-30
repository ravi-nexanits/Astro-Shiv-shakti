import { ArrowLeft } from 'lucide-react'

export default function RefundPolicy() {
  return (
    <section className="page">
      <div className="container">
        <div className="page-inner">
          <a href="#/" className="page-back"><ArrowLeft size={14} /> Back to Home</a>
          <span className="eyebrow">Legal</span>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p className="updated">Last updated: {new Date().getFullYear()}</p>

          <p>
            We want every devotee to feel comfortable before, during and after a Puja or
            consultation. This policy explains when cancellations and refunds are possible.
          </p>

          <h2>Consultation Fees</h2>
          <ul>
            <li>Consultation fees (phone or video-call Jyotish sessions) are non-refundable once the session has been conducted.</li>
            <li>If a scheduled consultation is not held due to Pandit Ji’s unavailability, it will be rescheduled at the earliest mutually convenient time or refunded in full.</li>
          </ul>

          <h2>Puja Bookings — Cancellation by You</h2>
          <ul>
            <li><strong>More than 72 hours before the Muhurat:</strong> full refund, minus any Samagri already procured on your behalf.</li>
            <li><strong>Between 24–72 hours before the Muhurat:</strong> 50% refund; the remaining amount covers Samagri arrangements and preparation.</li>
            <li><strong>Within 24 hours of the Muhurat, or after the Puja has begun:</strong> no refund, as Samagri, arrangements and Sankalp have already been undertaken.</li>
          </ul>

          <h2>Puja Bookings — Cancellation by Us</h2>
          <p>
            In the rare event that we are unable to perform a Puja on the scheduled Muhurat
            (due to unforeseen circumstances, illness or force majeure), we will offer:
          </p>
          <ul>
            <li>A rescheduled Muhurat at no additional cost, or</li>
            <li>A full refund of the amount paid.</li>
          </ul>

          <h2>Non-Refundable Situations</h2>
          <ul>
            <li>Change of mind after the Puja has been performed.</li>
            <li>Dissatisfaction based on outcomes — as clearly stated in our Terms, no results, cures or specific outcomes are guaranteed.</li>
            <li>Incorrect personal details (name, date/time/place of birth) provided by the user leading to a mismatched reading or Puja.</li>
          </ul>

          <h2>How to Request a Refund</h2>
          <ol>
            <li>Write to <a href="mailto:support@astroshivshaktiujjain.com">support@astroshivshaktiujjain.com</a> with your booking reference, name and reason.</li>
            <li>We will acknowledge your request within 2 working days.</li>
            <li>Approved refunds are processed to the original payment method within 7–10 working days.</li>
          </ol>

          <h2>Contact</h2>
          <p>
            For any refund or cancellation question, reach us at{' '}
            <a href="mailto:support@astroshivshaktiujjain.com">support@astroshivshaktiujjain.com</a>{' '}
            or on WhatsApp / Call <a href="tel:+919244300875">+91 92443 00875</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
