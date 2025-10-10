import HeroSection from './components/sections/hero-section'
import Footer from './components/sections/footer'
import Contact from './components/sections/contact'
import AboutAndServices from './components/sections/about-and-services'
import WhyChooseUs from './components/sections/why-choose-us'
import AwardRecognition from './components/sections/award-recognition'
import Products from './components/sections/products'
import Technology from './components/sections/technology'
import Industries from './components/sections/industries'
import TestimonialSection from './components/sections/testimonial-section'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutAndServices />
      <WhyChooseUs />
      <TestimonialSection/>
      <Industries/>
      <Technology/>
      <Products/>
      <AwardRecognition/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
