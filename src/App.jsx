import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Venues from "./components/Venues"
import Gallery from "./components/Gallery"
import Packages from "./components/Packages"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">

      <Navbar />
      <Hero />
      <Services />
      <Venues />
      <Gallery />
      <Packages />
      <Testimonials />
      <CTA />
      <Footer />

    </div>
  )
}