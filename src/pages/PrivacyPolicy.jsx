import LegalPage from '../components/LegalPage.jsx'

const LAST_UPDATED = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We May Collect',
    content: (
      <>
        <p>Depending on how you interact with our website and services, we may receive the following information from you:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Enquiry details</li>
          <li>Puja or consultation requirements</li>
          <li>Information voluntarily submitted through website forms</li>
          <li>Basic website usage information where applicable</li>
        </ul>
        <p>We only collect information that is reasonably necessary to respond to your enquiry or provide the service you have requested.</p>
      </>
    )
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    content: (
      <>
        <p>Information may be used for purposes such as:</p>
        <ul>
          <li>Responding to enquiries received through the website, phone or WhatsApp</li>
          <li>Providing requested consultation or service information</li>
          <li>Processing service requests and Puja arrangements</li>
          <li>Communicating about enquiries, Muhurat, Samagri or bookings</li>
          <li>Improving the website experience</li>
          <li>Maintaining website security</li>
        </ul>
      </>
    )
  },
  {
    id: 'communication-channels',
    title: 'WhatsApp, Phone & Email Communication',
    content: (
      <>
        <p>When you contact Astro Shiv Shakti Ujjain through phone, WhatsApp or email, the information you share through those channels may be used to respond to your enquiry, discuss your requirement and coordinate the service you have asked about.</p>
        <p>Please share only the information you are comfortable sharing on those channels.</p>
      </>
    )
  },
  {
    id: 'cookies',
    title: 'Cookies & Website Technologies',
    content: (
      <>
        <p>The website may use cookies or similar technologies where required for functionality, analytics or performance. Most browsers allow you to control or disable cookies through browser settings.</p>
        <p>Where third-party analytics or preference technologies are used, they help us understand aggregate usage so we can improve the site experience.</p>
      </>
    )
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    content: (
      <>
        <p>Where third-party services are used to help operate the website (such as hosting, communication or analytics), any information shared with those services is subject to their own privacy practices.</p>
        <p>We do not sell or rent personal information for third-party marketing.</p>
      </>
    )
  },
  {
    id: 'security',
    title: 'Data Security',
    content: (
      <>
        <p>We take reasonable measures to protect the information you share with us. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure, and we cannot promise absolute security.</p>
      </>
    )
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: (
      <>
        <p>Information you share may be retained for as long as reasonably necessary for the relevant enquiry, service, legal or operational purpose. When no longer required, information may be deleted or anonymised.</p>
      </>
    )
  },
  {
    id: 'your-choices',
    title: 'Your Choices',
    content: (
      <>
        <p>You may contact us regarding the personal information you have shared, or to update your communication preferences. Please write to us using the contact details at the bottom of this page.</p>
      </>
    )
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: (
      <>
        <p>The website is not specifically directed toward children. Users should not submit personal information on behalf of children without appropriate consent from a parent or guardian.</p>
      </>
    )
  },
  {
    id: 'updates',
    title: 'Policy Updates',
    content: (
      <>
        <p>This Privacy Policy may be updated from time to time. Continued use of the website after updates are posted indicates acceptance of the revised policy.</p>
      </>
    )
  }
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Astro Shiv Shakti Ujjain handles the information you share when you enquire about a Puja, consultation or spiritual guidance."
      seoTitle="Privacy Policy | Astro Shiv Shakti Ujjain"
      seoDescription="Astro Shiv Shakti Ujjain Privacy Policy — what information we may collect, how it is used and the choices available to you."
      canonicalPath="/privacy-policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          At Astro Shiv Shakti Ujjain, we respect your privacy and are committed to
          handling your personal information responsibly. This Privacy Policy explains
          what information may be collected when you interact with our website and
          services, how it may be used, and the choices available to you.
        </p>
      }
      sections={sections}
    />
  )
}
