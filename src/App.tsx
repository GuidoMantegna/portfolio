import "./App.css"
import { Home, Projects, About, Contact } from "./pages"
import { ProjectsSection } from "./pages/Projects-v2"
import { Layout } from "./components"
import { ParallaxBackground } from "./components/ParallaxBackground"

function App() {
  return (
      <Layout>
        <ParallaxBackground />
        <Home />
        <ProjectsSection />
        <About />
        <Contact />
      </Layout>
  )
}

export default App
