import "./App.css"
import { Home, Projects, About, Contact } from "./pages"
import { Layout } from "./components"

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
