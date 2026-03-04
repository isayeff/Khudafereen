import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import ContactForm from "./components/sections/ContactForm"
import Countries from "./components/sections/Countries"
import Faq from "./components/sections/Faq"
import Hero from "./components/sections/Hero"
import Packages from "./components/sections/Packages"
import Results from "./components/sections/Results"
import Services from "./components/sections/Services"
import Winners from "./components/sections/Winners"

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Winners />
        <Services />
        <Results />
        <Countries />
        <Packages />
        <Faq />
        <ContactForm />
        <Footer />
    </>
  )
}

export default App