import "./App.css"
import { Home, Projects, About, Contact } from "./pages"
import { Layout } from "./components"
import { ParallaxBackground } from "./components/ParallaxBackground"

function App() {
  return (
      <Layout>
        <Home />
        {/* <div className="relative"> */}
        <ParallaxBackground />

        {/* </div> */}
        <Projects />
        <About />
        <Contact />
      </Layout>
  )
}

export default App
