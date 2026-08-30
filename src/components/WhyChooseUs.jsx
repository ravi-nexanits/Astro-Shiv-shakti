const REASONS = [
  { n: '01', title: 'Listen First', text: 'Understand the concern before recommending anything.' },
  { n: '02', title: 'Traditional Vidhi', text: 'Follow appropriate traditional practices.' },
  { n: '03', title: 'Personal Guidance', text: 'Advice is based on the individual’s situation.' },
  { n: '04', title: 'Transparent Process', text: 'Explain the purpose and process clearly.' },
  { n: '05', title: 'Ujjain Connection', text: 'Rooted in the spiritual heritage of Ujjain.' },
  { n: '06', title: 'Respect & Privacy', text: 'Handle personal matters with discretion.' }
]

export default function WhyChooseUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">Why Us</span>
          <h2>Why People Trust Us</h2>
          <p>A calm, respectful and traditional approach to spiritual guidance.</p>
        </div>
        <div className="why-grid">
          {REASONS.map((r) => (
            <div className="why-item reveal" key={r.n}>
              <div className="why-num">{r.n}</div>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
