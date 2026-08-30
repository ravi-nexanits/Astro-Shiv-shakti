const T = [
  {
    initial: 'R',
    name: 'Rajesh Sharma',
    place: 'Mumbai, Maharashtra',
    quote: 'Pandit Ji patiently listened to our concern before suggesting the appropriate Puja. The whole process felt very traditional and respectful.'
  },
  {
    initial: 'P',
    name: 'Priya Patel',
    place: 'Ahmedabad, Gujarat',
    quote: 'The Kundli consultation was detailed and honest. I appreciated that no exaggerated promises were made — just clear guidance.'
  },
  {
    initial: 'A',
    name: 'Amit Verma',
    place: 'Delhi, NCR',
    quote: 'We arranged a Puja through Astro Shiv Shakti Ujjain and the entire experience was calm, personal and rooted in tradition.'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow dark">In Their Words</span>
          <h2>Experiences Shared With Us</h2>
          <p>A few kind words from those we have had the privilege to guide.</p>
        </div>
        <div className="testimonials-grid">
          {T.map((t, i) => (
            <div key={i} className="testimonial-card reveal">
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-meta">
                <div className="testimonial-avatar">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-place">{t.place}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
