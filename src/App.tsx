import "./App.css"
import { Home, Projects, About, Contact } from "./pages"
import { Layout } from "./components"
// import Projects from "./pages/Projects"

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default App
