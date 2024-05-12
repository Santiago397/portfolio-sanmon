import Greeting from "./components/greeting/Greeting"
import Navbar from "./components/navbar/Navbar"
import './App.css'
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"

const App = () => {
  return (
    <>
      <section className="flexCenter innerWidth app">
        <Navbar />
        <Greeting />
        <About />
        <Experience />
        <Projects />
      </section>
    </>
  )
}

export default App
