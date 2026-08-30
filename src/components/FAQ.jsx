import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  { q: 'Can I speak directly with Pandit Ji?', a: 'Yes. You can reach Pt. Yashwant Vyas directly by phone or WhatsApp at +91 92443 00875 to discuss your concern.' },
  { q: 'What details are required for a Kundli consultation?', a: 'Typically your date of birth, exact time of birth and place of birth are required to prepare an accurate Janam Kundli.' },
  { q: 'Can I consult Pandit Ji before booking a Puja?', a: 'Yes — a consultation is encouraged first. Pandit Ji understands the situation and then guides you regarding the appropriate Puja or remedy.' },
  { q: 'Is online consultation available?', a: 'Yes. Jyotish consultations are available over phone or video call, and Puja can be arranged in Ujjain with video-call participation.' },
  { q: 'How does Puja booking work?', a: 'After Baat Karein → Samjhein, Pandit Ji explains Muhurat, Samagri and Vidhi. The Puja is then performed according to traditional procedure.' },
  { q: 'How much time is required for a Puja?', a: 'The duration depends on the type of Puja. Some are completed within a few hours, while larger Anushthans may span multiple days.' },
  { q: 'Can I discuss my personal concern privately?', a: 'Absolutely. Every consultation is confidential and handled with respect and discretion.' },
  { q: 'How can I make a booking?', a: 'Call or send a WhatsApp message on +91 92443 00875 to discuss the details and confirm your booking.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to common questions about consultation, Puja and guidance.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item reveal ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <ChevronDown size={20} className="chev" />
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
