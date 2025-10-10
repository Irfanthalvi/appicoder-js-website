import HeroSection from './components/sections/hero-section'
import Footer from './components/sections/footer'
import Contact from './components/sections/contact'
import AboutAndServices from './components/sections/about-and-services'
import WhyChooseUs from './components/sections/why-choose-us'
import AwardRecognition from './components/sections/award-recognition'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutAndServices />
      <WhyChooseUs />
      <AwardRecognition/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
