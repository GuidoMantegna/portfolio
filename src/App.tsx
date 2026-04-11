import "./App.css"
// Sections
import Home from "./pages/Home"
import { Projects } from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
// UI
import Layout from "./components/Layout"
import { ParallaxBackground } from "./components/ParallaxBackground"

function App() {
  return (
    <Layout>
      <ParallaxBackground />
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export default App
