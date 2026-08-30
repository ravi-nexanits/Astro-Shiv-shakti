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

function getRoute() {
  const h = window.location.hash || ''
  if (h.startsWith('#/privacy')) return 'privacy'
  if (h.startsWith('#/terms')) return 'terms'
  if (h.startsWith('#/refund')) return 'refund'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

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
      <main>
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
      </main>
      <Footer />
      <MobileStickyCTA />
      {route === 'home' && <WelcomePopup />}
      <div id="google_translate_element" aria-hidden="true" />
    </>
  )
}
