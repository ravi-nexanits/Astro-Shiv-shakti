import { ArrowRight } from 'lucide-react'

export default function PujaHighlight() {
  return (
    <section className="puja-highlight">
      <div className="container puja-inner">
        <div className="puja-visual reveal" aria-hidden="true">🪔</div>
        <div className="reveal">
          <span className="eyebrow">Puja Guidance</span>
          <h2>Looking for the Right Puja?</h2>
          <p>
            Not every situation requires the same Puja. Speak with Pandit Ji to understand
            which traditional practice may be appropriate for your circumstances.
          </p>
          <a href="#contact" className="btn btn-gold">
            Discuss Your Puja Requirement <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
