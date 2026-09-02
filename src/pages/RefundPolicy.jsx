import LegalPage from '../components/LegalPage.jsx'

const LAST_UPDATED = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <>
        <p>Cancellation and refund requests are handled according to the nature of the service you have booked and the status of the booking at the time of your request.</p>
        <p>The intent of this policy is to be fair to devotees while also acknowledging that spiritual services involve preparation, Sankalp and Vidhi that begin before the Puja is performed.</p>
      </>
    )
  },
  {
    id: 'before-confirmation',
    title: 'Cancellation Before Confirmation',
    content: (
      <>
        <p>An enquiry is not a confirmed booking until Astro Shiv Shakti Ujjain confirms it with you. You may withdraw an enquiry at any time before confirmation by contacting us — there is nothing to cancel because the booking has not yet been finalised.</p>
      </>
    )
  },
  {
    id: 'after-confirmation',
    title: 'Cancellation After Confirmation',
    content: (
      <>
        <p>If you need to cancel or reschedule after a booking has been confirmed, please contact Astro Shiv Shakti Ujjain as soon as possible.</p>
        <p>Final eligibility for a refund or reschedule depends on the booking and service terms communicated to you at the time of confirmation, and on how much preparation has already been undertaken.</p>
      </>
    )
  },
  {
    id: 'rescheduling',
    title: 'Rescheduling',
    content: (
      <>
        <p>Rescheduling may be possible depending on:</p>
        <ul>
          <li>Pandit Ji's availability</li>
          <li>An appropriate Muhurat for the new date</li>
          <li>Puja requirements and Samagri arrangements</li>
          <li>Your location</li>
          <li>The notice you provide before the original date</li>
        </ul>
      </>
    )
  },
  {
    id: 'already-performed',
    title: 'Puja Already Performed',
    content: (
      <>
        <p>Once a Puja or spiritual service has already been performed, cancellation or refund treatment may differ because the service has already been delivered. Any consideration in such cases will be discussed on a case-by-case basis.</p>
      </>
    )
  },
  {
    id: 'non-refundable',
    title: 'Non-Refundable Situations',
    content: (
      <>
        <p>Any non-refundable portion of a service — for example, Samagri already procured on your behalf or preparation that has already begun — will be communicated to you before your booking is confirmed.</p>
        <p>You will always know what applies to your specific booking before you commit to it.</p>
      </>
    )
  },
  {
    id: 'processing',
    title: 'Refund Processing',
    content: (
      <>
        <p>If a refund is approved, it will be processed using the applicable payment method or process communicated to you by Astro Shiv Shakti Ujjain.</p>
        <p>Processing timelines depend on the payment method used and the relevant payment provider.</p>
      </>
    )
  },
  {
    id: 'special-circumstances',
    title: 'Special Circumstances',
    content: (
      <>
        <p>We understand that unforeseen circumstances can arise. If you are dealing with an exceptional situation — bereavement, medical emergency, force majeure or something similar — please contact us and we will do our best to help within what is reasonably possible.</p>
      </>
    )
  },
  {
    id: 'how-to-request',
    title: 'How to Request a Cancellation or Refund',
    content: (
      <>
        <p>Please contact us using the details below. When you write to us, please include:</p>
        <ul>
          <li>Your full name</li>
          <li>Phone number used for the enquiry / booking</li>
          <li>Booking or service details (Puja type, date, mode)</li>
          <li>Date of the service (scheduled or performed)</li>
          <li>Reason for the cancellation or refund request</li>
        </ul>
        <p>Providing these details in your first message helps us respond faster.</p>
      </>
    )
  },
  {
    id: 'updates',
    title: 'Policy Updates',
    content: (
      <>
        <p>This Refund / Cancellation Policy may be updated from time to time. Any updates will be reflected on this page.</p>
      </>
    )
  }
]

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund / Cancellation Policy"
      description="How cancellation and refund requests are handled for Puja, consultation and spiritual services booked through Astro Shiv Shakti Ujjain."
      seoTitle="Refund / Cancellation Policy | Astro Shiv Shakti Ujjain"
      seoDescription="Cancellation and refund policy for Astro Shiv Shakti Ujjain — how to request, what may apply and how to reach us."
      canonicalPath="/refund-cancellation"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Astro Shiv Shakti Ujjain wants every devotee to feel comfortable before,
          during and after a Puja or consultation. This policy explains how
          cancellation and refund requests are handled, and how to reach us if you
          need to change or cancel a booking.
        </p>
      }
      sections={sections}
    />
  )
}
