import LegalPage from '../components/LegalPage.jsx'

const LAST_UPDATED = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

const sections = [
  {
    id: 'about-services',
    title: 'About Our Services',
    content: (
      <>
        <p>Astro Shiv Shakti Ujjain provides information and traditional spiritual services, including:</p>
        <ul>
          <li>Puja &amp; Anushthan</li>
          <li>Havan</li>
          <li>Mantra Jaap</li>
          <li>Jyotish consultation</li>
          <li>Vastu guidance</li>
          <li>Personal spiritual guidance</li>
        </ul>
      </>
    )
  },
  {
    id: 'enquiries',
    title: 'Enquiries & Bookings',
    content: (
      <>
        <ul>
          <li>Website enquiries are requests for information or a service.</li>
          <li>Submission of an enquiry does not automatically mean a booking is confirmed.</li>
          <li>A booking is confirmed only after direct confirmation from Astro Shiv Shakti Ujjain.</li>
          <li>Date, time, Puja type and other details should be confirmed with us before the service.</li>
        </ul>
      </>
    )
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    content: (
      <>
        <p>Please provide accurate:</p>
        <ul>
          <li>Name</li>
          <li>Contact information (phone, WhatsApp, email)</li>
          <li>Relevant Puja or service details</li>
          <li>Date, time and location information where required</li>
        </ul>
        <p>Incorrect details may affect the appropriateness of the guidance or the arrangement of the Puja.</p>
      </>
    )
  },
  {
    id: 'spiritual-services',
    title: 'Puja & Spiritual Services',
    content: (
      <>
        <p>Our services are based on traditional religious, spiritual and cultural practices. They are offered in good faith according to those traditions.</p>
        <p>We do not claim any guaranteed outcomes from Puja, Havan or spiritual guidance.</p>
      </>
    )
  },
  {
    id: 'astrology-disclaimer',
    title: 'Astrology & Spiritual Guidance Disclaimer',
    content: (
      <>
        <p>Astrology, spiritual guidance and traditional rituals are offered according to traditional practices. They should not be treated as a guarantee of any specific outcome.</p>
        <p>These services are not medical, financial, legal or scientific advice, and should not be relied upon as a substitute for qualified professional advice.</p>
      </>
    )
  },
  {
    id: 'availability',
    title: 'Service Availability',
    content: (
      <>
        <p>The availability of a specific service may depend on:</p>
        <ul>
          <li>Pandit Ji's availability</li>
          <li>Selection of an appropriate Muhurat</li>
          <li>Puja requirements and Samagri</li>
          <li>Your location</li>
          <li>Other practical considerations</li>
        </ul>
      </>
    )
  },
  {
    id: 'online-participation',
    title: 'Online Participation',
    content: (
      <>
        <p>Where online or video-call participation is offered for a Puja, availability and technical requirements may vary. Please confirm what applies to your specific Puja before booking.</p>
      </>
    )
  },
  {
    id: 'pricing',
    title: 'Pricing & Payments',
    content: (
      <>
        <p>Applicable charges, Dakshina, Samagri costs and payment arrangements are communicated before a booking is confirmed.</p>
        <p>Payments are collected through the mode agreed at the time of booking.</p>
      </>
    )
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <>
        <p>Website content, branding, logos, images, graphics and original written material may not be copied, reproduced or reused without prior written permission from Astro Shiv Shakti Ujjain, except where permitted by applicable law.</p>
      </>
    )
  },
  {
    id: 'website-availability',
    title: 'Website Availability',
    content: (
      <>
        <p>We do not guarantee that the website will always be uninterrupted, error-free or available at all times. Access may be affected by hosting, maintenance or other technical factors.</p>
      </>
    )
  },
  {
    id: 'external-links',
    title: 'External Links & Third-Party Services',
    content: (
      <>
        <p>If the website links to third-party services or platforms (for example, WhatsApp, maps, payment providers), users may also be subject to the terms and policies of those third parties.</p>
      </>
    )
  },
  {
    id: 'limitation',
    title: 'Limitation of Responsibility',
    content: (
      <>
        <p>To the extent permitted by applicable law, Astro Shiv Shakti Ujjain and Pt. Yashwant Vyas are not responsible for indirect or consequential loss arising from use of the website or reliance on the guidance provided.</p>
      </>
    )
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: (
      <>
        <p>These Terms &amp; Conditions may be updated from time to time. Continued use of the website after any update indicates acceptance of the revised terms.</p>
      </>
    )
  }
]

export default function TermsConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Please read these terms carefully before submitting an enquiry or requesting a Puja or consultation from Astro Shiv Shakti Ujjain."
      seoTitle="Terms & Conditions | Astro Shiv Shakti Ujjain"
      seoDescription="Terms & Conditions for using the Astro Shiv Shakti Ujjain website and enquiring about Puja, Jyotish or spiritual guidance services."
      canonicalPath="/terms-conditions"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          By accessing or using the Astro Shiv Shakti Ujjain website or enquiring about
          our services, you agree to the terms described below. Please read them carefully
          before submitting an enquiry or requesting a service.
        </p>
      }
      sections={sections}
    />
  )
}
