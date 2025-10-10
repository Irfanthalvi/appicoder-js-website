import './App.css'
import HeroSection from './components/sections/hero-section'
import Footer from './components/sections/footer'
import Contact from './components/sections/contact'
import AboutAndServices from './components/sections/about-and-services'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutAndServices/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
