import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
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
      </div>
    </>
  )
}

export default App