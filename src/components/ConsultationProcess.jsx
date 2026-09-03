const STEPS = [
  { n: '01', title: 'Baat Karein', text: 'Call or WhatsApp Pandit Ji and explain your concern.' },
  { n: '02', title: 'Samjhein', text: 'Pandit Ji understands the situation and guides you regarding the appropriate traditional Vedic practice.' },
  { n: '03', title: 'Tayyari', text: 'Muhurat, Samagri, Vidhi and process are explained clearly before the Puja.' },
  { n: '04', title: 'Puja Sampann', text: 'Puja is performed as per traditional procedure — participation is also possible via video call.' }
]

export default function ConsultationProcess() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Simple &amp; Clear</span>
          <h2>How Your Consultation Works</h2>
          <p>Baat Karein → Samjhein → Tayyari → Puja Sampann</p>
        </div>
        <div className="process-grid">
          {STEPS.map((s) => (
            <div className="process-step reveal" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
