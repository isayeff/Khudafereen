import Navbar from "./components/layout/Navbar"
import Contact from "./components/sections/Contact"
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
        <Contact />
    </>
  )
}

export default App