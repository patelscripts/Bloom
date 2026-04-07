// src/pages/Home.jsx
// Assembles every section of the landing page in order

import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import SectionOne   from '../components/SectionOne'
import SectionTwo   from '../components/SectionTwo'
import Services     from '../components/Services'
import Testimonials from '../components/Testimonials'
import Newsletter   from '../components/Newsletter'
import Footer       from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <Navbar />
      <main>
        <Hero />
        <SectionOne />
        <SectionTwo />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home
