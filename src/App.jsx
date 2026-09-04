import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeaturedServices from './components/FeaturedServices.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import ConsultationCTA from './components/ConsultationCTA.jsx'
import Services from './components/Services.jsx'
import AboutPandit from './components/AboutPandit.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import PujaHighlight from './components/PujaHighlight.jsx'
import AstrologySection from './components/AstrologySection.jsx'
import UjjainSection from './components/UjjainSection.jsx'
import ConsultationProcess from './components/ConsultationProcess.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import AdsPolicy from './components/AdsPolicy.jsx'
import Footer from './components/Footer.jsx'
import MobileStickyCTA from './components/MobileStickyCTA.jsx'
import WelcomePopup from './components/WelcomePopup.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
import MangalDoshPuja from './pages/MangalDoshPuja.jsx'
import KaalSarpDoshPuja from './pages/KaalSarpDoshPuja.jsx'
import Contact from './pages/Contact.jsx'
import PujaBooking from './pages/PujaBooking.jsx'
import ShivShaktiPooja from './pages/ShivShaktiPooja.jsx'

function getRoute() {
  const path = (window.location.pathname || '/').replace(/\/+$/, '') || '/'
  if (path === '/mangal-dosh-puja') return 'mangal-dosh-puja'
  if (path === '/kaal-sarp-dosh-puja') return 'kaal-sarp-dosh-puja'
  if (path === '/contact') return 'contact'
  if (path === '/puja-booking') return 'puja-booking'
  if (path === '/shiv-shakti-pooja') return 'shiv-shakti-pooja'
  if (path === '/privacy-policy') return 'privacy'
  if (path === '/terms-conditions') return 'terms'
  if (path === '/refund-cancellation') return 'refund'
  const h = window.location.hash || ''
  if (h.startsWith('#/privacy')) return 'privacy'
  if (h.startsWith('#/terms')) return 'terms'
  if (h.startsWith('#/refund')) return 'refund'
  if (h.startsWith('#/mangal-dosh-puja')) return 'mangal-dosh-puja'
  if (h.startsWith('#/kaal-sarp-dosh-puja')) return 'kaal-sarp-dosh-puja'
  if (h.startsWith('#/contact')) return 'contact'
  if (h.startsWith('#/puja-booking')) return 'puja-booking'
  if (h.startsWith('#/shiv-shakti-pooja')) return 'shiv-shakti-pooja'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onRoute = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onRoute)
    window.addEventListener('popstate', onRoute)
    return () => {
      window.removeEventListener('hashchange', onRoute)
      window.removeEventListener('popstate', onRoute)
    }
  }, [])

  // GTM: push a virtual page-view every time the SPA route changes.
  // The initial gtm.js load fires the first page-view; this handles subsequent nav.
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'route_change',
      page_path: window.location.pathname + window.location.hash,
      page_title: document.title,
      page_route: route
    })
  }, [route])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight * 0.9) el.classList.add('is-visible')
      })
    }, 150)
    return () => { observer.disconnect(); clearTimeout(t) }
  }, [route])

  return (
    <>
      <Header />
      <main key={route} className="page-anim">
        {route === 'home' && (
          <>
            <Hero />
            <FeaturedServices />
            <TrustStrip />
            <ConsultationCTA />
            <Services />
            <AboutPandit />
            <WhyChooseUs />
            <PujaHighlight />
            <AstrologySection />
            <UjjainSection />
            <ConsultationProcess />
            <Gallery />
            <Testimonials />
            <FAQ />
            <FinalCTA />
            <AdsPolicy />
          </>
        )}
        {route === 'privacy' && <PrivacyPolicy />}
        {route === 'terms' && <TermsConditions />}
        {route === 'refund' && <RefundPolicy />}
        {route === 'mangal-dosh-puja' && <MangalDoshPuja />}
        {route === 'kaal-sarp-dosh-puja' && <KaalSarpDoshPuja />}
        {route === 'contact' && <Contact />}
        {route === 'puja-booking' && <PujaBooking />}
        {route === 'shiv-shakti-pooja' && <ShivShaktiPooja />}
      </main>
      <Footer />
      {route !== 'contact' && route !== 'puja-booking' && route !== 'shiv-shakti-pooja' && <MobileStickyCTA />}
      {route === 'home' && <WelcomePopup />}
      <div id="google_translate_element" aria-hidden="true" />
    </>
  )
}
