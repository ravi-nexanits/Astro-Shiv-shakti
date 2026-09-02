import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, List } from 'lucide-react'

const PHONE_DISPLAY = '+91 92443 00875'
const EMAIL = 'vyasyasvant4070@gmail.com'

function useSeoAndScroll({ title, description, canonicalPath }) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://astroshivshaktiujjain.com${canonicalPath}`)

    return () => {
      document.title = prevTitle
      if (prevDesc && meta) meta.setAttribute('content', prevDesc)
    }
  }, [title, description, canonicalPath])
}

function TocDesktop({ sections, activeId }) {
  return (
    <nav className="legal-toc" aria-label="On this page">
      <div className="legal-toc-title">On This Page</div>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={activeId === s.id ? 'is-active' : ''}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(s.id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function TocMobile({ sections }) {
  return (
    <details className="legal-toc-mobile">
      <summary>
        <span><List size={16} /> On This Page</span>
      </summary>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(s.id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                // Close the details after clicking
                e.currentTarget.closest('details')?.removeAttribute('open')
              }}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  )
}

export default function LegalPage({
  title,
  eyebrow = 'Astro Shiv Shakti Ujjain',
  description,
  seoTitle,
  seoDescription,
  canonicalPath,
  lastUpdated,
  intro,
  sections
}) {
  useSeoAndScroll({ title: seoTitle, description: seoDescription, canonicalPath })
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [sections])

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {lastUpdated && <p className="legal-updated">Last Updated: {lastUpdated}</p>}
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-layout">
          <aside className="legal-aside">
            <TocDesktop sections={sections} activeId={activeId} />
          </aside>

          <div className="legal-content">
            <TocMobile sections={sections} />

            {intro && <div className="legal-intro">{intro}</div>}

            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal-section">
                <h2>
                  <span className="legal-section-num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                <div className="legal-section-body">{s.content}</div>
              </section>
            ))}

            <div className="legal-contact-card">
              <h3>Contact Us</h3>
              <ul>
                <li><Phone size={16} /> <a href={`tel:+919244300875`}>{PHONE_DISPLAY}</a></li>
                <li><Mail size={16} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><MapPin size={16} /> <span>Siddhavat Ghat, Ganesh Nagar,<br />Ujjain, Madhya Pradesh – 456003</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
