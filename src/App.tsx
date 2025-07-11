import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
