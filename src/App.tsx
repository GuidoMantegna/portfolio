import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import { ProjectsSection } from "./pages/Projects-v2"
import Layout from "./components/Layout"
import { ParallaxBackground } from "./components/ParallaxBackground"

function App() {
  return (
    <Layout>
      <ParallaxBackground />
      <Home />
      <ProjectsSection />
      <About />
    </Layout>
  )
}

export default App
