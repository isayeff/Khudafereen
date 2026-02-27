import Navbar from "./components/layout/Navbar"
import Countries from "./components/sections/Countries"
import Hero from "./components/sections/Hero"
import Results from "./components/sections/Results"
import Services from "./components/sections/Services"
import Winners from "./components/sections/Winners"

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Winners />
        <Services />
        <Results />
        <Countries />
      </div>
    </>
  )
}

export default App